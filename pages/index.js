import css from '../styles/style.scss'
import axios from "axios";
import TodoListForm from "../components/TodoListForm";
import TodoListBtns from "../components/TodoListBtns";
import TodoListItem from "../components/TodoListItem";

class TodoList extends React.Component {
  static async getInitialProps ({req}) {
    const response = await axios.get('http://localhost:3000/todos/');
    return {
      data : response.data
    }
  }
  constructor(props){
    super(props)
    this.state = {
      todoList : this.props.data
    }
  }
  deleteItem = (index) =>{
    this.setState({
      todoList: this.state.todoList.filter((data) => data.id!==index)
    })
  }
  createItem =  (data) => {
     this.setState({
      todoList: [...this.state.todoList,data]
    })
  }


  render() {
    const { todoList } = this.state;
    return (
      <div style={css.todoWrap}>
        <h1>Todo List</h1>
        <TodoListForm onCreate={this.createItem}/>
        {
          todoList.map((data, index) =>
            <TodoListItem key={'todo' + data.id} data={data} index={index+1} isChecked = {data.checked} onDelete = {this.deleteItem} />
          )
        }
        <TodoListBtns />
      </div>
    );
  }
}

export default TodoList