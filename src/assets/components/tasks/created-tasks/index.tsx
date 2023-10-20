import styles from './CreatedTasks.module.css'
import { TaskCards } from '../task-cards'
import { ChangeEvent, useState } from 'react'

export interface iTasks {
    createdTask: string[]
    onDeleteTask: (task: string) => void
}

export const CreatedTasks = ({ createdTask, onDeleteTask }: iTasks) => {

    const [checkedTasksCount, setCheckedTasksCount] = useState<number>(0)

    function handleInputCheckEvent(event: ChangeEvent<HTMLInputElement>) {
        if (event.target.checked === true) {
            setCheckedTasksCount((checked) => {
                return checked + 1
            })
        } else {
            setCheckedTasksCount((checked) => {
                return checked - 1
            })
        }
    }

    function handleRemoveDeletedTaskFromCount() {
        if (checkedTasksCount > 0) {
            setCheckedTasksCount((checked) => {
                return checked - 1
            })
        }
    }

    return (
        <div className={styles.tasksContainer}>
            <section>
                <header className={styles.tasksHeader}>
                    <p className={styles.paragraphBlue}>
                        Tarefas Criadas <span>{createdTask.length}</span>
                    </p>
                    <p className={styles.paragraphPurple}>
                        Concluídas <span>{checkedTasksCount} de {createdTask.length}</span>
                    </p>
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
                                            onDeleteTask={onDeleteTask}
                                            onChangeInputCheckBox={handleInputCheckEvent}
                                            onRemoveTaskCount={handleRemoveDeletedTaskFromCount}
                                        />
                                    ))}
                                </>
                            )
                    }
                </section>
            </section>
        </div>
    )
}