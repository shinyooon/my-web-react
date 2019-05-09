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

  render() {
    const { data } = this.props;
    return (
      <div style={css.todoWrap}>
        <TodoListForm />
        {
          data.map((data, index, array) =>
            <TodoListItem key={'todo' + data.id} data={data} index={index+1} list = { array }/>
          )
        }
        <TodoListBtns />
      </div>
    );
  }
}

export default TodoList