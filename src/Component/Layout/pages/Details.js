import React from 'react'
import { useParams } from 'react-router-dom';
import '../../Layout/style.css';
import img1 from '../../images/warsalor.jpg';
import img2 from '../../images/monique.jpg';
import img3 from '../../images/raji.jpg';
import img4 from '../../images/lewis.jpg';
import img5 from '../../images/beef.jpg';
import img6 from '../../images/thikwater.jpg';
import img7 from '../../images/translatyic.jpg';
import img8 from '../../images/chupa.jpg';
import img9 from '../../images/belinda.jpg';
import img10 from '../../images/manhunt.jpg';
import img11 from '../../images/baber.jpg';
import img12 from '../../images/floridaman.jpg';
import img13 from '../../images/alex.jpg';
import img14 from '../../images/obesion.jpg';
import img15 from '../../images/seven.jpg';
import img16 from '../../images/queen.jpg';
import img17 from '../../images/wheater.jpg';
import img18 from '../../images/rogue.jpg';

import img19 from '../../images/thiord.jpg';
import img20 from '../../images/rich.jpg';

import Allpath from './Allpath';
const Details = ()=> {
    const { id } = useParams();
    var image;
    if (id == 1) {
      image = img1;
    } else if (id == 2) {
      image = img2;
    } else if (id == 3) {
      image = img3;
    } else if (id == 4) {
      image = img4;
    } else if (id == 5) {
      image = img5;
    } else if (id == 6) {
      image = img6;
    } else if (id == 7) {
      image = img7;
    } else if (id == 8) {
      image = img8;
    } else if (id == 9) {
      image = img9;
    } else if (id == 10) {
      image = img10;
    } else if (id == 11) {
      image = img11;
    } else if (id == 12) {
      image = img12;
    } else if (id == 13) {
      image = img13;
    } else if (id == 14) {
      image = img14;
    } else if (id == 15) {
      image = img15;
    } else if (id == 16) {
      image = img16;
    } else if (id == 17) {
      image = img17;
    } else if (id == 18) {
      image = img18;
    } else if (id == 19) {
      image = img19;
    } else if (id == 20) {
      image = img20;
    }
    
   
    
  return (
    <>
   
    <div className="container-fluid web_coordv">

<div className="row mx-auto">
  <h3 className="fw-bold pt-4 heang "></h3>
</div>
<div className="mt-3">
  
    </div>
    <div className='pt-3'>
     <hr className='hrr' ></hr>
    </div>
<div className='container'>
    <div className='row'>
        <div  className='col-md-6'><h3 className='title_wd'>War Sailor</h3>
        <h4 className=' sub_title'>Limited Series releasing 
in India

 on April 2nd, 2023 at 12:30 PM IST</h4></div>
        <div className='col-md-6'></div>
<div className='col-md-6 left_dv mt-2 mb-5' id='dtlll'><p className='det_ttl pt-2'>Synopsis</p>

<p className='dtlls'>Alfred Garnes is a working-class sailor, who has recently become the father of a third child. He and his childhood friend Sigbjørn Kvalen (Wally) are working on a merchant ship in the middle of the Atlantic Ocean when World War II breaks out. They are unarmed civilians on the front lines of a war they never asked to join. The two men struggle for survival in a spiral of violence and death, where at any moment German submarines may attack their valuable vessels. The war sailors have one goal: to survive–and to return home.</p>


<p className='dtlls'>
Meanwhile, Alfred's wife Cecilia struggles through the war alone in Bergen, raising three children on her own, not knowing whether she will ever see Alfred again.When British aircrafts attempt to bomb the German submarine bunker in Bergen, they instead hit the primary school at Laksevåg and civilian homes at Nøstet, resulting in hundreds of civilian deaths. When the news reaches Alfred and Wally in Canada, they wonder if they have anything left at home to return to.</p>

<button type='button' className='btn-sm btn-primary btnnn'>Series</button> <button type='button' className='btn-sm btn-primary btnnn'>Mysteries</button> <button type='button' className='btn-sm btn-primary btnnn mb-3'>Dramas</button>
</div>
<div className='col-md-6 mb-5' id='mmmg'>

<img className='immd' src={image}/>

</div>
</div>


</div>

  </div>
    
    </>
  )
}

export default Details;