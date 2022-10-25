import React from "react";
import Footer from "../../components/Layout/Footer";
import Header from "../../components/Layout/Header";
import Navbar from "../../components/Layout/Navbar";

const Form = () => {
  return (
    <div>
        <Header />
      <main className="content">
        <Navbar />
        <div className="py-4">
          <nav aria-label="breadcrumb" className="d-none d-md-inline-block">
            <ol className="breadcrumb breadcrumb-dark breadcrumb-transparent">
              <li className="breadcrumb-item">
                <a href="#">
                  <svg
                    className="icon icon-xxs"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Volt</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Forms
              </li>
            </ol>
          </nav>
          <div className="d-flex justify-content-between w-100 flex-wrap">
            <div className="mb-3 mb-lg-0">
              <h1 className="h4">Forms</h1>
              <p className="mb-0">
                Dozens of reusable components built to provide buttons, alerts,
                popovers, and more.
              </p>
            </div>
            <div>
              <a
                href="https://themesberg.com/docs/volt-bootstrap-5-dashboard/components/forms/"
                className="btn btn-outline-gray"
              >
                <i className="far fa-question-circle me-1"></i> Forms Docs
              </a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 mb-4">
            <div className="card border-0 shadow components-section">
              <div className="card-body">
                <div className="row mb-4">
                  <div className="col-lg-4 col-sm-6">
                    <div className="mb-4">
                      <label htmlFor="email">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                      />
                      <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                      </small>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputIconLeft">Icon Left</label>
                      <div className="input-group">
                        <span className="input-group-text" id="basic-addon1">
                          <svg
                            className="icon icon-xs text-gray-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputIconLeft"
                          placeholder="Search"
                          aria-label="Search"
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputIconRight">Icon Right</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputIconRight"
                          placeholder="Search"
                          aria-label="Search"
                        />
                        <span className="input-group-text" id="basic-addon2">
                          <svg
                            className="icon icon-xs text-gray-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputIconPassword">Password</label>
                      <div className="input-group">
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputIconPassword"
                          placeholder="Password"
                          aria-label="Password"
                        />
                        <span className="input-group-text" id="basic-addon3">
                          <svg
                            className="icon icon-xs text-gray-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="firstName">First name</label>
                      <input
                        type="text"
                        className="form-control is-valid"
                        id="firstName"
                        defaultValue="Mark"
                        required
                      />
                      <div className="valid-feedback">Looks good!</div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="my-4">
                      <label htmlFor="textarea">Example textarea</label>
                      <textarea
                        className="form-control"
                        placeholder="Enter your message..."
                        id="textarea"
                        rows="4"
                      ></textarea>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="usernameValidate">Username</label>
                      <input
                        type="text"
                        className="form-control is-invalid"
                        id="usernameValidate"
                        required
                      />
                      <div className="invalid-feedback">
                        Please choose a username.
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="mb-3">
                      <label htmlFor="birthday">Birthday</label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <svg
                            className="icon icon-xs text-gray-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                        <input
                          data-datepicker=""
                          className="form-control"
                          id="birthday"
                          type="text"
                          placeholder="dd/mm/yyyy"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="disabledTextInput">Name</label>
                      <input
                        type="text"
                        id="disabledTextInput"
                        className="form-control"
                        placeholder="Disabled input"
                        disabled
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="disabledSelect">Disabled select menu</label>
                      <select id="disabledSelect" className="form-control" disabled>
                        <option>Disabled select</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className="my-1 me-2" htmlFor="country">
                        Country
                      </label>
                      <select
                        className="form-select"
                        id="country"
                        aria-label="Default select example"
                      >
                        <option>Open this select menu</option>
                        <option defaultValue="1">One</option>
                        <option defaultValue="2">Two</option>
                        <option defaultValue="3">Three</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="formFile" className="form-label">
                        Default file input example
                      </label>
                      <input className="form-control" type="file" id="formFile" />
                    </div>
                  </div>
                </div>
                <div className="row mb-5 mb-lg-5">
                  <div className="col-lg-3 col-md-6">
                    <div className="mb-3">
                      <span className="h6 fw-bold">Checkboxes Round</span>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="defaultCheck10"
                      />
                      <label className="form-check-label" htmlFor="defaultCheck10">
                        Default checkbox
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="defaultCheck20"
                        disabled
                      />
                      <label className="form-check-label" htmlFor="defaultCheck20">
                        Disabled checkbox
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 mt-4 mt-md-0">
                    <fieldset>
                      <legend className="h6">Radios</legend>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          defaultValue="option1"
                          defaultChecked
                        />
                        <label className="form-check-label" htmlFor="exampleRadios1">
                          Default radio
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios2"
                          defaultValue="option2"
                        />
                        <label className="form-check-label" htmlFor="exampleRadios2">
                          Second default radio
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios3"
                          defaultValue="option3"
                          disabled
                        />
                        <label className="form-check-label" htmlFor="exampleRadios3">
                          Disabled radio
                        </label>
                      </div>
                    </fieldset>
                  </div>
                  <div className="col-lg-3 col-sm-6 mt-4 mt-md-0">
                    <div className="mb-3">
                      <span className="h6 fw-bold">Switches</span>
                    </div>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        Default switch input
                      </label>
                    </div>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckChecked"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckChecked"
                      >
                        Checked switch input
                      </label>
                    </div>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDisabled"
                        disabled
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDisabled"
                      >
                        Disabled switch input
                      </label>
                    </div>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckCheckedDisabled"
                        defaultChecked
                        disabled
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckCheckedDisabled"
                      >
                        Disabled checked switch input
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="theme-settings card bg-gray-800 pt-2 collapse"
          id="theme-settings"
        >
          <div className="card-body bg-gray-800 text-white pt-4">
            <button
              type="button"
              className="btn-close theme-settings-close"
              aria-label="Close"
              data-bs-toggle="collapse"
              href="#theme-settings"
              role="button"
              aria-expanded="false"
              aria-controls="theme-settings"
            ></button>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <p className="m-0 mb-1 me-4 fs-7">
                Open source{" "}
                <span role="img" aria-label="gratitude">
                  💛
                </span>
              </p>
              <a
                className="github-button"
                href="https://github.com/themesberg/volt-bootstrap-5-dashboard"
                data-color-scheme="no-preference: dark; light: light; dark: light;"
                data-icon="octicon-star"
                data-size="large"
                data-show-count="true"
                aria-label="Star themesberg/volt-bootstrap-5-dashboard on GitHub"
              >
                Star
              </a>
            </div>
            <a
              href="https://themesberg.com/product/admin-dashboard/volt-bootstrap-5-dashboard"
              target="_blank"
              className="btn btn-secondary d-inline-flex align-items-center justify-content-center mb-3 w-100"
            >
              Download
              <svg
                className="icon icon-xs ms-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <p className="fs-7 text-gray-300 text-center">
              Available in the following technologies:
            </p>
            <div className="d-flex justify-content-center">
              <a
                className="me-3"
                href="https://themesberg.com/product/admin-dashboard/volt-bootstrap-5-dashboard"
                target="_blank"
              >
                <img
                  src="assets/img/technologies/bootstrap-5-logo.svg"
                  className="image image-xs"
                />
              </a>
              <a
                href="https://demo.themesberg.com/volt-react-dashboard/#/"
                target="_blank"
              >
                <img
                  src="assets/img/technologies/react-logo.svg"
                  className="image image-xs"
                />
              </a>
            </div>
          </div>
        </div>

        <div
          className="card theme-settings bg-gray-800 theme-settings-expand"
          id="theme-settings-expand"
        >
          <div className="card-body bg-gray-800 text-white rounded-top p-3 py-2">
            <span className="fw-bold d-inline-flex align-items-center h6">
              <svg
                className="icon icon-xs me-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Settings
            </span>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default Form;
