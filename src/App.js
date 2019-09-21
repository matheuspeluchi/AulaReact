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
        ]
    }
    render() {  
        return (
            <div>
                <Title title='Hello World'/>
                <CoursesList list={this.state.cursos}/>
            </div>
        )
    }
}