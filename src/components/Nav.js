import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import './Nav.css'


const Nav = () => {
    const [show, handleShow] = useState(false);
    const history = useHistory();
    const user = useSelector(selectUser)


    function transitionNavBar() {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };


    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar)
        return () => window.removeEventListener('scroll', transitionNavBar);
    }, [])

    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <img
                onClick={() => history.push('/')}
                className='nav_logo'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png'
                alt='Netflix Logo'
            />

            <img
                onClick={() => history.push('/profile')}
                className='nav_avatar'
                src={user.photoURL ? user.photoURL : 'https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png'}
                alt='Avatar'
            />

        </div>
    )
}

export default Nav
