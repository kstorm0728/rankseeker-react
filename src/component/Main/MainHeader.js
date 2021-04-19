import React from 'react'
import {
  ContainerHeader,
  ContainerHeaderTitle,
  ContainerButton,
} from './MainElements';
 
function MainHeader({heading}) {
  return (
    <ContainerHeader>
      <ContainerHeaderTitle>{heading}</ContainerHeaderTitle>
      <ContainerButton>すべて見る</ContainerButton>
    </ContainerHeader>
  )
}

export default MainHeader
