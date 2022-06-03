import React from "react";
import {useNavigate} from 'react-router-dom'
import "../Home.css";

function Home() {
    let navigate = useNavigate();
    const signs = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];

    return (
        <div className="homebg">
            <div id="container">
                <h2>Choose your star sign!</h2> 

                    <div id="starsign">{signs.map(sign => (
                        <button className="btn-glow" onClick={() => {navigate("/Horoscope/" + sign)}} >{sign}</button>
                        ))}
                    </div>

                    <div className="copy">© Amelia Jones 2022</div>
            </div>
        </div>
    )
}

export default Home;