# gulp-style-format
A gulp plugin to format css or less.

## Information

<table>
<tr>
<td>Package</td><td>gulp-style-format</td>
</tr>
<tr>
<td>Description</td>
<td>Ejs plugin for gulp</td>
</tr>
</table>

## Installation

```
npm install gulp-style-format
```

## Basic Usage

```js
var styleFormat = require('gulp-style-format');

gulp.task('format', function () {
  return gulp.src('./css/**/*.css')
    .pipe(styleFormat())
    .pipe(gulp.dest('./public/css'));
});
```

## Use gulp-style-format with gulp-less
