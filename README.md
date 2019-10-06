# Embedded Analytics Tableau with Okta SSO

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

**Landing Page:**

![login](https://res.cloudinary.com/dmim37dbf/image/upload/c_scale,h_500/v1570375377/landing.png)

**LoggedIn State:**

![loggedIn](https://res.cloudinary.com/dmim37dbf/image/upload/c_scale,h_500/v1570375378/loggedIn.png)

**Installation instructions:**

0. Download/Clone this Repository
1. Run 'npm install'
1. Create [Okta Developer Account](https://developer.okta.com/)
1. Follow [these instructions](https://help.tableau.com/current/online/en-us/saml_config_okta.htm) to enable Okta for your Tableau Online or Tableau Server Environment
1. Add Tableau Online to your 'Apps' in your Okta Console
1. Add Application for Single Page Application (SPA) in Okta Applications Console
1. Since our application runs on port 3000 by default, you should add that as the Login Redirect URI. Your settings should look like the following: ![okta image](https://res.cloudinary.com/dmim37dbf/image/upload/v1570375165/okta.png)
1. [Enable CORS](https://developer.okta.com/docs/guides/enable-cors/overview/) for Localhost Port 3000 (including redirect) in your Okta Account
1. Add your Organisation URL and Okta Client ID to the .env.local file like so (remove the curly brackets). Create this file in the root if not exists:
   ![environmentfile](https://res.cloudinary.com/dmim37dbf/image/upload/v1570375664/variableEnv.png)
1. Within the Components Folder you will find a Helper Folder. In Visualisations.js you see a place where you can link to your Tableau Online visualisations. I defaulted to three, but you can add as many as you want.
1. When you configured everything you can run `npm start` to start the development server. You will find your application running on localhost port 3000
1. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
