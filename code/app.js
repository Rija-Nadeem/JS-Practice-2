// chapter 21 to 25


//task 1
// var firstName= prompt("Enter first name: ");
// var lastName= prompt("Enter last name: ");
// var fullName= firstName +" "+ lastName;
// alert("Welcome "+ fullName);

//task 2
// var mob= prompt("Enter favourite mobile model: ");
// document.write("Your favourite Phone is: "+mob+"<br>");
// document.write("Length of string: "+mob.length);

//task 3
// var nationality="Pakistani";
// document.write("String: "+nationality+"<br>");
// document.write("Index of 'n': "+nationality.indexOf("n")+"<br>");

//task 4
// var string="Hello World";
// document.write("String: "+string+"<br>");
// document.write("Index of 'l': "+string.lastIndexOf("l")+"<br>");

//task 5
// var nationality="Pakistani";
// document.write("String: "+nationality+"<br>");
// document.write("Character at index 3: "+nationality.charAt(3)+"<br>");

//task 6
// var firstName= prompt("Enter first name: ");
// var lastName= prompt("Enter last name: ");
// var fullName= firstName.concat(" "+lastName);
// alert("Welcome "+ fullName);

//task 7
// var word="Hyderabad";
// document.write("City: "+word+"<br>");
// document.write("After replacement: "+word.replace("Hyder", "Islam"));

//task 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// for(var i=0; i< message.length; i++){
//     if(message.slice(i,i+3)==="and"){
//         var message= message.slice(0,i)+ "&" + message.slice(i+3);
//     }
// }
// alert(message);

//task 9
// var value="472";
// var value2=Number(value);
// document.write("Value: "+value+"<br>");
// document.write("Type: "+typeof(value)+"<br>");
// document.write("Value: "+value2+"<br>");
// document.write("Type: "+typeof(value2)+"<br>");

//task 10
// var text=prompt("Enter some text");
// alert("You entered: "+text.toUpperCase());

//task 11
// var text=prompt("Enter some text");
// alert("You entered: "+text.charAt(0).toUpperCase()+text.slice(1));

//task 12
// var num= 35.36;
// var string=num.toString();
// for(var i=0; i< string.length; i++){
//     if(string.slice(i,i+1)==="."){
//         string=string.slice(0,i)+string.slice(i+1);
//     }
// }
// document.write("number: "+num+"<br>");
// document.write("Result: "+string);

//task 13
// var name = prompt("Enter your name");
// if(name.includes("!")||name.includes(".")||name.includes(",")||name.includes("@")){
//     alert("please enter a valid name");
// }
// else{
//     alert("valid name");
// }

//task 14
// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var input=prompt("Search items: ").toLowerCase();
// var found=false;
// for(var i=0; i<arr.length; i++){
//     if(input===arr[i]){
//         found=true;
//         var index=i;
//     }
// }
// if(found){
//     document.write(input+" found at index "+index);
// }
// else{
//     document.write(input+" doesnot found");
// }

//task 15 ************************ not done *************************

//task 16
// var university = "University of Karachi";
// var result= university.split("");
// for(var i=0; i<university.length; i++){
//     document.write(result[i]+"<br>");
// }

//task 17
// var input= prompt("Enter some text");
// document.write("User Input: "+input+"<br>");
// document.write("Last character: "+input.charAt(input.length-1));

//task 18
// var text="The quick brown fox jumps over the lazy dog";
// var counter=0;
// for(var i=0; i<text.length; i++){
//     if(text.slice(i,i+3).toLowerCase()==="the"){
//         counter++;
//     }
// }
// document.write("Text: "+text+"<br>");
// document.write("There are "+counter+" occurence(s) of the word 'the' ");


// chapter 26-30

//task 1
// var num= 3.45214;
// document.write("number: "+num+"<br>");
// document.write("number: "+Math.round(num)+"<br>");
// document.write("number: "+Math.floor(num)+"<br>");
// document.write("number: "+Math.ceil(num)+"<br>");

//task 2
// var num= -2.673;
// document.write("number: "+num+"<br>");
// document.write("number: "+Math.round(num)+"<br>");
// document.write("number: "+Math.floor(num)+"<br>");
// document.write("number: "+Math.ceil(num)+"<br>");

