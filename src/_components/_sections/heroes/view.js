import React from 'react'
import {View,Text,FlatList,Alert} from 'react-native'
import styles from './style'
import {HeroCell,FadeAnimated} from '../../_widgets'


export default class extends React.Component{

    constructor(props){
        super(props)
        this.state={

        }
    }

    componentWillMount(){
        this.props.fetchHeroesList()
    }
    _renderItem({item}){
            //Alert.alert("",item.name)
            return <HeroCell
                hero={item}
                onHeroPress={H => this.props.onHeroTaped(H)}
            />
    }
    _renderContent(){
        //if(this.props.isFetching){
            //Todo: ActivityIndicator
        //    console.log("isFetching:", this.props.isFetching)
        //}else{
            return(
                <FlatList
                    data={this.props.list}
                    renderItem={valueCell => this._renderItem(valueCell)}
                    //Identificador único
                    keyExtractor={(item,i) => 'Cell' + item.id}
                    numColumns={2}
                    style={{padding:5, paddingStart:10}}
                />
            )
        //}
    }
    render(){
        return(
            <View style={styles.container}>
                <FadeAnimated style={{ width: '100%', height: '100%', backgroundColor: 'rgb(24,24,24)' }}>
                    {this._renderContent()}
                </FadeAnimated>
            </View>
        )
    }


}


