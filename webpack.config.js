var path = require("path")
var webpack = require("webpack")
var config = []


function generateConfig(name) {
    var uglify = name.indexOf("min") > -1
    var config = {
        entry: "./index.js",
        output: {
            path:  path.resolve(__dirname, 'dist/'),
            filename: name + ".js",
            sourceMapFilename: name + ".map",
            library: "editormd"
        },
        module: {
            loaders: [
                {
                    test : /\.js$/,
                    exclude: /node_modules/,
                    loader : 'babel-loader',
                    query : {
                        presets : ["es2015"]
                    }
                }
            ]
        },
        node: {
            process: false
        },
        devtool: false
    }

    config.plugins = [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
        })
    ]

    if (uglify) {
        config.plugins.push(
            new webpack.optimize.UglifyJsPlugin({
                compressor: {
                    warnings: false
                }
            })
        )
    }

    return config
}

["editormd", "editormd.min"].forEach(function(key) {
    config.push(generateConfig(key))
})

module.exports = config
