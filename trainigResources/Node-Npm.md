### NodeJs is

a platform that uses V8 engine to run JavaScript. 

Check if you have Node installed on your machine. Open any Terminal and run
> node -v

It will show Node version if it is installed, otherwise - error.

Install [NodeJs](https://nodejs.org/uk/download/) if it is absent.


### NPM (Node Package Manager)

Developers create some JS functionality (like transpiling Scss into CSS or creating SVG sprite with Sass stylesheets out pf separate SVGs)
and to distribute this functionality to other developers they wrap it into so called `packages`.

We can search for these packages [here](https://www.npmjs.com/)
I.e. look for [Scss packages](https://www.npmjs.com/search?q=scss)
Let's explore one of them - https://github.com/sass/node-sass. 
Look through it's `package.json` file and other files.

Packages whith third-party functionality are called `dependencies`. 

Packages which are used when application works/runs - are saved to `dependencies` of `package.json` file.
Those which are used only for development purpose are saved to `devDependencies`. 

`package.json` - contains all dependencies with their versions; scripts available for this project; application version, name, author, repo etc. 

More info on a project/package you can find in `README.md` - it's like a book contents for a project. 

### How to work with NPM

## Case 1: You create your own project

Open bash console (or any other Terminal) in the root folder of your project. 

Check if you do already have `npm` installed on your machine.
> npm -v

This shall show you npm version if it is installed, otherwise - error.
Then initialize `packages.json` of project.
> npm init

You need to enter appropriate info in prompt fields, or just press `Enter` on each step - that will create `package.json` with empty fields. You may fill them later.
If you know that you will use any dependencies in this project you may import them.

# Import [Gulp](https://www.npmjs.com/package/gulp)

> npm install gulp-cli -g --save-dev
> npm i gulp -D

`i` stands for `install`. 
Use `-D` or `--save-dev` flag to save this package to `devDependencies` in `package.json`.
Flag `-g` or `--global` makes this package globally available (available from any directory on your machine).

Check new dev dependencies in your `package.json`.
Check new folder in the roo dir - `node_modules`. All npn packages will be saved here. 
Do not forget to add `node_modules/` to `.gitignore` if you use Git. 
Because `node_modules` folder will become too large to save it to git. 
It's enough to send to git repo only `package.json` with information about all your dependencies.

As far as Gulp itsef does nothing, it's only a wrapper that can run other scripts, we need to install some scripts (packages) which will do something. 

If you need to compile Sass into CSS, you may find [scss plugin](https://gulpjs.com/plugins/) 
like [this](https://www.npmjs.com/package/gulp-scss) 
and install it.
> npm i gulp-scss --save-dev

So now you can use Gulp to run `gulp-scss` plugin.

Gulp keeps all tasks (script instructions) in `gulpfile.js`. 
So let's create `gulpfile.js` for `scss` task in a root dir.

```
"use strict";
    var scss = require("gulp-scss");
    var gulp = require("gulp");
    gulp.task("scss", function () {
        gulp.src(
            "home/scss/**/*.scss"
        ).pipe(scss(
            {"bundleExec": true}
        )).pipe(gulp.dest("home/static/css"));
    });
```

`home/scss/**/*.scss` - is a relative path from `gulpfile.js` to your .scss files which will be transpiled into .css.
Or if you use only one .scss file, use it's path. I.e. `myApp/scss/main.scss`.
`home/static/css` is a destination folder in your project where compiled .css file will be saved. It is relative too.
In the line `gulp.task("scss", function () {` - `scss` is a task name. 
You can run this task from the folder where `gulpfile.js` is:
> gulp scss

This will compile files from `home/scss/**/*.scss` to .css files in `home/static/css`



## Case 2: You download third party project

First of all find `package.json` in the root folder of the project.
Open Bash console from that folder and run
> npm install

That will install all dependencies for the project (`node_modules` folder is created).
Look if `package.json` has anything interesting in `scripts`. 
If there is `start` or `dev` script - you may try to run it in console (`npm run start` or `npm run dev`). 
These scripts are normally start local server with your project.

Then look if there is a `gulpfile.js`. Check which commands does it have. 
`gulp.task` method will help you.


### Additional Reading
1) [Package.json info](https://docs.npmjs.com/files/package.json)
2) [NPM install](https://docs.npmjs.com/cli/install)
3) [Semantic Package Versioning](https://docs.npmjs.com/about-semantic-versioning)