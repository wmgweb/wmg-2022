# Description
This is a framework for building global styles, JavaScript and blocks for the WMG website.

# Implementation
To implement this project into the SiteBuilder CMS, you must include the `main.css` and `main.js` files found in `/dist` on every page you intend on using the framework. Once included, you can build pages in a modular format using blocks. Please check the [website documentation](https://warwick.ac.uk/fac/sci/wmg/intranet/info/comms/wmg-website-support/) for more information on how to implement blocks, and the [blocks FAQ](https://warwick.ac.uk/fac/sci/wmg/intranet/info/comms/wmg-website-support/blocks/) for information on how to populate each specific block in SiteBuilder.

# Setup
The framework requires Gulp, which in turn requires Node.js. You can install Node.js [here](https://nodejs.org/en/download/). All required packages are pre-loaded into package.json. To install all packages, run `npm install`.

The framework is now set-up and ready for development.

# Development
The framework uses the following tools:
* [Handlebars](https://handlebarsjs.com/)
* [SASS](https://sass-lang.com/install)
* JavaScript / [jQuery](https://jquery.com/)
* [NPM](https://www.npmjs.com/) 
* [Gulp 5](https://gulpjs.com/)

Any development should be done in the #dev folder. The dist folder should not be edited - this is automatically compiled.
Any vendor JavaScript (e.g. Handlebars, Slick Slider) should be added to `/#dev/js/vendor`.

To begin editing files, you should use the command `gulp watch`. This will watch for any changes to the code in #dev and update the dist files.

## SASS Development
The SASS is found in `#dev/scss`. 

`_mixins.scss` - Contains functions used across all SASS files. Shouldn't be touched.
`_variables.scss` - Contains variables (colours, fonts, breakpoints, filepaths) used across all SASS files. Changes made here will be made globally.
`blocks.scss` - Generates the file /dist/css/blocks.css containing just the block CSS. Not currently used.
`global.scss` - Generates the file /dist/css/global.css containing just the global CSS. Not currently used.
`main.scss` - Generates the file /dist/main.css containing all the CSS. This is the only CSS file in use.
`/blocks/` - This folder contains individual files for each block.
`/global/` - This folder contains individual files for global styling elements.

## JavaScript Development
The JavaScript is found in `#dev/js`.

`/vendor/` - Contains vendor (3rd party) JavaScript files. These should not be edited.
`block-output.js` - Contains all the code to compile blocks and imports the HandleBars files.


## Handlebars (Block) Development
Each block has a unique code we use to identify it both in the code and during the template building process. In theory, these codes can be anything however the format used is a two-letter block family identifier followed by an incremental 2 digit number. For example, IN01, IN02, IN03, IN04.

There are 2 components to every block: the Handlebars file (.hbs) and the SASS file (.scss).

The Handlebars file is found in `#dev/blocks`. This file contains the HTML for the block. Any block-specific JavaScript should be included that the bottom of this file inside `<script></script>` tags after the `blockFunctions` function.

The `blockFunctions` function runs when each block is loaded and performs core actions such as setting options and adding shortcodes.

The SASS file is found in `#dev/scss/blocks`.

## Shortcodes
Blocks can make use of shortcodes to output more complex snippets of content such as buttons and video embeds. The shortcodes can be found in `#dev/js/block-output.js`. Here you can edit existing shortcodes or add new ones. You can find more information on how to implement shortcodes in the [website documentation](https://warwick.ac.uk/fac/sci/wmg/intranet/info/comms/wmg-website-support/).



# Compiling
All the SASS is compiled into one single CSS file (`main.css`).
All the JavaScript, including Handlebars, is compiled into one single JS file (`main.js`).


# Gulp Tasks
* `gulp watch` Watches for changes in dev, and updates dist files.
* `gulp dep` Imports dependancies once installed by npm. You have to manually add these and direct them inside gulpfile.js.
* `gulp build` Builds the main.css and main.js files.