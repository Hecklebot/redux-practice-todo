import React, { Component } from 'react';
import './TodoItem.css';
import OpengraphReactComponent from 'opengraph-react';

class TodoItem extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.checked !== nextProps.checked;
  }

  handleUrlCheck(text) {
    const expUrl = /(((http(s)?:\/\/)\S+(\.[^(\n|\t|\s,)]+)+)|((http(s)?:\/\/)?(([a-zA-z\-_]+[0-9]*)|([0-9]*[a-zA-z\-_]+)){2,}(\.[^(\n|\t|\s,)]+)+))+/gi;
    if (text.startsWith('\n')) {
      text = text.replace(/\n/g, '');
    }

    if (expUrl.test(text)) {
      if (text.indexOf('http') !== -1) {
        return (
          <div>
            <OpengraphReactComponent site={text} appId="206cd311-119f-41e4-b74c-b249df85d9c0" size="small" />
          </div>
        );
      }
      return (
        <div>
          <OpengraphReactComponent site={`http://${text}`} appId="206cd311-119f-41e4-b74c-b249df85d9c0" size="small" />
        </div>
      );
    }
    return text;
  }

  render() {
    const { text, checked, id, onToggle, onRemove } = this.props;

    return (
      <div className="todo-item" onClick={() => onToggle(id)}>
        <div
          className="remove"
          onClick={e => {
            e.stopPropagation(); // onToggle 이 실행되지 않도록 함
            onRemove(id);
          }}
        >
          &times;
        </div>
        <div className={`todo-text ${checked && 'checked'}`}>
          <div>
            <pre>{this.handleUrlCheck(text)}</pre>
          </div>
        </div>
        {checked && <div className="check-mark">&#x2713;</div>}
      </div>
    );
  }
}

export default TodoItem;
