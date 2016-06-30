var etp=require("extract-text-webpack-plugin");
var htmlWebpackPlugin=require("html-webpack-plugin");

module.exports={
	plugins:[	
		new etp("[hash]-bundle.css"),
		new htmlWebpackPlugin({			
			template:"./index.html"
		})
	],
	
	entry:{
		main:"./main.js"
	
	},
	output:{
		path:"./build/",
		filename:"[hash]-bundle.js"
	},
	module:{
	
		loaders:[		
			{
				test:/\.css$/,
				loader:etp.extract("css-loader")				
			},
			{
				test:/\.html$/,
				loader:"html"
			},
			{
				test:/\.(png|jpg)$/,
				loader:"file-loader?name=img/[name].[ext]"
			}
		]
	},
	resolve:{
		
		extensions:["",".js",".css"]
	}
	
	
}
