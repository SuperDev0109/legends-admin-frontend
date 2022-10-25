import api from '../../utils/api';
import axios from 'axios';
import { toast } from 'react-toastify';
import { 
    SAVE_DASHBOARDTEXT, 
    SAVE_DASHBOARDIMAGE, 
    SAVE_MAPTEXT, 
    SAVE_MAPLINK, 
    SAVE_COLLECTTEXT, 
    SAVE_OURTEAMTEXT,
    SAVE_FAQS,
    SAVE_PARTNERSHIPS,
    SAVE_COLLECTIMGS,
    SAVE_TEAMS,
    SAVE_CONTACTUSTEXT,
    SAVE_TOKENPRICE,
    SAVE_TOKENPERCENT,
    SAVE_AVAILABLES,
    SAVE_SOCIALLINKS
} from '../action_types';

export const dashboardTextAction = (formData) => async dispatch => {
    switch(formData.type) {
        case 'save':
            try {
                var res = await api.post('/auth/dashboardAction', formData);
                swalWithBootstrapButtons.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'The Dashboard Text has been saved',
                    showConfirmButton: true,
                })
            } catch (err) {
                console.log(err);
                swalWithBootstrapButtons.fire(
                    'Warning',
                    'Something went wrong',
                    'warning'
                )
            }
            break;
        case 'get':
            try {
                var res = await api.post('/auth/dashboardAction', formData);
                dispatch({
                    type: SAVE_DASHBOARDTEXT,
                    payload: res.data
                });
            } catch (err) {
                console.log(err);
            }
            break;
        default:
            break;
    }
}

export const contactUsTextAction = (formData) => async dispatch => {
    switch(formData.type) {
        case 'save':
            try {
                var res = await api.post('/auth/contactUsAction', formData);
                swalWithBootstrapButtons.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'The Contact Us Text has been saved',
                    showConfirmButton: true,
                })
            } catch (err) {
                console.log(err);
                swalWithBootstrapButtons.fire(
                    'Warning',
                    'Something went wrong',
                    'warning'
                )
            }
            break;
        case 'get':
            try {
                var res = await api.post('/auth/contactUsAction', formData);
                dispatch({
                    type: SAVE_CONTACTUSTEXT,
                    payload: res.data
                });
            } catch (err) {
                console.log(err);
            }
            break;
        default:
            break;
    }
}

export const dashboardImageSaveAction = (formData) => async dispatch => {
    try {
        var res = await axios.post('/api/auth/dashboardImageSaveAction', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        });

        // var res = await api.post('/auth/dashboardImageSaveAction', formData);
        swalWithBootstrapButtons.fire({
            icon: 'success',
            title: 'Success',
            text: 'The Dashboard Image has been saved',
            showConfirmButton: true,
        })
    } catch (err) {
        console.log(err);
        swalWithBootstrapButtons.fire(
            'Warning',
            'Something went wrong',
            'warning'
        )
    }
}

export const mapImageSaveAction = (formData) => async dispatch => {
    try {
        var res = await axios.post('/api/auth/mapImageSaveAction', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        });

        // var res = await api.post('/auth/dashboardImageSaveAction', formData);
        swalWithBootstrapButtons.fire({
            icon: 'success',
            title: 'Success',
            text: 'The Dashboard Image has been saved',
            showConfirmButton: true,
        })
    } catch (err) {
        console.log(err);
        swalWithBootstrapButtons.fire(
            'Warning',
            'Something went wrong',
            'warning'
        )
    }
}


export const mapTextAction = (formData) => async dispatch => {
    switch(formData.type) {
        case 'save':
            try {
                var res = await api.post('/auth/mapAction', formData);
                swalWithBootstrapButtons.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'The Dashboard Text has been saved',
                    showConfirmButton: true,
                })
            } catch (err) {
                console.log(err);
                swalWithBootstrapButtons.fire(
                    'Warning',
                    'Something went wrong',
                    'warning'
                )
            }
            break;
        case 'get':
            try {
                var res = await api.post('/auth/mapAction', formData);
                dispatch({
                    type: SAVE_MAPTEXT,
                    payload: res.data
                });
            } catch (err) {
                console.log(err);
            }
            break;
        default:
            break;
    }
}

export const mapLinkAction = (formData) => async dispatch => {
    switch(formData.type) {
        case 'save':
            try {
                var res = await api.post('/auth/mapLinkAction', formData);
                swalWithBootstrapButtons.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'The Map Link has been saved',
                    showConfirmButton: true,
                })
            } catch (err) {
                console.log(err);
                swalWithBootstrapButtons.fire(
                    'Warning',
                    'Something went wrong',
                    'warning'
                )
            }
            break;
        case 'get':
            try {
                var res = await api.post('/auth/mapLinkAction', formData);
                dispatch({
                    type: SAVE_MAPLINK,
                    payload: res.data
                });
            } catch (err) {
                console.log(err);
            }
            break;
        default:
            break;
    }
}

