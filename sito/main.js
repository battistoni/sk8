$(window).on("scroll", function(){
  if ($(window).scrollTop()> 150) {
    $(".scritta").addClass("mostra");
  }
  else { $(".scritta").removeClass("mostra")
  }
});

$(window).on("scroll", function(){
  if ($(window).scrollTop()> 800) {
    $(".navbar").addClass("mostra1");
  }
  else { $(".navbar").removeClass("mostra1")
  }
});

function coverdiv() {
  $(this).addClass("hide")
};
function nocoverdiv() {
  $(this).removeClass("hide")
}
$(".coverdiv").mouseover(coverdiv);
$(".coverdiv").mouseleave(nocoverdiv);

function linea() {
  $(".line").addClass(".linea")
  console.log("cv");
}
function nolinea() {
  $(".line").removeClass(".linea")

}
$(".about").mouseover(linea);
