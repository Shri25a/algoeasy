function BucketSort(){
    var i, j, min_idx;
    
    var e1=document.getElementById("inputarr").value;
    
    var x=e1.split(' ');
    var arr=[];
    var index=0;
    while(true){
        if(x[index]!=undefined){
            arr[index]=x[index];
            index++;
        }
        else{
            break;
        }
    }
    const bucketSort = arr => {
        if (arr.length === 0) {
           return arr;
        }
        let i,
        minValue = arr[0],
        maxValue = arr[0],
        bucketSize = 5;
        arr.forEach(function (currentVal) {
           if (currentVal < minValue) {
              minValue = currentVal;
           } else if (currentVal > maxValue) {
              maxValue = currentVal;
           }
        })
        let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
        let allBuckets = new Array(bucketCount);
        for (i = 0; i < allBuckets.length; i++) {
           allBuckets[i] = [];
        }
        arr.forEach(function (currentVal) {
           allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(currentVal);
        });
        arr.length = 0;
        allBuckets.forEach(function(bucket) {
           insertion(bucket);
           bucket.forEach(function (element) {
              arr.push(element)
           });
        });
        return arr;
     }
}


 const insertion = arr => {
    let length = arr.length;
    let i, j;
    for(i = 1; i < length; i++) {
       let temp = arr[i];
       for(j = i - 1; j >= 0 && arr[j] > temp; j--) {
          arr[j+1] = arr[j];
       }
       arr[j+1] = temp;
    }
    document.getElementById("demo1").innerHTML=document.getElementById("demo1").innerHTML+" " +arr;
    document.getElementById("demo1").innerHTML=document.getElementById("demo1").innerHTML+"<br>";
    return arr;
 };