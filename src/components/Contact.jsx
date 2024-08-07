import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from '@emailjs/browser';

import { textVariant } from "../utils/motion";

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {        
        e.preventDefault();

        emailjs
            .sendForm('contact_service', 'template_mn76i8o', form.current, {
                publicKey: '',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <form ref={form} name="contact" onSubmit={sendEmail} className='mt-12 gap-4 flex flex-col'>
            <span className='text-white font-medium mt-3'>Name</span>
            <input name='from_name' className='bg-tertiary p-4 text-white border font-medium' placeholder="Your Name"></input>
            <span className='text-white font-medium mt-3'>Email</span>
            <input name='reply_to' className='bg-tertiary p-4 text-white border font-medium' placeholder="YourName123@email.com"></input>
            <span className='text-white font-medium mt-3'>Message</span>
            <textarea name='message' className='bg-tertiary p-4 text-white border font-medium' rows={10} placeholder="What would you like to say?"></textarea>
            <input type="submit" value="Submit"></input>
        </form>
    );
}

const Contact = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start("show");
        }
    }, [controls, inView]);

    return (
        <div className='text-center md:text-left md:px-20 lg:px-40'>
            <motion.div ref={ref} animate={controls} initial="hidden" variants={textVariant()}>
                <h2 className="text-white font-bold md:text-[80px] sm:text-[50px] text-[40px] text-center">
                    Contact
                </h2>
            </motion.div>

            <ContactForm />
        </div>
    );
};

export default Contact;