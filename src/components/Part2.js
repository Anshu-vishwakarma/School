import React from 'react'
import { Carousel } from "react-bootstrap"
import genius from "./genius.gif"
import ff from "./ff.png"
import pdf from "./pdf.png"
import FollowUp from "./FollowUp"

const Part2 = () => {


 
        return (
            <>
                <div className="conatainar bg-primary" >
                    <div className="row" >
                        <div className="col-4 " style={{ height: "400px" ,paddingTop:"5vh" }}>
                            <h2 style={{ marginLeft: "130px" }}>OUR TOPPER</h2>
                            <Carousel style={{ height: "300px", width: "70%", marginLeft: "100px" }}>

                                <Carousel.Item >
                                    <img
                                        className="d-block w-100"
                                        src={ff}
                                        alt="First slide"
                                        style={{ height: "300px", width: "20%" }}
                                    />

                                </Carousel.Item>

                                <Carousel.Item >
                                    <img
                                        className="d-block w-100"
                                        src={genius}
                                        alt="Third slide"
                                        style={{ height: "300px", width: "20%" }}
                                    />


                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className="col-4 " style={{paddingTop:"5vh" }}>


                            <div class="col-xs-12">
                                <ul class="demo1" align="left" style={{ overflowY: "hidden", height: "225px" }}>

                                    <table cellpadding="4">
                                        <tbody><tr>
                                            <td align="left" valign="top"><div style={{ marginTop: "5px" }}><a style={{ textDecoration: "none" }} href="notice/user_images/180444.pdf"> <img src={pdf} alt="" style={{ width: "25px" }} /></a></div></td>

                                            <td><a style={{ textDecoration: "none" }} href="notice/user_images/180444.pdf"><div class="news-title" style={{color:"white"}}>School Facilities<br /></div>
                                                <div style={{ fontSize: "10px", paddingLeft: "10px", color: "#7a7a7a" }} >for more information please click here</div></a>


                                                <div class="news-more">02/03/2019<br />----------------</div></td>

                                        </tr>
                                        </tbody></table>
                                    <div style={{ paddingLeft: "65%", height: "30px",backgroundColor:"yellow" }}>

                                        <button><i class="fas fa-arrow-up"></i></button>
                                        <button><i class="fas fa-arrow-down"></i></button>
                                    </div>
                                </ul>


                            </div>
                        </div>

<div className="col-4" style={{paddingTop:"5vh" }}> <FollowUp/></div>

  

                
                    </div>
                </div>
            </>
            )
        
        }

        
export default Part2;