function send (){
    var contaCliente = new Object();
    contaCliente.nome = document.getElementById('nome').value;
    contaCliente.sobrenome = document.getElementById('sobrenome').value;
    contaCliente.senha = document.getElementById('senha').value;
    contaCliente.confirmarSenha = document.getElementById('confirmarSenha').value;
    contaCliente.email = document.getElementById('email').value;
    contaCliente.genero = document.getElementById('genero').value;
    contaCliente.idade = document.getElementById('idade').value;
    contaCliente.email = document.getElementById('email').value;
    contaCliente.rg = document.getElementById('rg').value;


    var myJSON = JSON.stringify(contaCliente)
    console.log(myJSON)
    console.log(contaCliente.valueOf())


}
    // Exibe o botão "Ver Planos" quando o botão "Enviar" é clicado
    document.getElementById('btn-enviar').addEventListener('click', function() {
    document.getElementById('btn-ver-planos').style.display = 'block';
  });

  // Redireciona para outra página quando o botão "Ver Planos" é clicado
    document.getElementById('btn-ver-planos').addEventListener('click', function() {
    window.location.href = 'PagDePlanos.html'; 
  });