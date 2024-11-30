function nextGreaterNumber(num) {
    let digits = num.toString().split('');
    if (num < 0) return "Negative numbers are not allowed";
    if (digits.length === 1) return "Single digit number is not valid";
    
    let i = digits.length - 2;
      while (i >= 0 && digits[i] >= digits[i + 1]) i--; //Find the first smaller digit from the right
      
      if (i < 0) return "This number itself is greater";; //No greater permutation exists
       
      let j = digits.length - 1;
      while (digits[j] <= digits[i]) j--; //Identify the smallest digit greater than digits[i] to the right.

      [digits[i], digits[j]] = [digits[j], digits[i]];
      return digits.slice(0, i + 1).concat(digits.slice(i + 1).reverse()).join('');//Swap digits[i] and digits[j], then reverse the rest.
    }
    
    document.getElementById('calculate').addEventListener('click', function () {
        const numInput = document.getElementById('numInput').value;
        if (numInput === "") {
          document.getElementById('result').textContent = "Please enter a number!";
          return;
        }
        const result = nextGreaterNumber(Number(numInput));
        document.getElementById('result').textContent = result;
      });