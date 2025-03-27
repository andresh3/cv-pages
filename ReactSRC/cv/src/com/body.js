import styles from './body.module.css';

export default function({children})
{
    return (
    <div className={styles.body}>
        {children}
    </div>
    );
}
