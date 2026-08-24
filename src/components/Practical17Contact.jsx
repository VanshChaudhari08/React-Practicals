function Practical17Contact(){
    return(
        <div className="contact">
      <h1>Contact Us</h1>

      <form className="contact-form" onSubmit="">

        <label>Full Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value=""
          onChange=""
        />
         <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value=""
          onChange=""
        />

         <label>Mobile Number</label>
        <input
          type="text"
          name="mobile"
          placeholder="Enter your mobile number"
          value=""
          onChange=""
        />
         <label>Subject</label>
        <input
          type="text"
          name="subject"
          placeholder="Enter subject"
          value=""
          onChange=""
        />
         <label>Message</label>
        <textarea
          rows="5"
          name="message"
          placeholder="Enter your message"
          value=""
          onChange=""
        ></textarea>
         <button type="submit" className="btn">
          Submit
        </button>
        </form>
        </div>
    );
}
export default Practical17Contact;
