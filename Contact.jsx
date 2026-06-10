import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main style={{ padding: "20px", textAlign: "center" }}>
      <h1>📞 Contact Us</h1>

      <p>Email: cravecorner@gmail.com</p>
      <p>Phone: +91 9876543210</p>
      <p>Location: Andhra Pradesh, India</p>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            required
          />
        </div>

        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            rows="5"
            required
            style={{
              width: "100%",
              maxWidth: "400px",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              resize: "vertical",
              marginTop: "10px",
            }}
          />
        </div>

        <button type="submit">Send Message</button>
      </form>

      {submitted && (
        <p style={{ marginTop: "16px", color: "#1a7f2d" }}>
          Thanks! Your message was sent successfully.
        </p>
      )}
    </main>
  );
}

export default Contact;