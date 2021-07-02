import React from 'react';
import {Text,View,Image, TextInput, Icon, TouchableOpacity} from 'react-native';

export default class MakeItOfficial extends React.Component{


    
   
    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={{backgroundColor:"#721003",height:"100%"}}>
                
                    <Image
                    source={require('../images/logorec.png')}
                    style={{width: 68,height:53,marginTop: 7, marginLeft: 8, position:'absolute'}}
                    />

                    
                    <View style={{width:'100%',height:'100%', justifyContent:'center'}}>
                    <View style={{width:'90%',  backgroundColor:'#FAC180', padding:20, alignSelf:'center',borderTopLeftRadius:30, borderTopRightRadius:30, borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <Text style={{fontFamily:"Pattaya-Regular",fontSize:35, alignSelf:'center', color:"#333", textAlign:'center'}}>Let’s make it official</Text>
                        <Text style={{fontFamily:"Montserrat-SemiBold",fontSize:16, alignSelf:'center', color:"#000", textAlign:'justify',marginTop:40}}>Verified Creators have the ability to live stream video, monetize premium content, and confirm their likeness for Admirers. Selecting “Okay” presents steps to verification.
</Text>
                        <View style={{flexDirection:'row', flexWrap:'wrap',}}>
                            <Text    
                            onPress={()=>navigate('CreatorVerification')}      
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
                                padding:10,
                                fontSize:16,
                                marginHorizontal:5,
                                color:'#6C1717',
                                textAlign:'center',
                                fontFamily:'Montserrat-SemiBold',
                            }}>Okay</Text>
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
                                padding:10,
                                fontSize:16,
                                marginHorizontal:5,
                                color:'#6C1717',
                                textAlign:'center',
                                fontFamily:'Montserrat-SemiBold',
                            
                            }}>Maybe Later</Text>
                        </View>
                    </View>
                    </View>
                
            </View>
        )
    }
}