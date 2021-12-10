let koder = {
    name:"jorge",
    lastName:"Camarillo",
    average: [10, 10, 10, 8, 9],
    age: 30,

    getAge: function () {
        return this.age
    },

    get ageKoder() {
        return this.age
    },

    set ageKoder(age) {
        this.age = age
    },

    get fullName() {
        return `${ this.name } ${ this.lastName }`
    },

    set fullName(objFullName) {
        this.name = objFullName[0]
        this.lastName = objFullName[1]
    },


}

// Metodos
console.log( koder.getAge() )

// getters
console.log('Edad inicial: ', koder.ageKoder)
console.log('Nombre completo: ', koder.fullName)

// setters
koder.ageKoder = 47
koder.fullName = ['jorge luis', 'camarillo']

// ----------------------------------------------------------------------------


Object.defineProperties( koder, 'averagecoder', {
    get() {
        return this.average.reduce( ( acc, cv) => acc += cv, 0) / this.average.length
    }
})


// getter y setter de 
/**
 * 
 * 1. getter average
 * 2. getter, setter IMC 
 * 3. setter Score
 * 4. setter newProperty
 * 
 * 
 */

// setter Score
Object.defineProperties ( koder , 'score', {
    set(score) {
        this.average.push(score)
    }
})

koder.score = 8

// Setter newProperty 

Object.defineProperties( koder, 'newProperty', {
    set(objProp) {
        this[objProp.namerProperty] = objProp.valueProperty
    }
})

koder.newProperty = {
    namerProperty: 'generation',
    valueProperty: 6
}

koder.newProperty = {
    'gender' : 'M'
}