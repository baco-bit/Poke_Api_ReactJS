import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <footer className="text-white py-4" id="contact">
                <div className="container">
                    <nav className="row justify-content-center">
                        {/*Logo*/}
                        <Link
                            to="#"
                            className="col-12 col-md-3 text-reset text-uppercase d-flex align-items-center justify-content-center mb-3 md-md-0"
                        >
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/269px-International_Pok%C3%A9mon_logo.svg.png?20150121202211" alt="Logo" className="img-logo mr-2" />
                            
                        </Link>
                        {/*1° Menu Recursos*/}
                        <ul className="col-5 col-md-3 list-unstyled">
                            <li className="font-weight-bold text-uppercase"> Información </li>
                            <li>
                                <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime reprehenderit fugiat sed. Iusto quos voluptates assumenda quibusdam odio ipsa ratione?
                                </p>
                            </li>
                        </ul>
                        {/*2° Menu Enlaces Rapidos*/}
                        <ul className="col-5 col-md-3 list-unstyled">
                            <li className="font-weight-bold text-uppercase"> Enlaces Rapidos </li>
                            <li>
                                <Link to="" className="text-reset">
                                    Link 1
                                </Link>
                            </li>
                            <li>
                                <Link to="" className="text-reset">
                                    Link 2
                                </Link>
                            </li>
                            <li>
                                <Link to="" className="text-reset">
                                    Link 3
                                </Link>
                            </li>
                        </ul>
                        {/*Redes Sociales*/}
                        <ul className="col-10 col-md-3 list-unstyled">
                            <li className="font-weight-bold text-uppercase"> Redes Sociales </li>
                            <li className="d-flex justify-content-between">
                                {/*FB*/}
                                <Link to="" className="text-reset">
                                    <i className="fa-brands fa-facebook-f" />
                                </Link>
                                {/*TWT*/}
                                <Link to="" className="text-reset">
                                    <i className="fa-brands fa-twitter" />
                                </Link>
                                {/*INST*/}
                                <Link to="" className="text-reset">
                                    <i className="fa-brands fa-instagram" />
                                </Link>
                                {/*Pint*/}
                                <Link to="" className="text-reset">
                                    <i className="fa-brands fa-pinterest" />
                                </Link>
                            </li>
                        </ul>
                        <div className='container'>
                            <p  className='mb-0 mt-2'>Realizado por Bayron Correa</p>
                        </div>
                    </nav>
                </div>
            </footer>
        </div>
    )
}

export default Footer