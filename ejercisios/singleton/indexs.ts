import singleton from "./singleton";

const a = singleton.getInstance();
const b = singleton.getInstance();


console.log('a es igual a b?', a === b);