jQuery(function($){

	//Define seller settings
	var UserID = "phelpsgaskets";
	var StoreID = "phelpsgaskets";
	var ImgURL = "http://www.suncoasttools.com/Ebay/";
	var settings = {
		"UserID":UserID,
		"loadingClass": "loading",
		"serviceUrl": "http://ebay.sunandfuninoc.com/ebay.php"
	};
	
	//Store header
	var header = "\n\r<div id=\"x-head-wrap\"><div id=\"x-head\">" +
		"	<!-- head logo -->" +
		"	<a id=\"x-head-logo\" title=\""+StoreID+" eBay Store\" href=\"http:\/\/stores.ebay.com\/"+StoreID+"\"><!-- sp --><\/a>" +
		
		"	<!-- head contact link -->" +
		"	<a id=\"x-head-cont\" href=\"http:\/\/contact.ebay.com\/ws\/eBayISAPI.dll?ContactUserNextGen&recipient="+UserID+"\">Ask Seller a Question<\/a>" +
		
		"	<!-- head top menu navigation -->" +
		"	<div id=\"x-head-topm\">" +
		"		<a href=\"http:\/\/stores.ebay.com\/"+StoreID+"\">Home<\/a> &nbsp;\/&nbsp; " +
		"		<a href=\"http:\/\/stores.ebay.com\/"+StoreID+"\/_i.html?rt=nc&_sop=10&_sc=1\">New Listings<\/a> &nbsp;\/&nbsp; " +
		"		<a href=\"http:\/\/feedback.ebay.com\/ws\/eBayISAPI.dll?ViewFeedback&userid="+UserID+"\">Feedback<\/a> &nbsp;\/&nbsp; " +
		"		<a href=\"http:\/\/www.ebay.com\/usr\/"+UserID+"\">Meet the Seller<\/a> &nbsp;\/&nbsp; " +
		"		<a href=\"http:\/\/my.ebay.com\/ws\/eBayISAPI.dll?AcceptSavedSeller&amp;linkname=includenewsletter&amp;sellerid="+UserID+"\">Save This Seller<\/a> &nbsp;\/&nbsp; " +
		"		<a href=\"http:\/\/my.ebay.com\/ws\/eBayISAPI.dll?AcceptSavedSeller&amp;linkname=includenewsletter&amp;sellerid="+UserID+"\">Store Newsletter<\/a>" +
		"	<\/div>" +
		
		"	<!-- head search -->" +
		"	<form id=\"x-head-srch\" method=\"get\" name=\"search\" action=\"http:\/\/stores.ebay.com\/"+StoreID+"\">" +
		"		 <input id=\"x-head-srch-bttn\" name=\"submit\" type=\"submit\" value=\"&nbsp\">" +
		"		 <input id=\"x-head-srch-sbox\" onblur=\"if (this.value == '') this.value = 'Search Our Products...';\" onfocus=\"if (this.value == 'Search Our Products...') this.value = '';\" value=\"Search Our Products...\" maxlength=\"300\" name=\"_nkw\"  type=\"text\">" +
		"	<\/form>" +
		
		"<\/div><\/div>";
	if($(".x-bg").length > 0) { $("#x-head-pull").after(header); }
	
	//Store left column
	var left = "\n\r" +
		"	<!-- left categories menu -->" +
		"	<div id=\"x-side-cats\" class=\"x-tbar\"><div class=\"x-tmid\">" +
		"		 <ul class=\"lev1\">" +
		"		 	<li><a href=\"http:\/\/stores.ebay.com\/"+StoreID+"_W0QQ_fsubZ20042583010\">Compression Packing<\/a><\/li>" +
		"		 	<li><a href=\"http:\/\/stores.ebay.com\/"+StoreID+"_W0QQ_fsubZ20089290010\">Gaskets<\/a><\/li>" +
		"		 	<li><a href=\"http:\/\/stores.ebay.com\/"+StoreID+"_W0QQ_fsubZ20089291010\">Compressed Sheet<\/a><\/li>" +
		"		 	<li><a href=\"http:\/\/stores.ebay.com\/"+StoreID+"_W0QQ_fsubZ20089292010\">Gasket Material<\/a><\/li>" +
		"		 	<li><a href=\"http:\/\/stores.ebay.com\/"+StoreID+"_W0QQ_fsubZ120089293010\">"O" Rings, Molded Parts<\/a><\/li>" +
		"		 	<li><a href=\"http:\/\/stores.ebay.com\/"+StoreID+"_W0QQ_fsubZ20089294010\">Metal Gaskets<\/a><\/li>" +
		"		 	<li><a href=\"http:\/\/stores.ebay.com\/"+StoreID+"_W0QQ_fsubZ20089295010\">Marine Products<\/a><\/li>" +
		"		 	<li><a href=\"http:\/\/stores.ebay.com\/"+StoreID+"_W0QQ_fsubZ20089296010\">Mechanical Seals<\/a><\/li>" +
		"		 	<li><a href=\"http:\/\/stores.ebay.com\/"+StoreID+"_W0QQ_fsubZ200892970102\">Additional Products<\/a><\/li>" +
		"		<\/ul>" +
		"	<\/div><div class=\"x-tbtm\"><!-- sp --><\/div><\/div>" +
		
		"	<!-- left newsletter text box -->" +
		"	<div id=\"x-side-news\" class=\"x-tbar\"><div class=\"x-tmid\"><div class=\"x-tins\">" +
		"		<p>Add <span>Phelps Gaskets<\/span> to your Favorites and receive our email newsletters about new items and special promotions!<\/p>" +
		"		<p class=\"x-ckbx\"><input type=\"checkbox\" checked id=\"general\" name=\"nlchxbox\"><label for=\"general\">General Interest<\/label><\/p>" +
		"		<a target=\"_blank\" href=\"http:\/\/my.ebay.com\/ws\/eBayISAPI.dll?AcceptSavedSeller&amp;linkname=includenewsletter&amp;sellerid="+UserID+"\" id=\"x-side-news-bttn\" title=\"Sign Up\"><!-- sign up --><\/a>" +
		"	<\/div><\/div><div class=\"x-tbtm\"><!-- sp --><\/div><\/div>" +
		
		"	<!-- left promo graphics -->" +
		"	<img src=\""+ImgURL+"images\/x-side-ppal.png\" class=\"x-prom\" alt=\"We accept PayPal\">" +
		"	<img src=\""+ImgURL+"images\/x-side-bbbb.png\" class=\"x-prom\" alt=\"Better Business Bureau Accredited Business\">" +
		"";
	if($(".x-content").length > 0) { $("#x-left-pull").after(left); }
	
	//Store categories population
	if($("#x-side-cats").length > 0) { if($("#LeftPanel .lcat").length > 0) { $("#x-side-cats .x-tmid").html($("#LeftPanel .lcat").html()); } }
	
	//Footer
	var footer = "\n\r<div id=\"x-foot-wrap\"><div id=\"x-foot\">" +
		"	<!-- foot menu -->" +
		"	<div id=\"x-foot-subm\">" +
		"		<a href=\"http:\/\/stores.ebay.com\/"+StoreID+"\">Home<\/a> &nbsp;|&nbsp; " +
		"		<a href=\"http:\/\/stores.ebay.com\/"+StoreID+"\/_i.html?rt=nc&_sop=10&_sc=1\">View New Listings<\/a> &nbsp;|&nbsp; " +
		"		<a href=\"http:\/\/feedback.ebay.com\/ws\/eBayISAPI.dll?ViewFeedback&userid="+UserID+"\">Our Positive Feedback<\/a> &nbsp;|&nbsp; " +
		"		<a href=\"http:\/\/www.ebay.com\/usr\/"+UserID+"\">Meet the Seller<\/a> &nbsp;|&nbsp; " +
		"		<a href=\"http:\/\/my.ebay.com\/ws\/eBayISAPI.dll?AcceptSavedSeller&amp;linkname=includenewsletter&amp;sellerid="+UserID+"\">Store Newsletter<\/a> &nbsp;|&nbsp; " +
		"		<a href=\"http:\/\/my.ebay.com\/ws\/eBayISAPI.dll?AcceptSavedSeller&amp;linkname=includenewsletter&amp;sellerid="+UserID+"\">Save This Seller<\/a> &nbsp;|&nbsp; " +
		"		<a href=\"http:\/\/contact.ebay.com\/ws\/eBayISAPI.dll?ContactUserNextGen&recipient="+UserID+"\">Ask Seller a Question<\/a>" +
		"	<\/div>" +
		
		"	<!-- foot copyright -->" +
		"	<div id=\"x-foot-copy\">Copyright &copy; "+d.getFullYear()+" <a href=\"http:\/\/stores.ebay.com\/"+StoreID+"\">Phelps Industrial Products, Inc.<\/a> All Rights Reserved.<\/div>" +
		"<\/div><\/div>";
	if($(".x-content").length > 0) { $(".x-content").after(footer); }
	
	//Custom style additions
	if($("#x-head-menu").find("li").length > 0)						{ $("#x-head-menu").find("li:first").addClass("first"); }
	if($("#x-head-menu").find("li").length > 0)	  		  			{ $("#x-head-menu").find("li:last").addClass("last"); }
	if($("#LeftPanel ul.lev1").find("li").length > 0) 					{ $("#LeftPanel ul.lev1").find("li:first").addClass("first"); }
	if($("#LeftPanel ul.lev1").find("li").length > 0)	  				{ $("#LeftPanel ul.lev1").find("li:last").addClass("last"); }
	if($(".x-fp table.fixed").find("tr").length > 0)						{ $(".x-fp table.fixed").find("tr:first td:first").addClass("x-hide"); }
	if($("#x-feat .x-test table.fixed").find("tr").length > 0)		{ $("#x-feat .x-test table.fixed").find("tr:first td:first").removeClass("x-hide"); }
	if($("#x-main-tabs").length > 0)					  					{ $("#x-main-tabs").find("a:first img").addClass("first"); }
	if($("#x-main-tabs").length > 0)										{ $("#x-main-tabs").find("a:last img").addClass("last"); }
	if($("#x-spec").find("table").length > 0)							{ $("#x-spec").find("table tr:last").addClass("last"); }
	
});
