import Link from 'next/link';
import React from 'react';
const Footer = () => {
  return (
    <>
      <div>
        <div className="container-fluid p-4 border-top bg-light">
          <div className="row">
            <div className="col-5">
              <Link href='/'>
                <div className='footer-image-div'>
                <img className="brand-logo-light footer-logo" src="/logo.png" alt="" />
                </div>
              </Link>
              <p className='text-muted p-2'>We are an award-winning creative agency, dedicated to the best result in web design, promotion, business consulting, and marketing.</p>
              <p className="rights"><span>©  </span><span className="copyright-year">2018</span><span> </span><span>Waves</span><span>. </span><span>All Rights Reserved.</span></p>
            </div>
            <div className="col-2">
              <h5>Contacts</h5>
              <dl className="contact-list">
                <dt>Address:</dt>
                <dd>798 South Park Avenue, Jaipur, Raj</dd>
              </dl>
              <dl className="contact-list">
                <dt>email:</dt>
                <dd><Link href='/' className='text-dark text-decoration-none'>dkstudioin@gmail.com</Link></dd>
              </dl>
              <dl className="contact-list">
                <dt>phones:</dt>
                <dd><span >03470047605</span>
                </dd>
              </dl>
            </div>
            <div className="col-2">
              <ul className="" style={{ border: "none" }}>
                <h5>Links</h5>
                <li className='list-group-item' style={{ border: "none" }}><Link className='nav-link p-1' href="#">About</Link></li>
                <li className='list-group-item' style={{ border: "none" }}><Link className='nav-link p-1' href="#">Projects</Link></li>
                <li className='list-group-item' style={{ border: "none" }}><Link className='nav-link p-1' href="#">Blog</Link></li>
                <li className='list-group-item' style={{ border: "none" }}><Link className='nav-link p-1' href="#">Contacts</Link></li>
                <li className='list-group-item' style={{ border: "none" }}><Link className='nav-link p-1' href="#">Pricing</Link></li>
              </ul>
            </div>
            <div className="col-3">
              <h2>Send FeedBack</h2>
              <div >
              <from>
                <input placeholder='email' type='email' className='form-control' required /><br/>
                <textarea placeholder='Message' type="text" className='form-control' required /><br/>
                <button type='submit' className='btn btn-dark text-light fw-semibold'>Send</button>
              </from>
              </div>
            </div>
          </div>
          <div className='row border-top bg-light p-0'>
            <ul className='nav justify-content-center p-0'>
              <li className='nav-item'>
                <Link href='/' className='nav-link'>fa</Link>
              </li>
              <li className='nav-item'>
                <Link href='/' className='nav-link'>fa</Link>
              </li>
              <li className='nav-item'>
                <Link href='/' className='nav-link'>fa</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
