import './home.css';
import Navbar from '../../components/navbar'
import { Navigate, useNavigate } from 'react-router-dom';
import React from 'react';
import { Button, Flex } from 'antd';

// import Footer from '../../components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home=()=>{

  const navigate = useNavigate();


    return(
<div className="home">
<Navbar/>
<div className="homestart">
  <div className="startleft">
    <h6>Explore your jobs with jobbiz</h6>
    <br />
    <h1>Start your carrier with us</h1>
    <br />
    
<button onClick={()=>{
navigate(`/applicationform`)
} } type="button" class="btn btn-link">Submit Your CV</button>
  </div>
  <div className="homeright"><img className='homerightimg' src="./images/actng.jpeg" alt="" /></div>
</div>
<div className="homejobcontainer">
<div className="finance">
  <img className='imgjobcntnr' src="./images/finance1.jpg" alt="" />
<h3>Accounting</h3>
<p>use accounting expertise to help clients improve their financial management and tax strategies</p>
</div>
<div className="learn">
<img className='imgjobcntnr' src="./images/finance2.jpg" alt="" />
<h3>IT</h3>
<p> IT consultant is to work in partnership with clients, advising them how to use information technology in order to meet their business objectives </p>

</div>
<div className="bussness">
<img className='imgjobcntnr' src="./images/finance3.jpg" alt="" />
<h3>Digital Marketing</h3>
<p>assists companies in creating and implementing the best possible strategies to reach their target audience</p>
</div>
</div>
<div className="midcointainer">
  
<div className="midleft">
  <img src="./images/office.jpeg" alt="" />

</div>
<div className="midright">
  <h2>Help you to get the best job that fits you</h2>
  <h6>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approach</h6>
<li>Bring to the table win-win survival</li>
<li>Capitalize on low hanging fruit to identify</li>
<li>But I must explain to you how all this</li>
</div>

</div>
<div className="jobposting">
  <div className="jobleft">
    <h6>Looking for an expert for your company?</h6>
    <h1>Get applications from <br />the world best talents.</h1>
    <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. <br /> Override the digital divide with additional clickthroughs from DevOps.</p>
  <br />
  <br />
    <Button className='postjobbutton' variant="solid">
 Post A Job
</Button>
  </div>
  <div className="jobright">
    <img src="./images/content2.jpg" alt="" />
  </div>
</div>


{/* <Footer/> */}

</div>

    )
}
export default Home