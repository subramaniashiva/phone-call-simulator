Phone Dial Simulator
===================

This application is simulates the phone dialling functionality. User can dial any number and it connects to the number (only simulation). The user can either hang up the call or the call gets disconnected after 10 seconds. You can view the app live [here](https://subramaniashiva.github.io/phone-call-simulator/dist/index.html)

Setup
-----

1)  Clone this repo using the following command

`git clone git@bitbucket.org:sivars/flickr-image-viewer.git`


2)  Move to the repo that you have just cloned and run the following command

`npm install`

3) To start the app, run

`npm start`
  Navigate to localhost:8080 in your browser to view the app

4) This project is enabled with **ESLint**. Any JS file that you write must be linted using ESLint. To run the linting command type

`npm run lint`

5) This project uses Mocha and Chai for unit testing. To run tests, type

`npm run test`

6) To run coverage, type

`npm run coverage`

7) To build the project for production, run

`npm run build`


Tech Stack
----------
Following is the tech stack:

 - **ReactJS** - The V in the MVC pattern
 - **Redux** - Used to maintain the state of the app
 - **ES6** - The latest version of JavaScript
 - **SASS** - Using SASS files instead of plain CSS
 - **Webpack** - Module bundler. This also replaces front-end build tools like grunt or gulp
 - **Babel** - Transpile ES6 to ES5. Since the browser support for ES6 is not complete, this tool allows us to write code in ES6 which can be transpiled into ES5.
 - **ESLint** - Used to lint the JS code

Directory Structure
-------------------
 - **dist** - Contains the distributable version of the project. Ideally this folder gets pushed into the Docker or production server
 - **app** - Contains the source code of the app
 - **test** - Contains test cases for the app

'app' Directory
-----------------
 - **components** - Dumb or stateless React Components
 - **containers** - Stateful React Components. These components gets connected to the redux store
 - **layout** - Contains the layout of the application like header, footer, main container
 - **redux** - Contains react reducer files and main store
 - **styles** - Styles for the application and components
 - **utils** - Contains helper and utility functions for the application

Webpack
-------
This project uses webpack as its module bundler. The project consists of 2 webpack config files namely '**webpack.dev.config.js**' and '**webpack.prod.config.js**'. These files are used for dev and prod versions respectively.

The reason for choosing Webpack is, its highly extendable and easy to configure. It can replace the task runners such as Gulp, Grunt. Each file type is processed using a loader and the loading tasks can be configured. For example, before processing .js files, we can process those files using eslint loader and check for any errors and then proceed for further processing. This plug and play idea of webpack makes it extendable and easy to use.

 - In the webpack config, we have used extract text plugin to extract css. This helps in loading css in a separate file in production and also helps in caching
 - Common chunks plugin is used to extract the common pieces of code from the .js files and placing it in a separate file. This again helps in caching.
 - Uglify plugin is used in weback dev configuration to minify and uglify the code

**ESLint**

The project is enabled with ESLint and a production version of application can be made only if all the files pass the ESLint test.

The reason for choosing ESLint is, it enforces a common rule across the team. Developers working on this project will be forced to have uniform code styling. This helps in maintaining the project in long run.

 - ESLint configurations are maintained in the .eslintrc file in the root directory
 - The project uses babel as its parser for JS files and ES6 is enforced for all JS files
 - The project extends the ESLint rules from [**AirBnB**](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb). AirBnB is a famous and widely used standard across front-end projects.

Responsiveness
--------------
The application is responsive. It does not uses any third-party libraries like bootstrap for making it responsive.

 - Width above 900px is considered as desktop view
 - Width less than 900px is considered as mobile/tablet view
 - The lower device size limit for the application is 320px. i.e the application works well till 320px. Reason for choosing 320px is, of all the popular phones available, iPhone 5 has a width of 320px. This is the smallest width in popular phones.

CSS
---
The repo uses SASS instead of plain CSS. SASS is easy to maintain and comes with lot of options for developers.

 - [BEM naming convention](http://getbem.com/introduction/) is used for all classes
 - Eric Meyer's reset sass file is used for resetting
 - Constants for the application like theme colour, text colour are stored in **app/styles/_constants.scss**
 - Helper classes are added in **app/styles/_utils.scss**
 - Styles for UI components are added in **app/styles/components** folder
 - Styles for the containers are added in src/styles/containers.

Unit Tests
----------
The repo uses [Mocha](https://mochajs.org/) as its testing framework and [Chai](http://chaijs.com/) as its assertion library. The test files are place is **/test** folder. The files ends with .spec.js extension.

Total calls and Top 3 calls
---------------------------
The application has 2 stateful components. Once for the keypad screen and another one for the on call screen. Once the call is ended either automatically or user pressing hangup button, the component dispatches actions (similar to call back as expected in the assignment) to print the total calls and the top 3 calls in **console**. 

