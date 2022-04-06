import './NavBar.css'
import {FaChevronDown,FaChevronRight} from 'react-icons/fa';
import SideBar from './SideBar';
const NavBar = () => {
    return (
       <nav className="navbar navbar-expand-lg navbar-dark bg-light py-3">
        <div className="container d-flex justify-content-between align-items-baseline">
        
 <a className="navbar-brand text-white" >
              <h4 className="fw-bold logo-nav">Impact</h4>
            </a>
            
          
<div className="desktop-nav">
   <ul className="list-unstyled d-flex justify-content-end navbar-nav w-100 ">
                <li className=" nav-li active">
                     <a className="text-decoration-none">

                  home
                     </a>
                </li>
                <li className="dropdown pop-over nav-li">
                  <a className="text-decoration-none">
                    Dropdown 
                    <span className="ps-2"><FaChevronDown /></span>
                  </a>
                  <ul
                    className=" content list-unstyled pt-3 ps-3"
                  >
                    <li className=" dropdown-li">
                      <a href="#"  className="content-item text-decoration-none text-dark ">Menu One</a>
                    </li>

                    <li className=" pop-over2 dropdown-li">
                      <a href="#"  className="content-item text-decoration-none text-dark ">Menu Two
                      <span className="ps-5"><FaChevronRight /></span>
                      </a>

                      <ul className="content2 shadow-sm list-unstyled pt-3 ps-3">
                        <li className="dropdown-li">
                          <a href="#"  className="content-item text-decoration-none ">Sub Menu One</a>
                        </li>
                        <li className="dropdown-li">
                          <a href="#"  className="content-item text-decoration-none" >Sub Menu Two</a>
                        </li>
                        <li className="dropdown-li">
                          <a href="#"  className="content-item text-decoration-none ">Sub Menu Three</a>
                        </li>
                      
                      </ul>

                    </li>

                    <li className="dropdown-li">
                      <a href="#" className="content-item text-decoration-none  ">Menu Three</a>
                    </li>
                  </ul>
                </li>
                <li className=" nav-li">
                  <a href="#"  className="text-decoration-none">
                    Services
                  </a>
                </li>
                <li className="nav-li">
                  <a href="#" className=" text-decoration-none">
                    Blog
                  </a>
                </li>
                <li className="nav-li">
                  <a href="#" className=" text-decoration-none">
                    About
                  </a>
                </li>
                <li className="nav-li">
                  <a href="#" className="text-decoration-none">
                    Contact Us
                  </a>
                </li>
              </ul>
              </div>

          <div className="mobile-view py-2">
           
          <a className="navbar-brand text-white m-nav" >
              <h4 className="fw-bold">Impact</h4>
            </a>
               <button
              className="navbar-toggler btn"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
              aria-expanded="false"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
         

          </div>
          <div
            className=" offcanvas offcanvas-end"
            aria-labelledby="offcanvasRightLabel"
            id="offcanvasRight"
          >
            <div className="offcanvas-header w-100 d-flex justify-content-end">
        
            </div>

            <div className="offcanvas-body">
              <span className="mobile-offcanvas"><SideBar/></span>
              
            </div>
          </div>
        </div>
      </nav>
    )
}

export default NavBar
