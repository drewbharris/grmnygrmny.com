var Application = {
	begin: function(){
		this.changeContent('releases');
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
		$("#releases-button").click(function(event){
			event.preventDefault();
			this.changeContent('releases');
		}.bind(this));
		$("#about-button").click(function(event){
			event.preventDefault();
			this.changeContent('about');
		}.bind(this));
		$("#contact-button").click(function(event){
			event.preventDefault();
			this.changeContent('contact');
		}.bind(this));
	},
	setHash: function(hash){
		window.location.hash = hash;
	}
};

Application.begin();