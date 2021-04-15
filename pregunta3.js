// Dado un array de numeros enteros, retornar el 3er mayor
// Por ejemplo en: [4,3,4,5,1] el tercer mayor es 3
// si la longitud del array es < 3 se debe retornar undefined

const greater3 = nums => {
    let resultado;
    if(nums.length < 3){
        resultado = undefined
    }else{
        let ordenado = nums.sort((num1,num2) => num2 - num1);
        let primero = ordenado[0];
        let nuevo = ordenado.filter(orden => orden < primero)
        let segundo = nuevo[0];
        let nvo = nuevo.filter(nv => nv < segundo)
        resultado = nvo[0];
    }
    return resultado;
    //(nums.length < 3) ? undefined : nums.sort((num1,num2) => num2 - num1
}



// TESTs no modificar
console.log(greater3([4,3,4,5,1]) === 3);
console.log(greater3([3,4]) === undefined);
console.log(greater3([4,4,4]) === undefined);
console.log(greater3([1,1,2,5]) === 1);