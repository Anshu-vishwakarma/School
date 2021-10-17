import React from 'react'
import director from "./director.jpg"
import Header from './Header'
import Menu from './Menu'
import Part3 from './Part3'
import Part4 from './Part4'
function Director() {
    return (
        <><Header/>
        <Menu/>
            <div className="containar">
                <div className="row">
                    <div className="col-lg-5 col-md-6 col-sm-12"><img src={director} alt="" style={{ height: "300px" ,marginLeft:"150px" ,marginTop:"120px"}}  /> <h4 style={{ height: "300px" ,marginLeft:"150px"}}>Mr.Devendra Shingh</h4>
                   </div>
                    <div className="col-lg-7 col-md-6 col-sm-12 text-center" ><h1>Director Message</h1><p>Dear Parent & Students, It gives me great pleasure to welcome you to Rose mary School. The school is committed to inculcating in all our students; strong ethical valued of integrity, respect and discipline as well as clarity in thought and decision-making ability, as a life-long process. In order to achieve all this, We follow a rigorous programme that is based upon the best educational practices, highly progressive and recognized world-wide; and one that creates conditions for students to maximize their potential at an internationally competitive level. Our state-of-the-art infrastructure, coupled with highly qualified and well-trained teachers, ensures that the students at Rose Mary should be able to gain an enriching experience. Furthermore, it has been one of my quests in life to make high quality education available; accessible through the latest educational technology. The mission of the school is to develop responsible global citizens and leaders through academic excellence, We will be the foundation for a new generation of leaders and innovators, who will continue to pave the way for a better and brighter future for our world. The greatest strength of Rose Mary is the high quality programmes and transparency in its system. We are fortunate to have a school community which includes talented teachers and supportive parents who work together to make Rose Mary , an ideal place for our motivated students to learn and grow. We are always open to new ideas, inquiries and feedback, from all. Over the past 26 years, Rose Mary has lived up to its mission statement and established itself as one of the top educational institutions for students and parents in Bhopal. I welcome you to be a part of Rose Mary family!</p></div>
                </div>
            </div>
            <Part3/>
            <Part4/>
        </>
    )
}

export default Director
