function toggleActive() {
  $(document).on("click", ".nav-bar__item", function () {
    $(".nav-bar__item.active").removeClass("active");
    $(this).toggleClass("active");
  });
}

toggleActive();
