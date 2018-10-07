import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    cellStyle:{
        width: '50%',
        height: 300,
        backgroundColor:'rgb(24,24,24)',
        padding: 5,
       
        

    },
    imageCell: {
        width: '100%',
        height: '90%',
        marginBottom: 5,
        borderRadius: 20

    },
    label: {
        color: 'white',
        borderWidth: 0.5,
        borderColor: 'white',
        textAlign:'center',
        borderRadius: 5,
        backgroundColor: 'rgb(50,50,50)',
        fontWeight: 'bold',
        flex: 1
    },
    detailCell: {
        flexDirection: 'row',
    }
   
})