/**
 * ============================================================================
 * ? Constructor
 * ============================================================================
 *
 * * A constructor runs automatically when an object is created.
 *
 * * It is mainly used to initialize object properties.
 */

class Juice {

    flavour: string
    price: number

    constructor(flavour: string, price: number) {
        this.flavour = flavour
        this.price = price
    }
}


const mangoJuice = new Juice("mango", 150)


/**
 * ============================================================================
 * ? Access Modifiers
 * ============================================================================
 *
 * * Access modifiers control where class properties and methods
 * * can be accessed.
 *
 * * public
 * * → Accessible everywhere.
 *
 * * private
 * * → Accessible only inside the same class.
 *
 * * protected
 * * → Accessible inside the class and its child classes.
 */

class User {

    public name: string = "Shahnawaz"
    private password: string = "shahnawaz1234"
    protected age: number = 20

    reveal() {
        return this.password
    }
}


class Admin extends User {

    showInfo() {
        console.log(this.name)
        console.log(this.age)

        /**
         * ! this.password
         * ! private properties cannot be accessed by child classes.
         */
    }
}


class Manager extends User {

    showAge() {
        console.log(this.name)
        console.log(this.age)
    }
}


const user = new User()

console.log(user.name)

/**
 * ! user.password
 * ! private cannot be accessed outside the class.
 *
 * ! user.age
 * ! protected cannot be accessed outside the class.
 */


/**
 * ============================================================================
 * ? Private using #
 * ============================================================================
 *
 * * `#` creates JavaScript's true runtime private field.
 *
 * * It can only be accessed from inside the class.
 */

class PrivateUser {

    #password: string = "12345"

    showPassword() {
        return this.#password
    }
}


const privateUser = new PrivateUser()

console.log(privateUser.showPassword())

/**
 * ! privateUser.#password
 * ! #password cannot be accessed outside the class.
 */


/**
 * ============================================================================
 * ? Private using _
 * ============================================================================
 *
 * * `_` does NOT make a property private.
 *
 * * It is only a naming convention developers commonly use
 * * for internal properties.
 */

class Account {

    _password: string = "12345"

    showPassword() {
        return this._password
    }
}


const account = new Account()

console.log(account._password)


/**
 * ============================================================================
 * ? Readonly
 * ============================================================================
 *
 * * `readonly` prevents a property from being reassigned
 * * after initialization.
 */

class Product {

    readonly id: number = 101
    name: string = "Laptop"
}


const product = new Product()

product.name = "PC"

/**
 * ! product.id = 102
 * ! Cannot assign to a readonly property.
 */


/**
 * ============================================================================
 * ? Getter and Setter
 * ============================================================================
 *
 * * Getter
 * * → Reads a private property.
 *
 * * Setter
 * * → Controls how a private property is updated.
 *
 * * Getters and setters allow us to control access to
 * * internal class data.
 */

class Person {

    private _age: number = 20

    get age() {
        return this._age
    }

    set age(value: number) {

        if (value >= 18) {
            this._age = value
        }
    }
}


const person = new Person()

console.log(person.age)

person.age = 25


/**
 * ============================================================================
 * ? Static
 * ============================================================================
 *
 * * `static` properties and methods belong to the class itself,
 * * not to individual objects.
 *
 * * They are accessed using the class name.
 */

class Company {

    static companyName: string = "Google"

    static showCompany() {
        return Company.companyName
    }
}


console.log(Company.companyName)
console.log(Company.showCompany())


const company = new Company()

/**
 * ! company.companyName
 * ! Static members cannot be accessed through an object.
 */


/**
 * ============================================================================
 * ? Abstract Classes
 * ============================================================================
 *
 * * An abstract class is a base class that cannot be instantiated directly.
 *
 * * It can contain abstract methods that child classes must implement.
 *
 * * Abstract classes are useful when multiple classes share
 * * common behavior but must provide their own implementation
 * * of certain methods.
 */

abstract class Animal {

    abstract makeSound(): void

    move() {
        console.log("Animal is moving")
    }
}


class Dog extends Animal {

    makeSound() {
        console.log("Bark")
    }
}


const dog = new Dog()

dog.makeSound()
dog.move()

/**
 * ! const animal = new Animal()
 * ! Abstract classes cannot be instantiated.
 */


/**
 * ============================================================================
 * ? Inheritance
 * ============================================================================
 *
 * * Inheritance allows a child class to reuse properties and methods
 * * from a parent class.
 *
 * * `extends` creates an "is-a" relationship.
 *
 * * EmployeeManager IS AN Employee.
 *
 * * Benefits:
 *
 * * - Code reuse
 * * - Shared behavior
 * * - Method overriding
 * * - Hierarchical relationships
 */

class Employee {

    name: string = "Shahnawaz"

    login() {
        console.log("Employee logged in")
    }
}


class EmployeeManager extends Employee {

    manageTeam() {
        console.log("Managing team")
    }
}


const employeeManager = new EmployeeManager()

employeeManager.login()
employeeManager.manageTeam()


/**
 * ============================================================================
 * ? Composition
 * ============================================================================
 *
 * * Composition means building a class using objects of other classes.
 *
 * * Instead of inheriting behavior, the class "has" another object.
 *
 * * Car HAS AN Engine.
 *
 * * Composition is useful when one object depends on another object
 * * to perform part of its work.
 */

class Engine {

    start() {
        console.log("Engine started")
    }
}


class Car {

    private engine: Engine

    constructor() {
        this.engine = new Engine()
    }

    startCar() {
        this.engine.start()
    }
}


const car = new Car()

car.startCar()


/**
 * ============================================================================
 * ? Aggregation
 * ============================================================================
 *
 * * Aggregation is also a "has-a" relationship.
 *
 * * The difference is that the contained object can exist independently.
 *
 * * School HAS A Teacher.
 *
 * * But the Teacher can exist without the School.
 */

class Teacher {

    constructor(public name: string) {}
}


class School {

    constructor(public teacher: Teacher) {}

    showTeacher() {
        console.log(this.teacher.name)
    }
}


const teacher = new Teacher("Shahnawaz")

const school = new School(teacher)

school.showTeacher()

console.log(teacher.name)