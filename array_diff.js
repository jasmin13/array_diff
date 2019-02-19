var arr=[1,2,3,4];

var arr2 = [];

for(var i=0; i < arr.length; i++){
  if((arr[i+1]-arr[i]) == 1){
      arr2.push(arr[i+1],arr[i])
      console.log(arr2);
      arr2 = [];
  }
}
