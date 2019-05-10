import css from '../styles/style.scss'
import axios from "axios";

class TodoListForm extends React.Component {
  constructor(props){
    super(props)
    this.inputRef = React.createRef();
  }
  onKeyPress = async (e) => {
    const value = this.inputRef.current.value
    if(e.key ==='Enter'){
      this.props.onCreate( await this.createItem(value))
      this.inputRef.current.value=''
    }
  }
  createItem = async (todo) => {
    const data = {
      todo : todo,
      checked : false
    }
    return await axios.post('http://localhost:3000/todos/', data).then(response => response.data)
  }
  render(){
    return(
      <div className={css.todoListFormWrap}>
        <p className={css.todoListFormTitle}>TITLE </p>
        <input className={css.todoListFormInput}  type="text" ref={this.inputRef} onKeyPress={(e)=>this.onKeyPress(e) } placeholder={'Title'} />
      </div>
    )
  }
}


export default TodoListForm