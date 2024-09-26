import React from 'react';
import { useParams } from 'react-router-dom';
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
function Allpath() {
  
    const { id } = useParams();
    var image;
    if (id === 1) {
      image = img1;
    } else if (id === 2) {
      image = img2;
    } else if (id === 3) {
      image = img3;
    } else if (id === 4) {
      image = img4;
    } else if (id === 5) {
      image = img5;
    } else if (id === 6) {
      image = img6;
    } else if (id === 7) {
      image = img7;
    } else if (id === 8) {
      image = img8;
    } else if (id === 9) {
      image = img9;
    } else if (id === 10) {
      image = img10;
    } else if (id === 11) {
      image = img11;
    } else if (id === 12) {
      image = img12;
    } else if (id === 13) {
      image = img13;
    } else if (id === 14) {
      image = img14;
    } else if (id === 15) {
      image = img15;
    } else if (id === 16) {
      image = img16;
    } else if (id === 17) {
      image = img17;
    } else if (id === 18) {
      image = img18;
    } else if (id === 19) {
      image = img19;
    } else if (id === 20) {
      image = img20;
    }
    

  return (
    <>
    </>
  )
}

export default Allpath;