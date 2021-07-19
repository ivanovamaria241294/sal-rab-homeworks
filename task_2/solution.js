function calcShipping(sum, min, shipping) {
    let productsSum = sum;
    let freeShippingMinSum = min; 
    let shippingPrice = shipping; 

  


let shippingSum;
if(productsSum = 0) {
 console.log(shippingSum = 0);
}
if (productsSum >= freeShippingMinSum) {
console.log(shippingSum = 0);
}
if (productsSum >0 && productsSum <= freeShippingMinSum) {
console.log(shippingSum = shippingPrice);
}

    // создайте переменную shippingSum

    // если productsSum равно 0,
    // то shippingSum присвоить значение 0

    // если productsSum Больше или равна freeShippingMinSum,
    // то shippingSum присвоить значение 0

    // если productsSum больше 0 и меньше freeShippingMinSum,
    // то shippingSum присвоить значение shippingPrice

    // Конец решения задания №2.1.

    return shippingSum;
}

function calcDiscount(sum, min, discount) {
    let productsSum = sum; // сумма в корзине
    let discountMinSum = min; // минимальная цена для скидки
    let discountPart = discount; // величина скидки в процентах

    // Задание №2.2. Рассчитать скидку

let discountPrice;
if (productsSum >= discountMinSum) {
console.log(discountSum = productsSum / 100 * discountPart);
 }else{
console.log( discountSum = 0);
} 


    

    // Конец решения задания №2.2.

    return discountSum;
}

function calcInvoice({sum, discountMinSum, discountPart, shippingFreeMinSum, shippingPrice}) {
    let productsSum = sum;
    let discountSum = calcDiscount(sum, discountMinSum, discountPart);

    // Задача №2.3. Рассчитать скидки и доставку в корзине

let totalSum
totalSum = productsSum; 
totalSum = totalSum - discountSum;


    // создайте переменную totalSum

    // присвойте totalSum значение productsSum
    // уменьшите totalSum на discountSum

    let shippingSum = calcShipping(totalSum, shippingFreeMinSum, shippingPrice); // не изменяйте эту строку!!!

totalSum = totalSum + shippingSum;
shippingSum = 0 ? freeShipping =  true : freeShipping = false;

    // прибавьте к totalSum значение shippingSum

    // создайте переменную freeShipping
    // запишите без использования if или любых других условий:
    // если shippingSum равно нулю, то freeShipping должна быть равна true, иначе freeShipping должна быть равна false

    // Конец решения задачи №2.3.

    return {discount: discountSum, freeShipping, shipping: shippingSum, total: totalSum}; }
