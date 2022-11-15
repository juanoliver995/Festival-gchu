import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import Lgante from '../assets/lgante-removebg-preview.png'
import Nahu from '../assets/nahu.png'
import BakgoundLine from './BakgoundLine';
import Eme from '../assets/eme.png'
import Ricky from '../assets/ricky.png'
import Roman from '../assets/roman.png'
import Lanzelota from '../assets/lanzelota.png'
import Atr from '../assets/atr.png'

const LineUp = () => {
    return (
        <div id='line' className='line'>
            <Swiper
                id='description'
                modules={[Autoplay]}
                slidesPerView={1}
                spaceBetween={500}
                centeredSlidesBounds={true}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
            >
                <SwiperSlide>
                    <div className='lineup'>
                        <h1>ARTISTA</h1>
                        <h1>PRINCIPAL</h1>
                        <div className='container-img-lineup'>
                            <img src={Lgante} />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='lineup'>
                        <h1>ARTISTA</h1>
                        <h1>INVITADO</h1>
                        <div className='container-img-lineup'>
                            <img src={Lanzelota} />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='lineup'>
                        <h1>BANDA</h1>
                        <h1>INVITADA</h1>
                        <div className='container-img-lineup'>
                            <img src={Atr} />
                        </div>
                    </div >
                </SwiperSlide >
                <SwiperSlide>
                    <div className='lineup'>
                        <h1>DJ</h1>
                        <h1>INVITADO</h1>
                        <div className='container-img-lineup'>
                            <img src={Ricky} />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='lineup'>
                        <h1>DJ</h1>
                        <h1>INVITADO</h1>
                        <div className='container-img-lineup'>
                            <img src={Roman} />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='lineup'>
                        <h1>DJ</h1>
                        <h1>INVITADO</h1>
                        <div className='container-img-lineup'>
                            <img src={Nahu} />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='lineup'>
                        <h1>BANDA</h1>
                        <h1>INVITADA</h1>
                        <div className='container-img-lineup'>
                            <img src={Eme} />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper >
            <BakgoundLine />
        </div >
    )
}

export default LineUp