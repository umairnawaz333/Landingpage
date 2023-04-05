import React from 'react';
import styled from 'styled-components';
import SectionTitle from './titles/SectionTitle';

import Img5 from '../assets/images/5.png';
import Img6 from '../assets/images/6.png';
import Img7 from '../assets/images/7.png';
import Img8 from '../assets/images/8.png';
import Img9 from '../assets/images/9.png';
import Img11 from '../assets/images/11.png';

const AboutStyles = styled.div`
  padding: 10rem 0;
  text-align: center;
  .services__title {
    margin-bottom: 3rem;
  }
  .about__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .about__img {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    img {
      max-width: 340px;
      border: 1px solid var(--mediumSlateBlue);
      border-radius: 5px;
    }
  }
  .about__subtitle {
    margin-bottom: 1rem;
    font-weight: 600;
    text-transform: capitalize;
    color: var(--mediumSlateBlue);
  }
  .about__title {
    margin-bottom: 2rem;
    max-width: 350px;
  }
  .about__desc {
    margin-bottom: 2rem;
    max-width: 300px;
  }
  @media only screen and (max-width: 768px) {
    .about__wrapper {
      flex-direction: column;
    }
    .about__img {
      max-width: 320px;
      img {
        max-width: 320px;
      }
    }
  }
`;

function AboutSection() {
  return (
    <AboutStyles id="nfts">
      <div className="container">
        <SectionTitle className="services__title">NFTs</SectionTitle>
        <div className="about__wrapper">
          <div className="about__img">
            <img src={Img5} alt="" />
            <img src={Img6} alt="" />
            <img src={Img7} alt="" />
            <img src={Img8} alt="" />
            <img src={Img9} alt="" />
            <img src={Img11} alt="" />
          </div>
        </div>
      </div>
    </AboutStyles>
  );
}

export default AboutSection;
