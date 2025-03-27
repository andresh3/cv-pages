import styles from './section.module.css'

export default function({label, children})
{
    return (
        <div className={styles.section}>
        <h1>{label}</h1> 
        {children}
        </div>
    );
}
