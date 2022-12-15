import { Link, NavLink } from 'react-router-dom';
// import { useState } from 'react';

import './styles/Navbar.scss';
import { CIRCULOS, ESTADISTICAS, GENERAL_LIST, PROPUESTAS_LIST , NEW_SUBMISISON, ORGANISMOS, USERS } from '../../core/config/routes/paths';

const Navbar = () => {
  // const [toggle, setToggle] = useState(true);

  // const handleClickToggle = () => {
  //   setToggle((state) => !state);
  // };
  return (
    <nav className='navbar navbar-expand-lg sticky-top bg-light shadow-sm '>
      <div className='container-fluid'>
        <div
          className='navbar-brand' 
        > 
          <h1 className='d-inline-block m-3 '>
            <Link
              to='/'
              className='text'
            > <img src="/src/assets/images/logo.png" />
               OCI
            </Link>
          </h1>
        </div>

        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => { } /* handleClickToggle */}
        >
          <i className="bi bi-list-nested"></i>
        </button>

        <div
          className='collapse navbar-collapse justify-content-end'
          id='navbarNav'
        >
          <ul className='navbar-nav align-center gap-2'>
            <li className='nav-item '>
              <NavLink
                className='nav-link link text-dark '
                to={NEW_SUBMISISON}
              >
                <i className="inav bi bi-plus-lg"></i>

                {/* Nueva Solicitud */}
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className='nav-link link text-dark '
                to={GENERAL_LIST}
              >
                <i className="inav bi bi-files"></i>
                {/* Listado de planillas */}
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className='nav-link link text-dark'
                to={ESTADISTICAS}
              >
               <i className="inav bi bi-bar-chart-fill"></i>
             {/*   Estadisticas */}
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className='nav-link link text-dark'
                to={CIRCULOS}
              >
                <i className="inav bi bi-house-gear"></i>
                {/* Circulos */}
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className='nav-link link text-dark'
                to={ORGANISMOS}
              >
                <i className="inav bi bi-building-gear"></i>
               {/*  Organismos */}
              </NavLink>
            </li>
             
            <li className='nav-item'>
              <NavLink
                className='nav-link link text-success text-primary'
                to={USERS}
              >
                <i className="inav bi bi-person-fill-gear" aria-label='users'></i>
              </NavLink>
              </li>

              <Link
                className='nav-link link text-success text-primary '
                to={PROPUESTAS_LIST}
              >
                <i className='inav bi-question-lg'></i>
              </Link>

              <Link
                className='nav-link link text-success text-primary '
                to='/'
              >
                <i className='inav bi bi-box-arrow-in-right'></i>
              </Link>

              </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
