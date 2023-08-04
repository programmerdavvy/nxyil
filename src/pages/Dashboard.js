import React, { useEffect } from 'react'
import Navbarmenu from '../component/Navbar';
import Footer from '../component/Footer';
import CopyRight from '../component/CopyRight';
import DashboardHeader from '../component/DashboardHeader';
import DashboardPromptSlider from '../component/PromptSlider';
import DashboardPromptSliderTwo from '../component/PromptSliderTwo';

import { useState } from 'react';
import { request } from '../services/utilities';
import { Spinner } from 'reactstrap';
import DashboardAdvert from '../component/DashboardAdvert';
import DashboardAdvertTwo from "../component/DashboardAdvertTwo"

function Dashboard() {
  const [prompts, setPrompts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAllPrompts = async (filteredArray) => {
    const url = `alltopics`;
    try {
        setLoading(true);
        const rs = await request(url, 'GET', false);
        setPrompts(rs);
        setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };
useEffect(()=>{
  fetchAllPrompts();
},[]);

const sliderText = {

}
  return (
    <>
    
   <div className='position-fixed  bg-white w-100'>
   <Navbarmenu/>
   </div>
   <div style={{background:"#f9fafb"}}>
   <div style={{paddingTop:'130px'}}>
    <DashboardHeader/>
    </div>
    <div style={{paddingTop:'90px'}}>
    <DashboardPromptSlider prompts={prompts} bgt={'Weekly Prompts'} smt={''} start={0} end={12}/>
    </div>
    {/* hidden-gems */}
    <div style={{paddingTop:'50px'}}>
    <DashboardPromptSliderTwo prompts={prompts} bgt={'Hidden-Gems'} smt={'Our hand-picked prompts with proven results'} start={100} end={120}/>
    </div>
    {/* advert */}
    <div style={{paddingTop:'70px'}}> <DashboardAdvert/></div>
    {/* favourite */}
    <div style={{paddingTop:'70px'}}>
    <DashboardPromptSlider prompts={prompts} bgt={'All-time Favourites'} smt={'Our users most loved and saved prompts'} start={400} end={420}/>
    </div>
    {/* monthly */}
    <div style={{paddingTop:'50px'}}>
    <DashboardPromptSlider prompts={prompts} bgt={'Monthly Prompts'} smt={'Season-focused prompts of the month'} start={2000} end={2020}/>
    </div>
    {/* advert 2 */}
    <div style={{paddingTop:'50px'}}> <DashboardAdvertTwo/></div>
    {/* Worth a Try Prompts */}
    <div style={{paddingTop:'70px'}}>
    <DashboardPromptSlider prompts={prompts} bgt={'Worth a Try Prompts'} smt={'Unique, crazy, but yet incredibly powerful prompts'} start={1000} end={1020}/>
    </div>
   </div>

    {/* footer */}
    <div style={{paddingTop:'20px'}}>
    <Footer/>
    </div>
    <div style={{paddingTop:'50px'}}>
    <CopyRight/>
    {loading && (
        <Spinner
          color='primary'
          style={{ position: 'absolute', top: '80%', left: '48%' }}
        />
      )}
    </div>
        </>
  )
}

export default Dashboard;