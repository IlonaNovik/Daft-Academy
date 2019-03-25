
var path = require("path");module.exports = {    
    entry: ["./js/main.js"],    
    output: {        
        filename: "out.js",        
        path: path.resolve(__dirname,"dist"),    
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
        }]    
    }};