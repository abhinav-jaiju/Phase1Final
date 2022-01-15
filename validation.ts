interface validationConfig {
    [property: string]: {
      [validationProperty: string]: string[];
    };
    // Course:{
    //     title:['required'];
    //     price:['required'];
    // }
  }
  //global variable for interface
  const validationObj: validationConfig = {};
  
  class Course {
    //property
    @Required
    title: string;
  
    @Positive
    price: number;

    @Required
    email : string

  
    //constructor
    constructor(_title: string, _price: number,_email:string) {
      this.title = _title;
      this.price = _price;
      this.email = _email
    }
  }
  
  const form = document.querySelector("form")!;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    // get all elements
    const titleEl = document.getElementById("name") as HTMLInputElement;
    const priceEl = document.getElementById("PhoneNumber") as HTMLInputElement;
    const emailEl = document.getElementById("email") as HTMLInputElement;
  
    //values from element
    const title = titleEl.value;
    const price = +priceEl.value;
    const email = emailEl.value;
  
    const courseObj = new Course(title, price, email);
    console.log(courseObj);
  
    if (!validate(courseObj)) {
      alert("input value is is not valid ");
    }
  });
  
  function Required(target: any, name: string) {
    console.log(target);
    const className = target.constructor.name; // course
  
    //retreiving all properties name in an array
  
    validationObj[className] = {
      ...validationObj[className],
      [name]: ["required"],
    };
    console.log(validationObj);
  }
  
  function Positive(target: any, name: string) {
    console.log(target);
    const className = target.constructor.name; // course
  
    //retreiving all properties name in an array
  
    validationObj[className] = {
      ...validationObj[className],
      [name]: ["positive"],
    };
    console.log(validationObj);
  }
  
  //7 create a function to implement validation
  function validate(obj: any) {
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