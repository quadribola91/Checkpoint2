// Write an algorithm which determines, for n pairs of given vectors,
//whether two vectors of given IR are orthogonal, by calling the procedure
// defined in the previous question. The dot product of two orthogonal vectors is zero.

function dotProduct(v1, v2) {
  let result = 0;
  for (let i = 0; i < v1.length; i++) {
    result += v1[i] * v2[i];
  }
  return result;
}

// Check if the dot product of the two vectors is approximately zero
function orthogonalVectors(v1, v2) {
  let result = 0;
  for (let i = 0; i < v1.length; i++) {
    result += v1[i] * v2[i];
  }
  return result;
  if (result[i] === 0) {
    return true;
  }
}
