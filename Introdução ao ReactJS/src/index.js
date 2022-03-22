import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css";

const sum = (a,b) => {
    return a + b;
}

const primeiroJSX = () => {
    return(
        <div className='custom'>
            Mateus Silva Souza - Introdução ao ReactJS
            <h1>Soma: {sum(10,10)}</h1>
        </div>
    );
}

const App = () => {
    return(
        <div className='App'>
            {primeiroJSX()}
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement); /**Renderiza os elementos*/