import React from 'react'
import skmishra from "./skmishra.jpg"
import Header from './Header'
import Menu from './Menu'
import Part3 from './Part3'
import Part4 from './Part4'

function Management() {
    return (
        <><Header />
            <Menu />
            <div className="containar">
                <div className="row" >
                <div className="col-lg-5 col-md-6 col-sm-12"  ><img src={skmishra} alt="" style={{ height: "300px" ,marginLeft:"150px" ,marginTop:"120px"}}/> <h4 style={{ marginLeft: "150px" }}>SK Mishra</h4>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 text-center" ><h1>Manegement Message</h1><p>We choose to serve the society under the dynamic leadership of eminent people & scholars In today’s world, we need people who are seeker of knowledge and wisdom. Today children need to start off early to match steps with others in society but they need pace for their development. The teachers and parents face the challenge of teaching their children to the needs of the day. It is possible by learning to know; learning to do; learning to be authentic and learning to live together.
                        We at Rose mary group provides the best of the modern and the traditional education to prepare every child to become a genuine world citizen. We aim to inculcate ethical and moral values in a child.
                        It is my firm belief that a child’s mind is a universe full of possibilities. It needs the right environment to develop to its maximum potential at school and at home. As the saying goes, “A Child’s mind is like a dry sponge, ready to soak; all you need to do is to take it to the water.”
                        All the students, alumni, wards and well-wishers are welcome to not just browse through what we post on this site but hope that they shall be a part of this pursuit, intellectually and technically, to the best of their knowledge.</p></div>
                </div>
            </div>
            <Part3 />
            <Part4 />
        </>
    )
}

export default Management