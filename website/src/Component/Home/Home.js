import React from "react";
import style from "./Home.module.css";
import { useNavigate } from 'react-router-dom';



const Home = () => {

  const navigate = useNavigate();

  const handleShedulePage = ()=> {
    navigate('/dayone')
  }

  return (
    <div className={style.home_main}>
      <div className={style.header}>
        <p>Mood Indigo</p>
      </div>
      <div className={style.header_a}>
        <p>WELOME TO SHEDULE EVENT OF MOOD INDIGO</p>
      </div>
      <div className={style.hero_Section}>
        <section className={style.hero}>
          <p>Experience the Magic</p>
          <p>
            Join us for an unforgettable journey into the world of art, music,
            and culture.
          </p>
          <button onClick={handleShedulePage} className={style.button}>
            Shedule Events
          </button>
        </section>
        <div className={style.about}>
          <h2>About Us</h2>
          <p>
            In our endeavor, we are passionate about bringing people together
            through the power of music and art. We believe that music has the
            unique ability to connect individuals, transcend boundaries, and
            create unforgettable experiences. That's why we've dedicated
            ourselves to curating and hosting the most electrifying events and
            experiences in the world of entertainment.  
          </p>
        </div>
      </div>
      <div className={style.footer}>
        <p>&copy; 2024 Mood Indigo</p>
      </div>
    </div>
  );
};

export default Home;
