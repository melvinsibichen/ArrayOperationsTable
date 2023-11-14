
var students = [
    { rollno: 1, name: "Boby Thomas", age: 22, gender: "Male", department: "MCA", totalMarks: 95 },
    { rollno: 2, name: "Lilly Jacob", age: 21, gender: "Female", department: "Electrical Engineering", totalMarks: 57 },
    { rollno: 3, name: "Peter David", age: 29, gender: "Male", department: "Civil Engineering", totalMarks: 65 },
    { rollno: 4, name: "Preethi Sabu", age: 31, gender: "Female", department: "MMH", totalMarks: 44 },
    { rollno: 5, name: "John Mathew", age: 33, gender: "Male", department: "Civil Engineering", totalMarks: 85 },
    { rollno: 6, name: "Martin James", age: 24, gender: "Male", department: "MCA", totalMarks: 78 },
    { rollno: 7, name: "Rose Abraham", age: 21, gender: "Female", department: "MMH", totalMarks: 89 },
    { rollno: 8, name: "Steve Luke", age: 34, gender: "Male", department: "BBA", totalMarks: 67 },
    { rollno: 9, name: "Airil Anil", age: 26, gender: "Female", department: "Electrical Engineering", totalMarks: 28 },
    { rollno: 10, name: "Amal Biju", age: 25, gender: "Male", department: "BBA", totalMarks: 92 },
];

// Table
function displayStudents(filteredStudents) {
    var tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";

    var studentsToDisplay = filteredStudents || students;

    studentsToDisplay.forEach(function (student) {
        var row = "<tr>";
        row += "<td>" + student.rollno + "</td>";
        row += "<td>" + student.name + "</td>";
        row += "<td>" + student.age + "</td>";
        row += "<td>" + student.gender + "</td>";
        row += "<td>" + student.department + "</td>";
        row += "<td>" + student.totalMarks + "</td>";
        row += "</tr>";

        tableBody.innerHTML += row;
    });
}

// field and order
function sortStudents() {
    var sortBy = document.getElementById("sortField").value;
    var sortOrder = document.getElementById("sortOrder").value;

    var sortOrderMultiplier = sortOrder === 'asc' ? 1 : -1;

    students.sort((a, b) => (a[sortBy] > b[sortBy]) ? sortOrderMultiplier : -sortOrderMultiplier);
    displayStudents();
}

// search bar
function filterTable() {
    var searchTerm = document.getElementById("searchBar").value.toLowerCase();
    var filteredStudents = students.filter(function (student) {
        return Object.values(student).some(value => value.toString().toLowerCase().includes(searchTerm));
    });
    displayStudents(filteredStudents);
}

// filter  by marks
function filterByMarks() {
    var filterMarks = document.getElementById("filterMarks").value;
    var filteredStudents = students.filter(function (student) {
        return student.totalMarks > filterMarks;
    });
    displayStudents(filteredStudents);
}

// Initial display 
displayStudents();