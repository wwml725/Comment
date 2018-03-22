import React from 'react';
import ReactDOM from 'react-dom';
function renderContent (content) {
    ReactDOM.render(<h1>{content}</h1>, document.getElementById('root'))
}
renderContent ("ssss");
