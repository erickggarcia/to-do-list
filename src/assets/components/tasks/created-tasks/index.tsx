import styles from './CreatedTasks.module.css'
export const CreatedTasks = () => {
    return (
        <section className={styles.tasksContainer}>
            <header className={styles.tasksHeader}>
                <p className={styles.paragraphBlue}>Tarefas Criadas</p>
                <p className={styles.paragraphPurple}>Concluídas</p>
            </header>
            <section className={styles.tasksSection}>
                <article>
                    <img src="../../Clipboard.svg" alt="" />
                    <p >
                        Você ainda não tem tarefas cadastradas
                    </p>
                    <p>
                        Crie tarefas e organize seus itens a fazer
                    </p>
                </article>
            </section>
        </section>
    )
}