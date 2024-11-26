import './footer.css'
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ArrowRightOutlined } from '@ant-design/icons';
// import { Button } from "antd";

const Footer=()=>{
  const navigate = useNavigate();

    return(
      <div className="footer">
       <div className="footmain">
        <div className="footleft">
          <h5>Noyce - Cyber Solutions</h5>
         <div className="footimgmain">
          <img className='footimg'  src="./image/img2.png" alt="" />
          <img className='footimg'  src="./image/x1.png" alt="" />
          <img className='footimg'  src="./image/insta.png" alt="" />
          <img className='footimg'  src="./image/mail2.png" alt="" />

          </div>
         
        </div>
        <div className="footmid">
          <h5>Links</h5>
          <ul onClick={() => navigate('/home')}>
        
          <ArrowRightOutlined  />
          Home
        
      </ul>


      <ul           onClick={() => navigate('/about')}
      >
     
          <ArrowRightOutlined  />
         About
       
      </ul>


      <ul           onClick={() => navigate('/service')}
      >
          <ArrowRightOutlined  />
    Service
   
      </ul>

      <ul onClick={() => navigate('/contact')}>
       
          <ArrowRightOutlined  />
         Contact
       
      </ul>
      <ul onClick={() => navigate('/Protfolio')}>
       
       <ArrowRightOutlined  />
       Protfolio
    
   </ul>

        </div>
        <div className="footright">
          <h3>Address</h3>
          <h6>H.NO 15/38 VINEETHA UPSTAIRS
R.C.CHRUCH ROAD
NEAR KERALA NURSING HOME
SULTANPET PALAKKAD KERALA
INDIA 678001</h6>
        </div>
       </div>
<h6>Copyright ©2024 All rights reserved | www.noyce.in</h6>       </div>

        
        
        
        
        
        
        
      
    )
}
export default Footer