// Non-destructive update function
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
}

// Destructive update function
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

// Non-destructive delete function
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

// Destructive delete function
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}


let employee = { name: "Sam", streetAddress: "11 Broadway" };

// Non-destructive update
let updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'age', 30);
console.log(updatedEmployee); // { name: 'Sam', streetAddress: '11 Broadway', age: 30 }
console.log(employee);        // { name: 'Sam', streetAddress: '11 Broadway' } // Original unchanged

// Destructive update
destructivelyUpdateEmployeeWithKeyAndValue(employee, 'age', 30);
console.log(employee); // { name: 'Sam', streetAddress: '11 Broadway', age: 30 }

// Non-destructive delete
let newEmployee = deleteFromEmployeeByKey(employee, 'age');
console.log(newEmployee); // { name: 'Sam', streetAddress: '11 Broadway' }
console.log(employee);    // { name: 'Sam', streetAddress: '11 Broadway', age: 30 } // Original unchanged

// Destructive delete
destructivelyDeleteFromEmployeeByKey(employee, 'age');
console.log(employee); // { name: 'Sam', streetAddress: '11 Broadway' }
