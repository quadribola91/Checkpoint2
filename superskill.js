
function dot_product(v1, v2) {   
    let i = 0;
    let result = 0;
    for (let i = 0; i < v1.length; i++) {
      result = result + (v1[i] * v2[i]);
    }
  
    return result;
  }

  const v1 = [2, 3, 4];
  const v2 = [5, 6, 7];

  console.log(dot_product(v1, v2));
  


    
     // Example usage:
    // const product = dot_product(vector1, vector2);