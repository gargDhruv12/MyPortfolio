import React from 'react'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    // service_jogpsdi
    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await emailjs.send(
                'service_jogpsdi',
                'template_e71blyi',
                {
                    from_name: form.name,
                    to_name: 'Dhruv Garg',
                    from_email: form.email,
                    to_email: 'dhruvgarg729729@gmail.com',
                    message: form.message,
                  },
                  'Aylp1P2O1V98rN3-K'
            )
            setLoading(false);
            alert("Thank you for your message 😊 I will get back to you as soon as possible.");
            setForm({
                name: '',
                email: '',
                message: '',
              });
        } catch (error) {
            setLoading(false);
            console.log(error);
            alert("Something went wrong! Please try again!");
        }
        
    }

    return (
        <section className="c-space my-20">
            <div className="relative flex items-center justify-center flex-col min-h-screen">
                {/* Ensure the background image covers the entire container */}
                <img
                    src="/assets/terminal.png"
                    alt="terminal background"
                    className="absolute inset-0 h-full w-full object-cover z-0"
                />

                {/* Content container */}
                <div className="contact-container relative z-10 w-full max-w-3xl p-6 md:p-8 bg-opacity-80">
                    <h3 className="head-text mt-10 text-center text-white">Let's talk</h3>
                    <p className="text-lg text-white-600 mt-3 text-center">
                        Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to life, I’m here to help.
                    </p>
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="mt-12 flex flex-col space-y-6 w-full"
                    >
                        <label className="space-y-2">
                            <span className="field-label block text-white">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input w-full px-4 py-2 rounded-lg"
                                placeholder="John Doe"
                            />
                        </label>
                        <label className="space-y-2">
                            <span className="field-label block text-white">Email</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input w-full px-4 py-2 rounded-lg"
                                placeholder="johndoe@gmail.com"
                            />
                        </label>
                        <label className="space-y-2">
                            <span className="field-label block text-white">Your message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="field-input w-full px-4 py-2 rounded-lg resize-none"
                                placeholder="Hi, I'm interested in ....."
                            />
                        </label>
                        {/* Full width button */}
                        <div className="flex justify-center w-full mt-6">
                            <button
                                className="field-btn w-full px-6 py-3 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300"
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? "Sending..." : "Send Message"}
                                <img
                                    src="/assets/arrow-up.png"
                                    alt="arrow-up"
                                    className="field-btn_arrow inline-block ml-2 w-4 h-4"
                                />
                            </button>
                        </div>
                    </form>
                    {/* Increased bottom margin */}
                    <div className="mt-10"></div>
                </div>
            </div>
        </section>


        //         <section className='c-space my-20'>
        //     <div className='relative min-h-screen flex items-center justify-center flex-col'>

        //         <div className='contact-container max-w-screen-md w-full p-6 bg-white bg-opacity-80 rounded-lg shadow-lg'>
        //             <h3 className='head-text text-3xl font-bold text-center ' style={{ color: 'black' }}>Let's talk</h3>
        //             <p className="text-lg text-gray-700 mt-3 text-center">
        //                 Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to life, I’m here to help.
        //             </p>
        //             <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>
        //                 <label className='space-y-3'>
        //                     <span className='field-label text-gray-600' style={{ color: 'black' }}>Full Name</span>
        //                     <input
        //                         type="text"
        //                         name='name'
        //                         value={form.name}
        //                         onChange={handleChange}
        //                         required
        //                         className='field-input w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500' 
        //                         placeholder='John Doe'
        //                     />
        //                 </label>
        //                 <label className='space-y-3'>
        //                     <span className='field-label text-gray-600' style={{ color: 'black' }}>Email</span>
        //                     <input
        //                         type="email"
        //                         name='email'
        //                         value={form.email}
        //                         onChange={handleChange}
        //                         required
        //                         className='field-input w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
        //                         placeholder='johndoe@gmail.com'
        //                     />
        //                 </label>
        //                 <label className='space-y-3'>
        //                     <span className='field-label text-gray-600' style={{ color: 'black' }}>Your message</span>
        //                     <textarea
        //                         name='message'
        //                         value={form.message}
        //                         onChange={handleChange}
        //                         required
        //                         rows={5}
        //                         className='field-input w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
        //                         placeholder="Hi, I'm interested in ....."
        //                     />
        //                 </label>
        //                 <button
        //                     className='field-btn bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400'
        //                     type='submit'
        //                     disabled={loading}
        //                 >
        //                     {loading ? 'Sending...' : 'Send Message'}
        //                     <img
        //                         src="/assets/arrow-up.png"
        //                         alt="arrow-up"
        //                         className='field-btn_arrow inline-block ml-2 w-4 h-4'
        //                     />
        //                 </button>
        //             </form>
        //         </div>
        //     </div>
        // </section>


    )
}

export default Contact
