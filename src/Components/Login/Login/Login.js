
import { Alert, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';


const Login = () => {

        const [loginData, setLoginData] = useState({})

        const { user,  loginUser} = useAuth();

    const handelonChange = e => {
                const field = e.target.name;
                const value = e.target.value;
                const newLoginData = {...loginData};
                newLoginData[field] = value;
                
                setLoginData(newLoginData);
    }


    const handelLoginSubmit = e => {
        loginUser(loginData.email , loginData.password);
        console.log(loginData.email);
        console.log(loginData.password);
        e.preventDefault();
    }
    return (
        <div  className='login'>
            <Container>
        <Grid className='row justify-content-md-center' container spacing={2}>
            <Grid className='col-md-auto login-card ' item sx={{ mt: 8 }}>
                <Typography className='fs-3 text-center text-light' gutterBottom>Login</Typography>
                <form onSubmit={handelLoginSubmit}>
                    <TextField
                        sx={{ width: '100%', mt: 1, backgroundColor: 'white' }}
                        id="standard-basic"
                        label="Your Email"
                        name="email"
                        onChange={handelonChange }
                        variant="standard" />
                    <TextField
                        sx={{ width: '100%', mt: 1, backgroundColor: 'white' }}
                        id="standard-basic"
                        label="Your Password"
                        type="password"
                        name="password"
                        onChange={handelonChange }
                        variant="standard" />



                    <Button sx={{ width: '100%', mt: 1 }} type="submit" variant="contained">Login</Button>
                    <NavLink
                        style={{ textDecoration: 'none' }}
                        to="/register">
                        <br />
                        <Button className='text-danger' variant="text">New User? Please Register</Button>
                    </NavLink>
                    
                    {user?.email && <Alert severity="success">Login successfully!</Alert>}
                 
                </form>
            </Grid>
        </Grid>
    </Container>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
   
        </div>
     



      
        //     <Container>
        //         <Grid>
        //         <Grid item sx={{mt:8}} xs={12} md={6}>
        // <Typography variant="body1" gutterBottom>Login </Typography>
        //            <form onSubmit={handelLoginSubmit}>
        //            <TextField
        //            sx={{width:'75%' , m:1}}
        //             id="standard-basic"
        //              label="Your Emaill" 
        //              name = "email"
        //              onChange={handelonChange }
        //              variant="standard" />

        //            <TextField
        //             sx={{width:'75%' , m:1}}
        //             id="standard-basic"
        //              label="Your Password" 
        //              type='password'
        //              name = 'password'
        //              onChange={handelonChange }
        //              variant="standard" />
                     
        //             <Button  sx={{width:'75%' , m:1}} type="submit" variant="contained">Login </Button>

        //             <NavLink  style={{textDecoration : 'none' }}  to="register" > 
        //                     <Button variant="text">New User? Please Register</Button>
        //             </NavLink> 
        //            </form>
                  
        //         {user?.email && <Alert severity="success">User Created SuccessFully! </Alert> }
        //         </Grid>
        //         <Grid item xs={12} md={6}>
        //         <img class=' animate__animated animate__backInRight' width='500px' src="/images/login.jpg" alt="" />
        //         </Grid>
        //         </Grid>
        //     </Container>
       
    );
};

export default Login;