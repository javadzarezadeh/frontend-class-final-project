$(document).scroll(function() {
  fixedTab();
  parallax();
});

function fixedTab() {
  if ($(document).scrollTop() > 133) {
    $("header").children("div").css({
      position: 'fixed',
      top: '0px',
      left: '0px',
      right: '0px'
    });
  } else if ($(document).scrollTop() < 133) {
    $("header").children("div").css({
      position: 'static'
    });
  }
}

$(".songCover").hover(function() {
  $(this).children(".songDescription").toggle('slow');
});


$(".playIcon").click(function() {
  imgSrc = $(this).parents(".songDescription").siblings("img").attr("src");
  audioSrc = $(this).data('music-src');
  songName = $(this).siblings("p").html();
  artistName = $(this).siblings("p:nth-of-type(2)").html();
  $("#musicPlayer").html("<img src='" + imgSrc + "' width='50px' height='auto' style='cursor: help;' title='" + songName + " - " + artistName + "'/>" + "<audio controls autoplay><source src=" + audioSrc + " type='audio/mpeg'> Your browser does not support the audio element." + "</audio>" + "<img src='../img/close_4-512.png' width= '50px' height= 'auto' id='closeIcon' onclick='closeMusicPlayer()'/>");
  $("#musicPlayer").css({
    display: 'block'
  });
});

function closeMusicPlayer() {
  document.getElementsByTagName('audio')[0].pause();
  $("#musicPlayer").css({
    display: 'none'
  });
}
$(function() {
  $(document).tooltip();
});

function parallax() {
  // console.log($(document).scrollTop());
  y = $(document).scrollTop() / 50;
  $("#trending").css({
    backgroundPosition: '50% ' + y + '%'
  });
  // if ($(document).scrollTop() > 580) {
  //   $("#trending").html("<audio autoplay><source src='./music/12-Pallett_Shahre_Man_Bekhand.mp3' id='trendMusic'/></audio>")
  // } else if ($(document).scrollTop() > 1100) {
  //   $("#trendMusic").pause();
  // }
}

// function circleEffect(myElement) {
//   myElement = $("'" + myElement + "'");
//
//   for (var i = 1; i < myElement.width; i = i * 2) {
//     myElement.css({
//       top
//     });
//   }
