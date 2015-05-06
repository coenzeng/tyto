var env = 'out/';
module.exports = {
  pkg: {
    name: 'tyto'
  },
  pluginOpts: {
    jade: {
      pretty: true
    },
    coffee: {
      bare: true
    },
    gSize: {
      showFiles: true
    },
    browserSync: {
      port   : 1987,
      server : {
        baseDir: env
      }
    },
    rename: {
      suffix: '.min'
    },
    order: [
      'templates/**/*.js',
      'app.js',
      'models/**/*.js',
      'controllers/**/*.js',
      /*
        Due to the naming convention and the way marionette reacts here,
        I need to explicitly state the order of the layout module pieces until
        I see a better way of refactoring this.
      */
      'layout/task.js',
      'layout/column.js',
      'layout/board.js',
      'layout/**/*.js',
      /*
        Instead of putting our bootstrapping code inside our markup code.
        We simply use a strapping file to bootstrap the application.
      */
      'strap.js'
    ],
    prefix: [
      'last 3 versions',
      'Blackberry 10',
      'Android 3',
      'Android 4'
    ],
    wrap: '(function() { <%= contents %> }());',
    load: {
      rename: {
        'gulp-gh-pages'             : 'deploy',
        'gulp-util'                 : 'gUtil',
        'gulp-minify-css'           : 'minify',
        'gulp-autoprefixer'         : 'prefix',
        'gulp-template-store'       : 'template'
      }
    }
  },
  paths: {
    base: env,
    sources: {
      coffee: [
        'src/coffee/**/*.coffee'
      ],
      vendor: {
        js: [
          'src/vendor/jquery/dist/jquery.js',
          'src/vendor/underscore/underscore.js',
          'src/vendor/backbone/backbone.js',
          'src/vendor/Backbone.localStorage/backbone.localStorage.js',
          'src/vendor/backbone.relational/backbone-relational.js',
          'src/vendor/marionette/lib/backbone.marionette.js',
          'src/vendor/yap/dist/yap.min.js',
          'src/vendor/jquery-ui/jquery-ui.js',
          'src/vendor/jqueryui-touch-punch/jquery.ui.touch-punch.min.js'
        ]
      },
      jade: [
        'src/jade/*.jade',
        'src/jade/layout-blocks/**/*.jade'
      ],
      docs: 'src/jade/*.jade',
      templates: 'src/jade/templates/**/*.jade',
      stylus: 'src/stylus/**/*.stylus',
      overwatch: 'out/**/*.{html,js,css}'
    },
    destinations: {
      html: env,
      js: env + 'js/',
      css: env + 'css/',
      templates: 'src/coffee/templates/',
      build: '',
      dist: './dist',
      test: 'testEnv/',
    }
  }
};
