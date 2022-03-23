import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css";

/**Importando componente */
import Button from './Button';

const sum = (a,b) => {
    alert(a + b);
}

const primeiroJSX = () => {
    return(
        <div className='custom'>
            Mateus Silva Souza - Introdução ao ReactJS
        </div>
    );
}

const App = () => {
    return(
        <div className='App'>
            {primeiroJSX()}
            <Button onClick={()=> sum(10,20)} name="Mateus Silva Souza"/>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement); /**Renderiza os elementos*/