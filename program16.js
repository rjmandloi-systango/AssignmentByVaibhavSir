let salaries = [300,400,500,600,700];
let sales = [40,40,50,007,70];
let values = [5,6,7,8,9,10];
function SumAll(salaries){
	sum = 0;
	for (let value of salaries) {
        sum = sum + value;
    }
	console.log("Total sum of salaries - "+sum);
}
SumAll(sales);
SumAll(salaries);
SumAll(values);