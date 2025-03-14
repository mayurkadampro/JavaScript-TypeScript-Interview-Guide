const LIMIT = 20;

const rateLimiter = (cb, limit) => {
    const evenLimit = Math.floor(60000 / limit);
    const stack = [];
    let isCalled = false;
    
    const callStack = () => {
        if(isCalled) return;
        isCalled = true;
        setTimeout(() => {
            if(stack.length){
                stack.shift()();
                isCalled = false;
                callStack();
            }
        }, evenLimit);
    }
       
    return (value) => {
        stack.push(cb.bind(this, value));
        callStack();
    }
}

const logUserDetails = (id) => {
   console.log(`Current user id is ${id}`);
}

const limitizer = rateLimiter(logUserDetails, LIMIT);

for(let i=1; i<=LIMIT; i++){
    limitizer(i);
}
