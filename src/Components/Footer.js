import React from 'react'
import {FaFacebookF,FaTwitter,FaInstagram} from 'react-icons/fa';
import {TiSocialGooglePlus} from 'react-icons/ti'

export default function Footer() {
    return (
        <footer>
            <div class="row">
                <div class="footer-left">
                    <ul class="footer-nav">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">ios App</a></li>
                        <li><a href="#">Android App</a></li>
                    </ul>
                </div>
                <div class="footer-right">
                    <ul class="social-links">
                        <li><a href="#"><FaFacebookF className="facebook"/></a></li>
                        <li><a href="#"><FaTwitter className="twitter"/></a></li>
                        <li><a href="#"><TiSocialGooglePlus className="googlePlus"/></a></li>
                        <li><a href="#"><FaInstagram className="instagram"/></a></li>
                    </ul>
                </div>
            </div>
            <div class="copyright">
                <p>Copyright &copy 2020 by Punjabi Tarka. All rights reserved.</p>
            </div>
        </footer>
    )
}
