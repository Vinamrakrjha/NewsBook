import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary fixed-top">
                <div className="container-fluid">
                    <div style={{ marginRight: '20px' }}>
                        <Link className="navbar-brand text-white" to="/" style={{fontWeight : 'bold',marginRight :'0px'}}>News
                        <span style={{ marginLeft : '2px', color : '#0275d8', backgroundColor :'white', borderRadius :'4px'}}>Book</span> </Link>
                        <i className="fa-solid fa-newspaper text-white"></i>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-white" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/general">General</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/technology">Technology</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar