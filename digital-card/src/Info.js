import React from 'react';
import pic from './picture1.jpeg';
import './App.css';

export default function Info(){
    return (
        <div className = "info">
            <img src={pic} alt='pata nahi'></img>
            <h1> Piyush Saini</h1>
            <h3> Full-Stack Developer</h3>
            <h6>psaini2@u.rochester.edu</h6>
            <div className='buttons'>
                <button className='email'>Email</button>
                <button className='linkedIn'>LinkedIn</button>
            </div>
               
            

        </div>

    );

}