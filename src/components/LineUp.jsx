import React from 'react'
import Lgante from '../assets/lgante-removebg-preview.png'
import Background from './Background'
const LineUp = () => {
    return (
        <div className='lineup'>
            <Background />
            <h1>ARTISTA PRINCIPAL</h1>
            <div className='container-img-lineup'>
                <img src={Lgante} />
            </div>
        </div>
    )
}

export default LineUp