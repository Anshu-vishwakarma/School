import React from 'react'
import Header from './Header'
import Menu from './Menu'
import Part3 from './Part3'
import Part4 from './Part4'
import star from './star.gif'

function Facilities() {
    return (
        <>
            <Header />
            <Menu />

            <div className="containar" >
                <div className="row" style={{ height: "20px", marginLeft: "100px", marginRight: "100px", paddingTop: "15px", }}>
                    <div className="col bg-primary" style={{ height: "60px", paddingTop: "5px" }}> <h1> <b>Facilities</b></h1></div>
                </div>
                <div className="row" style={{marginTop:"130px",marginRight:"100px",marginLeft:"100px"}}> <div className="col">
                    <h3 style={{ display: "inline-block" }}>Lab</h3> <img src={star} alt="" /> <br />
                    The facilities offered to the students include will equipped. science laboratories well stacked.<br />

                    <h3 style={{ display: "inline-block" }}>Yoga</h3><img src={star} alt="" /><br />
                    Yoga musicroom and the meditation room a spacious multi purpose hall and facility of smart classes and we teach the students with the help of projects and computer.
                    <br />
                    <h3 style={{ display: "inline-block" }}>Science Lab</h3><img src={star} alt="" /><br />
                    The school has well equipped Biology, Physics and Chemistry labs where regular practicals are held.<br />


                    <h3 style={{ display: "inline-block" }}>Biology Lab</h3><img src={star} alt="" /><br />
                    Practical work plays an important role in understanding the basic principles of science. Biology is an interesting field of science where scientific facts are better understood by performing practicals in a systematic way. Biology laboratory of Rose Mary Hr. Sec. School is well furnished & is catering to the doing & learning part of science. Children are testing and verifying the scientific facts wonderfully well in the lab. Our Bio Lab is well equipped with Equipments Chemicals As instructed by the CBSE every care is taken that each experiment is conducted in a well structured way. (As prescribed by CBSE) Objectives Materials required Basic concepts Procedure Observations Calculations Inference Precautions Investigatory projects are done exceptionally well under the full guidance & scrutiny the Faculty members.
                    <br />
                    <h3 style={{ display: "inline-block" }}>Chemistry Lab</h3><img src={star} alt="" /><br />
                    The chemistry lab in Rose Mary Hr. Sec. School is well equipped with chemicals & glass wares. We use demonstration Technique which is capable of showing each & every aspect of chemistry practical. The proper guidance of the concern teacher of availability of all the materials to the student makes it easier & comfortable for the students. Our lab can occupy 40 students at time. The handling of apparatus & chemical improve the presition and analytical power of students. By using all the apparatus students develop a confidence in them and they can understand the subject well.
                    <br />
                    <h3 style={{ display: "inline-block" }}>Physics Lab</h3><img src={star} alt="" /><br />
                    Physics is such an interesting subject that every student has his own way of talking about. Many of the ideas in Physics are lost sight of, because many of them concentrate mostly on the theoretical aspects of the subject. Physics laboratory of Rose Mary Hr. Sec. School is well equipped according to the CBSE norms. The lab can easily accommodate 60 students at a time during the conduction of practical. The practicals that are conducted in the lab are exactly in accordance with the CBSE curriculum. During the conduction of the practical. We take utmost care in the following areas, i.e. - Student must learn to ask questions Why, How and How do we know it. As to give answers to these practicals are conducted.
                    <br />
                    <h3 style={{ display: "inline-block" }}>Computer Lab</h3><img src={star} alt="" /><br />
                    We have two full fledged computer labs one for primary and the other for higher section with Internet facility where every student in the assigned period gets a computer to work with.
                    <br />
                    <h3 style={{ display: "inline-block" }}>Indoor / Out Door Sports</h3><img src={star} alt="" /><br />
                    Extensive and well maintained play fields of football and cricket and courts for volleyball, basketball, kabaddl, throwball and badminton me available to students. Indoor facilities of chess, caroms, table tennis etc. are also available.
                </div></div>



            </div>
            <div>
                <Part3 />
                <Part4 />
            </div>




        </>
    )
}

export default Facilities
