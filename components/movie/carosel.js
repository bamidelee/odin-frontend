import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import styles from '../../styles/carousel.module.css'
import ClientOnly from "../Clientonly";
import Link from "next/link";

export default function Carousel ({movies, title}) {
  const [slideAmount, setSlideAmount] = useState(4)
useEffect(() => {
  if(window.innerWidth < 659){
    setSlideAmount(3)
  }
  if(window.innerWidth < 450){
    setSlideAmount(2)
  }
},[])
const mediaQuery990 = window.matchMedia('(max-width: 750px)')
const mediaQuery700 = window.matchMedia('(max-width: 650px)')
const mediaQuery450 = window.matchMedia('(max-width: 450px)')
  function handleTabletChange(e) {
 
    if (e.matches && slideAmount !== 4) {
    setSlideAmount(4)
    }
  }
  
  function handleTabletChange700(e) {
   
    if (e.matches && slideAmount!== 3) {
    setSlideAmount(3)
    }
  }
  function handleTabletChange450(e) {
   
    if (e.matches && slideAmount!== 2) {
    setSlideAmount(2)
    }
  }
  mediaQuery990.addListener(handleTabletChange)
  mediaQuery700.addListener(handleTabletChange700)
  mediaQuery450.addListener(handleTabletChange450)
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slideAmount,
        slidesToScroll: slideAmount
      }
      return (
        <div className={styles.carousel}>
          <h2 className={styles.carouselTitle}> {title} </h2>
         {movies && <Slider {...settings}>
           {movies.map((movie, index) => 
            <div key={movie.id} className={styles.carouselContainer} >
                <img src={`${movie.primaryMedia}`} alt={movie.title} className={styles.caroselImage} />
                <h2>
                    {movie.title}
                </h2>
                {title === 'Trending' && <div className="rating">
                  {index + 1}
                </div>}
            </div>
           )}
          </Slider>}
          <Link href="/latest-movies/1" replace>See more</Link>
        </div>
      );
    }
  