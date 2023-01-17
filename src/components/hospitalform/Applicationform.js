import React from 'react'
import { Button, TextField } from '@mui/material'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from "@mui/material/Checkbox";
import InputAdornment from '@mui/material/InputAdornment';
import Tableformodal from './Tableformodal';
import Dignosistable from './Dignosistable';
import Investigationtable from './Investigationtable';
import Investigationtable1 from './Investigationtable1';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
//import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Medicationtable from './Medicationtable'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
//import SearchIcon from '@mui/icons-material/Search';

const data6 ={
  result6 :[
    {
      drug:"Cipla",
      drugname: "Crocine",
      freq: "1-0-1",
      dos:"10mg",
      ints:"After Meal",
      duration:"5 Days",
      qtity:"10",
      Route:"Oral",
      iv:"0",
      sdate:"20-12-2022"

    },
    {
      drug:"Pflzer",
      drugname: "Bandy Plus",
      freq: "1-0-1",
      dos:"10mg",
      ints:"After Meal",
      duration:"5 Days",
      qtity:"10",
      Route:"Oral",
      iv:"0",
      sdate:"20-12-2022"

    },
    {
      drug:"GSK",
      drugname: "Dytor 10mg",
      freq: "1-0-1",
      dos:"10mg",
      ints:"After Meal",
      duration:"5 Days",
      qtity:"10",
      Route:"Oral",
      iv:"0",
      sdate:"20-12-2022"

    },
    {
      drug:"Bayer",
      drugname: "Olbimet",
      freq: "1-0-1",
      dos:"10mg",
      ints:"After Meal",
      duration:"5 Days",
      qtity:"10",
      Route:"Oral",
      iv:"0",
      sdate:"20-12-2022"

    },
 

  ]
}
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

const data4 = {
  result4: [{
    date: "01/02/2022",
    testname: "Hanitilogy"
  },
  {
    date: "01/12/2021",
    testname: "WBC"
  },
  {
    date: "01/12/2021",
    testname: "BloodGroup"
  },
  {
    date: "01/12/2021",
    testname: "LFT"
  }
  ]
}


const data5 = {
  result5: [{
    date: "01/02/2022",
    testname: "CT Scan"
  },
  {
    date: "01/12/2021",
    testname: "X-Ray Left Hand"
  },
  {
    date: "01/12/2021",
    testname: "x-Ray Ankale"
  },
  {
    date: "01/12/2021",
    testname: "CT-Scan Brain"
  }
  ]
}

const data1 = {
  result1: [
    {
      date: "01/02/2022",
      ipdopd: "opd",
      location: "OPD Hospital,Mumbai",
      drname: "Dr. Mark F.Barry"
    },
    {
      date: "01/02/2022",
      ipdopd: "opd",
      location: "OPD Hospital,Mumbai",
      drname: "Dr. Mark F.Barry"
    },
    {
      date: "01/02/2022",
      ipdopd: "opd",
      location: "OPD Hospital,Mumbai",
      drname: "Dr. Mark F.Barry"
    },
    {
      date: "01/02/2022",
      ipdopd: "opd",
      location: "OPD Hospital,Mumbai",
      drname: "Dr. Mark F.Barry"
    },
    {
      date: "01/02/2022",
      ipdopd: "opd",
      location: "OPD Hospital,Mumbai",
      drname: "Dr. Mark F.Barry"
    },
    {
      date: "01/02/2022",
      ipdopd: "opd",
      location: "OPD Hospital,Mumbai",
      drname: "Dr. Mark F.Barry"
    }

  ]
}

