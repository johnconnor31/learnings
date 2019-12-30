import React from 'react';
import { MemoryRouter, Route, Link } from 'react-router-dom';

export default function MemRouter(){
    return(
        <div>
            <Link to='/memoryRouter/home'>Home</Link>
            <Link to='/memoryRouter/about'>About</Link>
            <Link to='/memoryRouter/Contact'>Contact</Link>
            <MemoryRouter initialEntries={['/home','/about','/contact']} initialIndex={2}>
                <Route path='/memoryRouter/home' component={() => <div>Home</div>} />
                <Route path='/memoryRouter/about' component={() => <div>about</div>} />
                <Route path='/memoryRouter/contact' component={() => <div>contact</div>} />
            </MemoryRouter>
        </div>
    );
}