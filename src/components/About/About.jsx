import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css"

export const About=()=>{
    return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/dev.jpg")} alt="machine learning diagram" />
            <ul className={styles.aboutItems}>

                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/backend.png")} alt="Icon2 image" />
                    <div className={styles.aboutItemText}>
                    <h3>Backend Developer</h3>
                    <p>Built and deployed scalable Django apps with PostgreSQL, Celery, Redis, and Stripe. Experienced with async tasks, REST APIs, and production setups using Docker, Gunicorn, and Nginx.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/ai.png")} alt="Icon3 image" />
                    <div className={styles.aboutItemText}>
                    <h3>Deep Learning/ AI enthusiast</h3>
                    <p>Worked on 3D lung cancer detection and pothole volume estimation using PyTorch, YOLOv8, and depth data. Interested in 3D vision, efficient pipelines, and real-world ML applications.</p>
                    </div>
                </li>
            </ul>
        </div>
        

    </section>);
};