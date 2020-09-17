import React from 'react'

export default function ContactUs() {
    return (
        <div className="container-contactUs">
            <h2>Contact Us</h2>
            <div className="conainer-contact-wrap">
                <div className="contact-info">
                    <h3>Leave us a Message</h3>
                    <form className="contact-form">
                        <div className="form flname">
                            
                            <label for="firstname">First Name</label>
                            <input type="text" required size="40" placeholder="Enter your First Name"></input>
                            <label for="lastname">Last Name</label>
                            <input type="text" required size="40" placeholder="Enter your last name"></input>
                        </div>
                        <div className="form email">
                            <label for="email">Email Id</label>
                            <input type="email" size="104" placeholder="Enter your Email id"></input>
                        </div>
                        <div className="form subject">
                            <label for="subject">Subject</label>
                            <input type="text" size="104"  placeholder="Your Subject"></input>
                        </div>
                        <div class="form findus">
                            <label for="findUs">How did you find Us?</label>
                                <select name="find-us" id="find-us" >
                                <option value="friends">Friends</option>
                                <option value="Search-engine">Search Engine</option>
                                <option value="advertisement" selected>Advertisement</option>
                                <option value="others">Others</option>
                            </select>
                        </div>
                        <div className="form msg">
                            <label for="message">Your Message</label>
                            <textarea rows="10" cols="104" placeholder="Type your message here...."></textarea>
                        </div>
                        <a href="#" className="btn-proj btn-full">Send Message</a>
                    </form>
                    
                </div>
                <div className="contact-sidebar">
                    <div className="contact-address">
                        <h3>Our Address</h3>
                        <div className="add 1">411 3225 18 Avenue NW Edmonton, T6T0S8</div>
                        <div className="add 2">Phone Number:34563765</div>
                        <div className="add 3"> Email:shdfsh@sdjhf.com</div>
                        <h3>Opening Hours</h3>
                        <div className="add mon"><span className="day">Monday </span><sapn className="time">10:30 AM-10:00 PM</sapn></div>
                        <div className="add tue"><span className="day">Tuesday</span><sapn className="time">10:30 AM - 10:00 PM</sapn></div>
                        <div className="add wed"><span className="day">Wednesday</span><sapn className="time">10:30 AM - 10:00 PM</sapn></div>
                        <div className="add thu"><span className="day">Thursday</span><sapn className="time">10:30 AM - 10:00 PM</sapn></div>
                        <div className="add fri"><span className="day">Friday</span><sapn className="time">10:30 AM - 10:00 PM</sapn></div>
                        <div className="add sat"><span className="day">Saturday</span><sapn className="time">10:30 AM - 10:00 PM</sapn></div>
                        <div className="add sun"><span className="day">Sunday</span><sapn className="time">10:30 AM - 10:00 PM</sapn></div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
