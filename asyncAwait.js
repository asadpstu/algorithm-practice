const { callbackify } = require("util");

const displaymessage = async (number, limit) => {
    console.log("Hello There -1!")
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            var array = [];
            for (var i = 1; i <= limit; i++) {
                array.push(number * i * 5);
            }
            var result = [number, limit, array]
            result = [].concat.apply([], result);
            /* to execute reject
               if(condition) reject("Something goes wrong!");
            */
            resolve(result);

        }, 2000);

    });
}

// displaymessage(5, 5).then(data => {

//     console.log("Hello There -2!")
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// })


const response = async () => {
    console.log(await displaymessage(1, 2));
    console.log(await displaymessage(2, 3));
    console.log(await displaymessage(3, 4));
}

response();


