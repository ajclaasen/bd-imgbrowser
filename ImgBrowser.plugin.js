//META{"name":"imgBrowser"}*//
var imgBrowser = function () {};

imgBrowser.prototype.onMessage = function () {
};
imgBrowser.prototype.onSwitch = function () {
};
imgBrowser.prototype.start = function () {
	$(document).on("click.dce", function(e) {
		var target = $(e.target);
		if(target.parents(".modal-image").length > 0) {
			var dlbutton = document.querySelector(".download-button");
			var link = dlbutton.getAttribute("href");
			
			var imgs = document.querySelectorAll(".embed-thumbnail-image, .attachment-image");
			var img;
			for(var i=0; i<imgs.length; i++){
				img = imgs[i];
				if(img == null)
					continue;
				else if(img.classList.contains("attachment-image"))
					img = img.firstChild; // Fix for different DOM nesting.
				
				var otherlink = img.getAttribute("href");
				
				if(link == otherlink) {
					img = imgs[i+1];
					break;
				}
			}
			
			// Don't do anything if last image.
			if(img == null)
				return;
			else if(img.classList.contains("attachment-image"))
				img = img.firstChild; // Fix for different DOM nesting.
			
			// Exit the current image
			document.elementFromPoint(1, 1).click(); 
			
			// Click on the element that opens then next image.
			img.firstChild.click();
		}
	})
};
imgBrowser.prototype.load = function () {};
imgBrowser.prototype.unload = function () {
	$(document).off("click.dce");
};
imgBrowser.prototype.stop = function () {
	$(document).off("click.dce");
};
imgBrowser.prototype.getSettingsPanel = function () {
    return "";
};

imgBrowser.prototype.getName = function () {
    return "Image Browser";
};
imgBrowser.prototype.getDescription = function () {
    return "Go to the next image in a chat by clicking on a zoomed in one.";
};
imgBrowser.prototype.getVersion = function () {
    return "0.1.0";
};
imgBrowser.prototype.getAuthor = function () {
    return "Eldrazor";
};