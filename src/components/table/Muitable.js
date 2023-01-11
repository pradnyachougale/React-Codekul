import React from 'react'

export default function Muitable(tableData) {
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>S.N</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Mobile No</th>
                        <th>Password</th>
                        <th>Address</th>                                          
                        <th>Pincode</th>
                        <th>email</th>
                        <th>Confirm Password</th>
                    </tr>
                </thead>
                 <tbody>
                    {
                         tableData.map((data, index) => {
                            return ( 
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{data.fName}</td>
                                    <td>{data.lName}</td>
                                    <td>{data.mobileno}</td>
                                    <td>{data.password}</td>
                                    <td>{data.address}</td>
                                    <td>{data.pincode}</td>
                                    
                                </tr>
                            )
                        })
                    }
                </tbody> 
            </table>

            
        </>
    )
}