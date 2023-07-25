export const exerciseOptions = {
    method: 'GET',
    //url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': '9085af55c9msh678ae866d70e34fp168b1ejsn8d61bfda86d9',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeOptions = {
    method: 'GET',
    //url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
    params: {id: 'UCE_M8A5yxnLfW0KghEeajjw'},
    headers: {
      'X-RapidAPI-Key': '9085af55c9msh678ae866d70e34fp168b1ejsn8d61bfda86d9',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async (url,options) => {
    const response = await fetch(url,options);
    const data = await response.json();

    return data;
}