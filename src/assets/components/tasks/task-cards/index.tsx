import styles from './TaskCards.module.css'
import { ChangeEvent } from 'react'


interface iTask {
    task: string
    onDeleteTask: (task: string) => void
    onChangeInputCheckBox: (event: ChangeEvent<HTMLInputElement>) => void
    onRemoveTaskCount: () => void
}


export const TaskCards = ({ task, onDeleteTask, onChangeInputCheckBox, onRemoveTaskCount }: iTask) => {


    function handleDeleteTask() {
        onDeleteTask(task)
        onRemoveTaskCount()
    }

    return (
        <>
            <section className={styles.container}>
                <article>
                    <input type="checkbox" name={task} id={task} onChange={onChangeInputCheckBox} />
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
