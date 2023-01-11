import React from 'react'
import { TextField } from '@mui/material'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from "@mui/material/Checkbox";
import InputAdornment from '@mui/material/InputAdornment';
// import SearchIcon from '@mui/icons-material/Search';

const data = {
  result: [
    {
      PatientName: "Mr. Suresh Subhash Patil",
      UHID: "1-23155455",
      Age: "23Y 02M 04D",
      Gender: "Male",
      BedNo: "1235",
      ArrivalDatentime: "12/02/2022, 12.30AM",
      DoctorName: "Dr. Jayant Pawar",
    }
  ]

}
console.log(JSON.stringify(data.result));

export default function Applicationform() {
  return (
    <div>
      <form>
        <div className='ml-5' >

          <div className='grid mt-2 ml-5 '>

            <textLabel className='font-bold text-xl p-2'>IPD EMR</textLabel>
            <div className='flex gap-7 mt-2  '>
              <TextField size="small" className='w-50 m-10 '
                label="Search By UHID Patient Name, Mobile No."
                name="firstName"></TextField>
              {/* <svg data-testid="SearchIcon"></svg> */}
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Medico legal case" />
              </FormGroup>
            </div>


          </div>



          {data.result.map((data) => (
            <div className='grid grid-cols-6 gap-2 justify-center m-2 rounded-lg p-2 border border-black-1' style={{ backgroundColor: '#dcdcdc' }}>

              <span className='font-semibold'>Patient Name:</span>
              <TextField id="standard-basic" variant="standard" label={data.PatientName}> </TextField>
              <span className='font-semibold'> UHID:</span>
              <TextField id="standard-basic" variant="standard" label={data.UHID} > </TextField>
              <span className='font-semibold'> Age:</span>
              <TextField id="standard-basic" variant="standard" label={data.Age}></TextField>
              <span className='font-semibold'> Gender:</span>
              <TextField id="standard-basic" variant="standard" label={data.Gender}></TextField>
              <span className='font-semibold'> Bed No:</span>
              <TextField id="standard-basic" variant="standard" label={data.BedNo} ></TextField>
              <span className='font-semibold'> Arrival Date & Time:</span>
              <TextField id="standard-basic" variant="standard" label={data.ArrivalDatentime}></TextField>
              <span className='font-semibold'>Doctor Name:</span>
              <TextField id="standard-basic" variant="standard" label={data.DoctorName}></TextField>


            </div>

          ))}

          <div>
          <div className='grid  gap-2 justify-center m-2 rounded-lg p-2 border border-black-1' style={{ backgroundColor: '#ff69b4' }}>

            <span className='font-semibold'>Vital</span>
            </div>
            <div>
         <div className="flex justify-center">
          <label className='mt-3'>Temp :</label>
          <TextField id="outlined-basic" size="small" variant="outlined"   sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">F</InputAdornment>,
          }}/>
           <label className='mt-3'>Temp</label>
          <TextField id="outlined-basic" size="small" variant="outlined"   sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
          }}/>
           <label className='mt-3'>Temp</label>
          <TextField id="outlined-basic" size="small" variant="outlined"   sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
          }}/>
           <label className='mt-3'>Temp</label>
          <TextField id="outlined-basic" size="small" variant="outlined"   sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
          }}/>
           <label className='mt-3'>Temp</label>
          <TextField id="outlined-basic" size="small" variant="outlined"   sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
          }}/>
         </div>
         <div className="flex justify-center">
          <label className='mt-3'>Temp :</label>
          <TextField id="outlined-basic" size="small" variant="outlined"   sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">F</InputAdornment>,
          }}/>
           <label className='mt-3'>Temp</label>
          <TextField id="outlined-basic" size="small" variant="outlined"   sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
          }}/>
           <label className='mt-3'>Temp</label>
          <TextField id="outlined-basic" size="small" variant="outlined"   sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
          }}/>
           <label className='mt-3'>Temp</label>
          <TextField id="outlined-basic" size="small" variant="outlined"   sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
          }}/>
           <label className='mt-3'>Temp</label>
          <TextField id="outlined-basic" size="small" variant="outlined"   sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
          }}/>
         </div>
            </div>
          </div>

        </div>
      </form>
    </div>
  )
}
