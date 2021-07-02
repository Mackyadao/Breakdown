import React from 'react';
import {Text,View,Image, TextInput, Icon, TouchableOpacity} from 'react-native';

export default class RTidentification2 extends React.Component{


    
   
    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={{backgroundColor:"#721003",height:"100%"}}>
                
                    <Image
                    source={require('../images/logorec.png')}
                    style={{width: 68,height:53,marginTop: 7, marginLeft: 8, position:'absolute'}}
                    />

                    <View style={{width:'80%',  backgroundColor:'#FAC180', alignSelf:'center', marginTop: 100, padding:20,borderTopLeftRadius:30, borderTopRightRadius:30, borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <Text style={{fontFamily:"Pattaya-Regular",fontSize:35, alignSelf:'center', color:"#333", textAlign:'center'}}>Are you a{"\n"}Creator?</Text>
                        <View style={{flexDirection:'row', flexWrap:'wrap',}}>
                            <Text    
                            onPress={()=>navigate('RTidentification2')}      
                            style={{
                                borderTopLeftRadius:30,
                                borderBottomLeftRadius:30,
                                borderBottomRightRadius:30,
                                borderTopRightRadius:30,
                                borderWidth:2,
                                borderColor:'#aaa',
                                marginTop:15,
                                flex:1,
                                backgroundColor:'#6C1717',
                                padding:15,
                                fontSize:18,
                                marginHorizontal:5,
                                color:'#FFFFFF',
                                textAlign:'center',
                                fontFamily:'Montserrat-SemiBold',
                            }}>Yes</Text>
                            <Text    
                            onPress={()=>navigate('Home')}      
                            style={{
                                borderTopLeftRadius:30,
                                borderBottomLeftRadius:30,
                                borderBottomRightRadius:30,
                                borderTopRightRadius:30,
                                borderWidth:2,
                                borderColor:'#aaa',
                                marginTop:15,
                                flex:1,
                                backgroundColor:'#FFFFFF',
                                padding:15,
                                fontSize:18,
                                marginHorizontal:5,
                                color:'#6C1717',
                                textAlign:'center',
                                fontFamily:'Montserrat-SemiBold',
                            
                            }}>No</Text>
                        </View>
                    </View>

                    <View style={{width:'90%',  backgroundColor:'#FAC180', alignSelf:'center', marginTop: 50, padding:20,borderTopLeftRadius:30, borderTopRightRadius:30, borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <Text style={{fontFamily:"Pattaya-Regular",fontSize:35, alignSelf:'center', color:"#333", textAlign:'center'}}>Would you like to be considered for our Rising Talent pool?</Text>
                        <Text style={{fontFamily:"Montserrat-SemiBold",fontSize:16, alignSelf:'center', color:"#000", textAlign:'justify'}}>If your submission is approved, you will be featured with our unique pool of talent on the rise, for improved visibility.</Text>
                        <View style={{flexDirection:'row', flexWrap:'wrap',}}>
                            <Text    
                            onPress={()=>navigate('MakeItOfficial')}      
                            style={{
                                borderTopLeftRadius:30,
                                borderBottomLeftRadius:30,
                                borderBottomRightRadius:30,
                                borderTopRightRadius:30,
                                borderWidth:2,
                                borderColor:'#aaaaaa',
                                marginTop:15,
                                flex:1,
                                backgroundColor:'#FFFFFF',
                                padding:15,
                                fontSize:18,
                                marginHorizontal:5,
                                color:'#6C1717',
                                textAlign:'center',
                                fontFamily:'Montserrat-SemiBold',
                            }}>Yes</Text>
                            <Text    
                            onPress={()=>navigate('MakeItOfficial')}      
                            style={{
                                borderTopLeftRadius:30,
                                borderBottomLeftRadius:30,
                                borderBottomRightRadius:30,
                                borderTopRightRadius:30,
                                borderWidth:2,
                                borderColor:'#aaa',
                                marginTop:15,
                                flex:1,
                                backgroundColor:'#FFFFFF',
                                padding:15,
                                fontSize:18,
                                marginHorizontal:5,
                                color:'#6C1717',
                                textAlign:'center',
                                fontFamily:'Montserrat-SemiBold',
                            
                            }}>No</Text>
                        </View>
                    </View>
                    
                
            </View>
        )
    }
}