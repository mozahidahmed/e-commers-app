import React from 'react';
import SearchTeacher from '../Teacher/SearchTeacher';
import AboutUs from './AboutUs';
import Banner from './Banner';
import KidsDailyActivity from './KidsDailyActivity';
import QualifiedTeacher from './QualifiedTeacher';
import Reviews from './Reviews';
import ThreeCard from './ThreeCard';

const Home = () => {
    return (
      <div>
       <Banner/>
       <SearchTeacher/>
       <ThreeCard/>
       <KidsDailyActivity/>
       <Reviews></Reviews>
       <AboutUs/>
       <QualifiedTeacher/>
      </div>
    );
};

export default Home;


// https://templatekit.mattsapii.co/padora/wp-content/uploads/sites/5/2020/12/hero-image.png