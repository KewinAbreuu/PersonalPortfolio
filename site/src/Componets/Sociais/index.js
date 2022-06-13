
import React,{useState} from "react";
import { Container } from './style';
import GitHub from '../../assets/gitHub.png'

export default function Sociais() {
  return (
      <>
        <Container>
            <img src={GitHub} style={{marginBottom:20}}/>
            <img src={GitHub} style={{marginBottom:20}}/>
            <img src={GitHub}/>
        </Container>
      </>
  );
}


