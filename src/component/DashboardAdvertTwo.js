import { Col, Row } from "reactstrap";
import DashboardImage from "../assets/dashboard-header.png"
import { ArrowRight } from "react-feather";
import { Link } from "react-router-dom";
import AdvertImg from "../assets/robot.png"


const DashboardAdvert = () =>{

    return(
        <>
        <div className=" mx-5 promptsHeaderContainer dashboardHeader2" 
        style={{height:'100%'} }
        > 
       <div className="d-flex justify-content-between">

        <div className="text">
          <div>
          <span
                      className='mx-2 px-3'
                      style={{
                        background: '#ecfdf3',
                        padding: '5px',
                        fontSize: '10px',
                        borderRadius: '15px',
                      }}
                    >
                      New
                    </span>
          </div>
    <h1 className="text-white fw-600" style={{fontSize:"50px"}}>Automate Work with Sintra Bots</h1>
    <div>
    <div className='mt-4'>
    <svg xmlns="http://www.w3.org/2000/svg"  color="white" width="5%" height="5%" viewBox="0 0 20 20" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
<g clip-path="url(#clip0_6593_425753)">
<path d="M6.25033 3.75033C6.25033 2.59973 7.18307 1.66699 8.33366 1.66699C9.48425 1.66699 10.417 2.59973 10.417 3.75033V5.00033H11.2503C12.4152 5.00033 12.9976 5.00033 13.457 5.19063C14.0696 5.44436 14.5563 5.93105 14.81 6.54362C15.0003 7.00304 15.0003 7.58547 15.0003 8.75033H16.2503C17.4009 8.75033 18.3337 9.68307 18.3337 10.8337C18.3337 11.9843 17.4009 12.917 16.2503 12.917H15.0003V14.3337C15.0003 15.7338 15.0003 16.4339 14.7278 16.9686C14.4882 17.439 14.1057 17.8215 13.6353 18.0612C13.1005 18.3337 12.4005 18.3337 11.0003 18.3337H10.417V16.8753C10.417 15.8398 9.57753 15.0003 8.54199 15.0003C7.50646 15.0003 6.66699 15.8398 6.66699 16.8753V18.3337H5.66699C4.26686 18.3337 3.5668 18.3337 3.03202 18.0612C2.56161 17.8215 2.17916 17.439 1.93948 16.9686C1.66699 16.4339 1.66699 15.7338 1.66699 14.3337V12.917H2.91699C4.06759 12.917 5.00033 11.9843 5.00033 10.8337C5.00033 9.68307 4.06759 8.75033 2.91699 8.75033H1.66699C1.66699 7.58547 1.66699 7.00304 1.85729 6.54362C2.11103 5.93105 2.59771 5.44436 3.21028 5.19063C3.66971 5.00033 4.25214 5.00033 5.41699 5.00033H6.25033V3.75033Z" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path>
</g>
<defs>
<clipPath id="clip0_6593_425753">
<rect width="20" height="20" fill="currentColor"></rect>
</clipPath>
</defs>
</svg>
          
          <span className='fs-6 mx-2 text-white'>Easy setup, zero coding, plug & play file</span>
        </div>
        <div className='mt-3'>
        <svg xmlns="http://www.w3.org/2000/svg"  color="white" width="5%" height="5%" viewBox="0 0 20 20" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
<path d="M10.0003 17.083C13.9123 17.083 17.0837 13.9117 17.0837 9.99967C17.0837 7.64506 15.9348 5.55878 14.167 4.27084M10.8337 18.6663L9.16699 16.9997L10.8337 15.333M10.0003 2.91634C6.08831 2.91634 2.91699 6.08766 2.91699 9.99967C2.91699 12.3543 4.06588 14.4406 5.83366 15.7285M9.16699 4.66634L10.8337 2.99967L9.16699 1.33301" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
          <span className='fs-6 mx-2 text-white'>Runs on autopilot using ChatGPT</span>
        </div>
        <div className='mt-3 d-flex'>
        <svg xmlns="http://www.w3.org/2000/svg" color="white" width="5%" height="5%" viewBox="0 0 20 20" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
<path d="M15.8333 5.83333V14.1667M4.16667 5.83333V14.1667M14.1667 4.16667L5.83333 4.16667M14.1667 15.8333H5.83333M3.83333 5.83333H4.5C4.96671 5.83333 5.20007 5.83333 5.37833 5.74251C5.53513 5.66261 5.66261 5.53513 5.74251 5.37833C5.83333 5.20007 5.83333 4.96671 5.83333 4.5V3.83333C5.83333 3.36662 5.83333 3.13327 5.74251 2.95501C5.66261 2.79821 5.53513 2.67072 5.37833 2.59083C5.20007 2.5 4.96671 2.5 4.5 2.5H3.83333C3.36662 2.5 3.13327 2.5 2.95501 2.59083C2.79821 2.67072 2.67072 2.79821 2.59083 2.95501C2.5 3.13327 2.5 3.36662 2.5 3.83333V4.5C2.5 4.96671 2.5 5.20007 2.59083 5.37833C2.67072 5.53513 2.79821 5.66261 2.95501 5.74251C3.13327 5.83333 3.36662 5.83333 3.83333 5.83333ZM3.83333 17.5H4.5C4.96671 17.5 5.20007 17.5 5.37833 17.4092C5.53513 17.3293 5.66261 17.2018 5.74251 17.045C5.83333 16.8667 5.83333 16.6334 5.83333 16.1667V15.5C5.83333 15.0333 5.83333 14.7999 5.74251 14.6217C5.66261 14.4649 5.53513 14.3374 5.37833 14.2575C5.20007 14.1667 4.96671 14.1667 4.5 14.1667H3.83333C3.36662 14.1667 3.13327 14.1667 2.95501 14.2575C2.79821 14.3374 2.67072 14.4649 2.59083 14.6217C2.5 14.7999 2.5 15.0333 2.5 15.5V16.1667C2.5 16.6334 2.5 16.8667 2.59083 17.045C2.67072 17.2018 2.79821 17.3293 2.95501 17.4092C3.13327 17.5 3.36662 17.5 3.83333 17.5ZM15.5 5.83333H16.1667C16.6334 5.83333 16.8667 5.83333 17.045 5.74251C17.2018 5.66261 17.3293 5.53513 17.4092 5.37833C17.5 5.20007 17.5 4.96671 17.5 4.5V3.83333C17.5 3.36662 17.5 3.13327 17.4092 2.95501C17.3293 2.79821 17.2018 2.67072 17.045 2.59083C16.8667 2.5 16.6334 2.5 16.1667 2.5H15.5C15.0333 2.5 14.7999 2.5 14.6217 2.59083C14.4649 2.67072 14.3374 2.79821 14.2575 2.95501C14.1667 3.13327 14.1667 3.36662 14.1667 3.83333V4.5C14.1667 4.96671 14.1667 5.20007 14.2575 5.37833C14.3374 5.53513 14.4649 5.66261 14.6217 5.74251C14.7999 5.83333 15.0333 5.83333 15.5 5.83333ZM15.5 17.5H16.1667C16.6334 17.5 16.8667 17.5 17.045 17.4092C17.2018 17.3293 17.3293 17.2018 17.4092 17.045C17.5 16.8667 17.5 16.6334 17.5 16.1667V15.5C17.5 15.0333 17.5 14.7999 17.4092 14.6217C17.3293 14.4649 17.2018 14.3374 17.045 14.2575C16.8667 14.1667 16.6334 14.1667 16.1667 14.1667H15.5C15.0333 14.1667 14.7999 14.1667 14.6217 14.2575C14.4649 14.3374 14.3374 14.4649 14.2575 14.6217C14.1667 14.7999 14.1667 15.0333 14.1667 15.5V16.1667C14.1667 16.6334 14.1667 16.8667 14.2575 17.045C14.3374 17.2018 14.4649 17.3293 14.6217 17.4092C14.7999 17.5 15.0333 17.5 15.5 17.5Z" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
          <span className='fs-6 mx-2 text-white'>Fully customizable and adjustable</span>
        </div>
    </div>
    <div>
    <button 
                        className='btn mt-4'
                        style={{
                            width:"30%",
                          border: '1px solid #FEC84B',
                          backgroundColor: '#FEC84B',
                          borderRadius: '10px',
                          fontWeight: '600',
                        }}
                      >
                        View Nyxil Bots
                        <svg xmlns="http://www.w3.org/2000/svg" width="10%" height="10%" viewBox="0 0 20 20" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
<path d="M5.83301 14.1668L14.1663 5.8335M14.1663 5.8335H5.83301M14.1663 5.8335V14.1668" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
                      </button>
    </div>
        </div>
        <div className="advert">
            <img src={AdvertImg} alt="advert" className="img-fluid"/>
            </div>
       </div>
       
        </div>
        </>
    )
}
export default DashboardAdvert;