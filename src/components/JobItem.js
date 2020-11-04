import { useContext } from 'react';
import { FilterContext } from '../context/context-filter';
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #ffffff;
  padding: 10px;
  margin-top: 45px;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border-left: ${(props) => (props.featured ? "3px solid #5DA2A2" : "none")};
  -webkit-box-shadow: 1px 9px 14px -3px rgba(93, 162, 162, 0.7);
  box-shadow: 1px 9px 14px -3px rgba(93, 162, 162, 0.7);
  @media (max-width: 750px) {
    flex-direction: column;
    align-items: start;
    padding-left: 15px;
  }
`;

const Logo = styled.img`
  border-radius: 50%;
  padding: 12px;
  margin-rigth: 5px;

  @media (max-width: 750px) {
    width: 45px;
    margin-top: -45px;
  }
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  @media (max-width: 750px) {
    width: 100%;
  }
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  font-size: 11px;
`;

const Company = styled.span`
  color: #5da2a2;
  font-weight: 700;
  margin-right: 9px;
`;

const FeaturedAndNew = styled.div`
  padding: 4px;
  color: #ffffff;
  border-radius: 10px;
  margin-right: 9px;
  background-color: ${(props) => (props.isNew ? "#5DA2A2" : "#414B4A")};
`;

const Middle = styled.div`
  padding-top: 10px;
  word-spacing: 4px;
  & a {
    font-weight: 700;
    color: #414b4a;
    text-decoration: none;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  & a:hover {
    color: #5da2a2;
    transition: 0.2s;
  }
`;

const Bottom = styled.div`
  max-width: 270px;
  padding-top: 10px;
  display: flex;
  justify-content: space-between;

  & span {
    font-size: 13px;
    color: #9da3a3;
  }

  @media (max-width: 750px) {
    width: 100%;
    max-width: none;
    padding-bottom: 15px;
    border-bottom: 1px solid #9da3a3;
    margin-bottom: 25px;
  }
`;

const RoleAndToolsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  width: 30%;
  margin-right: 10px;
  
  @media (max-width: 750px) {
    width: 100%;
  }
`;

const Label = styled.button`
  cursor: pointer;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 8px;
  outline: none;
  border: none;
  background-color: #eef7f6;
  color: #5da2a2;
  font-weight: 700;
  &:hover {
    transition: 0.2s;
    background-color: #5da2a2;
    color: #ffffff;
  }
`;

export default function JobItem({ item }) {
  const {
    logo,
    company,
    isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = item;

  const labels = [role, level, ...languages, ...tools];
  const [ filters, setFilters ] = useContext(FilterContext);

  const handleAddFilter = (e) => {
    const { value } = e.target;
    const isRepeated = filters.every(l => l !== value);

    if (isRepeated) {
      setFilters([...filters, value])
    }
  }

  return (
    <Wrapper featured={featured}>
      <Logo src={require(`../${logo}`).default} />
      <InfoBox>
        <Top>
          <div>
            <Company>{company}</Company>
          </div>
          {isNew ? (
            <FeaturedAndNew isNew={isNew}>
              <span>NEW!</span>
            </FeaturedAndNew>
          ) : (
            <div></div>
          )}
          {featured ? (
            <FeaturedAndNew featured={featured}>
              <span>FEATURED</span>
            </FeaturedAndNew>
          ) : (
            <div></div>
          )}
        </Top>
        <Middle>
          <a href="#">{position}</a>
        </Middle>
        <Bottom>
          <div>
            <span>{postedAt}</span>
          </div>
          <div>
            <span>{contract}</span>
          </div>
          <div>
            <span>{location}</span>
          </div>
        </Bottom>
      </InfoBox>
      <RoleAndToolsWrapper>
        {labels.map((l, index) => {
          return (
            <div key={index}>
              <Label onClick={handleAddFilter} value={l}>{l}</Label>
            </div>
          );
        })}
      </RoleAndToolsWrapper>
    </Wrapper>
  );
}
