import React from 'react'
import {
  FooterContainer,
  FooterLink,
  FooterItem,
  FooterCopyright
} from './FooterElements';

function Footer() {
  return (
    <>
      <FooterContainer>
        <FooterLink>
          <FooterItem>
            Rankseekerについて
          </FooterItem>
          <FooterItem>
            プライバシーポリシー
          </FooterItem>
        </FooterLink>
        <FooterCopyright>
          @Rankseeker
        </FooterCopyright>
      </FooterContainer>
    </>
  )
}

export default Footer
