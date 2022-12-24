import axios from './axios.config';
const API_KEY = '4cd955b418acfcdc03cb4d730d310eba';
const requests = {
    fetchTrending : function() { return axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`)},
    fetchNetflixOriginals: function() {return axios.get(`/discover/tv?api_key=${API_KEY}&with_networks=213&language=hi`)},
    fetchTopRated: ()=>{ return axios.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US`)},
    fetchActionMovies: ()=>{return axios.get(`/discover/movie?api_key=${API_KEY}&with_genres=28`)},
    fetchcomedyMovies: ()=>{return axios.get(`/discover/movie?api_key=${API_KEY}&with_genres=35`)},
    fetchHorrorMovies: ()=>{return axios.get(`/discover/movie?api_key=${API_KEY}&with_genres=27`)},
    fetchRomanceMovies: ()=>{return axios.get(`/discover/movie?api_key=${API_KEY}&with_genres=10749`)},
    fetchDocumentaries: ()=>{return axios.get(`/discover/movie?api_key=${API_KEY}&with_genres=99`)}
}
export default requests;