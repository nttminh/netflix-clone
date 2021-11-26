import React from 'react'
import './LoginScreen.css'

const LoginScreen = () => {
    return (
        <div className='loginScreen'>
            <div className='loginScreen_background'>
                <img
                    className='loginScreen_logo'
                    src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
                    alt='Netflix Logo' />
                <button className='loginScreen_button'>Sign In</button>

                <div className='loginScreen_gradient'></div>
            </div>
        </div>
    )
}

export default LoginScreen
