window.onload = function(){
    alert('The page has finished loading');
}
$(function(){
    alert('The DOM has finished loading!')
});

$(document).ready(function(){
    let primaryContent = $('#job-one-doctor').text();
    alert(primaryContent);

    let secondaryContent = $('#job-two-surgeon').text();
    alert(secondaryContent);
});

$('.hobby').css('border', '1px solid #ff0000');

$('li').css('font-size', '20px');
$('.weekdays').css('background', 'salmon');
let weekdayHeading = $('h1').text();
alert(weekdayHeading);

$('*').css('border', '1px solid whitesmoke');
