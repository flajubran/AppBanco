// 1.Pense na melhor forma de representar tais contas, e por quê? 
let Conta = function (numeroConta, tipoConta, saldoConta, titularConta) {
    this.numero = numeroConta;
    this.tipo = tipoConta;
    this.saldo = saldoConta;
    this.titular = titularConta;
}

//2.Uma vez decidido qual será o tipo de dados para representar as contas das contas, crie uma conta de teste e 
//verifique se as propriedades mencionadas acima são criadas corretamente.

let novaConta = new Conta(1234 - 5, "Corrente", 50.00, "Britney Spears");

console.log(novaConta);

//3.Agora que sabemos como representar usuários e suas contas, o cliente nos forneceu uma lista de contas que devemos ser capazes de criar.
// Para isso, devemos gerar uma função construtora que facilite a criação das contas bancárias correspondentes mais rapidamente.

let usuarios = [
    {
        conta: "5486273622",
        tipo: "Conta Corrente",
        saldo: 27771,
        titular: "Abigael Natte"
    },

    {
        conta: "3151956165",
        tipo: "Conta Corrente",
        saldo: 7601,
        titular: "Alonso Wannan",
    },

    {
        conta: "630841470",
        tipo: "Conta Corrente",
        saldo: 28776,
        titular: "Jobi Mawtus",
    },

    {
        conta: "4223508636",
        tipo: "Conta Corrente",
        saldo: 2177,
        titular: "Thomasin Latour",
    },

    {
        conta: "1761924656",
        tipo: "Conta Poupança",
        saldo: 32415,
        titular: "Ansel Ardley",
    },

    {
        conta: "2138105881",
        tipo: "Conta Poupança",
        saldo: 33196,
        titular: "Bendite Huggett",
    },

    {
        conta: "7401971607",
        tipo: "Conta Poupança",
        saldo: 18789,
        titular: "Jacki Shurmer",
    },

    {
        conta: "9582019689",
        tipo: "Conta Poupança",
        saldo: 27363,
        titular: "Jarret Lafuente",
    },

    {
        conta: "185979521",
        tipo: "Conta Poupança",
        saldo: 25994,
        titular: "Lonnie Verheijden",
    },

    {
        conta: "1183971869",
        tipo: "Conta Poupança",
        saldo: 8675,
        titular: "Ramon Connell",

    },

];

//4.A partir dos 10 usuários, gereuma lista onde todos eles convergem (lista de objetos)

let listaUsuarios = [];
for (let i = 0; i < usuarios.length; i++) {
    listaUsuarios.push(new Conta(usuarios[i].conta, usuarios[i].tipo, usuarios[i].saldo, usuarios[i].titular));
};

//5.Também nos pedem a criação de um objeto literal chamado banco que terá uma propriedade chamada clientes, 
//ele será composto pela lista de objetos gerados no ponto anterior.
//6.O objeto do banco criará um método chamado consultarCliente que receberá um nome (titular)
// por parâmetro e deve pesquisar na lista de contas e retornar ao objeto do cliente que corresponde a esse nome inserido.

let Banco = {
    usuarios: listaUsuarios,
    consultarUsuarios: function (titular) {
        console.log(this.usuarios);
        console.log(titular);
        return this.consultarUsuarios("Ramon Connell");

    },

    //7.Crie outro método chamado depósito que receberá como parâmetros, o titular da conta e uma quantidade de dinheiro para depositar. 
    //O método deve chegar à conta correspondente e, em seguida, adicionar a quantidade de dinheiro para depositar o saldo da conta,
    //então você deve dar um aviso pelo console com a mensagem "Depósito realizado, seu novo saldo é: xxx" .    

    deposito: function (titular, dinheiro) {
        let usuarios = this.consultarUsuarios(titular);
        usuarios.saldo += dinheiro;
        console.log("Depósito realizado, " + titular + ", seu novo saldo é: " + dinheiro);
    }
};

//8.	Crie um último método chamado saque que também receberá dois parâmetros, o titular da conta e o valor a ser extraído. 
//O método deve obter a conta correspondente e subtrair o valor do saldo atual. 
//Caso o resultado seja inferior a 0, você deve imprimir uma mensagem através do console de "Fundos insuficientes",caso contrário você
// deve imprimir "Extração feita com sucesso, seu novo saldo é: xxx"

saque: function (titular, valorextraido) {
    let usuarios = this.consultarUsuarios(titular);
    usuarios.saldo -= novoSaldo;
    if (usuarios.saldo <= 0) {
        console.log("Fundos insuficientes")
    } 
    else {
        console.log("Extração feita com sucesso, " + titular + ", seu novo saldo é: " + novoSaldo);
    }
}

