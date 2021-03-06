import * as React from "react";
import {
  StyleSheet,
  View,
  AsyncStorage
} from "react-native";
import * as Progress from 'react-native-progress';
interface State {
    IsLoggedIn: boolean;
  }

class SplashScreen extends React.Component<{}, State> {

    state = {
        dataLoaded:false
      };

    componentWillMount(){
        AsyncStorage.getItem('isLoggedIn').then((isLoggedIn) =>{
               this.setState({dataLoaded:true});
               if( isLoggedIn == null || isLoggedIn == 0 ){
                this.props.navigation.navigate('Login');
               }
               else
                this.props.navigation.navigate('Table');  
           }
        );
    }

    render(){
        if( this.state.dataLoaded == false )
                 return(
                     <View style = {styles.container}>
                    <Progress.Circle
                    size={52}
                    progress={0.5}
                    unfilledColor="#fff"
                    color="#ff457f"
                    thickness={4}
                    borderWidth={0}>
                    </Progress.Circle>
                    </View>);
        else 
                return null ;
    }
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center"
    }
  });
  
export default SplashScreen ;