class Information {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }

    static computeValue(parameter = 1) {
        return parameter * 3;
    }
}

class Geometry extends Information {
    constructor(name, description, length) {
        super(name, description);
        this.length = length;
    }

    computeGeometryValue(parameter) {
        return Information.computeValue(parameter);
    }
}


const geometryObject = new Geometry("Square", "A four-sided polygon with equal sides", 5);


console.log(`Tên: ${geometryObject.name}`);
console.log(`Mô tả: ${geometryObject.description}`);


console.log(`Chiều dài: ${geometryObject.length}`);


const computedValue = geometryObject.computeGeometryValue(2);
console.log(`Giá trị tính toán: ${computedValue}`);
