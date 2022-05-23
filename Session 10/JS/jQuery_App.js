$("#buttonSelectorElement").click(function () {
    $("h4").toggle();
});

$("#buttonSelectorClass").click(function () {
    $(".byClass").toggle();
});

$("#buttonSelectorId").click(function () {
    $("#byId").toggle();
});

// -----------------------------
// ------------Event------------
// -----------------------------

$("#buttonEventClick").click(function () {
    $(".eventClick").toggle();
});
// tambah input mungkin
$("#buttonEventFocus").focus(function () {
    $(".eventFocus").toggle();
});

$("#buttonEventFocus").blur(function () {
    $(".eventFocus").toggle();
});
// tambah input mungkin
$("#buttonEventHover").hover(function () {
    $(".eventHover").toggle();
});

// -----------------------------
// -----------Effects-----------
// -----------------------------

// -----------------
// hide,show,toggle
// -----------------

$("#buttonHide").click(function () {
    $(".effectsHideShowToggle").hide();
});
$("#buttonShow").click(function () {
    $(".effectsHideShowToggle").show();
});
$("#buttonToggle").click(function () {
    $(".effectsHideShowToggle").toggle();
});

// ------------------
// -------fade-------
// ------------------

$("#fadeIn").click(function () {
    $("#boxPink").fadeIn();
    $("#boxPurple").fadeIn("slow");
    $("#boxBlue").fadeIn(1000);
});
$("#fadeOut").click(function () {
    $("#boxPink").fadeOut();
    $("#boxPurple").fadeOut("slow");
    $("#boxBlue").fadeOut(1000);
});
$("#fadeToggle").click(function () {
    $("#boxPink").fadeToggle();
    $("#boxPurple").fadeToggle("slow");
    $("#boxBlue").fadeToggle(1000);
});
$("#fadeTo").click(function () {
    $("#boxPink").fadeTo(1, 0.15);
    $("#boxPurple").fadeTo("slow", 0.4);
    $("#boxBlue").fadeTo(1000, 0.7);
});

// -----------------
// ------slide------
// -----------------

$("#slideDown").click(function () {
    $("#panel").slideDown();
});
$("#slideUp").click(function () {
    $("#panel").slideUp();
});
$("#slideToggle").click(function () {
    $("#panel").slideToggle();
});

// -----------------------------
// -------------css-------------
// -----------------------------

$("#addClass").click(function () {
    $("span").addClass("cool");
});
$("#removeClass").click(function () {
    $("span").removeClass("cool");
});