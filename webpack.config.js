const Encore = require('@symfony/webpack-encore');

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    // directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/build')
    // only needed for CDN's or sub-directory deploy
    //.setManifestKeyPrefix('build/')

    /*
     * ENTRY CONFIG
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if your JavaScript imports CSS.
     */
    .addEntry("app", "./assets/app.js")
    .addEntry("slider", "./assets/slider.js")
    .addEntry("burger", "./assets/burger.js")
    .addEntry("about", "./assets/about.js")
    .addEntry("annonce", "./assets/annonce.js")
    .addEntry("contact", "./assets/contact.js")
    .addEntry("faq", "./assets/faq.js")
    .addEntry("mentions", "./assets/mentions.js")
    .addEntry("signup", "./assets/signup.js")
    .addEntry("profil", "./assets/profil.js")
    .addEntry("createAnnonce", "./assets/createAnnonce.js")
    .addEntry("signup2", "./assets/signup2.js")
    .addEntry("validation", "./assets/validation.js")
    .addEntry("cgu", "./assets/cgu.js")
    .addEntry("error404", "./assets/error404.js")
    .addEntry("login", "./assets/login.js")
    .addEntry("payment", "./assets/payment.js")
    .addEntry("recap", "./assets/recap.js")
    .addEntry("verify", "./assets/verify.js")
    .addEntry("errors", "./assets/errors.js")
    .addEntry("editAnnonce", "./assets/editAnnonce.js")
    .addEntry("redirectionPayment", "./assets/redirectionPayment.js")
    .addEntry("slidePrix", "./assets/slidePrix.js")

    // enables the Symfony UX Stimulus bridge (used in assets/bootstrap.js)
    .enableStimulusBridge('./assets/controllers.json')

    // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
    .splitEntryChunks()

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .enableSingleRuntimeChunk()

    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    //.enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    .configureBabel((config) => {
        config.plugins.push('@babel/plugin-proposal-class-properties');
    })

    // enables @babel/preset-env polyfills
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = 3;
    })
    
    .enablePostCssLoader()
    // enables Sass/SCSS support
    //.enableSassLoader()

    // uncomment if you use TypeScript
    //.enableTypeScriptLoader()

    // uncomment if you use React
    //.enableReactPreset()

    // uncomment to get integrity="..." attributes on your script & link tags
    // requires WebpackEncoreBundle 1.4 or higher
    //.enableIntegrityHashes(Encore.isProduction())

    // uncomment if you're having problems with a jQuery plugin
    //.autoProvidejQuery()
;

module.exports = Encore.getWebpackConfig();