import React , { useState, useLayoutEffect } from 'react';
import './index.css';

function App() {
    const [modalOpen, handleModal] = useState(false);
    return (
        <div>
        <button onClick={() => handleModal(true)}>Click me to open</button>
        <Content /> 
        {modalOpen && <Modal onClose={() =>handleModal(false)} />}
        </div>
    );
}

function Content(){
    const arr = new Array(20).fill(0);
    return (
        <div>
            {arr.map((key,i) => <img key={i} style={{width:'100%'}} src={`https://source.unsplash.com/random/800x200?cat`} alt='abc' />)}
        </div>
    );
}

function Modal({ onClose }){
    useLockBodyScroll();
    return (
    <div style={{
        position: 'fixed',
        height:'100%',
        width: '100%',
        bottom:0
    }}>
    <div style={{
            top: '45%',
            width: '400px',
            height: '100px',
            left: '40%',
            position: 'absolute',
            textAlign: 'center',
            backgroundColor: 'white'
        }} onClick={onClose}>
    Open me 
    </div>
    </div>

    );
}

function useLockBodyScroll() {

    useLayoutEffect(() => {
  
     // Get original body overflow
  
     const originalStyle = window.getComputedStyle(document.body).overflow;  
        console.log('original style', originalStyle);
     // Prevent scrolling on mount
  
     document.body.style.overflow = 'hidden';
     document.body.style.position = 'fixed';
  
     // Re-enable scrolling when component unmounts
  
     return () => {
         document.body.style.overflow = originalStyle;
         document.body.style.position = 'relative';
     }
     }, []); // Empty array ensures effect is only run on mount and unmount
  
  }

export default App;