import React from 'react';
import {
  RankingContainer,
  RankingHeader,
  Gender,
  Tournament,
  RankingContent,
  IndividualContent,
  BowlerImage,
  BowlerInfo,
  Rank,
  Name,
  RankUpDown,
  Arrow,
  Point,
  Average,
  Earning
} from './RankingElements';

function Ranking({ gender, tournament, data }) {
  return (
    <>
      <RankingContainer>
        <RankingHeader>
          <Gender>{gender}</Gender>
          <Tournament>{tournament}</Tournament>
        </RankingHeader>
        <RankingContent>
          {data.map((item, index) => {
            return (
              <IndividualContent key={index}>
                <BowlerImage src={item.image} />
                <BowlerInfo>
                  <Rank>{item.rank}</Rank>
                  <Name>{item.name}</Name>
                  <RankUpDown><Arrow />{item.rankUpDown}</RankUpDown>
                  <Point>{item.point}</Point>
                  <Average>{item.average}</Average>
                  <Earning>{item.earning}</Earning>
                </BowlerInfo>
              </IndividualContent>
            )
          })}
        </RankingContent>
      </RankingContainer>
    </>
  )
}

export default Ranking
