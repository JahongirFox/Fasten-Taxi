import React from "react";
import './Fasten2.css'
// import VIDEOCADR from './fasten-video.mp4'
import LOGO from './logo-fasten-taxi.svg'

function Fasten2() {
  return (
    <div className="Fasten2">
        <div className="Fasten2-TEXt">
            <h1 className="TEXT2">Невозможно молчать о таких <br /> низких ценах на такси</h1>
            <p className="TEXT2-P">Поездки по Ташкенту от 3900 сум</p>
        </div>

        <div className="CARD-fasten">
                <img className="LOGO" width={'120px'} src={LOGO} alt="" />
                
                <p className="LOGO1-TEXT">Дешёвые поездки всегда рядом</p>
                <p className="LOGO2-TEXT">Среднее время подачи — до 5 минут</p>
      
        </div>
    </div>
  );
}

export default Fasten2;
