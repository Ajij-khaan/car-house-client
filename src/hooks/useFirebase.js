import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Authentication/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";


initializeFirebase();
const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();

    //Registration
    const registerUser = (email, password, name, location, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);


                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => {
                        saveUser(email, name);
                    })
                    .catch((error) => {
                    });

                history.push(location.state?.from || '/home');

            })
            .catch((error) => {
                setError(error.message);
                console.log(error.message);
            })
            .finally(() => setIsLoading(false));

    }

    //Login
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                console.log(user);
                history.push(location.state?.from || '/home');

            })
            .catch((error) => {
                setError(error.message);
                console.log(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    //Logout
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                console.log('success signout')
            })
            .finally(() => setIsLoading(false));

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

    //Save User TO Database
    const saveUser = (email, displayName) => {
        const user = { email, displayName, role: "user" };
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    //Getting admin data

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin));
    }, [user?.email])


    return {
        user,
        admin,
        registerUser,
        loginUser,
        logOut,
        isLoading,
        setIsLoading,
        error
    }

}

export default useFirebase;