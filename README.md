Loading Spinner With AngularJS
=============

Simple loading spinner controlled by AngularJS.  The pattern employed within the index.html can be adapted at your will for any particular use.
See the code, particularly `app/controllers/main.js` and `app/controllers/container.js` for commented details.

Because we use the built-in AngularJS directive `ng-if`, when your page is loaded and ready, the DOM elements for the spinner will be destroyed! Gravy.

The CSS for said spinner is placed 'in-line' in the `<head>` element for immediate rendering without a GET request. Change the `rgba()` of the spinner as you desire.

Tools
---------------

* [AngularJS](http://angularjs.org/)
* [Yeoman](http://yeoman.io/)
* [Grunt](http://gruntjs.com/)
* [Bower](http://bower.io/)
