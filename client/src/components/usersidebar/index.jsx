// import './usersidebar.css'

// const Usersidebar=()=>{
//     return(
//         <div className="usersidebar">
//             <h4>Job Type</h4>

//             <div class="form-check">
//   <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
//   <label class="form-check-label" for="flexCheckChecked">
//     Checked checkbox
//   </label>
// </div>
            
//         </div>

//     )
// }
// export default Usersidebar

import './usersidebar.css';

const Usersidebar = () => {
  return (
    <div className="usersidebar">
        <div className="jobtype">
        <h4>Job Type</h4>

<div className="form-check">
  <input
    className="form-check-input"
    type="checkbox"
    id="flexCheckChecked"
    defaultChecked
  />
  <label className="form-check-label" htmlFor="flexCheckChecked">
Full Time
  </label>
</div>
<div className="form-check">
  <input
    className="form-check-input"
    type="checkbox"
    id="flexCheckChecked"
    defaultChecked
  />
  <label className="form-check-label" htmlFor="flexCheckChecked">
Part Time
  </label>
</div>
<div className="form-check">
  <input
    className="form-check-input"
    type="checkbox"
    id="flexCheckChecked"
    defaultChecked
  />
  <label className="form-check-label" htmlFor="flexCheckChecked">
Internship
  </label>
</div>
        </div>
   
<div className="experience">
    <h4>Experience Level</h4>
<div className="form-check">
  <input
    className="form-check-input"
    type="checkbox"
    id="flexCheckChecked"
    defaultChecked
  />
  <label className="form-check-label" htmlFor="flexCheckChecked">
Fresher
  </label>
</div>

<div className="form-check">
  <input
    className="form-check-input"
    type="checkbox"
    id="flexCheckChecked"
    defaultChecked
  />
  <label className="form-check-label" htmlFor="flexCheckChecked">
Mid 
  </label>
</div>
<div className="form-check">
  <input
    className="form-check-input"
    type="checkbox"
    id="flexCheckChecked"
    defaultChecked
  />
  <label className="form-check-label" htmlFor="flexCheckChecked">
Senior
  </label>
</div>



</div>


<div className="postedtime">
    <h4>Posted Time</h4>
<div className="form-check">
  <input
    className="form-check-input"
    type="checkbox"
    id="flexCheckChecked"
    defaultChecked
  />
  <label className="form-check-label" htmlFor="flexCheckChecked">
Anytime
  </label>
</div>

<div className="form-check">
  <input
    className="form-check-input"
    type="checkbox"
    id="flexCheckChecked"
    defaultChecked
  />
  <label className="form-check-label" htmlFor="flexCheckChecked">
Lastday
  </label>
</div>
<div className="form-check">
  <input
    className="form-check-input"
    type="checkbox"
    id="flexCheckChecked"
    defaultChecked
  />
  <label className="form-check-label" htmlFor="flexCheckChecked">
Lastweek
  </label>
</div>



</div>




    </div>
  );
};

export default Usersidebar;
