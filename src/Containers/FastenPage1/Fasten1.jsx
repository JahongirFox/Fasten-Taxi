import React from "react";
import './Fasten1.css'
import FastenIMG from './fasten-img.svg'
import FastenIMG1 from './fasten-backround-img.svg'
function Fasten1() {
  return (
    <div className="Fasten1">
        <div className="flex-Fasten1">
            <a href={"http://localhost:3000/"}><img width={'70px'} src={FastenIMG} alt="" /></a>
            <button className="Fasten-BTN">Скачать</button>
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
