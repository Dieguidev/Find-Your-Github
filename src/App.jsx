import { useEffect, useState } from "react";
import "./App.css";
import { Container, Typography } from "@mui/material";
import Home from "./components/Home";
import axios from "axios";
import UsersCard from "./components/UsersCard";

function App() {
  const [inputUser, setInputUser] = useState("octocat");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${inputUser}`)
      .then((res) => setUsers(res.data))
      .catch(error => {
        if (error.response?.status === 404) {
          setInputUser("octocat")
          alert(`Usuario no encontrado`);
        } else {
          console.log(error.response?.data)
        }
      })
  }, [inputUser]);

  const searchUser = (valueInput) => {
    setInputUser(valueInput)
  }

  // console.log(inputUser);
  console.log(users);

  return (
    <>
      <Container
        sx={{
          background: "whitesmoke",
          width: "100vw",
          
          borderRadius: "16px",
          marginTop: "40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant='h2' sx={{textAlign:'center'}}>Find your Github</Typography>
        <Home searchUser={searchUser} />
        <UsersCard users={users}/>
      </Container>
      
    </>
  );
}

export default App;
