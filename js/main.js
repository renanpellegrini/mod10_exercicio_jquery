$(document).ready(function() {
    
    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000\\.000\\.000-00', {placeholder: "___.___.___-__"})
    $('#CEP').mask('00.000-000')


    $('form').validate({
        rules:{
            nomeCompleto: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            cpf: {
                required: true
            },
            telefone: {
                required: true
            },
            enderecoCompleto: {
                required: true
            },
        },
        messages: {
            nomeCompleto: 'Por favor, insira seu nome',
            telefone: 'Por favor, insira seu telefone',
            email: 'Por favor, insira seu e-mail',
            enderecoCompleto: 'Por favor, insira seu endereço',
            cpf: 'Por favor, insira seu CPF',
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
    })