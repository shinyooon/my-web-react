import css from '../styles/style.scss'

const TodoListItem = (props) => {
  return (
    <div style={css.todoListItem}>
      <input type="checkbox" id={'todo'+props.item.id}/>
      <label for={'todo'+props.item.id}>{props.item.todo}</label>
      <button>삭제</button>
    </div>
  );
};

export default TodoListItem