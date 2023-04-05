import React from 'react';
import styled from 'styled-components';
import ParagraphText from './paragraphTexts/ParagraphText';
import SectionTitle from './titles/SectionTitle';

const NewsletterStyles = styled.div`
  padding: 10rem 0;
  .newsletter__wrapper {
    padding: 5rem 3rem;
    border-radius: 12px;
    max-width: 500px;
    margin: 0 auto;
    background: var(--mediumSlateBlue);
    text-align: center;
  }
  .newsletter__title {
    margin-bottom: 0.2rem;
    color: var(--lightBlue_1);
  }
  .newsletter__subtitle {
    display: flex;
    flex-direction: column;
    color: var(--lightBlue_1);
    p{
      font-size: 2rem;
      margin: 3rem 0;
    }
  }
  }
  @media only screen and (max-width: 768px) {
    .newsletter__wrapper {
      padding: 3rem 2rem;
    }
  }
`;

function NewsletterSection() {
  return (
    <NewsletterStyles id="tokenomics">
      <div className="container">
        <div className="newsletter__wrapper">
          <SectionTitle className="newsletter__title">
            ZkFox Tokenomics
          </SectionTitle>
          <ParagraphText className="newsletter__subtitle">
            <p>Max Supply 1,000,000,000</p>
            <span>Liquidity - 40%</span>
            <span>Team - 10% </span>
            <span>Core contributors & Advisor : 8%</span>
            <span>Airdrop - 2%</span>
            <span>Staking + Farming - 25%</span>
            <span>Marketing - 15 %</span>
          </ParagraphText>
        </div>
      </div>
    </NewsletterStyles>
  );
}

export default NewsletterSection;
