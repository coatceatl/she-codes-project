import $ from 'jquery';

$( document ).ready(function() {
  $('.card-header').click(function() {
    var $current = $(this).parent().find('.collapse');
    var $icon = $(this).find('.icon');
    if ($ ($current).is( ":hidden" ) ){
      $current.slideDown( "slow" );
    } else {
       $current.slideUp( "slow" );
    }

    $icon.toggleClass("img-open");

  });
});
