/**
 * @file
 * A bootstrap navbar top position adjastment
 */

(function ($, Drupal, displace) {

  'use strict';

  function BootstrapNavbarOffsetChangeHandler(e, offsets) {
    var NavbarMarginBottom = 20;
    var toolbarMargin = $('#toolbar-bar').height();
    
    if($('body').hasClass('toolbar-fixed')){
      
      if($('#toolbar-item-administration-tray').hasClass('is-active') && $('#toolbar-item-administration-tray').hasClass('toolbar-tray-horizontal')){
        toolbarMargin = toolbarMargin + $('#toolbar-item-administration-tray').height();
      }
      alert(toolbarMargin);
      
      $('#navbar').css('margin-top', toolbarMargin + 'px');
      $('#toolbar-bar').css('padding-top', '0px');
    } else {
      $('#toolbar-bar').css('padding-top', $('#navbar').height() + 'px');
    }
    $('#navbar').attr('data-offset-top', toolbarMargin +  $('#navbar').height() + NavbarMarginBottom);
      
  }
  
  // Bind to custom Drupal events.
  $(document).on({
    /**
     * Recalculate BootstrapNavbar.topOffset when viewport is resized.
     *
     * @ignore
     */
    'drupalViewportOffsetChange.BootstrapNavbar': BootstrapNavbarOffsetChangeHandler
  });

}(jQuery, Drupal, window.parent.Drupal.displace));