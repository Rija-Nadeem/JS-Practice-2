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

//task 15 ***************************************

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


