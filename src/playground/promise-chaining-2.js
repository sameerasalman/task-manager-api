require('../db/mongoose');
const Task = require('../models/task.model');
const User = require('../models/user.model');

// Task.findByIdAndDelete('5fcf17b8ccf87012845eebcf').then((task) => {
//     console.log(task);
//     return Task.countDocuments({Completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e);
// })

const deleteTaskAndDelete = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({Completed: true});
    return count;
}
deleteTaskAndDelete('5fcfaae96003f729fc55e676').then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
})