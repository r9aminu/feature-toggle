# Feature Toggle Demo

This project demonstrates the use of a `FeatureToggle` component in a React application. The `FeatureToggle` component conditionally renders content based on a boolean prop, allowing developers to easily enable or disable features within the application.

## Installation

To get started with this project, follow these steps:

1. **Clone the repository**

   Use Git to clone the project to your local machine:

   ```sh
   git clone https://github.com/r9aminu/feature-toggle.git

# Navigate to the project directory

## Change into the project directory:
```cd feature-toggle-demo```

## Install dependencies
Use npm to install the required dependencies:
```npm install```

## Start the development server
Run the following command to start the development server:
```npm start```
This will launch the application in your default browser at http://localhost:3000.

## How It Works
The FeatureToggle component is a functional React component that accepts two props:

isEnabled: A boolean that determines whether the feature is enabled.
featureName: A string that represents the name of the feature to display.
Based on the value of isEnabled, the component will either render the featureName or a message indicating that the feature is disabled.

