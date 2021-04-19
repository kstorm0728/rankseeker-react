import styled from 'styled-components';
import { Link } from 'react-router-dom';

const themeColor = "#ff1493";


export const MainStyle = styled.div`
  background-color: rgba(0, 0, 0, .8);
  padding: 0 10px;
  @media (min-width: 1440px) {
    padding: 0 calc((100vw - 1440px) / 2 + 10px);
  }
`

export const Hero = styled.img`
  object-fit: cover;
  width: 100%;
  max-width: 1440px;
  height: 70px;
  margin-top: 45px;
`

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-top: 50px;
`

export const ContainerHeaderTitle = styled(Link)`
  font-weight: lighter;
  font-size: clamp(1.4rem, 6vw, 3rem);
  color: ${themeColor};
  &:hover {
    color: #ff598c;
  }
`

export const ContainerButton = styled(Link)`
  color: ${themeColor};
  border: 1px solid ${themeColor};
  border-radius: 30px;
  padding: clamp(.3rem, 1vw, .8rem) clamp(.8rem, 3vw, 2rem);
  font-weight: bold;
  font-size: clamp(.5rem, 3vw, 1rem);
  &:hover {
    color: rgba(0, 0, 0, .8);
    background-color: ${themeColor};
  }
`

export const RankingCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
