import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselDecks = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,

  };
    const imageClass = "h-32 w-auto";
    return (
      <div className='pl-5 pr-5'>
        <Slider {...settings} className="slider-container">
          <div>
            <img src="/img/Decks/Chemistry Deck.png" alt="Logo" className={imageClass} />
          </div>
          <div>
            <img src="/img/Decks/Literature Deck.png" alt="Logo" className={imageClass} />
          </div>
          <div>
            <img src="/img/Decks/Math Deck.png" alt="Logo" className={imageClass} />
          </div>
          <div>
            <img src="/img/Decks/Geography Deck.png" alt="Logo" className={imageClass} />
          </div>
          <div>
            <img src="/img/Decks/Medicine Deck.png" alt="Logo" className={imageClass} />
          </div>
          <div>
            <img src="/img/Decks/Python Deck.png" alt="Logo" className={imageClass} />
          </div>
          <div>
            <img src="/img/Decks/Psychology Deck.png" alt="Logo" className={imageClass} />
          </div>
          <div>
            <img src="/img/Decks/TI Deck.png" alt="Logo" className={imageClass} />
          </div>
          <div>
            <img src="/img/Decks/Virus Deck.png" alt="Logo" className={imageClass} />
          </div>
          <div>
            <img src="/img/Decks/History Deck.png" alt="Logo" className={imageClass} />
          </div>
          <div>
            <img src="/img/Decks/Animal Deck.png" alt="Logo" className={imageClass} />
          </div>
          <div>
            <img src="/img/Decks/Arts Deck.png" alt="Logo" className={imageClass} />
          </div>
          <div>
            <img src="/img/Decks/Law Deck.png" alt="Logo" className={imageClass} />
          </div>
          <div>
            <img src="/img/Decks/Archaeology Deck.png" alt="Logo" className={imageClass} />
          </div>
          <div>
            <img src="/img/Decks/Financial Deck.png" alt="Logo" className={imageClass} />
          </div>
          <div>
            <img src="/img/Decks/Music Deck.png" alt="Logo" className={imageClass} />
          </div>  
        </Slider>
      </div>
    );
  };

export default CarouselDecks;
