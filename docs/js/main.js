'use strict';window.lazySizesConfig=window.lazySizesConfig||{};lazySizesConfig.preloadAfterLoad=1;var isFontActive=!1,isFirefox="undefined"!==typeof InstallTrigger,isIE=!!document.documentMode,isEdge=!isIE&&!!window.StyleMedia,isChrome=!!window.chrome&&!!window.chrome.webstore,primaryBG="transparent",primaryTinge="#FFF",secondaryBG="#FFF",secondaryTinge="#000",tinge1="#4A4A4A",tinge2="#666",tinge3="#808080";
$(function(){function k(){var c=7*parseInt($(".vflow").css(".line-height"));$(".ps-link").each(function(a,b){var e=$(this);if(0==a){var f=e.width(),p=e.attr("data-size").split("x");c=(p[1]/p[0]*f).roundTo(30)}e.css("height",c+"px")})}WebFont.load({custom:{families:["TeXGyreHeros"]},google:{families:["Poppins:300,400,500,600"]},classes:!1,timeout:5E3,fontactive:function(c,a){"TeXGyreHeros"==c&&(document.documentElement.className+=" fontLoaded",isFontActive=!0,$(document).trigger("fontActive"))},fontinactive:function(a,
d){"TeXGyreHeros"==a&&(isFontActive=!0,$(document).trigger("fontActive"))}});(-1!=navigator.userAgent.indexOf("MSIE")?/MSIE (\d+\.\d+);/:/Trident.*rv[ :]*(\d+\.\d+)/).test(navigator.userAgent)&&9>=new Number(RegExp.$1)&&$("body").addClass("loader-ie9");var l=$(window).height();$(".side-right").css("min-height",l+"px");k();objectFitImages("img.ofit");$(document).on("click","a[href^='#']",function(a){var d=$(this).attr("href"),b=$(d).parents(".mCustomScrollbar");if(b.length)a.preventDefault(),b.mCustomScrollbar("scrollTo",
d);else if(b=$(this.hash),b=b.length?b:$("[name="+this.hash.substr(1)+"]"),b.length)return $("#main-wrapper").animate({scrollTop:b.offset().top},1E3),!1});$("#mi-btn, #close-info").on("click",function(a){$("#main-wrapper").toggleClass("split-active")});$(window).on("debouncedresize",function(){l=$(window).height();$(".side-right").css("min-height",l+"px");k()});isMobile.any?document.documentElement.className+=" scroll-touch":$("#main-wrapper").mCustomScrollbar({scrollInertia:150,axis:"y"});initPhotoSwipeFromDOM(".st-gallery");
$(".st-countdown").countdown("2017/12/01",function(a){$(this).text(a.strftime("%D Days %H:%M:%S"))});var a=$(".sven-container"),g=a.attr("data-freeze-prop")?parseBool(a.attr("data-freeze-prop")):!0;"undefined"!==typeof svenCustom&&(svenAnimations=$.extend(svenAnimations,svenCustom));var m=!0;isMobile.any&&(m=!1);var q="tag";isMobile.apple.device&&(q="xhr");var r=!1;if(isFirefox||isMobile.apple.device)r=!0;a.svenPlugin({autoStart:m,fullDuration:"default",letterBoxing:!0,force3DOnDevices:!1,easeOuterGPU:r,
preloadScenes:!1,preloadMethod:q,preloadFiles:[],fileTimeout:8E3,audioTimeout:8E3,initAfter:80,colors:["#E7464F","#CDAA20","#80993B","#07BABA","#9B2C9D"],showAnimationSummary:!1,freezeOnBlur:g,videoPlaybackChange:!1,onTeaserReady:function(){$(".loader-container").hide();m||$(".splash-page").show()},onTeaserEnd:function(){h.play()},onTeaserStart:function(){$(".sven-container").focus();$(".lt-main").css({"line-height":"1"});$(".pl-wrapper").show()}});var h=new TimelineMax({paused:!0}),g=$(".revealer");
h.to(g,.525,{x:"0%",ease:Expo.easeOut,onComplete:function(){$(".sven-wrapper").hide();$("#main-wrapper").show();k();objectFitImages("img.ofit");$("#bits").length&&initStompBits();$("#particles-js").length&&initStompParticles()},onCompleteParams:[]});h.to(g,.525,{x:"100%",ease:Expo.easeIn},"+=0.45");$(".pl-skip").on("click",function(c){a.svenPlugin.pauseTeaser();h.play()});$(".pl-play").on("click",function(c){a.svenPlugin.togglePlay()});$(".play-button").on("click",function(c){isMobile.apple.device||
(a.svenPlugin.togglePlay(),a.svenPlugin.togglePlay());TweenMax.to($(".splash-page"),.5,{x:"-100%",onComplete:function(){a.svenPlugin.togglePlay();$(".splash-page").remove()}})});$(document).on("keydown",function(c){a.is(":visible")&&!$("#subscribe-page").is(":visible")&&32===c.keyCode&&a.svenPlugin.togglePlay()});$(".pl-sound").on("click",function(c){a.svenPlugin.toggleSound()});var n=$(".pl-play"),t=$(".pl-sound");a.on("STPlay",function(){n.html("PAUSE")});a.on("STPause",function(){n.html("PLAY")});
a.on("STEnd",function(){n.html("RESTART")});a.on("STMuted",function(){t.addClass("strike")});a.on("STUnMuted",function(){t.removeClass("strike")});$("[type='submit']").on("click submit",function(a){var d=$(this).closest("form"),b=d.prevAll(".sven-message:first"),e=d.serialize(),f=$("input, [type='submit']","#"+d[0].id);f.prop("disabled",!0);b.css("visibility","hidden");b.css("visibility","visible").html('<i class="fa fa-hourglass-start"></i>adding your email...');d=d.attr("action");$.ajax({type:"POST",
url:d,data:e,dataType:"json",success:function(a){a.error?(b.css("visibility","hidden"),b.removeClass("error success").addClass("error").css("visibility","visible").html('<i class="fa fa-times"></i>'+a.message),f.prop("disabled",!1)):(b.css("visibility","hidden"),b.removeClass("error success").addClass("success").css("visibility","visible").html('<i class="fa fa-check"></i>'+a.message))},error:function(){b.css("visibility","hidden");b.removeClass("error success").addClass("error").css("visibility",
"visible").html('<i class="fa fa-times"></i>Problem connecting to server. Please try again');f.prop("disabled",!1)}});a.preventDefault()})});
