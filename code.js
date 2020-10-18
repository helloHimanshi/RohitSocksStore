let n = 17;
let ar = [];

function rohitSocksStore(n, ar) {
  let i, j;
  let pair = 0;
  let count = 0;

  for (i = 0; i < n; i++) {
    let arr = prompt("Enter the socks number.");
    ar.push(arr);
  }
  alert(ar);
  console.log(ar);
  ar.sort();
  console.log("Sorted Socks Array : " + ar);

  for (i = 0; i < ar.length; i++) {
    count = 1;
    for (j = i + 1; j < ar.length; j++) {
      if (ar[i] == ar[j]) {
        count++;
      }
    }
    if (count % 2 == 0) {
      pair++;
    }
    return pair;
  }
  console.log("Total numbers of matching socks pairs are : " + rohitSocksStore(n, ar))
