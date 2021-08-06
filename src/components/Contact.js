//
import React from "react";
//
// Render the contact section
//
function Contact() {
  return (
    <div class="container">
      <form id="contact" action="" method="post">
        <h1 className="display-6">Contact</h1>
        <fieldset>
          <input
            placeholder="Your name"
            type="text"
            tabindex="1"
            required
            autofocus
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="Your Email Address"
            type="email"
            tabindex="2"
            required
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="Your Phone Number"
            type="tel"
            tabindex="3"
            required
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="Your Web Site starts with http://"
            type="url"
            tabindex="4"
            required
          />
        </fieldset>
        <fieldset>
          <textarea
            placeholder="Type your Message Here...."
            tabindex="5"
            required
          ></textarea>
        </fieldset>
        <fieldset>
          <button
            name="submit"
            type="submit"
            id="contact-submit"
            data-submit="...Sending"
          >
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default Contact;
