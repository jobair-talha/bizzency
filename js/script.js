$('.service-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  // prevArrow:'<i class="fas fa-arrow-left prev-arrow"></i>',
  //  nextArrow:'<i class="fas fa-arrow-right next-arrow"></i>',
});
$('#Photoshop').LineProgressbar({
  percentage: 90,
  radius: '3px',
  height: '10px',
  fillBackgroundColor: '#2A4896'
});
$('#Illustrator').LineProgressbar({
  percentage: 85,
  radius: '3px',
  height: '10px',
  fillBackgroundColor: '#5D3B15'
});
$('#Dreamweaver').LineProgressbar({
  percentage: 75,
  radius: '3px',
  height: '10px',
  fillBackgroundColor: '#344A1F'
});
$('#Effects').LineProgressbar({
  percentage: 80,
  radius: '3px',
  height: '10px',
  fillBackgroundColor: '#392960'
});