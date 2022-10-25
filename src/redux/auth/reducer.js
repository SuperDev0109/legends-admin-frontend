import { 
    SAVE_DASHBOARDTEXT, 
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

const INIT_STATE = {
    dashboardText: '',
    contactUsText: '',
    mapText: '',
    mapLink: '',
    tokenPrice: '',
    tokenPercent: '',
    collectText: '',
    ourteamText: '',
    faqs: [],
    partnerships: [],
    collectImgs: [],
    teams: [],
    availables: [],
    socialLinks: []
};

const authReducer = (state = INIT_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case SAVE_DASHBOARDTEXT:
            return {
              ...state,
              dashboardText: payload
            };
        case SAVE_MAPTEXT:
            return {
              ...state,
              mapText: payload
            };
        case SAVE_MAPLINK:
            return {
                ...state,
                mapLink: payload
            };
        case SAVE_COLLECTTEXT:
            return {
                ...state,
                collectText: payload
            };
        case SAVE_OURTEAMTEXT:
            return {
                ...state,
                ourteamText: payload
            };
        case SAVE_FAQS:
            return {
                ...state,
                faqs: payload
            };
        case SAVE_PARTNERSHIPS:
            return {
                ...state,
                partnerships: payload
            };
        case SAVE_COLLECTIMGS:
            return {
                ...state,
                collectImgs: payload
            };
        case SAVE_TEAMS:
            return {
                ...state,
                teams: payload
            };
        case SAVE_CONTACTUSTEXT:
            return {
                ...state,
                contactUsText: payload
            };
        case SAVE_TOKENPRICE:
            return {
                ...state,
                tokenPrice: payload
            };
        case SAVE_TOKENPERCENT:
            return {
                ...state,
                tokenPercent: payload
            };
        case SAVE_AVAILABLES:
            return {
                ...state,
                availables: payload
            };
        case SAVE_SOCIALLINKS:
            return {
                ...state,
                socialLinks: payload
            };
        default: return { ...state };
    }
}

export default authReducer;