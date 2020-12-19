const mongoose = require('mongoose');
const validator = require('validator');
const taskSchema  = new mongoose.Schema({
    Description: { 
        type: String,
        trim: true,
        required: true
    }, 
    Completed: { 
        type: Boolean,
        default: false
    }
    
}, {
    timestamps: true
})


// const Task = mongoose.model('Task', {
//     Description: { 
//         type: String,
//         trim: true,
//         required: true
//     }, 
//     Completed: { 
//         type: Boolean,
//         default: false
//     },
//     Owner: {
//         type: mongoose.Schema.Types.ObjectId,
//         required: true
//     }
// })

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
