import editHero from './view'
import {connect} from 'react-redux'


const mapStateToProps = (stateRedux) =>{
    return{
        hero : stateRedux.heroesReducer.item
    }
}

const mapDispatchToProps = (dispatch,props)=> {
    return{

    }
}

export default connect (mapStateToProps,mapDispatchToProps)(editHero)