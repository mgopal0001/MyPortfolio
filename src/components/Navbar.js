import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
const NavBar = () => {
	return (
		<>
			{/* <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/projects">
                  Projects
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/resume">
                  Resume
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://superlative-daifuku-8372a7.netlify.app/">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}

			<Navbar bg="transparent" variant="dark" expand="lg">
				<Navbar.Brand href="/home"></Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mx-auto text-center">
						<Nav.Link href="/home">Home</Nav.Link>
						<Nav.Link href="/about">About</Nav.Link>
						<Nav.Link href="/projects">Projects</Nav.Link>
						<Nav.Link href="/resume">Resume</Nav.Link>
						<Nav.Link
							href="https://madan-gopal-blog-posts.netlify.app/"
							target="_blank"
						>
							Blog
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};
export default NavBar;
