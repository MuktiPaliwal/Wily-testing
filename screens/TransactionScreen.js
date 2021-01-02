import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import * as Permissions from 'expo-permissions'
import {BarCodeScanner} from 'expo-barcode-scanner'

export default class TransactionScreen extends React.Component{
    
    constructor(){
        super();
        this.state = {
            hasCameraPermissions: null,
            scanned: false,
            scannedData: '',
            buttonState: 'normal'
        }
    }

    getCameraPermissions = async()=>{

        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasCameraPermissions: status === "granted",
            buttonState : 'clicked'
        })

    }

    handleBarCodeScanned = async ({type, data}) =>{
        this.setState({
            scanned: true,
            scannedData: data,
            buttonState: 'normal'
        })
    }

    render(){
        const hasCameraPermissions = this.state.hasCameraPermissions;
        const scanned = this.state.scanned;
        const buttonState = this.state.buttonState;

        if(buttonState === 'clicked' && hasCameraPermissions){

            return(
                <BarCodeScanner
                    onBarCodeScanned = {scanned ? undefined : this.handleBarCodeScanned }
                    style = {StyleSheet.absoluteFillObject}
                />
            )

        }else if( buttonState === 'normal'){
            return(
                <View style ={styles.container}>
                   <View style = {styles.inputView}>
                       <TextInput
                        style = {styles.inputBox}
                        placeholder = "Book Id"
                       />
                       <TouchableOpacity style = {styles.scanButton}>
                           <Text style = {styles.buttonText}>
                               Scan
                           </Text>
                       </TouchableOpacity>

                   </View>
                   <View style = {styles.inputView}>
                       <TextInput
                        style = {styles.inputBox}
                        placeholder = "Student Id"
                       />
                       <TouchableOpacity style = {styles.scanButton}>
                           <Text style = {styles.buttonText}>
                               Scan
                           </Text>
                       </TouchableOpacity>

                   </View>
                </View>
            )
        }

       
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        justifyContent:'center', 
        alignItems:'center'
    },
    displayText:{
        fontSize : 15,
        textDecorationLine: 'underline'
    },
   
    buttonText:{
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 8

    },
    inputView :{
        flexDirection: 'row',
        margin: 20
    },
    inputBox:{
        width: 200,
        height:40,
        borderWidth: 2,
        fontSize: 20
    },
    scanButton:{
        backgroundColor: '#56Bb6A',
        width: 60,
        height: 40,
        borderWidth: 2
    }
})