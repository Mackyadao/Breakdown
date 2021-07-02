import React, { useState }  from 'react';
import { Touchable } from 'react-native';
import { ScrollView } from 'react-native';
import {Text,View,Image, TextInput, Icon, StyleSheet,Dimensions, FlatList,SafeAreaView,TouchableOpacity,} from 'react-native';
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";

const SCREEN_WIDTH = Dimensions.get('window').width;
export default class LiveView extends React.Component{
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
                        source={require('../images/sunnysydlive.png')}
                        style={{width:'100%', height:'100%',}}
                    /> 
                    <View
                        style={{width:'100%', height:'100%', position:'absolute'}}>
                        <View style={{flexDirection:'row', flexWrap:'wrap',margin:10}}>
                            <Text style={{fontFamily:'Montserrat-SemiBold',color:'#fff',fontSize:18}}>12h</Text>
                            <Image
                                source={require('../images/timedot.png')}
                                style={{width:25, height:25,marginLeft:10}}
                            /> 
                            <Text style={{textAlign:'right',flex:1, fontFamily:'Montserrat-SemiBold',color:'#fff',fontSize:18}}>5:00</Text>
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
                                @sunnysyd V
                            </Text>
                            <Text style={{fontFamily:'Montserrat-Regular', color:'#fff'}}>
                            Let’s have a listening party!
                            </Text>
                        </View>
                    </View>
               
            </View>

        )

        
    }

    
}