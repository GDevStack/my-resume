import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './header.css';

export default class Header extends React.Component {
    render(){
        return (
        <div className='header1'>
            <div id='menuB'>
                <div id='burger'>
                
                    <div className='bar1' />
                    <div className='bar2' />
                    <div className='bar3' />

                </div>
            </div>
            
            <div className='header-body'><p>Gerald</p></div>
            <div className='searchH'><input type='text' className='search' placeholder='Search'></input></div>
        </div>
        
        )
    }
}