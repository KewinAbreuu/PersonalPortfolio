
import React from 'react'
import { Container, Header, Infos, TextHeader, TextInfos, CheckInfos } from './style'

import check from '../../assets/check.svg'

export default function CardServices ({
  header, info,
  info2, info3, info4
}) {
  return (
      <>
        <Container>
            <Header>
               <TextHeader>{header}</TextHeader>
            </Header>
            <Infos>
              <TextInfos>
                  <CheckInfos src={check}/>
                  {info}
                </TextInfos>

                <TextInfos>
                  <CheckInfos src={check}/>
                  {info2}
                </TextInfos>

                <TextInfos>
                  <CheckInfos src={check}/>
                  {info3}
                </TextInfos>

                <TextInfos>
                  <CheckInfos src={check}/>
                  {info4}
                </TextInfos>
            </Infos>
        </Container>
      </>
  )
}
