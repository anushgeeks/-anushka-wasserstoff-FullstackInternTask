import React, { useEffect, useState } from 'react'  
import { useStateContext } from '../Context'  
// Video imports  
import ClearVideo from '../assets/videos/clearsky.mp4'  
import FogVideo from '../assets/videos/foggy.mp4'  
import CloudyVideo from '../assets/videos/cloudy.mp4'  
import RainyVideo from '../assets/videos/rainy.mp4'  
import SnowVideo from '../assets/videos/snowy.mp4'  
import StormyVideo from '../assets/videos/thunderstorm.mp4'  
import SunnyVideo from '../assets/videos/sunny.mp4'  

const BackgroundLayout = () => {  
  const { weather } = useStateContext()  
  const [videoSource, setVideoSource] = useState(RainyVideo);  

  useEffect(() => {  
    if (weather?.conditions) {  
      const conditionString = weather.conditions.toLowerCase();
      console.log(conditionString,"HERE");
      //condition check
      if (conditionString.includes('clear')) {  
        setVideoSource(ClearVideo)  
      } else if (conditionString.includes('cloud')) {  
        setVideoSource(CloudyVideo)  
      } else if (conditionString.includes('rain') || conditionString.includes('shower')) {  
        setVideoSource(RainyVideo)  
      } else if (conditionString.includes('snow')) {  
        setVideoSource(SnowVideo)  
      } else if (conditionString.includes('fog')) {  
        setVideoSource(FogVideo)  
      } else if (conditionString.includes('thunder') || conditionString.includes('storm')) {  
        setVideoSource(StormyVideo)  
      } else {  
        setVideoSource(SunnyVideo) 
      }  
    }  
  }, [weather]);  

  return (  
    <video key={videoSource} autoPlay loop muted className='h-screen w-full absolute left-0 top-0 -z-[10] object-cover' >  
      <source src={videoSource} type="video/mp4" />  
      Your browser does not support the video tag.  
    </video>  
  )  
}  

export default BackgroundLayout