//Importação do módulo de conexão (database.js)
const { conectar, desconectar } = require('./database.js')

// Importação do modelo de dados do lanche
const lancheModel = require('./src/models/lanches.js')

// CRUD Create (função para adicionar um novo Lanche)
const criarLanche = async (nomeLan, descricaoLan, precoLan, imagemLan) => {
    try {
        const novoLanche = new lancheModel(
            {
                nomeLanche: nomeLan,
                descricaoLanche: descricaoLan,
                precoLanche: precoLan,
            }
        )
        // A linha abaixo salva os dados do cliente no banco
        await novoLanche.save()
        console.log("Lanche adicionado com sucesso ")
    } catch (error) {
        //tratamento de exceções especificas 
        if (error.code === 11000) {
            console.log(`Erro: O Lanche ${precoLan} já está cadastrado`)
        } else {
            console.log(error)
        }
    }
}

// Execução da aplicação
const app = async () => {
    await conectar()
    //CRUD - Create
    await criarLanche("Big Mac", "Hambúrguer com carne, queijo e molho especial", 19.99)

    await desconectar()
}

app()
