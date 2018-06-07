/*
    stripped down config for tests
    ./webpack.config.js
*/
const path = require('path'),
      /**
      * exclude node_modules and node base modules (eg. fs)
      **/
      nodeExternals = require('webpack-node-externals'),
      /**
      * collect all transpiled static files and inject them into index.html
      * used to replace static references to transpiled files
      **/
      HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    /**
    * set type of source map, so mocha can show file and line of failed test
    **/
    devtool: 'inline-source-map',
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
    * set target to node and not browser
    **/
    target: 'node',
    /**
    * exclude node_modules and node base modules (eg. fs)
    **/
    externals: [nodeExternals({
        whitelist: []
    })],
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

            /**
            * use null loader for non-js-files as they are unneccesary for mocking and slow down the build
            **/

            {
                test: /\.css$/,
                /* instead of using a default loader, pass to extract text plugin */
                loader: 'null-loader'
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                /* instead of using a default loader, use the extract text plugin */
                loader: 'null-loader'
            },
            {
                /* load woff files via url-loader for font awesome */
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'null-loader'
            },
            {
                /* load other font files via file-loader for font awesome, exclude google fonts in static */
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'null-loader',
                exclude: /static/
            },
            {
                /* load other other static files via file-loader */
                test: /\.(json|png|ico|xml|svg)$/,
                loader: 'null-loader',
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
            COMP:       path.resolve('./client//components'),
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
        })
    ]
}
