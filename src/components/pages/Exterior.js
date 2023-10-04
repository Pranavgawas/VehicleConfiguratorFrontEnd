import React, { useState ,useEffect } from 'react';
import { Form } from 'react-bootstrap';
import Trial2 from './Trial2';


function Exterior() {
 
  
  return (
    <div>
    <div><b>Exterior Features</b> </div>
    <Trial2 url = "exterior"/>
    </div>
  ) 
}

export default Exterior