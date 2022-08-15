import React, { useState } from 'react';
import InputPercent from "../ComponentPercent/InputPercent.jsx";
import InputNumber from "../ComponetNumber/InputNumber.jsx";
import InputResult from "../ComponentResult/InputResult.jsx";
import ButtonResult from "../ButtonResult/ButtonResult.jsx";
import Operations from "../ComponentsOperations/Operations.jsx";
import BarraPercent from '../ComponetBarraPercent/BarraPercent.jsx';

function App() {

  const [Result, setResult] = useState(0);
  const [persent, setpersent] = useState('');
  const [num, setNum] = useState('');

  const numPercent = 100;

  const percent = (e) => {
    setpersent(e.target.value);
  }

  const number = (e) => {
    setNum(e.target.value);
  }

  const ButtonR = (e) => {
    setResult(persent * num / numPercent);
  }




  return (
    <div className="container ContApp">
      <div className='contInfo'>
        <Operations
          percent={persent}
          numPercent={numPercent}
          num={num}
        />
            <BarraPercent
              percent={persent}
              numPercent={numPercent}
            />

        <div className='row'>
          <div className='col-md-6'>
            <InputPercent
              percent={percent}
            />
          </div>
          <div className='col-md-6'>
            <InputNumber
              number={number}
            />
          </div>
          <InputResult
            Result={Result}
          />
          <ButtonResult
            ButtonR={ButtonR}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
