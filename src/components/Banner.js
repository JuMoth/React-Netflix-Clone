import axios from '../api/axios';
import React, { useState, useEffect } from 'react'
import requests from '../api/requests';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = async () => {
        // 현재 상영중인 영화 정보를 가져오기(여러 영화)
        const request = await axios.get(requests.fetchNowPlaying);
        console.log(request);
    }

  return (
    <div></div>
  )
}

export default Banner