import HeroDetail from './view'
import {connect} from 'react-redux'

const mapStateToProps = (stateRedux) =>{
    //console.log("Hero selected: ", stateRedux.heroesReducer.item)
    return{
        hero:stateRedux.heroesReducer.item,
    }
}
const mapDispatchToProps= (dispatch,props) =>{
    return{

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HeroDetail)