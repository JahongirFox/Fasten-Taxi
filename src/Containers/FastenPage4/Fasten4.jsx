import React from "react";
import './Fasten4.css'
import orig1 from './orig1.webp'
import orig2 from './orig2.webp'
import orig3 from './orig3.webp'
function Fasten4() {
  return (
      <div className="Fasten4">
          <div>
              <h1 className="Fasten4-h1">Всегда <span>удобное</span> приложение</h1>
          </div>
          <div className="Cards4">
                <div className="card4">
                    <img className="radius" width={'500px'} src={orig1} alt="" />
                    <h1 className="card4-h1">Оплата картой <br />или наличными</h1>
                    <p className="card4-p" >Просто и быстро</p>
                </div>
                <div className="card4">
                    <img className="radius" width={'500px'} src={orig2} alt="" />
                    <h1 className="card4-h1">Цена известна <br />заранее</h1>
                    <p className="card4-p" >Всё честно и предсказуемо</p>
                </div>
                <div className="card4">
                    <img className="radius" width={'500px'} src={orig3} alt="" />
                    <h1 className="card4-h1">Видно, где едет <br />водитель</h1>
                    <p className="card4-p" >На карте в приложении</p>
                </div>
          </div>
      </div>
  );
}

export default Fasten4;
