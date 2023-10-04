import React, { useState ,useEffect } from 'react';
import { Form } from 'react-bootstrap';
import Seatbelt from './Seatbelt';
import Airbags from './Airbags';
import Trial2 from './Trial2';



function Stdfeature({UpdateComp,finalcomp}){
  


  return ( <div>
   <div> <b>Standard Features</b> </div>
   <Trial2 url ={"std"} UpdateComp={UpdateComp} finalcomp={finalcomp}/>
    </div>
  )
}

export default Stdfeature