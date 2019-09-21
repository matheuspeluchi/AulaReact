import React from 'react';
import Course from './Curso';

export default (props) => {
  return (
    <div>
      <ul>        
          {props.list.map(course =>
            <li> 
              <Course title={course}/>
            </li>
          )}
      </ul>
    </div>
  )
}