var path = require("path");

module.exports = {    
    entry: ["./js/main.js"],    
    output: {        
        filename: "out.js",        
        path: path.resolve(__dirname,"docs"),    
    },    watch: true,    
    module: {        
        rules: [{            
            test: /\.js$/,            
            exclude: /node_modules/,            
            use: {                
                loader: 'babel-loader',                
                options: {                    
                    presets: ['es2015']                
                }            
            }        
        },
        {
            test: /\.s(a|c)ss$/,
            use: [
              {
                loader: "style-loader" // creates style nodes from JS strings
              },
              {
                loader: "css-loader" // translates CSS into CommonJS
              },
              {
                loader: "sass-loader" // compiles Sass to CSS
              }
            ]
          }]    
    }
};
