
var names = ["Peter", "Hans", "Grete"];


names.forEach(function(name){
   console.log(name);
});

function myForEach(arr,callback){
    for(var i =0; i< arr.length; i++){
        callback(arr[i]);
    }
    
};

myForEach(names, function(name){
   console.log(name); 
});