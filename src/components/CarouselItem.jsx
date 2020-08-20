import React from 'react';
import PropTypes from 'prop-types'
import '../assets/style/components/CarrusellItem.scss';
import iconPlay from '../assets/Static/play-icon.png'
import iconplus from '../assets/Static/plus-icon.png'

const CarouselItem = ({cover, title, year, contentRating, duration }) => (
  <div className="carousel-item">
  <img className="carousel-item__img" src={cover} alt={title} />
  <div className="carousel-item__details">
    <div>             
      <img className="carousel-item__details--img" src= {iconPlay} alt="Play Icon" />
      <img className="carousel-item__details--img" src=  {iconplus} alt="Plus Icon" />
    </div>
    <p className="carousel-item__details--title">{title}</p>
    <p className="carousel-item__details--subtitle">
    {`${year}, ${contentRating}, ${duration}`}</p>
  </div>
</div>

);

CarouselItem.propTypes = {
  cover : PropTypes.string,
  title : PropTypes.string,
  year  : PropTypes.string,
  contentRating : PropTypes.number,
  duration : PropTypes.number,

}

export default CarouselItem;

