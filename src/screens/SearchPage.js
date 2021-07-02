import React, { useState }  from 'react';
import { Touchable } from 'react-native';
import { ScrollView } from 'react-native';
import {Text,View,Image, TextInput, Icon, StyleSheet,Dimensions, FlatList,SafeAreaView,TouchableOpacity,} from 'react-native';
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";

const SCREEN_WIDTH = Dimensions.get('window').width;
export default class SearchPage extends React.Component{
    state = {
        search: '',
      };
      updateSearch = (search) => {
        this.setState({ search });
      };

     
    
     
    render(){
        const {navigate} = this.props.navigation
        return(
            <View>
                <TouchableOpacity 
                onPress={()=>navigate('Home')}
                style={{ left:14, top:21}}>
                    <Image
                        source={require('../images/Arrow1.png')}
                        style={{width: 34,height:34,}}
                    />
                </TouchableOpacity>
                
                <Text style={{marginTop:25, alignSelf:'center', fontSize:29, fontFamily:'Pattaya-Regular'}}>
                    Search|Create a Chat Gallery
                </Text>
                <Text style={{left:13, marginTop:25, fontSize:20, fontFamily:'Roboto-Bold'}}>
                    Channel
                </Text>
                <View style={{flexDirection:'row', flexWrap:'wrap', marginTop: 3, left:13,}}>
                    <TouchableOpacity style={{ borderWidth:1, padding: 10, borderBottomLeftRadius:25, borderBottomRightRadius:25, borderTopLeftRadius:25, borderTopRightRadius:25}}>
                        <Text style={{ fontSize:20, fontFamily:'Roboto-Bold'}}>Movies</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ marginLeft:5, borderWidth:1, paddingHorizontal:18, paddingVertical:10, borderBottomLeftRadius:25, borderBottomRightRadius:25, borderTopLeftRadius:25, borderTopRightRadius:25}}>
                        <Text style={{ fontSize:20, fontFamily:'Roboto-Bold'}}>TV</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginLeft:5, borderWidth:1, padding: 10, borderBottomLeftRadius:25, borderBottomRightRadius:25, borderTopLeftRadius:25, borderTopRightRadius:25}}>
                        <Text style={{ fontSize:20, fontFamily:'Roboto-Bold'}}>Books</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{left:13, marginTop:25, fontSize:20, fontFamily:'Roboto-Bold'}}>
                Search For Movie Title
                </Text>
                <View  style={{flexDirection:'row', flexWrap:'wrap',marginTop:10 }}>
                <TouchableOpacity
                    onPress={()=>navigate('SearchPage')} 
                    style={{flex:1,flexDirection:'row', marginLeft:10, flexWrap:'wrap',}}>
                        <View
                            style={{alignSelf:'center',padding:12, backgroundColor:'#ddd',borderTopLeftRadius:10, borderBottomLeftRadius:10,}}>
                               <Image
                                source={require('../images/search1.png')}
                                style={{width: 15,height:13,  }}
                                />
                       </View>
                        <TextInput   
                            placeholder='Add movie title here'
                            style={{
                                flex:1,
                                borderWidth:2,
                                borderColor:'#dddddd',
                                paddingTop:1,
                                paddingBottom:1,
                                paddingLeft:10,
                                paddingRight:10,
                                marginRight:10,
                                backgroundColor:'#ddd',
                                color:'#000',
                                borderBottomRightRadius:10,
                                borderTopRightRadius:10,
                                fontFamily:'Montserrat-SemiBold',
                                textAlign:'center',
                                textAlignVertical:'center',
                                
                                
                            }}
                                
                            />
                            </TouchableOpacity>
                </View>
            </View>
        )

        
    }

    
}