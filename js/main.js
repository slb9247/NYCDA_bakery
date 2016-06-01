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
  $('img').on('mouseenter', function() {
    $(this).css({cursor: 'pointer'}).siblings('.hover-text').fadeTo(500, 1.0);
  });
  $('img').on('mouseleave', function() {
    $(this).siblings('.hover-text').hide();
  });



// images click events
  $('#img-cannoli').on('click', function() {
    $('#img-puff, #img-eclair, #img-whoopie').hide();
  //  $('#show').css('display', 'inline-block');
    $('#flavors-cannoli').fadeIn(2000);
    $('#sub-pastries').css('height', '750px');
    $('#button-pastries').show();
  });

  $('#img-puff').on('click', function() {
    $('#img-cannoli, #img-eclair, #img-whoopie').hide();
    $('#flavors-puff').fadeIn(2000);
    $('#sub-pastries').css('height', '750px');
    $('#button-pastries').show();
  });

  $('#img-eclair').on('click', function() {
    $('#img-cannoli, #img-puff, #img-whoopie').hide();
    $('#flavors-eclair').fadeIn(2000);
    $('#sub-pastries').css('height', '750px');
    $('#button-pastries').show();
  });

  $('#img-whoopie').on('click', function() {
    $('#img-cannoli, #img-puff, #img-eclair').hide();
    $('#flavors-whoopie').fadeIn(2000);
    $('#sub-pastries').css('height', '750px');
    $('#button-pastries').show();
  });

  $('#img-cake').on('click', function() {
    $('#img-pie').hide();
    $('#flavors-cakes').fadeIn(2000);
    $('#sub-cakesPies').css('height', '700px');
    $('#button-cakesPies').show();
  });

  $('#img-pie').on('click', function() {
    $('#img-cake').hide()
    $('#flavors-pies').fadeIn(2000);
    $('#sub-cakesPies').css('height', '700px');
    $('#button-cakesPies').show();
  });

// back button click events
  // $('#button-pastries').on('click', function() {
  //   $('.flavors').hide();
  //   $('#img-cannoli, #img-puff, #img-eclair, #img-whoopie').show();
  //   $('#sub-pastries').css('height', '1100px');
  //   $('#button-pastries').hide();
  // });

  // $('#button-cakesPies').on('click', function() {
  //   $('#flavors-cakes, #flavors-pies, #button-cakesPies').hide();
  //   $('#img-cake, #img-pie').show();
  // });


}); // ends doc.ready
