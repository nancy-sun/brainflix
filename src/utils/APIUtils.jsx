import axios from "axios";

const API_KEY = "830df12b-8e7e-4107-8b33-1f3d5c527e44";
const API_KEY_PARAM = "?api_key=" + API_KEY;
const API_URL = "https://project-2-api.herokuapp.com";
const VIDEOS_LIST_URL = `${API_URL}/videos${API_KEY_PARAM}`;




export { API_URL, VIDEOS_LIST_URL, API_KEY_PARAM }