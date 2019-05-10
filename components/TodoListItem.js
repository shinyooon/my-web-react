import css from '../styles/style.scss'
import axios from "axios";


class TodoListItem extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      checked : this.props.checked
    }
  }

  componentDidMount(){

  }
  deleteItem = async (index) => {
    if(this.props.onDelete){
      await axios.delete(`http://localhost:3000/todos/${index}`);
      this.props.onDelete(this.props.data.id)
    }
  }
  changeItem = async (index,e) => {
    const data = {
      todo : this.props.data.todo,
      checked : e.target.checked
    }
    await axios.put(`http://localhost:3000/todos/${index}`,data);
    this.setState({
      checked : data.checked
    })
  }
  render(){
    return (
      <div style={css.todoListItem}>
        <label>
          <input type="checkbox" defaultChecked={this.props.isChecked}  onChange={(e) => this.changeItem(this.props.data.id, e)}/>
          <span>{this.props.data.todo}</span>
        </label>
        <button onClick={() => this.deleteItem(this.props.data.id)}>삭제</button>
      </div>
    );
  }
}


export default TodoListItem