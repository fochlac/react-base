/*
    ./webpack.config.js
*/
const path = require('path'),
      /**
      * collect all transpiled static files and inject them into index.html
      * used to replace static references to transpiled files
      **/
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      /**
      * extract text from the files and write to configured file
      * used to import css files
      **/
      ExtractTextPlugin = require("extract-text-webpack-plugin"),
      /**
      * lightweight service worker bundle:
      * transpiles service worker and provides static assets as variable in the sw
      **/
      ServiceWorkerWebpackPlugin = require("serviceworker-webpack-plugin"),
      /**
      * download google fonts as static dependencies
      **/
      GoogleFontsPlugin = require("google-fonts-webpack-plugin");

module.exports = {
    /**
    * set entry point for resolving imports
    **/
    entry: [
        './client/index.js'
    ],
    /**
    * configure output
    **/
    output: {
        /* path to write static content to */
        path: path.resolve(__dirname, 'dist'),
        /* file to transpile javascript into */
        filename: 'index_bundle.js',
        /* relative path of static content on the server */
        publicPath: '/static/'
    },
    /**
    * configure transpiling
    **/
    module: {
        /**
        * loaders test all imported files against the regex under 'test' and pass them to the provided 'loader'
        **/
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                /* exclude node_modules for import -> faster compiling */
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                /* instead of using a default loader, pass to extract text plugin */
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    /* use css-loader to parse css */
                    use: "css-loader"
                })
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                /* instead of using a default loader, use the extract text plugin */
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    /* use less-loader to parse less, then pass to css loader */
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "less-loader"
                    }]
                })
            },
            {
                /* load woff files via url-loader for font awesome */
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                /* load other font files via file-loader for font awesome, exclude google fonts in static */
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader",
                exclude: /static/
            },
            {
                /* load other other static files via file-loader */
                test: /\.(json|png|ico|xml|svg)$/,
                loader: "file-loader",
                options: {
                    name: '[name].[ext]'
                }
            }
        ],
    },
    /**
    * set variables for import paths
    **/
    resolve: {
        /* use for the following extensions */
        extensions: ['.js', '.jsx', 'less'],
        /* variable - path map */
        alias: {
            APP:        path.resolve('./client/app'),
            COMP:       path.resolve('./client/app/components'),
            UTIL:       path.resolve('./client/app/utils'),
            VIEW:       path.resolve('./client/app/views'),
            STORE:      path.resolve('./client/app/store'),

            /* set path to runtime for ServiceWorkerWebpackPlugin as variable to allow to mock it in tests */
            SW:         path.resolve('./node_modules/serviceworker-webpack-plugin/lib')
        }
    },
    /**
    * configure plugins
    **/
    plugins: [
        new ExtractTextPlugin({
            /* set output file, uses output path */
            filename: "styles.css"
        }),
        new ServiceWorkerWebpackPlugin({
            /* set entry file */
            entry: './client/sw.js',
            /* set output file, uses output path */
            filename: 'sw.js'
        }),
        new HtmlWebpackPlugin({
            /* set entry file to inject dependencies into */
            template: './client/index.html',
            /* set output file, uses output path */
            filename: 'index.html',
            /* set injection position */
            inject: 'body',
            /* minification settings */
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),
        new GoogleFontsPlugin({
            /* configure font dependencies */
            fonts: [
                {
                  family: "Raleway", variants: [ "400", "600"]
                }
            ]
        })
    ]
}
