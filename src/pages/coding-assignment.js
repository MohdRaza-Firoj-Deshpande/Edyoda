import "bootstrap/dist/css/bootstrap.min.css";
import "./coding-assignment.css";
import { colors } from "@mui/material";
const CodingAssignment = () => {
  return (
    <div className="coding-assignment">
      <div className="nav-bar-button">
        <div className="container">
          <div className="left-content">
            <div className="logo">
              <div className="edyoda"> <a href="https://www.edyoda.com/"target="_blank">EDYODA</a></div>
            </div>
            <div className="courses">
              <div className="text"><button style={{border:"none",backgroundColor:"white"}}><a href="https://www.edyoda.com/"target="_blank" style={{color:"black",border:"none",textDecoration: 'none'}}>Courses</a></button></div>
              <a href="https://www.edyoda.com/"target="_blank"><img
                className="icon-chevron-down"
                alt=""
                src="/icon-chevron-down.svg"
              /></a>
            </div>
            
            <div>
            <div className="courses">
              <div className="text"><button style={{border:"none",backgroundColor:"white"}}><a href="https://www.edyoda.com/"target="_blank" style={{color:"black",border:"none",textDecoration: 'none'}}>Programs</a></button></div>
              <a href="https://www.edyoda.com/"target="_blank"><img className="icon-chevron-down" alt="" 
              src="/icon-chevron-down.svg"
              /></a>
            </div>
          </div>
          </div>
          <div className="left-content">
            
          <a href="https://www.edyoda.com/"target="_blank"><img className="icon-chevron-down" alt="" src="/search-icon.svg" /></a>
            {/* <div className="log-in"> */}
              <div>  <a href="https://www.edyoda.com/"target="_blank"><button className="login" style={{border:"none",color:"black",backgroundColor:'transparent'}}>Login</button></a></div>
              <div>  <a href="https://www.edyoda.com/"target="_blank"> <button className="join" style={{border:"none",color:"white"}} >Join Now</button></a></div>
            {/* </div> */}
            
            
           <div className="primary-button">
              <b className="text3">join now</b> 
            </div>
          </div>
        </div>
      </div>
      <div className="content-container">
        <img className="back-ground-icon" alt="" src="/back-ground@2x.png" />
        <div className="form">
          <div className="progress-bar">
            <div className="stage-1">
              <div className="icon-1">
                <div className="div">1</div>
              </div>
              < button style={{border:"none",backgroundColor:"white"}}><a href="https://www.edyoda.com/" target="_blank"style={{textDecoration: 'none',color: 'transparent'}}><div className="text-1">Sign Up</div></a></button>
            </div>
            <div className="stage-1">
              <div className="icon-1">
                <div className="div">2</div>
              </div>
              <button style={{border:"none",backgroundColor:"white"}}><a href="https://www.edyoda.com/" target="_blank"style={{textDecoration: 'none',color: 'transparent'}}><div className="text-1">Subscribe</div></a></button>
            </div>
          </div>
          <div className="form-header">
            <div className="text4">Select your subcription plan</div>
          </div>
          <div className="input-container">
            <div className="text-field-1">
              <a href="https://www.edyoda.com/" target="_blank">
              <img
                className="radio-button-icon"
                alt=""
                src="/radio-button.svg"
              />
              </a>
              <div className="text-container">
                <div className="text5">{`12 Months Subscription `}</div>
                <div className="right-text-container">
                  <div className="top-text">
                    <div className="text6">Total</div>
                    <div className="text7">₹99</div>
                  </div>
                  <div className="bottom-text">
                    <div className="left-text">₹8</div>
                    <div className="text9">/mo</div>
                  </div>
                </div>
              </div>
              <div className="tag">
                <div className="offer-expired">Offer expired</div>
              </div>
            </div>
            <div className="text-field-2">
             <a href="https://www.edyoda.com/" target="_blank"> <img
                className="radio-button-icon"
                alt=""
                src="/radio-button1.svg"
              /></a>
              <div className="text-container">
                <div className="text5">{`12 Months Subscription `}</div>
                <div className="left-text-container">
                  <div className="top-text">
                    <div className="text11">Total</div>
                    <div className="text7">₹179</div>
                  </div>
                  <div className="bottom-text">
                    <div className="left-text">₹15</div>
                    <div className="text14">/mo</div>
                  </div>
                </div>
              </div>
              <div className="tag1">
                <div className="recommended">Recommended</div>
              </div>
            </div>
            <div className="text-field-3" >
              <a href="https://www.edyoda.com/"target="_blank"><img
                className="radio-button-icon2"
                alt=""
                src="/radio-button2.svg"
              /></a>
              <div className="text-container2" >
                <div className="text5">{`6 Months Subscription `}</div>
                <div className="left-text-container">
                  <div className="top-text">
                    <div className="text11">Total</div>
                    <div className="text7">₹149</div>
                  </div>
                  <div className="bottom-text">
                    <div className="left-text">₹25</div>
                    <div className="text14">/mo</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-field-3">
            <a href="https://www.edyoda.com/"target="_blank"><img
                className="radio-button-icon2"
                alt=""
                src="/radio-button3.svg"
              /></a>
              <div className="text-container2">
                <div className="text5">{`3 Months Subscription `}</div>
                <div className="left-text-container">
                  <div className="top-text">
                    <div className="text11">Total</div>
                    <div className="text7">₹99</div>
                  </div>
                  <div className="bottom-text">
                    <div className="left-text">₹33</div>
                    <div className="text14">/mo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="summary-container">
            <div className="alert-header">
              <div className="left-text">Subscription Fee</div>
              <div className="text26">₹18,500</div>
            </div>
            <div className="alert">
              <div className="alert-header">
                <div className="text5">Limited time offer</div>
                <div className="text28">- ₹18,401</div>
              </div>
              <div className="alert-body">
                <img
                  className="icon-chevron-down"
                  alt=""
                  src="/icon-clock.svg"
                />
                <div className="left-text">{`Offer valid till 25th March 2023 `}</div>
              </div>
            </div>
            <div className="alert-header">
              <div className="left-text">
                <span className="total">{`Total `}</span>
                <span>(Incl. of 18% GST)</span>
              </div>
              <b className="right-text">₹149</b>
            </div>
          </div>
          <div className="button-container">
            <div className="primary-button2">
            <a href="https://www.edyoda.com/" target="_blank" style={{textDecoration: 'none',color:'red'}}><b className="text3">cancel</b></a>
            </div>
            <button className="primary-button1">
            <a href="https://www.edyoda.com/" target="_blank" style={{textDecoration: 'none',color: 'transparent'}}><b className="text31">proceed to pay</b></a>
            </button>
          </div>
          <div className="icon-container">
            <div className="razorpay-icon">
              <img
                className="razorpay-icon-child"
                alt=""
                src="/frame-12537@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="main-lockup">
          <div className="header">
            <div className="icon-container">
              <div className="access-curated-courses">
                Access curated courses worth
              </div>
            </div>
            <div className="parent">
              <div className="div2">₹ 18,500</div>
              <div className="frame-child" />
              <div className="at-just-wrapper">
                <div className="at-just">at just</div>
              </div>
              <div className="wrapper">
                <div className="at-just">₹ 99</div>
              </div>
              <div className="per-year-wrapper">
                <div className="at-just">per year!</div>
              </div>
            </div>
          </div>
          <div className="pointer-1">
            <div className="icon">
              <img className="icon-child" alt="" src="/group-20.svg" />
            </div>
            <div className="log-in">
              <div className="scholarship-worth-94500-container">
                <span className="total">{`100+ `}</span>
                <span className="primary-button">
                  <span>Job relevant courses</span>
                  <span className="span1">{` `}</span>
                </span>
              </div>
            </div>
          </div>
          <div className="pointer-1">
            <div className="icon1">
              <img className="icon-item" alt="" src="/group-19.svg" />
            </div>
            <div className="log-in">
              <div className="scholarship-worth-94500-container">
                <span className="total">{`20,000+ `}</span>
                <span className="primary-button">Hours of content</span>
              </div>
            </div>
          </div>
          <div className="pointer-3">
            <div className="icon2">
              <div className="vector-parent">
                <img className="vector-icon" alt="" src="/vector.svg" />
                <div className="live">live</div>
              </div>
            </div>
            <div className="text-container8">
              <div className="scholarship-worth-94500-container">
                <span className="total">{`Exclusive `}</span>
                <span className="primary-button">webinar access</span>
              </div>
            </div>
          </div>
          <div className="pointer-4">
            <div className="icon3">
              <img className="icon-inner" alt="" src="/group-17.svg" />
            </div>
            <div className="text-container9">
              <div className="log-in">
                <div className="scholarship-worth-94500-container">
                  <span>{`Scholarship worth `}</span>
                  <span className="span3">₹94,500</span>
                </div>
              </div>
            </div>
          </div>
          <div className="pointer-5">
            <div className="icon1">
              <div className="icon-item">
                <img className="vector-icon1" alt="" src="/vector1.svg" />
                <div className="ads">ADS</div>
                <div className="group-child" />
              </div>
            </div>
            <div className="text-container8">
              <div className="scholarship-worth-94500-container">
                <span className="total">{`Ad Free `}</span>
                <span className="primary-button">learning experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodingAssignment;
