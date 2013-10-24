define(["cs!productsRouter"], function(productsRouter){
	console.log("it works!");
	new productsRouter.ProductsRouter();
	Backbone.history.start();
});