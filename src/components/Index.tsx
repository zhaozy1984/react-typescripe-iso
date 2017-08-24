import * as React from "react";
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

import { connect } from 'react-redux'
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../actions/actions'

export class Index extends React.Component<{dispatch, visibleTodos, visibilityFilter}, {}> {
  render(){
    const { dispatch, visibleTodos, visibilityFilter } = this.props;
    return(<div>
      <AddTodo
        onAddClick={text =>
            dispatch(addTodo(text))
          } />
      <TodoList
        todos={visibleTodos}
        onTodoClick={index =>
            dispatch(completeTodo(index))
          } />
      <Footer
        filter={visibilityFilter}
        onFilterChange={nextFilter =>
            dispatch(setVisibilityFilter(nextFilter))
          } />
    </div>)
  }
}

function selectTodos(todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
  }
}

function select(state) {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  }
}

export default connect(select)(Index)