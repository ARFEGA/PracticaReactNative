import heroesView from './view'
import {connect} from 'react-redux'
import * as HeroesActions from '../../../_redux/heroes/actions' 
import { Actions } from 'react-native-router-flux';

const mapStateToProps = (stateRedux) => {
    return{
        isFetching: stateRedux.heroesReducer.isFetching,
        list: stateRedux.heroesReducer.list,
        //heroSelected: stateRedux.heroesReducer.item
    }
    
}

const mapDispatchToProps = (dispatch,props) => {
    return{
        fetchHeroesList:() => {
            dispatch(HeroesActions.fetchHeroesList())
        },
        onHeroTaped:(hero) => {

            console.log("Heroe seleccionado desde container.js." , hero.name)
            dispatch(HeroesActions.setItem(hero))
            Actions.heroDetail({title:hero.name})
        }
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(heroesView)