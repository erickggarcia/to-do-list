import styles from './Header.module.css'
export const Header = () => {
    return (
        <header className={styles.header}>
            <h1>
                <span className={styles.span1}>To</span>
                <span className={styles.span2}>-do</span>
                <span className={styles.span3}>-list</span>
            </h1>
        </header>
    )
}
