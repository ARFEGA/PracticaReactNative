import * as types from './types'
import marvelApi from 'marvel-comics-api'
import { BASE_URL, REFERER, PUBLIC_API_KEY } from 'react-native-dotenv'


function setFetching(value){
    return{
        type:types.HERO_SET_FETCHING,
        value
    }
}
export function setList(value){
    console.log("En funcion setList: ", value)
    return{
        type:types.HERO_UPDATE_LIST,
        value: value
    }
}
export function setItem(value){
    return {
        type:types.HERO_SET_ITEM,
        value
    }
}

export function fetchHeroesList(){
    return(dispatch,getState,extraArguments) =>{
        console.log("Estoy dentro..........")
        dispatch(setFetching(true))
        marvelApi('characters', {
            publicKey: PUBLIC_API_KEY,
            timeout: 4000,
            query: {
                limit: 50
            },
            headers: {
                Referer: REFERER
            }
        },function(err,body){
            if(err){
                console.log("Error(actions):", err)
                dispatch(setFetching(false))
            }else{
                console.log(body.data.results)
                dispatch(setList(body.data.results))
                dispatch(setFetching(false))
            }
        })
    }
}

