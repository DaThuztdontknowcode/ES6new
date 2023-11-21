class Person {
    constructor(name) {
        this._name = name;
    }

    // Getter cho thuộc tính name
    get name() {
        return this._name;
    }

    // Setter cho thuộc tính name
    set name(newName) {
        this._name = newName;
    }

    // Phương thức di chuyển
    walk() {
        console.log(`${this._name} is walking.`);
    }
}

class Programmer extends Person {
    constructor(name, programmingLanguage) {
        super(name);
        this._programmingLanguage = programmingLanguage;
    }

    // Getter cho thuộc tính programmingLanguage
    get programmingLanguage() {
        return this._programmingLanguage;
    }

    // Setter cho thuộc tính programmingLanguage
    set programmingLanguage(newLanguage) {
        this._programmingLanguage = newLanguage;
    }

    // Phương thức viết code
    writeCode() {
        console.log(`${this._name} is writing code in ${this._programmingLanguage}.`);
    }
}

// Tạo đối tượng thuộc lớp Programmer
const programmerObject = new Programmer("John", "JavaScript");

// Gọi phương thức và sử dụng Getter của lớp Person
console.log(`Name: ${programmerObject.name}`);
programmerObject.walk();

// Gọi phương thức và sử dụng Getter của lớp Programmer
console.log(`Programming Language: ${programmerObject.programmingLanguage}`);
programmerObject.writeCode();

// Sử dụng Setter để thay đổi giá trị của thuộc tính
programmerObject.name = "Alice";
programmerObject.programmingLanguage = "Python";

// Kiểm tra kết quả sau khi thay đổi giá trị
console.log(`New Name: ${programmerObject.name}`);
console.log(`New Programming Language: ${programmerObject.programmingLanguage}`);
