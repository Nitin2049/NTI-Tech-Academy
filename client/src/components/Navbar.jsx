import React, { useEffect, useRef } from 'react';
import { useNavigate, Link } from "react-router-dom";
import "../styles/Navbar.css";
import { IoMdHome } from "react-icons/io";
import { FaBookReader, FaFileSignature } from "react-icons/fa";
import { GiSuitcase } from "react-icons/gi";
import { IoSchoolSharp } from "react-icons/io5";
import { PiCertificateFill, PiCaretCircleDownFill } from "react-icons/pi";
import NtiLogo from "../../public/images/NtiLogo.png";

export default function Navbar() {
  const collapseRef = useRef();
  const navigate = useNavigate();

  const handleLinkClick = () => {
    if (window.innerWidth <= 992 && collapseRef.current) {
      const collapse = new Collapse(collapseRef.current, { toggle: false });
      collapse.hide();
    }
  };

  const handleCourseClick = (program) => {
    navigate("/course_template", { state: { course: program } });
    handleLinkClick();
  };

  useEffect(() => {
    const submenuToggles = document.querySelectorAll(".submenu-toggle");

    const handleSubmenuClick = (e) => {
      e.preventDefault();
      const submenu = e.currentTarget.nextElementSibling;
      submenu.classList.toggle("show");
      document.querySelectorAll(".submenu-toggle + .dropdown-menu").forEach(menu => {
        if (menu !== submenu) menu.classList.remove("show");
      });
    };

    submenuToggles.forEach(toggle => {
      toggle.addEventListener("click", handleSubmenuClick);
    });

    return () => {
      submenuToggles.forEach(toggle => {
        toggle.removeEventListener("click", handleSubmenuClick);
      });
    };
  }, []);

  return (
    <div className="w-100 sticky-top bg-white">
      <nav className="navbar navbar-expand-lg navbar-light text-secondary main-navbar">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" onClick={handleLinkClick}>
            <img src={NtiLogo} alt="NtiLogo" loading="lazy" style={{ height: "5.5rem" }} />
          </Link>

          <button
            className="navbar-toggler dashboard"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            ref={collapseRef}
          >
            <ul className="navbar-nav gap-2 mb-2 mb-lg-0 d-flex align-items-start">

              <Link className="nav-link nav-item active home-style text-secondary system" to="/" onClick={handleLinkClick}>
                <IoMdHome fontSize="1.5rem" className='mb-1' />
                <span>Home</span>
              </Link>

              <div className="nav-item dropdown system ms-1 course-style">
                <span className="nav-link nav-item dropdown-toggle text-secondary system" data-bs-toggle="dropdown" role="button">
                  <FaBookReader fontSize="1.25rem" className='mb-1' /> Courses
                </span>
                <ul className="dropdown-menu">

                  {/* Programming */}
                  <li className="dropend position-relative text-decoration-none">
                    <span className="px-2 dropdown-item dropdown-toggle submenu-toggle text-decoration-none" role="button">
                      programming courses
                    </span>
                    <ul className="dropdown-menu submenu text-decoration-none">
                      {[
                        "mern stack", "mean stack", "java core", "java advance", "java full stack",
                        "python", "c Programming", "c++ Programming", "android app developement", "ios app developement"
                      ].map((prog, i) => (
                        <li key={i}>
                          <span className="dropdown-item text-decoration-none" role="button" onClick={() => handleCourseClick(prog)}>
                            {prog.toLowerCase()}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </li>

                  {/* Data Science */}
                  <li className="dropend position-relative">
                    <span className="px-2 dropdown-item-2 dropdown-item dropdown-toggle submenu-toggle" role="button">
                      data science & analytics
                    </span>
                    <ul className="dropdown-menu submenu">
                      {["data science", "business analytics"].map((prog, i) => (
                        <li key={i}>
                          <span className="dropdown-item-2 dropdown-item" role="button" onClick={() => handleCourseClick(prog)}>
                            {prog.toLowerCase()}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </li>

                  {/* Cyber Security */}
                  <li className="dropend position-relative">
                    <span className="px-2 dropdown-item-3 dropdown-item dropdown-toggle submenu-toggle" role="button">
                      cyber security
                    </span>
                    <ul className="dropdown-menu submenu">
                      <li>
                        <span className="dropdown-item-3 dropdown-item" role="button" onClick={() => handleCourseClick("cyber security")}>
                          cyber security
                        </span>
                      </li>
                    </ul>
                  </li>

                  {/* Digital Marketing */}
                  <li className="dropend position-relative">
                    <span className="px-2 dropdown-item-5 dropdown-item dropdown-toggle submenu-toggle" role="button">
                      digital marketing
                    </span>
                    <ul className="dropdown-menu submenu">
                      <li>
                        <span className="dropdown-item-5 dropdown-item" role="button" onClick={() => handleCourseClick("advance digital marketing")}>
                          advance digital marketing
                        </span>
                      </li>
                    </ul>
                  </li>

                  {/* Cloud & DevOps */}
                  <li className="dropend position-relative">
                    <span className="px-2 dropdown-item-6 dropdown-item dropdown-toggle submenu-toggle" role="button">
                      cloud & devops
                    </span>
                    <ul className="dropdown-menu submenu">
                      {["aws with dev ops", "saleforce"].map((prog, i) => (
                        <li key={i}>
                          <span className="dropdown-item-6 dropdown-item" role="button" onClick={() => handleCourseClick(prog)}>
                            {prog.toLowerCase()}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </li>

                  {/* Software Testing */}
                  <li className="dropend position-relative">
                    <span className="px-2 dropdown-item-7 dropdown-item dropdown-toggle submenu-toggle" role="button">
                      software testing
                    </span>
                    <ul className="dropdown-menu submenu">
                      {["software testing (manual)", "automation"].map((prog, i) => (
                        <li key={i}>
                          <span className="dropdown-item-7 dropdown-item" role="button" onClick={() => handleCourseClick(prog)}>
                            {prog.toLowerCase()}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </li>

                  {/* Other Courses */}
                  <li className="dropend position-relative">
                    <span className="px-2 dropdown-item-9 dropdown-item dropdown-toggle submenu-toggle" role="button">
                      other professional courses
                    </span>
                    <ul className="dropdown-menu submenu">
                      <li>
                        <span className="dropdown-item-2 dropdown-item" role="button" onClick={() => handleCourseClick("communication skills & personality developement")}>
                          communication skills & personality developement
                        </span>
                      </li>
                    </ul>
                  </li>

                </ul>
              </div>

              <Link className="nav-link text-secondary system me-1" to="/placement" onClick={handleLinkClick}>
                <GiSuitcase fontSize="1.5rem" className='mb-1' /> <span>Placement</span>
              </Link>

              <Link className="nav-link text-secondary system" to="/corpo_tra" onClick={handleLinkClick}>
                <IoSchoolSharp fontSize="1.25rem" className='mb-1' /> <span>Corporate Training</span>
              </Link>

              <Link className="nav-link text-secondary system ms-1" to="/on_tra" onClick={handleLinkClick}>
                <FaFileSignature fontSize="1.25rem" className='mb-1' /><span>Online Registration</span>
              </Link>

              <Link className="nav-link text-secondary system" to="/certificate" onClick={handleLinkClick}>
                <PiCertificateFill fontSize="1.5rem" className='mb-1' /> <span>Certificate</span>
              </Link>

              <Link className="nav-link text-secondary system" to="/about" onClick={handleLinkClick}>
                <PiCaretCircleDownFill fontSize="1.5rem" className='mb-1' /> <span>About</span>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
