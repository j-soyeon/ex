
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


$('.btn li').click(function(){
$(this).addClass('active')
$(this).siblings().removeClass('active')

var con = $(this).attr('data-alt')
// $('.tabs .tab_con').removeClass('active')
$('#' + con).addClass('active').siblings().removeClass('active')
return false;
});

$('.sub_btn li') .click(function(){
$(this).addClass('active')
$(this).siblings().removeClass('active')

var subCon = $(this).attr('data-txt')
// $('.sub_tab .sub_con').removeClass('active')
$('#' + subCon).addClass('active').siblings().removeClass('active')
return false;
});
console.log()



let countBox = document.querySelector('.count'),
    count = 0;

let counting = setInterval(function () {
    if (count == 12000000) {
        clearInterval(counting);
        return false;
    }
    count += 10000;
    countBox.innerHTML = new Intl.NumberFormat().format(count);
}, 5)
