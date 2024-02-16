import React from 'react';
import FeatureToggle from './FeatureToggle';

// Define main App function component
function App() {
    // Return JSX containing feature toggles
    return (
        <div>
            <h1>Feature Toggle Demo</h1>
            <FeatureToggle isEnabled={true} featureName="A" />
            <FeatureToggle isEnabled={false} featureName="B" />
            <FeatureToggle isEnabled={true} featureName="C" />
            <FeatureToggle isEnabled={true} featureName="Admin View" />
            <FeatureToggle isEnabled={false} featureName="User View" />
            <FeatureToggle isEnabled={true} featureName="Guest View" />
        </div>
    );
}

export default App;
