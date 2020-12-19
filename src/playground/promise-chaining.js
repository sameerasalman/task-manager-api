require('../db/mongoose');
const { update } = require('../models/user.model');
const User = require('../models/user.model');

//5fceff5c9bde061f406815c2

// User.findByIdAndUpdate('5fcf75e303f13b3788a49051', {age: 6}).then((user) => {
//     console.log(user);
//     return User.countDocuments({age: 6})
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age });
    const count = await User.countDocuments({age});
    return count
}

updateAgeAndCount('5fcf75e303f13b3788a49051', 2).then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e)
});