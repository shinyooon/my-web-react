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
      todoList : this.props.data,
      idList : this.props.data.map(item => item.id),
      selectedList : this.props.data.filter(item => item.checked===true).map(item => item.id)
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

  changeItem = (index,isChekced) => {

    this.state.todoList[index].checked = isChekced
    this.setState({
      selectedList : this.state.todoList.filter(item => item.checked === true).map(item => item.id)
    })
  }

  removeAll = () => {
    this.setState({
      todoList: []
    })
  }

  removeSelected = () => {
    this.setState({
      todoList : this.state.todoList.filter( item => {
        return this.state.selectedList.findIndex( id => id ===item.id) ===-1
      })
    })
 }


  render() {
    const { todoList,idList,selectedList } = this.state;
    return (
      <div className={css.todoWrap}>
        <h1>Todo List</h1>
        <TodoListForm onCreate={this.createItem}/>
        {
          todoList.map((data, index) =>
            <TodoListItem key={'todo' + data.id} data={data} index={index} isChecked = {data.checked} onDelete = {this.deleteItem} onChange = {this.changeItem} />
          )
        }
        <TodoListBtns removeAll = {this.removeAll} removeSelected ={this.removeSelected} idList={idList} selectedList={selectedList}/>
      </div>
    );
  }
}

export default TodoList