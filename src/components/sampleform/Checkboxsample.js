
import { Button } from "@mui/material";
import React from "react";

import { TextField } from "@mui/material";

 function Checkboxsample() {
  return (
    <div>
    <form>
    <div className ="grid gap-2 card shadow rounded border p-5">
    
    <TextField size="small"
                  label="First Name"
                  name="firstName" />
            
                <TextField
                size="small"
                  label="Last Name"
                  name="lastName" />
      
 
   <button
                    type="submit"
                    variant="contained"
                    className="bg-blue-700 text-white rounded p-2"
                  >
                    Submit
                  </button>
    </div>
    </form>
    </div>
  )
}

export default Checkboxsample;