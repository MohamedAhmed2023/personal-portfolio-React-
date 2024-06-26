import React from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import "./ContactUs.css";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ContactUs() {
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_z019xvl', 'template_4aq33pm', e.target, 'U92TN4oBo-MyFhWD_')
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Your message has been sent successfully.',
                });
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong! Please try again later.',
                });
            });
    };

    return (
        <div data-aos="zoom-in" id="contactSection">
            <div className="form-container">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input required name="to_name" id="name" type="text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input required name="from_name" id="email" type="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea required cols="50" rows="10" id="message" name="message"></textarea>
                    </div>
                    <button type="submit" className="form-submit-btn">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default ContactUs;
