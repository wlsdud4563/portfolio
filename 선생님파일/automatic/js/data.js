







//////////////////////////출력영역/////////////////////////////////////////
let profile = [webName, myName, birthDay, mobileNum, email];

$('h1').text(profile[0]);
$('span.name').text(profile[1]);
$('span.birth').text(profile[2]);
$('span.mobile').text(profile[3]);
$('span.email').text(profile[4]);



let eduLength = education.length;

for(let i = 0; i<eduLength; i++){


    $('.edu').prepend(`<li>
        <em>${education[i].date}</em>
        <span>${education[i].name}</span>
    </li>`);
    

}


let workLength = work.length;

for(let i = 0; i<workLength; i++){


    $('.work').prepend(`<li>
        <em>${work[i].date}</em>
        <span>${work[i].name}</span>
    </li>`);
    
}

//skill 영역
for(let i = 0; i<skills.length; i++){

    $('.skillWrap').append(`
        <div class= "item item${i}">
            <div class="progress ${skills[i].name}">
                <div class="txt">
                    <i class="${skills[i].icon}"></i>
                    <strong>${skills[i].quant}%</strong>
                </div>
                <div class="inner">
                    <div class="water" data-num=${i}></div>
                    <div class="glare"></div>
                </div>

                <em class="bg"></em>
            </div>
            <span>${skills[i].name}</span>
        </div>
    `);
}



$('.skillWrap .item').each(function(e,i){
    let quantity = skills[e].quant;
        quantity = parseInt(quantity) - 10;

    $(this).find('.water').css({
        'top' : 100 - quantity, 
        'background' : skills[e].bgColor});
    $(this).find('.bg').css({'borderColor' : skills[e].fontColor});

    $(this).find('.txt').css({
        'color' : skills[e].fontColor
    })
});