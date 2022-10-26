import React, {useState, useEffect} from 'react';
// import Footer from "../../components/Layout/Footer";
import Swal from 'sweetalert2';
import Header from "../../components/Layout/Header";
import Navbar from "../../components/Layout/Navbar";
import { DefaultEditor } from 'react-simple-wysiwyg';
import { useDispatch, useSelector } from 'react-redux';
import { 
    dashboardTextAction, 
    dashboardImageSaveAction, 
    mapImageSaveAction,
    mapTextAction, 
    mapLinkAction, 
    tokenPriceAction,
    tokenPercentAction,
    collectTextAction,
    ourteamTextAction,
    contactUsTextAction
} from '../../redux/auth/actions';

const Dashboard = () => {
    const dispatch = useDispatch();
    const initialDashboardText = useSelector(state => state.auth.dashboardText);
    const initialMapText = useSelector(state => state.auth.mapText);
    const initialCollectText = useSelector(state => state.auth.collectText);
    const initialOurteamText = useSelector(state => state.auth.ourteamText);
    const initialMapLink = useSelector(state => state.auth.mapLink);
    const initialTokenPrice = useSelector(state => state.auth.tokenPrice);
    const initialTokenPercent = useSelector(state => state.auth.tokenPercent);
    const initialContactUsText = useSelector(state => state.auth.contactUsText);
    const [dashboardText, setDashboardText] = useState(initialDashboardText);
    const [mapText, setMapText] = useState(initialMapText);
    const [collectText, setCollectText] = useState(initialCollectText);
    const [ourteamText, setOurteamText] = useState(initialOurteamText);
    const [files, setFiles] = useState();
    const [mapFiles, setMapFiles] = useState();
    const [mapLink, setMapLink] = useState(initialMapLink);
    const [tokenPrice, setTokenPrice] = useState(initialTokenPrice);
    const [tokenPercent, setTokenPercent] = useState(initialTokenPercent);
    const [contactUsText, setContactUsText] = useState(initialContactUsText);

    const onDashboardTextChange = (e) => {
        setDashboardText(e.target.value);
    }
    const onContactUsTextChange = (e) => {
        setContactUsText(e.target.value);
    }
    const onMapTextChange = (e) => {
        setMapText(e.target.value);
    }
    const onMapLinkChange = (e) => {
        setMapLink(e.target.value);
    }
    const onTokenPriceChange = (e) => {
        setTokenPrice(e.target.value);
    }
    const onTokenPercentChange = (e) => {
        setTokenPercent(e.target.value);
    }
    const onCollectTextChange = (e) => {
        setCollectText(e.target.value);
    }
    const onOurteamTextChange = (e) => {
        setOurteamText(e.target.value);
    }
    const onDashboardImgSave = async () => {
        const formData = new FormData();
        if(!files) {
            Swal.fire(
                'Warning',
                'Please select the file',
                'warning'
            )
        } else {
            formData.append('type', 'save');
            for (var i = 0; i < files.length; i++) {
                formData.append('files[]', files[i]);
            }
            await dispatch(dashboardImageSaveAction(formData));
        }
        
    }
    const onMapImgSave = async () => {
        const formData = new FormData();
        if(!mapFiles) {
            Swal.fire(
                'Warning',
                'Please select the file',
                'warning'
            )
        } else {
            formData.append('type', 'save');
            for (var i = 0; i < mapFiles.length; i++) {
                formData.append('files[]', mapFiles[i]);
            }
            await dispatch(mapImageSaveAction(formData));
        }
        
    }
    const onDashboardTextSave = async () => {
        const formData = {
            type: 'save',
            data: dashboardText
        }
        await dispatch(dashboardTextAction(formData));
    }

    const onContactUsTextSave = async () => {
        const formData = {
            type: 'save',
            data: contactUsText
        }
        await dispatch(contactUsTextAction(formData));
    }

    const onMapTextSave = async () => {
        const formData = {
            type: 'save',
            data: mapText
        }
        await dispatch(mapTextAction(formData));
    }

    const onMapLinkSave = async () => {
        const formData = {
            type: 'save',
            data: mapLink
        }
        await dispatch(mapLinkAction(formData));
    }

    const onTokenPriceSave = async () => {
        const formData = {
            type: 'save',
            data: tokenPrice
        }
        await dispatch(tokenPriceAction(formData));
    }

    const onTokenPercentSave = async () => {
        const formData = {
            type: 'save',
            data: tokenPercent
        }
        await dispatch(tokenPercentAction(formData));
    }

    const onCollectTextSave = async () => {
        const formData = {
            type: 'save',
            data: collectText
        }
        await dispatch(collectTextAction(formData));
    }

    const onOurteamTextSave = async () => {
        const formData = {
            type: 'save',
            data: ourteamText
        }
        await dispatch(ourteamTextAction(formData));
    }

    const onChangeUpload = (e) => {
        setFiles(e.target.files);
    }

    const onMapChangeUpload = (e) => {
        setMapFiles(e.target.files);
    }

    useEffect(() => {
        dispatch(dashboardTextAction({type:'get'}));
        dispatch(contactUsTextAction({type:'get'}));
        dispatch(mapTextAction({type:'get'}));
        dispatch(mapLinkAction({type:'get'}));
        dispatch(tokenPriceAction({type:'get'}));
        dispatch(tokenPercentAction({type:'get'}));
        dispatch(collectTextAction({type:'get'}));
        dispatch(ourteamTextAction({type:'get'}));
    }, []);

    useEffect(() => {
        setDashboardText(initialDashboardText);
        setContactUsText(initialContactUsText);
        setMapText(initialMapText);
        setMapLink(initialMapLink);
        setTokenPrice(initialTokenPrice);
        setTokenPercent(initialTokenPercent);
        setCollectText(initialCollectText);
        setOurteamText(initialOurteamText);
    }, [
        initialDashboardText, 
        initialContactUsText, 
        initialMapText, 
        initialMapLink, 
        initialTokenPrice, 
        initialTokenPercent, 
        initialCollectText, 
        initialOurteamText
    ])

    return (
        <div>
        <Header page="Dashboard" />
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
                Dashboard
              </li>
            </ol>
          </nav>
          <div className="d-flex justify-content-between w-100 flex-wrap">
            <div className="mb-3 mb-lg-0">
              <h1 className="h4">Dashboard</h1>
              <p className="mb-0">
                You can choose the background image and text in here
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

        <div className="row">
          <div className="col-12 mb-4">
            <div className="card border-0 shadow components-section">
              <div className="card-body">
                <div className="row mb-4">
                  <div className="col-lg-5 col-sm-6">
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className="mb-3">
                                <label htmlFor="formFile" className="form-label">
                                    Select the Dashboard Image
                                </label>
                                <input className="form-control" type="file" id="formFile" onChange={onChangeUpload} />
                                <button className='btn btn-info' style={{ float: "right" }} onClick={onDashboardImgSave}>Save</button>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className="mb-3">
                                <label htmlFor="mapFile" className="form-label">
                                    Select the Roadmap Image
                                </label>
                                <input className="form-control" type="file" id="mapFile" onChange={onMapChangeUpload} />
                                <button className='btn btn-info' style={{ float: "right" }} onClick={onMapImgSave}>Save</button>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className="mb-3">
                                <label className="form-label">
                                    Edit the Dashboard Text
                                </label>
                                <DefaultEditor value={dashboardText} onChange={onDashboardTextChange} />
                                <button className='btn btn-info' style={{ float: "right" }} onClick={onDashboardTextSave}>Save</button>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className="mb-3">
                                <label className="form-label">
                                    Edit the Contact Us Text
                                </label>
                                <DefaultEditor value={contactUsText} onChange={onContactUsTextChange} />
                                <button className='btn btn-info' style={{ float: "right" }} onClick={onContactUsTextSave}>Save</button>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className="mb-3">
                                <label className="form-label">
                                    Edit Token Price
                                </label>
                                <input type="text" className="form-control" id="tokenPrice" value={tokenPrice} onChange={onTokenPriceChange} />
                                <button className='btn btn-info' style={{ float: "right" }} onClick={onTokenPriceSave}>Save</button>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className="mb-3">
                                <label className="form-label">
                                    Edit Token Percent
                                </label>
                                <input type="text" className="form-control" id="tokenPercent" value={tokenPercent} onChange={onTokenPercentChange} />
                                <button className='btn btn-info' style={{ float: "right" }} onClick={onTokenPercentSave}>Save</button>
                            </div>
                        </div>
                    </div>
                  </div>

                  <div className="col-lg-5 col-sm-6">
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className="mb-3">
                                <label className="form-label">
                                    Edit the map Text
                                </label>
                                <DefaultEditor value={mapText} onChange={onMapTextChange} />
                                <button className='btn btn-info' style={{ float: "right" }} onClick={onMapTextSave}>Save</button>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className="mb-3">
                                <label className="form-label">
                                    Edit the map link
                                </label>
                                <input type="text" className="form-control" id="mapLink" value={mapLink} onChange={onMapLinkChange} />
                                <button className='btn btn-info' style={{ float: "right" }} onClick={onMapLinkSave}>Save</button>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className="mb-3">
                                <label className="form-label">
                                    Edit the collect Text
                                </label>
                                <DefaultEditor value={collectText} onChange={onCollectTextChange} />
                                <button className='btn btn-info' style={{ float: "right" }} onClick={onCollectTextSave}>Save</button>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className="mb-3">
                                <label className="form-label">
                                    Edit the our team Text
                                </label>
                                <DefaultEditor value={ourteamText} onChange={onOurteamTextChange} />
                                <button className='btn btn-info' style={{ float: "right" }} onClick={onOurteamTextSave}>Save</button>
                            </div>
                        </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>

        {/* <Footer /> */}
      </main>
    </div>
    )
}

export default Dashboard;