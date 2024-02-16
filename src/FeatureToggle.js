import React from 'react';
import './FeatureToggle.css';

// Toggle feature on/off based on isEnabled prop
const FeatureToggle = ({ isEnabled, featureName }) => {
    return (
        <div>
            {isEnabled ? (
                <div>{featureName}</div> // Show feature name if enabled
            ) : (
                <div>{featureName} is disabled</div> // Display disabled message
            )}
        </div>
    );
};

export default FeatureToggle;
