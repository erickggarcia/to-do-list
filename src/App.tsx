import { Header } from './assets/components/header'
import { CreateTasksForm } from './assets/components/tasks/create-tasks-form'
import { CreatedTasks } from './assets/components/tasks/created-tasks'
export default function App() {
  return (
    <>
      <Header />
      <CreateTasksForm />
      <CreatedTasks />
    </>
  )
}
