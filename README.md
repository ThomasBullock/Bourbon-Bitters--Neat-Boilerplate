# Gulp Build System #
Starter Template For Bourbon Neat using Gulp.
Bits and Pieces appropriated from [HTML5Boilerplate](https://github.com/h5bp/html5-boilerplate/blob/5.3.0/dist/doc/TOC.md)

Technologies used

[Bourbon](http://bourbon.io/)/[Neat v2](http://neat.bourbon.io/)/[Bitters](http://bitters.bourbon.io/) 

## Notes

Download and run NPM install.

### npm run server ###
local server on port 8888
### gulp watchFiles ###
compiles Sass with autoprefixer and concatenates js scripts
### gulp build ###
compiles Sass with autoprefixer and minifies css - concatenates transpiles from es6 and minifies js and outputs project 
renamed files and updated html to dist folder.



## Folder Structure

```
Bourbon-Bitters-Neat-Boilerplate/
    README.md
    .babelrc
    gulpfile.js
    package.json
    css/
      styles.css
      styles.css.map
    js/
      app.js
      app.js.map
    src/
      javascript/
        main.js
      sass/
        0-plugins/
            base/
            bourbon/
            neat/
        1-base/
          mixins/
          _variables.scss
        2-modules/
        3-layouts/
        styles.scss
    index.html
    404.html
  
```
