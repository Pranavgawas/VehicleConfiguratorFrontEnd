import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function Defaultconfig() {

    const model_id = sessionStorage.getItem("model_id");

    const [coreOptions, setcoreOptions] = useState([]);
    const [standardOptions, setstandardOptions] = useState([]);
    const [exteriorOptions, setexteriorOptions] = useState([]);
    const [interiorOptions, setinteriorOptions] = useState([]);
    const [price, setprice] = useState();

    sessionStorage.setItem("price",price);

    let navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8080/api/componentbyc/"+model_id) // Update with your API endpoint
          .then((response) => response.json())
          .then((data) => {
            setcoreOptions(data);
            console.log(coreOptions);
          })
          .catch((error) => console.error("Error fetching data:", error));

          fetch("http://localhost:8080/api/componentbys/"+model_id) // Update with your API endpoint
          .then((response) => response.json())
          .then((data) => {
            setstandardOptions(data);
            console.log(coreOptions);
          })
          .catch((error) => console.error("Error fetching data:", error));

          
          fetch("http://localhost:8080/api/componentbye/"+model_id) // Update with your API endpoint
          .then((response) => response.json())
          .then((data) => {
            setexteriorOptions(data);
           
          })
          .catch((error) => console.error("Error fetching data:", error));

          
          fetch("http://localhost:8080/api/componentbyi/"+model_id) // Update with your API endpoint
          .then((response) => response.json())
          .then((data) => {
            setinteriorOptions(data);
        
          })
          .catch((error) => console.error("Error fetching data:", error));

          

          fetch("http://localhost:8080/api/price/"+model_id) // Update with your API endpoint
          .then((response) => response.json())
          .then((data) => {
            setprice(data);
          })
          .catch((error) => console.error("Error fetching data:", error));

      }, []);

      const handleConfigure = (event) => {
        navigate('/configure');
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
        <div><b>Standard components</b></div>
        {
            standardOptions.map(
            (option) => (
            <ul style={{marginBottom:0}}><li>{option}</li></ul>
            ))
        }
        
        <hr />
        <div><b>Exterior components</b></div>
        {
            exteriorOptions.map(
            (option) => (
            <ul style={{marginBottom:0}}><li>{option}</li></ul>
            ))
        }
        
        <hr />
        <div><b>Interior components</b></div>
        {
            interiorOptions.map(
            (option) => (
            <ul style={{marginBottom:0}}><li>{option}</li></ul>
            ))
        }
        <br/>
        <hr />
        <div><b>Base Price : </b>{price}</div>
        <div><b>S.T @12% :</b> {price*0.12}</div>
        <div><b>TOTAL :</b> {price + (price*0.12)}</div><br/>
        <Button style={{marginRight:20,marginLeft:20}}>Confirm Order</Button>
        <Button style={{marginRight:20}} onClick={handleConfigure}>Configure</Button>
        <Button style={{marginRight:20}} >Cancel</Button>
    </div>
    
  )
}

export default Defaultconfig