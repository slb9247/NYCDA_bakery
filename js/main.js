$(document).on('ready', function() {

  // // run test on initial page load
  // checkSize();
  //
  // // run test on window resize
  // $(window).resize(checkSize);



//scrollTo
  $('nav a, .content-bakery a').on('click', function(event) {
    console.log(event);
    event.preventDefault();

    // scroll to the page associated with THIS link
    // console.log(this);
    var pageToScrollTo = $(this).attr('href');
    // console.log(pageToScrollTo)

    // use pageToScrollTo in a .scrollTo function
    $(window).scrollTo(pageToScrollTo, 800, {offset: -100});

  });



// show and hide text on hovered and non-hovered images
  $('img').on('mouseenter', function() {
    $(this).css({cursor: 'pointer'}).siblings('.hover-text').fadeTo(500, 1.0);
  });
  $('img').on('mouseleave', function() {
    $(this).siblings('.hover-text').hide();
  });



// images click events
  $('.image-pastry').on('click', function() {
    // hide all images
    $('.image-pastry').addClass('hide');
    // show image that was clicked
    $(this).removeClass('hide');
    // place display: inline-block on the list
    $(this).next('.list-pastries').css('display', 'inline-block');
    // fade in the flavors
    $(this).next('.list-pastries').find('.flavors').fadeIn(2000);
    // show pastries back button
    $('#button-pastries').show();
  });

  $('.image-cakePie').on('click', function() {
    // hide all images
    $('.image-cakePie').addClass('hide');
    // show image that was clicked
    $(this).removeClass('hide');
    // place display: inline-block on the list
    $(this).next('.list-cakesPies').css('display', 'inline-block');
    // fade in the flavors
    $(this).next('.list-cakesPies').find('.flavors').fadeIn(2000);
    // show pastries back button
    $('#button-cakesPies').show();
  });



// back button click events
  $('#button-pastries').on('click', function() {
    // hide button
    $(this).hide();
    // hide all lists
    $('.list-pastries').hide();
    // show all images
    $('.image-pastry').removeClass('hide');
  });

  $('#button-cakesPies').on('click', function() {
    // hide button
    $(this).hide();
    // hide all lists
    $('.list-cakesPies').hide();
    // show all images
    $('.image-cakePie').removeClass('hide');
  });



}); // ends doc.ready
