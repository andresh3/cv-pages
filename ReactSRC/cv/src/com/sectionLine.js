import styles from "./sectionLine.module.css";

export default function({title,details,date,children}){
    return (
        <div className={styles.sectionLine} >
            <header>
                <h2>{title}</h2>
                <span className={styles.spacer}></span>
                <span className={styles.details}>{details}</span>
                <span className={styles.date} >{date}</span>
            </header>
        </div>
    );
}
