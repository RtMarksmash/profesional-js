function makeCounter(n){
    let count = n

    return{
        increase: function(){
            return count = count + 1
        },
        decrease: function(){
            return count = count - 1
        },
        getCount: function(){
            return count;
        }
        }
    };

    let counter = makeCounter(7);

    console.log(` the count is  ${counter.getCount()}`);
    console.log(` the add is ${counter.increase()}`);
    console.log(` the rest is ${counter.decrease()}`);
