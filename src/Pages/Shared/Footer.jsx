import React from 'react';
import logo from '../../assets/Logo/Footer_logo.png'

const Footer = () => {
    return (
        <footer>
            <div className="footer bg-base-200 text-base-content p-10">
                <aside>
                    <img src={logo} alt="MediEase Logo" />
                    <p>
                        MediEase Industries Ltd.
                        <br />
                        Your trusted partner for healthcare products.
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Shop</h6>
                    <a className="link link-hover">Browse Medicines</a>
                    <a className="link link-hover">Categories</a>
                    <a className="link link-hover">Top Sellers</a>
                    <a className="link link-hover">Special Offers</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Contact Us</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Press Releases</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Customer Support</h6>
                    <a className="link link-hover">Help Center</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Return & Refund Policy</a>
                    <a className="link link-hover">FAQs</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms & Conditions</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Cookie Policy</a>
                    <a className="link link-hover">Licenses</a>
                </nav>
            </div>
            <div className="footer footer-center bg-base-300 text-base-content p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All rights reserved by MediEase Industries Ltd</p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;
