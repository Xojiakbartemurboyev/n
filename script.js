
const isConfirmed = confirm("Kettikmi boshlaymizmi");


const num1 = parseFloat(prompt(" son kiriting:"));
const num2 = parseFloat(prompt("son  kiriting:"));


if (isConfirmed) {
    alert(`${num1} + ${num2} = ${num1 + num2}`);
} else {
    alert(`${num1} - ${num2} = ${num1 - num2}`);
}


