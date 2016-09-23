/*
 * 1. Declare and assign values to variables for each of the data 
 * types Boolean, Number, String, Array and Object and 
 * display all the values in the console.
 */

var boolean = true;
console.log(boolean);
var number = 1;
console.log(number);
var string = "IT a string";
console.log(string);
var array = [2, 3, 4, 5];
console.log(array);
var object = {hej: 2, Navn: "chaos"};
console.log(object);


/*
 * 2. Create an array of a string, number, object and boolean 
 * value and display the type of the values in the console.
 */

var typedArray = [string, number, object, boolean];
console.log("Typed Array: " + typedArray);

/*
 * 3. Create an object with two properties: studentId and studentName
 *  and and a toString method, that returns the two properties in a single string.
 *  Create an array with 3 students and loop the array displaying the result of 
 *  the toString method in the console.
 */

var twoPropObejct = {studentID: 3, studentName: "Claus"};

function ownToString(object) {
    return object.studentID + "." + object.studentName;
}
;
console.log("Own toString: " + ownToString(twoPropObejct));


var threePropObejct = {studentID: 4, studentName: "Pia", grade: -3};

function iteratorToString(object) {
    var stringBuilder = "";
    for (var key in object) {
        if (object.hasOwnProperty(key)) {
            stringBuilder += object[key] + ".";
        }
    }
    return  stringBuilder.substring(0, stringBuilder.length - 1);
}

console.log("Iterator toString: " + iteratorToString(threePropObejct));


/*
 * 4. Create an object with a list (an array) of students 
 * (each student has a name an age and a gender as Boolean: isFemale) 
 * create a method in the object that can return the youngest student and another 
 * method that can return all female students. 
 * Test the program be writing all female students to the console.
 */

function Student(name, age, isFemale) {
    this.name = name;
    this.age = age;
    this.isFemale = isFemale;
}

var student1 = new Student("Hans", 90, false);
var student2 = new Student("Grete", 90, true);
var student3 = new Student("Rikke", 3, true);
var student4 = new Student("Geo", 50, false);
var student5 = new Student("Mads", 15, false);
var student6 = new Student("Mie", 60, true);
var student7 = new Student("David", 40, false);


var theClass = [student1, student2, student3, student4, student5, student6, student7];

theClass.getYoungest = function () {
    var array = this; // gives us the array
    var yongestinArray;
    var yongestAge = null;

    var arrayLength = array.length;
    for (var i = 0; i < arrayLength; i++) {
        var tempStudent = array[i];
        var tempAge = tempStudent.age;
        if(yongestAge === null ) yongestAge = tempAge;
        if(tempAge <= yongestAge){
            yongestinArray = i;
            yongestAge = tempAge;
        }
    }
    return this[yongestinArray];
};

var yongest = theClass.getYoungest();
console.log("The yongest =  " + yongest.name + " With the Age: " + yongest.age );


theClass.getAllFemales = function(){
    arrayofAll = this; // gives us the array
    arrayOfAllFemales = [];
    var arrayLength = arrayofAll.length;
    for (var i = 0; i < arrayLength; i++) {
        var tempStudent = arrayofAll[i];
        if(tempStudent.isFemale){
            arrayOfAllFemales.push(tempStudent);
        }
    }
    return arrayOfAllFemales;
};

var arr = [];


console.log("All Females");
theClass.getAllFemales().forEach(printName);

function printName(name){
    console.log(name);
}


/*
 * 5.  Create a function that can take a sorted array of student objects and a single
 *  student object as parameters. The function should return an array where the
 *   student is removed in a way that the new array is of a length equal to the 
 *   old array minus one.
 */

function removeOne(array, studentToBeRemoved){
    var arrayLength = array.length;
    for (var i = 0; i < arrayLength; i++) {
        
        if(array[i].name === studentToBeRemoved.name){
            array.splice(i, 1);
            return array;
        }
        
    }
    return array;
    
    
}

/*
 * 6. Use the foreach() method of the array to loop through an array and display 
 * the names of any student above 30 years of age. Test the result by writing 
 * to the console.
 */

console.log("over30: ");
theClass.forEach(over30);

function over30(student){
    if(student.age >= 30) console.log(student);
}

/*
 * 7. Write a function max(), that takes any number of arguments 
 * and uses the arguments object returns the largest of them.
 */

function max(arrayWithNumbers){
     var arrayLength = arrayWithNumbers.length;
     var max = null;
    for (var i = 0; i < arrayLength; i++) {
        if(max === null) max = arrayWithNumbers[i];
        if(arrayWithNumbers[i] >= max ) max = arrayWithNumbers[i];
        
    }
    return max;
}

/*
 * 8. Write a function that returns the current day as a string, i.e Monday, Tuesday
 */

function currentDay(){
var weekday = new Array(7);
weekday[0]=  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

 return weekday[new Date().getDay()];
}


console.log("Current day: " + currentDay());

/*
 * 9. Create a prototype for animal objects with at least 4 properties and one method.
 *  It must have a Boolean isMammal and a name property.
 *  Create a number of animals and loop over the collection while writing 
 *  their properties to the console.
 */

function Animal(name, isAlive, isMammal, avgAge){
    this.name = name;
    this.isAlive = isAlive;
    this.isMammal = isMammal;
    this.avgAge = avgAge;
}

var tiger = new Animal("tiger", true, true, 30);
var monkey = new Animal("monkey", true, false, 12);
var cat = new Animal("cat", true, true, 50);
var animalArray = [tiger, monkey, cat];

animalArray.forEach(function (animal){
//    console.log(animal.name +"." + animal.isAlive + "." + animal.isMammal +"."+ animal.avgAge  );
    var animalString="";
    for (var property in animal) {
    if (animal.hasOwnProperty(property)) {
        animalString += animal[property] +"."; // Weird syntax. Why not" animal.property????!
    }
    }  
     console.log(animalString);
});


/*
 * 10. Use the array filter() method to filter animals out that are not mammals
 */

animalArray = animalArray.filter(function (animal){
    if(animal.isMammal){
       return animal; 
    }
});

console.log("After Filtering");

animalArray.forEach(function (animal){
//    console.log(animal.name +"." + animal.isAlive + "." + animal.isMammal +"."+ animal.avgAge  );
    var animalString="";
    for (var property in animal) {
    if (animal.hasOwnProperty(property)) {
        animalString += animal[property] +"."; // Weird syntax. Why not" animal.property????!
    }
    }  
     console.log(animalString);
});

/*
 * 11. User the array map() method to get a resulting array with just 
 * the names of each animal as strings.
 */

animalArray.map(function (animal){
   console.log("Just name: " + animal.name); 
});


