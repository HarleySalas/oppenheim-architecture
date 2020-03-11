import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import "./home-hero.scss";

import Carousel from "../../../Carousel/Carousel";
import Pin from "../../../../shared/icons/pin-basic-stroke-01.svg";
import CircleButton from "../../../CircleButton/CircleButton";

const HomeHero = () => {
  const [carouselPaused, setCarouselPaused] = useState(false);

  const data = useStaticQuery(graphql`
    query homeHeroImg {
      img1: file(relativePath: { eq: "hero-images/home-hero-1.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      img2: file(relativePath: { eq: "hero-images/home-hero-2.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      img3: file(relativePath: { eq: "hero-images/home-hero-3.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <header className="home-hero">
      <Carousel delayLength={7000} autoplay paused={carouselPaused} keys>
        <div className="home-hero__carousel-slide">
          <Img
            fluid={data.img1.childImageSharp.fluid}
            fadeIn={true}
            durationFadeIn={1000}
            draggable={false}
            alt="Architecture Example"
            className="home-hero__img-wrapper"
            imgStyle={{
              userSelect: "none",
              opacity: 1,
            }}
            backgroundColor="#0e1113"
            placeholderClassName="home-hero__img-placeholder"
          />
          <div className="home-hero__img-overlay">
            <div className="container home-hero__container">
              <span className="home-hero__location">
                <Pin className="home-hero__pin" /> Aqaba, Jordan
              </span>
              <h1 className="home-hero__heading">
                Innovative and Organic Design
              </h1>
              <span className="home-hero__sub-heading">
                <span className="home-hero__sub-heading__title">
                  Ayla Golf Academy
                </span>
                <br />
                13,000 SF Golf Academy, 5,400 SF Comfort Stations
              </span>
              <CircleButton
                linkTo="/projects/ayla-golf-academy"
                btnText="View Project"
                addClass="home-hero__cta"
                onMouseEnter={() => setCarouselPaused(true)}
                onMouseLeave={() => setCarouselPaused(false)}
              />
            </div>
          </div>
        </div>
        <div className="home-hero__carousel-slide">
          <Img
            fluid={data.img2.childImageSharp.fluid}
            fadeIn={true}
            durationFadeIn={1000}
            draggable={false}
            alt="Architecture Example"
            className="home-hero__img-wrapper"
            imgStyle={{
              userSelect: "none",
              opacity: 1,
            }}
            backgroundColor="#0e1113"
            placeholderClassName="home-hero__img-placeholder"
          />
          <div className="home-hero__img-overlay">
            <div className="container home-hero__container">
              <span className="home-hero__location">
                <Pin className="home-hero__pin" /> Schaan, Liechtenstein
              </span>
              <h1 className="home-hero__heading">
                Blurring Boundaries Between Nature and Man
              </h1>
              <span className="home-hero__sub-heading">
                <span className="home-hero__sub-heading__title">
                  Alpine Oasis
                </span>
                <br />
                21,500 SF Private Home
              </span>
              <CircleButton
                linkTo="/projects/alpine-oasis/"
                btnText="View Project"
                addClass="home-hero__cta"
                onMouseEnter={() => setCarouselPaused(true)}
                onMouseLeave={() => setCarouselPaused(false)}
              />
            </div>
          </div>
        </div>
        <div className="home-hero__carousel-slide">
          <Img
            fluid={data.img3.childImageSharp.fluid}
            fadeIn={true}
            durationFadeIn={1000}
            draggable={false}
            alt="Architecture Example"
            className="home-hero__img-wrapper"
            imgStyle={{
              userSelect: "none",
              opacity: 1,
            }}
            backgroundColor="#0e1113"
            placeholderClassName="home-hero__img-placeholder"
          />
          <div className="home-hero__img-overlay">
            <div className="container home-hero__container">
              <span className="home-hero__location">
                <Pin className="home-hero__pin" /> Confidential
              </span>
              <h1 className="home-hero__heading">
                Pushing Illusion Within the Limits of Reality
              </h1>
              <span className="home-hero__sub-heading">
                <span className="home-hero__sub-heading__title">
                  Destination Spa & Resort
                </span>
                <br />
                650 Acre Destination Spa and Resort
              </span>
              <CircleButton
                linkTo="/projects/destination-spa-resort/"
                btnText="View Project"
                addClass="home-hero__cta"
                onMouseEnter={() => setCarouselPaused(true)}
                onMouseLeave={() => setCarouselPaused(false)}
              />
            </div>
          </div>
        </div>
      </Carousel>
    </header>
  );
};

export default HomeHero;
