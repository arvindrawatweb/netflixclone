import React from 'react'
import { FaFilm } from "react-icons/fa";
import { GiGamepad } from "react-icons/gi";
import Card_dv from './Card_dv';

import { BiChild , BiSlideshow , BiVideoRecording , BiTv , BiVideo} from "react-icons/bi";
export default function Middv() {
  return (
    <>
     <div className="container-fluid web_dv">

<div className="row">
  <h3 className="fw-bold pt-4 heang ">I'm interested  in covering titles releasing in April</h3>
</div>
<div className="mt-3">
  <button type="button" className='btn-sm btn-primary bttnns'><FaFilm/> Film</button> <button type="button" className='bttnns btn-sm btn-primary'><BiTv/> Series</button>  <button type="button" className='bttnns btn-sm btn-primary'><BiVideo/> Documentary</button> <button type="button" className='bttnns btn-sm btn-primary'><BiChild/> Kids</button>  <button type="button" className='bttnns btn-sm btn-primary'><BiVideoRecording/> Reality</button> <button type="button" className=' bttnns btn-sm btn-primary'><BiSlideshow/> Stand-Up Comedy</button> <button type="button" className=' bttnns btn-sm btn-primary'><GiGamepad/> Game</button>
    </div>
    <div className='pt-3'>
     <hr className='hrr' ></hr>
    </div>
<div className='container'>
  <Card_dv/>
</div>

  </div>

    </>
  )
}

