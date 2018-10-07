import React,{Component} from 'react'
import {TouchableOpacity,Image,Text,Animated,View} from 'react-native'
import styles from './style'
import * as imagePortrait from '../../../_commons/portraitAspectRatio'


export default class HeroCell extends Component{

    static defaultProps={
        hero:null,
        onHeroPress:() => {}
    }
    render(){
        const imageFormat = `/${imagePortrait.portrait_fantastic}`
        const {hero,onHeroPress} = this.props
        const imgHero = hero && hero.thumbnail ? {
                                                    uri: hero.thumbnail.path 
                                                    + imageFormat
                                                    + `.${hero.thumbnail.extension}`
                                                }:require('../../../_resources/placeholder.jpg')
        return(
            <TouchableOpacity
                onPress={() => onHeroPress(hero)}
                style={styles.cellStyle}
                activeOpacity={0.5}>
                <Image 
                    source={imgHero}
                    style={styles.imageCell}
                    resizeMode={'cover'}
                /><View style={styles.detailCell}>
                    <Text style={styles.label}>{hero.name} </Text>
                </View>
            </TouchableOpacity>
        )
    }
}