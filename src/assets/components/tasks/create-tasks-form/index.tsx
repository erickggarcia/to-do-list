import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { CreatedTasks } from '../created-tasks'
import styles from './CreateTasks.module.css'
import { useState, ChangeEvent, FormEvent } from 'react'

export const CreateTasksForm = () => {
    const [createdTask, setCreatedTask] = useState<string[]>([])
    const [newTaskText, setNewTaskText] = useState('')

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault()
        setCreatedTask((tasks) =>
            [...tasks, newTaskText]
        )
        setNewTaskText('')
    }

    function handleChangeInputTask(event: ChangeEvent<HTMLInputElement>) {
        setNewTaskText(event.target.value)
    }

    function handleDeleteTask(taskToDelete: string) {
        const taskWithoutDeletedOne = createdTask.filter(task => {
            return task !== taskToDelete
        })

        setCreatedTask(taskWithoutDeletedOne)
    }

    return (
        <>
            <form className={styles.form} onSubmit={handleCreateNewTask}>
                <input type="text"
                    name="task"
                    value={newTaskText}
                    placeholder='Adicione uma nova tarefa'
                    onChange={handleChangeInputTask}
                    required
                />
                <button type='submit'>
                    Criar
                    <AddCircleOutlineIcon
                        className={styles.addCircle}
                    />
                </button>
            </form>
            <CreatedTasks
                createdTask={createdTask}
                onDeleteTask={handleDeleteTask}
            />
        </>
    )
}