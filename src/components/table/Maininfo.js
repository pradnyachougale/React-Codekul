
import React , {useState} from 'react'
import Muitable from "../table/Muitable";
import Loginmodal from "../table/Loginmodal";
import Tableform from '../table/Tableform';
export default function Maininfo() 
{

    const [loginData, setLoginData] = React.useState()
    // const [logintableData, setloginTableData] = useState([])

  console.log("parrent component logindata",loginData);
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

//  const handlelogin = (evnt) =>{
//     const loginfilds = (data1)=> ([...data1, loginData]) 
//      setLoginData(loginfilds);
//      setloginTableData(loginfilds);

//  }

  




 const [tableData, setTableData] = useState([])
 const [formInputData, setformInputData] = useState(
     {
     fName:'',
     lName:'',
     mobileno:'',
     password:'',
     address:'',
     pincode:'',
     email:'',
    
    }
 );
 
 const handleChange=(evnt)=>{  
     const newInput = (data)=>({...data, [evnt.target.name]:evnt.target.value})
    setformInputData(newInput)
 }
  
 const handleSubmit= (evnt) =>{
     evnt.preventDefault();
     const checkEmptyInput = !Object.values(formInputData).every(res=>res==="")
     if(checkEmptyInput)
     {
      const newData = (data)=>([...data, formInputData])
      setTableData(newData);
      const emptyInput= {fName:'', lName:'',mobileno:'',password:'',address:'',pincode:''}
      setformInputData(emptyInput)
     }
 }  

 return(
     <React.Fragment>
     <div className="container">
     <div className="row">
         <div className="col-sm-8">
         <Tableform handleChange={handleChange} formInputData={formInputData} handleSubmit={handleSubmit} handleOpen={handleOpen}/>
         <Muitable tableData={tableData} />
         <Loginmodal
    open={open}
    handleClose={handleClose}
    setLoginData={setLoginData}
    // onSubmit={handlelogin}
    />
         </div>
         <div className="col-sm-4">

         </div>
     </div>
    </div>
     </React.Fragment>
 );
}
