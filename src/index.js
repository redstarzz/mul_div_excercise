import "./styles.css";
import $ from "jquery";

$("#app").html('<h1><span id="Title">掛け算割り算強化演習問題</span></h1>');

$("div.multiple")
  .wrapInner("<span class='multiple_mum' />")
  .prepend("<span style='display: table-cell;'>×</span>");

$("div.division")
  .wrapInner("<span class='division_mum' />")
  .append("<span style='display: table-cell;'>)</span>")
  .append("<div class='answer result_div'/>");

$(function() {
  $('input[type="text"]').keyup(function() {
    var val = $(this).val();
    $("div.init").text(val);
    $("div.last").text(val);
    $("div.result_mul").each(function(i, val) {
      if (i === 0) {
        return;
      }
      var prev_answer = $(this)
        .prev()
        .prev()
        .text();
      if ($.isNumeric(prev_answer)) {
        var new_answer = prev_answer * (i + 1);
        $(this).text(new_answer);
      }
    });
    $("div.result_div").each(function(i, val) {
      var prev_answer;
      var new_answer;
      if (i === 0) {
        prev_answer = $(this)
          .parent()
          .prev()
          .prev()
          .text();
        console.log(prev_answer + ":" + i);
        if ($.isNumeric(prev_answer)) {
          new_answer = prev_answer * 9;
          $(this).text(new_answer);
        }
      } else {
        prev_answer = $(this)
          .parent()
          .prev()
          .children("div")
          .text();
        console.log(prev_answer + ":" + i);
        if ($.isNumeric(prev_answer)) {
          new_answer = prev_answer / (i + 1);
          $(this).text(new_answer);
        }
      }
    });
  });
});
