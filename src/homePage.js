import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';


const jsonData=[
    {
      "id": 1,
      "name": "STATE",
      "type": "WAR HAWK",
      "price": "$323",    
      "color": "N/A",
      "instock": "10",
   
    },
    {
      "id": 2,
      "name": "STATE",
      "type": "CARDINAL",
      "price": "$623",      
      "color": "N/A",
      "instock": "NO",
    
    },
    {
      "id": 3,
      "name": "LINUS",
      "type": "DUTCHI 3 OR 8",
      "price": "$523",        
      "color": "N/A",
      "instock": "YES",
    },
    {
      "id": 4,
      "name": "LINUS",
      "type": "MIXTI 3OR 8",
      "price": "$423",      
      "color": "N/A",
      "instock": "5",
    
    },
    {
      "id": 5,
      "name": "LINUS",
      "type": "DUTCHI",
      "price": "$223",        
      "color": "N/A",
      "instock": "15",
   
    },
    {
      "id": 6,
      "name": "LINUS",
      "type": "DOVER 1 OR 5",
      "price": "$126",        
      "color": "N/A",
      "instock": "YES",
   
    },   
  ]

class HomePage extends Component {
  render() {
      // console.log(jsonData)
    return (
      <div className="homepageContainer">
      <div className="container">
        <div className="row">
          <div className="col-sm-1 left-wrapper" />
          <div className="col-sm-10 center">
            <div className="middleMain">
              <div className="header">
                <div className="bikeContainer">
                  <div className="hdrbike">. BIKE STOCK .</div>
                </div>
                <div className="hdrBelow">
                  <div>BRAND WE CARRY -</div>
                  <div className="hdrText">LINUS </div>
                  <div className="hdrSymbole">/</div>
                  <div className="hdrText">BROMPTON </div>
                  <div className="hdrSymbole">/</div>
                  <div className="hdrText">CHRISTIANA </div>
                  <div className="hdrSymbole">/</div>
                  <div className="hdrText">STATE </div>
                </div>
              </div>
              <div className="cycleContainerMain">
                <div className="row">
                  {jsonData.map((item, i) => {
                    return (                    
                        
                      <div key={i} className="col-sm-4 center">
                        <div className="FirstContainer">
                          <img
                            src={require("./image/cycle_sample.png")}
                            className="img-responsive imagetopCapture"
                            alt="description"
                          />
                          <div className="beloImgfirstas">
                            <div className="nameTexy">{item.name}</div>
                          </div>
                          <div className="beloImgfirst">
                            <div className="typeTexy">{item.type}</div>
                          </div>
                          <div className="beloImgfirstas">
                            <div className="typeTexy">Price - {item.price}</div>
                          </div>
                          <div className="beloImgfirstas">
                            <div className="typeTexy">color - {item.color}</div>
                          </div>
                          <div className="beloImgfirstas">
                            <div className="typeTexy">
                              In Stocl - {item.instock}
                            </div>
                          </div>
                          <div className="buttonClass">
                            <button
                              type="submit"
                              className="btn btn-heder form-control-sm"
                            >
                              FULL SPECS
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-1 right-wrapper" />
        </div>
      </div>
    </div>
    
    
    );
  }
}

export default HomePage;



