/**
 * jQuery Line Progressbar
 * Author: Sharifur Rahman
 * Author URI : https:devrobin.com
 * Version: 1.0.0
 */

;
(function($) {
    'use strict';


    $.fn.rProgressbar = function(options) {

        options = $.extend({
            percentage: null,
            ShowProgressCount: true,
            duration: 1000,
            // Styling Options
            fillBackgroundColor: '#643ec7',
            backgroundColor: '#EEEEEE',
            borderRadius: '0px',
            height: '15px',
            width: '100%'
        }, options);

        $.options = options;
        return this.each(function(index, el) {
            // Markup
            $(el).html('<div class="progressbar"><div class="proggress"><div class="percentCount"></div></div></div>');

            var lineProgressBarInit = function() {
                var progressFill = $(el).find('.proggress');
                var progressBar = $(el).find('.progressbar');

                progressFill.css({
                    backgroundColor: options.fillBackgroundColor,
                    height: options.height,
                    borderRadius: options.borderRadius
                });
                progressBar.css({
                    width: options.width,
                    backgroundColor: options.backgroundColor,
                    borderRadius: options.borderRadius
                });

                // Progressing
                progressFill.animate({
                    width: options.percentage + "%"
                }, {
                    step: function(x) {
                        if (options.ShowProgressCount) {
                            $(el).find(".percentCount").text(Math.round(x) + "%");
                            $(el).parents().children(".title").children("span").find(".tit_per").text(Math.round(x) + "%");
                        }
                    },
                    duration: options.duration
                });
            }

            $(this).waypoint(lineProgressBarInit, { offset: '100%', triggerOnce: true });
        });
    }

})(jQuery);
