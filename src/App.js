import React, { Component } from 'react';
import Title from './Components/Titulo';
import CoursesList from './Components/ListaDeCursos';

export default class App extends Component {
    state = {
        cursos: [
            "React", 
            "React Native",
            "JavaScript",
            "Node"
        ],

        cursos2: [
            "Play FrameWorkd", 
            "NodeJS",
            "Angular Cli",
            "VueJS"
        ]
    }


    alterarLista = () => {
        let lista = this.state.cursos;
        lista = lista.concat(this.state.cursos2);
        console.log(lista)
        this.setState({
            cursos: lista
        })
    }
    render() {  
        return (
            <div>
                <Title title='Hello World'/>
                <CoursesList list={this.state.cursos}/>
                <button onClick={this.alterarLista}>Alterar Lista</button>
            </div>
        )
    }
}