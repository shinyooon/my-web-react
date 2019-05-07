import css from '../styles/style.scss'

const TodoListItem = (props) => {
  return (
    <div style={css.todoListItem}>
      <label>
        <input type="checkbox" id={'todo'+props.item.id}/>
        <span>{props.item.todo}</span>
      </label>
      <button>삭제</button>
    </div>
  );
};

export default TodoListItem