import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const themeColor = "#ff1493";

export const RankingContainer = styled.div`
`

export const RankingHeader = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 10px;
  width: 80%;
  &:hover {
    background-color: rgba(255, 255, 255, .1);
  }
`

export const Gender = styled.p`
  color: ${themeColor};
  font-size: 24px;
`

export const Tournament = styled.span`
  color: #a3a3a3;
  font-size: 14px;
  margin-left: 20px;
`



export const RankingContent = styled.div`
  display:flex;
  flex-direction: column;
  margin: 0 5px;
`

export const BowlerImage = styled.img`
  object-fit: cover;
  width: 60px;
`

export const BowlerInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 3px 10px;
`

export const Rank = styled.div`
  color: #000;
  font-size: 1.2rem;
  font-weight: bold;
  width: 2.5rem;
  margin-right: 10px;
`

export const Name = styled.div`
  color: #000;
  font-size: 1.5rem;
  font-weight: bold;
  width: 9rem;
  margin-right: 10px;
`

export const RankUpDown = styled.div`
  background-color: #b5b5b5;
  border: 1px solid #a3a3a3;
  border-radius: 3px;
  padding: 0 5px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`

export const Arrow = styled(FaArrowRight)`
  font-size: 1rem;
  width: 1.5rem;
`

export const Point = styled.div`
  color: #000;
  font-size: 1.1rem;
  font-weight: bold;
  width: 5rem;
  margin-right: 10px;
`

export const Average = styled.div`
  color: #94bf37;
  font-size: .9rem;
  font-weight: bold;
  width: 6rem;
  margin-right: 10px;
`

export const Earning = styled.div`
  color: #94bf37;
  font-size: .9rem;
  font-weight: bold;
  width: 6rem;
  margin-right: 10px;
`

export const IndividualContent = styled(Link)`
  display: flex;
  margin-bottom: 10px;
  background-color: #fff;
  &:hover {
    outline: 2px solid ${themeColor};
  }
  &:hover ${Rank} {
    color: ${themeColor};
  }
  &:hover ${Name}　{
    color: ${themeColor};
  }
  &:hover ${Point} {
    color: ${themeColor};
  }
`