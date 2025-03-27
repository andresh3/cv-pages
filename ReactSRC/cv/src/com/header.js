import styles from './header.module.css';

export default function Header({children}) {
    
    return (
      <header className={styles.header} >
        <img className={styles.mugshot} src="/mug.jpg" />
        <div>
            <span className={styles.spacer} />
            <div className={styles.gridContent}>
                {children}
            </div>
            <span className={styles.spacer} />
        </div>
      </header>
    );
}
