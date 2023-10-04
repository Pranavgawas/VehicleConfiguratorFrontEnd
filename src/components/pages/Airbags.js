import React, { useState } from "react";

const Airbags = () => {
  const [compname, setCompname] = useState("Airbags");
  const [types, setTypes] = useState([
    "air bags v1","air bags v2","air bags v3","air bags v4"
  ]);

  return (
    <>
    <br/>
    <br/>
      <label for="airbags" style={{marginRight:30}}>{compname}:</label>

      <select name="airbagstypes" id="airbags" >
        {types.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
      </select>
    </>
  );
};

export default Airbags;
