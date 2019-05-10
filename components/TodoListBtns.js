import css from '../styles/style.scss'
import axios from "axios";

class TodoListBtns extends React.Component {
  constructor(props){
    super(props)
    console.log();
  }

  removeAll = (list) => {
    this.removeItems(list)
    this.props.removeAll()
  }
  removeSelected = (list) => {
    this.removeItems(list)
    this.props.removeSelected()
  }
  removeItems = (list) =>{
    list.forEach(id =>{
      axios.delete(`http://localhost:3000/todos/${id}`);
    })
  }
  render(){
    return (
      <div style={css.todoListItem}>
        <div><button onClick={() => this.removeSelected(this.props.selectedList)}>REMOVE COMPLETED</button></div>
        <div><button onClick={() => this.removeAll(this.props.idList)}>REMOVE ALL</button></div>
      </div>
    );
  }
};

export default TodoListBtns