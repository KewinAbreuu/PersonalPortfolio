
import React,{useState} from "react";
import { CardSobre, Tittle, Desription,Feature, ContainerFeature } from './style';


export default function CardsExperience({icon,icon2,icon3,icon4,
   tittle, 
   desc,desc2,desc3,desc4}) {
  return (
      <>
        <CardSobre>
            <Tittle>{tittle}</Tittle>

            <ContainerFeature>
              
              <Desription>
                <img src={icon} style={{width:25, height:25}}/>
                <Feature>{desc}</Feature>
              </Desription>

              <Desription>
                <img src={icon2} style={{width:25, height:25}}/>
                <Feature>{desc2}</Feature>
              </Desription>

            </ContainerFeature>

            <ContainerFeature>
              
              <Desription>
                <img src={icon3} style={{width:25, height:25}}/>
                <Feature>{desc3}</Feature>
              </Desription>

              <Desription>
                <img src={icon4} style={{width:25, height:25}}/>
                <Feature>{desc4}</Feature>
              </Desription>

            </ContainerFeature>
            
            
        </CardSobre>
      </>
  );
}


