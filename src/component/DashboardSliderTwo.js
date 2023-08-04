import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import PromptCard from './PromptCard';
import { Row ,Col} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Bookmark } from 'react-feather';

 function DashboardSliderTwo({prompts,start,end}) {
    const handleSavePrompts= ()=>{

    }
    const slidingPrompts = prompts && [...prompts].slice(start,end).map((e,i)=>{
        return(
            <SwiperSlide className='col-sm-12 col-md-6 col-xl-4 w-30'> 
            <div className='p-4 mb-3 mt-4' style={{border:`1px solid ${e.colorcode}`,height:'90%',  background:'#fff', borderRadius:'12px'}}>
            <Link 
              //  to='#'
                to={`/prompt/${e.category.toLocaleLowerCase()}/${e.topic.toLocaleLowerCase().split(" ").join("-")}/${e.description.toLocaleLowerCase().split(" ").join("-")}`
                } 
                 className='text-decoration-none text-light-emphasis'>
                
                <div>
                <h2 dangerouslySetInnerHTML={{__html:e.emojis }}></h2>
                <div>
                  <span>

                  </span>
                </div>
                </div>
                 <h5 className='text-capitalize'> {e.topic}</h5>                          
              <div>
                <p className='fs-6 text-light-emphasis'> {e.description.slice(0, 90)}...</p>
              </div></Link> 
              <div className='d-flex align-items-center justify-content-between pt-3'>
              <div className='mx-2 px-3 text-white' style={{background:e.colorcode,padding:'5px',fontSize:'12px',  borderRadius:'15px'}}>
               {e.category}</div>
              <div onClick={()=>handleSavePrompts(e.topic,e.category)} style={{cursor:'pointer'}}><Bookmark size={20} color='gray'/> <span className='text-light-emphasis' >{e.countnumber}</span></div>                           
          </div>
</div>
</SwiperSlide>
         
        )
      })
  return (
    <Row>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
    {slidingPrompts}
      </Swiper>
    </Row>
  );
}
export default DashboardSliderTwo;