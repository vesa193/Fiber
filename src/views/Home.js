import React from 'react';
import { SignUpPart } from '../components/SignUpPart/SignUpPart';
import { CarouselPart } from '../components/CarouselPart/CarouselPart';
import './Home.scss'

const Home = () => {
  return (
    <div className="home">
      <SignUpPart />
      <CarouselPart />
    </div>
  );
}
 
export default Home;