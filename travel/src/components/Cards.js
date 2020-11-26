import React from 'react';
import '../styles/cards.scss';
import CardItem from './CardItem';
import img_9 from '../assets/images/img-9.jpg';
import img_2 from '../assets/images/img-2.jpg';
import img_3 from '../assets/images/img-3.jpg';
import img_4 from '../assets/images/img-4.jpg';
import img_8 from '../assets/images/img-8.jpg';

const Cards = () => {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem src={img_9} text='Explore the hidden waterfall deep inside the Amazon Jungle' label='Adventure' path='/services' />
                        <CardItem src={img_2} text='Travel through the Islands of Bali in a Private Cruise' label='Luxury' path='/services' />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem src={img_3} text='Explore the hidden waterfall deep inside the Amazon Jungle' label='Adventure' path='/services' />
                        <CardItem src={img_4} text='Travel through the Islands of Bali in a Private Cruise' label='Luxury' path='/services' />
                        <CardItem src={img_8} text='Travel through the Islands of Bali in a Private Cruise' label='Luxury' path='/services' />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Cards;