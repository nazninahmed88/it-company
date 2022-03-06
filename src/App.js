
import './App.css';
import initializeAuth from './Firebase/Firebase.init';

import Home from './Components/Home/Home';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Switch } from 'react-router-dom';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';



import Services from './Components/Services/Services';
import Webdev from './Components/WebDevelopment/Webdev';
import Graphic from './Components/Graphic/Graphic';
import IosApp from './Components/IosApp/IosApp';



import Login from './Components/Login/Login/Login';
import Register from './Components/Login/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';

import Uiux from './Components/Graphic/Uiux/Uiux';

import Digital from './Components/Digital-Marketing/Digital';
import EcommerceMarketing from './Components/Digital-Marketing/EcommerceMarketing/EcommerceMarketing';

import Webcatagory from './Components/WebDevelopment/WebCatagory/Webcatagory';
import Softwarecatagory from './Components/Graphic/Softwarecatagory/Softwarecatagory';
import Mobilecatagory from './Components/IosApp/Mobilecatagory/Mobilecatagory';
import Digitalcatagory from './Components/Digital-Marketing/Digitalcatagory/Digitalcatagory';










initializeAuth();



function App() {
  return (

    <div className="App">
      <AuthProvider>
      <BrowserRouter>
     <Header></Header>
     <Switch>
     <Route exact path='/'>
      <Home></Home>
       </Route>
       <Route path='/home'>
      <Home></Home>
       </Route>
       <Route path='/about'>
      <About></About>
       </Route>
       <Route path='/contact'>
      <Contact></Contact>
       </Route>
       <Route path='/login'>
         <Login></Login>
        </Route>
       <Route path='/register'>
        <Register></Register>
        </Route>
       <Route path='/services'>
      <Services></Services>
       </Route>
       <Route path='/webdev'>
        <Webdev></Webdev>
       </Route>
       <Route path='/graphic'>
        <Graphic></Graphic>
       </Route>
       <Route path='/iosapp'>
      <IosApp></IosApp>
       </Route>
     
       <Route path='/degital'>
        <Digital></Digital>
       </Route>
       <Route path='/webcatagory'>
        <Webcatagory/>
       </Route>
       <Route path='/softwarecatagory'>
        <Softwarecatagory> </Softwarecatagory>
       </Route>
       <Route path='/mobilecatagory'>
        <Mobilecatagory></Mobilecatagory>
       </Route>
       <Route path='/digitalcatagory'>
     <Digitalcatagory></Digitalcatagory>
       </Route>
    
      
       <Route path='/uiux'>
      <Uiux/>
      </Route>
     
      
       <Route path='/ecomarcemarketing'>

        <EcommerceMarketing></EcommerceMarketing>
      </Route>
      
     

     </Switch>
  
     </BrowserRouter>

      </AuthProvider>
    </div>
  );
}

export default App;
