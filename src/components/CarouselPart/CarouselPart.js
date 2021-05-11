import React from 'react';
import { Title, Text } from '../common/common'
import './CarouselPart.scss'

import signupImage from '../../assets/images/signup_image.png'

export const CarouselPart = () => {
  return (
    <div className="carousel">
      <div className="carousel-wrapper">
        <img className="carousel-banner" src={signupImage} alt="signup banner" />
        <Title>Unparalleled Templates</Title>
        <Text>Crafted by a team of professional designers, our <br /> templates are eunparalleled in the market.</Text>
        <div className="carousel-dots">
          <div className="carousel-dot carousel-dot--active" />
          <div className="carousel-dot" />
          <div className="carousel-dot" />
          <div className="carousel-dot" />
        </div>
      </div>
    </div>
  )
}
