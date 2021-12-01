import React, { useRef, useState, useEffect } from 'react'
import { auth } from '../firebase';
import firebase from 'firebase';
import './SignupScreen.css'


const SignupScreen = () => {
    const [toSignUp, setToSignUp] = useState(false);

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault(); // prevent page refresh when hit submit

        try {
            auth.createUserWithEmailAndPassword(
                emailRef.current.value,
                passwordRef.current.value
            )
                .then((authUser) => {
                    // console.log(authUser);
                    signIn(e);
                })
                .catch((error) => {
                    alert(error.message)
                });
        } catch (error) {
            alert(error)
        }

    }

    const signIn = (e) => {
        e.preventDefault(); // prevent page refresh when hit sign in

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
            .then((authUser) => {
                console.log(authUser)
            })
            .catch((error) => {
                alert(error.message)
            })
    }

    const signInWithGoogle = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(googleProvider)
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                alert(error);
            })


    }

    const handleToggle = () => {
        setToSignUp(!toSignUp);
    }

    useEffect(() => {
        return () => {
        }
    }, [toSignUp])

    return (
        <div className='signupScreen'>
            {!toSignUp ?
                <>
                    <form>
                        <h1>Sign In</h1>
                        <input ref={emailRef} placeholder='Email' type='email' />
                        <input ref={passwordRef} placeholder='Password' type='password' />
                        <button type='submit' onClick={event => signIn(event)}>Sign In</button>

                        <h4>
                            <span className='signupScreen_gray'>New to Netflix? </span>
                            <span className='signupScreen_link' onClick={handleToggle}>Sign Up now.</span>
                        </h4>
                    </form>
                    <p>or</p>
                    {/* <button onClick={signInWithGoogle}>Sign In with Google</button> */}
                    <div className="google-btn" onClick={signInWithGoogle}>
                        <div className="google-icon-wrapper">
                            <img className="google-icon" alt='Google Logo' src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
                        </div>
                        <p className="btn-text"><b>Sign in with Google</b></p>
                    </div>
                </>
                :
                <form>
                    <h1>Sign Up</h1>
                    <input ref={emailRef} placeholder='Email' type='email' />
                    <input ref={passwordRef} placeholder='Password' type='password' />
                    <button type='submit' onClick={event => register(event)}>Sign Up</button>

                    <h4>
                        <span className='signupScreen_gray'>Had an account? </span>
                        <span className='signupScreen_link' onClick={handleToggle}>Sign In now.</span>
                    </h4>
                </form>
            }
        </div >
    )
}

export default SignupScreen
