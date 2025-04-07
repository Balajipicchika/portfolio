// import React, { useState } from "react";
// import { Form, Button, Icon, Header, Divider, Message } from "semantic-ui-react";

// const Contact = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e, { name, value }) => {
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = () => {
//     // Here you can connect to backend or send email
//     console.log(formData);
//     setSubmitted(true);
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <div>
//       <Header as="h2" style={{ color: "#ffffff", fontSize: "2.5rem", textAlign: "center" }}>
//         Contact Me
//       </Header>
//       <Divider style={{ borderColor: "orange", width: "50px", margin: "0 auto" }} />

//       <Form
//         style={{
//           maxWidth: "600px",
//           margin: "30px auto",
//           backgroundColor: "#2f2f2f",
//           padding: "2rem",
//           borderRadius: "10px",
//         }}
//         onSubmit={handleSubmit}
//       >
//         <Form.Input
//           label={<label style={{ color: "#fff" }}>Name</label>}
//           placeholder="Your Name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <Form.Input
//           label={<label style={{ color: "#fff" }}>Email</label>}
//           placeholder="you@example.com"
//           name="email"
//           type="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <Form.TextArea
//           label={<label style={{ color: "#fff" }}>Message</label>}
//           placeholder="Type your message..."
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           required
//         />
//         <Button color="orange" type="submit" fluid>
//           <Icon name="send" /> Send Message
//         </Button>

//         {submitted && (
//           <Message
//             success
//             header="Message Sent!"
//             content="Thank you for reaching out. I will get back to you soon."
//             style={{ marginTop: "1em" }}
//           />
//         )}
//       </Form>
//     </div>
//   );
// };

// export default Contact;


import React, { useState } from "react";
import { Form, Button, Icon, Header, Divider, Message } from "semantic-ui-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e, { name, value }) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
  
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (err) {
      console.error("Error:", err);
      setError(true);
    }
  };
  

  return (
    <div>
      <Header as="h2" style={{ color: "#ffffff", fontSize: "2.5rem", textAlign: "center" }}>
        Contact Me
      </Header>
      <Divider style={{ borderColor: "orange", width: "50px", margin: "0 auto" }} />

      <Form
        style={{
          maxWidth: "600px",
          margin: "30px auto",
          backgroundColor: "#2f2f2f",
          padding: "2rem",
          borderRadius: "10px",
        }}
        onSubmit={handleSubmit}
      >
        <Form.Input
          label={<label style={{ color: "#fff" }}>Name</label>}
          placeholder="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Form.Input
          label={<label style={{ color: "#fff" }}>Email</label>}
          placeholder="you@example.com"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Form.TextArea
          label={<label style={{ color: "#fff" }}>Message</label>}
          placeholder="Type your message..."
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button color="orange" type="submit" fluid>
          <Icon name="send" /> Send Message
        </Button>

        {submitted && (
          <Message
            success
            header="Message Sent!"
            content="Thank you for reaching out. I will get back to you soon."
            style={{ marginTop: "1em" }}
          />
        )}
        {error && (
          <Message
            negative
            header="Oops!"
            content="Something went wrong. Please try again later."
            style={{ marginTop: "1em" }}
          />
        )}
      </Form>
    </div>
  );
};

export default Contact;
