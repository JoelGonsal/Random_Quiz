

let str1 = "silent";
let str2 = "listen";

newstr1 = str1.split("").sort();
newstr2 = str2.split("").sort();

if(newstr1.join("").length != newstr2.join("").length)
{
    console.log("not a anagram");
}
if(newstr1.join("") == newstr2.join(""))
{
    console.log("its a anagram");
}
else
{
    console.log("not a anagram ");
}