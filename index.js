const employee = {
    name: "Joe",
    streetAddress: "123 Sesame Street"
};
function updateEmployeeWithKeyAndValue(object, key, value) {
    return Object.assign({}, object, {[key]: value});
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const updatedEmployee = {...employee};
    delete updatedEmployee[key];
    return updatedEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee
}