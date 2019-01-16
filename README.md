## What to do when you don't know what to do?

### 1) Explore PSD mockup in PhotoShop (PS)

### 2) Get fonts. 

Select all fonts at PSD mockup
Find these fonts on Google Font or elsewhere

> [Montserrat Bold/Light/Regular](https://fonts.google.com/specimen/Montserrat)

### 3) Get icons. 

Save icons as SVG from PSD mockup or find relevant icons at 

[FontAwsome](https://fontawesome.com/) or 
[FontasticMe](http://fontastic.me/)

Create custom sprite or icon font there.

### 4) Get colors and creat ecolors schema

Select main colors of site and name them (use Instant EyeDropper tool for it of use simple eyedropper from PhotoShop). For example

primary-white #ffffff
primary-dark #4e4e4e
background-light #f8fcfe
background-dark #41474b
accent-color (green) #43d0ad
complimentary-color (navy) #1e2a33

### 5) Create simple application folder structure

``` 
app/ 
___/ index.html
___/ css
______/ style.css
___/ js
______/ main.js
___/ assets
______/ logo.png
______/ icon-sprite.svg
___/ fonts
______/ Motserrat.woff
______/ Montserrat.woff2
```

### 6) Choose whether you will use CSS preprocessors like Sass or LESS. 

If you will use them, then install [NodeJs](https://nodejs.org/uk/download/) (just once)

And then from your `/app` folder run
> npm init 
and then install [Gulp](https://gulpjs.com) 
```
> npm install gulp-cli -g
> npm install gulp -D 
```

Then install Scss plagin for [Gulp-Scss](https://github.com/dlmanning/gulp-sass)
> npm install node-sass gulp-sass --save-dev

and then create simple gulp script for this Gulp plugin. Create file `gulpfile.js`  and put the following code in there
```
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
 return gulp.src('./sass/**/*.scss')
   .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
   .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
```

Add to root dir of your app new directory and file `/app/sass/styles.scss` and write your style file there. Don't forget to use `.scss` extention.

After runnig 
> gulp sass
from `/app` dir you will get minified `/css/styles.css` file.
Command 
> gulp watch
will watch your `/sass` dir and will rebuild `styless.css` after each change.

### 7) Try to break your PSD layout into separate blocks. 

Make visual represenation of feauture blocks. Mark whether is will be a block (whole parent's width) element or it will be an inline or inline-block element.

Remember that **inline elements** behave like letters in the text, and we are not able to style them with margins/paddings. 
**Inline-block** elements behave like inline in document flow, but like block elements - inside. 
Also we can change element's model with CSS. I.e. `<span>` element - is typical inline element. But using `display:block` or `display:inline-block` we can change it's behavior.

So if element should take whole width of parent - choose block element.
If elements should go one-by-one in a row - choose inline-block elements (or set `display:inline-block` on block elements)
If you need to style separate text element (like text boldness or highliting) - choose inline lements.

**FLEXBOX** is really useful for aligning, centering and groupping elements within parent. 
Please, play with it [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### 8) Happy CODING! <3 <3 <3

### 9) How to create SVG sprite with Gulp

install [Gulp plugin for SVG sprite](https://www.npmjs.com/package/gulp-svg-sprite)
> npm i gulp-svg-sprite --save-dev

Add new dependencies and task to your `gulpfile.js`
```
var gulp = require('gulp');
var svgSprite = require('gulp-svg-sprite');
 
gulp.task('svg', function() {
    return gulp.src('assets/svg/*.svg')
        .pipe(svgSprite({
            shape: {
                dimension: { 
                    maxWidth: 32,
                    maxHeight: 32
                },
                spacing: {
                    padding: 10
                },
                dest: 'sass/sprite'
                },
                mode: {
                view: { 
                    bust: false,
                    render: {
                    scss: true 
                    }
                },
                symbol: true 
            }
        }))
        .pipe(gulp.dest('sass/sprite'));
});
```

### 10) Practice with Sass/CSS

* CSS cascade/specificity
* minified/non minified
* @import dependencies
* Cascade structure

### 11) Practice with pictures

Chose photo for top page banner background. Inspect it's size. Deside how to optimize pictures size for web development.
Create several copies for different screen resolutions
Try to shrink picture's size with [Sqoosh](https://squoosh.app). Play around with different formats, image sizes.
Try to use correct image format. 
Use JPEG format for full color photos. It has high % of compression.
Use PNG format for images with transparent background. PNGs are large, but may have good image quality with transparency effects.
Use GIF is you need animated image, or low colors quality with transparency.
Use SVG for graphic images (icons, logos, gradient backgrounds, some fonts etc.)

