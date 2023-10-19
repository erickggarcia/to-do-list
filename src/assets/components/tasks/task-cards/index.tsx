import styles from './TaskCards.module.css'
import { ChangeEvent } from 'react'


interface iTask {
    task: string
    onDeleteTask: (task: string) => void
    onChangeInputCheckBox: (event: ChangeEvent<HTMLInputElement>, task: string) => void
}

export const TaskCards = ({ task, onDeleteTask, onChangeInputCheckBox }: iTask) => {

    function handleDeleteTask() {
        onDeleteTask(task)
    }

    function handleRemoveCheckedTask(event: ChangeEvent<HTMLInputElement>) {
        onChangeInputCheckBox(event, task)
    }

    return (
        <>
            <section className={styles.container}>
                <article>
                    <input type="checkbox" name={task} id={task} onChange={handleRemoveCheckedTask} />
                    <label htmlFor={task}>
                        {task}
                    </label>
                </article>
                <button onClick={handleDeleteTask}>
                    <img src="images/trash.svg" alt="" />
                </button>
            </section>
        </>
    )
}
