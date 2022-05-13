let mode = "development"

if (process.env.NODE_ENV === "production"){

    mode = "production"

}


module.exports = {
    mode:mode,

    module:{
        rules:[{
            test:/\.js$/, //allow .js be used by babel
            exclude: /node_modules/, //prevents babel from checking this folder
            use:{
                loader: "babel-loader" 
            }
        }]
    },

    devtool:"source-map",
    devServer: {
        static: "./dist"
    }
}