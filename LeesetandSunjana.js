var wordsList = [];

function init() {
  // Load the words from the dictionary text file to wordsList
  var wordsFile = "https://raw.githubusercontent.com/GirlsFirst/SIP-2017/master/Unit2_Applications/dictionary-attack/dictionary.txt?token=ADcVhZjRMd86ZdhPE2jVvIaJdQdzLA6Yks5YvvVSwA%3D%3D";
  $.get(wordsFile, function(data) {
    document.getElementById("btnSubmit").disabled = true;
    wordsList = data.split('\n');
    document.getElementById("btnSubmit").disabled = false;
  });
}

window.onload = init;

var answer = document.getElementById("pw");
//document.getElementById.("results").innerHTML = answer;

x = wordList.length
if answer == wordList[0-x]{
document.write("Your password is not secure. Choose another password. Unless you want to be hacked in which case kk fam");
} else {
document.write("Your password is secure. YAASSSSSS");
}
//var answer = prompt("")
/* ADD YOUR CODE BELOW */

function checkPassword() {



}
