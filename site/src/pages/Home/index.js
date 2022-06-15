
import React,{useState} from "react";
import HomeImage from  '../../assets/image1.png';
import SobreImage from '../../assets/image2ok.png';
import GitImage from '../../assets/git.svg';

import { Container,Text0, Text1,Text2,Text3,Text4,ContainerBtn,Btn,
  Btn2,ContainerImg,SubCont,ContainerResume,
   ContainerGeralCards,ContainerSubCards,ContainerExperience,
   ContainerCardExeperience } from './style';

import BottomBar from "../../Componets/BottomBar";
import Sociais from "../../Componets/Sociais";
import CardsSobre from "../../Componets/CardSobre";
import CardsExperience from "../../Componets/CardExperience";

export default function Home() {
  return (
      <>
        <Container>
          <BottomBar/>
          <Text1>Olá, Eu Sou</Text1>
          <Text2>Kewin Abreu</Text2>
          <Text3>Fullstack Developer</Text3>
          
          <ContainerBtn>
            <Btn>
               Download CV
            </Btn>

            <Btn2>
               Vamos Conversar!
            </Btn2>
          </ContainerBtn>

          <ContainerImg>
            {/* <Sociais/> */}
             <img src={HomeImage} style={{width:360.44, height:470, resizeMode:'contain'}}/>
          </ContainerImg>


          <Container>
          <SubCont>
            <Text3 style={{marginTop:128}}>Conheça</Text3>
            <Text4>Sobre Mim</Text4>
          </SubCont>
          
          <ContainerResume>
             <img src={SobreImage} style={{marginRight:100}}/>
              <ContainerGeralCards>

                <ContainerSubCards>
                  <CardsSobre icon={GitImage} tittle="Desenvolvedor" desc="Fullstack"/>
                  <CardsSobre icon={GitImage} tittle="Expeciência" desc="2+ Anos"/>
                  <CardsSobre icon={GitImage} tittle="Projetos" desc="+20 Concluídos"/>
                </ContainerSubCards>

                  <Text0>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to
                    make a type specimen book.
                  </Text0>

                  <Btn2 style={{marginLeft:-5, marginTop:24}}>
                  <Btn2>
                    Vamos Conversar!
                  </Btn2>
                  </Btn2>
              </ContainerGeralCards>
         
          </ContainerResume>

          <ContainerExperience>
             <Text3 style={{marginTop:128, fontSize:18, marginBottom:10}}>Habilidades Que Desenvolvo</Text3>
             <Text4>Minha Experiência</Text4>

            <ContainerCardExeperience>
               <CardsExperience 
                icon={GitImage} tittle="Frontend Development"
                desc="HTML" icon2={GitImage} desc2="CSS"
                icon3={GitImage} desc3="Javascript" 
                icon4={GitImage} desc4="React"/>

                <CardsExperience 
                icon={GitImage} tittle="Backend Development"
                desc="HTML" icon2={GitImage} desc2="CSS"
                icon3={GitImage} desc3="Javascript" 
                icon4={GitImage} desc4="React"/>
            </ContainerCardExeperience>
             
          </ContainerExperience>

              
        </Container>
        </Container>

        
      </>
  );
}
