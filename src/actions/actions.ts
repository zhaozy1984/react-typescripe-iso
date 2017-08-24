

/*
 * action 类型
 */
import fetch from 'isomorphic-fetch'

export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * 其它的常量
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/*
 * action 创建函数
 */

export function addTodo(text) {
  return { type: ADD_TODO, text }
}

export function completeTodo(index) {
  return { type: COMPLETE_TODO, index }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}

// 来看一下我们写的第一个 thunk action creator！
// 虽然内部操作不同，你可以像其它 action creator 一样使用它：
// store.dispatch(fetchPosts('reactjs'))
export function fetchPosts(subreddit) {

  // Thunk middleware 知道如何处理函数。
  // 这里把 dispatch 方法通过参数的形式传给函数，
  // 以此来让它自己也能 dispatch action。

  return function (dispatch) {

    // 首次 dispatch：更新应用的 state 来通知
    // API 请求发起了。

    dispatch(requestPosts(subreddit))

    // thunk middleware 调用的函数可以有返回值，
    // 它会被当作 dispatch 方法的返回值传递。

    // 这个案例中，我们返回一个等待处理的 promise。
    // 这并不是 redux middleware 所必须的，但这对于我们而言很方便。

    return fetch(`http://localhost:3000/json/abcd.json`)
      .then(response => response.json())
      .then(json => {
          // 可以多次 dispatch！
          // 这里，使用 API 请求结果来更新应用的 state。
          console.log("异步action--json请求=" + JSON.stringify(json));
          dispatch(receivePosts(subreddit, json))
        }
      )

    // 在实际应用中，还需要
    // 捕获网络请求的异常。
  }
}
export const REQUEST_POSTS = 'REQUEST_POSTS'

function requestPosts(subreddit) {
  //console.log("异步action-requestPosts");
  return {
    type: REQUEST_POSTS,
    subreddit
  }
}
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
function receivePosts(subreddit, json) {
  //console.log("异步action-receivePosts");
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json,
    receivedAt: Date.now()
  }
}
