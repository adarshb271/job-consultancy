import './navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


const Adminnavbar=()=>{
    return( 

        <div className="navbar">
            
              <Navbar bg="dark" data-bs-theme="dark">
        <Container><h1>Jobbiz</h1>
          {/* <Navbar.Brand href="">Admin</Navbar.Brand> */}
          <Nav className="me-auto">
          
            <Nav.Link href="/adminhome">Home</Nav.Link>
            <Nav.Link href="/postedjob">Posted jobs</Nav.Link>
            <Nav.Link href="/candidatedetails">Candidate details</Nav.Link>
            <Nav.Link href="/adminsignup">Add New Admin</Nav.Link>
          </Nav>
          
        </Container>
      </Navbar>
        </div>
    )
}
export default Adminnavbar