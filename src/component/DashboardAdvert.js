import { Col, Row } from "reactstrap";
import DashboardImage from "../assets/dashboard-header.png"
import { ArrowRight } from "react-feather";
import { Link } from "react-router-dom";
import AdvertImg from "../assets/dashboard-advert.png"


const DashboardAdvert = () =>{

    return(
        <>
        <div className=" mx-5 promptsHeaderContainer dashboardHeader" 
        style={{height:'100%'} }
        > 
       <div className="d-flex justify-content-between">

        <div className="text">
    <h1 className="text-white fw-600" style={{fontSize:"50px"}}>Unlock All 10,000+ Prompts</h1>
    <p className="text-white pt-3">The #1 Most Advanced ChatGPT Prompt Bundle On The Planet</p>
    <div>
    <button 
                        className='btn '
                        style={{
                            width:"30%",
                          border: '1px solid #FEC84B',
                          backgroundColor: '#FEC84B',
                          borderRadius: '10px',
                          fontWeight: '600',
                        }}
                      >
                        Get Nyxil Max
                        <svg xmlns="http://www.w3.org/2000/svg" width="10%" height="10%" viewBox="0 0 20 20" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
<path d="M5.83301 14.1668L14.1663 5.8335M14.1663 5.8335H5.83301M14.1663 5.8335V14.1668" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
                      </button>
    </div>
        </div>
        <div className="advert">
            <img src={AdvertImg} alt="advert" width="100%" height="90%"/>
            </div>
       </div>
       
        </div>
        </>
    )
}
export default DashboardAdvert;