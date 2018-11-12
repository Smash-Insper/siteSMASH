// new fullpage('#fullpage', {
//   anchors: ['page1', 'page2', 'page3', 'page4'],
//   sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
// });
//
// //adding the action to the button
// $(document).on('click', '#moveTo', function(){
//   fullpage_api.moveTo('page2', 1);
// });


$("nav").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    // if (!section.equals("equipe.html")) {
    if (section != "equipe.html") {
      $("html, body").animate({
          scrollTop: $(section).offset().top
      });
    }
    else{
      window.location = "file:///Users/pedroazambuja/Documents/siteSMASH/equipe.html"
    }

});
