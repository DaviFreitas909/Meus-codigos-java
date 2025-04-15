let serviços = ['consultoria financeira', 'empresarial', 'marketing']
let SEscolhido = serviços[1]
switch (SEscolhido) {
    case serviços[0]:
        console.log(`
        Receitas	Fonte de recursos	10.000,00
        Custos Fixos	Aluguel, salários	3.000,00
        Custos Variáveis	Materiais, serviços	4.000,00
        Custos Extras	Imprevistos (10%)	1.000,00
        Total de Despesas		8.000,00
        Saldo Final	Disponível	2.000,00`);
        break;

        case serviços[1]:
        console.log(`Planejamento é Essencial
            Defina metas claras e alcançáveis: Antes de começar qualquer tarefa ou projeto, é fundamental ter um objetivo claro. Isso ajuda a alinhar esforços e manter o foco.
            
            Planeje de forma realista: Ao planejar, leve em consideração os recursos disponíveis, prazos e possíveis obstáculos. Isso vai ajudar a evitar surpresas no meio do caminho.
            
            2. Priorização e Delegação
            Use a Matriz de Eisenhower: Priorize as tarefas em Urgente e Importante. Separe o que realmente precisa ser feito agora, o que pode ser feito depois e o que pode ser delegado.
            
            Delegue de maneira eficaz: Reconheça as habilidades e os pontos fortes da sua equipe. Delegue tarefas para as pessoas certas, permitindo que você foque nas áreas de maior impacto.
            
            3. Comunicação Clara
            Seja transparente: A comunicação aberta e honesta com sua equipe e stakeholders é crucial para evitar mal-entendidos e para garantir que todos estejam alinhados.
            
            Ouça mais: A gestão eficaz também envolve ouvir as ideias e preocupações de sua equipe. Isso cria um ambiente de colaboração e confiança.
            
            4. Gestão de Tempo
            Use ferramentas de gestão de tempo: Ferramentas como o Trello, Asana ou Microsoft To Do ajudam a organizar tarefas e prazos. Defina tempos específicos para tarefas e se concentre em cumprir esses blocos de tempo.
            
            Método Pomodoro: Trabalhar em intervalos de 25 minutos (com pequenas pausas entre eles) ajuda a manter a concentração e reduzir o estresse`);
        break;

        case serviços[2]:
        console.log(`Redes Sociais: As redes sociais são uma excelente plataforma para atingir uma grande audiência de forma segmentada.

        Criação de Conteúdo: Publique conteúdos relevantes e interativos (posts, vídeos, stories, enquetes). Utilize uma combinação de fotos, vídeos e textos para manter o engajamento alto.
        
        Anúncios Patrocinados: Invista em anúncios pagos no Facebook, Instagram, LinkedIn ou outras plataformas, segmentando seu público com base em localização, interesses e comportamentos.
        
        Influenciadores Digitais: Parcerias com influenciadores que compartilham o mesmo público-alvo podem ajudar a divulgar produtos/serviços de forma autêntica.
        
        Hashtags e SEO: Use hashtags relevantes para aumentar o alcance de suas postagens e otimize seu conteúdo para buscadores (SEO), para aparecer nas pesquisas de palavras-chave associadas ao seu produto ou serviço.
        
        Email Marketing:
        
        Campanhas de E-mail: Envie newsletters ou promoções para uma lista segmentada de contatos. Personalize os e-mails com base nos interesses do seu público e utilize um tom direto e amigável.
        
        Automação: Use ferramentas de automação para criar fluxos de nutrição de leads (por exemplo, enviar um e-mail de boas-vindas quando alguém se inscrever em sua lista de e-mails).`);
        break;
    default: 
    console.log("Mil desculpas, mas esse serviço esta insdisponivel no momento");
        break;
}