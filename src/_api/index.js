import axios from 'axios'
import marvelApi from 'marvel-comics-api' 
import {BASE_URL,REFERER,PUBLIC_API_KEY} from 'react-native-dotenv'


export function configure(){
    axios.defaults.baseURL= BASE_URL
    axios.defaults.headers.post['Content-Type'] = 'application/json'
    axios.defaults.headers.common['Referer'] = REFERER
}

export function fetchCharacters(){
    const url = `/characters?apikey=${PUBLIC_API_KEY}`
    
    axios.get(url)
        .then((response) => {
            console.log('PUBLIC APIKEY: ', PUBLIC_API_KEY)
            console.log('fetch response: ' , response)
        }).catch((error) => {
            console.log('ERROR: ' , error)
        })
}

export function fetchHeroFromApi(){
    const result = {
        err:null,
        data:null
    }
    
    return marvelApi('characters',{
        publicKey: PUBLIC_API_KEY,
        timeout: 4000,
        query:{
            limit:50
        },
        headers:{
            Referer:REFERER
        }
    })
    
}

