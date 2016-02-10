import React from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux/native';
import * as counterActions from '../actions/counter.actions';

import ExtractComponent  from '../components/ExtractComponent.component';


const {Text, View, StyleSheet, Component, TouchableHighlight} = React;

class CounterContainer extends Component {

  componentDidMount() {

    
  }


  render(){
    let component = "";
    // if(this.props.loading){
    //   component = ;
    // }
    return(
      <View style={ styles.container}>
         <ExtractComponent  />
        <View style={styles.footer}><Text>I AM Footer</Text></View>
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



const mapReduxStoreToProps = (reduxStore) => {
  const countRef = new Firebase('https://fiery-heat-567.firebaseio.com/').child('count');
  return {
    loading: reduxStore.get('loading'),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    startLoading: bindActionCreators(counterActions.setLoading, dispatch),
  }
};


export default connect(mapReduxStoreToProps, mapDispatchToProps)(CounterContainer);

