import React, {useState} from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    Pressable,
    ScrollView,
    Modal,
    StyleSheet,
} from 'react-native';

import colors from '../constants/colors';
import {hasEmptyField} from '../utils/formHelper';
import FormTextInput from '../components/forms/FormTextInput';
import RadioButton from '../components/buttons/RadioButton';
import DefaultPillFlatButton from '../components/buttons/DefaultPillFlatButton';
import ArtCategoryModal from '../modals/ArtCategoryModal';
import ProofOfWorkInfoModal from '../modals/ProofOfWorkInfoModal';

const TierOne = props => {
    const {onPress, toggleProofOfWorkInfoModal} = props;

    return (
        <View style={styles.tierOptionItemValueContainer}>
            <Pressable
                onPress={onPress}
                style={styles.tierOptionItemValueHeader}>
                <Text style={[styles.contentText, styles.boldText]}>
                    Tier 1
                </Text>
            </Pressable>

            <View style={styles.tierOptionItemValueDescContainer}>
                <View style={styles.tierRequirementsList}>
                    <View style={styles.tierRequirementsListItem}>
                        <Text style={styles.tierRequirementsListItemBullet}>
                            •
                        </Text>
                        <Text style={[styles.contentText]}>
                            Submit proof of work
                        </Text>
                        <TouchableOpacity
                            onPress={toggleProofOfWorkInfoModal}
                            style={styles.infoIconContainer}>
                            <Image
                                source={require('../assets/icons/info-solid-3x.png')}
                                style={styles.infoIcon}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.tierRequirementsListItem}>
                        <Text style={styles.tierRequirementsListItemBullet}>
                            •
                        </Text>
                        <Text style={[styles.contentText]}>
                            Upload a copy of photo ID (feel free to block out
                            residential information)
                        </Text>
                    </View>

                    <View style={styles.tierRequirementsListItem}>
                        <Text style={styles.tierRequirementsListItemBullet}>
                            •
                        </Text>
                        <Text style={[styles.contentText]}>
                            Upload a 5 second video stating your name, today’s
                            date, confirm that you’re joining The Breakdown App
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const TierTwo = props => {
    const {onPress, toggleProofOfWorkInfoModal} = props;

    return (
        <View style={styles.tierOptionItemValueContainer}>
            <Pressable
                onPress={onPress}
                style={styles.tierOptionItemValueHeader}>
                <Text style={[styles.contentText, styles.boldText]}>
                    Tier 2
                </Text>
            </Pressable>

            <View style={styles.tierOptionItemValueDescContainer}>
                <View style={styles.tierRequirementsList}>
                    <View style={styles.tierRequirementsListItem}>
                        <Text style={styles.tierRequirementsListItemBullet}>
                            •
                        </Text>
                        <Text style={[styles.contentText]}>
                            Submit proof of work
                        </Text>
                        <TouchableOpacity
                            onPress={toggleProofOfWorkInfoModal}
                            style={styles.infoIconContainer}>
                            <Image
                                source={require('../assets/icons/info-solid-3x.png')}
                                style={styles.infoIcon}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.tierRequirementsListItem}>
                        <Text style={styles.tierRequirementsListItemBullet}>
                            •
                        </Text>
                        <Text style={[styles.contentText]}>
                            Upload a 5 second video stating name, today’s date,
                            confirm that you’re joining The Breakdown App
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const tierOptions = [
    {
        value: 'tier-1',
        renderLabel: TierOne,
    },
    {
        value: 'tier-2',
        renderLabel: TierTwo,
    },
];

const CreatorVerification = props => {
    const {navigation} = props;
    const formFieldsInitState = {
        username: '',
        fullName: '',
        knownAs: '',
        artCategory: '',
        tier: 'tier-1',
    };

    const [formValues, setFormValues] = useState(formFieldsInitState);
    const [artCategoryModalVisible, setArtCategoryModalVisible] =
        useState(false);
    const [proofOfWorkInfoModalVisible, setProofOfWorkInfoModalVisible] =
        useState(false);

    const toggleArtCategoryModal = () => {
        setArtCategoryModalVisible(!artCategoryModalVisible);
    };

    const toggleProofOfWorkInfoModal = () => {
        setProofOfWorkInfoModalVisible(!proofOfWorkInfoModalVisible);
    };

    const handleChangeText = (fieldValue, fieldName) => {
        setFormValues(values => {
            return {...values, [fieldName]: fieldValue};
        });
    };

    const handleChangeSelectedOption = selectedOption => {
        setFormValues(values => {
            return {...values, [selectedOption.name]: selectedOption.value};
        });
    };

    const handleSubmit = () => {
        if (!hasEmptyField(formValues)) {
            /**
             * TODO: Submit the form to the API, then navigate to the Home
             * screen if there's no error.
             */
        } else {
            /**
             * TODO: Display error message on empty required field
             */
        }

        // temporarily navigate to Home screen for testing
        navigation.navigate('Home');
    };

    return (
        <View style={styles.screen}>
            <Modal
                animationType="none"
                transparent={true}
                visible={artCategoryModalVisible}
                onRequestClose={() => {
                    toggleArtCategoryModal();
                }}>
                <ArtCategoryModal
                    name="artCategory"
                    value={formValues.artCategory}
                    onChangeValue={handleChangeSelectedOption}
                    toggleModal={toggleArtCategoryModal}
                />
            </Modal>

            <Modal
                animationType="fade"
                transparent={true}
                visible={proofOfWorkInfoModalVisible}
                onRequestClose={() => {
                    toggleProofOfWorkInfoModal();
                }}>
                <ProofOfWorkInfoModal
                    onOutsidePress={() => toggleProofOfWorkInfoModal()}
                />
            </Modal>

            <ScrollView style={styles.contentContainer}>
                <View>
                    <Image
                        source={require('../assets/logo/iconicMark/iconicMark-colored-3x.png')}
                        style={styles.icon}
                    />
                </View>

                <View style={styles.header}>
                    <Pressable
                        onPress={() => navigation.goBack()}
                        style={styles.goBackArrowContainer}>
                        <Image
                            source={require('../assets/icons/go-back-arrow-3x.png')}
                            style={styles.goBackArrow}
                        />
                    </Pressable>

                    <Text style={styles.heading}>
                        Request Creator Verification
                    </Text>
                </View>

                <View style={styles.contentWrapper}>
                    <Text style={styles.contentText}>
                        <Text style={styles.boldText}>Tier 1</Text> Verified
                        Creators are represented by a red ring around their
                        avatar, and indicates that they are a Creator affiliated
                        with the Film, TV, or Book industries.
                        {'\n\n'}
                        <Text style={styles.boldText}>Tier 2</Text> Verified
                        Creator avatars will wear the red ring, and also be
                        represented by a golden "
                        <Text style={styles.verifiedCreatorBadge}>V</Text>"
                        alongside their usernames. This status is reserved for
                        those with sizeable social media followings, or notable
                        public figures or celebrities in the arts &
                        entertainment communities.
                        {'\n\n'}
                        This process ensures all Creator accounts are the
                        authentic presence of a Creator, notable public figure,
                        celebrity of the arts or entertainment industry, global
                        brand or entity it represents. Full app functionality
                        will also be unlocked.
                        {'\n\n'}
                        Submitting a request will guarantee consideration, but
                        will not guarantee verification
                    </Text>
                </View>

                <FormTextInput
                    style={[
                        styles.textInput,
                        {
                            borderTopWidth: 2,
                        },
                    ]}
                    name="username"
                    value={formValues.username}
                    onChangeText={handleChangeText}
                    placeholder="Username"
                    placeholderTextColor={colors.dark}
                    keyboardType="default"
                    autoCapitalize="none"
                />

                <FormTextInput
                    style={styles.textInput}
                    name="fullName"
                    value={formValues.fullName}
                    onChangeText={handleChangeText}
                    placeholder="Fullname"
                    placeholderTextColor={colors.dark}
                    keyboardType="default"
                />

                <FormTextInput
                    style={[styles.textInput]}
                    name="knownAs"
                    value={formValues.knownAs}
                    onChangeText={handleChangeText}
                    placeholder="Known As"
                    placeholderTextColor={colors.dark}
                    keyboardType="default"
                />

                <View
                    style={[
                        styles.dropDownToggleContainer,
                        {
                            borderBottomWidth: 2,
                        },
                    ]}>
                    <Text style={styles.dropDownToggleText}>
                        {formValues.artCategory
                            ? formValues.artCategory
                            : 'Arts & Entertainment Category'}
                    </Text>

                    <Pressable onPress={() => toggleArtCategoryModal()}>
                        <Text
                            style={[styles.dropDownLabelText, styles.boldText]}>
                            Please make your selection from the drop down box
                            {'  '}
                            <Image
                                style={styles.dropDownLabelArrow}
                                source={require('../assets/icons/drop-down-arrow-solid-3x.png')}
                            />
                        </Text>
                    </Pressable>
                </View>

                <View style={styles.tierSelectionSection}>
                    <View style={styles.contentWrapper}>
                        <Text
                            style={[
                                styles.contentText,
                                styles.boldText,
                                styles.tierSelectionHeading,
                            ]}>
                            Requirements | Make your tier selection below
                        </Text>

                        <RadioButton
                            name="tier"
                            value={formValues.tier}
                            onChangeValue={handleChangeSelectedOption}
                            options={tierOptions}
                            optionItemContainerStyle={
                                styles.tierOptionItemContainer
                            }
                            labelProps={{toggleProofOfWorkInfoModal}}
                            radioCircleStyle={{marginTop: 2}}
                        />
                    </View>
                </View>

                <View
                    style={{
                        padding: 20,
                        borderTopWidth: 1,
                        borderBottomWidth: 1,
                    }}>
                    <Text
                        style={{
                            fontSize: 16,
                            color: colors.dark,
                        }}>
                        <Text
                            style={{
                                color: '#4072BD',
                                fontWeight: 'bold',
                            }}>
                            Choose file(s)
                        </Text>
                        {'\n\n'}
                        For tier 2 we require a government-issued photo ID
                        displaying your name and date of birth (e.g. driver’s
                        license, passport or national identification card).
                        Official business documents (tax filing, recent utility
                        bill, article of incorporation) are also acceptable
                        forms of identification needed to view your request.
                        {'\n\n'}
                    </Text>

                    <Text
                        style={{
                            fontSize: 16,
                            color: colors.dark,
                            textAlign: 'justify',
                        }}>
                        Enter proof of work here or upload a files above.
                    </Text>
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-evenly',
                        marginVertical: 20,
                    }}>
                    <DefaultPillFlatButton
                        title="Send"
                        onPress={handleSubmit}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light,
        height: '100%',
    },
    icon: {
        width: 42,
        height: 42,
        marginTop: 25,
        marginLeft: 25,
        resizeMode: 'contain',
    },
    goBackArrowContainer: {
        position: 'absolute',
        top: 0,
        left: 28,
    },
    goBackArrow: {
        width: 34,
        height: 34,
    },
    contentContainer: {
        width: '100%',
        backgroundColor: colors.light,
        alignSelf: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    heading: {
        marginHorizontal: 50,
        fontFamily: 'Oswald-Bold',
        fontSize: 35,
        alignSelf: 'center',
        color: colors.dark,
        textAlign: 'center',
    },
    contentWrapper: {
        margin: 18,
    },
    contentText: {
        fontFamily: 'Roboto',
        fontSize: 16,
        color: colors.dark,
    },
    boldText: {
        fontWeight: '700',
        color: colors.dark,
    },
    textInput: {
        width: '100%',
        borderBottomWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 28,
        fontSize: 16,
    },
    dropDownToggleContainer: {
        paddingVertical: 10,
        paddingHorizontal: 28,
        borderBottomWidth: 1,
    },
    dropDownToggleText: {
        fontFamily: 'Roboto',
        fontSize: 16,
    },
    dropDownLabelText: {
        fontFamily: 'Roboto',
        fontSize: 16,
    },
    dropDownLabelArrow: {
        height: 14,
        width: 16,
        resizeMode: 'contain',
    },
    verifiedCreatorBadge: {
        height: 39,
        width: 8,
        fontFamily: 'Oswald',
        fontWeight: 'bold',
        color: '#D88912',
    },
    infoIconContainer: {
        paddingVertical: 2,
        paddingHorizontal: 10,
        alignSelf: 'center',
    },
    infoIcon: {
        width: 16,
        height: 16,
    },
    tierSelectionSection: {},
    tierSelectionHeading: {
        marginBottom: 7,
    },
    tierOptionItemContainer: {
        marginBottom: 7,
        alignItems: 'flex-start',
    },
    tierOptionItemValueContainer: {
        flex: 1,
    },
    tierOptionItemValueHeader: {
        marginRight: 'auto',
        paddingLeft: 7,
        paddingRight: 80,
    },
    tierOptionItemValueDescContainer: {
        marginLeft: -13,
    },
    tierRequirementsList: {},
    tierRequirementsListItem: {
        flex: 1,
        flexDirection: 'row',
    },
    tierRequirementsListItemBullet: {
        marginRight: 8,
    },
});

export default CreatorVerification;
