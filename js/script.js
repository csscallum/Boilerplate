/* =============================================================================
    Contents
    ----------------------------------------------------------------------------
    1) Fix for iOS orientation change zoom bug
    2) Responsive navigation assist

============================================================================= */

// 1) Fix for iOS orientation change zoom bug - https://github.com/scottjehl/iOS-Orientationchange-Fix

(function(a){function m(){d.setAttribute("content",g),h=!0}function n(){d.setAttribute("content",f),h=!1}function o(b){l=b.accelerationIncludingGravity,i=Math.abs(l.x),j=Math.abs(l.y),k=Math.abs(l.z),(!a.orientation||a.orientation===180)&&(i>7||(k>6&&j<8||k<8&&j>6)&&i>5)?h&&n():h||m()}var b=navigator.userAgent;if(!(/iPhone|iPad|iPod/.test(navigator.platform)&&/OS [1-5]_[0-9_]* like Mac OS X/i.test(b)&&b.indexOf("AppleWebKit")>-1))return;var c=a.document;if(!c.querySelector)return;var d=c.querySelector("meta[name=viewport]"),e=d&&d.getAttribute("content"),f=e+",maximum-scale=1",g=e+",maximum-scale=10",h=!0,i,j,k,l;if(!d)return;a.addEventListener("orientationchange",m,!1),a.addEventListener("devicemotion",o,!1)})(this);

// 2) Responsive navigation assist
$(document).ready(function() {
    var path = window.location.href;
    $('nav a').each(function() {
        if (this.href === path) {
            $(this).parent().addClass('selected');
        }
    });

    /*! http://tinynav.viljamis.com v1.03 by @viljamis */
    (function ($, window, i) {
        $.fn.tinyNav = function (options) {

            // Default settings
            var settings = $.extend({
                'active' : 'selected', // String: Set the "active" class
                'header' : false // Boolean: Show header instead of the active item
            }, options);

            return this.each(function () {
                // Used for namespacing
                i++;

                var $nav = $(this),
                // Namespacing
                namespace = 'tinynav',
                namespace_i = namespace + i,
                l_namespace_i = '.l_' + namespace_i,
                $select = $('<select/>').addClass(namespace + ' ' + namespace_i);

                if ($nav.is('ul,ol')) {
                    if (settings.header) {
                        $select.append(
                            $('<option/>').text('Navigation')
                        )
                    }

                    // Build options
                    var options = '';

                    $nav
                    .addClass('l_' + namespace_i)
                    .find('a')
                    .each(function () {
                        options +=
                        '<option value="' + $(this).attr('href') + '">' +
                        $(this).text() +
                        '</option>';
                    });

                    // Append options into a select
                    $select.append(options);

                    // Select the active item
                    if (!settings.header) {
                        $select
                        .find(':eq(' + $(l_namespace_i + ' li')
                        .index($(l_namespace_i + ' li.' + settings.active)) + ')')
                        .attr('selected', true);
                    }

                    // Change window location
                    $select.change(function () {
                        window.location.href = $(this).val();
                    });

                    // Inject select
                    $(l_namespace_i).after($select);
                }

            });
        };
    })(jQuery, this, 0);

    // Run function
    $("nav > ul").tinyNav();
});