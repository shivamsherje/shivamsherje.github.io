import React from 'react'
import './Education.css'
import Fade from 'react-reveal/Fade';

const EducationCard = ({ id, institution, course, startYear, endYear }) => {

    return (

        <Fade bottom >

            <div key={id} style={{ display: 'flex', flexDirection: "row", gap: "1rem", width: "100%", height: "fit-content", marginBottom: "2rem", border: "3px solid var(--clr-primary)", borderRadius: "30px",boxSizing:"border-box",padding:"1rem", boxShadow: " rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"}}>
                <div  >
                    <h5>{startYear} - {endYear}</h5>
                    <h4>{course}</h4>
                    <h3 style={{color:"yellowgreen"}}>{institution}</h3>
                </div>
            </div>

        </Fade >


    )
}


export default EducationCard