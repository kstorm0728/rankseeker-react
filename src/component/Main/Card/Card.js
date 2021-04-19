import React from 'react'
import {
  CardContainer,
  ContainerBody,
  ContainerBox,
  ContainerContent,
  ContainerLink,
  ContainerImage,
  ContainerText,
  ContainerTitle,
  ContainerDate
} from './CardElements';

function Card({heading, data}) {

  
  return (
    <>
      <CardContainer>
        <ContainerBody>
          {data.map((item, index) => {
            return (
              <ContainerBox key={index} >
                <ContainerLink to={item.link}>
                  <ContainerContent>
                    <ContainerImage src={item.image} />
                    <ContainerText>
                      <ContainerTitle>
                        {item.title}
                      </ContainerTitle>
                      <ContainerDate>
                        {item.date}
                      </ContainerDate>
                    </ContainerText>
                  </ContainerContent>
                </ContainerLink>
              </ContainerBox>
            )
          })}
        </ContainerBody>
      </CardContainer>
    </>
  )
}

export default Card
