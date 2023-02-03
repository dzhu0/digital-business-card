import React from "react";
import twitter from "../images/twitter.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import github from "../images/github.png";

export default function Footer() {
    return (
        <div className="Footer">
            <a href="#">
                <img src={twitter} />
            </a>
            <a href="#">
                <img src={facebook} />
            </a>
            <a href="#">
                <img src={instagram} />
            </a>
            <a href="#">
                <img src={github} />
            </a>
        </div>
    )
}
