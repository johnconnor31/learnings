import React from 'react';

const themes = {
    dark: {
        backgroundColor: 'white',
        color: 'black'
    },
    light: {
        backgroundColor: 'black',
        color: 'white'
    }
}
const ThemeContext = React.createContext();
export default function App(){
    const [theme, changeTheme] = React.useState('dark');
    function themeChangeEvent(){
        changeTheme(current => current === 'dark' ? 'light': 'dark');
    }
    return (
        <ThemeContext.Provider value={themes[theme]}>
            <MyButton onChange={themeChangeEvent} />
        </ThemeContext.Provider>
    );
}

function MyButton(props){
    const currentTheme = React.useContext(ThemeContext);
    React.useLayoutEffect( () => {
    document.body.style = 'background:'+currentTheme.color;
    }, [currentTheme.color]);
    return (
        <button style={{backgroundColor: currentTheme.backgroundColor, color: currentTheme.color}} onClick={props.onChange}>
            Change me
        </button>
    );
}