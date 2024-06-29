


export const LOGO = 'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'


export const BG_IMG = 'https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_large.jpg'


export const API = "https://api.themoviedb.org/3/movie/now_playing?page=1"

export const API_OPTION = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer '+ process.env.REACT_APP_TMDB_KEY,
  }
};



export const Img_CDN_URL = "https://image.tmdb.org/t/p/w200/"


export const user_img = "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"



export const Search_Query_MOVIE ="https://api.themoviedb.org/3/search/movie?query=Dhoom&include_adult=false&language=en-US&page=1"
