// Exemplo de interação com o formulário (poderia ser expandido para enviar os dados para um servidor)
document.getElementById("form-contato").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    alert(`Mensagem enviada com sucesso! \nNome: ${nome} \nEmail: ${email} \nMensagem: ${mensagem}`);

    // Aqui poderia adicionar uma lógica para enviar os dados para um servidor ou processá-los de alguma maneira.
});
