import { useState } from "react";

function Contact() {
const [formData, setFormData] = useState({
name: "",
email: "",
message: "",
});

function handleChange(event) {
const { name, value } = event.target;

setFormData({
  ...formData,
  [name]: value,
});

}

function handleSubmit(event) {
event.preventDefault();

alert("Thank you for contacting SwapSkill!");

setFormData({
  name: "",
  email: "",
  message: "",
});

}

return ( <main className="contact-page"> <section className="contact-intro"> <span className="section-label">GET IN TOUCH</span> <h1>Let's start a <span>conversation.</span></h1> <p>
Have a question or suggestion? We'd love to hear from you. </p> </section>

  <section className="contact-card">
    <div className="contact-info">
      <h2>Contact Skillora</h2>
      <p>
        Whether you have feedback or an idea to share,
        send us a message using this form.
      </p>

      <div className="contact-note">
        <h3>Have an idea?</h3>
        <p>
          Your suggestions can help make Skillora better for everyone.
        </p>
      </div>
    </div>

    <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Your Name</label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="message">Your Message</label>
      <textarea
        id="message"
        name="message"
        placeholder="How can we help?"
        value={formData.message}
        onChange={handleChange}
        required
      />

      <button type="submit">Send Message</button>
    </form>
  </section>
</main>

);
}

export default Contact;
