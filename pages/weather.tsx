
import Inputs from "../Components/Inputs"
import weatherstyle from '../styles/Weather.module.css';

export default function Weather(){

    const API_KEY = '589bd95183f59b3a81b7d3b8eea8a979';

    // https://api.openweathermap.org/data/2.5/weather?q={ctiiy}&appid={key}
    

    return(
        <div className={weatherstyle.main}>
        
        <Inputs  API_KEY={API_KEY} />
        
        </div>
    )
}