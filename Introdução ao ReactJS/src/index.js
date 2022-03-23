import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./style.css";

/**Importando componente */
import Button from './Button';

// const sum = (a,b) => {
//     alert(a + b);
// }

// const primeiroJSX = () => {
//     return(
//         <div className='custom'>
//             Mateus Silva Souza - Introdução ao ReactJS
//         </div>
//     );
// }

// const App = () => {
//     return(
//         <div className='App'>
//             {primeiroJSX()}
//             <Button onClick={()=> sum(10,20)} name="Mateus Silva Souza"/>
//         </div>
//     );
// }

class App extends Component{

    constructor(props){
        super(props);

        this.state = {
            clock: 1000,
            copo: 'Água',
        }
    }

    componentDidMount(){
        window.setTimeout(() => {
            this.setState({
                copo: 'Suco'
            })
        }, 3000);
    }

    alterarCopo = () =>{
        this.setState({
            copo:'Refrigerante'
        });
    }

    render(){

        const {clock} = this.state;
        return(
            <div>
                <h1>{this.state.clock}</h1>
                <Button onClick={() => this.alterarCopo()} name={this.state.copo}/>
            </div>
        )
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement); /**Renderiza os elementos*/