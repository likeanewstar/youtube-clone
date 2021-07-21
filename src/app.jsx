import React, { useState, useEffect } from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBYZL5rDr4tY5SFwnuUHyiE2GOdZqrnUGM&part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBYZL5rDr4tY5SFwnuUHyiE2GOdZqrnUGM", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, [])
  return (
    <VideoList videos={videos} />
  );
}

export default App;
