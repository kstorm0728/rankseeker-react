import React from 'react'
// import {Link} from 'react-router-dom';
import {
  SnsContainer,
  Facebook,
  Twitter
} from './SnsElements';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { FacebookProvider, Page } from 'react-facebook';

function Sns() {
  return (
    <>
      <SnsContainer>
        <Facebook>
          <FacebookProvider appId="799067394050019">
            <Page
              href="https://www.facebook.com/bowling.rankseeker/"
              tabs="timeline"
              width="450px"
              height="400px"
            />
          </FacebookProvider>  
        </Facebook>  
        <Twitter>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="rankseeker"
            options={{height: 400, width: 450}}
          />
        </Twitter>
      </SnsContainer>
    </>
  )
}

export default Sns
