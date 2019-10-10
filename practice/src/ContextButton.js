import React, { createContext } from 'react';
const themes = {
    light: {
        background: 'white',
        foreground: 'black'
    },
    dark: {
        background: 'black',
        foreground: 'white'
    }
};
function useThemeContext () {
    return createContext(themes.dark);
}
const MyContext = useThemeContext();

export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            theme: 'light'
        };
    }
    render() {
        return (
        <MyContext.Provider value={themes[this.state.theme]}>
            <MyContext.Consumer>
            {value =>
            <MyButton context={value} onChange={() => this.setState({
            theme: this.state.theme === 'light' ? 'dark': 'light'
        })} />}
        </MyContext.Consumer>
        </MyContext.Provider>);
    }
}



function MyButton(props) {
    return (
        <div>
            <button style={{backgroundColor: props.context.background}} onClick={props.onChange}> Change me</button>
        </div>
    );
}