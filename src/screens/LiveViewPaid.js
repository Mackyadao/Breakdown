import React, { useState }  from 'react';
import { Touchable } from 'react-native';
import { ScrollView } from 'react-native';
import {Text,View,Image, TextInput, Icon, StyleSheet,Dimensions, FlatList,SafeAreaView,TouchableOpacity,} from 'react-native';
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";

const SCREEN_WIDTH = Dimensions.get('window').width;
export default class LiveViewPaid extends React.Component{
    state = {
        search: '',
      };
      updateSearch = (search) => {
        this.setState({ search });
      };

     
    
     
    render(){
        
          
        const { search } = this.state;
        const {navigate} = this.props.navigation

        


        return(
            <View style={{backgroundColor:"#FFF",height:"100%"}}>
                    <Image
                        source={require('../images/blackkeyslive.png')}
                        style={{width:'100%', height:'100%',}}
                    /> 
                    <View
                        style={{width:'100%', height:'100%', position:'absolute'}}>
                        <View style={{flexDirection:'row', flexWrap:'wrap',margin:10}}>
                            <View style={{marginLeft:10,flex:1}}>
                                <Image
                                    source={require('../images/Vector2.png')}
                                    style={{width:25, height:25,}}
                                />
                            </View>
                             
                            <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                                <Image
                                    source={require('../images/Ellipse110.png')}
                                    style={{width:14, height:14,marginLeft:10,alignSelf:'center'}}
                                /> 
                                <Text style={{textAlign:'right', fontFamily:'Montserrat-SemiBold',color:'#fff',fontSize:18}}>Live</Text>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={{justifyContent:'center', height:'100%'}}>
                            <Image
                                source={require('../images/play1.png')}
                                style={{width:95, height:85,alignSelf:'center',marginBottom:100}}
                            /> 
                        </TouchableOpacity>
                        <View style={{height:110,width:'100%', position:'absolute', bottom:0, padding:10}}>
                            <Text style={{fontFamily:'Montserrat-SemiBold', color:'#fff'}}>
                                @blackkeys V
                            </Text>
                            <Text style={{fontFamily:'Montserrat-Regular', color:'#fff'}}>
                            Learn some piano basics
                            </Text>
                        </View>
                    </View>
               
            </View>

        )

        
    }

    
}