/* slider  */

$('.owl-carousel').owlCarousel({
    autoPlay: 5000, //Set AutoPlay to 5 seconds 
	items: 4,
	itemsDesktop: [1199,3],
	itemsDesktopSmall: [979,3],
	//navigation: true,   
});

/* troca de página */

$('.novaaba').on('click', function (e) {
    link = $(this).attr('href');   
    window.open(link,"_blank");
    return;
});
  
/* cards - benefícios */

$('#card-b1').on('click', function (e) {
    $('.item-b1').show();
    $('.item-b2').hide();
    $('.item-b3').hide();
    $('.item-b4').hide();
});

$('#card-b2').on('click', function (e) {
    $('.item-b2').show();
    $('.item-b1').hide();
    $('.item-b3').hide();
    $('.item-b4').hide();
});

$('#card-b3').on('click', function (e) { 
    $('.item-b3').show();
    $('.item-b1').hide();
    $('.item-b2').hide();
    $('.item-b4').hide();
});

$('#card-b4').on('click', function (e) { 
    $('.item-b4').show();
    $('.item-b1').hide();
    $('.item-b2').hide();
    $('.item-b3').hide();
});

$('#card-b5').on('click', function (e) {          
    $('.item-b1').show();
    $('.item-b2').show();
    $('.item-b3').show(); 
    $('.item-b4').show();
});

/* modal benefícios*/

