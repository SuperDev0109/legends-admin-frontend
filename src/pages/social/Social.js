import React, {useState, useRef, useEffect} from 'react';
// import Footer from "../../components/Layout/Footer";
import Header from "../../components/Layout/Header";
import Navbar from "../../components/Layout/Navbar";
import { teamAction, socialAction } from '../../redux/auth/actions';
import { useDispatch, useSelector } from 'react-redux';

const Social = () => {
    const dispatch = useDispatch();
    const teams = useSelector(state => state.auth.teams);
    const modalRef = useRef();
    const [id, setId] = useState();
    const [twitter, setTwitter] = useState();
    const [telegram, setTelegram] = useState();
    const onTwitterChange = (e) => {
        setTwitter(e.target.value);
    }
    const onTelegramChange = (e) => {
        setTelegram(e.target.value);
    }
    const onUpdate = (id, twitter, telegram) => {
        setId(id);
        setTwitter(twitter);
        setTelegram(telegram);
        modalRef.current.click();
    }
    const onSave = async () => {
      const data = {
        id,
        twitter,
        telegram
      }
      await dispatch(socialAction(data));
    }
    useEffect(() => {
        dispatch(teamAction({type: 'get'}));
    }, []);
    return (
        <div>
        <Header page="Social" />
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
                <a href="#">Admin</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Social
              </li>
            </ol>
          </nav>
          <div className="d-flex justify-content-between w-100 flex-wrap">
            <div className="mb-3 mb-lg-0">
              <h1 className="h4">Social</h1>
              <p className="mb-0">
                You can update the Team memebers social
              </p>
            </div>
            {/* <div>
              <a
                href="https://themesberg.com/docs/volt-bootstrap-5-dashboard/components/forms/"
                className="btn btn-outline-gray"
              >
                <i className="far fa-question-circle me-1"></i> Forms Docs
              </a>
            </div> */}
          </div>
        </div>

        <div className="card border-0 shadow mb-4">
            <div className="card-body">
                <div className='row'>                
                    <div className="table-responsive">
                        <table className="table table-centered table-nowrap mb-0 rounded">
                            <thead className="thead-light">
                                <tr>
                                    <th className="border-0 rounded-start">#</th>
                                    <th className="border-0">Name</th>
                                    <th className="border-0">Twitter</th>
                                    <th className="border-0">Telegram</th>
                                    <th className="border-0">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {teams && teams.map((item, index)=> (
                                    <tr key={index}>
                                        <td><a href="#" className="text-primary fw-bold">{index+1}</a> </td>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>
                                            {item.socialLinks.twitter}
                                        </td>
                                        <td>
                                            {item.socialLinks.telegram}
                                        </td>
                                        <td>
                                            <label style={{ cursor: 'pointer' }} onClick={() => onUpdate(`${item._id}`, `${item.socialLinks.twitter}`, `${item.socialLinks.telegram}`)}>Edit</label>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>


        <button id="modalBtn" ref={modalRef} hidden type="button" className="btn btn-block btn-gray-800 mb-3" data-bs-toggle="modal" data-bs-target="#modal-default">Default</button>

        <div className="modal fade" id="modal-default" tabIndex="-1" role="dialog" aria-labelledby="modal-default" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="h6 modal-title">Social Links</h2>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className="mb-4">
                                    <label htmlFor="twitter">Twitter:</label>
                                    <input type="text" className="form-control" id="twitter" aria-describedby="emailHelp" value={twitter} onChange={onTwitterChange} />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className="mb-4">
                                    <label htmlFor="telegram">Telegram:</label>
                                    <input type="text" className="form-control" id="telegram" aria-describedby="emailHelp" value={telegram} onChange={onTelegramChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary ms-auto" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-info" onClick={onSave} data-bs-dismiss="modal">Save</button>
                    </div>
                </div>
            </div>
        </div>

        {/* <Footer /> */}
      </main>
    </div>
    )
}
 
export default Social;