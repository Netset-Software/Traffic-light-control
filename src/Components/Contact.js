import React from 'react';

const Contact = () => {
  return (
    <>
      <section className="contact_section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 mb-4">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27438.699513236297!2d76.71961416681145!3d30.722970117310027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0c79abeb01%3A0x346da2110b9f5ddb!2sMy%20Office!5e0!3m2!1sen!2sin!4v1622796804357!5m2!1sen!2sin" width="100%" height="450" title="This is a unique title" ></iframe>
            </div>
            <div className="col-md-8">
              <div>
                <h5>Contact</h5>
              </div>
              <div className="row mt-4">
                <div className="col-md-6 mb-3">
                  <input placeholder="Name" type="text" />
                </div>
                <div className="col-md-6 mb-3">
                  <input placeholder="Your Email" type="text" />
                </div>
                <div className="col-md-12 mb-3">
                  <textarea placeholder="Message" rows="5"></textarea>
                </div>
                <div className="col-md-12 send_btn">
                  <button className="btn">SEND MESSAGE</button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="info_box">
                <p>The BIG4 Health App empowers
                you and your loved ones to take
                control of your health while
                                enjoying the pleasure of life.</p>
                <hr className="bg-secondary" />
                <h6><i class="fa fa-envelope-o" aria-hidden="true"></i> info@gmail.com</h6>
                <hr className="bg-secondary" />
                <h6><i class="fa fa-phone" aria-hidden="true"></i> 000-000-0000</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
