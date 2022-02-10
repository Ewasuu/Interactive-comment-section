import React from 'react';
import './App.css';
import { Comment } from './components/comment.js';
import { CommentSpace } from './components/commentSpace';

function App() {

  return (
    <div>
      <Comment/>
      <CommentSpace/>
    </div>
  );
}

export default App;
