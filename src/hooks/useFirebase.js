import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Authentication/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";


initializeFirebase();
const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const auth = getAuth();

    const registerUser = (email, password, location, history) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                history.push(location.state?.from || '/home');

            })
            .catch((error) => {
                setError(error.message);
                console.log(error.message);
            });

    }

    const loginUser = (email, password, location, history) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                console.log(user);
                history.push(location.state?.from || '/home');

            })
            .catch((error) => {
                setError(error.message);
                console.log(error.message);
            });
    }

    //Firebase Logout System
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                console.log('success signout')
            })

    }

    //Observe User State Change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser(user)
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])


    return {
        user,
        registerUser,
        loginUser,
        logOut,
        isLoading,
        setIsLoading,
        error
    }

}

export default useFirebase;