/*
 * FancyBox - jQuery Plugin
 * simple and fancy lightbox alternative
 *
 * Copyright (c) 2009 Janis Skarnelis
 * Examples and documentation at: http://fancybox.net
 * 
 * Version: 1.2.6 (16/11/2009)
 * Requires: jQuery v1.3+
 * 
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

function browserMigrate(){var a,m,n;a=navigator.userAgent;a=a.toLowerCase();m=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||0>a.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];a=m[1]||"";m=m[2]||"0";n={};a&&(n[a]=!0,n.version=m);n.chrome?n.webkit=!0:n.webkit&&(n.safari=!0);jQuery.browser?jQuery.extend(jQuery.browser,n):jQuery.browser=n}browserMigrate();
(function(a){a.fn.fixPNG=function(){return this.each(function(){var b=a(this).css("backgroundImage");if(b.match(/^url\(["']?(.*\.png)["']?\)$/i))b=RegExp.$1,a(this).css({backgroundImage:"none",filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod="+(a(this).css("backgroundRepeat")=="no-repeat"?"crop":"scale")+", src='"+b+"')"}).each(function(){var b=a(this).css("position");b!="absolute"&&b!="relative"&&a(this).css("position","relative")})})};var h,b,k=false,f=new Image,
l,i=1,p=/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i,q=null,j=a.browser.msie&&a.browser.version.substr(0,1)==6&&!window.XMLHttpRequest,r=j||a.browser.msie&&a.browser.version.substr(0,1)==7;a.fn.fancybox=function(c){function d(){a("#fancy_right, #fancy_left, #fancy_close, #fancy_title").hide();var c=b.itemArray[b.itemCurrent].href;if(c.match("iframe")||h.className.indexOf("iframe")>=0)a.fn.fancybox.showLoading(),n('<iframe id="fancy_frame" onload="jQuery.fn.fancybox.showIframe()" name="fancy_iframe'+Math.round(Math.random()*
1E3)+'" frameborder="0" hspace="0" src="'+c+'"></iframe>',b.frameWidth,b.frameHeight);else if(c.match(/#/)){var e=window.location.href.split("#")[0],e=c.replace(e,""),e=e.substr(e.indexOf("#"));n('<div id="fancy_div">'+a(e).html()+"</div>",b.frameWidth,b.frameHeight)}else c.match(p)&&!c.match(/zoomData/)?(f=new Image,f.src=c,f.complete?s():(a.fn.fancybox.showLoading(),a(f).unbind().bind("load",function(){a("#fancy_loading").hide();s()}))):(a.fn.fancybox.showLoading(),a.get(c,function(b){a("#fancy_loading").hide();
tempData=b.replace(/<script{1}.*>*<\/script>/i,"");a("<DIV />").attr("id","fancyTemp").css({display:"none",minWidth:150,minHeight:150}).html(tempData).appendTo("body");var c=a("#fancyTemp").outerWidth(),t=a("#fancyTemp").outerHeight();a("#fancyTemp").remove();n('<div id="fancy_ajax">'+b+"</div>",c,t)}))}function s(){var c=f.width,e=f.height,m=b.padding*2+40,g=b.padding*2+60,d=a.fn.fancybox.getViewport();if(b.imageScale&&(c>d[0]-m||e>d[1]-g))m=Math.min(Math.min(d[0]-m,c)/c,Math.min(d[1]-g,e)/e),c=
Math.round(m*c),e=Math.round(m*e);n('<img alt="" id="fancy_img" src="'+f.src+'" />',c,e)}function u(){if(b.itemArray.length-1>b.itemCurrent){var a=b.itemArray[b.itemCurrent+1].href||false;if(a&&a.match(p)&&!a.match(/zoomData/))objNext=new Image,objNext.src=a}if(b.itemCurrent>0&&(a=b.itemArray[b.itemCurrent-1].href||false)&&a.match(p)&&!a.match(/zoomData/))objNext=new Image,objNext.src=a}function n(c,e,d){k=true;var g=b.padding;if(r||q)a("#fancy_content")[0].style.removeExpression("height"),a("#fancy_content")[0].style.removeExpression("width");
if(g>0){if(e+=g*2,d+=g*2,a("#fancy_content").css({top:g+"px",right:g+"px",bottom:g+"px",left:g+"px",width:"auto",height:"auto"}),r||q)a("#fancy_content")[0].style.setExpression("height","(this.parentNode.clientHeight - "+g*2+")"),a("#fancy_content")[0].style.setExpression("width","(this.parentNode.clientWidth - "+g*2+")")}else a("#fancy_content").css({top:0,right:0,bottom:0,left:0,width:"100%",height:"100%"});if(a("#fancy_outer").is(":visible")&&e==a("#fancy_outer").width()&&d==a("#fancy_outer").height())a("#fancy_content").fadeOut("fast",
function(){a("#fancy_content").empty().append(a(c)).fadeIn("normal",function(){o()})});else{var g=a.fn.fancybox.getViewport(),h=d+60>g[1]?g[3]:g[3]+Math.round((g[1]-d-60)*0.5),f={left:e+40>g[0]?g[2]:g[2]+Math.round((g[0]-e-40)*0.5),top:h,width:e+"px",height:d+"px"};if(a("#fancy_outer").is(":visible"))a("#fancy_content").fadeOut("normal",function(){a("#fancy_content").empty();a("#fancy_outer").animate(f,b.zoomSpeedChange,b.easingChange,function(){a("#fancy_content").append(a(c)).fadeIn("normal",function(){o()})})});
else if(b.zoomSpeedIn>0&&b.itemArray[b.itemCurrent].orig!==void 0){a("#fancy_content").empty().append(a(c));e=b.itemArray[b.itemCurrent].orig;d=a.fn.fancybox.getPosition(e);a("#fancy_outer").css({left:d.left-20-b.padding+"px",top:d.top-20-b.padding+"px",width:a(e).width()+b.padding*2,height:a(e).height()+b.padding*2});if(b.zoomOpacity)f.opacity="show";a("#fancy_outer").animate(f,b.zoomSpeedIn,b.easingIn,function(){o()})}else a("#fancy_content").hide().empty().append(a(c)).show(),a("#fancy_outer").css(f).fadeIn("normal",
function(){o()})}}function l(){b.itemCurrent!==0&&(a("#fancy_left, #fancy_left_ico").unbind().bind("click",function(a){a.stopPropagation();b.itemCurrent--;d();return false}),a("#fancy_left").show());b.itemCurrent!=b.itemArray.length-1&&(a("#fancy_right, #fancy_right_ico").unbind().bind("click",function(a){a.stopPropagation();b.itemCurrent++;d();return false}),a("#fancy_right").show())}function o(){a.browser.msie&&(a("#fancy_content")[0].style.removeAttribute("filter"),a("#fancy_outer")[0].style.removeAttribute("filter"));
l();u();a(document).bind("keydown.fb",function(c){c.keyCode==27&&b.enableEscapeButton?a.fn.fancybox.close():c.keyCode==37&&b.itemCurrent!==0?(a(document).unbind("keydown.fb"),b.itemCurrent--,d()):c.keyCode==39&&b.itemCurrent!=b.itemArray.length-1&&(a(document).unbind("keydown.fb"),b.itemCurrent++,d())});b.hideOnContentClick&&a("#fancy_content").click(a.fn.fancybox.close);b.overlayShow&&b.hideOnOverlayClick&&a("#fancy_overlay").bind("click",a.fn.fancybox.close);b.showCloseButton&&a("#fancy_close").bind("click",
a.fn.fancybox.close).show();if(typeof b.itemArray[b.itemCurrent].title!=="undefined"&&b.itemArray[b.itemCurrent].title.length>0){var c=a("#fancy_outer").position();a("#fancy_title div").text(b.itemArray[b.itemCurrent].title).html();a("#fancy_title").css({top:c.top+a("#fancy_outer").outerHeight()-32,left:c.left+(a("#fancy_outer").outerWidth()*0.5-a("#fancy_title").width()*0.5)}).show()}b.overlayShow&&j&&a("embed, object, select",a("#fancy_content")).css("visibility","visible");a.isFunction(b.callbackOnShow)&&
b.callbackOnShow(b.itemArray[b.itemCurrent]);a.browser.msie&&(a("#fancy_outer")[0].style.removeAttribute("filter"),a("#fancy_content")[0].style.removeAttribute("filter"));k=false}var i=a.extend({},a.fn.fancybox.defaults,c),v=this;return this.unbind("click.fb").bind("click.fb",function(){h=this;b=a.extend({},i);if(!k){a.isFunction(b.callbackOnStart)&&b.callbackOnStart();b.itemArray=[];b.itemCurrent=0;if(i.itemArray.length>0)b.itemArray=i.itemArray;else{var c={};if(!h.rel||h.rel==""){c={href:h.href,
title:h.title};c.orig=a(h).children("img:first").length?a(h).children("img:first"):a(h);if(c.title==""||typeof c.title=="undefined")c.title=c.orig.attr("alt");b.itemArray.push(c)}else for(var e=a(v).filter("a[rel="+h.rel+"]"),f=0;f<e.length;f++){c={href:e[f].href,title:e[f].title};c.orig=a(e[f]).children("img:first").length?a(e[f]).children("img:first"):a(e[f]);if(c.title==""||typeof c.title=="undefined")c.title=c.orig.attr("alt");b.itemArray.push(c)}}for(;b.itemArray[b.itemCurrent].href!=h.href;)b.itemCurrent++;
b.overlayShow&&(j&&(a("embed, object, select").css("visibility","hidden"),a("#fancy_overlay").css("height",a(document).height())),a("#fancy_overlay").css({"background-color":b.overlayColor,opacity:b.overlayOpacity}).show());a(window).bind("resize.fb scroll.fb",a.fn.fancybox.scrollBox);d()}return false})};a.fn.fancybox.scrollBox=function(){var c=a.fn.fancybox.getViewport();if(b.centerOnScroll&&a("#fancy_outer").is(":visible")){var d=a("#fancy_outer").outerWidth(),f=a("#fancy_outer").outerHeight(),
h={top:f>c[1]?c[3]:c[3]+Math.round((c[1]-f)*0.5),left:d>c[0]?c[2]:c[2]+Math.round((c[0]-d)*0.5)};a("#fancy_outer").css(h);a("#fancy_title").css({top:h.top+f-32,left:h.left+(d*0.5-a("#fancy_title").width()*0.5)})}j&&a("#fancy_overlay").is(":visible")&&a("#fancy_overlay").css({height:a(document).height()});a("#fancy_loading").is(":visible")&&a("#fancy_loading").css({left:(c[0]-40)*0.5+c[2],top:(c[1]-40)*0.5+c[3]})};a.fn.fancybox.getNumeric=function(b,d){return parseInt(a.curCSS(b.jquery?b[0]:b,d,true))||
0};a.fn.fancybox.getPosition=function(b){var d=b.offset();d.top+=a.fn.fancybox.getNumeric(b,"paddingTop");d.top+=a.fn.fancybox.getNumeric(b,"borderTopWidth");d.left+=a.fn.fancybox.getNumeric(b,"paddingLeft");d.left+=a.fn.fancybox.getNumeric(b,"borderLeftWidth");return d};a.fn.fancybox.showIframe=function(){a("#fancy_loading").hide();a("#fancy_frame").show()};a.fn.fancybox.getViewport=function(){return[a(window).width(),a(window).height(),a(document).scrollLeft(),a(document).scrollTop()]};a.fn.fancybox.animateLoading=
function(){a("#fancy_loading").is(":visible")?(a("#fancy_loading > div").css("top",i*-40+"px"),i=(i+1)%12):clearInterval(l)};a.fn.fancybox.showLoading=function(){clearInterval(l);var b=a.fn.fancybox.getViewport();a("#fancy_loading").css({left:(b[0]-40)*0.5+b[2],top:(b[1]-40)*0.5+b[3]}).show();a("#fancy_loading").bind("click",a.fn.fancybox.close);l=setInterval(a.fn.fancybox.animateLoading,66)};a.fn.fancybox.close=function(){k=true;a(f).unbind();a(document).unbind("keydown.fb");a(window).unbind("resize.fb scroll.fb");
a("#fancy_overlay, #fancy_content, #fancy_close").unbind();a("#fancy_close, #fancy_loading, #fancy_left, #fancy_right, #fancy_title").hide();__cleanup=function(){a("#fancy_overlay").is(":visible")&&a("#fancy_overlay").fadeOut("fast");a("#fancy_content").empty();b.centerOnScroll&&a(window).unbind("resize.fb scroll.fb");j&&a("embed, object, select").css("visibility","visible");a.isFunction(b.callbackOnClose)&&b.callbackOnClose();k=false};if(a("#fancy_outer").is(":visible")!==false)if(b.zoomSpeedOut>
0&&b.itemArray[b.itemCurrent].orig!==void 0){var c=b.itemArray[b.itemCurrent].orig,d=a.fn.fancybox.getPosition(c),c={left:d.left-20-b.padding+"px",top:d.top-20-b.padding+"px",width:a(c).width()+b.padding*2,height:a(c).height()+b.padding*2};if(b.zoomOpacity)c.opacity="hide";a("#fancy_outer").stop(false,true).animate(c,b.zoomSpeedOut,b.easingOut,__cleanup)}else a("#fancy_outer").stop(false,true).fadeOut("fast",__cleanup);else __cleanup();return false};a.fn.fancybox.build=function(){var b="";b+='<div id="fancy_overlay"></div>';
b+='<div id="fancy_loading"><div></div></div>';b+='<div id="fancy_outer">';b+='<div id="fancy_inner">';b+='<div id="fancy_close"></div>';b+='<div id="fancy_bg"><div class="fancy_bg" id="fancy_bg_n"></div><div class="fancy_bg" id="fancy_bg_ne"></div><div class="fancy_bg" id="fancy_bg_e"></div><div class="fancy_bg" id="fancy_bg_se"></div><div class="fancy_bg" id="fancy_bg_s"></div><div class="fancy_bg" id="fancy_bg_sw"></div><div class="fancy_bg" id="fancy_bg_w"></div><div class="fancy_bg" id="fancy_bg_nw"></div></div>';
b+='<a href="javascript:;" id="fancy_left"><span class="fancy_ico" id="fancy_left_ico"></span></a><a href="javascript:;" id="fancy_right"><span class="fancy_ico" id="fancy_right_ico"></span></a>';b+='<div id="fancy_content"></div>';b+="</div>";b+="</div>";b+='<div id="fancy_title"></div>';a(b).appendTo("body");a('<table cellspacing="0" cellpadding="0" border="0"><tr><td class="fancy_title" id="fancy_title_left"></td><td class="fancy_title" id="fancy_title_main"><div></div></td><td class="fancy_title" id="fancy_title_right"></td></tr></table>').appendTo("#fancy_title");
a.browser.msie&&a(".fancy_bg").fixPNG();if(j)a("div#fancy_overlay").css("position","absolute"),a("#fancy_loading div, #fancy_close, .fancy_title, .fancy_ico").fixPNG(),a("#fancy_inner").prepend('<iframe id="fancy_bigIframe" src="javascript:false;" scrolling="no" frameborder="0"></iframe>'),b=a("#fancy_bigIframe")[0].contentWindow.document,b.open(),b.close()};a.fn.fancybox.defaults={padding:10,imageScale:true,zoomOpacity:true,zoomSpeedIn:0,zoomSpeedOut:0,zoomSpeedChange:300,easingIn:"swing",easingOut:"swing",
easingChange:"swing",frameWidth:560,frameHeight:340,overlayShow:true,overlayOpacity:0.3,overlayColor:"#666",enableEscapeButton:true,showCloseButton:true,hideOnOverlayClick:true,hideOnContentClick:true,centerOnScroll:true,itemArray:[],callbackOnStart:null,callbackOnShow:null,callbackOnClose:null};a(document).ready(function(){q=a.browser.msie&&!a.boxModel;a("#fancy_outer").length<1&&a.fn.fancybox.build()})})(jQuery);