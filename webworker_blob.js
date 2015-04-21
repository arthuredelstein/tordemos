var blob = new Blob(["test"]);
var blobURL = URL.createObjectURL(blob);
console.log(blobURL);

