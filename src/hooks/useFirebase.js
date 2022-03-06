import { useEffect, useState } from "react"

import { getAuth, signInWithPopup, createUserWithEmailAndPassword ,signInWithEmailAndPassword,    GoogleAuthProvider ,onAuthStateChanged , signOut } from 'firebase/auth';
import initializeAuth from "../Firebase/Firebase.init";


initializeAuth();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoaing , setIsLoading ] = useState(true)



    const [error, setError] = useState ('')
    const auth = getAuth();
    const googleprovider = new GoogleAuthProvider();



        //////.................. email.................///////

    const registerUser = (email , password) => {
            setIsLoading(true)
        createUserWithEmailAndPassword(auth , email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          })
          .finally(() => setIsLoading(false));
        
    }

    // .......... login ............ /////

    const loginUser = (email , password) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        })
        .finally(() => setIsLoading(false));
    }






    ///....................... google ....................//////////
  const  signInUsingGoogle = () =>{
      signInWithPopup(auth , googleprovider)
      .then(result =>{
          console.log(result.user);
          setUser(result.user);
      })
      .catch(error => {
         setError (error.massage) 
      })

    }

    const logout = () => {
                signOut(auth)
                .then( () =>{
                    setUser({})
                })
                .catch((error)=>{

                })
                .finally(() => setIsLoading(false));
    }


    ////// observer user state 
    useEffect( () =>{
      const  unsubscribe =  onAuthStateChanged(auth, user =>{
            if(user){
               setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false)

        })
        return () => unsubscribe;
    } , [])
    return {
            user ,
            error,
            isLoaing,
            logout,
            signInUsingGoogle,
            registerUser,
            loginUser
    }

}
    export default useFirebase ; 