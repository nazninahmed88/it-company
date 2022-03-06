import React from 'react';
import initializeAuth from '../../Firebase/Firebase.init';
import { getAuth, signInWithPopup, signOut ,  GoogleAuthProvider } from 'firebase/auth';




initializeAuth();

const provider = new GoogleAuthProvider();


const Pages = () => {
      // const [user , setUser] = useState({})

    // const handelGoogleSingin = () =>{
    //     const auth = getAuth();
    //     signInWithPopup(auth, provider)
    //     .then(result => {
    //         const {displayName , email , photoURL} = result.user;
    //         const logedInUser = {
    //             name: displayName,
    //             email: email,
    //             photo:photoURL
    //         };
    //         setUser(logedInUser)
           
    //     })
    // }
    //     const handelGoogleSingout = () =>{
    //         const auth = getAuth();
    //         signOut(auth)
    //         .then( () =>{
    //             setUser({})
    //         })
    //     }
    return (
        <div>
              {/* <h1> hi </h1>
            <button onClick={handelGoogleSingin}>Google sing in</button> <br /> <br />
            <br />
            <button onClick={handelGoogleSingout}>Google sing out</button>
            <br />
            {
                user.email && <div>
                    <h2> Welcome {user.name}</h2>
                    <p> Email Address : {user.email}</p>
                    <img src={user.photo} alt="" />
                    </div>
            } */}
        </div>
    );
};

export default Pages;