let shapescontainer = document.getElementById('Shapes_Container')
let shapesInfo = document.getElementById('Shapes_info')
let useShape = document.getElementById('idshape-Name')
let useWidth = document.getElementById('idwidth-Name')
let useHeight = document.getElementById('idHeight-Name')
let useArea = document.getElementById('idArea-Name')
let usePerim = document.getElementById('idPerimeter-Name')
let useRadius = document.getElementById('idRadius-Name')

//why does this throw an error?
// describe(id, Height, Width) { 
//     useShape.innerHTML = `shapeUsed ${idShape}`
//     useHeight.innerHTML = `shapeHeight ${idHeight}`
//     useWidth.innerHTML = `shapeWidth ${idWidth}`
// }

function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

class Shape {
    constructor(
        Width, Height, Radius
    ){
        this.Width = Width
        this.Height = Height
        this.Radius = Radius
}}

class Circle extends Shape{
    constructor(
        Radius 
    ){  super(Radius)
    this.newCircle = document.createElement ('div')
    this.newCircle.className = 'circle'
    this.newCircle.style.height = '100px'
    this.newCircle.style.width = '100px'
    this.newCircle.style.backgroundColor = 'red'
    this.newCircle.style.borderRadius = '100%'
    shapescontainer.appendChild(this.newCircle)
    this.newCircle.shapesInfo()
    this.newCircle.addEventListener('dblclick', () => {
        document.getElementById('shapescontainer').removeChild(this.Circle)
           
            
})
shapesInfo()

}}
document.getElementById('idCircle').addEventListener('click', () => {new Circle})

class Triangle extends Shape{
    constructor(
        Height
    ){  super(Height)
       this.Height = Height
       this.Triangle = document.createElement('div')
       this.Triangle.className = 'Triangle'
       shapescontainer.appendChild(this.Triangle)
       this.Triangle.shapesInfo()
       this.Triangle.addEventListener('dblclick', () => {
           document.getElementById('shapescontainer').removeChild(this.Triangle)
            let newTriangle = new Triangle(idTriangle)
            idTriangle.addEventListener('click', () => newTriangle)
       })
}}

class Rectangle extends Shape{
    constructor(
        Width, Height
    ){  super(Width, Height)
        this.Width = Width
        this.Height = Height
        this.Rectangle = document.createElement('div')
        this.Rectangle.className = 'Rectangle'
        shapescontainer.appendChild(this.Rectangle)
        this.Rectangle.shapesInfo()
        this.Rectangle.addEventListener('dblclick', () => {
            document.getElementById('shapescontainer').removeChild(this.Rectangle)
            let newRectangle = new Rectangle()
            idRect.addEventListener('click', () => newRectangle)
        })
}}


class Square extends Shape{
    constructor(
        sideLength
    ){  super(Shape)
        this.sideLength = sideLength
        this.Square = document.createElement('div')
        this.Square.className = 'Square'
        shapescontainer.appendChild(this.Square)
        this.Square.shapesInfo()
        this.Square.addEventListener('dblclick', () => {
            document.getElementById('shapescontainer').removeChild(this.Square)
            let newSquare = new Square()
            idSquare.addEventListener('click', () => newSquare)
        })

}}




//this project is pain, OOp is not my strongsuit at all





