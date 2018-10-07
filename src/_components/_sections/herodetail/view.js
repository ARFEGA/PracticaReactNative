import React from 'react'
import {View,Text,Animated,Alert} from 'react-native'
import styles from './style'
import  * as imagePortrait from '../../../_commons/portraitAspectRatio'



export default class extends React.Component{
    constructor(props) {
        super(props)
        
    }
    render(){
        const {hero} = this.props
        const imageFormat = `/${imagePortrait.portrait_fantastic}`
        const imgHero = hero && hero.thumbnail ? {
            uri: hero.thumbnail.path
                + imageFormat
                + `.${hero.thumbnail.extension}`
        } : require('../../../_resources/placeholder.jpg')

        return(
            
            <View style={styles.container}>
                <View style={styles.dataContainer}>
                <Animated.Image source={imgHero}  resizeMode={'cover'} style={styles.image} />
                    <View style={styles.containerText}>
                        <Text style={[styles.text, { textAlign: 'center' }, { fontSize: 16 },{fontWeight:'bold'}]}>{hero.name}</Text>
                        <Text style={styles.text}>{hero.description}</Text>
                    </View>
                </View>
                
            </View>
        )
    }
}