import React from 'react'
import './abd.css'
import gm from '../../images/ground.jpg'
function Resume() {
    return (
        <div className='resume/container'>
            <images className='ground' src={gm}/>
            <h1>RESUME</h1><br />
            <h2>About</h2>
            <h2>Name:Suhel</h2><br />
            <p><strong>contact:</strong> 8970301022</p><br />
            <p><strong>gmail:</strong> suhel.22cs409@sode-edu.in</p>
            <p>Visit my LinkedIn profile:</p>
            <a href="https://www.linkedin.com/in/Suhel Khan" target="_blank">Suhel Khan</a>
            <p>Visit:</p>
            <a href="https://www.youtube.com/shorts/etW7EQNqQ30?feature=share" target="_blank">inroduction</a>
            <h2>Education</h2>
            <p><strong>School:</strong> national junior college</p>
            <p><strong>Diploma:</strong> Pes poletechnic</p>
            <p><strong>Current:</strong> SMVITM</p>
            <h2>Skills</h2>
            <li>python</li>
            <li>java</li>
            <li>html</li>
            <h2>achievements</h2>
            <li>taluk level kho kho player.</li>
            <li>taluk level Kabaddi player.</li>
            <li>Supporting RCB from past 16 years.</li>
        </div>
    );
}

export default Resume