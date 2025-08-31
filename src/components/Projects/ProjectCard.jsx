import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css"


export const ProjectCard = ({project:{title,imageSrc,description,skills,demo,source}}) => {

    return (
        <div className={styles.container} >
                     
            <div className={styles.box}>
                <img src={getImageUrl(imageSrc)} alt={`image of ${title}`} className={styles.image} />  
                <div className={styles.content}>
                    <h3 className={styles.title}>{title}</h3>      
                    <ul>{description.map((description,id)=>{
                                            return <li  className={styles.description} key={id}>{description}</li>
                                        })}</ul>

                    <ul className={styles.skills}>{
                        skills.map((skill, id) => {
                            return <li className={styles.skill} key={id}>{skill}</li>
                        })}
                    </ul>
                </div>
            </div>

            <div className={styles.links}>
                <a className={styles.link} href={demo}>Demo</a>
                <a className={styles.link} href={source}>Source</a>
            </div>
        </div>
    )

}