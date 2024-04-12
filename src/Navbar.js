import React, { useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';

import './css/Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const location = useLocation();
    const handleClick = () => setClick(!click) ;
    const closeMobileMenu = () => setClick(false);

    // 화면 크기에 따라서 버튼이 보이고 안보이도록 설정한다. 
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }
        else {
            setButton(true);
        }
    };

    // SIGNUP버튼이 사이즈가 줄어들면 없어지도록 한다. 
    useEffect(() => {
        showButton();
    }, []);


    window.addEventListener('resize', showButton);

    return (
        <>
        <nav className = 'navbar'>
            <div className = 'navbar-container'>
                {}
                <Link to='/' className={`navbar-logo ${location.pathname === '/' ? 'active-link' : ''}`} onClick={closeMobileMenu}>
         
          <div className = 'navbar-logo'>Nutri</div>
          <div className = 'navbar-logo2'>Guide</div>    
        </Link>
      
                <div className='menu-icon' onClick={handleClick}>
                    <i className = {click ? 'fas fa-times' : 'fas fa-bars' } />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                    <Link to='/' className={`nav-links ${location.pathname === '/' ? 'active-link' : ''}`} onClick={closeMobileMenu}>
                          Home
                    </Link>

                    </li>
                    <li className='nav-item'>
                    <Link to='/Info' className={`nav-links ${location.pathname === '/info' ? 'active-link' : ''}`} onClick={closeMobileMenu}>
                         Info
                    </Link>

                    </li>
                    <li className='nav-item'>
                    <Link to='/input' className={`nav-links ${location.pathname === '/input' ? 'active-link' : ''}`} onClick={closeMobileMenu}>
                          추천받기
                    </Link>
                    </li>
                    
                    <li className='nav-item'>
                    <Link to='/product' className={`nav-links ${location.pathname === '/product' ? 'active-link' : ''}`} onClick={closeMobileMenu}>
                          Product
                    </Link>
                    </li>
                   
                </ul>
        
            </div>
        </nav>
        </>
    );
}

export default Navbar