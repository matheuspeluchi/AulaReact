import React from 'react';
import Course from './Curso';

export default (props) => {
  return (
    <div>
      {props.list.map(course => <Course title={course}/>)}
    </div>
  )
}