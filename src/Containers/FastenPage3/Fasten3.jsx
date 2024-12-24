import React from "react";
import './Fasten3.css'
import origin1 from './origin1.png'
import origin2 from './origin2.png'
import origin3 from './origin3.png'
import origin4 from './origin4.png'

function Fasten3() {
  return (

            <div className="Fasten3">
                <div>
                    <h1 className="fasten3-h1">На каждый случай — <span>свой тариф</span> </h1>
                </div>
                <div className="flex-card">
                    <div className="CARD1">
                        <div className="CARD-block">
                            <img className="card-img" width={'480px'} src={origin1} alt="" />
                            <p className="block-p1">Fasten</p>
                            <p className="block-p2">Для коротких <br />поездок</p>
                        </div>
                    </div>
                    <div className="CARD2">
                        <div className="CARD-block">
                            <img className="card-img" width={'460px'} src={origin2} alt="" />
                            <p className="block-p11">Upper</p>
                            <p className="block-p22">На работу <br />и по делам</p>
                        </div>
                    </div>
                    <div className="CARD2">
                        <div className="CARD-block">
                            <img className="card-img" width={'450px'} src={origin3} alt="" />
                            <p className="block-p11">Extra</p>
                            {/* <p className="block-p2">Расслабиться<br />в долгой поездке</p> */}
                            <p className="block-p22" >Расслабиться <br />в долгой поездке</p>
                        </div>
                    </div>
                    <div className="CARD2">
                        <div className="CARD-block">
                            <img className="card-img" width={'410px'} src={origin4} alt="" />
                            <p className="block-p11">Max</p>
                            <p className="block-p22">На важную <br />встречу</p>
                        </div>
                    </div>
                </div>
            </div>
  );
}

export default Fasten3;
