import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import Nav from '../components/Nav'
import './ProfileScreen.css'
import PlansScreen from './PlansScreen'

const ProfileScreen = () => {
    const user = useSelector(selectUser)
    const history = useHistory();

    return (
        <div className='profileScreen'>
            <Nav />
            <div className='profileScreen_body'>
                <h1>Edit Profile</h1>
                <div className='profileScreen_info'>
                    <img
                        src={user.photoURL ? user.photoURL : 'https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png'}
                        alt='Profile Avatar'
                    />

                    <div className='profileScreen_details'>
                        <h2>{user.email}</h2>
                        <div className='profileScreen_plans'>
                            <h3>Plans</h3>
                            <PlansScreen />
                            <button
                                onClick={() => {
                                    auth.signOut();
                                    history.push('/');
                                }}
                                className='profileScreen_signOut'>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProfileScreen
