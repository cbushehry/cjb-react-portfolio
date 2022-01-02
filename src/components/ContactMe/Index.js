import { useState } from "react"; 
import Image from "../../assets/images/contact-me.png";

const ContactMe = () => {
    const [formState, setFormState] = useState({
      name: "",
      email: "",
      message: "",
    });
    const [formMessage, setFormMessage] = useState("Please Fill Out Form");
  
    const handleBlur = (e) => {
      if (!e.target.value.length) {
        setFormMessage(`${e.target.name} is required`);
      } else {
        setFormMessage("");
      }
  
      //Validate if email is valid
      if (e.target.name === "email") {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)) {
          setFormMessage("Please enter a valid email");
        } else {
          setFormMessage("");
        }
      }
  
      if (!formMessage) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!formMessage) {
        console.log(formState);
      } else {
        console.log(formMessage);
      }
    };
  
    return (
      <section>
        <div className="page-body">
          <img src={Image} alt="Contact Me" className="img-body" />
          <h1>Contact Me</h1>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-input">
              <input
                type="text"
                placeholder="Name"
                name="name"
                onBlur={handleBlur}
              />
            </div>
            <div className="form-input">
              <input
                type="email"
                placeholder="Email"
                name="email"
                onBlur={handleBlur}
              />
            </div>
            <div className="form-input">
              <textarea
                placeholder="Message"
                name="message"
                onBlur={handleBlur}
              />
            </div>
            <div className="form-button">
              <button type="submit" className="button">
                Send
              </button>
            </div>
            <div className="form-message">{formMessage}</div>
          </form>
        </div>
      </section>
    );
  };
  
  export default ContactMe;