export const tokenPriceAction = (formData) => async dispatch => {
    switch(formData.type) {
        case 'save':
            try {
                var res = await api.post('/auth/tokenPriceAction', formData);
                swalWithBootstrapButtons.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'The Token Price has been saved',
                    showConfirmButton: true,
                })
            } catch (err) {
                console.log(err);
                swalWithBootstrapButtons.fire(
                    'Warning',
                    'Something went wrong',
                    'warning'
                )
            }
            break;
        case 'get':
            try {
                var res = await api.post('/auth/tokenPriceAction', formData);
                dispatch({
                    type: SAVE_TOKENPRICE,
                    payload: res.data
                });
            } catch (err) {
                console.log(err);
            }
            break;
        default:
            break;
    }
}

export const tokenPercentAction = (formData) => async dispatch => {
    switch(formData.type) {
        case 'save':
            try {
                var res = await api.post('/auth/tokenPercentAction', formData);
                swalWithBootstrapButtons.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'The Token Percent has been saved',
                    showConfirmButton: true,
                })
            } catch (err) {
                console.log(err);
                swalWithBootstrapButtons.fire(
                    'Warning',
                    'Something went wrong',
                    'warning'
                )
            }
            break;
        case 'get':
            try {
                var res = await api.post('/auth/tokenPercentAction', formData);
                dispatch({
                    type: SAVE_TOKENPERCENT,
                    payload: res.data
                });
            } catch (err) {
                console.log(err);
            }
            break;
        default:
            break;
    }
}

export const collectTextAction = (formData) => async dispatch => {
    switch(formData.type) {
        case 'save':
            try {
                var res = await api.post('/auth/collectAction', formData);
                swalWithBootstrapButtons.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'The Dashboard Text has been saved',
                    showConfirmButton: true,
                })
            } catch (err) {
                console.log(err);
                swalWithBootstrapButtons.fire(
                    'Warning',
                    'Something went wrong',
                    'warning'
                )
            }
            break;
        case 'get':
            try {
                var res = await api.post('/auth/collectAction', formData);
                dispatch({
                    type: SAVE_COLLECTTEXT,
                    payload: res.data
                });
            } catch (err) {
                console.log(err);
            }
            break;
        default:
            break;
    }
}

export const ourteamTextAction = (formData) => async dispatch => {
    switch(formData.type) {
        case 'save':
            try {
                var res = await api.post('/auth/ourteamAction', formData);
                swalWithBootstrapButtons.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'The Dashboard Text has been saved',
                    showConfirmButton: true,
                })
            } catch (err) {
                console.log(err);
                swalWithBootstrapButtons.fire(
                    'Warning',
                    'Something went wrong',
                    'warning'
                )
            }
            break;
        case 'get':
            try {
                var res = await api.post('/auth/ourteamAction', formData);
                dispatch({
                    type: SAVE_OURTEAMTEXT,
                    payload: res.data
                });
            } catch (err) {
                console.log(err);
            }
            break;
        default:
            break;
    }
}

export const faqsAction = (formData) => async dispatch => {
    try {
        var res = await api.post('/auth/faqsAction', formData);
        console.log(res.data);
        dispatch({
            type: SAVE_FAQS,
            payload: res.data
        });
        switch(formData.type) {
            case 'create':
                swalWithBootstrapButtons.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Successfully Created',
                    showConfirmButton: true,
                })
                break;
            case 'update':
                swalWithBootstrapButtons.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Successfully Updated',
                    showConfirmButton: true,
                })
                break;
            case 'delete':
                swalWithBootstrapButtons.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Successfully Deleted',
                    showConfirmButton: true,
                })
                break;
            default:
                break;
        }
    } catch (err) {
        console.log(err);
    }
}

export const partnershipAction = (formData) => async dispatch => {
    try {
        var res = await axios.post('/api/auth/partnershipAction', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        });
        dispatch({
            type: SAVE_PARTNERSHIPS,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
    }
}

export const socialLinkAction = (formData) => async dispatch => {
    try {
        var res = await axios.post('/api/auth/socialLinkAction', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        });
        dispatch({
            type: SAVE_SOCIALLINKS,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
    }
}

export const availableAction = (formData) => async dispatch => {
    try {
        var res = await axios.post('/api/auth/availableAction', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        });
        dispatch({
            type: SAVE_AVAILABLES,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
    }
}

export const collectImgAction = (formData) => async dispatch => {
    try {
        var res = await axios.post('/api/auth/collectImgAction', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        });
        dispatch({
            type: SAVE_COLLECTIMGS,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
    }
}

export const teamAction = (formData) => async dispatch => {
    try {
        var res = await axios.post('/api/auth/teamAction', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        });
        dispatch({
            type: SAVE_TEAMS,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
    }
}

export const socialAction = (formData) => async dispatch => {
    try {
        var res = await axios.post('/api/auth/socialAction', formData);
        dispatch({
            type: SAVE_TEAMS,
            payload: res.data
        });
        swalWithBootstrapButtons.fire({
            icon: 'success',
            title: 'Success',
            text: 'Successfully Updated',
            showConfirmButton: true,
        })
    } catch (err) {
        console.log(err);
    }
}

// Load User
// export const loadUser = () => async dispatch => {
//   try {
//     const res = await api.get('/auth');

//     dispatch({
//       type: USER_LOADED,
//       payload: res.data
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };
  