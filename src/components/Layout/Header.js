import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ page }) => {
    return (
        <>
            <nav className="navbar navbar-dark navbar-theme-primary px-4 col-12 d-lg-none">
                <a className="navbar-brand me-lg-5" href="../../index.html">
                    <img
                        className="navbar-brand-dark"
                        src="assets/img/brand/light.svg"
                        alt="Volt logo"
                    />{" "}
                    <img
                        className="navbar-brand-light"
                        src="assets/img/brand/dark.svg"
                        alt="Volt logo"
                    />
                </a>
                <div className="d-flex align-items-center">
                    <button
                        className="navbar-toggler d-lg-none collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#sidebarMenu"
                        aria-controls="sidebarMenu"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>

            <nav
                id="sidebarMenu"
                className="sidebar d-lg-block bg-gray-800 text-white collapse"
                data-simplebar
            >
                <div className="sidebar-inner px-4 pt-3">
                <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
                    <div className="d-flex align-items-center">
                    <div className="avatar-lg me-4">
                        <img
                        src="assets/img/team/profile-picture-3.jpg"
                        className="card-img-top rounded-circle border-white"
                        alt="Bonnie Green"
                        />
                    </div>
                    <div className="d-block">
                        <h2 className="h5 mb-3">Hi, Jane</h2>
                        <a
                        href="../../pages/examples/sign-in.html"
                        className="btn btn-secondary btn-sm d-inline-flex align-items-center"
                        >
                        <svg
                            className="icon icon-xxs me-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                            ></path>
                        </svg>
                        Sign Out
                        </a>
                    </div>
                    </div>
                    <div className="collapse-close d-md-none">
                    <a
                        href="#sidebarMenu"
                        data-bs-toggle="collapse"
                        data-bs-target="#sidebarMenu"
                        aria-controls="sidebarMenu"
                        aria-expanded="true"
                        aria-label="Toggle navigation"
                    >
                        <svg
                        className="icon icon-xs"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        ></path>
                        </svg>
                    </a>
                    </div>
                </div>
                <ul className="nav flex-column pt-3 pt-md-0">
                    <li className="nav-item">
                    <Link
                        to="/"
                        className="nav-link d-flex align-items-center"
                    >
                        <span className="sidebar-icon">
                        <img
                            src="assets/img/brand/light.svg"
                            height="20"
                            width="20"
                            alt="Volt Logo"
                        />
                        </span>
                        <span className="mt-1 ms-1 sidebar-text">Admin</span>
                    </Link>
                    </li>
                    <li className={`nav-item ${page === 'Dashboard' ? 'active' : ''}`}>
                        <Link to="/dashboard" className="nav-link">
                            <span className="sidebar-icon">
                            <svg
                                className="icon icon-xs me-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                            </svg>
                            </span>
                            <span className="sidebar-text">Dashboard</span>
                        </Link>
                    </li>
                    <li className={`nav-item ${page === 'FAQs' ? 'active' : ''}`}>
                        <Link to="/FAQs" className="nav-link">
                            <span className="sidebar-icon">
                            <svg
                                className="icon icon-xs me-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    fillRule="evenodd"
                                    d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            </span>
                            <span className="sidebar-text">FAQs</span>
                        </Link>
                    </li>
                    <li className={`nav-item ${page === 'Partnership' ? 'active' : ''}`}>
                        <Link to="/partnership" className="nav-link">
                            <span className="sidebar-icon">
                            <svg
                                className="icon icon-xs me-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    fillRule="evenodd"
                                    d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            </span>
                            <span className="sidebar-text">Partnership</span>
                        </Link>
                    </li>
                    <li className={`nav-item ${page === 'Team' ? 'active' : ''}`}>
                        <Link to="/team" className="nav-link">
                            <span className="sidebar-icon">
                            <svg
                                className="icon icon-xs me-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    fillRule="evenodd"
                                    d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            </span>
                            <span className="sidebar-text">Team</span>
                        </Link>
                    </li>
                    <li className={`nav-item ${page === 'Social' ? 'active' : ''}`}>
                        <Link to="/social" className="nav-link">
                            <span className="sidebar-icon">
                            <svg
                                className="icon icon-xs me-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    fillRule="evenodd"
                                    d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            </span>
                            <span className="sidebar-text">Social(Team)</span>
                        </Link>
                    </li>
                    <li className={`nav-item ${page === 'CollectImgs' ? 'active' : ''}`}>
                        <Link to="/collectImgs" className="nav-link">
                            <span className="sidebar-icon">
                            <svg
                                className="icon icon-xs me-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    fillRule="evenodd"
                                    d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            </span>
                            <span className="sidebar-text">Collect Imgs</span>
                        </Link>
                    </li>
                    <li className={`nav-item ${page === 'AvailableOn' ? 'active' : ''}`}>
                        <Link to="/availableOn" className="nav-link">
                            <span className="sidebar-icon">
                            <svg
                                className="icon icon-xs me-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    fillRule="evenodd"
                                    d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            </span>
                            <span className="sidebar-text">Available On</span>
                        </Link>
                    </li>
                    <li className={`nav-item ${page === 'SocialLink' ? 'active' : ''}`}>
                        <Link to="/sociallink" className="nav-link">
                            <span className="sidebar-icon">
                            <svg
                                className="icon icon-xs me-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    fillRule="evenodd"
                                    d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            </span>
                            <span className="sidebar-text">Social Links</span>
                        </Link>
                    </li>
                </ul>
                </div>
            </nav>
        </>
    )
}

export default Header;