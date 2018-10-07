import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: { backgroundColor: 'rgb(24,24,24)', flex: 1 },
    image: {
        width: '100%',
        height: '70%',
        borderColor: 'yellow',
        borderWidth: 1,
        borderRadius: 20,
        margin: 5
        
    },
    dataContainer: {
        padding: 20,
        borderWidth: 1,
        borderColor: 'yellow',
        borderRadius: 20,
        margin: 5
        //flexDirection: 'row'
    },
    containerText:{
        borderColor: 'yellow',
        borderWidth: 1,
        borderRadius: 20,
        margin: 5,
        width: '100%',
        
        
    },
    text: {
        color: 'white',
        padding:5,
        textAlign: 'justify'
       
    }
})