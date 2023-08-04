import { ArrowRight } from "react-feather";
import { Link } from "react-router-dom";
import DashboardSlider from "./DashboardSlider";

function PromtpSlider({prompts,bgt,smt,start,end}){

    return(
        <>
        <div className="promptsHeaderContainer pb-5">
        <div className="d-flex justify-content-between">
          <div> 
             <h1 className="promptsHeaderBigText" style={{fontWeight:'700'}}>
            {bgt}
            </h1>
            <p className="pt-4 text-light-emphasis fs-5">{smt}</p>
            </div>
            <Link to="/prompts" className="text-decoration-none text-light-emphasis loginleftside">
                <div className="all-prompts bg-white fw-600 p-2 text-center rounded" style={{width:'150px',fontSize:'1.1rem',border:'1px solid #dde1e5'}}>
                     All Prompts               
                </div>
            </Link>
        </div>
        <div className="">
       <DashboardSlider prompts={prompts} start={start} end={end}/>
        </div>
        </div>
        </>
    )
}
export default PromtpSlider;