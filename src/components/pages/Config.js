import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Stdfeature from './Stdfeature';
import Exterior from './Exterior';
import Interior from './Interior';

const Config = () => {
    
    const model_id = sessionStorage.getItem("model_id");

    const [coreOptions, setcoreOptions] = useState([]);
    const [categoryname,setcategoryname] = useState("standard");
    
    const [finalcomp, setFinalcomp] = useState([]);

    let UpdateComp =(param)=>{

      setFinalcomp(param);
      
    }

    let navigate = useNavigate();


    useEffect(() => {
        fetch("http://localhost:8080/api/componentbyc/"+model_id) // Update with your API endpoint
          .then((response) => response.json())
          .then((data) => {
            setcoreOptions(data);
    
          })
          .catch((error) => console.error("Error fetching data:", error));

      }, []);

      const handleStandard = (event) => {
        setcategoryname("standard");

      }

      const handleExterior = (event) => {
        setcategoryname("exterior");
      }

      const handleInterior = (event) => {
        setcategoryname("interior");
      }

      const handleCancel = (event) => {

      }

      const handleConfirm = (event) => {
        //setcategoryname("interior");
        navigate('/invoice');
      }

  return (
    <div  style={{marginLeft:20}}>
    <br/><br/>
    <div><b>Core components</b></div>
    {
        coreOptions.map(
        (option) => (
        <ul style={{marginBottom:0}}><li>{option}</li></ul>
        ))
    } 
    <hr />
    
    <div>
    <b>{categoryname == "standard" ? <Stdfeature UpdateComp={UpdateComp} finalcomp={finalcomp}/> : categoryname == "exterior" ? <Exterior  UpdateComp={UpdateComp} finalcomp={finalcomp}/> : <Interior  UpdateComp={UpdateComp} finalcomp={finalcomp}/>}</b>
    </div>
    <br />


   
    <Button style={{marginRight:20,marginLeft:20}} onClick={handleStandard}>Standard</Button>
    <Button style={{marginRight:20}} onClick={handleExterior}>Exterior</Button>
    <Button style={{marginRight:20}} onClick={handleInterior}>Interior</Button>
    <Button style={{marginRight:20}} onClick={handleCancel}>Cancel</Button>
    <Button style={{marginRight:20}} onClick={handleConfirm}>Confirm Order</Button>
</div>

  )
}

export default Config