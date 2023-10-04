import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Welcomepage() {
  const [formData, setFormData] = useState({
    segment: "",
    manufacturer: "",
    variant: "",
  });


  const [segmentOptions, setsegmentOptions] = useState([]);
  const [manufacturerOptions, setmanufacturerOptions] = useState([]);
  const [variantOptions, setvariantOptions] = useState([]);
  const [selectedsegmentid, setselectedsegmentid] = useState();
  const [quantity, setquantity] = useState();

  sessionStorage.setItem("quantity",quantity);


  const navigate = useNavigate();

  useEffect(() => {
    // Make an HTTP request to your API endpoint to fetch the data
    fetch("http://localhost:8080/api/segments") // Update with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        setsegmentOptions(data);

      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleInputChangeSegment = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setselectedsegmentid(value);
    fetch("http://localhost:8080/api/mfgbyid/"+value) // Update with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        setmanufacturerOptions(data); 
      }).catch((error) => console.error("Error fetching data:", error));

      fetch("http://localhost:8080/api/segments/getqty/"+value) // Update with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        setquantity(data);
      }).catch((error) => console.error("Error fetching data:", error));
  };

  const handleInputChangeManufacturer = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    fetch("http://localhost:8080/api/variants/"+selectedsegmentid+"/"+value) // Update with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        setvariantOptions(data);
      }).catch((error) => console.error("Error fetching data:", error));

  };

  const handleInputChangeVariant = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    }); 

    sessionStorage.setItem("model_id",value);
    
  };

  const handleSubmit = (event) => {
    // Handle form submission here, e.g. send data to a server
    //console.log(formData);  
  
    event.preventDefault();
    navigate('/defaultconfig/'+formData.variant);
    
  };

  return (
    <div style={{}}>
      
      <Form onSubmit={handleSubmit}  method="post" style={{ width: "30%",marginLeft:40 }}>
        <Form.Label style={{ fontWeight: "bold", fontSize: "21px" }}>
          Please Select :
        </Form.Label>
        <br/>
        <Form.Label style={{ fontWeight: "bold", fontSize: "18px" }}>
          Segment :
        </Form.Label>
        <Form.Control
          as="select"
          name="segment"
          value={formData.segment}
          onChange={handleInputChangeSegment}
        >
          <option value="">Select Option</option>
          {segmentOptions.map((option) => (
            <option key={option.seg_id} value={option.seg_id}>
              {option.seg_name}
            </option>
          ))}
        </Form.Control>

        <Form.Label style={{ fontWeight: "bold", fontSize: "18px" }}>
          Manufacturer :
        </Form.Label>
        <Form.Control
          as="select"
          name="manufacturer"
          value={formData.manufacturer}
          onChange={handleInputChangeManufacturer}
        >
          <option value="">Select Option</option>
          {manufacturerOptions.map((option) => (
            <option key={option.mfg_id} value={option.mfg_id}>
              {option.mfg_name}
            </option>
          ))}
        </Form.Control>


        <Form.Label style={{ fontWeight: "bold", fontSize: "18px" }}>
        Variant :
        </Form.Label>
        <Form.Control
          as="select"
          name="variant"
          value={formData.variant}
          onChange={handleInputChangeVariant}
        >
          <option value="">Select Option</option>
          {variantOptions.map((option) => (
            <option key={option.model_id} value={option.model_id}>
              {option.model_name}
            </option>
          ))}
        </Form.Control>
        <Form.Label style={{ fontWeight: "bold", fontSize: "18px" }}>
        Quantity:
        </Form.Label>
        <br/>
       
        <Form.Group controlId="quantityInput">
        <Form.Control
          type="number"
          step="any"
          min={quantity}
          max="100"
          value={quantity}
          onChange={(e) => setquantity(e.target.value)}
        />
      </Form.Group>
      <br/>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Welcomepage;
