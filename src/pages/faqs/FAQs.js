import React, {useState, useRef, useEffect} from 'react';
// import Footer from "../../components/Layout/Footer";
import Header from "../../components/Layout/Header";
import Navbar from "../../components/Layout/Navbar";
import { DefaultEditor } from 'react-simple-wysiwyg';
import { faqsAction } from '../../redux/auth/actions';
import { useDispatch, useSelector } from 'react-redux';
import parser from 'html-react-parser';

const FAQs = () => {
    const dispatch = useDispatch();
    const faqs = useSelector(state => state.auth.faqs);
    const modalRef = useRef();
    const [title, setTitle] = useState();
    const [comment, setComment] = useState();
    const [state, setState] = useState('');
    const [id, setId] = useState('');
    const onCommentChange = (e) => {
        setComment(e.target.value);
    }
    const onCreate = () => {
        setState('create');
        setTitle("");
        setComment("");
        modalRef.current.click();
    }
    const onUpdate = (id, title, comment) => {
        setState('update');
        setId(id);
        setTitle(title);
        setComment(comment);
        modalRef.current.click();
    }
    const onDelete = (deleted_id) => {
        setState('delete');
        setId(id);

        swalWithBootstrapButtons.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: 'Delete this FAQ?',
            showCancelButton: true,  
            confirmButtonColor: '#3085d6',  
            confirmButtonText: 'Yes'
        }).then((result) => {
            if(result.isConfirmed) {
                var data = {
                    type: 'delete',
                    id: deleted_id,
                }
                dispatch(faqsAction(data));
            }
        })
    }
    const onSave = () => {
        var data = {
            type: state,
            id: id,
            title: title,
            comment: comment
        }
        dispatch(faqsAction(data));
    }
    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    }
    useEffect(() => {
        dispatch(faqsAction({type: 'get'}));
    }, []);
    return (
        <div>
        <Header page="FAQs" />
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
                FAQs
              </li>
            </ol>
          </nav>
          <div className="d-flex justify-content-between w-100 flex-wrap">
            <div className="mb-3 mb-lg-0">
              <h1 className="h4">FAQs</h1>
              <p className="mb-0">
                You can CRUD the FAQs here
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
                                    <th className="border-0">Title</th>
                                    <th className="border-0">Comment</th>
                                    <th className="border-0">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {faqs && faqs.map((item, index)=> (
                                    <tr key={index}>
                                        <td><a href="#" className="text-primary fw-bold">{index+1}</a> </td>
                                        <td>
                                            {item.title}
                                        </td>
                                        <td>
                                            {(parser(item.comment.slice(0, 50).concat('...')))}
                                        </td>
                                        <td>
                                            <label style={{ cursor: 'pointer' }} onClick={() => onUpdate(`${item._id}`, `${item.title}`, `${item.comment}`)}>Edit</label>&nbsp;|&nbsp; 
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
                        <h2 className="h6 modal-title">FAQs</h2>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className="mb-4">
                                    <label htmlFor="title">title:</label>
                                    <input type="text" className="form-control" id="title" aria-describedby="emailHelp" value={title} onChange={onChangeTitle} />
                                </div>
                            </div>
                        </div>
                        <DefaultEditor value={comment} onChange={onCommentChange} />
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
 
export default FAQs;