import React from 'react';
import styled from 'styled-components';
import ParagraphText from './paragraphTexts/ParagraphText';
import HeroTitle from './titles/HeroTitle';

import Img1 from '../assets/images/1.png';
import Img2 from '../assets/images/2.png';
import Img3 from '../assets/images/3.png';
import Img4 from '../assets/images/4.png';

const HeroSectionStyles = styled.div`
  min-height: 100vh;
  padding-top: calc(var(--header-height) + 30px); // height of header
  display: flex;
  align-items: center;
  justify-content: center;
  .hero__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 1rem;
  }
  .hero__info {
    flex: 3;
  }
  .hero__img {
    flex: 4;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    img {
      border-bottom: 1px solid var(--mediumSlateBlue);
      border-radius: 5px;
      max-width: 300px;
      margin-top: auto;
    }
  }
  .hero__title {
    margin-bottom: 1.5rem;
    max-width: 400px;
  }
  .hero__desc {
    margin-bottom: 1.5rem;
    max-width: 400px;
  }
  @media only screen and (max-width: 1180px) {
    .hero__img {
      img {
        max-width: 250px;
        margin-top: auto;
      }
    }
  }
  @media only screen and (max-width: 990px) {
    .hero__img {
      img {
        max-width: 190px;
        margin-top: auto;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .hero__wrapper {
      flex-direction: column;
      gap: 0.5rem;
    }
    .hero__img {
      display: flex;
      justify-content: center;
      img {
        max-width: 400px;
        margin-top: auto;
      }
    }
  }
`;

function HeroSection() {
  return (
    <HeroSectionStyles id="home">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__info">
            <HeroTitle className="hero__title">
              The First 9,999 F🦊X NFTs Produced On ZKSYNC ERA.
            </HeroTitle>
            <ParagraphText className="hero__desc">
              The First 9,999 F🦊X NFTs Produced On ZKSYNC. ZkFoX Project Offers
              To Create Free Digital, Pixels & 2D & 3D NFTs Art To Anyone
              Without The Layer’s. ZkFoX NFTs Holder & Staker Will Get Rewards
              In Our Tokens $ZFox. And More Exiting Things & Offers Announce On
              Our Social Media Platforms.
            </ParagraphText>
            {/* <PrimaryButton
              buttonType={Link}
              smooth
              to="contact"
              className="hero__cta"
            >
              Get In Touch
            </PrimaryButton> */}
          </div>
          <div className="hero__img">
            <img src={Img1} alt="" />
            <img src={Img2} alt="" />
            <img src={Img3} alt="" />
            <img src={Img4} alt="" />
          </div>
        </div>
      </div>
    </HeroSectionStyles>
  );
}

export default HeroSection;
