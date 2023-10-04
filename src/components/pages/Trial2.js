import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

function Trial2({UpdateComp, finalcomp, url}) {
  const [compOptions, setCompOptions] = useState([]);
  const [configOptions, setConfigOptions] = useState([{}]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedkey, setSelectedkey] = useState([]);
  
  sessionStorage.setItem("Seat_Belt",selectedOptions["Seat_Belt"]);
  sessionStorage.setItem("Air_Bag",selectedOptions["Air_Bag"]);
  sessionStorage.setItem("GPS_Navigation",selectedOptions["GPS_Navigation"]);
  sessionStorage.setItem("Tyre_Pressure_Monitoring_System",selectedOptions["Tyre_Pressure_Monitoring_System"]);
  

  

  const model_id = sessionStorage.getItem("model_id");
  useEffect(() => {
    fetch(`http://localhost:8080/api/${url}/${model_id}`)
      .then((response) => response.json())
      .then((data) => {
        setCompOptions(data);
        // console.log(compOptions);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const onHandleOption = (event) => {
    const { name , value } = event.target;
    console.log(event.target)
    fetch(`http://localhost:8080/api/config/${model_id}/${name}`)
      .then((response) => response.json())
      .then((data) => {
        setConfigOptions(data);
       
      })
      .catch((error) => console.error("Error fetching data:", error));
      // console.log(selectedOptions);
   
    };
     
     
  

  const onSelectChange = (event) => {
    const { name, value , key } = event.target;
    
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [name]: value // Update selected option for this component
      
    }));
  };


  return (
    <div>
      {compOptions.map((option, index) => (
        <div key={index}>
          <Form.Label style={{ fontWeight: "bold", fontSize: "18px" }}>
            {option}
          </Form.Label>
          <Form.Control
            as="select"
            name={option}
            onClick={onHandleOption}
            onChange={onSelectChange}
            value={selectedOptions[option] || ''}
          >
            <option >{selectedOptions[option]??"Select Option"}</option>
            {configOptions.map((configOption) => (
              <><option
                value={configOption.sub_type +" :₹ " + configOption.price }
                key={configOption.alt_id}
              >
                {configOption.sub_type + " :₹ " + configOption.price }
                
              </option>
             </>
            ))}
          </Form.Control>
        </div>
      ))}
    </div>
  );
}

export default Trial2;
