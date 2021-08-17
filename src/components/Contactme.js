import React from "react";
import "./components css/contactme.css";

const Contactme = () => {
  return (
    <>
      <main className="contact-me">
        <div>
          <h3>If Not Now, When? Let’s Work Together!</h3>

          <p>
            Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut labore
            et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus
            commodo viverra.
          </p>
        </div>
        <div className="contact-container">
          <form className="contact-1">
            <fieldset>
              <input
                type="text"
                name="name"
                placeholder="Full name"
                required
                // value={toSend.from_name}
              />
            </fieldset>

            <fieldset>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
              />
            </fieldset>

            <fieldset>
              <textarea
                type="text"
                name="message"
                required
                placeholder="Type your message here...."
              />
            </fieldset>
            <button
              name="submit"
              type="submit"
              className="contact-submit"
              data-submit="...Sending"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Contactme;
