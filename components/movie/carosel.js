import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import styles from '../../styles/carousel.module.css'
import ClientOnly from "../Clientonly";
import Link from "next/link";
import Image from 'next/image'

export default function Carosel ({movies, title}) {
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
        slidesToScroll: slideAmount,
        className: 'react__slick__slider__parent'
      }
      return (
        <div className={styles.carousel}>
          <h2 className={styles.carouselTitle}> {title} </h2>
         {movies && <Slider {...settings}>
           {movies.map((movie, index) => 
            <Link href={`/movie/${movie._id}`} replace key={index}>
              <div key={movie.id} className={styles.carouselContainer} >
                  <Image src={movie.primaryMedia} alt={movie.title}
                  width={100} height={70} className={styles.caroselImage}/>
                  <h2>
                      {movie.title}
                  </h2>
                  {title === 'Trending' && <div className="rating">
                    {index + 1}
                  </div>}
              </div>
            </Link>
           )}
          </Slider>}
          <Link href="/page/Latest movies/1" replace>See more</Link>
        </div>
      );
    }
  