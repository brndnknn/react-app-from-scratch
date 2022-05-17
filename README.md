# react-app-from-scratch
## Learning more about how React works

I completed the official [Intro to React](https://reactjs.org/tutorial/tutorial.html), but feel like too much was done for me to completely understand how everything works together. 
~~I will follow [this tutorial](https://medium.com/@JedaiSaboteur/creating-a-react-app-from-scratch-f3c693b84658)~~
The above tutorial is out of date, instead I will initialize the project with webpack and then add React to it.


### Objectives
---
- gain more familiarity with Webpack
- learn how to integrate React to a Webpack project
- learn how to create a React project without using `create-react-app` command
- create a React app that displays on my github pages 
- make better use of all the features git has to offer
- use Bable for the first time


----
### the following cli comands are required for setup
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



