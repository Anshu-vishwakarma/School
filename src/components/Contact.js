import React from 'react'
import Header from './Header'
import Menu from './Menu'
import Part3 from './Part3'
import Part4 from './Part4'
function Contact() {
    return (
        <>

            <Header />
            <Menu />
            <div className="containar">
                <div className="row-fluid" style={{ width: "100%" }}>
                    <div className="col" style={{ height: "25vh", backgroundColor: "red",  paddingTop: "10vh", marginBottom: "20px" }}>
                        <h1 style={{width:"100%"}}>CONTACT</h1>
                    </div>

                </div>
            </div>
            <div className="containar">
                <div className="row">
                    <div className="col-lg-9 col-md-6 col-sm-12"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.0630421445853!2d77.41741551444693!3d23.277158912607305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c6835f699630d%3A0xf8df74e130acf711!2sRose+Mary+Hr.+Sec.+School%2C+Dwarka+Nagar!5e0!3m2!1sen!2sin!4v1540406390759" style={{ width: "100%", height: "500px", frameborder: "0", allowfullscreen: "" }}></iframe></div>
                    <div className="col-lg-3 col-md-6 col-sm-12"><b>School</b> <br />
                        Address. <br />
                        Dwarka Nagar , Nisatpura , Bhopal-462010 <br /> Phone: 0755-2740018 <br />
                        Email: <br />
                        <a href="" style={{ textDecoration: "none" }}>rosemarydwarka@gmail.com</a></div>
                </div>
            </div>
            <Part3 />
            <Part4 />
        </>
    )
}

export default Contact
