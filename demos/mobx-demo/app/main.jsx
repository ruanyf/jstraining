import React from 'react';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';

import Store from './store';

@observer
class App extends React.Component {
  render() {
    return (
      <div className="index">
        <p>{this.props.store.decorated}</p>
        <input
          defaultValue={this.props.store.name}
          onChange={(event) => this.props.store.name = event.currentTarget.value}
        />
      </div>
    );
  }
}

const store = new Store();

ReactDOM.render(
  <App store={store} />,
  document.body.appendChild(document.createElement('div'))
);
