import React,{useState} from "react";
import Form from "./Components/form";
import Details from "./Components/Details"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
function App() {

  const [formData,setFormData] = useState(
    {
      name:"",
      qualification:"",
      Year_of_Passout:"",
    }
  );
    
  // HandleChange Function
  function handleChange(e){
    const {value,name}= e.target;
    setFormData((pre)=>{
      return{
        ...pre,[name]:value
      }
    })
  }

  // HandleSubmit Function
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const datas = await axios.post("/create",formData)
    if(datas.data.success){
      alert(datas.data.message)
    }
    setFormData({
      name:"",
      qualification:"",
      Year_of_Passout:"",
    })
  }

  return (
    <div className="App">
      <header className="App-header">Welcome To CURD Operation World</header>
      <main>
        <Row>
          <Col lg={6}>
            <Form formData={formData} handleSubmit={handleSubmit} handleChange={handleChange}/>
          </Col>
          <Col lg={6}>
            <Details/>
          </Col>
        </Row>
      </main>
    </div>
  );
}

export default App;
