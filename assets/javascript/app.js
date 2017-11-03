
var correct = 0;
var incorrect = 0;
var notAnswered = 8 - (correct + incorrect);

$(document).ready(function(){
$('.q1').click(function() {
var selValue = $('input[name=q1]:checked').val();
if(selValue === "1") {
    correct++;
    console.log(correct);
}
else {
    incorrect++;
    console.log(incorrect);
}

})
})
$(document).ready(function(){
$('.q2').click(function() {
var selValue = $('input[name=q2]:checked').val();
if(selValue === "3") {
    correct++;
    console.log(correct);
}
else {
    incorrect++;
    console.log(incorrect);
}

})
})
$(document).ready(function(){
$('.q3').click(function() {
var selValue = $('input[name=q3]:checked').val();
if(selValue === "2") {
    correct++;
    console.log(correct);
}
else {
    incorrect++;
    console.log(incorrect);
}

})
})
$(document).ready(function(){
$('.q4').click(function() {
var selValue = $('input[name=q4]:checked').val();
if(selValue === "1") {
    correct++;
    console.log(correct);
}
else {
    incorrect++;
    console.log(incorrect);
}

})
})
$(document).ready(function(){
$('.q5').click(function() {
var selValue = $('input[name=q5]:checked').val();
if(selValue === "2") {
    correct++;
    console.log(correct);
}
else {
    incorrect++;
    console.log(incorrect);
}

})
})
$(document).ready(function(){
$('.q6').click(function() {
var selValue = $('input[name=q6]:checked').val();
if(selValue === "3") {
    correct++;
    console.log(correct);
}
else {
    incorrect++;
    console.log(incorrect);
}

})
})
$(document).ready(function(){
$('.q7').click(function() {
var selValue = $('input[name=q7]:checked').val();
if(selValue === "1") {
    correct++;
    console.log(correct);
}
else {
    incorrect++;
    console.log(incorrect);
}

})
})
$(document).ready(function(){
$('.q8').click(function() {
var selValue = $('input[name=q8]:checked').val();
if(selValue === "2") {
    correct++;
    console.log(correct);
}
else {
    incorrect++;
    console.log(incorrect);
}

})
})

