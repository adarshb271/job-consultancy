import './adminhome.css'
import { Navigate, useNavigate } from 'react-router-dom';

import Navbaradmin from '../../components/adminnavbar'
import Footer from '../../components/footer';
import { Button, Flex } from 'antd';


const Adminhome=()=>{
  const navigate = useNavigate();
 
    return(
<div className="adminhome3">
  
    <Navbaradmin/>
    <div className="admin3">

    <div className="jobposting">
  <div className="jobleft">
    {/* <h6>Looking for an expert for your company?</h6> */}
    <h1>Get applications from <br />the world best talents.</h1>
    <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. <br /> Override the digital divide with additional clickthroughs from DevOps.</p>
  <br />
  <br />
    <Button  onClick={()=>{
navigate(`/postjobadmin`)
} } className='postjobbutton' variant="solid">
 Post A Job
</Button>
  </div>
  <div className="jobright">
    <img src="./images/content2.jpg" alt="" />
  </div>
</div>
</div>
<Footer />
</div>

    )
}
export default Adminhome