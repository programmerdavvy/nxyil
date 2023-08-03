import { ArrowRight } from "react-feather";
import { Link } from "react-router-dom";
import DashboardSlider from "./DashboardSlider";

function PromtpSlider({prompts}){

    return(
        <>
        <div className="p-5">
        <div className="d-flex justify-content-between">
          <div> 
             <h2 className="" style={{fontWeight:'700'}}>
            Weekly Prompts
            </h2>
            </div>
            <Link to="/add-ons" className="text-decoration-none text-light-emphasis">
                <div className="all-prompts bg-white fw-600 p-2 text-center rounded" style={{width:'150px',fontSize:'1.1rem',border:'1px solid #dde1e5'}}>
                     All Prompts               
                </div>
                </Link>
        </div>
        <div className="">
       <DashboardSlider prompts={prompts}/>
        </div>
        </div>
        </>
    )
}
export default PromtpSlider;