import React, { useEffect, useState } from 'react';
import axios from 'axios';

const url = `https://api.giphy.com/v1/gifs/random?api_key=kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S`;

const useGif = ({keyword}) => {

    const [gif,setGif] = useState('');

    async function fetchData({keyword}){
        try {
            const data = await axios.get(`${url}&tag=${keyword}`);
            console.log(keyword);
            console.log(data);
            const imageSource = data.data.images.downsized_large.url;
            console.log(imageSource);
            setGif(imageSource);
          } catch (error) {
            setGif("https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284");
          }
    }
  
    useEffect(()=>{
        if(keyword) 
            fetchData(keyword);
    },[keyword])    
    return {gif};
}

export default useGif;