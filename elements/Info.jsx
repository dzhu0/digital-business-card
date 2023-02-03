import React from "react";

export default function Info() {
    return (
        <div className="Info">
            <img className="picture" src="../images/picture.png" />
            <h1 className="name">Laura Smith</h1>
            <p className="profession">Frontend Developer</p>
            <p className="website">laurasmith.website</p>
            <a className="email" href="#">
                <img className="logo" src="../images/email.png" />
                Email
            </a>
            <a className="linkedin" href="#">
                <img className="logo" src="../images/linkedin.png" />
                LinkedIn
            </a>
        </div>
    )
}
