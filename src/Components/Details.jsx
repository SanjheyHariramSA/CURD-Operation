import React,{useState,useEffect} from 'react';
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";
function Details() {

    //URL of API 
    axios.defaults.baseURL = "https://curd-api-lh9f.onrender.com/"

    // Fetch Data from DB
    const [data,setData] = useState([]);

    // View Data
    const getData = async()=>{
        const datas = await axios.get("/")
        if(datas.data.success){
            setData(datas.data.data)
        }
    }

    useEffect(()=>{
        getData();
    })

  return (
    <div>
        <h1>Student's Details</h1>
        <section className="table">
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Qualification</th>
                    <th>Year of Passed Out</th>
                </tr>
            </thead>
            <tbody>
                {data[0] ? data.map((user)=>{
                    return(
                        <>
                            <tr>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.qualification}</td>
                                <td>{user.Year_of_Passout}</td>
                                <td><Button variant="outline-info">Edit</Button></td>
                                <td><Button variant="outline-danger">Delete</Button></td>
                            </tr>
                        </>
                    )
                })  :
                    <h1>No Data</h1>
                }   
            </tbody>
        </Table>
        </section>
    </div>
  )
}

export default Details;