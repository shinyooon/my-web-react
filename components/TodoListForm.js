import css from '../styles/style.scss'

class TodoListForm extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div style={css.todoListFormWrap}>
        <h2>Title</h2>
        <input type="text" />
      </div>
    )
  }
}

export default TodoListForm