exports.config = {
  // See http://brunch.io/#documentation for docs.
  files: {
    javascripts: {
      joinTo: "js/app.js"
    },
    stylesheets: {
      joinTo: "css/app.css"
    },
    templates: {
      joinTo: "js/app.js"
    }
  },

  conventions: {
    ignored: [
      /[\\/]_/,
      /.*\.d\.ts$/
    ]
  },

  paths: {
    watched: [
      "src"
    ],

    // Where to compile files to
    public: "_build"
  },

  // Configure your plugins
  plugins: {
    babel: {
      // Do not use ES6 compiler in vendor code
      ignore: [/^lib/]
    },
    postcss: {
      processors: [
        require('autoprefixer')(['last 80 versions'])
      ]
    },
    brunchTypescript: {
      ignoreErrors: [
        2503 // Cannot find namespace {0}
      ]
    }
  },

  modules: {
    autoRequire: {
      "js/app.js": ["src/js/app"]
    }
  },

  npm: {
    enabled: true,
    whitelist: []
  }
};
