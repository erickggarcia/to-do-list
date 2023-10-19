import styles from './CreatedTasks.module.css'
import { TaskCards } from '../task-cards'

export interface iTasks {
    createdTask: string[]
    onDeleteTask: (task: string) => void
}

export const CreatedTasks = ({ createdTask, onDeleteTask }: iTasks) => {
    return (
        <div className={styles.tasksContainer}>
            <section>
                <header className={styles.tasksHeader}>
                    <p className={styles.paragraphBlue}>Tarefas Criadas</p>
                    <p className={styles.paragraphPurple}>Concluídas</p>
                </header>
                <section className={styles.tasksSection}>
                    {
                        createdTask.length === 0 ? <article>
                            <img src="/images/clipboard.svg" alt="imagem" />
                            <p >
                                Você ainda não tem tarefas cadastradas
                            </p>
                            <p>
                                Crie tarefas e organize seus itens a fazer
                            </p>
                        </article>
                            : (
                                <>
                                    {createdTask.map((task) => (
                                        <TaskCards
                                            task={task}
                                            key={task}
                                            onDeleteTask={onDeleteTask} />
                                    ))}
                                </>
                            )
                    }
                </section>
            </section>
        </div>
    )
}