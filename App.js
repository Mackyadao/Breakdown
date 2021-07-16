import React, {useState, useEffect} from 'react';
import {StripeProvider} from '@stripe/stripe-react-native';

import AppNavigator from './src/navigations/Navigator';
import urls from './src/constants/urls';

const API_URL = urls.apiUrl;

const App = () => {
    const [publishableKey, setPublishableKey] = useState('');

    const fetchPublishableKey = async () => {
        const response = await fetch(`${API_URL}/api/stripe/config`);
        const {publishableKey: fetchedPubKey} = await response.json();

        setPublishableKey(fetchedPubKey);
    };

    useEffect(() => {
        fetchPublishableKey();
    }, []);

    return (
        <StripeProvider
            publishableKey={publishableKey}
            // urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
            // merchantIdentifier="merchant.com.breakdown" // required for Apple Pay
        >
            <AppNavigator />
        </StripeProvider>
    );
};

export default App;
