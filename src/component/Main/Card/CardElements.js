import styled from 'styled-components';
import { Link } from 'react-router-dom';

const themeColor = "#ff1493";


export const CardContainer = styled.div`
`

export const ContainerBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const ContainerBox = styled.div`
  width: 20%;
  padding: 0 3px;
  margin-bottom: 10px;
  @media (max-width: 1024px) {
    width: 25%;
    &:last-child, &:nth-child(9) {
      display: none;
    }
  }
  @media screen and (max-width: 768px) {
    width: 50%;
    &:nth-child(9), &:nth-child(10) {
      display: block;
    }
  }
`

export const ContainerLink = styled(Link)`
  
`

export const ContainerContent = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100%;
  border-radius: 2px;
  overflow: hidden;
  transition: all .1s ease-in-out;
  &:hover {
    outline: 2px solid ${themeColor};
  }
  &:hover img {
    transform: scale(1.05, 1.05);
  }
`

export const ContainerImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 60%;
  transition: all .2s ease-in-out;
  @media screen and (max-width: 768px) {
    height: 65%;
  }
  @media screen and (max-width: 425px) {
    height: 60%;
  }
`

export const ContainerText = styled.div`
  padding: clamp(.1rem, .2rem, .3rem) .5rem;
`

export const ContainerTitle = styled.h3`
  color: ${themeColor};
  font-size: clamp(.8rem, 3vw, 1rem);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden; 
  margin-bottom: 5px;
  line-height: 1.2;
`

export const ContainerDate = styled.p`
  color:rgba(0, 0, 0, .8);
  font-size: clamp(.6rem, 2.5vw, .8rem);
`