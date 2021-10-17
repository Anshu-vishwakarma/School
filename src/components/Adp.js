import React from 'react'
import ad_upper from "./ad_upper.jpg"
import Header from './Header'
import Menu from './Menu'
import Part3 from './Part3'
import Part4 from './Part4'
function Adp() {
    return (
        <><Header/>
        <Menu/>
            <div className="containar">
                <div className="row">
                    <div className="col"><img src={ad_upper} alt="" style={{ height: "200px",width:"100%" }}  /> 
                   </div>
                   
                </div>
                <div className="row">
                    <div className="col ">
                 <h2  style={{textAlign:"center"}}> Rose Mary Hr. Sec. School: </h2>  <h5  style={{marginLeft:"200px"}}>Registration </h5>

<p   style={{marginLeft:"100px",marginRight:"100px"}}>
Parents are required to submit a non-refundable application form to the school.
Registered parents are invited to visit the campus to understand the Goenkan culture & ethos.
The mere act of Registration will not constitute a guaranteed admission, which is subject to interaction with Principal, Aptitude test (grade V & above) and the school rule book


Submission of Documents
Following Registration, duly filled Application form needs to be submitted along with the documents listed below within 5 days of the registration date.
<br />
★ Attested copy of Birth certificate <br />

★ Copy of Address proof <br />

★ TC from previous school (class II onwards) <br />

★ 6 passport size photos of the child and 1 each of the parents <br />

★ Previous session report card for Nursery to class I or previous three session report cards (class II onwards), whichever applies. <br />

★ Vaccination card <br />

★ Blood group card or report <br />

★ Copy of Aadhar card <br />

★ Copy of Samagra ID <br />

★ Cheque Photocopy

</p>

                    </div>
                </div>
            </div>
            <Part3/>
            <Part4/>
        </>
    )
}

export default Adp