/* Objects */

const mixin = (receiver, supplier) => {
    Object.keys(supplier).forEach(key => {
        receiver[key] = supplier[key];
    });

    return receiver;
}
const emmiter = {
    emit: value => console.log(value || 'emmited')
}

const receiver= {};

//mixin(myObj1, emmiter);

/* myObj1.emit();
myObj1.emit('hello'); */

Object.assign(
    receiver,
    { type: 'js', name: 'file.js'}
)


Object.is();

/* Prototypes */

const grandHarry = {
    name: 'grand Harry',
    sayName() {
        console.log(this.name);
    }
}

grandHarry.sayName();

const harry = {
    name: 'Harry',
    __proto__: grandHarry
}

harry.sayName();

const harryJunior = {
    name: 'Harry Junior',
    __proto__: harry
}

harryJunior.sayName();

