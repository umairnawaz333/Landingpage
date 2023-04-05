import React from 'react';
import styled from 'styled-components';
import Faq from 'react-faq-component';
import SectionTitle from '../titles/SectionTitle';

const ContactSectionStyles = styled.div`
  padding: 10rem 0;
  .contact__wrapper {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }
  .contact__info {
    margin-bottom: 4rem;
  }
  .contact__form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1.5rem;
    row-gap: 3rem;
    .contact__field--fullWidth {
      grid-column: span 2;
    }
    .contact__submit {
      width: max-content;
      cursor: pointer;
    }
  }
  @media only screen and (max-width: 768px) {
    .contact__form {
      grid-template-columns: 1fr;
      row-gap: 2rem;
      .contact__field--fullWidth {
        grid-column: span 1;
      }
    }
  }
`;

function ContactSection() {
  const data = {
    title: '',
    rows: [
      {
        title: 'What Is ZkFox?',
        content:
          'ZkFox Is The First Collection Of 9,999 NFTs Art Produced on ZKSYNC Era. it Will Offers To Create Own Free NFTs in 2D, 3D Without Layers & Accessories.',
      },
      {
        title: 'How Many Collection Have ZkFox?',
        content: '9,999 Collection Of ZkFox.',
      },
      {
        title: 'What Is Minting Price?',
        content: 'ZkFox Nfts Are Free Minting To Anyone.',
      },
      {
        title: 'When ZkFox Minting?',
        content: 'Will Be Announce On Our Official Social Media Platform.',
      },
      {
        title: 'When Minting date?',
        content: 'Will be announce Soon.',
      },
    ],
  };
  const styles = {
    bgColor: '#00000000',
    titleTextColor: 'white',
    rowTitleColor: 'white',
    rowContentColor: 'white',
    arrowColor: 'white',

    rowTitleTextSize: 'large',
    rowContentPaddingTop: '10px',
    rowContentPaddingBottom: '5px',
  };

  return (
    <ContactSectionStyles id="faqs">
      <div className="container">
        <div className="contact__wrapper">
          <div className="contact__info">
            <SectionTitle>FAQs</SectionTitle>
            {/* <ParagraphText>We would love to hear from you.</ParagraphText> */}
          </div>
          <Faq data={data} styles={styles} />
        </div>
      </div>
    </ContactSectionStyles>
  );
}

export default ContactSection;
