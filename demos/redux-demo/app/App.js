import { connect } from 'react-redux';
import MyComponent from './myComponent';

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    text: state.text,
    name: state.name
  };
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onChange: (e) => dispatch({
      type: 'change',
      payload: e.target.value
    })
  }
}

// Connected Component
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyComponent);

export default App;
