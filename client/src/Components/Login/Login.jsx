import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Container, Box, Typography, Avatar, TextField, FormControl, Button, FormHelperText } from '@material-ui/core';


const Login = () => {

  const [Ucheck, setUcheck] = useState(false);
  const [Pcheck, setPcheck] = useState(false);

  const [loginData, setLoginData]=useState({
    username:"",
    password:""
  });

  const onChangeData=(e)=>{
     setLoginData({...loginData, [e.target.name]:e.target.value})
  }
  const handleSubmit = async (e)=>{
    e.preventDefault();
    setUcheck(true);
    setPcheck(true);
    try{
       const username=loginData.username;
       const password=loginData.password;
       const user=await axios.post("http://localhost:4000/signin/", {username, password});
       console.log(user.data);
    }catch(err){
       console.log("not fatched");
    }
  }



  return (
    <Container
      maxWidth={1}
      style={{ display: 'flex',minHeight: "100vh", maxHeight: "max-content",  flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}
    >
      <Box
        boxShadow={3}
        bgcolor="background.paper"
        m={0}
        p={0}
        style={{ width: 'max-content', margin: '60px auto', backgroundColor: 'white', height: 'auto', borderRadius: '10px', boxShadow: '0px 7px 8px -4px rgb(0 0 0 / 20%), 0px 12px 17px 2px rgb(0 0 0 / 14%), 0px 5px 22px 4px rgb(0 0 0 / 12%)' }}
      >

        <Box
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}
        >
          <Avatar maxWidth={2} ></Avatar>
          <Typography
            variant='h5'
            style={{ margin: '10px', fontFamily: 'sans-serif', fontWeight: 'bolder' }}


          >Login</Typography>

        </Box>
        <FormControl
          style={{
            marginTop: '30px', height: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <TextField
            variant='outlined'
            color='primary'
            value={loginData.username}
            label='username'
            name='username'
            onChange={onChangeData}
            style={{ margin: '10px', width: '20rem' }}
            error={(!loginData.username && Ucheck)}
            helperText={(!loginData.username && Ucheck) ? '*required' : false}
            required

          />
          <TextField
            variant='outlined'
            color='primary'
            value={loginData.password}
            label='password'
            name='password'
            onChange={onChangeData}
            sx={{
              '&:hover': {
                outline: 'none'
              }
            }}
            type='password'
            style={{ margin: '10px', width: '20rem' }}
            error={(!loginData.password && Pcheck)}
            helperText={(!loginData.password && Pcheck) ? '*required' : 'Do not share your Password with anyone'}
            required
          />
          <Button
            variant="contained"
            color='primary'
            style={{ margin: '20px', width: '20rem' }}
            onClick={handleSubmit}
          >Submit</Button>

          <FormHelperText>If you are not registered yet</FormHelperText>
          <Button
            // variant='outlined'
            color='primary'

            style={{ marginBottom: '20px' }}
          > Register Here</Button>


        </FormControl>


      </Box>

    </Container>
  )
}

export default Login