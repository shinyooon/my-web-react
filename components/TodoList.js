import css from '../styles/style.scss'
import TodoListForm from "./TodoListForm";
import TodoListItem from "./TodoListItem";
import TodoListBtns from "./TodoListBtns";

class TodoList extends React.Component {
  constructor(props){
    super(props)
    this.state={
      _db : []
    }

  }

  componentDidMount() {
    let url = "http://localhost:3000/todos/";
    fetch(url)
      .then( response => response.json())
      .then( data =>{
        this.setState({
          _db : data
        })
      })

  }

  render() {
    const {_db} = this.state
    return (
      <div style={css.todoListItem}>
        <TodoListForm />
        {
          _db.map((item,index) => (
              <TodoListItem key={'todo'+index} item={item} />
            )
          )
        }
        <TodoListBtns />
      </div>
    );
  }
}

export default TodoList