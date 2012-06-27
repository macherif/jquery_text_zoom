(function($){
    $.fn.extend({
        //plugin name - animatemenu
        zoom: function(options) {
 
    	var defaults = {
            	defaultFontSize: 12,
                targetMenuId : 'menu-resize',
                targetToResizeId : 'target-resize',
                imgIncreaseSrc : 'img/zoom_plus.gif',
                imgDecreaseSrc : 'img/zoom_moins.gif',
                imgResetSrc : 'img/reset_icon.png'
            }
             
            var options = $.extend(defaults, options);
         
            return this.each(function() {
                  var o =options;
                  var style = '<style>'
                      + '#increaseImg { background:transparent url('+o.imgIncreaseSrc+') no-repeat 0 0; }'
                      + '#decreaseImg { background:transparent url('+o.imgDecreaseSrc+') no-repeat 0 0; }'
                      + '#resetImg { background:transparent url('+o.imgResetSrc+') no-repeat 0 0; }'
                      + '.increaseFont, .decreaseFont, .resetFont {display: block; float: left;  height: 19px;  overflow: hidden; text-indent: -1000px; width: 24px;}'
                      + '</style>';
                     //adding our zoom style to head
                      $('head').append(style);
                      
                      //our html menu container
                      var menuContainer = '<div class="menu-container">'
                     	 + '<span id="increaseImg" class="increaseFont">+'
                     	 + '</span>'
                     	 + '<span id="decreaseImg" class="decreaseFont">-'
                     	 + '</span>'
                     	 + '<span id="resetImg" class="resetFont">R'
                     	 + '</span>'
                     	 + '</div>';
                     
                     o.defaultFontSize = o.defaultFontSize ? o.defaultFontSize : 20 ;
                     o.targetToResizeId = ($('#'+o.targetToResizeId).size()>0) ? '#'+ o.targetToResizeId : 'body'; 
                     o.targetMenuId = ($('#'+o.targetMenuId).size()>0) ? '#'+ o.targetMenuId : 'body';
                     //adding our menu
                     $(o.targetMenuId).prepend(menuContainer);
                     var originalFontSize = $(o.targetToResizeId).css('font-size') ?  $(o.targetToResizeId).css('font-size') : o.defaultFontSize;
                  // Increase Font Size ++
                     $(".increaseFont").click(function() { 
                     	var currentFontSize = $(o.targetToResizeId).css('font-size'); //alert(currentFontSize);
                     	var tabVar = currentFontSize.split('.');
                     	
                     	// for IE cut the 'px'
                     	var tabVar2 = tabVar[0].split('px');
                     	tabVar[0] = ( tabVar2.length < 2) ? tabVar[0] : tabVar2[0] ;
                     	// for CHROME cut the 'em'
                     	var tabVar3 = tabVar[0].split('em');
                     	tabVar[0] = ( tabVar3.length < 2) ? tabVar[0] : tabVar3[0] ;
                     	if(tabVar[0]<14  )
                     	{
                     	var currentFontSizeNum = parseFloat(currentFontSize, 10);
                     	// for CHROME (currentFontSizeNum *10)
                     	var newFontSize = ( tabVar3.length == 2) ? currentFontSizeNum + 1 * 10 : currentFontSizeNum + 1; 
                     	// $('#'+o.targetToResizeId).css('font-size', newFontSize);
                     	$(o.targetToResizeId).animate( {fontSize: newFontSize});
                     	}
                     	return false;
                     });
                     // Decrease Font Size --
                     $(".decreaseFont").click(function() {
                     	var currentFontSize = $(o.targetToResizeId).css('font-size') ;
                     	var tabVar = currentFontSize.split('.');
                     	// for IE cut the 'px'
                     	var tabVar2 = tabVar[0].split('px');
                     	tabVar[0] = ( tabVar2.length < 2) ? tabVar[0] : tabVar2[0] ;
                     	// for chrome cut the 'em'
                     	var tabVar3 = tabVar[0].split('em');
                     	tabVar[0] = ( tabVar3.length < 2) ? tabVar[0] : tabVar3[0] ;
                     	if( tabVar[0]>10){
                     	var currentFontSizeNum = parseFloat(currentFontSize, 10);
                     	var newFontSize = currentFontSizeNum - 1;
                     	// $('#'+o.targetToResizeId).css('font-size', newFontSize);
                     	
                     	$(o.targetToResizeId).animate( {fontSize: newFontSize});
                     	}
                     	return false;
                     });
					 // Reste Font Size  $(o.targetToResizeId).animate( {fontSize: originalFontSize});
                     $(".resetFont").click(function() {
                     	$(o.targetToResizeId).animate( {fontSize: originalFontSize});
                     	return false;
                     });
					 
					 
            });
        }
    });
})(jQuery);