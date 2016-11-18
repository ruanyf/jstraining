import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

// class MyComponent extends React.Component {
//   render() {
//     return (
//       <div className="index">
//         <p>{this.props.text}</p>
//         <input defaultValue={this.props.name} onChange={this.props.onChange} />
//       </div>
//     );
//   }
// }

export default (props) => (
  <div className="index">
    <p>{props.text}</p>
    <input defaultValue={props.name} onChange={props.onChange} />
  </div>
);

export default MyComponent;

