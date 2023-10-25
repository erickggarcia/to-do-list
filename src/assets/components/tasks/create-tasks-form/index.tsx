import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { CreatedTasks } from '../created-tasks'
import styles from './CreateTasks.module.css'
import { useLocalStorage } from '../../../hooks/useLocalStorage'
import { useState, ChangeEvent, FormEvent } from 'react'

export const CreateTasksForm = () => {
    const [newTaskText, setNewTaskText] = useState('')
    const [createdTask, setCreatedTask] = useLocalStorage({ key: 'tasks', initialValue: [] })

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault()
        const updatedTasks = [...createdTask, newTaskText]
        setCreatedTask(updatedTasks)
        setNewTaskText('')
    }

    function handleChangeInputTask(event: ChangeEvent<HTMLInputElement>) {
        setNewTaskText(event.target.value)
    }

    function handleDeleteTask(taskToDelete: string) {
        const taskWithoutDeletedOne = createdTask.filter((task: any) => task !== taskToDelete)
        setCreatedTask(taskWithoutDeletedOne)
    }

    return (
        <>
            <form className={styles.form} onSubmit={handleCreateNewTask}>
                <input
                    type="text"
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
