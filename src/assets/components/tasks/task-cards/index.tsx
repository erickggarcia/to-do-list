import styles from './TaskCards.module.css'

interface iTask {
    task: string
    onDeleteTask: (task: string) => void
}

export const TaskCards = ({ task, onDeleteTask }: iTask) => {

    function handleDeleteTask() {
        onDeleteTask(task)
    }

    return (
        <>
            <section className={styles.container}>
                <article>
                    <input type="checkbox" name="task" id="" />
                    <label>
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
