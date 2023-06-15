import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/logo.png"
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to="/" className='logo'>
                    <img src={Logo} alt='Footer Logo'/>
                </Link>
                <p>
                    The Next Generation of Financial Accountability
                </p>
                <div className="footer__socials">
                    <a href='https://linkedin.com' target="_blank" rel='noreferrer noopener'>
                        <FaLinkedin />
                    </a>
                    <a href='https://facebook.com' target="_blank" rel='noreferrer noopener'>
                        <FaFacebookF />
                    </a>
                    <a href='https://instagram.com' target="_blank" rel='noreferrer noopener'>
                        <AiFillInstagram />
                    </a>
                    <a href='https://twitter.com' target="_blank" rel='noreferrer noopener'>
                        <AiOutlineTwitter />
                    </a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/team">Team</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link to="/blog">Blog</Link>
                <Link to="/s">Case Studies</Link>
                <Link to="/s">Events</Link>
                <Link to="/communities">Communities</Link>
                <Link to="/FAQs">FAQs</Link>
            </article>
            <article>
                <h4>Get in Touch</h4>
                <Link to="/contact">Contact</Link>
                <Link to="/support">Support</Link>
            </article>
        </div>
        <div className="footer__copyright">
            <small>2023 Finance Fluent &copy; All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer