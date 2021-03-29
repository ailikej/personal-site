import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Eric Jiang</h2>
        <p><a href="mailto:ericjiangpsu@gmail.com">ericjiangpsu@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Eric. I like building things.
        I am a <a href="https://drexel.edu/cci/academics/computer-science-department/">Drexel MSCS</a> graduate, PSU Alumni, and
        the co-founder and CEO of <a href="https://google.com">ESchange</a>. 
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Eric Jiang <Link to="/">ailikej.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
