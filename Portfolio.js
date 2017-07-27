<!DOCTYPE html>
<html>
<body>


<p id="length"></p>


// var wordsList = [];
// // document.getElementById
function init() {
// //   // Load the words from the dictionary text file to wordsList
  var wordsFile = "https://raw.githubusercontent.com/GirlsFirst/SIP-2017/master/Unit2_Applications/dictionary-attack/dictionary.txt?token=ADcVhZjRMd86ZdhPE2jVvIaJdQdzLA6Yks5YvvVSwA%3D%3D";
  $.get(wordsFile, function(data) {
  document.getElementById("btnSubmit").disabled = true;
//    wordsList = data.split('\n');
//    document.getElementById("btnSubmit").disabled = false;
//   });

<script>
 document.getElementById("length").innerHTML = wordsFile.length;
 </script>

</body>
</html>
wordsFile.length;
document.write(wordsFile.length);
// }
// //
// //window.onload = init;
// //
// // /* ADD YOUR CODE BELOW */
// // var yes = checkPassword(wordsList)
// // function checkPassword(a) {
// //   return
// //
// //
// // for
// // if input == wordlist[0-24]{
// //   document.write("Your password is not secure. Choose another password. Unless you want to be hacked in which case kk fam");
// // } else {
// //   document.write("Your password is secure. YAASSSSSS");
// // }
