import css from '../styles/style.scss'


class TodoListItem extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){

  }
  onClick = () => {
    console.log('click')
  }
  deleteItem = (index) => {
    let url = "http://localhost:3000/todos/";

  }
  render(){
    return (
      <div style={css.todoListItem}>
        <label>
          <input type="checkbox" id={'todo'+this.props.item.id}/>
          <span>{this.props.item.todo}</span>
        </label>
        <button onClick={() => this.deleteItem(this.props.index)}>삭제</button>
      </div>
    );
  }
}


export default TodoListItem