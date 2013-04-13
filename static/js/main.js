var Application = {
	begin: function(){
		this.changeContent('albums');
		this.setupCallbacks();
	},
	changeContent: function(contentName){
		console.log($("#content-" + contentName));
		var source = $("#content-" + contentName).html();
		var content = Handlebars.compile(source);
		$("#content").html(content);
		$("#content-title").html(contentName);
		$(".nav-button").removeClass("active");
		$("#" + contentName + "-button").addClass("active");
		// this.setHash(contentName);
	},
	setupCallbacks: function(){
		$("#albums-button").click(function(event){
			this.changeContent('albums');
		}.bind(this));
		$("#about-button").click(function(event){
			this.changeContent('about');
		}.bind(this));
		$("#contact-button").click(function(event){
			this.changeContent('contact');
		}.bind(this));
	},
	setHash: function(hash){
		window.location.hash = hash;
	}
};

Application.begin();