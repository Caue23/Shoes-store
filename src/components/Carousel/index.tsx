import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import 'pure-react-carousel/dist/react-carousel.es.css';
import styles from './carousel.module.scss'


export function Carousel () {
      return (
        <>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={3}
      >
        <div className={styles.carousel}>

          <ButtonNext className={styles.button} ><FiChevronLeft className={styles.chevron}/></ButtonNext>
          <Slider className={styles.carouselContainer}>
            <Slide index={0}  ><img src='/images/tenis-1.png' className={styles.contentSlide}/></Slide>
            <Slide index={1}><img src='/images/tenis-2.png' className={styles.contentSlide}/></Slide>
            <Slide index={2}>I am the third Slide.</Slide>
          </Slider>
          <ButtonBack className={styles.button}><FiChevronRight className={styles.chevron}/></ButtonBack>
        </div>
        </CarouselProvider>
        </>
      );
    }
  