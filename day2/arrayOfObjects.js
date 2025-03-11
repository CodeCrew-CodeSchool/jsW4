// Array
let Students = [];

// Array.filter call with callback function
Students.filter(function(student){
    return student.grade >= 90;
})

// custom function to abstract filter logic
function filterAs(student) {
    return student.grade >= 90;
}

// Array.filter call with custom function as callback
Students.filter(filterAs(student));

Students.map(function (student) { 
    student.attendance();
});

Students.map((student) => student.attendance());