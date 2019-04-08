// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker{
    constructor(x){ 
        this.length = x.length,
        this.width = x.width,
        this.height = x.height
    }
    vol(){
        return this.length * this.width * this.height
    }
    sArea(){
        return (2 * (this.length * this.width + this.length * this.height + this.width * this.height))
    }
}

let cuboid = new CuboidMaker ({
    length: 4,
    width: 5,
    height: 5
})


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.vol()); // 100
console.log(cuboid.sArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.