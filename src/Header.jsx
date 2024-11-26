    import React, { useState, useEffect } from 'react';
    import reactlogo from './assets/Syncorlogo.png';
    import './Header.css';
    import { Link, useLocation } from 'react-router-dom';

    export const Header = () => {
        const [dropdownOpen, setDropdownOpen] = useState(false);
        const [isScrolled, setIsScrolled] = useState(false);
        const location = useLocation(); 

        const handleMouseEnter = () => {
            setDropdownOpen(true);  
        };

        const handleMouseLeave = () => {
            setDropdownOpen(false); 
        };

        useEffect(() => {
            const handleScroll = () => {
                setIsScrolled(window.scrollY > 50);
            };

            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll); 
            };
        }, []);

        const isHomePage = location.pathname === '/App'; 
    const isOtherPage = ['/AboutUsComp', '/CareersComp', '/TechnologyComp', '/ContactUsComp', '/ITtrainingComp'].includes(location.pathname);

    const backgroundColor = isHomePage 
        ? (isScrolled ? 'rgba(0, 0, 0, 0.7)' : 'transparent') 
        : 'rgba(0, 0, 0, 0.7)';
    const textColor = 'white';

        return (
            <header
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    width: '100%',
                    margin: 0,
                    zIndex: 1,
                    backgroundColor: backgroundColor,
                    color: textColor,
                    transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
                    boxShadow: isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center' ,justifyContent:'space-between'}}>
                    <li style={{ listStyle: 'none', marginTop: '10px' }}>
                        <Link to='/' style={{ textDecoration: 'none' }}>
                        <img
                            src={reactlogo}
                            style={{ width: '100%', height: '50px', justifyContent: 'flex-start' }}
                            alt="Logo"
                        />
                        </Link>
                    </li>


                    

                    <div style={{ display: 'flex', alignItems: 'center', }}>
                        <li style={{ listStyle: 'none', margin: '0 20px', }}>
                            <Link
                                to='/AboutUsComp'
                                style={{
                                    textDecoration: 'none',
                                    color: textColor,
                                    fontFamily: 'ProximaNova, sans-serif',
                                    transition: 'color 0.3s ease, transform 0.3s ease',
                                    fontSize: '12px'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.color = 'rgb(119, 107, 107)';
                                    e.target.style.transform = 'scale(1.05)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.color = textColor; 
                                    e.target.style.transform = 'scale(1)';
                                }}
                            >
                                <h2 style={{ margin: 0 }}>About Us</h2>
                            </Link>
                        </li>

                        <li style={{ listStyle: 'none', margin: '0 25px' }}>
                            <Link
                                to='/TechnologyComp'
                                style={{
                                    textDecoration: 'none',
                                    color: textColor,
                                    fontFamily: 'ProximaNova, sans-serif',
                                    transition: 'color 0.3s ease, transform 0.3s ease',
                                    fontSize: '12px'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.color = 'rgb(119, 107, 107)';
                                    e.target.style.transform = 'scale(1.05)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.color = textColor; 
                                    e.target.style.transform = 'scale(1)';
                                }}
                            >
                                <h2 style={{ margin: 0 }}>Technology</h2>
                            </Link>
                        </li>

                        <li
                            style={{ listStyle: 'none', margin: '0 25px', position: 'relative' }}
                            onMouseEnter={handleMouseEnter} 
                            onMouseLeave={handleMouseLeave}  
                        >
                            <Link
                            
                                style={{
                                    textDecoration: 'none',
                                    color: textColor,
                                    fontFamily: 'ProximaNova, sans-serif',
                                    transition: 'color 0.3s ease, transform 0.3s ease',
                                    fontSize: '12px'
                                }}
                            >
                                <h2 style={{ margin: 0 }}>Services</h2>
                            </Link>

                            {dropdownOpen && (
                                <div style={{
                                    position: 'absolute',
                                    top: '100%', 
                                    left: 0,
                                borderRadius:'20px',
                                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                                    padding: '10px',
                                    zIndex: 5,
                                    width: '200px' ,
                                    backgroundColor:'white'
                                }}>
                                    <ul style={{ listStyle: 'none', padding: '10px', margin: 0, }}>
                                        <li style={{ margin: '20px 0' }}>
                                            <a href='./ProjMgmComp ' style={{ textDecoration: 'none', color: 'rgb(86, 80, 78)' }}>Project Management</a>
                                        </li>
                                        <li style={{ margin: '20px 0' }}>
                                            <a href=' ./ITtrainingComp' style={{ textDecoration: 'none', color: 'rgb(86, 80, 78)' }}>IT Training</a>
                                        </li>
                                        <li style={{ margin: '20px 0' }}>
                                            <a href=' ./ManagedServices' style={{ textDecoration: 'none', color: 'rgb(86, 80, 78)' }}>Managed Services</a>
                                        </li>
                                        <li style={{ margin: '20px 0' }}>
                                            <a href='./AppdevComp ' style={{ textDecoration: 'none', color: 'rgb(86, 80, 78)' }}>Application Development</a>
                                        </li>
                                        <li style={{ margin: '20px 0' }}>
                                            <a href='./ITStaffAugComp ' style={{ textDecoration: 'none', color: 'rgb(86, 80, 78)' }}>IT Staff Augmentation</a>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>

                        <li style={{ listStyle: 'none', margin: '0 25px' }}>
                            <Link
                                to='/ContactUsComp'
                                style={{
                                    textDecoration: 'none',
                                    color: textColor,
                                    fontFamily: 'ProximaNova, sans-serif',
                                    transition: 'color 0.3s ease, transform 0.3s ease',
                                    fontSize: '12px'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.color = 'rgb(119, 107, 107)';
                                    e.target.style.transform = 'scale(1.05)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.color = textColor; 
                                    e.target.style.transform = 'scale(1)';
                                }}
                            >
                                <h2 style={{ margin: 0 }}>Contact Us</h2>
                            </Link>
                        </li>

                    
                    </div>
                    
                </div>
            </header>
        );
    };
