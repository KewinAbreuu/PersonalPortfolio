
import React,{useState} from "react";
import { CardSobre, Tittle, Desription } from './style';


export default function CardsSobre({icon, tittle, desc}) {
  return (
      <>
        <CardSobre>
            <img src={icon} style={{width:25, height:25, marginTop:20}}/>
            <Tittle>{tittle}</Tittle>
            <Desription>{desc}</Desription>
        </CardSobre>
      </>
  );
}


