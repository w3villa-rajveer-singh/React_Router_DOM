import React from "react";
import Insta from "./Insta";
import Facebook from "./Facebook";
import { Link, Outlet } from "react-router";

function Contact() {
  return (
    <div>
      <h1>Welcome to Contact Us Page</h1>
      <div className="contact-li">
        <Link to="insta">Instagram</Link>|<Link to="fb">Facebook</Link>
      </div>

      <Outlet />
    </div>
  );
}

export default Contact;
