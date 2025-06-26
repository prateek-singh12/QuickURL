"use client"
import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react'; // optional icons

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSend = (e) => {
        e.preventDefault();
        const subject = `Contact Form Message from ${name}`;
        const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
        window.location.href = `mailto:prateeksinghpspk@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-6 py-12">
            <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-xl">
                <h1 className="text-4xl font-extrabold text-blue-800 mb-2 text-center">Contact Us</h1>
                <p className="text-center text-blue-700 mb-6">We'd love to hear from you!</p>

                <form onSubmit={handleSend} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="border border-blue-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="border border-blue-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Your Message"
                        className="border border-blue-300 p-3 rounded w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition duration-200"
                    >
                        Send Message
                    </button>
                </form>
            </div>

            
            <div className="mt-10 text-center text-blue-800">
                <p className="flex items-center justify-center gap-2">
                    <Mail className="w-5 h-5" />
                    Email: <a href="mailto:prateeksinghpspk@gmail.com" className="underline">prateeksinghpspk@gmail.com</a>
                </p>
                <p className="flex items-center justify-center gap-2 mt-2">
                    <Phone className="w-5 h-5" />
                    Phone: <a href="tel:+918528265116" className="underline">+91 8528265116</a>
                </p>
            </div>
        </div>
    );
};

export default Contact;
