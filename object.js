let student = { name: "Alice", age: 20 };

console.log("Initial object:", student);

student.age = 21;
console.log("After updating age:", student);

student.course = "CS";
console.log("After adding course:", student);

delete student.name;
console.log("After deleting name:", student);
