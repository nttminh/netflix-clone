import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import './Nav.css'


const Nav = () => {
    const [show, handleShow] = useState(false);
    const history = useHistory();

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
                src='https://scontent-bos3-1.xx.fbcdn.net/v/t1.6435-9/84330199_1032474353776233_4373010820318101504_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=VMIwGTzjBZQAX-VwG7w&_nc_ht=scontent-bos3-1.xx&oh=c869a684cba0b2040119d72aa769f2f7&oe=61C4CB39'
                alt='Avatar'
            />

        </div>
    )
}

export default Nav
