/***
 Use this component inside your React Native Application.
 A scrollable list with different item type
 */
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Text, Dimensions, Image} from 'react-native';
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';

const ViewTypes = {
    FULL: 0,
    HALF_LEFT: 1,
    HALF_RIGHT: 2,
};

let containerCount = 0;

/***
 * To test out just copy this component and render in you root component
 */
export default class TopSearchTvSeries extends React.Component {
    constructor(args) {
        super(args);

        let {width} = Dimensions.get('window');

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
                return ViewTypes.HALF_LEFT;
            },
            (type, dim) => {
                switch (type) {
                    case ViewTypes.HALF_LEFT:
                        dim.width = 115;
                        dim.height = 161;
                        break;

                    default:
                        dim.width = 0;
                        dim.height = 0;
                }
            },
        );

        this._rowRenderer = this._rowRenderer.bind(this);

        //Since component should always render once data has changed, make data provider part of the state

        this.state = {
            dataProvider: dataProvider.cloneWithRows(this._generateArray(10)),
        };
    }

    _generateArray(n) {
        const fakeData = [];
        for (let i = 1; i < 11; i += 1) {
            fakeData.push({
                type: 'NORMAL',
                item: {
                    id: i,
                    image: 'faker.image.avatar()',
                    title: 'sample title ' + i,
                    description: 'faker.random.words(5)',
                },
            });
        }
        return fakeData;
    }

    //Given type and data return the view component
    _rowRenderer(type, data) {
        //You can return any view here, CellContainer has no special significance
        switch (type) {
            case ViewTypes.HALF_LEFT:
                return (
                    <View style={styles.containerGridLeft}>
                        <TouchableOpacity
                            style={{width: '100%', height: '100%'}}>
                            <Image
                                source={require('../../images/Watchmen1.png')}
                                style={{
                                    width: 95,
                                    height: 141,
                                    position: 'absolute',
                                    bottom: 10,
                                    left: 20,
                                }}
                            />
                            <Text
                                style={{
                                    position: 'absolute',
                                    bottom: -15,
                                    left: 0,
                                    fontFamily: 'Roboto-Medium',
                                    fontSize: 90,
                                    textShadowColor: '#fff',
                                    textShadowRadius: 10,
                                }}>
                                {data.item.id}
                            </Text>
                        </TouchableOpacity>
                    </View>
                );

            default:
                return null;
        }
    }

    render() {
        return (
            <RecyclerListView
                style={{backgroundColor: '#fff'}}
                isHorizontal={true}
                layoutProvider={this._layoutProvider}
                dataProvider={this.state.dataProvider}
                rowRenderer={this._rowRenderer}
            />
        );
    }
}
const styles = {
    container: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#00a1f1',
    },
    containerGridLeft: {
        margin: 10,
        alignItems: 'center',
        flex: 1,
        margin: 3,
    },
};
