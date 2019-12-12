<script type="text/javascript">
  let nome = "Emanuel";
  console.log(nome);

  let nota = 10;
  if(nota>=7){
    console.log("Aprovado");
  } else{
    console.log("Reprovado");
  }

  let i=0;
  while(i<=10){
    console.log(i);
    i++;
  }

  for(let i=0; i<=10; i++){
    console.log(i);
  }

  let nomes = ["Jesus", "Maria", "José"];
  for(let item of nomes){
    console.log(item);
  }

  function soma(n1, n2){
    return n1+n2;
  }

  console.log(soma(2,5));

  let exibirValor = function(valor){
    console.log(valor);
  }

  let resultado = soma(5,8);
  exibirValor(resultado);

  let aluno = {
    nome:"Maria da Paz",
    matricula:"201916510009",
    cpf:"114.998.076.55",
    nascimento:"1978-06-24",
    endereco:{
      logradouro:"Buraco do Afonso",
      complemento:"Perto do Chapéu Cagado",
      bairro:"Centro",
      cep:"58245-000",
      numero:"24"
    }
  }

  console.log(aluno.endereco);

</script>
