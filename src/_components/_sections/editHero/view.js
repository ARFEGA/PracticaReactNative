import React, {Component} from 'react'
import {Text,View,Alert} from 'react-native'
import styles from './style'
import {MyTextInput,FadeAnimated,MyButton} from '../../_widgets'
import {Actions} from 'react-native-router-flux'


export default class extends Component{

    constructor(props){
        super(props)
        this.state={
            name:props.hero.name,
            description:props.hero.description
        }
    }

    _validateForm() {
        // un string vacío es false, esto: '' sería false
        const { name, description } = this.state
        if (name && description) {
            return true
        } else {
            return false
        }
    }
    _onSubmit() {
        if (this._validateForm()) {
            const { name, description} = this.state
            this.props.hero.name = name
            this.props.hero.description = description
            Alert.alert('Hero Edit', 'Actualización exitosa.')
            Actions.pop()
            
        } else {
            Alert.alert('Atención', 'Complete todos los campos.')
        }
    }


    render(){
        
        return(
            <View style={styles.container}>
                <FadeAnimated style={{ width: '100%', height: '100%' }}>
                <MyTextInput 
                    label={'Nombre: '}
                    value={this.state.name}
                    onChangeText={v => this.setState({ name: v })}
                />
                <MyTextInput
                    label={'Descripción: '}
                    value={this.state.description}
                    onChangeText={value => this.setState({ description: value })}
                />
                   
                <MyButton
                    textButton={'Guardar'.toLocaleUpperCase()}
                    onPress={() => this._onSubmit()}
                 />
                    
               </FadeAnimated>
            </View>
        )
    }
}