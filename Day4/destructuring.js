// Use Destructuring Assignemnt to Assign variables from objects //
// This is a special syntax for neatly assigning values taken directly from an object to a variable. //
var voxel = {x:3.6, y:7.4, z:6.54};
/* var x = voxel.x;
var y = voxel.y;
var z = voxel.z; */
// Destructuring Assignment //
const {x:a, y:b, z:c} = voxel;
console.log(a,b,c)
// get the field of x and copy into the value a //

// Using destructuring to obtain the average temperature for tomorrow from the input object AVG_TRMPERATURES //
const AVG_TEMPERATURES = {
    today : 77.5,
    tomorrow : 79
};
function getTempOfTmrw(avgTemperatures){
    "use strict";
    const { tomorrow: tempofTomorrow } = avgTemperatures;
    return tempOfTomorrow;
}
console.log(getTempOfTmrw(AVG_TEMPERATURES)); 