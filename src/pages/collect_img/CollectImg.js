import React, {useState, useRef, useEffect} from 'react';
import Header from "../../components/Layout/Header";
import Navbar from "../../components/Layout/Navbar";
import { collectImgAction } from '../../redux/auth/actions';
import { useDispatch, useSelector } from 'react-redux';

const CollectImg = () => {
    const dispatch = useDispatch();
    const collectImgs = useSelector(state => state.auth.collectImgs);
    const modalRef = useRef();
    const [id, setId] = useState();
    const [priority, setPriority] = useState();
    const [name, setName] = useState();
    const [state, setState] = useState();
    const [files, setFiles] = useState();
    const onPriorityChange = (e) => {
        setPriority(e.target.value);
    }
    const onNameChange = (e) => {
        setName(e.target.value);
    }
    const onChangeUpload = (e) => {
        setFiles(e.target.files);
    }
    const onCreate = () => {
        setState('create');
        setPriority("");
        setName("");
        setFiles("");
        modalRef.current.click();
    }
    const onUpdate = (id, priority, name) => {
        setState('update');
        setId(id);
        setPriority(priority);
        setName(name);
        setFiles("");
        modalRef.current.click();
    }
    const onDelete = (delete_id) => {
        setState('delete');

        swalWithBootstrapButtons.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: 'Delete this Collect Image?',
            showCancelButton: true,  
            confirmButtonColor: '#3085d6',  
            confirmButtonText: 'Yes'
        }).then(async (result) => {
            if(result.isConfirmed) {
                var formData = new FormData();
                formData.append('type', "delete");
                formData.append('id', delete_id);
                try {
                    await dispatch(collectImgAction(formData));
                    swalWithBootstrapButtons.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Successfully Deleted',
                        showConfirmButton: true,
                    })
                    location.replace('');
                } catch(err) {
                    console.log(err);
                }
            }
        })
    }
    const onSave = async () => {
        switch(state) {
            case 'create':
                if(!files) {
                    swalWithBootstrapButtons.fire(
                        'Warning',
                        'Please select the file',
                        'warning'
                    )
                    return;
                }
                var formData = new FormData();
                formData.append('type', state);
                formData.append('name', name);
                formData.append('priority', priority);
                for (var i = 0; i < files.length; i++) {
                    formData.append('files[]', files[i]);
                }
                try {
                    await dispatch(collectImgAction(formData));
                    swalWithBootstrapButtons.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Successfully Created',
                        showConfirmButton: true,
                    })
                } catch(err) {
                    console.log(err);
                }
                break;
            case 'update':
                var formData = new FormData();
                formData.append('type', state);
                formData.append('id', id);
                formData.append('name', name);
                formData.append('priority', priority);
                if(files) {                
                    for (var i = 0; i < files.length; i++) {
                        formData.append('files[]', files[i]);
                    }
                }
                try {
                    await dispatch(collectImgAction(formData));
                    swalWithBootstrapButtons.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Successfully Updated',
                        showConfirmButton: true,
                    })
                } catch(err) {
                    console.log(err);
                }
                break;
        }
    }
    useEffect(() => {
        dispatch(collectImgAction({type: 'get'}));
    }, []);
    return (
        <div>
        <Header page="CollectImgs" />
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
                Collect Images
              </li>
            </ol>
          </nav>
          <div className="d-flex justify-content-between w-100 flex-wrap">
            <div className="mb-3 mb-lg-0">
              <h1 className="h4">Collect Images</h1>
              <p className="mb-0">
                You can CRUD the Collect Images here
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
                    <div className='col-md-12'>
                        <button type="button" className="btn btn-info" style={{ float: 'right', marginBottom: '20px' }} onClick={onCreate}>Create</button>
                    </div>
                </div>
                <div className='row'>                
                    <div className="table-responsive">
                        <table className="table table-centered table-nowrap mb-0 rounded">
                            <thead className="thead-light">
                                <tr>
                                    <th className="border-0 rounded-start">#</th>
                                    <th className="border-0">Priority</th>
                                    <th className="border-0">Name</th>
                                    <th className="border-0">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {collectImgs && collectImgs.map((item, index)=> (
                                    <tr key={index}>
                                        <td><a href="#" className="text-primary fw-bold">{index+1}</a> </td>
                                        <td>
                                            {item.priority}
                                        </td>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>
                                            <label style={{ cursor: 'pointer' }} onClick={() => onUpdate(`${item._id}`, `${item.priority}`, `${item.name}`)}>Edit</label>&nbsp;|&nbsp; 
                                            <label style={{ cursor: 'pointer' }} onClick={() => onDelete(`${item._id}`)}>Delete</label> 
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
                        <h2 className="h6 modal-title">Partnership</h2>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className="mb-4">
                                    <label htmlFor="name">Name:</label>
                                    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" value={name} onChange={onNameChange} />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className="mb-4">
                                    <label htmlFor="priority">Priority:</label>
                                    <input type="number" className="form-control" id="priority" aria-describedby="emailHelp" value={priority} onChange={onPriorityChange} />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className="mb-3">
                                    <label htmlFor="formFile" className="form-label">
                                        Upload the Collect Image
                                    </label>
                                    <input className="form-control" type="file" id="formFile" onChange={onChangeUpload} />
                                </div>
                            </div>
                        </div>
                        {/* <image src={require('../../../../legends-frontend/src/assets/images/upload/0ff140203d2f43fcf8c663b4dbdd7879.png')} /> */}
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
 
export default CollectImg;