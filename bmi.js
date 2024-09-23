function calculateBMI() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value) / 100;

  if (isNaN(weight) || isNaN(height)) {
    document.getElementById('result').textContent = "Please enter valid numbers.";
    return;
  }

  const bmi = weight / (height * height);
  const resultElement = document.getElementById('result');

  resultElement.textContent = `Your BMI is ${bmi.toFixed(2)}. `;

  if (bmi < 18.5) {
    resultElement.textContent += "You are underweight.";
  } else if (bmi < 24.9) {
    resultElement.textContent += "You have a normal weight.";
  } else if (bmi < 29.9) {
    resultElement.textContent += "You are overweight.";
  } else {
    resultElement.textContent += "You are obese.";
  }
}
