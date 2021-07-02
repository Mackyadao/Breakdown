import React, { Component } from "react";
import { View, Text, Dimensions,Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";

const ViewTypes = {
    FULL: 0,
    HALF_LEFT: 1,
    HALF_RIGHT: 2
};

let containerCount = 0;

class CellContainer extends React.Component {
    constructor(args) {
        super(args);
        this._containerId = containerCount++;
    }
    render() {
        return <View {...this.props}>{this.props.children}<Text>Cell Id: {this._containerId}</Text></View>;
    }
}

/***
 * To test out just copy this component and render in you root component
 */
export default class HomeFeed extends React.Component {
    constructor(args) {
        super(args);

        let { width } = Dimensions.get("window");

        //Create the data provider and provide method which takes in two rows of data and return if those two are different or not.
        //THIS IS VERY IMPORTANT, FORGET PERFORMANCE IF THIS IS MESSED UP
        let dataProvider = new DataProvider((r1, r2) => {
            return r1 !== r2;
        });

        //Create the layout provider
        //First method: Given an index return the type of item e.g ListItemType1, ListItemType2 in case you have variety of items in your list/grid
        //Second: Given a type and object set the exact height and width for that type on given object, if you're using non deterministic rendering provide close estimates
        //If you need data based check you can access your data provider here
        //You'll need data in most cases, we don't provide it by default to enable things like data virtualization in the future
        //NOTE: For complex lists LayoutProvider will also be complex it would then make sense to move it to a different file
        this._layoutProvider = new LayoutProvider(
            index => {
                return ViewTypes.FULL;
            },
            (type, dim) => {
                switch (type) {
                    case ViewTypes.FULL:
                        dim.width = width;
                        dim.height = 100;
                        break;
                    default:
                        dim.width = 0;
                        dim.height = 0;
                }
            }
        );

        this._rowRenderer = this._rowRenderer.bind(this);

        //Since component should always render once data has changed, make data provider part of the state
        this.state = {
            dataProvider: dataProvider.cloneWithRows(this._generateArray(10))
        };
    }

    _generateArray(n) {
        let arr = new Array(n);
        for (let i = 0; i < n; i++) {
            arr[i] = i;
        }
        return arr;
    }

    //Given type and data return the view component
    _rowRenderer(type, data) {
        //You can return any view here, CellContainer has no special significance
        switch (type) {
            
            case ViewTypes.FULL:
                return (
                    <TouchableOpacity style={{margin:10,backgroundColor:'#fff',flexWrap:'wrap',flexDirection:'row', borderTopLeftRadius:10, borderTopRightRadius:10, borderBottomRightRadius:10, borderBottomLeftRadius:10,}}>
                    <View style={{paddingLeft:10,paddingRight:10,paddingTop:5,paddingBottom:5,flex:1}}>
                            <View style={{flexWrap:'wrap',flexDirection:'row'}}>
                                <Image
                                source={require('../images/Vector.png')}
                                style={{width: 20,height:20,  }}
                                /> 
                                <Text style={{fontFamily:'Montserrat-SemiBold',flex:1}}> @MarvelStudios V</Text>
                                <Image
                                source={require('../images/film-reel5.png')}
                                style={{ width:22,height:22 }}
                                /> 
                            </View>
                            <View style={{flexWrap:'wrap',flexDirection:'row'}}>
                                
                                <Text style={{fontFamily:'Montserrat-SemiBold',fontSize:16, flex:1}}>Behind the Scenes:</Text>
                                <Text style={{fontFamily:'Montserrat-Medium',fontSize:16}}> “Sample Data {data}”</Text>
                            </View>
                        </View> 
                        <Image
                            source={require('../images/WakandaForever.png')}
                            style={{ height:'100%',alignSelf:'flex-end',borderTopRightRadius:10, borderBottomRightRadius:10, }}
                            /> 
                    </TouchableOpacity>
                );
            default:
                return null;
        }
    }

    render() {
        return <RecyclerListView 
        style={{backgroundColor:'#ddd'}}
        layoutProvider={this._layoutProvider} 
        dataProvider={this.state.dataProvider} 
        rowRenderer={this._rowRenderer} />;
    }
}
const styles = {
    container: {
        justifyContent: "space-around",
        alignItems: "center",
        flex: 1,
        backgroundColor: "#00a1f1"
    },
    containerGridLeft: {
        justifyContent: "space-around",
        alignItems: "center",
        flex: 1,
        backgroundColor: "#ffbb00"
    },
    containerGridRight: {
        justifyContent: "space-around",
        alignItems: "center",
        flex: 1,
        backgroundColor: "#7cbb00"
    }
};