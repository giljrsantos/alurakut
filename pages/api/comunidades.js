import {SiteClient, algumaCoisa} from 'datocms-client';

export default async function recebedorDeRequests(request, response){

    if(request.method === 'POST'){

        const TOKEN = 'f66050b6c91b783369cc18d0704342';
        const client = new SiteClient(TOKEN);
    
        // Validar os dados, antes de sair cadastrado
        const registroCriado = await client.items.create({
            itemType: "972779", //ID de Model de "Comunities" criado pelo Dato
            ...request.body,
            //title:"Comunidade de Teste",
            //imageUrl:"https://queconceito.com.br/wp-content/uploads/Comunidade3.jpg",
            //creatorSlug:"capiaudosul",     
        });
    
        response.json({
            dados: 'Algum dado qualquer',
            registroCriado: registroCriado,
        });

        return;
    }

    response.status(404).json({
        messege: 'Ainda não tem nada no GET, mas no POST tem!'
    });

}