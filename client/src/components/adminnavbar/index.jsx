
import './navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { useNavigate, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const Adminnavbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    navigate('/adminlogin');
  };

  return (
    <div className="navbar">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <h1>Jobbiz</h1>
          <div className="adminname"></div>
          <Nav className="me-auto">
            <NavLink
              to="/adminhome"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/postedjob"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Posted jobs
            </NavLink>
            <NavLink
              to="/candidatedetails"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Candidate details
            </NavLink>
            <NavLink
              to="/adminsignup"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Add New Admin
            </NavLink>
            <Nav.Link onClick={logout} href="">
              Logout
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Adminnavbar;
