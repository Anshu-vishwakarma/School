import React from 'react'
import Header from './Header'
import Menu from './Menu'
import Part3 from './Part3'
import Part4 from './Part4'

function About() {
    return (
        <>

        <Header/>
        <Menu/>
            <div className="containar text-center">
                <h1>About Us</h1>
                <p>
                    Rose Mary Hr. Sec. School Dwarka nagar is a Higher secondary school for both girls and boys managed by rose mary group. Rose Mary Group was established in 1991 and run by Mr Devendra Singh Ji. Our institution is recogniged by the Madhya Pradesh Board of education. Rose Mary Hr. Sec. School was founded in 2008.
                    The aim of the school is to give its students a sound moral education while devoting special attention to their spiritual, intellectual, social and physical development. Our educational institutions are open to students of all religions. We are strongly committed to the cause of justice, therefore we offer educational opportunities also to the weaker section of society. We see each student as a unique and precious gift to her family and society, a person created by God to know and love Him and to work for Him by making this world a better place to live in. Parents are the first and most important educators to their children. School education can only be built on the foundation laid by the family.
                    SPECIAL EFFORT ARE MADE AT Rose Mary Hr. Sec. School
                    To help students to become mature, reliable people of character.
                    To be clear and firm on principles and courageous in action.
                    To value and use their freedom judiciously.
                    Strive after excellence in every field.
                    To be unselfish in the service of their fellow human beings and appreciate all religions.</p>
            </div>
            <Part3/>
            <Part4/>
        </>
    )
}

export default About
