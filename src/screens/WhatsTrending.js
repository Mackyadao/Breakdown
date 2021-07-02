import React, { useState }  from 'react';
import { Touchable } from 'react-native';
import { ScrollView } from 'react-native';
import {Text,View,Image, TextInput, Icon, StyleSheet,Dimensions, FlatList,SafeAreaView,TouchableOpacity,} from 'react-native';
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";
import TopSearchBooks from './TopSearchBooks';
import TopSearchMusic from './TopSearchMusic';
import TopSearchTvSeries from './TopSearchTvSeries';

const SCREEN_WIDTH = Dimensions.get('window').width;
export default class WhatsTrending extends React.Component{
    state = {
        search: '',
      };
      updateSearch = (search) => {
        this.setState({ search });
      };

     
    
     
    render(){
        const fakeData = [];
             for(let i = 1; i < 11; i+= 1) {
             fakeData.push({
                 type: 'NORMAL',
                 item: {
                 id: i,
                 image: "faker.image.avatar()",
                 title: "sample title " + i,
                 description: "faker.random.words(5)",
                 },
             });
             };

        const {navigate} = this.props.navigation
        const styles = StyleSheet.create({
            SearchBar: {
              flex: 1,
              padding: 24,
              backgroundColor: "#fff"
            },
            NavBarTouchOpa:{
                flex:1,
                justifyContent:'center'

            }, 
            NavBarIcons:{
                height:30,
                width:30,
                alignSelf:'center'
            },
            ProfileBtn:{
                width: 40,
                height:40, 
                
            },
            ProfileBtnContainer:{
                marginLeft: 12
            },
            containerGridLeft: {
                width:115, 
                height:151,
                margin:10,
                alignItems: "center",
                flex: 1,
                margin:3,
                
            }

          });

          const TopSearchMovies = () => {
            const renderItem = ({ item }) => (
                <View style={styles.containerGridLeft}>
                    <TouchableOpacity style={{width:'100%', height:'100%'}}
                    onPress={()=>{navigate('MovieDetailsPage')}}>
                        <Image
                        source={require('../images/Rectangle32.png')}
                        style={{width: 95,height:141, position:'absolute', bottom:10,left:20 }}
                        />
                        <Text style={{position:"absolute", bottom:-15, left:0, fontFamily:"Roboto-Medium", fontSize: 90, textShadowColor:'#fff', textShadowRadius:10,}}>
                        {item.item.id}
                        </Text>
                    </TouchableOpacity>
        
        
                </View>
            );
        
          return (
            <SafeAreaView>
              <FlatList
                horizontal={true}
                data={fakeData}
                renderItem={renderItem}
              />
            </SafeAreaView>
          );
        }


        return(
            <View>
                <View style={{flexDirection:'row', flexWrap:'wrap',  }}>
                    <View style={{marginTop:40,marginLeft:23}}>
                        <TouchableOpacity 
                            style={styles.ProfileBtnContainer}
                            onPress={()=>navigate('Home')} >
                            <Image
                            source={require('../images/Ellipse59.png')}
                            style={{width:40, height:40}}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity 
                        onPress={()=>navigate('Home')}
                        style={{ left:14, top:21}}>
                            <Image
                                source={require('../images/Arrow1.png')}
                                style={{width: 34,height:34,}}
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={{flex:1, fontFamily:'Oswald-Bold', textAlign:'center', fontSize:42, marginTop:25}}>
                        What's{"\n"}Trending
                    </Text>
                    <Image
                            
                            source={require('../images/Ellipse66.png')}
                            style={{width:124, height:155, aspectRatio:1, position:'absolute', right:-20, top:0}}
                            />
                    <Image
                            source={require('../images/taxi3931.png')}
                            style={{width:89, height:86, marginTop:39}}
                            />

                </View>
                <View style={{width:'100%', height:51, backgroundColor:'#000', flexDirection:'row', flexWrap:'wrap', alignContent:'center', alignItems:'center'}}>
                    <Text style={{fontFamily:'Roboto-Bold', color:'#fff',marginLeft:13}}>Check out our partners</Text>
                    <Image
                            source={require('../images/ptc.png')}
                            style={{width:180, height:40, marginLeft:10}}
                            />
                </View>


                
                <ScrollView style={{backgroundColor:'#fff', paddingBottom:10,}}>
                <Text 
                    style={{margin:10, fontFamily:'Roboto-Bold', fontSize:18}}>
                        Top 10 Searched Movies</Text>
                <View style={{width:'100%',height:151}}>
                     <TopSearchMovies/>
                </View>
                <Text 
                    style={{margin:10, fontFamily:'Roboto-Bold', fontSize:18}}>
                    Top 10 Searched TV Series</Text>
                <View style={{width:'100%',height:151}}>
                     <TopSearchTvSeries/>
                </View>
                <Text 
                    style={{margin:10, fontFamily:'Roboto-Bold', fontSize:18}}>
                    Top 10 Searched Books</Text>
                <View style={{width:'100%',height:151}}>
                     <TopSearchBooks/>
                </View>
                <Text 
                    style={{margin:10, fontFamily:'Roboto-Bold', fontSize:18}}>
                    Top 10 Searched Music</Text>
                <View style={{width:'100%',height:151}}>
                <TopSearchMusic/>
                </View>
                
                <View style={{width:'100%',height:220}}>
                
                </View>
                </ScrollView>
                
                
            </View>
            
        )
        

        
    }

    
}