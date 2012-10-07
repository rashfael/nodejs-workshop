# nodejs-workshop

Scope:

- javascript language basics
- nodejs basics

- coffeescript introduction
- full web stack
	- express
	- brunch
	- backbone
	- chaplin
	- jade
	- stylus
	- cake / mocha

## World Wide Web

open a chrome, request a website, watch dev console

- HTTP
- view source

## javascript language basics

	jsbasics.js

## bullshitbingo

paradigms

- scripting
- prototypes, dynamic typing
- imperative
- functional

- functions are first class objects, everything is a first class object!


- omgclosures

Standard = ECMAScript

### basic basics
in node repl

- variables
- types
	- number
	- string
	- boolean
	- objects and array

- if, for, while

- functions!
	- timestwo
	- this - function context (call, apply)

- prototypes

## nodejs basics

http server

- world wide web, what is http

serve simple text

## tooltime

### coffeescript

why?

- keep the javascript runtime and object model
- get better syntax, c-style is juck
- whitespace sensitive
- coffeescript compiles to javascript

top features:

- better comparison
- existence
- no braces!
- function syntax
- splats
- better loops
- array slicing
- more text keywords
- destruction
- function binding
- chained comparison
- string interpolation

### toolchain

- coffee
- make cake
- mocha-chai testing
- brunch deployment


### module system

#### npm

install:

	sudo npm -g install git://github.com/jashkenas/coffee-script.git
	sudo npm -g install brunch (for windows, path variable)

local install:

	npm install express

#### package.json

	npm init
	npm install express --save

### require - module loading

- require 'express'
- require file only once, caches

### first http thingies
server.coffee.1

### HTML
- Beschreibungssprache
- XMLlig
- <TAGNAME attr1='val1'>content</TAGNAME>
- baumartig aufgebaut
- ein paar tags, h1-6, p, a, div, span

### DOM
	- baumartige darstellung
	
### server side template
views/layout.jade , index.jade


### web app

- brunch
- backbone
- chaplin

### initialize web app

global dependencies

- brunch
- coffee
- nodemon

create new project

	brunch new --skeleton https://github.com/rashfael/brunch-webapp.git my-app
	
build project and run server (inside new project directory)

	cake watch (calls "brunch watch" and "nodemon")


### your links are in another castle

[node.js](http://nodejs.org) - native evented v8 runtime  
[mongodb](http://mongodb.org) - NoSQL Database  
[jade](http://jade-lang.com/) - html templating  
[brunch](http://brunch.io) - deploy all the things  
[backbone](http://documentcloud.github.com/backbone/) - MVC base framework  
[chaplin](https://github.com/chaplinjs/chaplin) - backbone based MVC framework  
[bootstrap](http://twitter.github.com/bootstrap/) - skeleton css fancyness and effects  
[mongoose](http://mongoosejs.com/) - mongodb ORM  

### bullshit bingo
AJAX
Web 2.0
Agil
App
NoSQL
Social Graph
REST
CRUD
Websocket
Test Driven
Event Loop
Community
Cloud
Web Service
HTML5
CSS3
API
Canvas
Ponies
Standard
Mobile
Ubiquitous
Geolocation
Open Source
User Experience
Dynamic
Semantic Web