import React from 'react'
import Header from './Header'
import Manu from './Manu'
import Menu from './Menu'
import Part3 from './Part3'
import Part4 from './Part4'
import principle from "./principle.png"

function Principal() {
    return (
        <>
            <Header />
            <Menu />
            <div className="containar">
                <div className="row">
                    <div className="col-lg-5 col-md-6 col-sm-12"><img src={principle} alt="" style={{ height: "300px", marginLeft: "150px", marginTop: "120px" }} /> <h4 style={{ marginLeft: "150px" }}>Mrs. Meenakshi Bhadoria</h4>
                    </div>
                    <div className="col-lg-7 col-md-6 col-sm-12 text-center" ><h1>Principal Message</h1><p >
                        “ Life is journey ,the Path We take ,what fact’s govern us and what we look forward is up to us. It has indeed been a long journey.School is a abode of learning where children from different works of life come together to get education. Education is not learning by rote and then repeating it in the examination.For all parents education of their children is of greatest importance and selecting the right school is not an easy task Dear Parent’s, Rose Mary Hr. Sec. School Prime Concern is our Student’s career and we belive in Building Trust and hope by providing best Education. Our School continues to uphold traditional values while adopting contempory infrastructure and pedagogies. Our approach is student centred and goes beyond text books, Class rooms and boundaries. We have live multimedia presentation to facilitate deeper understanding of concepts. We inculcate in children, a respect for Indian culture. At the core of the schools educational philosophy, modern education and cultural heritage are complimentary and help the students to become better citizens. Our dedicated staff follows the principal of " explore, excercise and achieve" in their quest for excellence.Through out the year our effort has been to to educate, empower and enlighten. It is because of their selfless and relentless efforts that the school has reached majestic heights. We are very grateful to our staff ,co-worker and parents for their sincere involvement in the School. Without their single-minded co-operation between the school and home we cannot offer the holistic education towards which we are striving. “Don’t train a child to learn by force or harshness, but direct them by love and care “ Thank You</p></div>
                </div>
            </div>
            <Part3 />
            <Part4 />
            <Manu/>
        </>
    )
}

export default Principal
