import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../titles/SectionTitle';

const RoadmapSectionStyles = styled.div`
  padding: 10rem 0;
  text-align: center;
  .services__title {
    margin-bottom: 3rem;
  }
  .services__items {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    gap: 2rem;
    font-size: 1.6rem;
    line-height: 1.4em;
    color: var(--lightBlue_2);
    .items {
      width: 300px;
      display: flex;
      flex-direction: column;
      text-align: left;
      padding: 3rem;
      border-radius: 12px;
      border: 1px solid var(--mediumSlateBlue);
    }
  }

  @media only screen and (max-width: 1090px) {
    .services__items {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      .items {
        width: 400px;
      }
      .span-arrow {
        transform: rotate(90deg);
        -webkit-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
        -o-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .services__items {
      flex-direction: column;
      max-width: 300px;
      margin: 0 auto;
      .items {
        width: 300px;
      }
      .span-arrow {
        transform: rotate(90deg);
        -webkit-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
        -o-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
      }
    }
  }
`;

function RoadmapSection() {
  return (
    <RoadmapSectionStyles id="roadmap">
      <div className="container">
        <SectionTitle className="services__title">Roadmap 2023</SectionTitle>
        <div className="services__items">
          <div className="items">
            <span>•Launch Project On ZKSYNC.</span>
            <span>•Launch ZkFox Social Media.</span>
            <span>•Introduce About ZkFox.</span>
          </div>
          <span className="span-arrow">➡</span>
          <div className="items">
            <span>•Creating ZkFox Arts.</span>
            <span>•Releasing Websites. </span>
            <span> •Launch Airdrops & Some Event. </span>
            <span>•Partnership & Marketing. </span>
            <span>•Launch ZkFox NFTs On Marketplace. </span>
          </div>
          <span className="span-arrow">➡</span>
          <div className="items">
            <span>•Launch ZkFox Mobile Version.</span>
            <span>
              •Launch ZkFox Tools To Help A Create Own Free Nfts Art In 2D, 3D
              Without Any Layers & Accessories.
            </span>
            <span>•More Marketing. </span>
          </div>
          <span className="span-arrow">➡</span>
          <div className="items">
            <span>•Launch Launchpad.</span>
            <span>•Release Own Marketplace.</span>
            <span>•Launch ZkFox 2.O.</span>
          </div>
        </div>
      </div>
    </RoadmapSectionStyles>
  );
}

export default RoadmapSection;
