import React from 'react'
import logo from "./logo.png"
import tc from "./tc.png"
import photo from "./photo.png"
import {Button} from 'react-bootstrap'
const Part1 = () => {
    return (
        <>
            <div className="containar">
                <div className="row">
                    <div className="col-lg-6 col-sm-12 " style={{height:"300px"}}>
                        <img src={logo} alt="pic" style={{height:"190px" ,marginTop:"9vh" ,marginLeft:"100px"}} />
                    </div>
                    <div className="col-lg-6 col-sm-12 "  style={{height:"300px",marginTop:"9vh"}}>
                        <h2>School Message</h2>
                        <p>We believe that every child is Unique and has a different learning approach. We, at Rose Mary, observe the talents and qualities and focus on them for educating the child. We facilitate the students to become spiritually deep rooted, morally upright & emotionally mature. We equip students with a sound value system to live as good human beings & impart substantial knowledge and skill to achieve excellence in diverse fields.</p>
                    </div>
                </div>
            </div>


            <div className="containar bg-info">
                <div className="row" style={{justifyContent:"center",textAlign:"center"}}>
                    <div className="row" style={{height:"25vh" ,display:"inline-block"}}>
                        <span>
                        <Button  type="button"  variant="info" style={{height:"" ,display:"inline-block",margin:"25px 15px"  ,border:"3px solid white"}}>
                            
                            <img src={tc} alt="" /> <br />  Primary</Button>{' '}
                        </span>
                       <span>  <Button type="button"  variant="info"  style={{height:"" ,display:"inline-block",margin:"25px 15px" ,border:"3px solid white"}}>
                           
                           
                         <img src={photo} alt="" /> <br /> Secondary</Button>{' '}</span>
                   

                    </div>
                </div>
            </div>






            
        </>
    )
}

export default Part1
