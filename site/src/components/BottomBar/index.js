
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
  return (
      <>
        <div className="bottomBar">
            <div onClick={home}>
              <img src={B1}/>
            </div>
            <div onClick={sobre}>
              <img src={B1}/>
            </div>
            <div onClick={habilidades}>
              <img src={B1}/>
            </div>
            <div onClick={home}>
              <img src={B1}/>
            </div>
            <div onClick={home}>
              <img src={B1}/>
            </div>

        </div>
      </>
  )
}
