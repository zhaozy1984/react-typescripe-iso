var fs = require('fs');
module.exports = {
    entry: "./src/server.ts",
    output: {
        filename: "server.js",
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            compilerOptions: {
                                declaration: false,
                            },
                        },
                    },
                ],
            },
        ]
    },
    target: "node",
};