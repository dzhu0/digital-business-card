import React from "react";
import picture from "../images/picture.png";
import email from "../images/email.png";
import linkedin from "../images/linkedin.png";

export default function Info() {
    return (
        <div className="Info">
            <img className="picture" src={picture} />
            <h1 className="name">Laura Smith</h1>
            <p className="profession">Frontend Developer</p>
            <p className="website">laurasmith.website</p>
            <a className="email" href="#">
                <img className="logo" src={email} />
                Email
            </a>
            <a className="linkedin" href="#">
                <img className="logo" src={linkedin} />
                LinkedIn
            </a>
        </div>
    )
}
