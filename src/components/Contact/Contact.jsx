import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css"


export const Contact=()=>{

    return( 
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
            <p>(+91) 74393 91784</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/gmail48.png")} alt="email icon" />
                <a href="mailto:mukherjee.inbox@gmail.com">mukherjee.inbox@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedin48.png")} alt="LinkedIn icon" />
                <a href="https://www.linkedin.com/in/smukh03">linkedin/smukh03</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/github48.png")} alt="" />
                <a href="https://github.com/mr-mukherjee03">github.com/mr-mukherjee03</a>
            </li>
        </ul>
    </footer>
    );


};