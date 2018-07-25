function sucecionFibonacci(entrada)
{
    limpiar();
    /*
     * Manejo de suceción fibonacci
     * a = valor actual
     * b = valor nuevo
     * c = valor valor siguiente
     */
    
    //asignamos los valores iniciales
    var a = 0;
    var b = 1;
    var c = null;
    var maximo = 100;
    //cantidad de numeros de la serie fibonacci
    var elementosSerie = entrada.value;
    //validamos la entrada
    if(entrada.value > 100)
    {
        imprimir("debes ingresar un valor menor o igual a 100");
        return;
    }
    else
    {
        //imprimimos los valores iniciales
        imprimir(a);
        imprimir(b);
        //realizamos la iteración
        for(i=0; i < elementosSerie - 2 ; i++)
        {
            //valor siguiente
            c=a+b;
            a=b;
            b=c;
            imprimir(c);
        }
    }
}
function imprimir(valor)
{
    var resultado = document.getElementById("resultado");
    resultado.innerHTML+= valor + " ";
}
function limpiar()
{
    document.getElementById("resultado").innerHTML="";
}