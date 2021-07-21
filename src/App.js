import './App.css';
import {connect} from "react-redux";

function App(props) {
  return (
    <div className="App">
<h1>Boilerplate React-Redux</h1>
        <ul>
            {props.userList.map(user=> <li>{user}</li>)}
        </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
    userList: state.userList
});

const mapDispatchToProps = (dispatch) => ({
    // changeCreateModal: (value) =>
    //   dispatch({
    //     type: 'CHANGE_CREATE_MODAL',
    //     payload: {
    //       value: value,
    //     },
    //   }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
