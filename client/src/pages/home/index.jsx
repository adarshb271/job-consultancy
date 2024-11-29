import './home.css';
import Navbar from '../../components/navbar'

// import Footer from '../../components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home=()=>{



    return(
<div className="home">
<Navbar/>
<div className="homestart">
  <div className="startleft">
    <h6>Explore your jobs with jobbiz</h6>
    <br />
    <h1>Start your carrier with us</h1>
    <br />
    
<button type="button" class="btn btn-link">Submit Your CV</button>
  </div>
  <div className="homeright"><img className='homerightimg' src="./images/actng.jpeg" alt="" /></div>
</div>
<div className="homejobcontainer">

</div>



{/* <Footer/> */}

</div>

    )
}
export default Home