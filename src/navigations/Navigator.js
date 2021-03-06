import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Home';
import ChooseMedium from '../screens/ChooseMedium';
import RTidentification1 from '../screens/RTidentification1';
import RTidentification2 from '../screens/RTidentification2';
import MakeItOfficial from '../screens/MakeItOfficial';
import CreatorVerification from '../screens/CreatorVerification';
import Profile from '../screens/Profile';
import LiveCentral from '../screens/LiveCentral';
import Marketplace from '../screens/Marketplace';
import LiveView from '../screens/LiveView';
import LiveViewPaid from '../screens/LiveViewPaid';
import NotificationPage from '../screens/NotificationPage';
import SearchPage from '../screens/SearchPage';
import WhatsTrending from '../screens/WhatsTrending';
import MovieDetailsPage from '../screens/MovieDetailsPage';
import MovieDetailsTrailer from '../screens/MovieDetailsTrailer';
import PaymentMethod from '../screens/PaymentMethod';
import PayWithCard from '../screens/PayWithCard';
import Signup from '../screens/Signup';

const stackNavigatorOptions = {
    headerShown: false,
};

const AppNavigator = createStackNavigator(
    {
        Login: {screen: Login},
        Signup: {screen: Signup},
        Register: {screen: Register},
        Home: {screen: Home},
        ChooseMedium: {screen: ChooseMedium},
        RTidentification1: {screen: RTidentification1},
        RTidentification2: {screen: RTidentification2},
        MakeItOfficial: {screen: MakeItOfficial},
        CreatorVerification: {screen: CreatorVerification},
        Profile: {screen: Profile},
        LiveCentral: {screen: LiveCentral},
        Marketplace: {screen: Marketplace},
        LiveView: {screen: LiveView},
        LiveViewPaid: {screen: LiveViewPaid},
        NotificationPage: {screen: NotificationPage},
        SearchPage: {screen: SearchPage},
        WhatsTrending: {screen: WhatsTrending},
        MovieDetailsPage: {screen: MovieDetailsPage},
        MovieDetailsTrailer: {screen: MovieDetailsTrailer},
        PaymentMethod: {screen: PaymentMethod},
        PayWithCard: {screen: PayWithCard},
    },
    {
        defaultNavigationOptions: stackNavigatorOptions,
    },
);
export default createAppContainer(AppNavigator);
