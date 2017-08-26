# Fork note

This is a fork of a PR for a fork...and so on. Other's have updated the dependencies, I just got the code working with the new dependencies and fixed up the examples. I'm happy for this to be PR'd back into a more "main" repo.

# angular-dc

AngularJS directives for dc.js

[![Build Status](https://travis-ci.org/TomNeyland/angular-dc.svg)](https://travis-ci.org/TomNeyland/angular-dc)


Node deps: [![David](https://david-dm.org/TomNeyland/neweden.im-frontend.svg)](https://david-dm.org/TomNeyland/angular-dc.svg)

## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/TomNeyland/angular-dc/master/dist/angular-dc.min.js
[max]: https://raw.github.com/TomNeyland/angular-dc/master/dist/angular-dc.js

If you use bower, you can install this via: `bower install angular-dc`

### Dependencies
See the bower.json file for dependencies: [bower.json][bower.json]

[bower.json]: https://github.com/TomNeyland/angular-dc/blob/master/bower.json

### 30 second look

```html
<script src="angular.js"></script>
<script src="dist/angular-dc.min.js"></script>
<!--don't forget to include all dependencies, for example:-->
<link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/dc/2.1.8/dc.css"/>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.min.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/crossfilter2/1.3.14/crossfilter.min.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/dc/2.1.8/dc.min.js"></script>
<script>
  //load the angular-dc module in your app
  angular.module("myApp", ['angularDc']);
  // some angularjs controller code...
</script>

<!--Setup a simple pie chart. DC.js options are exposed as html attributes-->
<div dc-chart="pieChart" dc-width="180" dc-height="180" dc-radius="80" dc-dimension="gainOrLoss" dc-group="gainOrLossGroup" class="dc-chart"></div>
```

## Examples
- [Simple pie chart](example/stocks/pie.html)
- [Nasdaq charts][example/stocks/nasdaq.html]
- [Contribute][help-examples]

[help-examples]: https://github.com/TomNeyland/angular-dc/issues/2


## Documentation
- [Contribute][help-docs]

[help-docs]: https://github.com/TomNeyland/angular-dc/issues/1

