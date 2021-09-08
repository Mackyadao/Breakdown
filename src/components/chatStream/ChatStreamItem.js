import React from 'react';
import {View, Text, Image, Pressable, StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';

import colors from '../../constants/colors';

const ChatStreamItem = props => {
    const {chatStream, navigation} = props;

    return (
        <Pressable
            style={styles.card}
            onPress={() => navigation.navigate('ChatGallery', {chatStream})}>
            <View style={styles.cardLeft}>
                <View style={styles.cardHeader}>
                    <View style={styles.cardHeaderLeft}>
                        <Image
                            source={require('../../assets/icons/chat-stream-user-icon-3x.png')}
                            style={styles.userIcon}
                        />
                        <Text
                            style={
                                styles.username
                            }>{` @${chatStream.owner}`}</Text>
                        <Text style={styles.verifiedContentCreatorBadge}>
                            V
                        </Text>
                        <View style={styles.officialBadge}>
                            <Text style={styles.officialBadgeText}>
                                Official
                            </Text>
                        </View>
                    </View>
                    <View style={styles.cardHeaderRight}>
                        <Image
                            source={chatStream.category.icon}
                            style={styles.categoryIcon}
                        />

                        <Image
                            source={require('../../assets/icons/ellipsis-menu-black-3x.png')}
                            style={styles.ellipsisMenu}
                        />
                    </View>
                </View>
                <View style={styles.cardBody}>
                    <Text style={styles.cardBodyContentTextBold}>
                        {`${chatStream.bucketTag}: `}
                    </Text>
                    <Text style={styles.cardBodyContentText}>
                        {`"${chatStream.topic}"`}
                    </Text>
                </View>
            </View>

            <View style={styles.cardImageContainer}>
                <Image
                    source={chatStream.coverPhoto}
                    style={styles.cardImage}
                />
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    card: {
        marginTop: 5,
        marginHorizontal: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderRadius: 10,
    },
    cardLeft: {
        flex: 1,
        paddingTop: 2,
        paddingLeft: 8,
        paddingRight: 2,
        paddingBottom: 5,
    },
    cardImageContainer: {
        height: 'auto',
        width: 115,
    },
    cardImage: {
        flex: 1,
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    cardHeader: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardHeaderLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userIcon: {
        marginTop: 4,
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    username: {
        marginLeft: 4,
        fontSize: 12,
        fontFamily: 'Oswald-SemiBold',
    },
    verifiedContentCreatorBadge: {
        marginLeft: 3,
        fontSize: 11,
        fontFamily: 'Oswald-SemiBold',
        color: colors.secondary,
    },
    officialBadge: {
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: 6,
        borderColor: colors.neutral,
        paddingHorizontal: 5,
        textAlign: 'center',
    },
    officialBadgeText: {
        fontSize: 11,
        fontWeight: 'bold',
    },
    cardHeaderRight: {
        borderColor: 'green',
        flexDirection: 'row',
        marginLeft: 'auto',
        alignItems: 'center',
    },
    categoryIcon: {
        width: 22,
        height: 22,
        resizeMode: 'contain',
    },
    ellipsisMenu: {
        width: 18,
        height: 18,
        marginVertical: 4,
        resizeMode: 'contain',
    },
    cardBody: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        padding: 10,
        marginRight: 10,
    },
    cardBodyContentText: {
        fontSize: 16,
        fontFamily: 'Roboto-Regular',
    },
    cardBodyContentTextBold: {
        fontSize: 16,
        fontFamily: 'Roboto-Bold',
    },
});

export default withNavigation(ChatStreamItem);
