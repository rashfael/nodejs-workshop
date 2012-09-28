nodejs-workshop
===============

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

### World Wide Web

## javascript language basics
	- jsbasics.js

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

	- npm

	install:
		sudo npm -g install git://github.com/jashkenas/coffee-script.git
		sudo npm -g install mocha brunch (for windows, path variable)

	local install:
		npm install express

	- package.json
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