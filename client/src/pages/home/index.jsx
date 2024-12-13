import './home.css';
import Navbar from '../../components/navbar'
import { Navigate, useNavigate } from 'react-router-dom';
import React from 'react';
import { Button, Flex,Card,Space } from 'antd';
 import Footer from '../../components/footer';
 import 'bootstrap/dist/css/bootstrap.min.css';




const Home=()=>{

  const navigate = useNavigate();

    return(
<div className="home">
<Navbar/>
<div className="homestart">
 <div className="startleft">
  <h6>Find the perfect job</h6>
  <h5>that you deserve.</h5>
  <div className="search">
<input type="text"  placeholder='job tittle'/>
<button onClick={() => {
              navigate(`/postedjobforuser`);
            }}  >submit</button>
 
  </div>
 </div>
 <div className="startright">
  <img src="./images/hero-.png" alt="" />
 </div>

</div>
<div className="hiredcompany">
<img src="./images/789.jpg" alt="" />

</div>
<div className="category">
  <div className="contentcategory">
    <p>Explore by category</p>

    <button onClick={() => {
              navigate(`/postedjobforuser`);
            }} >Explore All</button>
  
  </div>


  <div className="cardcategoryup">
  <div  onClick={() => {
              navigate(`/postedjobforuser`);
            }}className="business">
    <img src="./images/bsns.png" alt="" />
 <h5>   Bussiness Development</h5>
 <p>200 Vacancy</p>
  </div>
  <div onClick={() => {
              navigate(`/postedjobforuser`);
            }} className="business">
    <img src="./images/developer.jpg" alt="" />
 <h5>  Developer</h5>
 <p>200 Vacancy</p>
  </div>
  <div onClick={() => {
              navigate(`/postedjobforuser`);
            }} className="business">
    <img src="./images/market.png" alt="" />
 <h5>   Markrting & Management</h5>
 <p>200 Vacancy</p>
  </div>

  
    </div>
    <div className="cardcategoryupp">
  <div onClick={() => {
              navigate(`/postedjobforuser`);
            }} className="business">
    <img src="./images/sale.png" alt="" />
 <h5>   Sales & Communication</h5>
 <p>200 Vacancy</p>
  </div>
  <div className="business">
    <img src="./images/project.png" alt="" />
 <h5>  Project Management</h5>
 <p>200 Vacancy</p>
  </div>
  <div onClick={() => {
              navigate(`/postedjobforuser`);
            }} className="business">
    <img src="./images/custumer.png" alt="" />
 <h5>  Custumer service</h5>
 <p>200 Vacancy</p>
  </div>

  
    </div>








    
</div>


<div className="midabout">

<div className="midleftabout">
  <img src="./images/your.png" alt="" />
</div>
<div className="midrightabout">
<h2>Help you to get the best job that fits you</h2>
  <h6>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approach</h6>
<li>Bring to the table win-win survival</li>
<li>Capitalize on low hanging fruit to identify</li>
<li>But I must explain to you how all this</li>


</div>

</div>
<div className="featuredjob">
  <div className="featuredjobhead">
    <h2>Featured Jobs</h2>
    <button onClick={() => {
              navigate(`/postedjobforuser`);
            }} >Explore All</button>
  </div>
  <div className="featuredjobcardup">
  <div className="featuredjobcard">
    <img src="./images/google.png" alt="" />
    <p>Google INC</p>
    <h6>Product Designer</h6>
    <p>We are looking for Enrollment Advisors who are looking to take 30-35 appointments per week. All leads are pre-scheduled.</p>
   
   <button onClick={() => {
              navigate(`/postedjobforuser`);
            }} >Apply now</button>
    </div>
    <div className="featuredjobcard">
    <img src="./images/air.png" alt="" />
    <p>Air bnb</p>
    <h6>UI/UX Designer</h6>
    <p>We are looking for Enrollment Advisors who are looking to take 30-35 appointments per week. All leads are pre-scheduled.</p>
   
    <button onClick={() => {
              navigate(`/postedjobforuser`);
            }} >Apply now</button>
    </div>
    <div className="featuredjobcard">
    <img src="./images/shopify.png" alt="" />
    <p>Shopify</p>
    <h6>iOS Developer</h6>
    <p>We are looking for Enrollment Advisors who are looking to take 30-35 appointments per week. All leads are pre-scheduled.</p>
   
    <button onClick={() => {
              navigate(`/postedjobforuser`);
            }} >Apply now</button>    </div>
  </div>

  <div className="featuredjobcardup">
  <div className="featuredjobcard">
    <img src="./images/tesla.png" alt="" />
    <p>Tesla</p>
    <h6>Creative Director</h6>
    <p>We are looking for Enrollment Advisors who are looking to take 30-35 appointments per week. All leads are pre-scheduled.</p>
   
    <button onClick={() => {
              navigate(`/postedjobforuser`);
            }} >Apply now</button>    </div>
    <div className="featuredjobcard">
    <img src="./images/oculus.png" alt="" />
    <p>Oculus</p>
    <h6>Software engineer</h6>
    <p>We are looking for Enrollment Advisors who are looking to take 30-35 appointments per week. All leads are pre-scheduled.

</p>
<button onClick={() => {
              navigate(`/postedjobforuser`);
            }} >Apply now</button>
    </div>
    <div className="featuredjobcard">
    <img src="./images/tata.png" alt="" />
    <p>TATA</p>
    <h6>Marketing Manager</h6>
    <p>We are looking for Enrollment Advisors who are looking to take 30-35 appointments per week. All leads are pre-scheduled.</p>
   
    <button onClick={() => {
              navigate(`/postedjobforuser`);
            }} >Apply now</button>    </div>
  </div>

</div>
<div className="jobposting">
  <div className="jobleft">
    <h6>Looking for an expert for your company?</h6>
    <h1>Get applications from <br />the world best talents.</h1>
    <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. <br /> Override the digital divide with additional clickthroughs from DevOps.</p>
  <br />
  <br />
    <Button  onClick={()=>{
navigate(`/postjob`)
} } className='postjobbutton' variant="solid">
 Post A Job
</Button>
  </div>
  <div className="jobright">
    <img src="./images/post.png" alt="" />
  </div>
</div>




<div className="location">
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.5090883380293!2d76.6586513!3d10.7674156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba86de8b355607f:0x1aac71ac26825e03!2sNSS+Taluk+Union+Building,+FORT+MAIDAN,+Kerala+678001!5e0!3m2!1sen!2sin!4v1698234567890!5m2!1sen!2sin"
  width="95%"
  height="400"
  style={{ border: '0' }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>



</div>

<Footer/>

</div>

    )
}
export default Home