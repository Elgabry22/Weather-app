
import { useRef, useState } from 'react';
import weatherstyle from '../styles/Weather.module.css';
//import sunimg from '../pictures/sun.png';
import sunimg from '../public/Images/sun.png';
import cloudimg from '../public/Images/cloud.png';
import rainingimg from '../public/Images/raining.png';
import Humidityimg from '../public/Images/Humidity.png';
import windimg from '../public/Images/smallsun.png';

interface props{
  API_KEY:string,
}



export default function Inputs({API_KEY}:props){

//Define States

let [temp,settemp] = useState('30 PC')
let [city,setcity] = useState('NewYouk');
let [clouds,setclouds] = useState('30 PC');
let [wind,setwind] = useState('300 Speed');
let [humidity,sethumidity] = useState('15');
let [raining,setraining] = useState('37%')




//Define ref 
const cityref = useRef<HTMLInputElement>(null!);

//Get data function

async function getdata(e:any){
  e.preventDefault()
  console.log(cityref.current.value);
 try {
  const serverapi = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityref.current.value}&appid=${API_KEY}&units=imperial`)
  const data = await serverapi.json();
  console.log(data)

  //Set states
 setcity(`${cityref.current.value}`);
 setclouds(`${data.clouds.all} PC`);
 setwind(`${data.wind.speed} Speed`);
 sethumidity(`${data.main.humidity}`);
 setraining(`${data.coord.lat} %`);
 settemp(`${data.main.temp} PC`)

 }catch(err){
  console.log(err);
 }

 
}
    return(

        <div className={weatherstyle.main}>
           
           <form onSubmit={getdata} className={weatherstyle.insertdata}>
               <input type='text' placeholder='City Name' ref={cityref} />
           </form>
           
          <div className={weatherstyle.mainbox}>

            <div className={weatherstyle.abovepart}>
               <div className={weatherstyle.imgdiv}> <img src={sunimg.src} /></div>

               <div className={weatherstyle.cityinfo}>
               <p>Today</p>
               <h2>{city}</h2>
            </div>

            <p className={weatherstyle.temp}>{temp}</p>

          </div>


          <div className={weatherstyle.fouboxs}>
            <div>
              <p>Winds</p>
              <img src={windimg.src} />
              <h6>{wind}</h6>
            </div>

            <div>
              <p>raining</p>
              <img src={rainingimg.src} />
              <h6>{raining}</h6>
            </div>

            <div>
              <p>Clouds</p>
              <img src={cloudimg.src} />
              <h6>{clouds}</h6>
            </div>

            <div>
              <p>Humidity</p>
              <img src={Humidityimg.src} />
              <h6>{humidity}</h6>
            </div>

            
          </div>     
                    
          </div>
           
           

            
            
         </div>
      
        
    )
}