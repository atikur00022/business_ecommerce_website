import {Link} from "react-router-dom";
import logo from "../assets/images/plainb-logo.svg";

const Footer = () => {
    return (
        <section className="footer bg-light pt-5">
            <div className="container">
                <div className="row">
                    <div className="box1 col-12 col-lg-3">
                        <div className="image mb-3">
                            <Link to='/'>
                                <img className="w-50 img-fluid" src={logo} alt="PlainB Logo"/>
                            </Link>
                        </div>
                        <div className="whatsapp mb-3">
                            <h5 className="mb-2">Whatsapp:</h5>
                            <p>+8801956394866</p>
                            <p>+8801656397845</p>
                        </div>
                        <div className="email d-flex">
                            <span className="me-2"><i className="bi bi-envelope"></i></span>
                            <p>plainfullecommerce@gmail.com</p>
                        </div>
                    </div>
                    <div className="box2 col-12 col-lg-2">
                        <h4>Categories</h4>
                        <ul className="p-0 list-unstyled">
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/grocery'>Grocery</Link>
                            </li>
                            <li>
                                <Link to='/clothes'>Clothes</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="box3 col-12 col-lg-2">
                        <h4>Legals</h4>
                        <p>
                            <Link to='/about'>About</Link>
                        </p>
                        <p>
                            <Link to='/refund'>Refund Policy</Link>
                        </p>
                        <p>
                            <Link to='/term'>Terms</Link>
                        </p>
                    </div>
                    <div className="box4 col-12 col-lg-2">
                        <h4>Information</h4>
                        <p>
                            <Link to='/buy'>How to buy</Link>
                        </p>
                        <p>
                            <Link to='/contact'>Contact us</Link>
                        </p>
                        <p>
                            <Link to='/complain'>Complain</Link>
                        </p>
                    </div>
                    <div className="box5 col-12 col-lg-3">
                        <h4>Contact Us</h4>
                        <div className="email d-flex">
                            <span className="me-2"><i className="bi bi-envelope"></i></span>
                            <p>plainfullecommerce@gmail.com</p>
                        </div>
                        <p>014587895478</p>
                        <p>Bajitpur Bazar, Bajitpur, Kishoregonj.</p>
                        <p>Customer Care Time</p>
                        <p className="time">7.00AM - 9.00PM</p>
                    </div>
                </div>
            </div>
            <div className="right bg-dark py-3">
                <p className="text-center text-white">All right reserved by PlainB ecommerce.</p>
            </div>
        </section>
    );
};

export default Footer;