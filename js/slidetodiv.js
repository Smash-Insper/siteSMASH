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
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});
