// Write your cade below:
function caclRemaindar(a,b) {
    return a%b
};

function caclSum(testArray) {
    var sum=0;
   for(var i=0;i<testArray.length;i++){
       sum+=testArray[i]
   }
   return sum
};

function caclSumInConditon(testArray,variable) {
    var sum=0
    for(var i=0;i<testArray.length;i++){
        if(testArray[i]<variable){
            sum+=testArray[i]
        }
    }
    return sum
};

module.exports = {
    caclRemaindar,
    caclSum,
    caclSumInConditon
}