//task 3
// var num= +prompt("Enter a number");
// document.write("The absolute value of "+num+" is "+Math.abs(num));

//task 4
// document.write("random dice value: "+Math.ceil(Math.random() * 6));

//task 5
//var val= Math.ceil(Math.random() * 2);
// if(val===1){
//     document.write("random coin value: Tails ");
// } else{
//     document.write("random coin value: Heads ");
// }

//task 6
//document.write("random number between 1 and 100: "+Math.ceil(Math.random() * 100));

//task 7    *****************samjh ni aya question***************

//task 8
// var secret= Math.ceil(Math.random() * 10) ;
// var input= +prompt("Enter a number between 1 and 10");
// if(input===secret){
//     alert("you won");
// }
// else{
//     alert("try again");
// }


// chapter 31-34

//task 1
// var today= new Date();
// document.write(today);

//task 2
// var today= new Date();
// var months=["January", "February", "March", "April", "May", "June", "July","August","September","October","November","December"];
// document.write("Current month: "+months[today.getMonth()]);

//task 3
// var today= new Date();
// var days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
// document.write("Today is: "+days[today.getDay()]);

//task 4
// var today= new Date();
// var days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
// if(today.getDate()==="0" || today.getDate()==="6" ){
//     document.write("It's Fun day");
// } else{
//     document.write("Not sunday or saturday");
// }

//task 5
// var today= new Date();
// if(today.getDate()<16){
//     document.write("First fifteen days of the month");
// }else{
//     document.write("Last days of the month");
// }

//task 6
// var today= new Date();
// var msec=today.getTime();
// document.write("Current Date: "+today+"<br>");
// document.write("Elapsed milliseconds since Jan 1, 1970: "+msec+"<br>");
// document.write("Elapsed minutes since Jan 1, 1970: "+(msec/1000*60)+"<br>");

//task 7 ******************check in morning*****************
// var today= new Date();
// if(today.getHours()<=12){
//     alert("Its AM");
// } else{
//     alert("Its PM");
// }

// task 8
// var laterDate= new Date("dec 31 2020 00:00:00");
// document.write(laterDate);

//task 9
// var ramadan= new Date("June 18 2015");
// var today= new Date();
// var ramadanTime= ramadan.getTime();
// var todayTime= today.getTime();
// var diff= todayTime-ramadanTime;
// var days= Math.floor(diff/(1000*60*60*24));
// alert(days+" days have passed since 1st Ramadan, 2015");

//task 10
// var refDate= new Date("Dec 5 2015 22:50:16");
// var refDateTime= refDate.getTime();
// var startDate= new Date("Jan 01 2015");
// var startDateTime= startDate.getTime();
// var diff= refDateTime - startDateTime;
// var acc= Math.floor(diff/(1000*60));
//document.write("On reference date "+refDate+" ,"+acc+" seconds had passed since beginning of 2015")

// task 11 12 ********** not done *******************


//task 13
// var dob= new Date(prompt("Enter your birth day"));
// var dobTime= dob.getTime();
// var today= new Date();
// var todayTime= today.getTime();
// var diff= todayTime-dobTime;
// var acc= Math.floor(diff/(1000*60*60*24*30*12));
// document.write("Your age is "+acc+"<br>");
// document.write("Your birth year is "+dob.getFullYear());


// chapter 35-38

//task 1
// function showDate(){
//     return new Date();
// }
// var today= showDate();
// document.write(today);

//task 2
// function showName(firstName, lastName){
//     document.write(firstName+" "+lastName);
// }
// showName("Rija", "Nadeem");

//task 3
// function addition(num1, num2){
//     var sum= num1+num2;
//     return sum;
// }
// var arg1= +prompt("Enter 1st num");
// var arg2= +prompt("Enter 2nd num");
// var add= addition(arg1,arg2);
// alert(add);

