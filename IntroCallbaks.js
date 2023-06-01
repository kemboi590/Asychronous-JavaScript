
/* A callback function is a function that is passed to another function as an argument 
and is executed after some operation has been completed.
*/

function doHomework(subject, callback) {
    console.log(`Starting my ${subject} homework.`);
    callback();
}
function alertFinished(){
    console.log('Finished my homework');
}
    
doHomework('math', alertFinished);




