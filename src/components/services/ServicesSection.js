import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../titles/SectionTitle';
import ServiceItem from './ServiceItem';

const ServicesSectionStyles = styled.div`
  padding: 10rem 0;
  text-align: center;
  .services__title {
    margin-bottom: 3rem;
  }
  .services__items {
    display: flex;
    gap: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .services__items {
      flex-direction: column;
      max-width: 300px;
      margin: 0 auto;
    }
  }
`;

function ServicesSection() {
  return (
    <ServicesSectionStyles id="utility">
      <div className="container">
        <SectionTitle className="services__title">
          Utility Of ZkFox Nfts Holders
        </SectionTitle>
        <div className="services__items">
          <ServiceItem desc="Users Can Stake Our $ZFox & NFTs." />
          <ServiceItem desc="Anyone Can Holds Our Nfts And Get Rewards In Our Tokens." />
          <ServiceItem desc="Users Can Able To Buy Our NFTs Using $ZFox Token." />
          <ServiceItem desc="Those who holds our most Nfts & Tokens They will get the rarest Nfts." />
        </div>
      </div>
    </ServicesSectionStyles>
  );
}

export default ServicesSection;
