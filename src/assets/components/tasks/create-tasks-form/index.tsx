import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import styles from './CreateTasks.module.css'

export const CreateTasksForm = () => {
    return (
        <form className={styles.form}>
            <input type="text" name="task" placeholder='Adicione uma nova tarefa' />
            <button>
                Criar
                <AddCircleOutlineIcon className={styles.addCircle} />
            </button>
        </form>
    )
}