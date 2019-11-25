export default function fakeApi() {
    const userPromise = getUserName();
    const userDetailPromise = getUserDetails();
    return ({
        userName: wrapPromise(userPromise),
        userDetails: wrapPromise(userDetailPromise)
    });
}

function wrapPromise(promise) {
    let status = "pending";
    let result;
    let suspender = promise.then(
      r => {
          result = r;
        status = "success";
      },
      e => {
          result = e;
        status = "error";
      }
    );
    return {
      read() {
        console.log('resolve', result);
        if (status === "pending") {
          throw suspender;
        } else if (status === "success") {
          return result;
        } else if(status === "error") {
          throw result;
        }
      }
    };
  }
  
function getUserName() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: 'Sairam'
            });
        }, 1000);
    } );
}

function getUserDetails() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                details: [{
                name: 'ramya',
                status: 'wife'
            },
        {
            name: 'react',
            status: 'job'
        }]});
        }, 5000);
    });
}