const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = "development"

if (process.env.NODE_ENV === "production"){

    mode = "production"

}


module.exports = {
    mode:mode,

    module:{
        rules:[
            {
                test: /\.s?css$/,
                use:[MiniCssExtractPlugin.loader,"css-loader", "postcss-loader","sass-loader"] //allows CSS ,SCSS and postCSS support
            },
            
            {
            test:/\.js$/, //allow .js be used by babel.
            exclude: /node_modules/, //prevents babel from checking this folder.
            use:{
                loader: "babel-loader" 
            }
        }]
    },

    plugins: [new MiniCssExtractPlugin()],

    devtool:"source-map",
    devServer: {
        static: "./dist",
        hot:true    //shows changes on the project without refreshing it.
    }
}