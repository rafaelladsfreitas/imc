//Selecionar os elementos HTML que serão manipulados (DOM)
const footerLgpd = document.querySelector('#lgpd');
const btnLgpd = document.querySelector('#btn-lgpd');
const btnImc = document.querySelector('#btn-imc');

const contentCalculadora = document.querySelector('#content-calculadora');
const contentResultado = document.querySelector('#content-resultado');
const btnRefazer = document.querySelector('#btn-refazer');

const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');

//() => arrow function
//ao clicar no botão
btnLgpd.addEventListener('click', () => {
    //alert('clicou');

    //footer vai adicionar uma classe assim que clicar no botão
    footerLgpd.classList.add('d-none');
    //footerLgpd.style.display = 'none';

    //guardar uma informação(chave) no navegador 
    //nome da chave, valor da chave
    localStorage.setItem('fechouLgpd', 'sim');
})

//Verificar se o usuário já clicou no botão para fechar o Lgpd
if (localStorage.getItem('fechouLgpd') == 'sim') {
    footerLgpd.classList.add('d-none');
}

//Clicar no calcular e ir para a próxima página de resultado
btnImc.addEventListener('click', () => {

    //!= comparação (diferença)
    // || ou
    // && e 

    //Se os valores de peso e altura estiverem diferentes de vazio 
    if (peso.value != '' && altura.value != '') {

        //fórmula do Imc = peso / (altura*altura)
        let imc = peso.value / (altura.value * altura.value);

        const resultImc = document.querySelector('#result-imc');
        resultImc.innerHTML = imc.toFixed(2);

        const resultClassificacao = document.querySelector('#result-classificacao');

        if(imc < 18.5){
            resultClassificacao.innerHTML = 'Magreza';
            resultClassificacao.style.color = '#FF1f00';
            resultImc.style.color = '#FF1F00';
        }
        else if(imc >= 18.5 && imc < 24.9){
            resultClassificacao.innerHTML = 'Normal';
            resultClassificacao.style.color = '#05FF00';
            resultImc.style.color = '#05FF00';
        }
        else if(imc >= 25 && imc < 29.9){
            resultClassificacao.innerHTML = 'Sobrepeso';
            resultClassificacao.style.color = '#FFC700';
            resultImc.style.color = '#FFC700';
        }
        else if(imc >= 30 && imc < 39.9){
            resultClassificacao.innerHTML = 'Obesidade';
            resultClassificacao.style.color = '#FF1F00';
            resultImc.style.color = '#FF1F00';
        }
        else{
            resultClassificacao.innerHTML = 'Obesidade Grave';
            resultClassificacao.style.color = '#DF0000';
            resultImc.style.color = '#DF0000';
        }

        contentCalculadora.classList.add('d-none');
        contentResultado.classList.remove('d-none');
    }
    //caso contrário
    else {
        alert('Preencha todos os campos!');
    }

})

btnRefazer.addEventListener('click', () => {
    contentResultado.classList.add('d-none');
    contentCalculadora.classList.remove('d-none');

})



