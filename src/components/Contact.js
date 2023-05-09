const Contact = () => (
  <section id='contact' className='contact'>
    <div className='container'>
      <div className='section-title'>
        <h2>Contact</h2>
        <p>
          Please feel free to contact me if you have any questions or if you'd like to discuss a
          potential project.
        </p>
      </div>

      <div className='row' data-aos='fade-in'>
        <div className='col-lg-5 d-flex align-items-stretch'>
          <div className='info'>
            <div className='address'>
              <i className='bi bi-geo-alt'></i>
              <h4>Location:</h4>
              <p>Chennai, Tamil Nadu, India</p>
            </div>

            <div className='email'>
              <i className='bi bi-envelope'></i>
              <h4>Email:</h4>
              <p>udhayaprakasha@icloud.com</p>
            </div>

            <div className='phone'>
              <i className='bi bi-phone'></i>
              <h4>Call:</h4>
              <p>+91 99400 20612</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default Contact;