//task 4
// function calc(num1,num2,oper) {
//     if(oper==="+"){
//         return num1+num2;
//     }
//     else if(oper==="-"){
//         return num1-num2;
//     }
//     else if(oper==="*"){
//         return num1*num2;
//     }
//     else if(oper==="/"){
//         return num1/num2;
//     }
//     else if(oper==="%"){
//         return num1%num2;
//     }
// }
// var arg1= +prompt("Enter 1st num");
// var arg2= +prompt("Enter 2nd num");
// var operator= prompt("Enter operator");
// var result= calc(arg1,arg2,operator);
// alert("Result of "+arg1+" "+operator+" "+arg2+" : "+result);

//task 5
// function getSquare(num){
//     return num*num;
// }
// var input = +prompt("Enter a number and get its square");
// alert(getSquare(input));

//task 6
// function factorial(num) {
//     var sum=1;
//     for(var i=num; i>=1; i--){
//         sum=sum*i;
//     }
//     return sum;
// }
// var input = +prompt("Enter a number and get its factorial");
// alert(factorial(input));

//task 7
// function counting(start,end) {
//     for(var i=start; i<=end; i++){
//         document.write(i+ " ");
//     }
// }
// var arg1= +prompt("Enter staring num");
// var arg2= +prompt("Enter ending num");
// counting(arg1, arg2);

//task 8
// function calcSquare(num) {
//     return num*num;
// }
// function calcHypotenuse(base,perp) {
//     var baseSquare= calcSquare(base);
//     var perpSquare= calcSquare(perp);
//     var hypo= Math.sqrt(baseSquare+perpSquare);
//     return hypo;
// }
// var arg1= +prompt("Enter base");
// var arg2= +prompt("Enter perpendicular");
// var result=calcHypotenuse(arg1, arg2);
// alert(result);

//task 9(i)
// function RecArea(width, height){
//     var area= width*height;
//     return area;
// }
// var result= RecArea(2,5);
// alert("Area of Rectangle is "+result);

//task 9(ii)
// function RecArea(width, height){
//     var area= width*height;
//     return area;
// }
// var arg1= +prompt("Enter width");
// var arg2= +prompt("Enter height");
// var result= RecArea(arg1,arg2);
// alert("Area of Rectangle is "+result);

//task 10
// function reverseString(str) {
//     var arr=str.split("");
//     var revArr=arr.reverse();
//     var revStr=revArr.join("");
//     if(revStr===str){
//         alert("String is palindrome");
//     }
//     else{
//         alert("String is NOT palindrome");
//     }
// }
// reverseString("hello");
// reverseString("madam");

//task 11
// function captialize(str) {
//     var arr=str.split(" ");
//     for(var i=0; i<arr.length;i++){
//         var first_letter  =arr[i].slice(0,1).toUpperCase();
//         arr[i] = first_letter+arr[i].slice(1);
//     }
//     var result= arr.join(" ");
//     alert(result);
// }
// captialize("hello world");
// captialize("Bbq");
// captialize("the black dog");
// captialize("believe in yourself, you can do it");

//task 12 *************** not working correctyly**************
// function longestWord(str) {
//     var arr=str.split(" ");
//     var ans=arr[0];
//     for(var i=0; i<arr.length; i++){

//        if((arr[i].length) < (arr[i+1].length)){
//            ans=arr[i+1];
//        }
     
//     }
//     document.write(ans);
// }
// longestWord("my name is hamza");

//task 13
// function counter(str,letter){
//     var counter=0;
//     var str2=str.toLowerCase();
//     for(var i=0; i<str2.length; i++){
//         if(str2.slice(i,i+1)===letter){
//             counter++
//         }
//     }
//     return counter;
// }
// var arg1= prompt("Enter string");
// var arg2 =prompt("Enter letter to be searched");
// var result= counter(arg1,arg2);
// alert("the word "+arg2+" appears "+result+ " time(s) in the string: "+arg1);

//task 14
// function calcCircumference(radius) {
//     var circum= 2*3.14*radius;
//     alert("Circumference is: "+circum);
// }
// function calcArea(radius) {
//     var area= 3.14*radius*radius;
//     alert("Area is: "+area);
// }
// var r= +prompt("Enter radius of circle");
// calcCircumference(r);
// calcArea(r);


