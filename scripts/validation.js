"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//global variable for interface
const validationObj = {};
class Course {
    //constructor
    constructor(_title, _price) {
        this.title = _title;
        this.price = _price;
    }
}
__decorate([
    Required
], Course.prototype, "title", void 0);
__decorate([
    Positive
], Course.prototype, "price", void 0);
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    // get all elements
    const titleEl = document.getElementById("name");
    const priceEl = document.getElementById("PhoneNumber");
    //values from element
    const title = titleEl.value;
    const price = +priceEl.value;
    const courseObj = new Course(title, price);
    console.log(courseObj);
    if (!validate(courseObj)) {
        alert("input value is is not valid ");
    }
});
function Required(target, name) {
    console.log(target);
    const className = target.constructor.name; // course
    //retreiving all properties name in an array
    validationObj[className] = Object.assign(Object.assign({}, validationObj[className]), { [name]: ["required"] });
    console.log(validationObj);
}
function Positive(target, name) {
    console.log(target);
    const className = target.constructor.name; // course
    //retreiving all properties name in an array
    validationObj[className] = Object.assign(Object.assign({}, validationObj[className]), { [name]: ["positive"] });
    console.log(validationObj);
}
//7 create a function to implement validation
function validate(obj) {
    let validatorName = validationObj[obj.constructor.name];
    console.log(validatorName);
    if (!validatorName) {
        return true;
    }
    // valid valriable
    let isValid = true;
    // property name from validator name
    for (const prop in validatorName) {
        console.log(prop);
        for (const validator of validatorName[prop]) {
            console.log(validator);
            switch (validator) {
                case "required":
                    isValid = isValid && !!obj[prop];
                    break;
                case "positive":
                    isValid = obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}
