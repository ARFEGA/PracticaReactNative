import React from 'react'
import {TouchableOpacity,Text,View,ActivityIndicator} from 'react-native'
//import Spinner from 'react-native-spinkit'
import styles from './styles'


export default class extends React.Component{
    static defaultProps={
        textButton:'Guardar',
        onPress:() => {},
       
    }
    
   

    _renderButton(){
        return <Text style={styles.buttonText}>{this.props.textButton}</Text>
        if(this.props.isFetching) {
            //return <ActivityIndicator color={'#FFF'}/>
            return <Spinner color={'#FFF'} size={40} type={'ChasingDots'}/>
        }else{
            return <Text style={styles.buttonText}>{this.props.textButton}</Text>
        }
    }

    render(){
        return(
            <View style={{padding:20}}>
                <TouchableOpacity   
                    style={styles.buttonContainer} 
                    onPress={() => this.props.onPress()}
                >
                        {this._renderButton()}
                </TouchableOpacity>
            </View>
        )
    }
}