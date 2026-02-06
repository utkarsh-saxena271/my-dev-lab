class Rectangle{
    constructor(width, hight){
        this.width = width
        this.hight = hight
    }
    area(){
        return this.hight*this.width
    }
    perimeter(){
        return 2*(this.hight+this.width)
    }
}


const r1 = new Rectangle(2,3)
console.log("Area ", r1.area())
console.log("Perimeter ", r1.perimeter())