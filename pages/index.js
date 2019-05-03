import css from '../styles/style.scss'
import TodoList from "../components/TodoList";

const Index = () => (
  <div className={css.example}>
    <h1>Todo-list</h1>
    <TodoList />
  </div>
)

export default Index