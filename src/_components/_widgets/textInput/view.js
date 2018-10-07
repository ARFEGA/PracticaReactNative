import React from 'react'
import {View,Text,TextInput} from 'react-native'
import styles from './style'


export default class extends React.Component{

    static defaultProps = {
        label: '',
        value:'',
        onChangeText:() =>{},
        
    }

    _renderContent(){
        const { label, value, onChangeText } = this.props
        return (
            <View style={{ padding: 10 }}>
               
                    <Text style={styles.label}>
                        {label}
                    </Text>
                    <TextInput
                        onChangeText={(v) => onChangeText(v)}
                        value={value}
                        style={styles.textImput}
                    />
               
            </View>
        )
    }
    render(){
        return this._renderContent()
    }
    
}
