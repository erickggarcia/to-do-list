import styles from './TaskCards.module.css'
import { ChangeEvent } from 'react'


interface iTask {
    task: string
    onDeleteTask: (task: string) => void
    onChangeInputCheckBox: (event: ChangeEvent<HTMLInputElement>) => void
}

export const TaskCards = ({ task, onDeleteTask, onChangeInputCheckBox, }: iTask) => {

    function handleDeleteTask() {
        onDeleteTask(task)
    }

    function handleInputCheckBox(event: ChangeEvent<HTMLInputElement>, task: string) {
        onChangeInputCheckBox(event, task)
    }


    return (
        <>
            <section className={styles.container}>
                <article>
                    <input type="checkbox" name={task} id={task} onChange={handleInputCheckBox} />
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
