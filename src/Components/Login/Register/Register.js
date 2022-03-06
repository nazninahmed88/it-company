import { Alert, Button,      CircularProgress,      Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Register.css';

const Register = () => {

    
    const [loginData, setLoginData] = useState({})


    const { user,  registerUser ,  isLoading} = useAuth();



    const handelonChange = e => {
                const field = e.target.name;
                const value = e.target.value;
                const newLoginData = {...loginData};
                newLoginData[field] = value;
                setLoginData(newLoginData);
    }


    const handelLoginSubmit = e => {
        if(loginData.password !== loginData.password2){
            alert('Your password did not match')
            return
        }
        registerUser(loginData.email , loginData.password);

        e.preventDefault();
    }
    return (


        <div className='Register'>
        <Container>
            <Grid className='row justify-content-md-center' container spacing={2}>
                <Grid className='col-md-auto register-card' item sx={{ mt: 8 }}>
                    <div>
                        <Typography className='fs-3 text-center text-light' gutterBottom>Register</Typography>
                        {!isLoading && <form onSubmit={handelLoginSubmit}>
                         
                            <TextField
                                sx={{ width: '100%', mt: 1, backgroundColor: 'white' }}
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                type="email"
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
                            <TextField
                                sx={{ width: '100%', mt: 1, backgroundColor: 'white' }}
                                id="standard-basic"
                                label="ReType Your Password"
                                type="password"
                                name="password2"
                                onChange={handelonChange }
                                variant="standard" />

                            <Button sx={{ width: '100%', mt: 1 }} type="submit" variant="contained">Register</Button>
                            <br />
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/login">
                                <Button variant="text" className='text-warning'>Already Registered? Please Login</Button>
                            </NavLink>
                        </form>}
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                       
                    </div>
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
       
    </div>


//         <Container>
//         <Grid>
//         <Grid item sx={{mt:8}} xs={12} md={6} >
// <Typography variant="body1" gutterBottom>Register </Typography>
//            { !isLoading &&  <form onSubmit={handelLoginSubmit}>
//            <TextField
//            sx={{width:'75%' , m:1}}
//             id="standard-basic"
//              label="Your Emaill" 
//              name = "email"
//              type='email'
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

//            <TextField
//             sx={{width:'75%' , m:1}}
//             id="standard-basic"
//              label="ReType Your Password" 
//              type='password'
//              name = 'password2'
//              onChange={handelonChange }
//              variant="standard" />
             
//             <Button  sx={{width:'75%' , m:1}} type="submit" variant="contained">Register</Button>

//             <NavLink  style={{textDecoration : 'none' }}  to="login" > 
//                     <Button variant="text">Already Register? Please Login</Button>
//             </NavLink> 
//            </form>}
//           {isLoading &&  <CircularProgress color="secondary" /> }
//           {user?.email && <Alert severity="success">User Created SuccessFully! </Alert> }
//         </Grid>
//         <Grid item xs={12} md={6} >
//         <img class=' animate__animated animate__backInRight' width='300px' src="/images/login.jpg" alt="" />
//         </Grid>
//         </Grid>
//     </Container>
    );
};

export default Register;