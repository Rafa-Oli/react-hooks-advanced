import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PostsExample from './templates/PostsExample/PostsExample';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <PostsExample />
    {/* <UseState /> */}
    {/* <UseEffect /> */}
    {/* <UseCallback /> */}
    {/* <UseMemo /> */}
    {/* <UseRef /> */}
    {/* <UseContext /> */}
    {/* <UseReducer /> */}
    {/* <UseReducerAndContext /> */}
    {/* <HookCustom /> */}
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
