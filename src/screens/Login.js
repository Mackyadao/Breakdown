import React from 'react';
import {Text,View,Image, TextInput, Button} from 'react-native';

export default class Login extends React.Component{

    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={{backgroundColor:"#FFF",height:"100%"}}>
                <View style={{
                    width:'100%',
                    alignItems:"center",
                    justifyContent:"center",
                }}>
                    <Image
                    source={require('../images/logo.png')}
                    style={{width:'100%'}}
                    ></Image>
                </View>

                <TextInput
                    style={{
                        borderWidth:1,
                        borderTopLeftRadius:20,
                        borderBottomLeftRadius:20,
                        borderBottomRightRadius:20,
                        borderTopRightRadius:20,
                        marginHorizontal:'15%',
                        marginTop:30,
                        padding:10
                    
                    }}
                    placeholder="Email or mobile number"
                    keyboardType="default"
                />

                <TextInput
                    style={{
                        borderWidth:1,
                        borderTopLeftRadius:20,
                        borderBottomLeftRadius:20,
                        borderBottomRightRadius:20,
                        borderTopRightRadius:20,
                        marginHorizontal:'15%',
                        marginTop:10,
                        padding:10
                    
                    }}
                    placeholder="Password"
                    keyboardType="default"
                />
                <Text    
                            
                style={{
                    textAlign:'right',
                    marginHorizontal:'13%',
                    
                }}>Forgot Password?</Text>
                

                <Text    
                onPress={()=>navigate('Home')}      
                style={{
                    borderTopLeftRadius:20,
                    borderBottomLeftRadius:20,
                    borderBottomRightRadius:20,
                    borderTopRightRadius:20,
                    marginHorizontal:'15%',
                    marginTop:15,
                    backgroundColor:'#6C1717',
                    padding:15,
                    color:'#ffffff',
                    textAlign:'center'
                
                }}>Login</Text>

                <Text    
                            
                style={{
                    textAlign:'center',
                    marginTop:10,
                    fontWeight:'bold'
                }}>Don’t have an account? 
                    <Text 
                    onPress={()=>navigate('Register')}  
                    style={{color: '#6C1717'
                    }}> Sign up </Text> 
                </Text>
                
            
            </View>
        )
    }
}