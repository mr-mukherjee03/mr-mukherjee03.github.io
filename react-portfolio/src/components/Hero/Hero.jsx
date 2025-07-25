import React from "react";
import { getImageUrl } from "../../utils.js";
import styles from "./Hero.module.css";
import CodeEditorSimulator  from "./CodeEditorSimulator.jsx";
    
export const Hero = () => {
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1><CodeEditorSimulator /></h1>
            <p className={styles.description}>I'm a ML enthusiast with five years of experience! Reach out me!
            </p>
            
            <a className={styles.contactBtn} href="mailto:mukherjee.inbox@gmail.com">Contact Me</a>
        </div>
        <img className={styles.profileImg} src={getImageUrl("hero/profile.png")} alt="Hero Image of me" />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
    );
}