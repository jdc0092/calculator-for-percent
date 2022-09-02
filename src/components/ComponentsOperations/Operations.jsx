
import '../css/App.css';
import React from "react";



function Operations(props) {

    return (
        <div>
            <table className="table">
                <thead>
                    <tr className='table-dark'>
                        <th scope="col" className='fz-20 mjx-char MJXc-TeX-math-I'>N</th>
                        <th scope="col">%</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='table-active'>
                        <td className="mjx-char MJXc-TeX-math-I">X</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Total: ${props.num.toLocaleString('es-Us')}</td>
                        <td>({props.numPercent.toLocaleString('es-Us')}%)</td>
                    </tr>
                    <tr>
                        <td>Pago: ${props.montPercent.toLocaleString('es-Us')}</td>
                        <td>{props.inputPercent.toLocaleString('es-Us')}%</td>
                    </tr>
                    <tr>
                        <td>Rest: ${props.restPercent.toLocaleString('es-Us')}</td>
                        <td>{props.valPercentsRestant}%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Operations;
