import css from '../styles/style.scss'

const TodoListBtns = (props) => {
  return (
    <div style={css.todoListItem}>
      <div><button>REMOVE COMPLETED</button></div>
      <div><button>REMOVE ALL</button></div>
    </div>
  );
};

export default TodoListBtns