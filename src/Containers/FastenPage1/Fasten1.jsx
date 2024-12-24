import React from "react";
import './Fasten1.css'
import FastenIMG from './fasten-img.svg'
import FastenIMG1 from './fasten-backround-img.svg'
// import FastenPage5 from '../FastenPage5/Fasten5'
function Fasten1() {
  return (
    <div className="Fasten1">
        <div className="flex-Fasten1">
            <a href={"http://localhost:3000/"}><img width={'70px'} src={FastenIMG} alt="" /></a>
            <a href={'../FastenPage5/Fasten5.jsx'}><button className="Fasten-BTN">Скачать</button></a>
        </div>
        <div className="Fasten1-IMG">
            <img src={FastenIMG1} alt="" />
        </div>
        <div className="Card">

        </div>
    </div>
  );
}

export default Fasten1;
