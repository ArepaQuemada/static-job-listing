import styled from 'styled-components';
import bannerDesktop from '../images/bg-header-desktop.svg';
import bannerMobile from '../images/bg-header-mobile.svg';

const Wrapper = styled.div`
  width: 100%;
`;

const Banner = styled.div`
  background-image: url(${bannerDesktop});
  background-size: contain;
  background-color: #5DA2A2;
  padding-top: 11.4%;
  
  @media (max-width: 750px) {
    background-image: url(${bannerMobile});
    padding-top: 41.6%;
  }
`;

export default function Header() {
  return (
    <Wrapper>
      <Banner />
    </Wrapper>
  )
}
