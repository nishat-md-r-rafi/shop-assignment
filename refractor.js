class Car {

    // we need to take the property in constructor arguments
    constructor(name){
        this.name = name;
    }

    printName() {
        console.log("Car Name:", this.name)
    }

    // the name should be dynamically used
    printAssembly() {
        console.log(`This ${this.name} Car finishes assembly every friday at 5pm.`)
    }
}


class TeslaCar extends Car {

    // we should also use constructor inside child class and call the super function to access all the properties and methods of parent class and also pass the arguments of parent class
    constructor(model, brand){
        super(brand)
        this.model = model
    }
    generateAssemblyReports(fileFormat) {
        console.log("Generating assembly reports ...")
        console.log(`Exporting ${fileFormat} reports ...`)
        console.log("Printing assembly reports ...")
        this.printAssembly()

    }
}

//driver code

const myCar = new TeslaCar("Model_3", "Tesla")
myCar.printName()
myCar.generateAssemblyReports("pdf")