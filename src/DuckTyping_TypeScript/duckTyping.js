"use strict";
exports.__esModule = true;
var VirtualEmployee = /** @class */ (function () {
  function VirtualEmployee(props) {
    this.firstname = props.firstname;
    this.lastname = props.lastname;
    this.salary = props.salary;
    this.email = ""
      .concat(props.firstname, ".")
      .concat(props.lastname, "@AyonInnovations.io");
  }
  return VirtualEmployee;
})();
var getFirstName = function (props) {
  return props.firstname;
};
var emp1 = {
  firstname: "Kweayon",
  lastname: "Clark",
  salary: 125345.65,
};
var emp2 = {
  firstname: "Kira",
  lastname: "Maali",
  salary: 135546.73,
};
var emp3 = new VirtualEmployee({
  firstname: "Ronin",
  lastname: "Clark",
  salary: 0,
});
var employees = [emp1, emp2, emp3];
employees.map(function (employee) {
  return console.log(getFirstName(employee));
});
