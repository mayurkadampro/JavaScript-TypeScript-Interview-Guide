const once = (func, context) => {
    let result;

    return (...args) => {
        if(func){
            result = func.call(context || this, ...args);
            func = null;
        }
        return result;
    }
}


const displayName = once(() => console.log("Mayur Kadam"));

displayName();
displayName();
displayName();
displayName();