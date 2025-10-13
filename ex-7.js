function isPalindrome(string) {
  // Start coding here
  let massegeSpilt = string.split("")
  console.log(massegeSpilt);
  let reverseMassage = massegeSpilt.reverse()
  console.log(reverseMassage)
  let joinMassege = reverseMassage.join("")
  console.log(joinMassege);
  if(joinMassege === string){
    return true
  }else{
    return false
  }
  
}

//Example case
console.log(isPalindrome("reviver"));// true
 console.log(isPalindrome("บวบ"));// true
 console.log(isPalindrome("deliver"));// false