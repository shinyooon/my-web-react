import css from '../styles/style.scss'
import TodoListForm from "./TodoListForm";
import TodoListItem from "./TodoListItem";
import TodoListBtns from "./TodoListBtns";

class TodoList extends React.Component {
  render() {
    const db = [
      {
        id: 0,
        todo : '운동하기'
      },
      {
        id: 1,
        todo : '적게먹기'
      },
      {
        id: 2,
        todo : '물많이마시기'
      }
    ]
    return (
      <div style={css.todoListItem}>
        <TodoListForm />
        {
          db.map((item,index) => (
              <TodoListItem key={'todo'+index} item={item} />
            )
          )
        }
        <TodoListBtns />
      </div>
    );
  }
}

export default TodoList