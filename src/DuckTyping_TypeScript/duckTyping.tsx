import { stringify } from "querystring";
import React from "react";

// Types (interface, type, class keyword | can all be diffrent was to represent a named object)
//  - Types are "duck typed" in typescript
//  - duck typing only checks if the shape of the object matches
//    rather than checking if an object is of a specific type name

// Example | Working with Employee types (interface, type, class...all diffrent yet all the same):

interface Employee {
    firstname: string;
    lastname: string;
    salary: number;
};

type EmployeeTypeAlias = {
    firstname: string;
    lastname: string;
    salary: number;
};

class VirtualEmployee {
    firstname: string;
    lastname: string;
    salary: number;
    email: string;
    constructor(props:{firstname: string, lastname: string, salary: number,}){
        this.firstname = props.firstname;
        this.lastname = props.lastname;
        this.salary = props.salary;
        this.email = `${props.firstname}.${props.lastname}@AyonInnovations.io`
    };
};

const getFirstName: Function = (props:{employee: Employee}) =>
     {return props.employee.firstname;}

const emp1: Employee = {
    firstname: "Kweayon",
    lastname: "Clark",
    salary: 125_345.65,
};

const emp2: EmployeeTypeAlias = {
    firstname: "Kira",
    lastname: "Maali",
    salary: 135_546.73
};

const emp3: VirtualEmployee = 
    new VirtualEmployee({firstname: "Ronin", lastname: "Clark", salary: 0});

const employees: Employee[] = [emp1, emp2, emp3]

employees.map((employee)=>
     console.log(getFirstName(employee)));
