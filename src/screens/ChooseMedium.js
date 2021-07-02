import React from 'react';
import {Text,View,Image, TextInput, Icon, TouchableOpacity} from 'react-native';

export default class ChooseMedium extends React.Component{


    state={
        toggle1:false
    }
    state={
        toggle2:false
    }
    state={
        toggle3:false
    }

   
    render(){
        const {navigate} = this.props.navigation
        const bgColor = this.state.toggle1?"#FFFFFF":"#FAC17D"
        const bgColor2 = this.state.toggle2?"#FFFFFF":"#FAC17D"
        const bgColor3 = this.state.toggle3?"#FFFFFF":"#FAC17D"
        return(
            <View style={{backgroundColor:"#721003",height:"100%"}}>
                
                    <Image
                    source={require('../images/logorec.png')}
                    style={{width: 68,height:53,marginTop: 7, marginLeft: 8, position:'absolute'}}
                    />

                    <View style={{position:'absolute', alignSelf:'center', top:50}}>
                         <Text style={{fontFamily:"Pattaya-Regular",fontSize:40, alignSelf:'center', color:"#FFF", textAlign:'center'}}>Choose your{"\n"}mediums</Text>
                         
                         <TouchableOpacity onPress={()=>this.setState({toggle1:!this.state.toggle1})} style={{alignItems:'center', margin:5}}>
                             <View style={{width:126, height:126, padding:4, borderWidth:2, borderColor:bgColor, borderTopLeftRadius:100, borderTopRightRadius:100, borderBottomLeftRadius:100, borderBottomRightRadius:100}}>
                                <View style={{backgroundColor:bgColor, width:'100%', height:'100%', padding:15, borderTopLeftRadius:100, borderTopRightRadius:100, borderBottomLeftRadius:100, borderBottomRightRadius:100}}>
                                    <Image source={require('../images/image7.png')} style={{width:'100%', height:'100%'}}/>
                                </View>
                             </View>
                             <Text style={{fontSize:24, fontFamily:'Montserrat-SemiBold', color:'#fff'}}>Movies</Text>
                         </TouchableOpacity>

                         <TouchableOpacity onPress={()=>this.setState({toggle2:!this.state.toggle2})} style={{alignItems:'center', margin:5}}>
                             <View style={{width:126, height:126, padding:4, borderWidth:2, borderColor:bgColor2, borderTopLeftRadius:100, borderTopRightRadius:100, borderBottomLeftRadius:100, borderBottomRightRadius:100}}>
                                <View style={{backgroundColor:bgColor2, width:'100%', height:'100%', padding:15, borderTopLeftRadius:100, borderTopRightRadius:100, borderBottomLeftRadius:100, borderBottomRightRadius:100}}>
                                    <Image source={require('../images/image10.png')} style={{width:'100%', height:'100%'}}/>
                                </View>
                             </View>
                             <Text style={{fontSize:24, fontFamily:'Montserrat-SemiBold', color:'#fff'}}>TV Series</Text>
                         </TouchableOpacity>

                         <TouchableOpacity onPress={()=>this.setState({toggle3:!this.state.toggle3})} style={{alignItems:'center', margin:5}}>
                             <View style={{width:126, height:126, padding:4, borderWidth:2, borderColor:bgColor3, borderTopLeftRadius:100, borderTopRightRadius:100, borderBottomLeftRadius:100, borderBottomRightRadius:100}}>
                                <View style={{backgroundColor:bgColor3, width:'100%', height:'100%', padding:15, borderTopLeftRadius:100, borderTopRightRadius:100, borderBottomLeftRadius:100, borderBottomRightRadius:100}}>
                                    <Image source={require('../images/books1.png')} style={{width:'100%', height:'100%'}}/>
                                </View>
                             </View>
                             <Text style={{fontSize:24, fontFamily:'Montserrat-SemiBold', color:'#fff'}}>Books</Text>
                         </TouchableOpacity>

                        <View style={{flexDirection:'row', flexWrap:'wrap', width:250,}}>
                            <Text    
                            onPress={()=>navigate('RTidentification1')}      
                            style={{
                                borderTopLeftRadius:30,
                                borderBottomLeftRadius:30,
                                borderBottomRightRadius:30,
                                borderTopRightRadius:30,
                                marginTop:15,
                                flex:1,
                                backgroundColor:'#FAC17D',
                                padding:10,
                                fontSize:16,
                                marginHorizontal:5,
                                color:'#6C1717',
                                textAlign:'center',
                                fontFamily:'Montserrat-SemiBold',
                            }}>All of them</Text>
                            <Text    
                            onPress={()=>navigate('RTidentification1')}      
                            style={{
                                borderTopLeftRadius:30,
                                borderBottomLeftRadius:30,
                                borderBottomRightRadius:30,
                                borderTopRightRadius:30,
                                marginTop:15,
                                flex:1,
                                backgroundColor:'#FAC17D',
                                padding:10,
                                fontSize:16,
                                marginHorizontal:5,
                                color:'#6C1717',
                                textAlign:'center',
                                fontFamily:'Montserrat-SemiBold',
                            
                            }}>Done</Text>
                        </View>
                        
                    </View>
                    
                
            </View>
        )
    }
}