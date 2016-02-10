import React from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux/native';
import * as counterActions from '../actions/counter.actions';

// import ExtractComponent as counterActions from '../components/ExtractComponent.component';


const {Text, View, StyleSheet, Component, TouchableHighlight} = React;

export default class ExtractComponent extends Component {

  componentDidMount() {

    const {fireRef} = this.props;
    this.props.fetchCount(fireRef);

    fireRef.parent().on('child_changed', (snapShot) => {
      const value = snapShot.val();
      this.props.setCount(value);
    });
  }


  render(){
    const {fireRef} = this.props;
    return(
     
        <View style={styles.body}>
          <TouchableHighlight onPress={ () => this.props.increaseCount(fireRef)}>
            <View style={styles.header}><Text>Update counter</Text></View>
          </TouchableHighlight>
          <Text> {this.props.count}</Text>


        </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex:1,
    alignSelf: "stretch",
    backgroundColor: 'yellow',
  },

  header: {
    height: 120,
    backgroundColor: 'red',
  },

  body: {
    backgroundColor: 'green',
    flex: 1
  },

  footer: {
    height: 120,

  }

});


// function mapStateToProps(state) {
//   const todosScope = state.get('_todos_');

//   return {
//     todos: todosScope.get('todos'),
//     fireRef: state.get('fireRef'),
//     loading: todosScope.get('loadingTodos'),
//   };
// }

// function mapDispatchToProps(dispatch) {
//   // const remoteActions {onAdd: _addTodo} = todoActionCreators;

//   const remoteActions = {
//     onAdd: todoActionCreators.remoteAddTodo,
//     onInit: todoActionCreators.getTodos
//   };

//   return {
//     remoteActions: bindActionCreators(remoteActions, dispatch),
//     todoActions: bindActionCreators(todoActionCreators, dispatch),
//   }
// }

// const mapReduxStoreToProps = (reduxStore) => {
//   const countRef = new Firebase('https://fiery-heat-567.firebaseio.com/').child('count');
//   return {
//     fireRef: countRef,
//     loading: reduxStore.get('loading'),
//     count: reduxStore.get('count')
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setCount: bindActionCreators(counterActions.setCount, dispatch),
//     fetchCount: bindActionCreators(counterActions.fetchCount, dispatch),
//     startLoading: bindActionCreators(counterActions.setLoading, dispatch),
//     increaseCount: bindActionCreators(counterActions.increaseCount,dispatch)
//   }
// };


// export default connect(mapReduxStoreToProps, mapDispatchToProps)(CounterContainer);

const mapReduxStoreToProps = (reduxStore) => {
  const countRef = new Firebase('https://fiery-heat-567.firebaseio.com/').child('count');
  return {
    fireRef: countRef,
    count: reduxStore.get('count')
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCount: bindActionCreators(counterActions.setCount, dispatch),
    fetchCount: bindActionCreators(counterActions.fetchCount, dispatch),
    increaseCount: bindActionCreators(counterActions.increaseCount,dispatch)
  }
};


export default connect(mapReduxStoreToProps, mapDispatchToProps)(ExtractComponent);


