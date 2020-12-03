$(document).on("scroll", function () {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $("section");

  for (let i = 0; i < tags.length; i++) {
    let currentTag = tags[i];
    if ($(currentTag).position().top < pageBottom) {
      $(currentTag).addClass("visible");
    } else {
      $(currentTag).removeClass("visible");
    }
  }
});
