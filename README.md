# react-app-from-scratch
## Learning more about how React works

I completed the official [Intro to React](https://reactjs.org/tutorial/tutorial.html), but feel like too much was done for me to completely understand how everything works together. 
~~I will follow [this tutorial](https://medium.com/@JedaiSaboteur/creating-a-react-app-from-scratch-f3c693b84658)~~
The above tutorial is out of date, instead I will initialize the project with webpack and then add React to it.


### Objectives
---
- [x] gain more familiarity with Webpack
- [x] learn how to integrate React to a Webpack project
- [x] learn how to create a React project without using `create-react-app` command
- [x] create a React app that displays on my github pages 
- [x] make better use of features of git 
- [x] use Bable for the first time
- [ ] create a shell script to automate a project set up


----
### the following cli commands are required for setup
```
npm init -y
npm install webpack webpack-cli --save-dev
```

this allows css files to be loaded
`npm install --save-dev style-loader css-loader`

webpack handles images and fonts natively, as well as JSON files

to import CSV, TSV, and XML files use
`npm install --save-dev csv-loader xml-loader`

for HTMLWebpackPlugin
`npm install --save-dev html-webpack-plugin`

for React 
`npm  install --save-dev react react-dom`

for Babel
`npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react`
and
`npm install --save-dev babel-loader`

