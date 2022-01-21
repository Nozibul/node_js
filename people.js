const people = ['sk', 'nj', 'qt'];
const arr = ['skk', 'inj', 'lqt'];


function test(){
    console.log('Node JS');
};

const a = 7;

const add =(a,b)=> a+b; 

// export for single variable way 1
module.exports.sub = (a,b)=> a-b ;

// export for single variable way 2
exports.mull = (a,b)=> a*b ;

// export for single variable way 3
module.exports= people;

// export for all variable way 4
module.exports={
    arrayList: arr, 
    func:test,
     a  
};

// export for single variable way 5
module.exports.add = add;
