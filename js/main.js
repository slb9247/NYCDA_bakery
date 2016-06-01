$(document).on('ready', function() {

//scrollTo
  $('nav a, .content-bakery a').on('click', function(event) {
    console.log(event);
    event.preventDefault();

    // scroll to the page associated with THIS link
    //console.log(this);
    var pageToScrollTo = $(this).attr('href');
    //console.log(pageToScrollTo)

    // use pageToScrollTo in a .scrollTo function
    $(window).scrollTo(pageToScrollTo, 800, {offset: -100});

  });


// show and hide text on hovered and non-hovered images
  // $('#img-cannoli').on('mouseenter', function() {
  //   $('#hover-cannoli').fadeTo(500, 1.0);
  // });
  // $('#img-cannoli').on('mouseleave', function() {
  //   $('#hover-cannoli').hide();
  // });

  $('.image').on('mouseenter', function() {
    $(this).find('.hover-text').fadeTo(500, 1.0);
  });
  $('.image').on('mouseleave', function() {
    $(this).find('.hover-text').hide();
  });




// images click events
  $('#img-cannoli').on('click', function() {
    $('#img-puff, #img-eclair, #img-whoopie').hide();
  //  $('#show').css('display', 'inline-block');
    $('#flavors-cannoli').fadeIn(2000);
    $('#button-pastries').show();
  });

  $('#img-puff').on('click', function() {
    $('#img-cannoli, #img-eclair, #img-whoopie').hide();
    $('#flavors-puff').fadeIn(2000);
    $('#button-pastries').show();
  });

  $('#img-eclair').on('click', function() {
    $('#img-cannoli, #img-puff, #img-whoopie').hide();
    $('#flavors-eclair').fadeIn(2000);
    $('#button-pastries').show();
  });

  $('#img-whoopie').on('click', function() {
    $('#img-cannoli, #img-puff, #img-eclair').hide();
    $('#flavors-whoopie').fadeIn(2000);
    $('#button-pastries').show();
  });


  $('#img-cake').on('click', function() {
    $('#img-pie').hide();
    //fade in flavors
    $('#button-cakesPies').show();
  });

  $('#img-pie').on('click', function() {
    $('#img-cake').hide()
    //fade in flavors
    $('#button-cakesPies').show();
  });


}); // ends doc.ready
