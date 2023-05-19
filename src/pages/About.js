import React from 'react';
import '../styles/About.scss';
import banner from '../images/about/banner_about.jpg';
import l1 from '../images/about/leadership1.jpg';
import l2 from '../images/about/leadership2.jpg';
import l3 from '../images/about/leadership3.jpg';
import l4 from '../images/about/leadership4.jpg';
import l5 from '../images/about/leadership5.jpg';
import l6 from '../images/about/leadership6.jpg';
import i1 from '../images/about/investor1.jpg';
import i2 from '../images/about/investor2.jpg';
import i3 from '../images/about/investor3.jpg';
import i4 from '../images/about/investor4.jpg';
import i5 from '../images/about/investor5.jpg';
import { Link } from 'react-scroll';

const About = () => {
    return (
        <div className='about'>
            <div className='about__banner'>
                <img src={banner} alt='' />
            </div>
            <div className='about__container'>
                <div className='about__nav'>
                    <div>
                        <Link to="company" spy={true} smooth={true} offset={-100} duration={500}>company info</Link>
                    </div>
                    <div>
                        <Link to="leadership" spy={true} smooth={true} offset={-100} duration={500}>leadersship</Link>
                    </div>
                    <div>
                        <Link to="investors" spy={true} smooth={true} offset={-100} duration={500}>investors</Link>
                    </div>
                    <div>
                        <Link to="culture" spy={true} smooth={true} offset={-100} duration={500}>culture</Link>
                    </div>
                    <div>
                        <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>contact</Link>
                    </div>
                </div>
                <div className='about__company' id='company'>
                    <h2>Community-Inspired Products, Designed for Everyone</h2>
                    <p>
                        Dnam is driven by a passionate group of creators and technophiles who tap into feedback and insights from its enthusiast community—millions strong—to design and curate Dnam’s selection of products.
                        Dnam listens to, digests, and analyzes community feedback in the creation of Dnam products, and collaborates with leading brands to improve upon existing products in a way that is relevant to the Dnam community.
                        Dnam is continuously broadening its workspace product focus into new categories to ensure it brings its community the technology they need to thrive.
                    </p>
                </div>
                <div className='about__leadership' id='leadership'>
                    <h2>Leadership</h2>
                    <div className='about__items'>
                        <div className='about__item'>
                            <img src={l2} alt='' />
                            <h3>Steve El-Hage</h3>
                            <span>Chairman of the Board</span>
                        </div>
                        <div className='about__item'>
                            <img src={l3} alt='' />
                            <h3>Jef Holove</h3>
                            <span>CEO</span>
                        </div>
                        <div className='about__item'>
                            <img src={l4} alt='' />
                            <h3>Tony Meneghetti</h3>
                            <span>Chief Financial Officer</span>
                        </div>
                        <div className='about__item'>
                            <img src={l1} alt='' />
                            <h3>Jonathan Liu</h3>
                            <span>Head of Digital Product & Engineering</span>
                        </div>
                        <div className='about__item'>
                            <img src={l5} alt='' />
                            <h3>Jyri Jokirinta</h3>
                            <span>VP of Sales & Marketing</span>
                        </div>
                        <div className='about__item'>
                            <img src={l6} alt='' />
                            <h3>Mike He</h3>
                            <span>VP of Operations & Planning</span>
                        </div>
                    </div>
                </div>
                <div className='about__investors' id='investors' >
                    <h2 >Investors</h2>
                    <div className='about__investors-container'>
                        <div className='about__investor'>
                            <img src={i1} alt='' />
                        </div>
                        <div className='about__investor'>
                            <img src={i2} alt='' />
                        </div>
                        <div className='about__investor'>
                            <img src={i3} alt='' />
                        </div>
                        <div className='about__investor'>
                            <img src={i4} alt='' />
                        </div>
                        <div className='about__investor'>
                            <img src={i5} alt='' />
                        </div>
                        <div className='about__investor'>
                        </div>
                    </div>
                </div>
                <div className='about__culture' id='culture'>
                    <h2>Love Where You Work</h2>
                    <p>We believe inventive product design can help people enjoy the things they love like never before, and we’re always on the lookout for team members who feel the same way.
                        If you’re passionate about our mission and great at what you do, we want to meet you. Explore your career opportunities at Dnam.
                    </p>
                </div>
                <div className='about__contact' id='contact'>
                    <h2>Contact Us</h2>
                    <div className='about__items'>
                        <div className='about__item'>
                            <h4>Media Inquiries</h4>
                            <span>press​@dnam.com</span>
                        </div>
                        <div className='about__item'>
                            <h4>Partnership Inquiries</h4>
                            <span>partnerships​@dnam.com</span>
                        </div>
                        <div className='about__item'>
                            <h4>Become a Vendor</h4>
                            <span>vendor​@dnam.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About