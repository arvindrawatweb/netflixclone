import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
import Details from "./Details";


export default function Card_dv() {
  const immmg=`${img1}`;
  const navigation =useNavigate();


const clickc=(txt)=>
{
//alert(txt);
window.scrollTo({
  top:-window.innerHeight,
  behavior: "smooth" // Optional smooth scrolling animation
});

navigation(`/details/${txt}`);

}


  return (
    <>
    <div className='grid-container'>

<div className="dvv" onClick={()=>clickc('1')}>
 
<div className="card crd_wdth" >
  <img className="card-img-top" src={img1} alt="Card image cap"/>
  <div className="card-body crd_dv_ttx">
    <p className="card-text">April 2 2023</p>
  </div>
</div>

</div>

<div className="dvv" onClick={()=>clickc('2')}>
<div className="card crd_wdth" >
  <img className="card-img-top" src={img2} alt="Card image cap"/>
  <div className="card-body crd_dv_ttx">
    <p className="card-text">April 4 2023</p>
  </div>
</div>
</div>

<div className="dvv" onClick={()=>clickc('3')}>
<div className="card crd_wdth" >
  <img className="card-img-top" src={img3} alt="Card image cap"/>
  <div className="card-body crd_dv_ttx">
    <p className="card-text">April 2 2023</p>
  </div>
</div>
</div>

<div className="dvv" onClick={()=>clickc('4')}>
<div className="card crd_wdth" >
  <img className="card-img-top" src={img4} alt="Card image cap"/>
  <div className="card-body crd_dv_ttx">
    <p className="card-text">April 8 2023</p>
  </div>
</div>
</div>

<div className="dvv" onClick={()=>clickc('5')}>
<div className="card crd_wdth" >
  <img className="card-img-top" src={img5} alt="Card image cap"/>
  <div className="card-body pt-1  crd_dv_ttx">
    <p className="card-text ">April 17 2023</p>
  </div>
</div>
</div>


<div className="dvv" onClick={()=>clickc('6')}>
<div className="card crd_wdth" >
  <img className="card-img-top" src={img6} alt="Card image cap"/>
  <div className="card-body pt-1  crd_dv_ttx">
    <p className="card-text ">April 23 2023</p>
  </div>
</div>
</div>

<div className="dvv" onClick={()=>clickc('7')}>
<div className="card crd_wdth" >
  <img className="card-img-top" src={img7} alt="Card image cap"/>
  <div className="card-body pt-1  crd_dv_ttx">
    <p className="card-text ">April 24 2023</p>
  </div>
</div>
</div>

<div className="dvv" onClick={()=>clickc('8')}>
<div className="card crd_wdth" >
  <img className="card-img-top" src={img8} alt="Card image cap"/>
  <div className="card-body pt-1  crd_dv_ttx">
    <p className="card-text ">April 12 2023</p>
  </div>
</div>
</div>

<div className="dvv" onClick={()=>clickc('9')}>
<div className="card crd_wdth" >
  <img className="card-img-top" src={img9} alt="Card image cap"/>
  <div className="card-body pt-1  crd_dv_ttx">
    <p className="card-text ">April 11 2023</p>
  </div>
</div>
</div>


<div className="dvv" onClick={()=>clickc('10')}>
<div className="card crd_wdth" >
  <img className="card-img-top" src={img10} alt="Card image cap"/>
  <div className="card-body pt-1  crd_dv_ttx">
    <p className="card-text ">April 2 2023</p>
  </div>
</div>
</div>


<div className="dvv" onClick={()=>clickc('11')}>
<div className="card crd_wdth" >
  <img className="card-img-top" src={img11} alt="Card image cap"/>
  <div className="card-body pt-1  crd_dv_ttx">
    <p className="card-text ">April 22 2023</p>
  </div>
</div>
</div>

<div className="dvv" onClick={()=>clickc('12')}>
<div className="card crd_wdth" >
  <img className="card-img-top" src={img12} alt="Card image cap"/>
  <div className="card-body pt-1  crd_dv_ttx">
    <p className="card-text ">April 2 2023</p>
  </div>
</div>
</div>

<div className="dvv" onClick={()=>clickc('13')}>
<div className="card crd_wdth" >
  <img className="card-img-top" src={img13} alt="Card image cap"/>
  <div className="card-body pt-1  crd_dv_ttx">
    <p className="card-text ">April 29 2023</p>
  </div>
</div>
</div>

<div className="dvv" onClick={()=>clickc('14')}>
<div className="card crd_wdth" >
  <img className="card-img-top" src={img14} alt="Card image cap"/>
  <div className="card-body pt-1  crd_dv_ttx">
    <p className="card-text ">April 9 2023</p>
  </div>
</div>
</div>


<div className="dvv" onClick={()=>clickc('15')}>
<div className="card crd_wdth" >
  <img className="card-img-top" src={img15} alt="Card image cap"/>
  <div className="card-body pt-1  crd_dv_ttx">
    <p className="card-text ">April 3 2023</p>
  </div>
</div>
</div>


<div className="dvv" onClick={()=>clickc('16')}>
<div className="card crd_wdth" >
  <img className="card-img-top" src={img16} alt="Card image cap"/>
  <div className="card-body pt-1  crd_dv_ttx">
    <p className="card-text ">April 14 2023</p>
  </div>
</div>
</div>

<div className="dvv" onClick={()=>clickc('17')}>
<div className="card crd_wdth" >
  <img className="card-img-top" src={img17} alt="Card image cap"/>
  <div className="card-body pt-1  crd_dv_ttx">
    <p className="card-text ">April 19 2023</p>
  </div>
</div>
</div>

<div className="dvv" onClick={()=>clickc('18')}>
<div className="card crd_wdth" >
  <img className="card-img-top" src={img18} alt="Card image cap"/>
  <div className="card-body pt-1  crd_dv_ttx">
    <p className="card-text ">April 5 2023</p>
  </div>
</div>
</div>


<div className="dvv" onClick={()=>clickc('19')}>
<div className="card crd_wdth" >
  <img className="card-img-top" src={img19} alt="Card image cap"/>
  <div className="card-body pt-1  crd_dv_ttx">
    <p className="card-text ">April 7 2023</p>
  </div>
</div>
</div>

<div className="dvv" onClick={()=>clickc('20')}>
<div className="card crd_wdth" >
  <img className="card-img-top" src={img20} alt="Card image cap"/>
  <div className="card-body pt-1  crd_dv_ttx">
    <p className="card-text ">April 6 2023</p>
  </div>
</div>
</div>

</div>
<div className="row mx-auto">
    <center><button type='button' className="btn btn-primary mb-5" style={{'width':'180px','fontSize':'13px','background':'black','color':'white','borderColor':'white','fontWeight':'bold'}}>Show 18 more in April</button></center>
</div>




    </>
  )
}

