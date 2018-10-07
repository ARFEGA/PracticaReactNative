import React from 'react'
import {View, Text,StatusBar,TouchableOpacity} from 'react-native'
import * as api from './_api' 
import {Scene,Router,Actions,Stack} from 'react-native-router-flux'
import {Heroes,HeroDetail,EditHero} from './_components/_sections'


//Redux
import {createStore,applyMiddleware,combineReducers} from 'redux'
import {Provider,connect} from 'react-redux'
import thunk from 'redux-thunk'
//Importo reducers
import * as reducers from './_redux'
const reducer = combineReducers(reducers)
const store =createStore(reducer,applyMiddleware(thunk.withExtraArgument({api:api})))


const sceneDefaultStyles = {
    navigationBarStyle: { backgroundColor: 'rgb(24,24,24)' },
    backButtonTextStyle: 'yellow',
    backButtonTintColor: 'yellow',
    titleStyle: { color: 'yellow' },
    backgroundColor: 'rgb(24,24,24)'
}

//Componente sin estado (statless component)
const RightButton = props => (
    <TouchableOpacity style={{padding:10}} onPress={() => Actions.editHero({title:'Edit Hero'})}>
        <Text style={{color:'yellow' , fontWeight:'bold'}}>{'Edit'}</Text>
    </TouchableOpacity>
)
export default class extends React.Component{

    componentDidMount() {
        //api.configure()
        //api.fetchCharacters()
        
        //api.fetchHeroFromApi()
        //Status bar en blanco, la hora, la señal, la batería etc..
        StatusBar.setBarStyle('light-content')
        StatusBar.setBackgroundColor('rgb(24,24,24)')
       
    }
    



    render(){
        return(
            <Provider store={store}>
                <Router>
                    <Stack key='root'>
                        <Scene
                            hideNavBar={true}
                            key='heroes'
                            component={Heroes}
                            title='Heroes'
                            initial={true}
                        />
                        <Scene
                            key='heroDetail'
                            component={HeroDetail}
                            title='Hero Detail'
                            {...sceneDefaultStyles}
                            renderRightButton = {RightButton}
                        />
                        <Scene
                            key='editHero'
                            component={EditHero}
                            {...sceneDefaultStyles}
                        />
                    </Stack>
                </Router>
            </Provider>
        )
    }
}