import css from '../styles/style.scss'
import axios from "axios";


class TodoListItem extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){

  }
  deleteItem = async (index) => {
    await axios.delete(`http://localhost:3000/todos/${index}`);
  }
  render(){
    return (
      <div style={css.todoListItem}>
        <label>
          <input type="checkbox" />
          <span>{this.props.data.todo}</span>
        </label>
        <button onClick={() => this.deleteItem(this.props.data.id)}>삭제</button>
      </div>
    );
  }
}


export default TodoListItem