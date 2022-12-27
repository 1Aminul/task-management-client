import { Navbar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
       
       <div className='border-4 shadow-lg'>
       <Navbar
          fluid={true}
          rounded={true}
        >
          <Link to='/'>
          <Navbar.Brand>
           
           <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Task Management
            </span>
           
          </Navbar.Brand></Link>
          <div className="flex md:order-2">
          
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Link className='text-lg' to='/mytask'><Navbar.Link>My Task</Navbar.Link></Link>
            <Link className='text-lg' to='/'><Navbar.Link>Add Task</Navbar.Link></Link>
            <Link className='text-lg' to='/completedtask'><Navbar.Link>Completed Task</Navbar.Link></Link>
            <Link className='text-lg' to='/login'><Navbar.Link>Login</Navbar.Link></Link>
            <Link className='text-lg' to='/register'><Navbar.Link>Register</Navbar.Link></Link>
            
          </Navbar.Collapse>
        </Navbar>

       </div>
    );
};

export default Nav;