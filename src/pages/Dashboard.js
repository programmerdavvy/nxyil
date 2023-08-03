import React, { useEffect } from 'react'
import Navbarmenu from '../component/Navbar';
import Footer from '../component/Footer';
import CopyRight from '../component/CopyRight';
import DashboardHeader from '../component/DashboardHeader';
import DashboardPromptSlider from '../component/PromptSlider';
import { useState } from 'react';
import { request } from '../services/utilities';
import { Spinner } from 'reactstrap';
import DashboardAdvert from '../component/DashboardAdvert';

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
   <div style={{paddingTop:'130px'}}>
    <DashboardHeader/>
    </div>
    <div style={{paddingTop:'90px'}}>
    <DashboardPromptSlider prompts={prompts} bgt={'Weekly Prompts'} smt={''}/>
    </div>
    {/* hidden-gems */}
    <div style={{paddingTop:'20px'}}>
    <DashboardPromptSlider prompts={prompts} bgt={'Hidden-Gems'} smt={'Our hand-picked prompts with proven results'}/>
    </div>
    {/* advert */}
    <div style={{paddingTop:'20px'}}> <DashboardAdvert/></div>
    
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