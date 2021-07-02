import React from 'react';
import {Text,View,Image, TextInput, Icon} from 'react-native';

export default class Register extends React.Component{

    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={{backgroundColor:"#FFF",height:"100%"}}>
                
                    <Image
                    source={require('../images/logorec.png')}
                    style={{width: 68,height:53,marginTop: 7, marginLeft: 8, position:'absolute'}}
                    />

                    <View style={{marginTop: 33, alignSelf:'center', position:'absolute'}}>
                        <Image
                        source={require('../images/Vector.png')}
                        style={{width:113,height:113}}
                        />

                        <Image
                        source={require('../images/Ellipse69.png')}
                        style={{position:'absolute', right:-5, bottom:-5}}
                        />
                        <Image
                        source={require('../images/+.png')}
                        style={{position:'absolute', right:7, bottom:7}}
                        />
                    </View>
                    <View style={{position:'absolute', alignSelf:'center', top:153}}>
                         <Text style={{fontFamily:"SemiBold",fontSize:16, alignSelf:'center', fontWeight:'bold'}}>Add your picture</Text>
                         
                         
                         <TextInput
                            style={{
                                borderWidth:2,
                                borderColor:'#dddddd',
                                borderTopLeftRadius:20,
                                borderBottomLeftRadius:20,
                                borderBottomRightRadius:20,
                                borderTopRightRadius:20,
                                marginTop:15,
                                paddingTop:5,
                                paddingBottom:5,
                                paddingLeft:10,
                                paddingRight:10,
                            
                            }}
                            placeholder="First name"
                            keyboardType="default"
                        />

                        <TextInput
                            style={{
                                borderWidth:2,
                                borderColor:'#dddddd',
                                borderTopLeftRadius:20,
                                borderBottomLeftRadius:20,
                                borderBottomRightRadius:20,
                                borderTopRightRadius:20,
                                marginTop:15,
                                paddingTop:5,
                                paddingBottom:5,
                                paddingLeft:10,
                                paddingRight:10,
                            
                            }}
                            placeholder="Last name"
                            keyboardType="default"
                        />

                        <TextInput
                            style={{
                                borderWidth:2,
                                borderColor:'#dddddd',
                                borderTopLeftRadius:20,
                                borderBottomLeftRadius:20,
                                borderBottomRightRadius:20,
                                borderTopRightRadius:20,
                                marginTop:15,
                                paddingTop:5,
                                paddingBottom:5,
                                paddingLeft:10,
                                paddingRight:10,
                            
                            }}
                            placeholder="Username"
                            keyboardType="default"
                        />

                        <TextInput
                            style={{
                                borderWidth:2,
                                borderColor:'#dddddd',
                                borderTopLeftRadius:20,
                                borderBottomLeftRadius:20,
                                borderBottomRightRadius:20,
                                borderTopRightRadius:20,
                                marginTop:15,
                                paddingTop:5,
                                paddingBottom:5,
                                paddingLeft:10,
                                paddingRight:10,
                            
                            }}
                            placeholder="Birthday"
                            keyboardType="default"
                        />

                        <TextInput
                            style={{
                                borderWidth:2,
                                borderColor:'#dddddd',
                                borderTopLeftRadius:20,
                                borderBottomLeftRadius:20,
                                borderBottomRightRadius:20,
                                borderTopRightRadius:20,
                                marginTop:15,
                                paddingTop:5,
                                paddingBottom:5,
                                paddingLeft:10,
                                paddingRight:10,
                            
                            }}
                            placeholder="Mobile number"
                            keyboardType="numeric"
                        />

                        <TextInput
                            style={{
                                borderWidth:2,
                                borderColor:'#dddddd',
                                borderTopLeftRadius:20,
                                borderBottomLeftRadius:20,
                                borderBottomRightRadius:20,
                                borderTopRightRadius:20,
                                marginTop:15,
                                paddingTop:5,
                                paddingBottom:5,
                                paddingLeft:10,
                                paddingRight:10,
                            
                            }}
                            placeholder="Email"
                            keyboardType="email-address"
                        />

                        <TextInput
                            secureTextEntry={true}
                            style={{
                                borderWidth:2,
                                borderColor:'#dddddd',
                                borderTopLeftRadius:20,
                                borderBottomLeftRadius:20,
                                borderBottomRightRadius:20,
                                borderTopRightRadius:20,
                                marginTop:15,
                                paddingTop:5,
                                paddingBottom:5,
                                paddingLeft:10,
                                paddingRight:10,
                            
                            }}
                            placeholder="Password"
                            keyboardType="default"
                        />

                        

                        <Text    
                        onPress={()=>navigate('ChooseMedium')}      
                        style={{
                            borderTopLeftRadius:30,
                            borderBottomLeftRadius:30,
                            borderBottomRightRadius:30,
                            borderTopRightRadius:30,
                            marginHorizontal:'20%',
                            marginTop:15,
                            backgroundColor:'#6C1717',
                            padding:15,
                            color:'#FAC17D',
                            textAlign:'center',
                            fontFamily:'SemiBold',
                            fontWeight:'bold'
                        
                        }}>Sign up</Text>

                        <Text
                        style={{
                            textAlign:'center',
                            marginTop:10,
                            fontWeight:'bold'
                        }}>Don’t have an account? 
                            <Text 
                            onPress={()=>navigate('Login')}  
                            style={{color: '#6C1717'
                            }}> Log in </Text> 
                        </Text>
                        
                    </View>
                    
                
            </View>
        )
    }
}