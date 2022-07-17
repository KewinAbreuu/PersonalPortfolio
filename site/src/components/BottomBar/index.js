
import React, { } from 'react'
import './style.css'

import B1 from '../../assets/git.svg'

export default function BottomBar () {
  function home () {
    window.location.href = '#home'
  }

  function sobre () {
    window.location.href = '#sobre'
  }

  function habilidades () {
    window.location.href = '#habilidades'
  }

  function services () {
    window.location.href = '#servicos'
  }

  return (
      <>
        <div className="bottomBar">
            <div onClick={home} id="cont">
              <img src={B1} id="icon"/>
            </div>
            <div onClick={sobre} id="cont">
              <img src={B1} id="icon"/>
            </div>
            <div onClick={habilidades} id="cont">
              <img src={B1} id="icon"/>
            </div>
            <div onClick={services} id="cont">
              <img src={B1} id="icon"/>
            </div>
            <div onClick={home} id="cont">
              <img src={B1} id="icon"/>
            </div>

        </div>
      </>
  )
}
