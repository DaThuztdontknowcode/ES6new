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

// Tạo đối tượng của lớp Geometry
const geometryObject = new Geometry("Square", "A four-sided polygon with equal sides", 5);

// In ra các thuộc tính của lớp Information
console.log(`Tên: ${geometryObject.name}`);
console.log(`Mô tả: ${geometryObject.description}`);

// In ra các thuộc tính của lớp Geometry
console.log(`Chiều dài: ${geometryObject.length}`);

// Gọi hàm tính toán từ lớp Information thông qua lớp Geometry
const computedValue = geometryObject.computeGeometryValue(2);
console.log(`Giá trị tính toán: ${computedValue}`);
