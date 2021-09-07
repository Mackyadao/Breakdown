import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const LandscapeSidePanelSectionHeader = props => {
    const {renderHeaderTitle, style} = props;

    return (
        <View style={[styles.container, style]}>
            <View style={styles.headerTextContainer}>
                {renderHeaderTitle && renderHeaderTitle()}
                <Image
                    style={styles.headerArrowDown}
                    source={require('../../assets/icons/arrow-down-polygon-3x.png')}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
    headerTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 6,
        paddingHorizontal: 5,
        paddingBottom: 4,
        width: '90%',
    },
    headerArrowDown: {
        marginLeft: 'auto',
        width: 20,
        height: 14,
        resizeMode: 'contain',
    },
});

export default LandscapeSidePanelSectionHeader;