$('.pill').on('click', function (e)
{  
    switch($(this).attr('id')) 
    {
        case 'pill-b1':
            $titulo = 'Pacote Office 365';
            $conteudo = 'Disponível gratuitamente, incluindo diversas ferramentas que facilitam seus estudos e sua comunicação com colegas e professores. O pacote inclui Word, Excel, PowerPoint, Teams, OneNote e Outlook, entre outros. Além disso, contam individualmente com o OneDrive com 5 TB (terabytes) de armazenamento. Os programas podem ser usados de forma online ou instalados em até cinco computadores.';
            $destaque = 'Benefício disponível durante todo o seu período de graduação.';
            $botao = 'Saiba mais sobre o Office 365';
            $link = 'www.pucrs.br/servicos/office-365';
            break;
        case 'pill-b2':
            $titulo = 'Monitorias individuais e oficinas de aprendizagem';
            $conteudo = 'Para revisar conceitos e reforçar conteúdos através de atividades complementares à sala de aula - principalmente em matérias como: Matemática, Cálculo, Estatística, Física, Química, Letras e Desenho.';
            $destaque = 'Benefício disponível durante todo o seu período de graduação.';
            $botao = 'Conte com os serviços do Núcleo de apoio a aprendizagem';
            $link = 'www.pucrs.br/apoiodiscente/nucleo-de-apoio-a-aprendizagem/';            
            break;
        case 'pill-b3':
            $titulo = 'Suporte para pesquisas científicas e trabalhos acadêmicos';
            $conteudo = 'Aproveite os serviços da nossa Biblioteca para iniciar seu referencial teórico, encontrar materiais sobre seu tema de pesquisa, qualificar a busca em banco de dados e executar seu trabalho com um auxílio especializado. Você ainda pode acessar gratuitamente coleções online com milhares de e-books, revistas científicas e bases de dados, além de aproveitar as orientações sobre uso de normas técnicas com nossos especialistas, entendendo mais sobre as estruturas da ABNT, APA e Vancouver.';
            $destaque = 'Benefício disponível durante todo o seu período de graduação.';
            $botao = 'Conheça e explore os serviços da Biblioteca Ir. José Otão';
            $link = 'www.biblioteca.pucrs.br/acervos/colecoes-on-line';           
            break;  
        case 'pill-b4':
            $titulo = '12% de desconto em cursos de Extensão, Idiomas e Especialização e MBA';
            $conteudo = 'Para você complementar sua graduação, buscar novos conhecimentos e continuar estudando dentro das áreas que você mais curte.';
            $destaque = 'Desconto exclusivo.';
            $botao = 'Conheça as oportunidades de Educação Continuada';
            $link = 'educon.pucrs.br';           
            break;            
        case 'pill-b5':
            $titulo = 'O Lanche universitário é um combo com preços especiais pensado para estudantes PUCRS';
            $conteudo = 'Confira onde encontrar:<br/>• Espaço 32<br/>• Garten Bistro<br/>• Intervalo 50<br/>• Casa 5<br/>• Vila Olímpica<br/>• Delitzzi';
            $destaque = '';
            $botao = 'Confira os Bares e Restaurantes participantes';
            $link = 'www.pucrs.br/coronavirus/servicos-do-campus';
            break;                
        case 'pill-b6':
            $titulo = '30% de desconto em livros publicados pela EdiPUCRS';
            $conteudo = 'Você ainda aproveita 10% de desconto em livros de parceiros vendidos pela Editora.';
            $destaque = 'Desconto exclusivo.';
            $botao = 'Conheça a EdiPUCRS';
            $link = 'editora.pucrs.br';           
            break;                
        case 'pill-b7':
            $titulo = '12% de desconto na Papelaria e Livraria Espaço Cultural';
            $conteudo = 'Para você utilizar em materiais de escritório, materiais escolares, livros e outros artigos. Válido apenas para pagamentos à vista.';
            $destaque = 'Desconto exclusivo.';
            $botao = 'Saiba onde encontrar';
            $link = 'www.pucrs.br/campus/#servicos';    
            break;                
        case 'pill-b8':
            $titulo = 'Até 10% de desconto no estacionamento da Universidade';
            $conteudo = 'Aproveite o preço fixo diário com desconto, incluindo opções cobertas e descobertas e segurança 24 horas por dia.';
            $destaque = 'Benefício disponível durante todo o seu período de graduação. Desconto exclusivo.';
            $botao = 'Saiba mais sobre o estacionamento';
            $link = 'www.pucrs.br/campus/#estacionamento';
            break;                   
        case 'pill-b9':
            $titulo = 'Orientação Psicossocial, escuta e acompanhamento gratuitos';
            $conteudo = 'Com profissionais especializados, preparados para dar atenção às dificuldades decorrentes do dia a dia que impactam a vivência universitária.';
            $destaque = 'Benefício disponível durante todo o seu período de graduação.';
            $botao = 'Conte com os serviços do Centro de Apoio Discente';
            $link = 'www.pucrs.br/apoiodiscente/nucleo-de-apoio-psicossocial/';
            break;                   
        case 'pill-b10':
            $titulo = 'Até 15% de desconto em exames selecionados';
            $conteudo = 'No Hospital São Lucas da PUCRS, localizado dentro do Campus da Universidade. <br/><i>*Informações adicionais pelo agendamento de consultas no Hospital São Lucas da PUCRS.</i>';
            $destaque = 'Desconto exclusivo.';
            $botao = 'Conheça a lista completa de exames com desconto';
            $link = 'www.hsl.pucrs.br';
            break;                   
        case 'pill-b11':
            $titulo = 'Valores especiais nos serviços do Parque Esportivo para estudantes PUCRS';
            $conteudo = 'Aproveite a academia, modalidades esportivas e nossos espaços disponíveis para locação em um dos maiores complexos de esporte, saúde e bem-estar do Brasil.';
            $destaque = 'Benefício disponível durante todo o seu período de graduação. Desconto exclusivo.'
            $botao = 'Confira os espaços do Parque Esportivo';
            $link = 'www.pucrs.br/parqueesportivo/locacao-esportiva/espacos-disponiveis';           
            break;                    
        case 'pill-b12':
            $titulo = 'Assessoria gratuita de empreendedorismo e inovação';
            $conteudo = 'Para tirar ideias do papel e desenvolvê-las do início ao fim, seja na busca por um propósito ou no planejamento, construção ou validação de um projeto.';
            $destaque = 'Benefício disponível durante todo o seu período de graduação.';
            $botao = 'Conheça os projetos e iniciativas do Idear PUCRS';
            $link = 'idear.pucrs.br/o-que-fazemos/assessorias-idear';          
            break;                    
        case 'pill-b13':
            $titulo = 'Consultoria de carreira e oficinas de inserção no mercado de trabalho';
            $conteudo = 'Atividades gratuitas para auxiliar no desenvolvimento de sua trajetória profissional. ';
            $destaque = 'Benefício disponível durante todo o seu período de graduação.';
            $botao = 'Confira os serviços do PUCRS Carreiras';
            $link = 'carreiras.pucrs.br';           
            break;                    
        case 'pill-b14':
            $titulo = 'Acesso gratuito ao Coworking do Tecnopuc';
            $conteudo = 'Aproveite sem custos esse espaço colaborativo para desenvolver suas ideias com uma infraestrutura completa e inspiradora.';
            $destaque = 'Benefício disponível durante todo o seu período de graduação.';
            $botao = 'Saiba mais sobre o espaço';
            $link = 'tecnopuc.pucrs.br';           
            break;     
    }

    $('.modal-body > h5').html($titulo);
    $('.modal-body > .conteudo').html($conteudo);
    $('.modal-body > .destaque').html($destaque);
    $('.modal-body > a').html($botao+' <i class="fa fa-external-link" aria-hidden="true"></i>');
    $(".modal-body > a").attr("href", 'http://'+$link);
    $('#benefModal').modal('show');
});

/* cards - diferenciais */

$('.card-difer').on('click', function (e)
{  
    switch($(this).attr('id')) 
    {
        case 'card-d1':
            $link = '';
            break;
        case 'card-d2':
            $link = 'www.pucrs.br/gpg';
            break;
        case 'card-d3':
            $link = 'www.pucrs.br/track';
            break;
        case 'card-d4':
            $link = 'www.pucrs.br/carreiras';
            break;
        case 'card-d5':
            $link = 'www.pucrs.br/pesquisa/iniciacao-cientifica';
            break;
        case 'card-d6':
            $link = 'www.pucrs.br/pma';
            break;
        case 'card-d7':
            $link = 'www.pucrs.br/pastoral';
            break;
    }

    
    window.open('http://'+$link, '_blank');
});