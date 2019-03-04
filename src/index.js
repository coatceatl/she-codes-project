import $ from 'jquery';

$( document ).ready(function() {
  $('.card-header').click(function() {
    var $current = $(this).parent().find('.collapse');
    if ($ ($current).is( ":hidden" ) ){
      $current.slideDown( "slow" );
    } else {
       $current.slideUp( "slow" );
    }
  });
});
