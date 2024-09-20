import React, { useState } from 'react';
import InputPercent from "../ComponentPercent/InputPercent.jsx";
import InputNumber from "../ComponetNumber/InputNumber.jsx";
// import InputResult from "../ComponentResult/InputResult.jsx";
import Operations from "../ComponentsOperations/Operations.jsx";
import BarraPercent from '../ComponetBarraPercent/BarraPercent.jsx';

import About from "../pages/About.jsx";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {

  const [valPercent, setvalPercent] = useState(0);
  const [num, setNum] = useState(0);

  const numPercent = 100;

  const percent = (e) => {
    setvalPercent(e.target.value);
  }

  const number = (e) => {
    setNum(e.target.value);
  }

  const valPercentsRestant = numPercent - valPercent;
  const valorMult = ((valPercent * num) / numPercent);
  const valorRestant = num - valorMult;

  console.log(valorMult)





  return (
    <div className="container ContApp">

      <div className='contInfo'>
        <Operations
          valPercentsRestant={valPercentsRestant}
          inputPercent={valPercent}
          numPercent={valPercentsRestant}
          num={num}
          restPercent={valorRestant}
          montPercent={valorMult}
        />

        {/* <InputResult
          montPercent={montPercent}
        /> */}

        <div className='row'>
          <div className='col-md-6'>
            <InputPercent
              inputPercent={percent}
            />
          </div>
          <div className='col-md-6'>
            <InputNumber
              inputNumber={number}
            />
          </div>

          <BarraPercent
            BarraPercent={valPercent}
            numPercent={numPercent}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
