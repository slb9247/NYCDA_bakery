$(document).on('ready', function() {

//scrollTo
  $('nav a').on('click', function(event) {
    console.log(event);
    event.preventDefault();

    // scroll to the page associated with THIS link
    //console.log(this);
    var pageToScrollTo = $(this).attr('href');
    //console.log(pageToScrollTo)

    // use pageToScrollTo in a .scrollTo function
    $(window).scrollTo(pageToScrollTo, 800, {offset: -100});

  });


//image hovers
  $('#img-cannoli').on('mouseenter', function() {
    $('#hover-cannoli').fadeTo(500, 1.0);
  });
  $('#img-cannoli').on('mouseleave', function() {
    $('#hover-cannoli').hide();
  });

  $('#img-puff').on('mouseenter', function() {
    $('#hover-puff').fadeTo(500, 1.0);
  });
  $('#img-puff').on('mouseleave', function() {
    $('#hover-puff').hide();
  });

  $('#img-eclair').on('mouseenter', function() {
    $('#hover-eclair').fadeTo(500, 1.0);
  });
  $('#img-eclair').on('mouseleave', function() {
    $('#hover-eclair').hide();
  });

  $('#img-whoopie').on('mouseenter', function() {
    $('#hover-whoopie').fadeTo(500, 1.0);
  });
  $('#img-whoopie').on('mouseleave', function() {
    $('#hover-whoopie').hide();
  });

  $('#img-cake').on('mouseenter', function() {
    $('#hover-cake').fadeTo(500, 1.0);
  });
  $('#img-cake').on('mouseleave', function() {
    $('#hover-cake').hide();
  });

  $('#img-pie').on('mouseenter', function() {
    $('#hover-pie').fadeTo(500, 1.0);
  });
  $('#img-pie').on('mouseleave', function() {
    $('#hover-pie').hide();
  });


  $('#img-cannoli').on('click', function() {
    $('#img-puff').hide();
    $('#img-eclair').hide();
    $('#img-whoopie').hide();
  });

  $('#img-puff').on('click', function() {
    $('#img-cannoli').hide();
    $('#img-eclair').hide();
    $('#img-whoopie').hide();
  });

  $('#img-eclair').on('click', function() {
    $('#img-cannoli').hide();
    $('#img-puff').hide();
    $('#img-whoopie').hide();
  });

  $('#img-whoopie').on('click', function() {
    $('#img-cannoli').hide();
    $('#img-puff').hide();
    $('#img-eclair').hide();
  });



}); // ends doc.ready
