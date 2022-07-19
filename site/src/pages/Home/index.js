
import React, { useEffect } from 'react'
import HomeImage from '../../assets/image1.png'
import SobreImage from '../../assets/image2ok.png'
import GitImage from '../../assets/git.svg'

import {
  Container, Text0, Text1, Text2, Text3, Text4, ContainerBtn, Btn,
  Btn2, ContainerImg, SubCont, ContainerResume,
  ContainerGeralCards, ContainerSubCards, ContainerExperience,
  ContainerCardExeperience, Banner, BannerSobre, ContainerServices, SubContainerServices
} from './style'

import BottomBar from '../../components/BottomBar'
import CardsSobre from '../../components/CardSobre'
import CardsExperience from '../../components/CardExperience'
import CardService from '../../components/CardsServices'

import ScrollReveal from 'scrollreveal'

export default function Home () {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '100px',
      duration: 3000,
      reset: false
    })
    sr.reveal(
      `
      #home,
      #sobre,
      #habilidades,
      #servicos
      `,
      {
        opacity: 0,
        interval: 100
      }
    )
  }, [])
  return (
      <>
      <div style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}>
       <BottomBar/>
      </div>

        <Container id="home">
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
             <Banner src={HomeImage} />
          </ContainerImg>

          <Container id="sobre" >
          <SubCont >
            <Text3 style={{ marginTop: 128 }} >Conheça</Text3>
            <Text4>Sobre Mim</Text4>
          </SubCont>

          <ContainerResume>
             <BannerSobre src={SobreImage} />
              <ContainerGeralCards>

                <ContainerSubCards>
                  <CardsSobre icon={GitImage} tittle="Desenvolvedor" desc="Fullstack"/>
                  <CardsSobre icon={GitImage} tittle="Experiência" desc="2+ Anos"/>
                  <CardsSobre icon={GitImage} tittle="Projetos" desc="+20 Concluídos"/>
                </ContainerSubCards>

                  <Text0>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to
                    make a type specimen book.
                  </Text0>

                  <Btn2 style={{ marginTop: 24, alignSelf: 'flex-start' }}>
                    Vamos Conversar!
                  </Btn2>
              </ContainerGeralCards>

          </ContainerResume>

          <ContainerExperience id="habilidades">
             <Text3 style={{ paddingTop: 100, fontSize: 18, marginBottom: 10 }}>Habilidades Que Desenvolvo</Text3>
             <Text4 style={{ marginBottom: 50 }}>Minha Experiência</Text4>

            <ContainerCardExeperience>
               <CardsExperience
                icon={GitImage} tittle="Frontend Development"
                desc="ReactJS" icon2={GitImage} desc2="Javascript"
                icon3={GitImage} desc3="Figma"
                icon4={GitImage} desc4="Bootstrap"/>

                <CardsExperience
                icon={GitImage} tittle="Backend Development"
                desc="NodeJS" icon2={GitImage} desc2="Express"
                icon3={GitImage} desc3="Docker"
                icon4={GitImage} desc4="Postgres"/>
            </ContainerCardExeperience>

          </ContainerExperience>

          <ContainerServices id="servicos">
             <Text3 style={{ marginTop: 100, fontSize: 18, marginBottom: 10 }}>O Que Eu Ofereço</Text3>
             <Text4 style={{ marginBottom: 20 }}>Serviços</Text4>
          <SubContainerServices>
              <CardService
              header="UI Design"
              info="Figma"
              info2="Illustrator"
              info3="Photoshop"
              info4="AfterEffects"
              />

              <CardService
              header="Desenvolvimento Web"
              info="Javascript"
              info2="NodeJs"
              info3="ReactJS"
              info4="SQL"
              />

              <CardService
              header="Desenvolvimento Mobile"
              info="React Native"
              info2="NodeJS"
              info3="SQL"
              info4="Firebase"
              />
          </SubContainerServices>

          </ContainerServices>

        </Container>
        </Container>

      </>
  )
}
