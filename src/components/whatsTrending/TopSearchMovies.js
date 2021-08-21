import React from 'react';
import {
    Text,
    View,
    Image,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import {withNavigation} from 'react-navigation';

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

const TopSearchMovies = props => {
    const {navigation} = props;

    const renderItem = ({item}) => (
        <View style={styles.containerGridLeft}>
            <TouchableOpacity
                style={{width: '100%', height: '100%'}}
                onPress={() => {
                    navigation.navigate('MovieDetailsPage');
                }}>
                <Image
                    source={require('../../images/Rectangle32.png')}
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
};

const styles = StyleSheet.create({
    containerGridLeft: {
        width: 115,
        height: 151,
        margin: 10,
        alignItems: 'center',
        flex: 1,
        margin: 3,
    },
});

export default withNavigation(TopSearchMovies);
