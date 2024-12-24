import React from "react";
import './Fasten4.css'
import orig1 from './orig1.webp'
import orig2 from './orig2.webp'
import orig3 from './orig3.webp'
function Fasten4() {
  return (
      <div className="Fasten4">
          <div>
              <h1 className="Fasten4-h1">An <span>easy-to-use</span> app </h1>
          </div>
          <div className="Cards4">
                <div className="card4">
                    <img className="radius" width={'500px'} src={orig1} alt="" />
                    <h1 className="card4-h1">Оплата <br /> наличными  или<br /> картой</h1>
                    <p className="card4-p" >Быстро и легко</p>
                </div>
                <div className="card4">
                    <img className="radius" width={'500px'} src={orig2} alt="" />
                    <h1 className="card4-h1">Узнайте <br /> стоимость <br /> поездки заранее</h1>
                    <p className="card4-p" >Никаких сюрпризов.</p>
                </div>
                <div className="card4">
                    <img className="radius" width={'500px'} src={orig3} alt="" />
                    <h1 className="card4-h1">Отслеживайте <br /> своего водителя <br /> в режиме <br /> реального <br /> времени</h1>
                    <p className="card4-p" >Навигация в приложении</p>
                </div>
          </div>
      </div>
  );
}

export default Fasten4;
