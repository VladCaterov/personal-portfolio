import React from 'react';
import './landing-page.css'
const LandingPage = () =>{
 return (
    <div className="landing-page-container">
      <div className="background-image"></div>
      <div className="content-container">
         <div className="landing-page-header">
            <h1>Hello</h1>
         </div>
            <div className="large-text-container">
               <div className="typing-demo">
                  Vladimir Caterov
               </div>
            </div>
      </div>
      {/* <div>
         <h1>Hello</h1>
      </div> */}
    </div>
 );
}

export default LandingPage;