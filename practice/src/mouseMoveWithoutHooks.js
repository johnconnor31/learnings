import React from 'react';

class MouseMove extends React.Component {
    state = {};
    handleMove = ({clientX, clientY}) => {
        this.setState({
            x: clientX,
            y: clientY
        });
    }
    componentDidMount() {
        console.log('component mounted');
        window.addEventListener('mousemove', this.handleMove);
    }
    render(){
        const {x, y} = this.state;
        return <div> current position is {x}, {y} </div>;
    }
}

export default MouseMove;