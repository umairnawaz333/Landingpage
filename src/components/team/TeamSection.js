import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../titles/SectionTitle';
import TeamMemberItem from './TeamMemberItem';
// team member images
import teamMember2 from '../../assets/images/team2.png';

const TeamSectionStyles = styled.div`
  padding: 10rem 0;
  .team__wrapper {
    display: flex;
    gap: 1rem;
  }
  .team__info {
    max-width: 250px;
  }
  .team__subtitle {
    margin-bottom: 1rem;
    font-weight: 600;
    color: var(--mediumSlateBlue);
    text-transform: capitalize;
  }
  .team__members {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 5rem;
  }
  @media only screen and (max-width: 790px) {
    .team__wrapper {
      flex-direction: column;
      text-align: center;
      gap: 3rem;
    }
    .team__info {
      margin: 0 auto;
    }
    .team__members {
      flex-wrap: wrap;
      gap: 2rem;
    }
  }
`;

function TeamSection() {
  return (
    <TeamSectionStyles id="team">
      <div className="container">
        <div className="team__wrapper">
          <div className="team__info">
            <SectionTitle className="team__title">ZkFox Team</SectionTitle>
          </div>
          <div className="team__members">
            <TeamMemberItem
              img={teamMember2}
              name="Jiang Sun"
              title="CEO - CO-Founder"
            />
            <TeamMemberItem
              img={teamMember2}
              name="Heng Tao Sun"
              title="NFTs Artist"
            />
            <TeamMemberItem
              img={teamMember2}
              name="Gouffy Chenzao"
              title="CM"
            />
            <TeamMemberItem img={teamMember2} name="Lious Di Sou" title="CMO" />
          </div>
        </div>
      </div>
    </TeamSectionStyles>
  );
}

export default TeamSection;
