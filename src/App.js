import {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom';

const URL = "https://reqres.in/api/users?page=1";
const requestData = () => fetch(URL).then(res => res.json());

function App() {
  const navigate = useNavigate();

  const toComponentB=(id)=>{
navigate('/userView',{state:{id:id}});
  }

  const [data, setData] = useState([]);

  useEffect(() => {
    requestData().then(data => setData(data.data))
  }, []);

return (
  <div className="App">
    {
    data
    ? data.map(data => (
      
      <div style={{
        border: "solid",
        borderColor: "#F5F5F5",
        paddingRight :"15px"
      }}
      key={data.id} onClick={() => { toComponentB(data.id) }}>
        <img style={{
        border: "solid",
        borderColor: "#F5F5F5",
        alignItems : "center",
        width:"25%",
        height:"25%"
      }} src={data.avatar} alt="" />

        <h3> {data.first_name} </h3>
        <h5> {data.email} </h5>

      </div>
    )) 
    : null
    }

  </div>
);
}

export default App;