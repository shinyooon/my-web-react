import css from '../styles/style.scss'
import axios from "axios";
import classNames from 'classnames/bind';

class TodoListItem extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      checked : this.props.isChecked
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
  changeItem = async (id,e) => {
    const data = {
      todo : this.props.data.todo,
      checked : e.target.checked
    }
    await axios.put(`http://localhost:3000/todos/${id}`,data);
    this.setState({
      checked : data.checked
    })
    this.props.onChange(this.props.index,data.checked)
  }
  render(){
    return (
      <div className={css.todoListItem}>
        <label className={ classNames(css.todoListLabel, this.state.checked ? css.isChecked : '')}>
          <input type="checkbox" defaultChecked={this.props.isChecked}  onChange={(e) => this.changeItem(this.props.data.id, e)}/>
          <span>{this.props.data.todo}</span>
        </label>
        <button className={css.todoListBtnDel} onClick={() => this.deleteItem(this.props.data.id)}>삭제</button>
      </div>
    );
  }
}


export default TodoListItem