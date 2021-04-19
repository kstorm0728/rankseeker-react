import styled from 'styled-components';
import {Link} from 'react-router-dom';

const themeColor = "#ff1493";

export const FooterContainer = styled.div`
  background-color: rgba(0, 0, 0, .8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`

export const FooterLink = styled.div`
  display: flex;
  justify-contenet: center;
  align-items: center;
  margin-bottom: 20px;
  @media (max-width: 374px) {
    flex-direction: column;
  }
`

export const FooterItem = styled(Link)`
  color: ${themeColor};
  margin: 0 10px;
  font-size: .9rem;
  @media (max-width: 374px) {
    margin-bottom: 20px;
  }
`

export const FooterCopyright = styled.div`
  color: ${themeColor};
  font-size: .9rem;
`
