import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import colors from '../../constants/colors';

const ChatGalleryTopNavbar = props => {
    const {chatStream} = props;

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <View style={styles.row}>
                    <View style={styles.bucketTagContainer}>
                        <Text
                            style={
                                styles.bucketTag
                            }>{`${chatStream.bucketTag}:`}</Text>

                        <View style={styles.officialBadge}>
                            <Text style={styles.officialBadgeText}>
                                Official
                            </Text>
                        </View>
                    </View>

                    <View style={styles.ellipsisMenuContainer}>
                        <Image
                            style={styles.ellipsisMenu}
                            source={require('../../assets/icons/ellipsis-menu-black-3x.png')}
                        />
                    </View>
                </View>

                <View style={styles.topicContainer}>
                    <Text style={styles.topic}>{`"${chatStream.topic}"`}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingBottom: 30,
        backgroundColor: colors.secondary,
    },
    row: {
        flexDirection: 'row',
    },
    titleContainer: {},
    bucketTagContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 30,
        marginLeft: 30,
    },
    bucketTag: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.dark,
    },
    officialBadge: {
        marginLeft: 'auto',
        paddingHorizontal: 8,
        backgroundColor: 'rgba(255,255,255,0.7)',
        borderRadius: 5,
    },
    officialBadgeText: {
        color: colors.dark,
        fontWeight: 'bold',
    },
    topicContainer: {
        marginTop: 5,
        width: '100%',
    },
    topic: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    ellipsisMenuContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: 45,
    },
    ellipsisMenu: {
        marginRight: 15,
        height: '100%',
        width: 6,
        resizeMode: 'contain',
    },
});

export default ChatGalleryTopNavbar;
