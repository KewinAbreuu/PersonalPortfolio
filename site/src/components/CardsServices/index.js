
import React from 'react'
import { Container } from './style'

export default function CardServices ({ icon, name }) {
  return (
      <>
        <Container>
            <img src={icon} style={{ marginRight: 10 }}/>
            <p>{name}</p>
        </Container>
      </>
  )
}
