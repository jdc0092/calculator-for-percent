import React, { useState } from 'react';
import InputPercent from "../ComponentPercent/InputPercent.jsx";
import InputNumber from "../ComponetNumber/InputNumber.jsx";
import InputResult from "../ComponentResult/InputResult.jsx";
import ButtonResult from "../ButtonResult/ButtonResult.jsx";
import Operations from "../ComponentsOperations/Operations.jsx";
import BarraPercent from '../ComponetBarraPercent/BarraPercent.jsx';
import ButtonRest from "../ButtonRest/ButtonRest.jsx";

function App() {

  const [montPercent, setMontPercent] = useState(0);
  const [montRest, setMontRest] = useState(0);
  const [valPercent, setvalPercent] = useState('');
  const [num, setNum] = useState('');

  const numPercent = 100;

  const percent = (e) => {
    setvalPercent(e.target.value);
  }

  const number = (e) => {
    setNum(e.target.value);
  }

  const ButtonR = (e) => {
    setMontPercent((valPercent * num) / numPercent);
  }

  const ButtonRestCalc = (e) => {
    setMontRest(num - montPercent);
  }


  return (
    <div className="container ContApp">
      <div className='contInfo'>
        <Operations
          inputPercent={valPercent}
          numPercent={numPercent}
          num={num}
          restPercent={montRest}
          montPercent={montPercent}
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

          <div className='row'>
            <div className='col-md-6'>
              <ButtonResult
                ButtonR={ButtonR}
              />
            </div>
            <div className='col-md-6'>
              <ButtonRest
                ButtonRest={ButtonRestCalc}
              />
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
