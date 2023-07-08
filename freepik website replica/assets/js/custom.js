$(document).ready(function() {

  $(".box_a").hover(
    function() {
      // On hover-in, set the background image of the container div
      var imageUrl = $(this).find("img").attr("src");
      $(".top-section").css({
        "background-image": "url(" + imageUrl + ")",
      });
    
    },
    function() {
      console.log("here");
      var imageUrl = $(this).find("img").attr("src");
      console.log(imageUrl);
      // On hover-out, remove the background image of the container div
      $(".top-section").css("background-image", "none");
    }
  );
});
$(document).ready(function() {
  $(".box_a").hover(
    function() {
      // On hover-in, add a class to the other div
      $(".set_over_lay").addClass("active");
    },
    function() {
      // On hover-out, remove the added class from the other div
      $(".set_over_lay").removeClass("active");
    }
  );
});
