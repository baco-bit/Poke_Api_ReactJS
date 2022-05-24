import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to='/'>
                    <img src='https://media-exp1.licdn.com/dms/image/C5612AQElxByNYtEX_A/article-cover_image-shrink_600_2000/0/1551814454243?e=1654128000&v=beta&t=LdzAmnNHfNF5ggqWDVN_Zn84iZ0K5zPbf0u2f6rCkiY' alt='logo' width='100'></img>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to='/'>
                                Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/pokemon'>
                                Lista Pokemon
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
            </header>
        </div>
    )
}

export default Navbar