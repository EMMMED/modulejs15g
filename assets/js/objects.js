// Metodos o Funciones de Objetos Personalizados
// Creamos la tarea para retornar un valor especifico

let koder = {
    name : "Jorge",
    lasName : "Perez",
    age : 30,
    average : [10, 10, 10, 8, 9],
    // totalAverage : 0,
    // getFullName: function () {
    //     return `${this.name} ${this.lasName}`
    // }
    setAge : function ( age ) {
        this.age = age
    }
}   

    koder.setAge(40)

    koder.getFullName = function () {
        console.log(this)
        return `${ this.name } ${ this.lastName }`
    }

    koder.getAverage = function () {
        let sum = this.average.reduce ( ( acc, cv ) => acc += cv, 0)
        let total = this.average.length
        let av = sum / total
        return av
    }

    koder.setAverage = function () {
        this.totalAverage = this.getAverage()
    }
