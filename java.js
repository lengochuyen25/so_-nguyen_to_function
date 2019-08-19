let numbers = prompt(" Bạn muốn số nguyên tố nhỏ hơn bao nhiêu ? ");
function so_nguyen_to(numbers) {
    let result = "";
    let N = 2;
    while (N < numbers) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(N); i++) {
            if (N % i == 0) {
                isPrime = false;
            }
        }
        if (isPrime) {
            result += "" + N + "<br>";
        }
        N++;
    }
    document.getElementById("result").innerHTML= result;
}
so_nguyen_to(numbers);

