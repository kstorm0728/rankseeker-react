import React from 'react';
import { MainStyle, Hero ,RankingCard } from './MainElements';
import rankseekerLogo from '../../Images/Other/rankseeker_logo.png';
import MainHeader from './MainHeader';
import Card from './Card/Card';
import Ranking from './Ranking/Ranking';
import Sns from './Sns/Sns';
import { tournamentList, channelList, liveList } from './Card/Data';
import { menRankingData, womenRankingData } from './Ranking/RankingData';

class Main extends React.Component {
  render() {
    return (
      <MainStyle>
        <Hero src={rankseekerLogo} />
        <MainHeader heading="大会" />
        <Card data={tournamentList} />
        <MainHeader heading="チャンネル" />
        <Card data={channelList} />
        <MainHeader heading="大会ライブ配信" />
        <Card data={liveList} />
        <MainHeader heading="ポイントランキング" />
        <RankingCard>
          <Ranking gender="男子" tournament="(SSSカップ 終了時点)" data={menRankingData} />
          <Ranking gender="女子" tournament="(SSSカップ 終了時点)" data={womenRankingData} />
        </RankingCard>
        <Sns />
      </MainStyle>
    );
  }
}

export default Main;