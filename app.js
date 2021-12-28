/* botões */

$('#btn-1').on('click', function (e) {
    $('.card-1').show();
    $('.card-2').hide();
    $('.card-3').hide();
    $('.card-4').hide();
});

$('#btn-2').on('click', function (e) {
    $('.card-2').show();
    $('.card-1').hide();
    $('.card-3').hide();
    $('.card-4').hide();
});

$('#btn-3').on('click', function (e) {
    $('.card-3').show();
    $('.card-1').hide();
    $('.card-2').hide();
    $('.card-4').hide();
});

$('#btn-4').on('click', function (e) {
    $('.card-4').show();
    $('.card-1').hide();
    $('.card-2').hide();
    $('.card-3').hide();
});

$('#btn-0').on('click', function (e) {          
    $('.card-1').show();
    $('.card-2').show();
    $('.card-3').show(); 
    $('.card-4').show();
});

/* modal benefícios*/

$('.card').on('click', function (e)
{   
    switch($(this).attr('id')) 
    {
        case 'benef-1':
            $titulo = 'Pacote Office 365 disponível gratuitamente';
            $conteudo = 'Incluindo diversas ferramentas que facilitam seus estudos e sua comunicação com colegas e professores. O pacote inclui Word, Excel, PowerPoint, Teams, OneNote, Outlook, entre outros. Além disso, contam individualmente com o OneDrive com 5 TB (terabytes) de armazenamento. Os programas podem ser usados de forma online ou instalados em até cinco computadores.';
            $destaque = 'Benefício disponível durante todo o seu período de graduação.';
            $botao = 'Saiba mais sobre o Office 365';
            $link = 'pucrs.br/servicos/office-365';
            break;
        case 'benef-2':
            $titulo = 'Monitorias individuais e oficinas de aprendizagem';
            $conteudo = 'Para revisar conceitos e reforçar conteúdos através de atividades complementares à sala de aula - principalmente em matérias como: Matemática, Cálculo, Estatística, Física, Química, Letras e Desenho.';
            $destaque = 'Benefício disponível durante todo o seu período de graduação.';
            $botao = 'Conte com os serviços do Núcleo de apoio a aprendizagem';
            $link = 'pucrs.br/apoiodiscente/nucleo-de-apoio-a-aprendizagem/';            
            break;
        case 'benef-3':
            $titulo = 'Acesse gratuitamente coleções online com milhares de e-books, revistas científicas e bases de dados';
            $conteudo = '';
            $destaque = 'Benefício disponível durante todo o seu período de graduação.';
            $botao = 'Conheça e explore os serviços da Biblioteca Ir. José Otão';
            $link = 'biblioteca.pucrs.br/acervos/colecoes-on-line';           
            break;            
        case 'benef-4':
            $titulo = 'Aproveite os serviços de suporte para sua pesquisa científica e trabalhos acadêmicos do início ao fim';
            $conteudo = 'Inicie seu referencial teórico, encontre materiais sobre seu tema de pesquisa, qualifique a busca em banco de dados e execute seu trabalho com um auxílio especializado de nossas equipes.';
            $destaque = 'Benefício disponível durante todo o seu período de graduação.';
            $botao = 'Conheça e explore os serviços da Biblioteca Ir. José Otão';
            $link = 'biblioteca.pucrs.br/apoio-a-pesquisa';           
            break;            
        case 'benef-5':
            $titulo = 'Aproveite as orientações sobre uso de normas técnicas com nossos especialistas';
            $conteudo = 'Entenda mais sobre as estruturas da ABNT, APA e Vancouver.';
            $destaque = 'Benefício disponível durante todo o seu período de graduação.';
            $botao = 'Conheça e explore os serviços da Biblioteca Ir. José Otão';
            $link =  'biblioteca.pucrs.br/apoio-a-pesquisa/orientacao-no-uso-de-normas-tecnicas-de-documentacao';          
            break;            
        case 'benef-6':
            $titulo = '12% de desconto em cursos de Extensão, Idiomas e Especialização e MBA';
            $conteudo = 'Para você complementar sua graduação, buscar novos conhecimentos e continuar estudando dentro das áreas que você mais curte.';
            $destaque = 'Desconto exclusivo.';
            $botao = 'Conheça as oportunidades de Educação Continuada';
            $link = 'educon.pucrs.br';           
            break;            
        case 'benef-7':
            $titulo = 'O Lanche universitário é um combo com preços especiais pensado para estudantes PUCRS';
            $conteudo = 'Confira onde encontrar:<br/>• Espaço 32<br/>• Garten Bistro<br/>• Intervalo 50<br/>• Casa 5<br/>• Vila Olímpica<br/>• Delitzzi';
            $destaque = '';
            $botao = 'Saiba onde estão os Bares e Restaurantes participantes';
            $link = 'pucrs.br/coronavirus/servicos-do-campus';
            break;                
        case 'benef-8':
            $titulo = '30% de descontos';
            $conteudo = 'Em livros publicados pela Editora da PUCRS, e 10% de desconto em livros de parceiros vendidos pela EdiPUCRS.';
            $destaque = 'Desconto exclusivo.';
            $botao = 'Conheça a EdiPUCRS';
            $link = 'editora.pucrs.br';           
            break;                
        case 'benef-9':
            $titulo = '12% de desconto';
            $conteudo = 'Em materiais de escritório, materiais escolares, livros e outros artigos da Papelaria e Livraria Espaço Cultural. Valido apenas para pagamentos à vista.';
            $destaque = 'Desconto exclusivo.';
            $botao = 'Saiba onde encontrar';
            $link = 'pucrs.br/campus/#servicos';    
            break;                
        case 'benef-10':
            $titulo = 'Preço fixo diário com até 10% de desconto no estacionamento da Universidade';
            $conteudo = 'Incluindo opções cobertas e descobertas e segurança 24 horas por dia.';
            $destaque = 'Desconto exclusivo.';
            $botao = 'Saiba mais sobre o estacionamento';
            $link = 'pucrs.br/campus/#estacionamento';
            break;                   
        case 'benef-11':
            $titulo = 'Orientação Psicossocial, escuta e acompanhamento gratuito para estudantes PUCRS';
            $conteudo = 'Profissionais especializados para atenção às dificuldades decorrentes do dia a dia que impactam a vivência universitária.';
            $destaque = 'Benefício disponível durante todo o seu período de graduação.';
            $botao = 'Conte com os serviços do Centro de Apoio Discente';
            $link = 'pucrs.br/apoiodiscente/nucleo-de-apoio-psicossocial/';
            break;                   
        case 'benef-12':
            $titulo = 'Desconto de até 15% em exames selecionados do Hospital São Lucas da PUCRS';
            $conteudo = 'Localizado dentro do Campus da Universidade. Informações adicionais pelo agendamento de consultas no Hospital São Lucas da PUCRS.';
            $destaque = 'Desconto exclusivo.';
            $botao = 'Conheça a lista completa de exames com desconto';
            $link = 'hsl.pucrs.br';
            break;                   
        case 'benef-13':
            $titulo = 'Valores especiais nos serviços do Parque Esportivo para estudantes PUCRS';
            $conteudo = 'Aproveite a academia, modalidades esportivas e nossos espaços disponíveis para locação em um dos maiores complexos de esporte, saúde e bem-estar do Brasil.';
            $destaque = 'Benefício disponível durante todo o seu período de graduação. Desconto exclusivo.'
            $botao = 'Confira os espaços do Parque Esportivo';
            $link = 'pucrs.br/parqueesportivo/locacao-esportiva/espacos-disponiveis';           
            break;                    
        case 'benef-14':
            $titulo = 'Assessoria gratuita de empreendedorismo e inovação, para tirar ideias do papel e desenvolvê-las do início ao fim';
            $conteudo = 'Seja na busca por um propósito, planejamento, construção ou validação de um projeto.';
            $destaque = 'Benefício disponível durante todo o seu período de graduação.';
            $botao = 'Conheça os projetos e iniciativas do Idear PUCRS';
            $link = 'idear.pucrs.br/o-que-fazemos/assessorias-idear';          
            break;                    
        case 'benef-15':
            $titulo = 'Consultoria de carreira e oficinas de inserção no mercado de trabalho gratuitas';
            $conteudo = 'Para auxiliar no desenvolvimento de sua trajetória profissional.';
            $destaque = 'Benefício disponível durante todo o seu período de graduação.';
            $botao = 'Confira os serviços do PUCRS Carreiras';
            $link = 'carreiras.pucrs.br';           
            break;                    
        case 'benef-16':
            $titulo = 'Aproveite sem custos o Coworking do Tecnopuc.';
            $conteudo = 'Um espaço colaborativo para você desenvolver suas ideias com uma infraestrutura completa e inspiradora.';
            $destaque = 'Benefício disponível durante todo o seu período de graduação.';
            $botao = 'Saiba mais sobre o espaço';
            $link = 'tecnopuc.pucrs.br';           
            break;            
        case 'benef-101':
            $titulo = 'Cursos de extensão';
            $conteudo = 'A melhor forma de complementar seus estudos. Você pode escolher qualquer curso* do nosso portfólio de extensão e aproveitar gratuitamente durante o semestre vigente.';
            $destaque = 'Benefício disponível apenas durante o semestre vigente.';
            $botao = 'Saiba as opções no nosso site da Educação continuada';
            $link = 'educon.pucrs.br';          
            break;
        case 'benef-102':
            $titulo = 'Cursos de idiomas';
            $conteudo = 'Já pensou em aprender um novo idioma? Então aproveite essa super oportunidade: escolha um dos cursos* de línguas do Lexis, o Centro de Idiomas da PUCRS, para cursar gratuitamente durante o semestre vigente.';
            $destaque = 'Benefício disponível apenas durante o semestre vigente.';
            $botao = 'Saiba as opções no nosso site da Educação continuada';
            $link = 'educon.pucrs.br/humanidades/lexis';
            break;
        case 'benef-103':
            $titulo = 'Parque esportivo';
            $conteudo = 'Um ambiente incrível, com equipamentos de última geração que adaptam-se conforme o seu treino personalizado pelos nossos profissionais. Com esse benefício, você fazer uma experimentação de dez dias gratuitos no nosso ecossistema fitness equipado pela Technogym.';
            $destaque = 'Benefício disponível apenas durante o semestre vigente.';
            $botao = 'Confira os espaços do Parque Esportivo';
            $link = 'pucrs.br/parqueesportivo/locacao-esportiva/espacos-disponiveis/';
            break;        
    }

    $('.modal-body > h3').html($titulo);
    $('.modal-body > .conteudo').html($conteudo);
    $('.modal-body > .destaque').html($destaque);
    $('.modal-body > a').html($botao+' <i class="fa fa-external-link" aria-hidden="true"></i>');
    $(".modal-body > a").attr("href", 'http://'+$link);
    $('#beneficiosModal').modal('show');
});