const data3 = {
  result3: [
    {
      icdcode: "Diseases of Spleen",
      duration: "5 Days",
      status: "provisional",
      chronic: "chronic"
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
                <div style={{backgroundColor: 'blue'}} className='w-10 h-10 text-white'>
               <svg data-testid="SearchIcon" ></svg> 
               </div>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Medico legal case" />
              </FormGroup>
            </div>


          </div>



          {data.result.map((data) => (
            <div className='mr-2 m-2 rounded-lg ' style={{ backgroundColor: '#dcdcdc', border: '1px solid black', textAlign: 'center' }}>
              <div className='flex gap-2 justify-around   rounded-lg p-2 '>
                <div >
                  <span className='font-semibold'>Patient Name:</span>
                  <TextField id="standard-basic" variant="standard" label={data.PatientName}> </TextField>
                </div>
                <div >
                  <span className='font-semibold'> UHID:</span>
                  <TextField id="standard-basic" variant="standard" label={data.UHID} > </TextField>
                </div>
                <div >
                  <span className='font-semibold'> Age:</span>
                  <TextField id="standard-basic" variant="standard" label={data.Age}></TextField>
                </div>
              </div>
              <div className='flex gap-2   justify-around   rounded-lg p-2 '>
                <div >
                  <span className='font-semibold'> Gender:</span>
                  <TextField id="standard-basic" variant="standard" label={data.Gender}></TextField>
                </div>
                <div >
                  <span className='font-semibold'> Bed No:</span>
                  <TextField id="standard-basic" variant="standard" label={data.BedNo} ></TextField>
                </div>
                <div >
                  <span className='font-semibold'> Arrival Date & Time:</span>
                  <TextField id="standard-basic" variant="standard" label={data.ArrivalDatentime}></TextField>
                </div>
              </div>
              <div className='flex gap-2 ml-16  p-2 '>
                <span className='font-semibold'>Doctor Name:</span>
                <TextField id="standard-basic" variant="standard" label={data.DoctorName}></TextField>
              </div>

            </div>

          ))}

          <div className='mr-2' style={{ border: '1px solid grey', boxShadow: "1px 1px 1px #9E9E9E" }}>
            <div className='grid  gap-2  p-2 ' style={{ backgroundColor: '#ff69b4' }}>

              <span className='font-semibold m-2'>Vital</span>
            </div>
            <div>
              <div className="flex justify-center ml-4">
                <label className='mt-3'>Temp:</label>
                <TextField id="outlined-basic" size="small" variant="outlined" sx={{ m: 1, width: '25ch' }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">F</InputAdornment>,
                  }} />
                <label className='mt-3'>Pulse rate:</label>
                <TextField id="outlined-basic" size="small" variant="outlined" sx={{ m: 1, width: '25ch' }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">bpm</InputAdornment>,
                  }} />
                <label className='mt-3'>BP(Systolic):</label>
                <TextField id="outlined-basic" size="small" variant="outlined" sx={{ m: 1, width: '25ch' }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">mm</InputAdornment>,
                  }} />
                <label className='mt-3'>BP(Diatolic):</label>
                <TextField id="outlined-basic" size="small" variant="outlined" sx={{ m: 1, width: '25ch' }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">mm</InputAdornment>,
                  }} />
                <label className='mt-3'>SpO2:</label>
                <TextField id="outlined-basic" size="small" variant="outlined" sx={{ m: 1, width: '25ch' }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">%</InputAdornment>,
                  }} />
              </div>
              <div className="flex justify-center">
                <label className='mt-3'>Weight:</label>
                <TextField id="outlined-basic" size="small" variant="outlined" sx={{ m: 1, width: '25ch' }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start" >kg</InputAdornment>,
                  }} />
                <label className='mt-3'>Height:</label>
                <TextField id="outlined-basic" size="small" variant="outlined" sx={{ m: 1, width: '25ch' }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">cm</InputAdornment>,
                  }} />
                <label className='mt-3'>BMI:</label>
                <TextField id="outlined-basic" size="small" variant="outlined" sx={{ m: 1, width: '25ch' }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">kg/m2</InputAdornment>,
                  }} />
                <label className='mt-3'>Respiration:</label>
                <TextField id="outlined-basic" size="small" variant="outlined" sx={{ m: 1, width: '25ch' }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">Per</InputAdornment>,
                  }} />
                <label className='mt-3'>BSL:</label>
                <TextField id="outlined-basic" size="small" variant="outlined" sx={{ m: 1, width: '25ch' }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">cm</InputAdornment>,
                  }} />
              </div>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-2 mt-4 mr-2 '>

            <div style={{ border: '1px solid grey', boxShadow: "1px 1px 1px #9E9E9E" }}>
              <div className='font-semibold p-2' style={{ backgroundColor: '#ffe4c4', border: '1px solid grey' }}>
                <span>Visits</span>
              </div>
              <div>
                <Tableformodal data1={data1} />
              </div>
            </div>

            <div style={{ border: '1px solid grey', boxShadow: "1px 1px 1px #9E9E9E" }}>
              <div className='font-semibold p-2 ' style={{ backgroundColor: '#e0ffff', border: '1px solid grey' }}>
                <span>Past History</span>
              </div>
              <div className='grid grid-cols-4 gap-2 p-2 m-2 '>
                <div className='grid  gap-2  mt-4'>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="DM" className='mt-4' />
                    <FormControlLabel control={<Checkbox />} label="Heart Disease" className='mt-4' />
                    <FormControlLabel control={<Checkbox />} label="COPD" className='mt-4' />
                    <FormControlLabel control={<Checkbox />} label="Liver" className='mt-4' />
                  </FormGroup>
                </div>
                <div className='grid  gap-2 mt-4'>
                  <TextField
                    size="small" className='mt-4' />
                  <TextField
                    size="small" className='mt-4' />
                  <TextField
                    size="small" className='mt-4' />
                  <TextField
                    size="small" className='mt-4' />
                </div>
                <div className='grid  gap-2 mt-4 '>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="HTN" className='mt-4' />
                    <FormControlLabel control={<Checkbox />} label="TB" className='mt-4' />
                    <FormControlLabel control={<Checkbox />} label="Asthama" className='mt-4' />
                    <FormControlLabel control={<Checkbox />} label="Other" className='mt-4' />
                  </FormGroup>
                </div>
                <div className='grid  gap-2 mt-4 '>
                  <TextField
                    size="small" className='mt-4' />
                  <TextField
                    size="small" className='mt-4' />
                  <TextField
                    size="small" className='mt-4' />
                  <TextField
                    size="small" className='mt-4' />
                </div>
              </div>

            </div>

          </div>

          <div style={{ border: '1px solid grey', boxShadow: "1px 1px 1px #9E9E9E" }} className="mt-4 mr-2">
            <div className='font-semibold p-2' style={{ backgroundColor: '#fff0f5', border: '1px solid grey' }}>
              <span>Family History</span>
            </div>
            <div className='flex justify-around gap-4 mr-2 ml-2'>
              <TextField
                size="small" className='mt-4 w-50' label="Bowel & Bladder" />
              <TextField
                size="small" className='mt-4 w-50' label="Blood Transfusion History" />
              <TextField
                size="small" className='mt-4 w-50' label="Allergy" />

            </div>
            <div className='flex justify-around gap-4 mr-2 ml-2'>
              <TextField
                size="small" className='mt-4 w-50' label="Personal History" />
              <TextField
                size="small" className='mt-4 w-75' label="Other Diseases" />
            </div>
            <div className='flex justify-around gap-2 mt-4 '>
              <FormGroup >
                <FormControlLabel control={<Checkbox />} label="HTN" className='mt-4' />

              </FormGroup>
              <FormGroup >
                <FormControlLabel control={<Checkbox />} label="DM" className='mt-4' />

              </FormGroup>
              <FormGroup >
                <FormControlLabel control={<Checkbox />} label="Tuberculosis" className='mt-4' />

              </FormGroup>
              <FormGroup >
                <FormControlLabel control={<Checkbox />} label="IHD" className='mt-4' />

              </FormGroup>
              <FormGroup >
                <FormControlLabel control={<Checkbox />} label="Asthama" className='mt-4' />

              </FormGroup>
              <FormGroup >
                <FormControlLabel control={<Checkbox />} label="Stroke" className='mt-4' />
              </FormGroup>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-2 mt-4 mr-2 '>
            <div style={{ border: '1px solid grey', boxShadow: "1px 1px 1px #9E9E9E" }}>
              <div className='font-semibold p-2' style={{ backgroundColor: '#e6e6fa', border: '1px solid grey' }}>
                <span>Allergies</span>
              </div>
              <div className='m-2 '>
                <TextField className='w-100 h-50 '
                  id="outlined-multiline-flexible"
                  label="Add Allergies"
                  multiline
                  maxRows={100}
                />
              </div>

            </div>
            <div style={{ border: '1px solid grey', boxShadow: "1px 1px 1px #9E9E9E" }}>
              <div className='font-semibold p-2' style={{ backgroundColor: '#f5f5dc', border: '1px solid grey' }}>
                <span>Surgical History</span>
              </div>
              <div className='m-2 '>
                <TextField className='w-100 h-50'
                  id="outlined-multiline-flexible"
                  label="Add Surgical History"
                  multiline
                  maxRows={100}
                />
              </div>

            </div>

          </div>


          {/* need to update color */}
          <div className='grid grid-cols-2 gap-2 mt-4 mr-2 '>
            <div style={{ border: '1px solid grey', boxShadow: "1px 1px 1px #9E9E9E" }}>
              <div className='font-semibold p-2' style={{ backgroundColor: '#98fb98', border: '1px solid grey' }}>
                <span>Complaints</span>
              </div>
              <div className='m-2 ' >
                <TextField className='w-100 h-50'
                  id="outlined-multiline-flexible"
                  label="Add Complaints"
                  multiline
                  maxRows={100}
                />
              </div>

            </div>
            <div style={{ border: '1px solid grey', boxShadow: "1px 1px 1px #9E9E9E" }}>
              <div className='font-semibold p-2' style={{ backgroundColor: '#add8e6', border: '1px solid grey' }}>
                <span>Local Examination</span>
              </div>
              <div className='m-2 '>
                <TextField className='w-100 h-50 '
                  id="outlined-multiline-flexible"
                  label="Add Local Examination"
                  multiline
                  maxRows={100}
                />
              </div>

            </div>

          </div>

          {/* 2nd updation (color) */}
          <div className='grid grid-cols-2 gap-2 mt-4 mr-2 '>
            <div style={{ border: '1px solid grey', boxShadow: "1px 1px 1px #9E9E9E" }}>
              <div className='font-semibold p-2' style={{ backgroundColor: '#fff0f5', border: '1px solid grey' }}>
                <span>Injuri Details</span>
              </div>
              <div className='m-2 '>
                <TextField className='w-100 h-50'
                  id="outlined-multiline-flexible"
                  label="Add Injuri Details"
                  multiline
                  maxRows={100}
                />
              </div>

            </div>
            <div style={{ border: '1px solid grey', boxShadow: "1px 1px 1px #9E9E9E" }}>
              <div className='font-semibold p-2' style={{ backgroundColor: '#e0ffff', border: '1px solid grey' }}>
                <span>Daignosis</span>
              </div>
              <div className='m-2 '>
                <Dignosistable data3={data3} />
              </div>

            </div>

          </div>
          <div className='grid grid-cols-2 gap-2 mt-4 mr-2 '>
            <div style={{ border: '1px solid grey', boxShadow: "1px 1px 1px #9E9E9E" }}>
              <div className='font-semibold p-2' style={{ backgroundColor: '#afeeee', border: '1px solid grey' }} >
                <span>Investigation(Pathology)</span>
              </div>
              <div className='m-2  flex gap-2 '>
                <TextField className='w-100 '
                  id="outlined-multiline-flexible"
                  label="Add Injuri Details"
                  multiline
                  maxRows={100}
                />
                <button className="text-white rounded p-2  " style={{ backgroundColor: '#4682b4' }} type="submit">ADD</button>
              </div>
              <div>
                <Investigationtable data4={data4} />
              </div>
            </div>
            <div style={{ border: '1px solid grey', boxShadow: "1px 1px 1px #9E9E9E" }}>
              <div className='font-semibold p-2' style={{ backgroundColor: '#adff2f', border: '1px solid grey' }} >
                <span>Investigation(Radiology)</span>
              </div>
              <div className='m-2  flex gap-2 '>
                <TextField className='w-100 '
                  id="outlined-multiline-flexible"
                  label="Add Injuri Details"
                  multiline
                  maxRows={100}
                />
                <button className="text-white rounded-lg p-2  " style={{ backgroundColor: '#4682b4' }} type="submit">ADD</button>
              </div>
              <div>
                <Investigationtable1 data5={data5} />
              </div>
            </div>



          </div>
          <div className='grid grid-cols-2 gap-2 mt-4 mr-2 '>
            <div style={{ border: '1px solid grey', boxShadow: "1px 1px 1px #9E9E9E" }}>
              <div className='font-semibold p-2' style={{ backgroundColor: '#e0ffff', border: '1px solid grey' }} >
                <span>Genernal Examination</span>
              </div>
              <div className='flex justify-around gap-4 mr-2 m-2 ml-2'>
                <TextField
                  size="small" className='m-2' label="Saturation With 2(%)" />
                <TextField
                  size="small" className='m-2' label="Saturation Without 2" />
                <TextField
                  size="small" className='m-2' label="Oxygen Rate Per Min" />
              </div>
              <div className='flex gap-2'>
                <div>
                  <button className="text-white rounded-lg p-2  m-2 w-40" style={{ backgroundColor: '#4682b4' }} type="submit">GCS</button>
                  <textLabel className="font-semibold ml-6 text-xl">GCS Score</textLabel>
                  <button style={{ borderRadius: '50%', backgroundColor: 'red' }} className="text-white  font-semibold text-lg  rounded-lg p-2  m-2 w-10 h-10">3</button>

                </div>

                <div className='grid'>
                  <div className='m-2'><FormControl>

                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel className='m-2' value="A" control={<Radio />} label="A" />
                      <FormControlLabel className='m-2' value="V" control={<Radio />} label="V" />
                      <FormControlLabel className='m-2' value="P" control={<Radio />} label="P" />
                      <FormControlLabel className='m-2'
                        value="U"
                        control={<Radio />}
                        label="U"
                      />
                    </RadioGroup>
                  </FormControl>
                  </div>
                  <div className='ml-20' >
                    <textLabel className="font-semibold ml-16 text-xl">MEWS</textLabel>
                    <button style={{ borderRadius: '50%', backgroundColor: 'green' }} className="text-white  font-semibold text-lg  rounded-lg p-2  m-2 w-10 h-10">4</button>

                  </div>
                </div>
              </div>
            </div>
          
          <div style={{ border: '1px solid grey', boxShadow: "1px 1px 1px #9E9E9E" }}>
          <div className='font-semibold p-2' style={{ backgroundColor: '#e6e6fa', border: '1px solid grey' }} >
            <span>Special Instruction</span>
          </div>
          <div className='m-4' >
          {/* <div className='ml-4 mt-4 text-l'>
             <textLabel > Add Special Instruction</textLabel>
              </div> */}

              <TextField className='w-100 h-100  '
                  id="outlined-multiline-flexible"
                  label="Add Special Instruction"
                  multiline
                  maxRows={1000}
                />
              </div>
        </div>
        </div>


        <div className='mt-4 mr-2' style={{ border: '1px solid grey', boxShadow: "1px 1px 1px #9E9E9E" }}>
        <div className='font-semibold p-2' style={{ backgroundColor: '#90ee90', border: '1px solid grey' }} >
            <span>Systemic Examination</span>
          </div>
          <div className='flex justify-around gap-2 m-2'>
          <TextField className='w-100 h-100  '
                  id="outlined-multiline-flexible"
                  label="RS"
                  multiline
                  maxRows={1000}
                />
                 <TextField className='w-100 h-100  '
                  id="outlined-multiline-flexible"
                  label="CVS"
                  multiline
                  maxRows={1000}
                />
          </div>
          <div className='flex justify-around gap-2 m-2'>
          <TextField className='w-100 h-100  '
                  id="outlined-multiline-flexible"
                  label="CNS"
                  multiline
                  maxRows={1000}
                />
                 <TextField className='w-50 h-50  '
                  id="outlined-multiline-flexible"
                  label="PA"
                  multiline
                  maxRows={1000}
                />
                  <TextField className='w-50 h-50  '
                  id="outlined-multiline-flexible"
                  label="CRT"
                  multiline
                  maxRows={1000}
                />
          </div>
        </div>

        <div className='mt-4 mr-2' style={{ border: '1px solid grey', boxShadow: "1px 1px 1px #9E9E9E" }}>
              <div className='font-semibold p-2' style={{ backgroundColor: '#da70d6', border: '1px solid grey' }}>
                <span>Medication</span>
              </div>
              <div className='m-2 '>
                <Medicationtable data6={data6} />
              </div>

            </div>




            <div className='mt-4 mr-2' style={{ border: '1px solid grey', boxShadow: "1px 1px 1px #9E9E9E" }}>
          <div className='font-semibold p-2' style={{ backgroundColor: '#87ceeb', border: '1px solid grey' }} >
            <span>Advice</span>
          </div>
          <div className='m-4' >
          {/* <div className='ml-4 mt-4 text-l'>
             <textLabel > Add Special Instruction</textLabel>
              </div> */}

              <TextField className='w-100 h-100  '
                  id="outlined-multiline-flexible"
                  label="Advice"
                  multiline
                  maxRows={1000}
                />
              </div>
        </div>


        <div className='mt-4 mr-2' style={{ border: '1px solid grey', boxShadow: "1px 1px 1px #9E9E9E" }}>
        <div className='font-semibold p-2' style={{ backgroundColor: '#f5deb3', border: '1px solid grey' }} >
            <span>Doctor/Department Details</span>
          </div>
          <div>
            <div className='flex justify-around gap-4 mr-2 m-2 ml-2'>
            <TextField
                  size="large" className='m-2' label="Department" />
           <TextField
                  size="large" className='m-2' label="Doctor Name" />
                    <TextField
                  size="large" className='m-2' label="Department" />
           <TextField
                  size="large" className='m-2' label="Doctor Name" />

            </div>
            <div className='flex justify-around gap-4 mr-2 m-2 ml-2'>
            <TextField
                  size="large" className='m-2' label="Department" />
           <TextField
                  size="large" className='m-2' label="Doctor Name" />
                    <TextField
                  size="large" className='m-2' label="Department" />
           <TextField
                  size="large" className='m-2' label="Doctor Name" />
            </div>
            <div className='flex  gap-6  ml-14'>
          <TextField className='w-50 h-50 '
                  id="outlined-multiline-flexible"
                  label="CNS"
                  multiline
                  maxRows={1000}
                />
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="OT Booked" className='mt-4 font-bold' />
                
                  </FormGroup>
              
          </div>
            
          </div>
       </div>

 <div>
  
 </div>


   



</div>
      </form>
    </div>
  )
}
