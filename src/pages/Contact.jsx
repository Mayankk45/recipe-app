import React from 'react'

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="container">
                <h1 className="title">Contact Us</h1>
                <p className="subtitle">
                    Have questions, suggestions, or just want to say hello? We'd love to hear from you!
                </p>

                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" placeholder="Enter your name" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" placeholder="Enter your email" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Your Message</label>
                        <textarea id="message" rows="5" placeholder="Write your message..." required></textarea>
                    </div>

                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact