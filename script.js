// Variáveis globais
let perguntas = []; // Armazena as 15 perguntas selecionadas aleatoriamente
let perguntaAtual = 0;
let pontuacao = 0;
let nomeUsuario = '';
let turmaUsuario = '';
let temaSelecionado = '';
let tipoPergunta = 'multipla'; // Valor padrão: Múltipla Escolha
let pulosRestantes = 3;


// Banco de Perguntas
const bancoPerguntas = {
  geografia: [
    { pergunta: "Qual é o maior oceano do mundo?", correta: "Pacífico", opcoes: ["Atlântico", "Índico", "Pacífico", "Ártico"] },
    { pergunta: "Qual é o maior deserto do mundo?", correta: "Deserto do Saara", opcoes: ["Deserto de Atacama", "Deserto do Saara", "Deserto da Arábia", "Deserto de Gobi"] },
    { pergunta: "Qual país europeu tem a maior quantidade de lagos?", correta: "Finlândia", opcoes: ["Finlândia", "Suécia", "Noruega", "Rússia"] },
    { pergunta: "Qual é o nome da corrente oceânica responsável por trazer calor para o noroeste da Europa?", correta: "Corrente do Golfo", opcoes: ["Corrente de Humboldt", "Corrente do Golfo", "Corrente das Canárias", "Corrente Equatorial"] },
    { pergunta: "Qual é o país com mais fusos horários no mundo?", correta: "França", opcoes: ["Rússia", "França", "Estados Unidos", "China"] },
    { pergunta: "Qual é o maior estado do Brasil em extensão territorial?", correta: "Amazonas", opcoes: ["São Paulo", "Minas Gerais", "Amazonas", "Bahia"] },
    { pergunta: "Qual é o nome do maior rio do mundo?", correta: "Amazonas", opcoes: ["Nilo", "Amazonas", "Yangtze", "Mississippi"] },
    { pergunta: "Qual é o nome do maior continente do mundo?", correta: "Ásia", opcoes: ["África", "América", "Ásia", "Europa"] },
    { pergunta: "Qual é o menor país do mundo?", correta: "Vaticano", opcoes: ["Mônaco", "Vaticano", "Malta", "San Marino"] },
    { pergunta: "Qual é o nome do maior arquipélago do mundo?", correta: "Indonésia", opcoes: ["Filipinas", "Maldivas", "Indonésia", "Japão"] },
    { pergunta: "Qual é o nome do maior bioma brasileiro?", correta: "Amazônia", opcoes: ["Cerrado", "Amazônia", "Mata Atlântica", "Caatinga"] },
    { pergunta: "Qual é o nome do maior lago da África?", correta: "Lago Vitória", opcoes: ["Lago Tanganica", "Lago Vitória", "Lago Niassa", "Lago Chade"] },
    { pergunta: "Qual é o nome do maior rio da África?", correta: "Rio Nilo", opcoes: ["Rio Congo", "Rio Níger", "Rio Nilo", "Rio Zambeze"] },
    { pergunta: "Qual é o nome do maior rio da América do Sul?", correta: "Amazonas", opcoes: ["Amazonas", "Nilo", "Mississippi", "Yangtze"] },
    { pergunta: "Qual é o nome do maior lago de água doce do mundo?", correta: "Lago Superior", opcoes: ["Lago Vitória", "Lago Baikal", "Lago Superior", "Lago de Genebra"] },
    { pergunta: "Qual é o nome do maior sistema de recifes de coral do mundo?", correta: "Grande Barreira de Coral", opcoes: ["Recife de Belize", "Grande Barreira de Coral", "Recife de Apo", "Recife de Ningaloo"] },
    { pergunta: "Qual é o nome do maior vulcão ativo do mundo?", correta: "Mauna Loa", opcoes: ["Etna", "Krakatoa", "Mauna Loa", "Vesúvio"] },
    { pergunta: "Qual é o nome do maior deserto gelado do mundo?", correta: "Antártida", opcoes: ["Ártico", "Antártida", "Groenlândia", "Sibéria"] },
    { pergunta: "Qual é o nome do maior deserto da Ásia?", correta: "Deserto de Gobi", opcoes: ["Deserto de Gobi", "Deserto da Arábia", "Deserto do Saara", "Deserto de Atacama"] },
    { pergunta: "Qual é o nome do maior vulcão da Europa?", correta: "Monte Etna", opcoes: ["Monte Vesúvio", "Monte Etna", "Monte Kilimanjaro", "Monte Fuji"] },
    { pergunta: "Qual é o nome do maior animal marinho?", correta: "Baleia Azul", opcoes: ["Tubarão Branco", "Baleia Azul", "Orca", "Golfinho"] },
    { pergunta: "Qual é a capital da Austrália?", correta: "Camberra", opcoes: ["Sydney", "Melbourne", "Brisbane", "Camberra"] },
    { pergunta: "Qual é o país com mais fronteiras terrestres no mundo?", correta: "China", opcoes: ["Rússia", "Brasil", "Alemanha", "China"] },
    { pergunta: "Qual é o ponto mais alto do Brasil?", correta: "Pico da Neblina", opcoes: ["Pico da Bandeira", "Monte Roraima", "Pico das Agulhas Negras", "Pico da Neblina"] },
    { pergunta: "Qual é o país mais populoso do mundo?", correta: "Índia", opcoes: ["China", "Índia", "Estados Unidos", "Indonésia"] },
    { pergunta: "Qual é o menor continente do mundo em área?", correta: "Oceania", opcoes: ["Europa", "Antártida", "Oceania", "América do Sul"] },
    { pergunta: "Em qual continente fica o Deserto do Kalahari?", correta: "África", opcoes: ["Ásia", "África", "América do Sul", "Oceania"] },
    { pergunta: "Qual é o nome da cadeia de montanhas que atravessa a América do Sul?", correta: "Cordilheira dos Andes", opcoes: ["Cordilheira do Himalaia", "Montanhas Rochosas", "Cordilheira dos Andes", "Alpes"] },
    { pergunta: "Qual é o país com o maior número de ilhas?", correta: "Suécia", opcoes: ["Indonésia", "Filipinas", "Canadá", "Suécia"] },
    { pergunta: "Qual oceano banha a costa leste do Brasil?", correta: "Atlântico", opcoes: ["Atlântico", "Pacífico", "Índico", "Ártico"] },
    { pergunta: "Qual é o país mais ocidental da Europa?", correta: "Portugal", opcoes: ["Irlanda", "França", "Espanha", "Portugal"] },
    { pergunta: "Qual é o ponto mais alto do mundo?", correta: "Monte Everest", opcoes: ["Monte Everest", "Monte Fuji", "K2", "Aconcágua"] },
    { pergunta: "Qual país é famoso por ter mais de 180 mil lagos?", correta: "Canadá", opcoes: ["Suécia", "Rússia", "Canadá", "Noruega"] },
    { pergunta: "Qual é o nome da linha imaginária que divide o planeta em hemisférios norte e sul?", correta: "Linha do Equador", opcoes: ["Trópico de Câncer", "Meridiano de Greenwich", "Linha do Equador", "Trópico de Capricórnio"] },
    { pergunta: "Qual é a capital do Canadá?", correta: "Ottawa", opcoes: ["Toronto", "Vancouver", "Ottawa", "Montreal"] },
    { pergunta: "Qual é o nome do relevo submarino mais profundo do planeta?", correta: "Fossa das Marianas", opcoes: ["Fossa de Java", "Fossa das Marianas", "Fossa do Atlântico", "Fossa das Aleutas"] },
    { pergunta: "Qual país possui o maior litoral do mundo?", correta: "Canadá", opcoes: ["Brasil", "Austrália", "Indonésia", "Canadá"] },
    { pergunta: "Qual é a capital da Colômbia?", correta: "Bogotá", opcoes: ["Medellín", "Cali", "Bogotá", "Cartagena"] },
    { pergunta: "Qual é a capital do Cazaquistão?", correta: "Astana", opcoes: ["Almaty", "Astana", "Tashkent", "Bishkek"] },
    { pergunta: "Em qual país está localizado o deserto de Atacama?", correta: "Chile", opcoes: ["Peru", "Argentina", "Chile", "Bolívia"] },
    { pergunta: "Qual é o ponto mais baixo da Terra em terra firme?", correta: "Depressão do Mar Morto", opcoes: ["Vale da Morte", "Deserto de Lut", "Depressão do Mar Morto", "Vale do Danúbio"] },
    { pergunta: "Qual é o nome da corrente oceânica que aquece o noroeste da Europa?", correta: "Corrente do Golfo", opcoes: ["Corrente de Humboldt", "Corrente do Atlântico Sul", "Corrente do Golfo", "Corrente das Canárias"] },
    { pergunta: "Qual país é atravessado pela Linha do Equador e pelo Meridiano de Greenwich?", correta: "Gabão", opcoes: ["Gana", "Nigéria", "Gabão", "Camarões"] },
    { pergunta: "Qual país não possui litoral e faz fronteira com oito países europeus?", correta: "Áustria", opcoes: ["Suíça", "Áustria", "Hungria", "República Tcheca"] },
    { pergunta: "Qual é a cidade mais populosa da África?", correta: "Lagos", opcoes: ["Nairóbi", "Joanesburgo", "Lagos", "Cairo"] },
    { pergunta: "Qual é o nome da maior ilha do Mar Mediterrâneo?", correta: "Sicília", opcoes: ["Córsega", "Sardenha", "Sicília", "Creta"] },
    { pergunta: "Qual é o nome do canal que liga o Mar Mediterrâneo ao Mar Vermelho?", correta: "Canal de Suez", opcoes: ["Canal do Panamá", "Canal de Suez", "Canal da Mancha", "Canal de Corinto"] },
    { pergunta: "Qual é o nome da cidade mais ao sul do mundo?", correta: "Puerto Williams", opcoes: ["Ushuaia", "Punta Arenas", "Puerto Williams", "Port Stanley"] },
    { pergunta: "Qual é a capital da Nova Zelândia?", correta: "Wellington", opcoes: ["Auckland", "Wellington", "Christchurch", "Dunedin"] },
    { pergunta: "Qual cordilheira separa a Europa da Ásia?", correta: "Montes Urais", opcoes: ["Alpes", "Montes Urais", "Cordilheira do Cáucaso", "Montanhas de Zagros"] },
    { pergunta: "Qual é o maior país da África em área?", correta: "Argélia", opcoes: ["Sudão", "Nigéria", "Argélia", "Egito"] },
    { pergunta: "Qual é a maior ilha do mundo?", correta: "Groenlândia", opcoes: ["Groenlândia", "Nova Guiné", "Bornéu", "Madagáscar"] },
    { pergunta: "Em qual continente está localizado o Mar Cáspio?", correta: "Ásia", opcoes: ["Europa", "Ásia", "África", "Oceania"] },
    { pergunta: "Qual é o país mais montanhoso do mundo em média de altitude?", correta: "Butão", opcoes: ["Nepal", "Butão", "China", "Tibete"] },
    { pergunta: "Qual é o nome do fenômeno climático que aquece as águas do Pacífico equatorial?", correta: "El Niño", opcoes: ["La Niña", "El Niño", "Oscilação Antártica", "Monções"] },
    { pergunta: "Qual país sul-americano não possui fronteira com o Brasil?", correta: "Equador", opcoes: ["Chile", "Uruguai", "Equador", "Colômbia"] },
    { pergunta: "Qual é o estado brasileiro com maior número de municípios?", correta: "Minas Gerais", opcoes: ["Bahia", "São Paulo", "Minas Gerais", "Paraná"] },
    { pergunta: "Qual é o nome da formação rochosa localizada no Arizona, famosa por suas paisagens?", correta: "Grand Canyon", opcoes: ["Monument Valley", "Grand Canyon", "Bryce Canyon", "Zion Canyon"] },
    { pergunta: "Qual é a capital do Peru?", correta: "Lima", opcoes: ["Lima", "Quito", "La Paz", "Bogotá"] },
    { pergunta: "Qual é o maior arquipélago do Brasil?", correta: "Marajó", opcoes: ["Fernando de Noronha", "Marajó", "Abrolhos", "Ilhabela"] },
    { pergunta: "Qual é o principal bioma do Centro-Oeste brasileiro?", correta: "Cerrado", opcoes: ["Amazônia", "Cerrado", "Caatinga", "Mata Atlântica"] },
    { pergunta: "Qual é o nome do rio que corta a cidade de Londres?", correta: "Tâmisa", opcoes: ["Tâmisa", "Sena", "Danúbio", "Tibre"] },
    { pergunta: "Qual é o país mais populoso da África?", correta: "Nigéria", opcoes: ["Egito", "Nigéria", "África do Sul", "Etiópia"] },
    { pergunta: "Qual é o maior país da Europa em extensão territorial?", correta: "Rússia", opcoes: ["Alemanha", "França", "Rússia", "Espanha"] },
    { pergunta: "Qual é o nome do deserto que cobre grande parte do norte da África?", correta: "Saara", opcoes: ["Saara", "Kalahari", "Atacama", "Gobi"] },
    { pergunta: "Qual é o nome da planície que cobre grande parte do norte da Índia e Bangladesh?", correta: "Planície Indo-Gangética", opcoes: ["Planície Indo-Gangética", "Planície do Mekong", "Planície do Yangtzé", "Planície do Danúbio"] },
    { pergunta: "Qual é o nome do lago mais antigo do mundo?", correta: "Lago Baikal", opcoes: ["Lago Baikal", "Lago Vitória", "Lago Tanganica", "Lago Titicaca"] },
    { pergunta: "Qual é o nome do fenômeno que ocorre quando ventos úmidos sobem uma encosta e provocam chuvas intensas?", correta: "Efeito orográfico", opcoes: ["Efeito orográfico", "Efeito de Coriolis", "Efeito estufa", "Sombra de chuva"] },
    { pergunta: "Qual é o nome do ponto mais alto da Península Ibérica?", correta: "Pico Mulhacén", opcoes: ["Pico Mulhacén", "Pico Aneto", "Pico Almanzor", "Pico Veleta"] },
    { pergunta: "Qual é o nome do estreito que separa a Ásia do Alasca?", correta: "Estreito de Bering", opcoes: ["Estreito de Bering", "Estreito de Gibraltar", "Estreito de Magalhães", "Estreito de Malaca"] }
],
  historia: [
    { pergunta: "Em que ano a Primeira Guerra Mundial começou?", correta: "1914", opcoes: ["1900", "1914", "1939", "1918"] },
    { pergunta: "Quem foi o primeiro presidente dos Estados Unidos?", correta: "George Washington", opcoes: ["Abraham Lincoln", "Thomas Jefferson", "George Washington", "John Adams"] },
    { pergunta: "Em que ano o Brasil foi descoberto?", correta: "1500", opcoes: ["1492", "1500", "1515", "1600"] },
    { pergunta: "Quem foi o líder da Revolução Francesa?", correta: "Napoleão Bonaparte", opcoes: ["Louis XVI", "Maximilien Robespierre", "Napoleão Bonaparte", "Jean-Paul Marat"] },
    { pergunta: "Quem foi o primeiro homem a pisar na lua?", correta: "Neil Armstrong", opcoes: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Alan Shepard"] },
    { pergunta: "Quem foi o criador da teoria da evolução das espécies?", correta: "Charles Darwin", opcoes: ["Albert Einstein", "Charles Darwin", "Galileu Galilei", "Louis Pasteur"] },
    { pergunta: "Quem inventou o avião?", correta: "Irmãos Wright", opcoes: ["Irmãos Wright", "Alberto Santos Dumont", "Charles Lindbergh", "Gustave Whitehead"] },
    { pergunta: "Quem foi o primeiro homem a viajar para o espaço?", correta: "Yuri Gagarin", opcoes: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Alan Shepard"] },
    { pergunta: "Quem foi o primeiro presidente do Brasil?", correta: "Marechal Deodoro da Fonseca", opcoes: ["Getúlio Vargas", "Juscelino Kubitschek", "Marechal Deodoro da Fonseca", "Fernando Henrique Cardoso"] },
    { pergunta: "Quem foi o autor de 'Os Lusíadas'?", correta: "Luís de Camões", opcoes: ["Fernando Pessoa", "Luís de Camões", "Eça de Queirós", "José Saramago"] },
    { pergunta: "Quem descobriu o Brasil?", correta: "Pedro Álvares Cabral", opcoes: ["Cristóvão Colombo", "Pedro Álvares Cabral", "Vasco da Gama", "Américo Vespúcio"] },
    { pergunta: "Quem foi o líder da Revolução Russa?", correta: "Vladimir Lenin", opcoes: ["Joseph Stalin", "Vladimir Lenin", "Leon Trotsky", "Mikhail Gorbachev"] },
    { pergunta: "Quem foi o famoso líder sul-africano que lutou contra o apartheid?", correta: "Nelson Mandela", opcoes: ["Nelson Mandela", "Desmond Tutu", "F.W. de Klerk", "Steve Biko"] },
    { pergunta: "Quem foi o famoso líder cubano da Revolução Cubana?", correta: "Fidel Castro", opcoes: ["Che Guevara", "Fidel Castro", "Raúl Castro", "Hugo Chávez"] },
    { pergunta: "Quem foi o famoso líder da Índia que pregou a não-violência?", correta: "Mahatma Gandhi", opcoes: ["Mahatma Gandhi", "Jawaharlal Nehru", "Indira Gandhi", "Nelson Mandela"] },
    { pergunta: "Qual império foi governado por Júlio César?", correta: "Império Romano", opcoes: ["Império Romano", "Império Bizantino", "Império Otomano", "Império Persa"] },
    { pergunta: "Quem foi o imperador francês que ficou famoso por suas conquistas militares?", correta: "Napoleão Bonaparte", opcoes: ["Luís XIV", "Carlos Magno", "Napoleão Bonaparte", "Robespierre"] },
    { pergunta: "Em que continente ocorreu o apartheid?", correta: "África", opcoes: ["África", "América", "Europa", "Ásia"] },
    { pergunta: "Qual cidade foi bombardeada em 1945 junto com Hiroshima?", correta: "Nagasaki", opcoes: ["Tóquio", "Osaka", "Nagasaki", "Kyoto"] },
    { pergunta: "Qual país iniciou a Revolução Industrial?", correta: "Inglaterra", opcoes: ["França", "Alemanha", "Inglaterra", "Estados Unidos"] },
    { pergunta: "Qual tratado marcou o fim da Primeira Guerra Mundial?", correta: "Tratado de Versalhes", opcoes: ["Tratado de Paris", "Tratado de Versalhes", "Tratado de Roma", "Tratado de Genebra"] },
    { pergunta: "Qual era o nome da aliança liderada pelos EUA durante a Guerra Fria?", correta: "OTAN", opcoes: ["OTAN", "Pacto de Varsóvia", "Liga das Nações", "ONU"] },
    { pergunta: "Qual país foi dividido em Oriental e Ocidental após a Segunda Guerra Mundial?", correta: "Alemanha", opcoes: ["Alemanha", "França", "Polônia", "Itália"] },
    { pergunta: "Qual civilização antiga é conhecida por sua filosofia e democracia?", correta: "Grega", opcoes: ["Egípcia", "Romana", "Grega", "Chinesa"] },
    { pergunta: "Quem foi o líder alemão durante a Segunda Guerra Mundial?", correta: "Adolf Hitler", opcoes: ["Adolf Hitler", "Benito Mussolini", "Joseph Stalin", "Winston Churchill"] },
    { pergunta: "Qual evento histórico é marcado pela queda da Bastilha?", correta: "Revolução Francesa", opcoes: ["Revolução Francesa", "Revolução Russa", "Unificação Italiana", "Independência dos EUA"] },
    { pergunta: "Quem foi o rei francês conhecido como 'Rei Sol'?", correta: "Luís XIV", opcoes: ["Luís XIV", "Luís XVI", "Carlos V", "Henrique VIII"] },
    { pergunta: "Qual civilização é conhecida por desenvolver a escrita cuneiforme?", correta: "Mesopotâmica", opcoes: ["Egípcia", "Mesopotâmica", "Chinesa", "Grega"] },
    { pergunta: "Quem foi o principal responsável pela unificação da Alemanha no século XIX?", correta: "Otto von Bismarck", opcoes: ["Adolf Hitler", "Otto von Bismarck", "Wilhelm II", "Kaiser Franz"] },
    { pergunta: "Em que ano aconteceu a queda do Muro de Berlim?", correta: "1989", opcoes: ["1980", "1985", "1989", "1991"] },
    { pergunta: "Qual civilização pré-colombiana construiu Machu Picchu?", correta: "Inca", opcoes: ["Asteca", "Maya", "Inca", "Olmeca"] },
    { pergunta: "Qual era o nome do plano econômico dos EUA para reconstruir a Europa após a Segunda Guerra?", correta: "Plano Marshall", opcoes: ["Plano Marshall", "Plano Truman", "Plano Kennedy", "Plano Roosevelt"] },
    { pergunta: "Qual revolução marcou o fim da monarquia absolutista na Rússia?", correta: "Revolução Russa de 1917", opcoes: ["Revolução Russa de 1905", "Revolução Francesa", "Revolução Russa de 1917", "Revolução Industrial"] },
    { pergunta: "Qual civilização construiu as cidades de Tenochtitlán e Teotihuacán?", correta: "Asteca", opcoes: ["Maya", "Inca", "Asteca", "Zapoteca"] },
    { pergunta: "Quem foi o famoso navegador português que chegou à Índia em 1498?", correta: "Vasco da Gama", opcoes: ["Pedro Álvares Cabral", "Cristóvão Colombo", "Fernão de Magalhães", "Vasco da Gama"] },
    { pergunta: "Qual foi o movimento que aboliu a escravidão no Brasil?", correta: "Abolicionismo", opcoes: ["Iluminismo", "Abolicionismo", "Liberalismo", "Federalismo"] },
    { pergunta: "Quem era o imperador do Brasil quando foi proclamada a independência?", correta: "Dom Pedro I", opcoes: ["Dom João VI", "Dom Pedro I", "Dom Pedro II", "Marquês de Pombal"] },
    { pergunta: "Qual evento histórico marcou o início da Idade Moderna?", correta: "A tomada de Constantinopla", opcoes: ["A descoberta da América", "A queda do Império Romano", "A tomada de Constantinopla", "A Revolução Francesa"] },
    { pergunta: "Quem foi o famoso artista renascentista que pintou a Capela Sistina?", correta: "Michelangelo", opcoes: ["Leonardo da Vinci", "Michelangelo", "Rafael", "Donatello"] },
    { pergunta: "Que país foi colonizado principalmente por espanhóis na América do Sul?", correta: "Peru", opcoes: ["Brasil", "Peru", "Canadá", "Jamaica"] },
    { pergunta: "Qual foi a primeira capital do Brasil?", correta: "Salvador", opcoes: ["Rio de Janeiro", "Brasília", "Salvador", "Recife"] },
    { pergunta: "Quem foi o presidente do Brasil durante a proclamação da República?", correta: "Não havia presidente ainda", opcoes: ["Floriano Peixoto", "Deodoro da Fonseca", "Dom Pedro II", "Não havia presidente ainda"] },
    { pergunta: "Qual foi o império que teve Constantinopla como capital?", correta: "Império Bizantino", opcoes: ["Império Romano", "Império Bizantino", "Império Otomano", "Império Persa"] },
    { pergunta: "Que civilização antiga é famosa por seu sistema de aquedutos e estradas?", correta: "Romana", opcoes: ["Grega", "Egípcia", "Romana", "Chinesa"] },
    { pergunta: "Quem liderou a unificação da Itália no século XIX?", correta: "Giuseppe Garibaldi", opcoes: ["Giuseppe Mazzini", "Giuseppe Garibaldi", "Camillo Cavour", "Vittorio Emanuele II"] },
    { pergunta: "Qual tratado dividiu as terras descobertas entre Portugal e Espanha?", correta: "Tratado de Tordesilhas", opcoes: ["Tratado de Versalhes", "Tratado de Tordesilhas", "Tratado de Madri", "Tratado de Utrecht"] },
    { pergunta: "Qual foi a principal causa da Guerra dos Cem Anos?", correta: "Disputa pelo trono francês", opcoes: ["Disputa pelo trono francês", "Expansão marítima", "Colonização da América", "Crise religiosa"] },
    { pergunta: "Qual foi o evento que deu início à Idade Contemporânea?", correta: "Revolução Francesa", opcoes: ["Revolução Francesa", "Revolução Industrial", "Independência dos EUA", "Queda do Império Romano"] },
    { pergunta: "Quem governava a União Soviética durante a Segunda Guerra Mundial?", correta: "Joseph Stalin", opcoes: ["Leon Trotsky", "Vladimir Lenin", "Joseph Stalin", "Nikita Khrushchev"] },
    { pergunta: "Qual era o nome do sistema político da Idade Média baseado em laços de vassalagem?", correta: "Feudalismo", opcoes: ["Feudalismo", "Mercantilismo", "Absolutismo", "Socialismo"] },
    { pergunta: "Qual foi o motivo da construção do Canal de Suez?", correta: "Ligar o Mar Mediterrâneo ao Mar Vermelho", opcoes: ["Facilitar o comércio com o Japão", "Ligar o Mar Mediterrâneo ao Mar Vermelho", "Exploração petrolífera", "Conectar a Europa ao Atlântico"] },
    { pergunta: "Qual era o nome da política de Hitler para exterminar os judeus?", correta: "Solução Final", opcoes: ["Solução Final", "Noite dos Cristais", "Lei de Nuremberg", "Plano Barbarossa"] },
    { pergunta: "Quem foi o presidente dos EUA durante a Grande Depressão e o New Deal?", correta: "Franklin D. Roosevelt", opcoes: ["Woodrow Wilson", "Theodore Roosevelt", "Franklin D. Roosevelt", "Harry Truman"] },
    { pergunta: "Qual império foi destruído pela conquista espanhola liderada por Hernán Cortés?", correta: "Império Asteca", opcoes: ["Império Asteca", "Império Inca", "Império Maia", "Império Olmeca"] },
    { pergunta: "Qual foi o objetivo principal da Santa Inquisição?", correta: "Combater heresias", opcoes: ["Colonizar a América", "Combater heresias", "Promover o Renascimento", "Eliminar protestantes"] },
    { pergunta: "Qual movimento buscava o fim da escravidão nos EUA?", correta: "Abolicionismo", opcoes: ["Federalismo", "Abolicionismo", "Iluminismo", "Segregacionismo"] },
    { pergunta: "Quem foi o último czar da Rússia?", correta: "Nicolau II", opcoes: ["Pedro, o Grande", "Alexandre II", "Nicolau II", "Ivan IV"] },
    { pergunta: "Que evento marcou o início da Guerra Fria?", correta: "Divisão da Alemanha após a Segunda Guerra", opcoes: ["Queda da União Soviética", "Criação da ONU", "Divisão da Alemanha após a Segunda Guerra", "Plano Marshall"] },
    { pergunta: "Qual foi o império que dominou grande parte do Oriente Médio antes do Império Otomano?", correta: "Império Bizantino", opcoes: ["Império Romano", "Império Bizantino", "Império Persa", "Império Macedônio"] },
    { pergunta: "Quem foi o líder revolucionário chinês que proclamou a República Popular da China?", correta: "Mao Zedong", opcoes: ["Sun Yat-sen", "Chiang Kai-shek", "Mao Zedong", "Deng Xiaoping"] },
    { pergunta: "Em que ano a Revolução Industrial começou na Inglaterra?", correta: "1760", opcoes: ["1700", "1760", "1800", "1850"] },
    { pergunta: "Qual cidade era capital do Império Carolíngio?", correta: "Aachen", opcoes: ["Paris", "Aachen", "Roma", "Berlim"] },
    { pergunta: "Quem foi o primeiro imperador romano cristão?", correta: "Constantino", opcoes: ["Júlio César", "Augusto", "Constantino", "Nero"] },
    { pergunta: "Qual civilização antiga é conhecida pelo código de leis de Hamurábi?", correta: "Babilônica", opcoes: ["Egípcia", "Assíria", "Babilônica", "Hitita"] },
    { pergunta: "Quem foi o primeiro imperador do Brasil?", correta: "Dom Pedro I", opcoes: ["Dom Pedro I", "Dom Pedro II", "Marechal Deodoro", "Getúlio Vargas"] },
    { pergunta: "Qual era o nome da capital do Brasil antes de Brasília?", correta: "Rio de Janeiro", opcoes: ["Salvador", "Brasília", "Rio de Janeiro", "São Paulo"] },
    { pergunta: "Quem assinou a Lei Áurea no Brasil?", correta: "Princesa Isabel", opcoes: ["Princesa Isabel", "Dom Pedro II", "Getúlio Vargas", "Juscelino Kubitschek"] },
    { pergunta: "Em que país nasceu Adolf Hitler?", correta: "Áustria", opcoes: ["Alemanha", "Áustria", "França", "Itália"] },
    { pergunta: "Qual era o nome do navio que trouxe Pedro Álvares Cabral ao Brasil?", correta: "Nau Capitânia", opcoes: ["Nau Capitânia", "Santa Maria", "Mayflower", "Endeavour"] },
    { pergunta: "Quem foi Tiradentes?", correta: "Líder da Inconfidência Mineira", opcoes: ["Líder da Inconfidência Mineira", "Imperador", "Presidente", "Explorador"] },
    { pergunta: "Qual continente foi descoberto por Cristóvão Colombo em 1492?", correta: "América", opcoes: ["América", "Ásia", "África", "Europa"] }
],
  ciencia: [
    { pergunta: "Qual é o nome do maior animal terrestre?", correta: "Elefante", opcoes: ["Elefante", "Girafa", "Rinoceronte", "Hipopótamo"] },
    { pergunta: "Quem foi o criador da teoria da evolução das espécies?", correta: "Charles Darwin", opcoes: ["Albert Einstein", "Charles Darwin", "Galileu Galilei", "Louis Pasteur"] },
    { pergunta: "Qual é o símbolo químico do ouro?", correta: "Au", opcoes: ["Ag", "Fe", "Au", "Cu"] },
    { pergunta: "Qual é o elemento químico mais abundante no universo?", correta: "Hidrogênio", opcoes: ["Oxigênio", "Carbono", "Hidrogênio", "Hélio"] },
    { pergunta: "Qual é o nome do maior mamífero do mundo?", correta: "Baleia Azul", opcoes: ["Elefante Africano", "Baleia Azul", "Orca", "Tubarão Baleia"] },
    { pergunta: "Qual é o nome do maior órgão do corpo humano?", correta: "Pele", opcoes: ["Fígado", "Pele", "Coração", "Pulmão"] },
    { pergunta: "Qual é o nome do maior osso do corpo humano?", correta: "Fêmur", opcoes: ["Fêmur", "Tíbia", "Úmero", "Crânio"] },
    { pergunta: "Qual é o nome do processo pelo qual as plantas produzem energia?", correta: "Fotossíntese", opcoes: ["Respiração", "Fotossíntese", "Fermentação", "Oxidação"] },
    { pergunta: "Qual é o nome do maior satélite natural da Terra?", correta: "Lua", opcoes: ["Marte", "Lua", "Vênus", "Júpiter"] },
    { pergunta: "Qual é o nome do maior planeta do sistema solar?", correta: "Júpiter", opcoes: ["Terra", "Marte", "Saturno", "Júpiter"] },
    { pergunta: "Qual é o nome do planeta conhecido como 'Planeta Vermelho'?", correta: "Marte", opcoes: ["Vênus", "Marte", "Júpiter", "Saturno"] },
    { pergunta: "Qual é o nome do processo de formação de novas espécies?", correta: "Especiação", opcoes: ["Evolução", "Especiação", "Seleção natural", "Mutação"] },
    { pergunta: "Qual é o nome do processo de formação de rochas a partir de sedimentos?", correta: "Sedimentação", opcoes: ["Cristalização", "Sedimentação", "Metamorfismo", "Erosão"] },
    { pergunta: "Qual é o nome do processo de transformação de lagarta em borboleta?", correta: "Metamorfose", opcoes: ["Fotossíntese", "Metamorfose", "Germinação", "Polinização"] },
    { pergunta: "Qual é a unidade básica da vida?", correta: "Célula", opcoes: ["Molécula", "Célula", "Átomo", "Organelo"] },
    { pergunta: "Qual é o planeta mais próximo do Sol?", correta: "Mercúrio", opcoes: ["Vênus", "Terra", "Marte", "Mercúrio"] },
    { pergunta: "O que mede um barômetro?", correta: "Pressão atmosférica", opcoes: ["Temperatura", "Pressão atmosférica", "Umidade", "Velocidade do vento"] },
    { pergunta: "O que é a mitocôndria conhecida como?", correta: "Usina de energia da célula", opcoes: ["Centro de comando", "Usina de energia da célula", "Armazém da célula", "Sistema de defesa"] },
    { pergunta: "Qual gás é essencial para a respiração celular?", correta: "Oxigênio", opcoes: ["Gás carbônico", "Hidrogênio", "Oxigênio", "Nitrogênio"] },
    { pergunta: "Qual é o estado físico da água a 100°C ao nível do mar?", correta: "Gasoso", opcoes: ["Sólido", "Líquido", "Gasoso", "Plasma"] },
    { pergunta: "Qual o nome da ciência que estuda os seres vivos?", correta: "Biologia", opcoes: ["Física", "Biologia", "Química", "Astronomia"] },
    { pergunta: "O que é DNA?", correta: "Material genético", opcoes: ["Tipo de proteína", "Enzima", "Material genético", "Hormônio"] },
    { pergunta: "Qual é o cientista famoso por suas leis do movimento?", correta: "Isaac Newton", opcoes: ["Albert Einstein", "Isaac Newton", "Galileu Galilei", "Stephen Hawking"] },
    { pergunta: "Qual é a camada mais externa da Terra?", correta: "Crosta", opcoes: ["Manto", "Crosta", "Núcleo externo", "Núcleo interno"] },
    { pergunta: "Qual planeta tem o maior número de luas?", correta: "Saturno", opcoes: ["Terra", "Marte", "Júpiter", "Saturno"] },
    { pergunta: "Qual é o nome da força que nos mantém presos à Terra?", correta: "Gravidade", opcoes: ["Magnetismo", "Gravidade", "Pressão", "Inércia"] },
    { pergunta: "Qual instrumento é usado para medir temperatura?", correta: "Termômetro", opcoes: ["Anemômetro", "Termômetro", "Barômetro", "Higrômetro"] },
    { pergunta: "Qual é o nome da camada da atmosfera onde ocorre a maioria dos fenômenos climáticos?", correta: "Troposfera", opcoes: ["Estratosfera", "Troposfera", "Mesosfera", "Termosfera"] },
    { pergunta: "Qual desses animais é um invertebrado?", correta: "Polvo", opcoes: ["Cavalo", "Papagaio", "Polvo", "Cachorro"] },
    { pergunta: "Qual o nome da camada protetora que envolve a Terra e filtra os raios UV?", correta: "Camada de ozônio", opcoes: ["Troposfera", "Camada de ozônio", "Atmosfera", "Estratosfera"] },
    { pergunta: "Qual é o pH da água pura?", correta: "7", opcoes: ["5", "6", "7", "8"] },
    { pergunta: "Qual é o nome da substância responsável pela cor da pele?", correta: "Melanina", opcoes: ["Clorofila", "Melanina", "Hemoglobina", "Colágeno"] },
    { pergunta: "Qual é a principal função dos glóbulos vermelhos?", correta: "Transportar oxigênio", opcoes: ["Defender o corpo", "Produzir hormônios", "Transportar oxigênio", "Formar coágulos"] },
    { pergunta: "Qual é o nome da ciência que estuda os corpos celestes?", correta: "Astronomia", opcoes: ["Biologia", "Astrologia", "Astronomia", "Geologia"] },
    { pergunta: "Qual é o metal líquido à temperatura ambiente?", correta: "Mercúrio", opcoes: ["Chumbo", "Ferro", "Mercúrio", "Cobre"] },
    { pergunta: "Qual planeta é conhecido por seus anéis?", correta: "Saturno", opcoes: ["Urano", "Júpiter", "Saturno", "Netuno"] },
    { pergunta: "Como é chamado o processo em que a água passa do estado líquido para o gasoso?", correta: "Evaporação", opcoes: ["Condensação", "Sublimação", "Evaporação", "Fusão"] },
    { pergunta: "O que é clorofila?", correta: "Pigmento verde das plantas", opcoes: ["Hormônio vegetal", "Pigmento verde das plantas", "Tipo de célula", "Gás fotossintético"] },
    { pergunta: "Quantos cromossomos tem um ser humano saudável?", correta: "46", opcoes: ["44", "46", "48", "23"] },
    { pergunta: "Qual gás é usado pelas plantas durante a fotossíntese?", correta: "Gás carbônico", opcoes: ["Oxigênio", "Gás carbônico", "Hidrogênio", "Nitrogênio"] },
    { pergunta: "Qual é a fonte primária de energia para a Terra?", correta: "Sol", opcoes: ["Petróleo", "Sol", "Vento", "Eletricidade"] },
    { pergunta: "O que é um ecossistema?", correta: "Conjunto de seres vivos e ambiente", opcoes: ["Grupo de animais", "Tipo de clima", "Conjunto de seres vivos e ambiente", "Área florestal"] },
    { pergunta: "Qual parte do olho humano é responsável pela percepção de luz?", correta: "Retina", opcoes: ["Córnea", "Retina", "Cristalino", "Íris"] },
    { pergunta: "Qual órgão é responsável por bombear o sangue?", correta: "Coração", opcoes: ["Pulmão", "Coração", "Fígado", "Estômago"] },
    { pergunta: "Qual parte da planta absorve água e sais minerais do solo?", correta: "Raiz", opcoes: ["Caule", "Raiz", "Folha", "Flor"] },
    { pergunta: "Qual é o nome do músculo responsável pela respiração?", correta: "Diafragma", opcoes: ["Tríceps", "Diafragma", "Peitoral", "Abdominal"] },
    { pergunta: "Como se chama o movimento da Terra em torno do Sol?", correta: "Translação", opcoes: ["Rotação", "Translação", "Revolução", "Orbitação"] },
    { pergunta: "O que acontece com a luz ao passar por um prisma?", correta: "Ela se divide em várias cores", opcoes: ["É absorvida", "Fica invisível", "Ela se divide em várias cores", "Se aquece"] },
    { pergunta: "Qual é o nome da proteína presente nos cabelos e unhas?", correta: "Queratina", opcoes: ["Melanina", "Colágeno", "Queratina", "Elastina"] },
    { pergunta: "O que é um vertebrado?", correta: "Animal com coluna vertebral", opcoes: ["Animal com asas", "Animal com coluna vertebral", "Animal aquático", "Animal com sangue frio"] },
    { pergunta: "Qual partícula subatômica tem carga negativa?", correta: "Elétron", opcoes: ["Próton", "Nêutron", "Elétron", "Fóton"] },
    { pergunta: "Qual cientista propôs a teoria do Big Bang?", correta: "Georges Lemaître", opcoes: ["Isaac Newton", "Stephen Hawking", "Galileu Galilei", "Georges Lemaître"] },
    { pergunta: "Qual estrutura celular é responsável pela síntese de proteínas?", correta: "Ribossomo", opcoes: ["Lisossomo", "Mitocôndria", "Ribossomo", "Cloroplasto"] },
    { pergunta: "Qual é a principal substância responsável pelo efeito estufa?", correta: "Dióxido de carbono", opcoes: ["Metano", "Ozônio", "Dióxido de carbono", "Nitrogênio"] },
    { pergunta: "Qual hormônio regula os níveis de açúcar no sangue?", correta: "Insulina", opcoes: ["Insulina", "Adrenalina", "Cortisol", "Testosterona"] },
    { pergunta: "Qual é o número atômico do oxigênio?", correta: "8", opcoes: ["6", "8", "10", "12"] },
    { pergunta: "Qual é o nome do processo em que um líquido se transforma diretamente em gás?", correta: "Evaporação", opcoes: ["Fusão", "Evaporação", "Sublimação", "Condensação"] },
    { pergunta: "Que nome se dá ao estudo dos fósseis?", correta: "Paleontologia", opcoes: ["Arqueologia", "Paleontologia", "Geologia", "Antropologia"] },
    { pergunta: "Qual é o nome do órgão responsável pela produção da insulina?", correta: "Pâncreas", opcoes: ["Fígado", "Pâncreas", "Rim", "Baço"] },
    { pergunta: "Qual é o nome da estrutura do DNA?", correta: "Dupla hélice", opcoes: ["Tripla fita", "Espiral única", "Dupla hélice", "Zig-zag"] },
    { pergunta: "Qual é o nome do planeta mais denso do sistema solar?", correta: "Terra", opcoes: ["Júpiter", "Saturno", "Terra", "Vênus"] },
    { pergunta: "Qual é a unidade de medida da frequência?", correta: "Hertz", opcoes: ["Watt", "Pascal", "Hertz", "Ohm"] },
    { pergunta: "Que nome se dá ao tipo de célula que possui núcleo definido?", correta: "Eucarionte", opcoes: ["Procarionte", "Eucarionte", "Autótrofa", "Unicelular"] },
    { pergunta: "Qual é o principal gás encontrado na atmosfera terrestre?", correta: "Nitrogênio", opcoes: ["Oxigênio", "Dióxido de carbono", "Nitrogênio", "Hidrogênio"] },
    { pergunta: "Qual o nome do processo de divisão celular que forma gametas?", correta: "Meiose", opcoes: ["Mitose", "Meiose", "Fissão", "Duplicação"] },
    { pergunta: "Qual é o nome da glândula responsável pelo crescimento do corpo?", correta: "Hipófise", opcoes: ["Tireoide", "Hipófise", "Pâncreas", "Adrenal"] },
    { pergunta: "Como se chama o fenômeno em que a luz muda de direção ao passar de um meio para outro?", correta: "Refração", opcoes: ["Reflexão", "Refração", "Dispersão", "Absorção"] },
    { pergunta: "Qual é o nome do ácido presente no estômago humano?", correta: "Ácido clorídrico", opcoes: ["Ácido sulfúrico", "Ácido clorídrico", "Ácido acético", "Ácido lático"] },
    { pergunta: "Qual é o nome da camada da Terra localizada abaixo da crosta?", correta: "Manto", opcoes: ["Núcleo", "Crosta", "Manto", "Litosfera"] },
    { pergunta: "Qual é o nome do processo de transformação de uma substância sólida diretamente em gás?", correta: "Sublimação", opcoes: ["Condensação", "Evaporação", "Sublimação", "Fusão"] },
    { pergunta: "Qual é o nome do fenômeno que ocorre quando a luz branca é separada em várias cores?", correta: "Dispersão", opcoes: ["Refração", "Reflexão", "Dispersão", "Absorção"] }, 
],
  esportes: [
    { pergunta: "Quem foi campeão da Copa do Mundo de 2006?", correta: "Itália", opcoes: ["França", "Itália", "Alemanha", "Brasil"] },
    { pergunta: "Quem é o jogador com mais gols na história da Copa do Mundo?", correta: "Klose", opcoes: ["Pelé", "Klose", "Cristiano Ronaldo", "Kaká"] },
    { pergunta: "Qual é o time de futebol com mais títulos da Champions League?", correta: "Real Madrid", opcoes: ["Barcelona", "Bayern de Munique", "Real Madrid", "Liverpool"] },
    { pergunta: "Qual é o time de futebol que tem a maior torcida do Brasil?", correta: "Flamengo", opcoes: ["São Paulo", "Corinthians", "Flamengo", "Vasco da Gama"] },
    { pergunta: "Quem perdeu um pênalti na final da Copa de 1994?", correta: "Roberto Baggio", opcoes: ["Romário", "Bebeto", "Roberto Baggio", "Zidane"] },
    { pergunta: "Qual é o único país que participou de todas as Copas do Mundo?", correta: "Brasil", opcoes: ["Alemanha", "Argentina", "Brasil", "Itália"] },
    { pergunta: "Qual clube brasileiro é conhecido como 'Timão'?", correta: "Corinthians", opcoes: ["Palmeiras", "São Paulo", "Corinthians", "Santos"] },
    { pergunta: "Em qual país foi realizada a Copa do Mundo de 2018?", correta: "Rússia", opcoes: ["Brasil", "Rússia", "Alemanha", "Catar"] },
    { pergunta: "Quantos jogadores atuam simultaneamente no futebol de salão (futsal)?", correta: "5", opcoes: ["5", "6", "7", "8"] },
    { pergunta: "Qual atleta ganhou mais medalhas olímpicas da história?", correta: "Michael Phelps", opcoes: ["Usain Bolt", "Michael Phelps", "Carl Lewis", "Mark Spitz"] },
    { pergunta: "Qual é o apelido do lutador Anderson Silva?", correta: "The Spider", opcoes: ["The Beast", "The Spider", "The Phenom", "The Machine"] },
    { pergunta: "Qual país é mais vitorioso no basquete olímpico?", correta: "Estados Unidos", opcoes: ["Espanha", "Argentina", "Estados Unidos", "Lituânia"] },
    { pergunta: "Qual é o Grand Slam mais antigo do tênis?", correta: "Wimbledon", opcoes: ["US Open", "Roland Garros", "Wimbledon", "Australian Open"] },
    { pergunta: "Em qual esporte a Rayssa Leal pratica?", correta: "Skate", opcoes: ["Patinação", "Skate", "Ciclismo", "Atletismo"] },
    { pergunta: "Quem foi campeão da Fórmula 1 em 2021?", correta: "Max Verstappen", opcoes: ["Lewis Hamilton", "Max Verstappen", "Sebastian Vettel", "Charles Leclerc"] },
    { pergunta: "Qual time venceu a Libertadores de 2021?", correta: "Palmeiras", opcoes: ["Flamengo", "Palmeiras", "Atlético-MG", "River Plate"] },
    { pergunta: "Qual esporte é jogado com uma peteca?", correta: "Badminton", opcoes: ["Squash", "Tênis", "Badminton", "Handebol"] },
    { pergunta: "Qual esporte tem um movimento chamado 'ippon'?", correta: "Judô", opcoes: ["Karatê", "Judô", "Taekwondo", "Capoeira"] },
    { pergunta: "Quantos jogadores cada time tem no voleibol em quadra?", correta: "6", opcoes: ["5", "6", "7", "8"] },
    { pergunta: "Qual país venceu a Copa do Mundo de Futebol Feminino em 2019?", correta: "Estados Unidos", opcoes: ["Alemanha", "Brasil", "Estados Unidos", "França"] },
    { pergunta: "Quem é o maior artilheiro da história da Champions League?", correta: "Cristiano Ronaldo", opcoes: ["Cristiano Ronaldo", "Messi", "Lewandowski", "Benzema"] },
    { pergunta: "Qual é o nome da liga de futebol dos EUA?", correta: "MLS", opcoes: ["USFL", "MLS", "NFL", "USML"] },
    { pergunta: "Qual é a principal competição de clubes da América do Sul?", correta: "Copa Libertadores", opcoes: ["Copa Sul-Americana", "Brasileirão", "Copa Libertadores", "Recopa"] },
    { pergunta: "Quem foi o maior campeão mundial de boxe peso-pesado?", correta: "Muhammad Ali", opcoes: ["Mike Tyson", "Evander Holyfield", "Muhammad Ali", "George Foreman"] },
    { pergunta: "Qual país sediou as Olimpíadas de 2016?", correta: "Brasil", opcoes: ["China", "Brasil", "Grécia", "Reino Unido"] },
    { pergunta: "Qual é a maior pontuação possível no boliche?", correta: "300 pontos", opcoes: ["250 pontos", "280 pontos", "300 pontos", "320 pontos"] },
    { pergunta: "Qual é o esporte praticado por Gabriel Medina?", correta: "Surfe", opcoes: ["Surfe", "Skate", "Natação", "Windsurf"] },
    { pergunta: "Qual jogador é conhecido como 'Imperador'?", correta: "Adriano", opcoes: ["Adriano", "Kaká", "Ronaldinho", "Fred"] },
    { pergunta: "Qual seleção venceu a Eurocopa de 2020 (realizada em 2021)?", correta: "Itália", opcoes: ["Inglaterra", "França", "Itália", "Alemanha"] },
    { pergunta: "Qual clube é conhecido como 'Galo'?", correta: "Atlético Mineiro", opcoes: ["Atlético Paranaense", "Atlético Mineiro", "Goiás", "Bahia"] },
    { pergunta: "Qual clube venceu a primeira Copa do Mundo de Clubes da FIFA?", correta: "Corinthians", opcoes: ["Real Madrid", "Boca Juniors", "Corinthians", "Liverpool"] },
    { pergunta: "Quantos minutos dura uma partida oficial de futebol?", correta: "90 minutos", opcoes: ["60 minutos", "90 minutos", "80 minutos", "100 minutos"] },
    { pergunta: "Em qual país nasceu o futebol moderno?", correta: "Inglaterra", opcoes: ["Brasil", "Alemanha", "Inglaterra", "Itália"] },
    { pergunta: "Qual tenista tem mais títulos de Grand Slam até 2023?", correta: "Novak Djokovic", opcoes: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Andy Murray"] },
    { pergunta: "Em que esporte se destacou o atleta Marat Safin?", correta: "Tênis", opcoes: ["Tênis", "Xadrez", "Golfe", "Boxe"] },
    { pergunta: "Qual país venceu a Copa do Mundo Sub-20 de 2023?", correta: "Uruguai", opcoes: ["Brasil", "Uruguai", "Itália", "Nigéria"] },
    { pergunta: "Qual é o nome da principal liga de basquete dos EUA?", correta: "NBA", opcoes: ["NFL", "MLB", "NBA", "MLS"] },
    { pergunta: "Quem foi o maior goleador da história do Campeonato Brasileiro?", correta: "Roberto Dinamite", opcoes: ["Zico", "Fred", "Romário", "Roberto Dinamite"] },
    { pergunta: "Qual é o esporte olímpico que combina esqui e tiro ao alvo?", correta: "Biathlon", opcoes: ["Triatlo", "Pentatlo moderno", "Biathlon", "Decatlo"] },
    { pergunta: "Qual jogador brasileiro é conhecido pelo apelido 'O Animal'?", correta: "Edmundo", opcoes: ["Romário", "Edmundo", "Túlio", "Viola"] },
    { pergunta: "Quantas voltas tem uma corrida oficial de Fórmula 1, em média?", correta: "Entre 50 e 70", opcoes: ["30", "40", "Entre 50 e 70", "Mais de 100"] },
    { pergunta: "Qual país sediou os Jogos Olímpicos de Inverno de 2022?", correta: "China", opcoes: ["Japão", "Canadá", "Noruega", "China"] },
    { pergunta: "Quantas Copas do Mundo o técnico Vicente del Bosque venceu com a Espanha?", correta: "1", opcoes: ["0", "1", "2", "3"] },
    { pergunta: "Em que ano a Argentina venceu sua primeira Copa do Mundo?", correta: "1978", opcoes: ["1986", "1930", "1978", "1990"] },
    { pergunta: "Quem foi o artilheiro da Copa do Mundo de 2002?", correta: "Ronaldo", opcoes: ["Ronaldo", "Klose", "Henry", "Ronaldinho"] },
    { pergunta: "Qual piloto brasileiro venceu o Mundial de Fórmula 1 três vezes?", correta: "Ayrton Senna", opcoes: ["Rubens Barrichello", "Ayrton Senna", "Nelson Piquet", "Felipe Massa"] },
    { pergunta: "Qual foi o placar da final da Copa de 1950 entre Brasil e Uruguai?", correta: "2x1 para o Uruguai", opcoes: ["1x0 Brasil", "2x1 para o Uruguai", "3x2 Brasil", "0x0"] },
    { pergunta: "Quantas medalhas de ouro o Brasil conquistou nas Olimpíadas de Tóquio 2020?", correta: "7", opcoes: ["5", "7", "9", "6"] },
    { pergunta: "Em qual clube europeu Ronaldinho Gaúcho venceu a Champions League?", correta: "Barcelona", opcoes: ["Milan", "Barcelona", "PSG", "Atlético de Madrid"] },
    { pergunta: "Qual país venceu a primeira edição da Copa do Mundo em 1930?", correta: "Uruguai", opcoes: ["Brasil", "Argentina", "Uruguai", "Itália"] },
    { pergunta: "Em que ano o basquete passou a fazer parte das Olimpíadas?", correta: "1936", opcoes: ["1948", "1936", "1924", "1960"] },
    { pergunta: "Quem foi o último brasileiro a ganhar o prêmio de Melhor do Mundo da FIFA antes de 2024?", correta: "Kaká", opcoes: ["Ronaldinho", "Kaká", "Neymar", "Romário"] },
    { pergunta: "Quantos títulos da Libertadores o Boca Juniors possui?", correta: "6", opcoes: ["5", "6", "7", "8"] },
    { pergunta: "Qual seleção foi eliminada na fase de grupos da Copa do Mundo de 2002 sendo campeã em 1998?", correta: "França", opcoes: ["Alemanha", "França", "Brasil", "Argentina"] },
    { pergunta: "Quem é o maior vencedor do Tour de France na história?", correta: "Eddy Merckx", opcoes: ["Lance Armstrong", "Eddy Merckx", "Chris Froome", "Bernard Hinault"] },
    { pergunta: "Quantos jogadores um time de rúgbi tem em campo?", correta: "15", opcoes: ["11", "13", "15", "16"] },
    { pergunta: "Quem é a maior campeã de Grand Slams no tênis feminino?", correta: "Margaret Court", opcoes: ["Serena Williams", "Margaret Court", "Steffi Graf", "Martina Navratilova"] },
    { pergunta: "Qual país sediou a Copa do Mundo de 1962?", correta: "Chile", opcoes: ["Brasil", "Chile", "México", "Argentina"] },
    { pergunta: "Quem é o maior pontuador da história da NBA?", correta: "LeBron James", opcoes: ["Kobe Bryant", "Michael Jordan", "LeBron James", "Kareem Abdul-Jabbar"] },
    { pergunta: "Qual cidade brasileira sediou os Jogos Pan-Americanos de 2007?", correta: "Rio de Janeiro", opcoes: ["São Paulo", "Brasília", "Rio de Janeiro", "Belo Horizonte"] },
    { pergunta: "Quantas Copas Libertadores o Santos de Pelé venceu?", correta: "2", opcoes: ["1", "2", "3", "4"] },
    { pergunta: "Em que país foi criado o esporte hóquei no gelo?", correta: "Canadá", opcoes: ["Estados Unidos", "Rússia", "Canadá", "Suécia"] },
    { pergunta: "Qual país sediou a primeira edição dos Jogos Olímpicos da Era Moderna em 1896?", correcta: "Grécia", opcoes: ["França", "Alemanha", "Grécia", "Inglaterra"] },
    { pergunta: "Qual país venceu a Copa América de 2021?", correta: "Argentina", opcoes: ["Brasil", "Argentina", "Uruguai", "Chile"] },
    { pergunta: "Em qual cidade foi realizada a final da Copa do Mundo de 2014?", correta: "Rio de Janeiro", opcoes: ["São Paulo", "Rio de Janeiro", "Brasília", "Belo Horizonte"] },
    { pergunta: "Qual ginasta brasileira conquistou medalha de prata nas Olimpíadas de 2020?", correta: "Rebeca Andrade", opcoes: ["Daiane dos Santos", "Jade Barbosa", "Rebeca Andrade", "Daniele Hypólito"] },
    { pergunta: "Qual é o nome do estádio do Borussia Dortmund?", correta: "Signal Iduna Park", opcoes: ["Allianz Arena", "Signal Iduna Park", "Old Trafford", "San Siro"] },
    { pergunta: "Quem foi o maior campeão da Fórmula Indy?", correta: "Rick Mears", opcoes: ["Rick Mears", "Ayrton Senna", "Emerson Fittipaldi", "Helio Castroneves"] },
    { pergunta: "Qual seleção masculina de vôlei foi campeã olímpica em 2016?", correta: "Brasil", opcoes: ["Itália", "Brasil", "Rússia", "Estados Unidos"] },
    { pergunta: "Qual país é o maior vencedor da Copa do Mundo de Rugby?", correta: "Nova Zelândia", opcoes: ["Inglaterra", "África do Sul", "Nova Zelândia", "Austrália"] },
    { pergunta: "Quem é o maior medalhista brasileiro em Jogos Pan-Americanos?", correta: "Thiago Pereira", opcoes: ["Cesar Cielo", "Thiago Pereira", "Gustavo Borges", "Hugo Hoyama"] }
  ],
  cultura: [
    { pergunta: "Quem pintou a Mona Lisa?", correta: "Leonardo da Vinci", opcoes: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Claude Monet"] },
    { pergunta: "Quem escreveu 'Dom Quixote'?", correta: "Miguel de Cervantes", opcoes: ["Gabriel García Márquez", "Jorge Luis Borges", "Miguel de Cervantes", "William Shakespeare"] },
    { pergunta: "Quem escreveu a obra 'Romeu e Julieta'?", correta: "William Shakespeare", opcoes: ["Mark Twain", "Jane Austen", "William Shakespeare", "Charles Dickens"] },
    { pergunta: "Quem pintou o teto da Capela Sistina?", correta: "Michelangelo", opcoes: ["Leonardo da Vinci", "Raphael", "Michelangelo", "Donatello"] },
    { pergunta: "Quem escreveu '1984'?", correta: "George Orwell", opcoes: ["Aldous Huxley", "Ray Bradbury", "George Orwell", "Isaac Asimov"] },
    { pergunta: "Quem foi o autor de 'Dom Casmurro'?", correta: "Machado de Assis", opcoes: ["José de Alencar", "Machado de Assis", "Graciliano Ramos", "Jorge Amado"] },
    { pergunta: "Quem foi o autor de 'O Pequeno Príncipe'?", correta: "Antoine de Saint-Exupéry", opcoes: ["Antoine de Saint-Exupéry", "Jules Verne", "Victor Hugo", "Marcel Proust"] },
    { pergunta: "Quem pintou 'Guernica'?", correta: "Pablo Picasso", opcoes: ["Salvador Dalí", "Pablo Picasso", "Joan Miró", "Diego Rivera"] },
    { pergunta: "Qual é o nome do famoso pintor holandês de 'Noite Estrelada'?", correta: "Vincent van Gogh", opcoes: ["Pablo Picasso", "Vincent van Gogh", "Claude Monet", "Salvador Dalí"] },
    { pergunta: "Qual é o nome do famoso quadro de Leonardo da Vinci que representa a Última Ceia?", correta: "A Última Ceia", opcoes: ["Mona Lisa", "A Última Ceia", "A Criação de Adão", "A Escola de Atenas"] },
    { pergunta: "Qual é o nome do famoso compositor de 'As Quatro Estações'?", correta: "Antonio Vivaldi", opcoes: ["Antonio Vivaldi", "Johann Sebastian Bach", "Ludwig van Beethoven", "Wolfgang Amadeus Mozart"] },
    { pergunta: "Quem compôs a Nona Sinfonia?", correta: "Ludwig van Beethoven", opcoes: ["Wolfgang Amadeus Mozart", "Johann Sebastian Bach", "Ludwig van Beethoven", "Pyotr Ilyich Tchaikovsky"] },
    { pergunta: "Qual é o nome do famoso compositor de 'A Flauta Mágica'?", correta: "Wolfgang Amadeus Mozart", opcoes: ["Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Johann Sebastian Bach", "Richard Wagner"] },
    { pergunta: "Qual é o nome do famoso festival de música realizado em Woodstock em 1969?", correta: "Woodstock Music Festival", opcoes: ["Coachella", "Glastonbury", "Woodstock Music Festival", "Lollapalooza"] },
    { pergunta: "Qual é o nome do famoso filme de Stanley Kubrick sobre o espaço?", correta: "2001: Uma Odisseia no Espaço", opcoes: ["Interstellar", "2001: Uma Odisseia no Espaço", "Gravidade", "Apollo 13"] },
    { pergunta: "Qual é o nome do famoso escritor russo de 'Guerra e Paz'?", correta: "Liev Tolstói", opcoes: ["Fiódor Dostoiévski", "Liev Tolstói", "Anton Tchekhov", "Vladimir Nabokov"] },
    { pergunta: "Qual é o nome do famoso escritor de 'O Senhor dos Anéis'?", correta: "J.R.R. Tolkien", opcoes: ["J.K. Rowling", "J.R.R. Tolkien", "George R.R. Martin", "C.S. Lewis"] },
    { pergunta: "Qual é o nome do famoso detective criado por Arthur Conan Doyle?", correta: "Sherlock Holmes", opcoes: ["Sherlock Holmes", "Hercule Poirot", "Miss Marple", "Philip Marlowe"] },
    { pergunta: "Qual é o nome do famoso discurso de Martin Luther King Jr.?", correta: "I Have a Dream", opcoes: ["I Have a Dream", "Gettysburg Address", "The Ballot or the Bullet", "We Shall Overcome"] },
    { pergunta: "Qual é o nome da famosa pintura de Edvard Munch que representa uma figura angustiada?", correta: "O Grito", opcoes: ["Noite Estrelada", "O Grito", "Guernica", "A Persistência da Memória"] },
    { pergunta: "Qual é o nome do deus romano da guerra?", correta: "Marte", opcoes: ["Júpiter", "Marte", "Netuno", "Plutão"] },
    { pergunta: "Qual é o nome da tradicional festa brasileira que acontece em junho?", correta: "Festa Junina", opcoes: ["Carnaval", "Festa Junina", "Réveillon", "Corpus Christi"] },
    { pergunta: "Quem é o autor da obra 'Capitães da Areia'?", correta: "Jorge Amado", opcoes: ["Jorge Amado", "Machado de Assis", "Carlos Drummond de Andrade", "Graciliano Ramos"] },
    { pergunta: "Qual país é conhecido como o berço do samba?", correta: "Brasil", opcoes: ["Cuba", "Brasil", "Argentina", "Portugal"] },
    { pergunta: "Qual é o nome da religião afro-brasileira que mistura elementos africanos e católicos?", correta: "Candomblé", opcoes: ["Candomblé", "Budismo", "Islamismo", "Hinduísmo"] },
    { pergunta: "Qual é o nome da dança típica espanhola conhecida por seu ritmo intenso?", correta: "Flamenco", opcoes: ["Tango", "Samba", "Flamenco", "Salsa"] },
    { pergunta: "Qual é o nome do principal prêmio do cinema mundial?", correta: "Oscar", opcoes: ["Globo de Ouro", "BAFTA", "César", "Oscar"] },
    { pergunta: "Qual cidade é famosa por seu carnaval com escolas de samba?", correta: "Rio de Janeiro", opcoes: ["Salvador", "Recife", "São Paulo", "Rio de Janeiro"] },
    { pergunta: "Qual escritor brasileiro é conhecido por sua obra 'Grande Sertão: Veredas'?", correta: "João Guimarães Rosa", opcoes: ["José de Alencar", "João Guimarães Rosa", "Jorge Amado", "Carlos Drummond de Andrade"] },
    { pergunta: "Qual artista é conhecido por pintar relógios derretendo?", correta: "Salvador Dalí", opcoes: ["Pablo Picasso", "René Magritte", "Salvador Dalí", "Joan Miró"] },
    { pergunta: "Qual é o nome do maior evento de premiação da música?", correta: "Grammy", opcoes: ["MTV Awards", "Grammy", "Billboard Music Awards", "American Music Awards"] },
    { pergunta: "Qual famoso autor brasileiro escreveu 'Vidas Secas'?", correta: "Graciliano Ramos", opcoes: ["Monteiro Lobato", "Graciliano Ramos", "Érico Veríssimo", "Jorge Amado"] },
    { pergunta: "Qual é o nome do estilo arquitetônico das grandes catedrais medievais europeias?", correta: "Gótico", opcoes: ["Gótico", "Barroco", "Renascentista", "Neoclássico"] },
    { pergunta: "Qual é o nome do famoso quadro de René Magritte com um homem de chapéu e uma maçã no rosto?", correta: "O Filho do Homem", opcoes: ["O Filho do Homem", "O Grito", "A Persistência da Memória", "Noite Estrelada"] },
    { pergunta: "Qual é o nome do gênero musical criado no Bronx, em Nova York, nos anos 70?", correta: "Hip Hop", opcoes: ["Rock", "Jazz", "Hip Hop", "Reggae"] },
    { pergunta: "Quem foi a cantora brasileira conhecida como 'Pimentinha'?", correta: "Elis Regina", opcoes: ["Gal Costa", "Elis Regina", "Maria Bethânia", "Cássia Eller"] },
    { pergunta: "Quem escreveu 'Ensaio sobre a Cegueira'?", correta: "José Saramago", opcoes: ["José Saramago", "Fernando Pessoa", "José de Alencar", "Paulo Coelho"] },
    { pergunta: "Qual é o nome do autor brasileiro de 'O Alquimista'?", correta: "Paulo Coelho", opcoes: ["Jorge Amado", "Paulo Coelho", "Carlos Drummond de Andrade", "Machado de Assis"] },
    { pergunta: "Qual movimento artístico é conhecido pelas formas geométricas e uso de cores primárias?", correta: "Cubismo", opcoes: ["Impressionismo", "Cubismo", "Expressionismo", "Futurismo"] },
    { pergunta: "Quem é considerado o pai da psicanálise?", correta: "Sigmund Freud", opcoes: ["Carl Jung", "Sigmund Freud", "Jean Piaget", "Jacques Lacan"] },
    { pergunta: "Qual é o nome do festival indiano das cores?", correta: "Holi", opcoes: ["Diwali", "Holi", "Ramadã", "Durga Puja"] },
    { pergunta: "Qual é o nome do autor de 'A Metamorfose'?", correta: "Franz Kafka", opcoes: ["Franz Kafka", "Fiódor Dostoiévski", "George Orwell", "Italo Calvino"] },
    { pergunta: "Qual artista pintou 'A Persistência da Memória'?", correta: "Salvador Dalí", opcoes: ["Salvador Dalí", "Joan Miró", "Pablo Picasso", "Henri Matisse"] },
    { pergunta: "Qual é o nome do famoso romance de Gabriel García Márquez sobre uma família ao longo de várias gerações?", correta: "Cem Anos de Solidão", opcoes: ["Cem Anos de Solidão", "O Amor nos Tempos do Cólera", "Crônica de uma Morte Anunciada", "Memória de Minhas Putas Tristes"] },
    { pergunta: "Qual país é considerado o berço da filosofia ocidental?", correta: "Grécia", opcoes: ["Egito", "Grécia", "Itália", "Índia"] },
    { pergunta: "Quem escreveu 'O Príncipe'?", correta: "Maquiavel", opcoes: ["Aristóteles", "Maquiavel", "Platão", "Rousseau"] },
    { pergunta: "Qual é o nome da ópera composta por Georges Bizet sobre uma cigana?", correta: "Carmen", opcoes: ["Carmen", "La Traviata", "O Barbeiro de Sevilha", "Turandot"] },
    { pergunta: "Qual é o nome da peça teatral mais conhecida de Sófocles?", correta: "Édipo Rei", opcoes: ["Édipo Rei", "Antígona", "As Bacantes", "Medeia"] },
    { pergunta: "Qual é o nome do movimento artístico que atravessou a Primeira Guerra Mundial e é conhecido pela sua crítica ao racionalismo?", correta: "Dadaísmo", opcoes: ["Dadaísmo", "Surrealismo", "Expressionismo", "Impressionismo"] },
    { pergunta: "Qual é o nome do escritor tcheco que escreveu 'O Processo'?", correta: "Franz Kafka", opcoes: ["Franz Kafka", "Albert Camus", "Jean-Paul Sartre", "Thomas Mann"] },
    { pergunta: "Qual filósofo escreveu 'Assim Falou Zaratustra'?", correta: "Friedrich Nietzsche", opcoes: ["Karl Marx", "Friedrich Nietzsche", "Jean-Paul Sartre", "Immanuel Kant"] },
    { pergunta: "Qual arquiteto brasileiro projetou Brasília?", correta: "Oscar Niemeyer", opcoes: ["Lúcio Costa", "Oscar Niemeyer", "Roberto Burle Marx", "Ruy Ohtake"] },
    { pergunta: "Qual é o nome da pintura de Leonardo da Vinci que representa uma mulher com um animal nos braços?", correta: "Dama com Arminho", opcoes: ["Dama com Arminho", "Mona Lisa", "A Virgem das Rochas", "La Belle Ferronnière"] },
    { pergunta: "Qual compositor é conhecido por suas óperas como 'O Barbeiro de Sevilha'?", correta: "Gioachino Rossini", opcoes: ["Giuseppe Verdi", "Gioachino Rossini", "Wolfgang A. Mozart", "Gaetano Donizetti"] },
    { pergunta: "Qual artista do Renascimento criou a escultura 'David' em mármore?", correta: "Michelangelo", opcoes: ["Donatello", "Leonardo da Vinci", "Michelangelo", "Bernini"] },
    { pergunta: "Qual é o nome do movimento artístico que teve Claude Monet como um de seus principais representantes?", correta: "Impressionismo", opcoes: ["Expressionismo", "Impressionismo", "Cubismo", "Surrealismo"] },
    { pergunta: "Qual é o nome da escritora britânica autora de 'Orgulho e Preconceito'?", correta: "Jane Austen", opcoes: ["Jane Austen", "Virginia Woolf", "Emily Brontë", "Mary Shelley"] },
    { pergunta: "Qual é o nome do autor russo de 'Crime e Castigo'?", correta: "Fiódor Dostoiévski", opcoes: ["Liev Tolstói", "Fiódor Dostoiévski", "Maxim Gorki", "Anton Tchekhov"] },
    { pergunta: "Qual é o nome do artista conhecido por suas esculturas de balões metálicos?", correta: "Jeff Koons", opcoes: ["Jeff Koons", "Damien Hirst", "Banksy", "Takashi Murakami"] },
    { pergunta: "Qual é o nome do autor de 'O Estrangeiro'?", correta: "Albert Camus", opcoes: ["Albert Camus", "Jean-Paul Sartre", "Franz Kafka", "Italo Calvino"] },
    { pergunta: "Qual é o nome do filme mudo dirigido por Fritz Lang que é considerado um marco da ficção científica?", correta: "Metrópolis", opcoes: ["Metrópolis", "Nosferatu", "O Gabinete do Dr. Caligari", "Tempos Modernos"] },
    { pergunta: "Qual é o nome do pintor mexicano famoso por seus murais e casado com Frida Kahlo?", correta: "Diego Rivera", opcoes: ["Diego Rivera", "David Alfaro Siqueiros", "José Clemente Orozco", "Rufino Tamayo"] },
    { pergunta: "Qual é o nome do romance distópico escrito por Aldous Huxley?", correta: "Admirável Mundo Novo", opcoes: ["Admirável Mundo Novo", "1984", "Fahrenheit 451", "Laranja Mecânica"] },
    { pergunta: "Qual é o nome da principal obra do filósofo francês René Descartes?", correta: "Discurso do Método", opcoes: ["Discurso do Método", "Crítica da Razão Pura", "O Ser e o Nada", "Ética"] },
    { pergunta: "Qual é o nome da famosa peça de teatro escrita por Shakespeare que trata de vingança e loucura?", correta: "Hamlet", opcoes: ["Hamlet", "Macbeth", "Otelo", "Rei Lear"] },
    { pergunta: "Qual é o nome da obra de arte criada por Marcel Duchamp que consiste em um mictório assinado?", correta: "Fonte", opcoes: ["Fonte", "O Grande Vidro", "A Roda de Bicicleta", "O Ready-made"] },
    { pergunta: "Qual é o nome do escritor italiano autor de 'A Divina Comédia'?", correta: "Dante Alighieri", opcoes: ["Giovanni Boccaccio", "Dante Alighieri", "Petrarca", "Maquiavel"] },
    { pergunta: "Qual é o nome do principal livro sagrado do hinduísmo?", correta: "Bhagavad Gita", opcoes: ["Bhagavad Gita", "Alcorão", "Torá", "Tripitaka"] },
    { pergunta: "Qual é o nome da ópera de Verdi baseada em uma peça de Shakespeare?", correta: "Otelo", opcoes: ["Otelo", "Aida", "Rigoletto", "La Traviata"] },
    { pergunta: "Qual o nome do famoso museu onde está exposta a Mona Lisa?", correta: "Museu do Louvre", opcoes: ["Museu do Prado", "Museu do Vaticano", "Museu do Louvre", "Museu Britânico"] },
    { pergunta: "Quem é o autor da obra 'Memórias Póstumas de Brás Cubas'?", correta: "Machado de Assis", opcoes: ["José de Alencar", "Machado de Assis", "Jorge Amado", "Graciliano Ramos"] }
  ]
};

// Banco de Perguntas de Verdadeiro ou Falso
const bancoPerguntasVF = {
  geografia: [
      { pergunta: "A capital do Brasil é Rio de Janeiro?", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "A capital do Brasil é Brasília." },
      { pergunta: "O Deserto do Saara é o maior deserto do mundo?", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
      { pergunta: "A Rússia é o maior país do mundo em extensão territorial?", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
      { pergunta: "O Oceano Atlântico é maior que o Oceano Pacífico?", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "O Oceano Pacífico é o maior oceano do mundo." },
      { pergunta: "A Linha do Equador passa pelo Brasil.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
      { pergunta: "A África é o continente com mais países.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
      { pergunta: "A Antártida possui uma grande população nativa.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "A Antártida não possui população nativa, apenas pesquisadores temporários." },
      { pergunta: "O Monte Everest é a montanha mais alta do mundo.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
      { pergunta: "O Rio Nilo é o rio mais extenso do mundo.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
      { pergunta: "O Brasil faz fronteira com todos os países da América do Sul.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "O Brasil não faz fronteira com o Chile e o Equador." },
      { pergunta: "A Argentina não faz fronteira com o Chile.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "A Argentina faz fronteira com o Chile." },
      { pergunta: "A Groenlândia pertence à Dinamarca.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
      { pergunta: "O clima do deserto é sempre frio.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "O clima do deserto é caracterizado por temperaturas extremas, podendo ser quente ou frio." },
      { pergunta: "O Himalaia está localizado na Europa.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "O Himalaia está localizado na Ásia." },
      { pergunta: "Existem vulcões ativos no Brasil.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "Não há vulcões ativos no Brasil atualmente." },
      { pergunta: "O Polo Norte está localizado na água do Oceano Ártico.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
      { pergunta: "A linha do Equador divide o planeta em hemisférios norte e sul.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
      { pergunta: "Tóquio é a capital da China.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "Tóquio é a capital do Japão. A capital da China é Pequim." },
      { pergunta: "A Cordilheira dos Andes passa pelo Chile.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
      { pergunta: "A maioria dos desertos está localizada próxima à linha do Equador.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "A maioria dos desertos está em zonas subtropicais, não próximas à linha do Equador." },
      { pergunta: "Os Estados Unidos possuem 50 estados.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
      { pergunta: "A Austrália é ao mesmo tempo um país e um continente.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
      { pergunta: "O rio Amazonas nasce no Brasil.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "O rio Amazonas nasce no Peru." },
      { pergunta: "Existem 7 continentes no mundo.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
      { pergunta: "O clima tropical é caracterizado por temperaturas baixas.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "O clima tropical é quente, com estação chuvosa e seca." },
      { pergunta: "O Deserto do Atacama é um dos mais secos do mundo.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
      { pergunta: "O mar Morto tem alta salinidade e permite flutuação fácil.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
      { pergunta: "A Alemanha faz parte do continente asiático.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "A Alemanha está localizada na Europa." },
      { pergunta: "O Brasil está localizado no hemisfério norte.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "O Brasil está localizado principalmente no hemisfério sul." },
      { pergunta: "A África é banhada pelos oceanos Atlântico e Índico.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
      { pergunta: "O monte Kilimanjaro está localizado na África.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
      { pergunta: "O Canadá está localizado na América do Sul.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "O Canadá está localizado na América do Norte." },
      { pergunta: "O clima equatorial é quente e úmido o ano todo.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
      { pergunta: "A Itália é um país em formato de bota.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
      { pergunta: "A Islândia possui vários vulcões ativos.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
      { pergunta: "O rio São Francisco atravessa o deserto do Saara.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "O rio São Francisco está no Brasil. O Saara está na África." },
      { pergunta: "A capital da Argentina é Buenos Aires.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
      { pergunta: "O continente americano é dividido em três partes: norte, central e sul.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
      { pergunta: "A Oceania é formada apenas pela Austrália.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "A Oceania inclui outros países e ilhas, como Nova Zelândia e Fiji." },
      { pergunta: "O Brasil é cortado por três fusos horários.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
      { pergunta: "O oceano Índico é o maior do mundo.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "O maior oceano é o Oceano Pacífico." },
      { pergunta: "O deserto da Antártida é o mais frio do planeta.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
      { pergunta: "O Mar Cáspio é considerado um lago.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
      { pergunta: "A capital do México é Guadalajara.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "A capital do México é a Cidade do México." },
      { pergunta: "O relevo brasileiro é formado principalmente por montanhas altas.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "O relevo brasileiro é composto por planaltos, planícies e depressões." },
      { pergunta: "O Pantanal é o maior bioma do Brasil.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "O maior bioma do Brasil é a Amazônia." },
      { pergunta: "O Monte Fuji está localizado no Japão.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
      { pergunta: "O Rio Danúbio passa por mais de 10 países europeus.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
      { pergunta: "A maior ilha do mundo é a Groenlândia.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
      { pergunta: "O Trópico de Capricórnio passa por mais países que o Trópico de Câncer.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "O Trópico de Câncer atravessa mais países do que o de Capricórnio." },
      { pergunta: "A fossa das Marianas é o ponto mais profundo dos oceanos.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
      { pergunta: "O lago Baikal é o mais profundo do mundo.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
      { pergunta: "A capital da África do Sul é apenas Joanesburgo.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "A África do Sul possui três capitais: Pretória (executiva), Cidade do Cabo (legislativa) e Bloemfontein (judiciária)." },
      { pergunta: "O arquipélago de Galápagos pertence ao Peru.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "As ilhas Galápagos pertencem ao Equador." },
      { pergunta: "O Meridiano de Greenwich divide o planeta entre hemisférios leste e oeste.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
      { pergunta: "O deserto do Kalahari está localizado na Ásia.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "O deserto do Kalahari está localizado no sul da África." },
      { pergunta: "O arquipélago do Havaí está situado no Oceano Pacífico.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
      { pergunta: "O rio Congo é o mais profundo do mundo.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
      { pergunta: "A Península Ibérica abriga os países de Portugal e Espanha.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
      { pergunta: "A maior parte do território chinês está localizada no hemisfério ocidental.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "A China está no hemisfério oriental." },
      { pergunta: "O lago Titicaca é o mais alto do mundo entre os grandes lagos navegáveis.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
      { pergunta: "O Estreito de Gibraltar separa a Europa da Ásia.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "O Estreito de Gibraltar separa a Europa da África." },
      { pergunta: "A Península Arábica é a maior península do mundo.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
      { pergunta: "O ponto mais alto da América do Norte é o Monte McKinley (Denali).", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
      { pergunta: "A maioria das florestas temperadas está localizada nos trópicos.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "As florestas temperadas estão localizadas em regiões de clima temperado, não nos trópicos." },
      { pergunta: "A cidade de Istambul está localizada em dois continentes.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
      { pergunta: "O Mar de Aral tem aumentado seu volume nos últimos anos.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "O Mar de Aral tem diminuído devido à intervenção humana." },
      { pergunta: "O paralelo 45ºN está exatamente no meio entre o Equador e o Polo Norte.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
      { pergunta: "O Canal de Suez liga o Mar Mediterrâneo ao Mar Vermelho.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
      { pergunta: "A Islândia está localizada no Círculo Polar Ártico.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "A Islândia está próxima, mas não dentro do Círculo Polar Ártico." },
      { pergunta: "O Deserto de Gobi está localizado na Ásia.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] }
    ],
  
  historia: [
    { pergunta: "A Segunda Guerra Mundial terminou em 1945.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "Napoleão Bonaparte foi imperador da Alemanha.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "Napoleão foi imperador da França, não da Alemanha." },
    { pergunta: "A Revolução Francesa começou em 1789.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O Império Romano caiu no século V.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "Dom Pedro I proclamou a independência do Brasil em 1822.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A escravidão foi abolida no Brasil em 1888.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A Guerra Fria foi um conflito armado entre EUA e URSS.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "A Guerra Fria foi uma disputa ideológica e política, sem confronto militar direto entre EUA e URSS." },
    { pergunta: "A Revolução Industrial começou no Japão.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "A Revolução Industrial começou na Inglaterra no século XVIII." },
    { pergunta: "A Idade Média foi marcada pelo feudalismo.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O Muro de Berlim caiu em 1989.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O Nazismo surgiu na Itália.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "O Nazismo surgiu na Alemanha; na Itália surgiu o Fascismo." },
    { pergunta: "Getúlio Vargas foi presidente do Brasil por mais de uma vez.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "Os Maias viviam no território que hoje é o Egito.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "Os Maias viviam na América Central, principalmente onde hoje é o México, Guatemala e Honduras." },
    { pergunta: "A Guerra do Paraguai envolveu Brasil, Argentina e Uruguai contra o Paraguai.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A Inconfidência Mineira foi um movimento contra os altos impostos.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A Primeira Guerra Mundial começou em 1939.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "A Primeira Guerra Mundial começou em 1914; 1939 marca o início da Segunda Guerra." },
    { pergunta: "A Revolução Russa aconteceu em 1917.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A civilização egípcia desenvolveu-se às margens do rio Nilo.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "Cristóvão Colombo descobriu a América em 1492.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A Era Vargas começou em 1945.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "A Era Vargas começou em 1930, com a Revolução que depôs Washington Luís." },
    { pergunta: "A independência dos Estados Unidos foi declarada em 1776.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O feudalismo predominou na Europa durante a Idade Moderna.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "O feudalismo predominou na Idade Média; na Idade Moderna surgiram os Estados Nacionais." },
    { pergunta: "A Batalha de Waterloo marcou a derrota de Napoleão.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A Revolução Farroupilha ocorreu no estado da Bahia.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "A Revolução Farroupilha ocorreu no Rio Grande do Sul." },
    { pergunta: "Os vikings eram originários da Escandinávia.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A União Soviética foi criada após a Revolução Francesa.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "A União Soviética foi criada após a Revolução Russa de 1917, não após a Revolução Francesa." },
    { pergunta: "A Guerra de Canudos ocorreu no século XIX.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "Júlio César foi um imperador romano assassinado no Senado.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A Idade Moderna começou com a queda do Império Romano do Ocidente.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "A queda do Império Romano marca o início da Idade Média, não da Idade Moderna." },
    { pergunta: "O Renascimento foi um movimento artístico e cultural da Idade Média.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "O Renascimento foi um movimento da Idade Moderna, com inspiração na Antiguidade." },
    { pergunta: "A Guerra dos Cem Anos durou exatamente 100 anos.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "A guerra durou 116 anos (1337–1453), apesar do nome." },
    { pergunta: "O tratado de Tordesilhas foi assinado entre Portugal e Espanha.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A Inquisição foi uma instituição criada para combater heresias.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "Martin Luther King lutou pelos direitos civis nos EUA.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A colonização do Brasil começou em 1500.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A Roma Antiga foi governada por uma democracia direta.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "Roma foi uma república e depois um império, não uma democracia direta como Atenas." },
    { pergunta: "Mahatma Gandhi foi um líder pacifista da Índia.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O Iluminismo influenciou a Revolução Francesa.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A bomba atômica foi usada na cidade de Hiroshima durante a Primeira Guerra Mundial.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "A bomba atômica foi usada na Segunda Guerra Mundial, em 1945." },
    { pergunta: "O Holocausto foi o extermínio de judeus durante a Segunda Guerra Mundial.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A Guerra do Vietnã envolveu o Brasil.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "O Brasil não participou da Guerra do Vietnã; o conflito envolveu principalmente EUA e Vietnã." },
    { pergunta: "Nelson Mandela foi presidente da África do Sul após o apartheid.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O Brasil participou da Primeira Guerra Mundial com tropas enviadas à Europa.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "O Brasil declarou guerra, mas sua participação foi principalmente naval e sem envio significativo de tropas terrestres à Europa." },
    { pergunta: "A Revolução Pernambucana foi um movimento separatista.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A Idade Antiga terminou com a invenção da escrita.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "A Idade Antiga começou com a invenção da escrita; terminou com a queda do Império Romano." },
    { pergunta: "A Rainha Elizabeth II foi coroada em 1953.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O Golpe Militar no Brasil ocorreu em 1964.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A Primeira Constituição brasileira foi promulgada em 1988.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "A primeira Constituição brasileira foi promulgada em 1824. A de 1988 é a atual." },
    { pergunta: "O absolutismo defendia o poder limitado dos reis.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "O absolutismo defendia o poder absoluto dos reis, sem limitações." },
    { pergunta: "A Revolução Gloriosa instaurou a monarquia parlamentarista na Inglaterra.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A Guerra dos Trinta Anos foi um conflito exclusivamente religioso.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "Apesar de ter começado como conflito religioso, a Guerra dos Trinta Anos envolveu interesses políticos e territoriais." },
    { pergunta: "A cidade de Constantinopla foi conquistada pelos otomanos em 1453.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A Revolta da Vacina foi uma reação popular contra a vacinação obrigatória no Brasil no início do século XX.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A Liga das Nações foi criada após a Segunda Guerra Mundial.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "A Liga das Nações foi criada após a Primeira Guerra Mundial; após a Segunda, criou-se a ONU." },
    { pergunta: "O tratado de Versalhes puniu severamente a Alemanha após a Primeira Guerra Mundial.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A expansão marítima europeia foi liderada inicialmente por Portugal e Espanha.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A Revolução Haitiana foi o primeiro movimento bem-sucedido de escravizados que resultou em independência.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "Os Estados Unidos foram colonizados exclusivamente por espanhóis.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "Os EUA foram colonizados principalmente por ingleses, holandeses e franceses, não exclusivamente por espanhóis." },
    { pergunta: "A Guerra Civil Espanhola levou à ditadura de Francisco Franco.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A Conferência de Berlim dividiu a África entre potências europeias.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A Constituição de 1937 no Brasil ficou conhecida como 'Polaca' por ter sido inspirada na constituição da Polônia.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A independência da Índia foi conquistada por meio de uma revolta armada liderada por Gandhi.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "Gandhi liderou um movimento pacifista, baseado na desobediência civil." },
    { pergunta: "O período da Renascença foi marcado pelo fortalecimento da fé cega e da autoridade da Igreja.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "A Renascença incentivou o pensamento crítico, científico e o humanismo, questionando dogmas religiosos." },
    { pergunta: "A queda da Bastilha marcou o início simbólico da Revolução Francesa.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O socialismo utópico defendia reformas graduais e pacíficas na sociedade industrial.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A Crise de 1929 teve início com o colapso da bolsa de valores de Londres.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "A crise teve início com a quebra da bolsa de valores de Nova York." },
    { pergunta: "A Guerra da Crimeia envolveu o Império Russo contra uma aliança formada por Reino Unido, França, Império Otomano e Sardenha.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A Doutrina Truman visava conter a expansão do comunismo durante a Guerra Fria.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O movimento sufragista feminino surgiu no século XIX em países da América Latina.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "O movimento sufragista feminino surgiu no século XIX em países como Reino Unido e Estados Unidos." },
    { pergunta: "A Revolução Mexicana começou em 1910 e resultou em profundas mudanças sociais no México.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A Guerra dos Farrapos foi um conflito que ocorreu no Nordeste do Brasil.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "A Guerra dos Farrapos ocorreu no Rio Grande do Sul, região Sul do Brasil." }
    ],
  ciencia: [
    { pergunta: "A água é composta por dois átomos de hidrogênio e um de oxigênio.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A célula é a menor unidade dos seres vivos.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O Sol é um planeta do sistema solar.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "O Sol é uma estrela, não um planeta." },
    { pergunta: "Os seres humanos possuem cinco sentidos básicos.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A fotossíntese é realizada pelas plantas para produzir energia.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "Os vírus são considerados seres vivos.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "Vírus não têm metabolismo próprio e precisam de células para se reproduzir." },
    { pergunta: "A força da gravidade foi descoberta por Isaac Newton.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O corpo humano possui 206 ossos na fase adulta.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O oxigênio é essencial para a respiração celular.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A eletricidade é uma forma de energia.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O DNA carrega informações genéticas.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O sangue é bombeado pelo cérebro.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "O sangue é bombeado pelo coração, não pelo cérebro." },
    { pergunta: "A camada de ozônio protege a Terra da radiação ultravioleta.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "Os metais são bons condutores de eletricidade.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O ser humano possui três pulmões.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "O ser humano possui dois pulmões." },
    { pergunta: "A lua produz sua própria luz.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "A Lua apenas reflete a luz do Sol, não emite luz própria." },
    { pergunta: "A Terra gira em torno do Sol.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A ebulição da água ocorre a 100 °C ao nível do mar.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A vitamina C é importante para o sistema imunológico.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A clorofila é responsável pela cor azul das flores.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "A clorofila dá cor verde às plantas, não azul às flores." },
    { pergunta: "O som se propaga mais rápido no ar do que na água.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "O som se propaga mais rápido na água do que no ar." },
    { pergunta: "O átomo é formado por prótons, nêutrons e elétrons.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A tabela periódica organiza os elementos químicos.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "As bactérias não causam nenhuma doença nos seres humanos.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "Muitas bactérias são benéficas, mas algumas causam doenças." },
    { pergunta: "O magnetismo está relacionado aos ímãs.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O cérebro controla todas as funções do corpo humano.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A água em estado sólido é chamada de vapor.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "A água em estado sólido é gelo; o vapor é o estado gasoso." },
    { pergunta: "O oxigênio representa aproximadamente 21% do ar atmosférico.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O petróleo é uma fonte de energia renovável.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "O petróleo é uma fonte não renovável, pois leva milhões de anos para se formar." },
    { pergunta: "O sistema digestivo é responsável pela digestão dos alimentos.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A lua influencia as marés da Terra.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O pH neutro é igual a 7.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A principal fonte de energia da Terra é o Sol.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A célula vegetal não possui parede celular.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "As células vegetais possuem parede celular, diferentemente das animais." },
    { pergunta: "A teoria da evolução foi proposta por Charles Darwin.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "Todos os mamíferos são ovíparos.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "A maioria dos mamíferos é vivípara, ou seja, dá à luz filhotes vivos." },
    { pergunta: "A digestão começa na boca.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O nitrogênio é o gás mais abundante na atmosfera terrestre.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O arco-íris é causado pela refração da luz.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "As plantas respiram oxigênio durante a noite.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A velocidade da luz é maior que a do som.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "Todos os peixes respiram pelos pulmões.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "Peixes respiram principalmente por brânquias, não por pulmões." },
    { pergunta: "O carbono é um elemento essencial para a vida.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "As vacinas servem para prevenir doenças.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O cloro é um metal alcalino.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "O cloro é um halogênio, não um metal alcalino." },
    { pergunta: "O pulmão é o órgão responsável pela troca gasosa no corpo humano.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A Terra é o único planeta conhecido que possui vida.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O ciclo da água inclui evaporação, condensação e precipitação.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A corrente elétrica é medida em volts.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "A corrente elétrica é medida em amperes; volts medem a tensão." },
    { pergunta: "A Lua tem atmosfera como a Terra.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "A Lua não tem uma atmosfera significativa como a Terra." },
    { pergunta: "A camada de ozônio é composta por moléculas de O3.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A mitocôndria é responsável pela produção de energia nas células eucariotas.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A teoria do Big Bang afirma que o universo sempre existiu em seu estado atual.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "O Big Bang propõe que o universo teve um início e está em expansão." },
    { pergunta: "A insulina é um hormônio produzido pelo pâncreas que regula os níveis de glicose no sangue.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A clorofila absorve principalmente a luz verde para realizar a fotossíntese.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "A clorofila reflete a luz verde e absorve principalmente luz azul e vermelha." },
    { pergunta: "O cérebro humano está dividido em três partes principais: cérebro, cerebelo e bulbo.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "As enzimas são proteínas que aceleram reações químicas no organismo.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A luz branca é composta apenas pela cor azul.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "A luz branca é composta por todas as cores do espectro visível." },
    { pergunta: "O pulmão esquerdo é menor que o direito para dar espaço ao coração.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "Plutão ainda é considerado um planeta do sistema solar.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "Plutão foi reclassificado como planeta anão em 2006." },
    { pergunta: "A corrente elétrica é causada pelo movimento de prótons em um condutor.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "A corrente elétrica é causada pelo movimento de elétrons." },
    { pergunta: "A camada mais externa da Terra é chamada de manto.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "A camada mais externa da Terra é a crosta, seguida do manto." },
    { pergunta: "A fotossíntese ocorre nos cloroplastos das células vegetais.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A radiação ultravioleta pode causar mutações no DNA.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "Um eclipse lunar ocorre quando a Lua passa entre a Terra e o Sol.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "Isso descreve um eclipse solar; no eclipse lunar, a Terra está entre o Sol e a Lua." },
    { pergunta: "Os fungos são organismos autótrofos.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "Fungos são heterótrofos, pois obtêm nutrientes de matéria orgânica." },
    { pergunta: "A unidade de medida da frequência é o hertz (Hz).", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "Os cometas são compostos principalmente por gelo e poeira.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "As plantas convertem energia luminosa em energia química durante a respiração celular.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "Esse processo ocorre na fotossíntese, não na respiração celular." },
    { pergunta: "Os glóbulos brancos são responsáveis pela defesa do organismo.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O DNA humano está organizado em 46 cromossomos nas células somáticas.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] }
  ],
  esportes: [
    { pergunta: "O futebol foi criado na Inglaterra.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "Pelé ganhou três Copas do Mundo com a seleção brasileira.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A NBA é a liga profissional de futebol dos Estados Unidos.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "A NBA é a liga profissional de basquete dos Estados Unidos." },
    { pergunta: "Um jogo de vôlei é jogado com três sets obrigatórios.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "Uma partida de vôlei é decidida em melhor de cinco sets." },
    { pergunta: "O esporte conhecido como 'esgrima' é praticado com espadas.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "Cristiano Ronaldo já jogou no Manchester United.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O Brasil já sediou os Jogos Olímpicos.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O tênis é um esporte praticado exclusivamente em duplas.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "O tênis pode ser jogado tanto em simples quanto em duplas." },
    { pergunta: "O golfe é jogado com tacos e bolas pequenas.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O basquete foi inventado por um canadense chamado James Naismith.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A Copa do Mundo de futebol acontece a cada 2 anos.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "A Copa do Mundo de futebol é realizada a cada 4 anos." },
    { pergunta: "A Fórmula 1 é um esporte de automobilismo.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O surfe é um esporte olímpico desde Tóquio 2020.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "Usain Bolt é conhecido como o homem mais rápido do mundo.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O voleibol de praia é jogado com cinco jogadores de cada lado.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "O vôlei de praia é jogado por duplas (2 jogadores de cada lado)." },
    { pergunta: "Neymar começou sua carreira profissional no Santos.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O remo é um esporte aquático olímpico.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O judô foi criado no Japão.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O maratona tem 10 km de distância.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "A maratona tem 42,195 km de distância." },
    { pergunta: "Lionel Messi jogou a maior parte da carreira no Barcelona.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O handebol é jogado com os pés.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "O handebol é jogado com as mãos, como o nome indica." },
    { pergunta: "A ginástica artística é um esporte olímpico.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O Tour de France é uma competição de ciclismo.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O Brasil nunca ganhou medalha olímpica no judô.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "O Brasil já conquistou diversas medalhas olímpicas no judô." },
    { pergunta: "O futebol é o esporte mais praticado do mundo.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "Maradona é considerado um dos maiores jogadores da Argentina.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O Grand Slam de Roland Garros é disputado em quadra de saibro.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O recorde mundial dos 100 metros rasos pertence a Usain Bolt.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O Brasil conquistou sua primeira medalha olímpica no futebol masculino em 2016.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O críquete é o esporte mais popular da Índia.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A ginástica rítmica utiliza fita, arco, bola, maças e corda como aparelhos.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O Super Bowl é a final do campeonato de beisebol dos EUA.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "O Super Bowl é a final do campeonato de futebol americano (NFL)." },
    { pergunta: "O salto triplo é uma modalidade do atletismo.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O Brasil já foi campeão mundial de basquete masculino.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O Ironman é uma competição que envolve natação, ciclismo e corrida.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A Copa Davis é uma competição internacional de tênis por equipes.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O pentatlo moderno inclui esgrima, natação, hipismo, tiro e corrida.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O Brasil já sediou uma Copa do Mundo de Rugby.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "O Brasil nunca sediou uma Copa do Mundo de Rugby." },
    { pergunta: "A Major League Baseball (MLB) é a principal liga de beisebol dos EUA.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O salto com vara exige que o atleta salte sobre uma barra usando uma vara flexível.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O Brasil já conquistou medalha de ouro olímpica no futebol feminino.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "O Brasil já foi prata, mas nunca ouro no futebol feminino olímpico." },
    { pergunta: "O recorde olímpico de medalhas pertence a Simone Biles.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "O recorde pertence a Michael Phelps." },
    { pergunta: "O hóquei sobre grama é um esporte olímpico.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O Brasil já foi campeão mundial de futsal da FIFA.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O All Blacks é o apelido da seleção de rugby da Nova Zelândia.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O badminton é um esporte que se joga com raquetes e uma peteca.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A Copa Libertadores é a principal competição de clubes da América do Sul.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O Tour de France é uma competição de automobilismo.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "O Tour de France é uma competição de ciclismo." },
    { pergunta: "A maratona olímpica tem exatamente 50 km.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "A maratona tem 42,195 km." },
    { pergunta: "O Brasil já foi campeão mundial de vôlei masculino.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A Copa do Mundo de Rugby já foi realizada no Brasil.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "O Brasil nunca sediou a Copa do Mundo de Rugby." },
    { pergunta: "O Grand Slam de Wimbledon é disputado em quadra de grama.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O boxe é um esporte olímpico.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O Brasil já ganhou medalha de ouro olímpica no vôlei de praia.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O futebol americano é o esporte mais popular dos Estados Unidos.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O judô foi criado na China.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "O judô foi criado no Japão." },
    { pergunta: "O Gabriel Medina é campeão mundial de surf.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O Brasil já foi campeão mundial de handebol masculino.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "O Brasil nunca foi campeão mundial de handebol masculino." },
    { pergunta: "A ginástica artística inclui provas de solo, salto e barras.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O críquete é muito popular na Austrália.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A Copa Davis é uma competição de futebol.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "A Copa Davis é uma competição de tênis." },
    { pergunta: "O Brasil já foi campeão mundial de basquete feminino.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O pentatlo moderno inclui tiro com arco.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "Inclui tiro esportivo com pistola, não arco." },
    { pergunta: "A Major League Soccer (MLS) é a principal liga de futebol dos EUA.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O salto em distância é uma prova do atletismo.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O Brasil já sediou a Copa do Mundo de futebol duas vezes.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"], explicacao: "O Brasil sediou em 1950 e 2014." },
    { pergunta: "O rugby é jogado com uma bola oval.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O tênis de mesa é conhecido como pingue-pongue.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O Brasil já ganhou medalha olímpica no basquete feminino.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A Copa do Mundo de futebol feminino foi criada antes da masculina.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "A Copa do Mundo masculina foi criada em 1930 e a feminina em 1991." },
    { pergunta: "O decatlo é uma prova do atletismo composta por dez modalidades diferentes, incluindo salto com vara e lançamento de disco.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] }
  ],
  cultura: [
    { pergunta: "Machado de Assis é um dos maiores escritores da literatura brasileira.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "William Shakespeare foi um dramaturgo inglês.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O Cristo Redentor é uma das sete maravilhas do mundo moderno.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A música clássica é originária da América do Sul.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "A música clássica tem suas raízes na Europa." },
    { pergunta: "Pablo Picasso foi um famoso pintor espanhol.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O Festival de Cannes acontece no Japão.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "O Festival de Cannes acontece na França." },
    { pergunta: "Reggae é um estilo musical originário da Jamaica.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "Harry Potter é uma obra da autora britânica J.K. Rowling.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O tango é uma dança típica da Argentina.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A cultura indígena brasileira não influencia a culinária nacional.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "A cultura indígena tem grande influência na culinária brasileira, como o uso de ingredientes nativos." },
    { pergunta: "A língua portuguesa é falada em mais de 10 países.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "Hollywood é o centro da indústria cinematográfica dos EUA.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "Os Beatles foram uma banda formada nos Estados Unidos.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "Os Beatles foram uma banda britânica formada em Liverpool." },
    { pergunta: "A literatura de cordel é uma manifestação cultural do Norte do Brasil.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "A literatura de cordel é uma manifestação cultural do Nordeste do Brasil." },
    { pergunta: "Carmen Miranda foi uma cantora e atriz brasileira de sucesso internacional.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O Maracatu é uma manifestação cultural de origem africana no Brasil.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A arte barroca teve grande influência no Brasil colonial.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A feitiçaria é um dos temas recorrentes da literatura fantástica.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A mitologia grega influenciou diversas obras artísticas e literárias ocidentais.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A bossa nova nasceu na Argentina.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "A bossa nova é um gênero musical brasileiro, surgido no Rio de Janeiro." },
    { pergunta: "O Museu do Louvre está localizado em Paris.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A Bienal do Livro acontece apenas no exterior.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "A Bienal do Livro acontece em várias cidades, incluindo São Paulo e Rio de Janeiro." },
    { pergunta: "O teatro grego surgiu como uma forma de homenagear os deuses.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A cultura japonesa é conhecida pelo uso de máscaras no teatro Nô.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A cultura popular não se transmite oralmente.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "A cultura popular é frequentemente transmitida oralmente, através de histórias, músicas e tradições." },
    { pergunta: "A música sertaneja surgiu no interior do Brasil.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O Carnaval de Veneza é famoso por suas máscaras elaboradas.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A pizza é originário da França.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "A pizza é originária da Itália." },
    { pergunta: "As festas religiosas têm grande importância na cultura brasileira.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O Festival de Parintins celebra a cultura amazônica.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A cultura africana não influenciou a formação do Brasil.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A MPB significa Música Popular Brasileira.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "Tarsila do Amaral foi uma importante pintora do modernismo brasileiro.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O grafite é uma forma de arte urbana.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O Dia da Consciência Negra homenageia Zumbi dos Palmares.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A literatura brasileira começou no século XX.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "A literatura brasileira tem raízes que remontam ao período colonial." },
    { pergunta: "Os filmes de animação não são considerados arte.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "Os filmes de animação são uma forma de arte reconhecida mundialmente." },
    { pergunta: "A língua inglesa é a única falada na Europa.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "Na Europa, são faladas várias línguas, incluindo francês, alemão, espanhol e italiano." },
    { pergunta: "A arte rupestre é uma das primeiras formas de manifestação artística humana.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O escritor Franz Kafka nasceu na Alemanha.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "Kafka nasceu em Praga, atual República Tcheca." },
    { pergunta: "O fado é um estilo musical tradicional de Portugal.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A peça 'Hamlet' foi escrita por William Shakespeare.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O festival de música Glastonbury acontece na França.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "O festival Glastonbury acontece no Reino Unido." },
    { pergunta: "O escritor Gabriel García Márquez é colombiano.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A ópera 'Carmen' foi composta por Giuseppe Verdi.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "A ópera 'Carmen' foi composta por Georges Bizet." },
    { pergunta: "O Dia dos Mortos é uma celebração tradicional do México.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O escritor Dostoiévski escreveu 'Guerra e Paz'.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "'Guerra e Paz' foi escrito por Liev Tolstói." },
    { pergunta: "O balé clássico surgiu na Itália durante o Renascimento.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O festival Oktoberfest tem origem na Alemanha.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O escritor Jorge Luis Borges nasceu no Chile.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "Borges nasceu na Argentina." },
    { pergunta: "O filme 'Cidadão Kane' é considerado um clássico do cinema mundial.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O escritor italiano Dante Alighieri escreveu 'A Divina Comédia'.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O samba de roda é um patrimônio cultural imaterial da humanidade.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O escritor Albert Camus nasceu na França continental.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "Camus nasceu na Argélia, então colônia francesa." },
    { pergunta: "O festival de cinema de Veneza é o mais antigo do mundo.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A literatura de cordel é tradicionalmente impressa em folhas coloridas.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "A literatura de cordel é tradicionalmente impressa em folhetos de papel simples, geralmente preto e branco." },
    { pergunta: "O escritor José Saramago foi o único autor de língua portuguesa a ganhar o Nobel de Literatura.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O tango argentino foi declarado Patrimônio Cultural Imaterial da Humanidade pela UNESCO.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O escritor Jorge Amado nasceu no estado da Bahia.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O samba-enredo é um gênero musical criado para o Carnaval do Rio de Janeiro.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O Oscar é o principal prêmio do cinema mundial.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "A Capela Sistina foi pintada por Leonardo da Vinci.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "A Capela Sistina foi pintada por Michelangelo." },
    { pergunta: "O escritor Paulo Coelho é autor do livro 'O Alquimista'.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O Modernismo foi um movimento artístico do século XX.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O escritor russo Liev Tolstói escreveu 'Crime e Castigo'.", correta: "Falso", opcoes: ["Verdadeiro", "Falso"], explicacao: "'Crime e Castigo' foi escrito por Fiódor Dostoiévski." },
    { pergunta: "O grafite é considerado uma manifestação da arte urbana.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O escritor Franz Kafka escreveu 'A Metamorfose'.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O samba é um ritmo musical que se desenvolveu no Brasil, com influências africanas.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O escritor José de Alencar escreveu 'Senhora' e 'Iracema'.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O festival de Parintins acontece no estado do Amazonas.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] },
    { pergunta: "O escritor português Eça de Queirós escreveu 'O Primo Basílio'.", correta: "Verdadeiro", opcoes: ["Verdadeiro", "Falso"] }
  ]
};

// Função para mostrar a tela de seleção de temas
function mostrarTemas() {
  ocultarTelas();
  document.getElementById('tela-temas').classList.remove('oculto');
}

// Função para escolher o tema
function escolherTema(tema) {
  temaSelecionado = tema;
  ocultarTelas();
  document.getElementById('tela-tipo-pergunta').classList.remove('oculto'); // Mostra a tela de tipo de pergunta
}

// Função para selecionar 15 perguntas aleatórias com base no tema
function selecionarPerguntasAleatorias() {
  let perguntasSelecionadas = [];
  const bancoAtual = tipoPergunta === 'verdadeiro-falso' ? bancoPerguntasVF : bancoPerguntas; // Escolhe o banco correto

  if (temaSelecionado === 'geral') {
    // Combina todas as perguntas de todos os temas
    const todasPerguntas = Object.values(bancoAtual).flat();
    perguntasSelecionadas = [...todasPerguntas];
  } else {
    perguntasSelecionadas = [...bancoAtual[temaSelecionado]];
  }

  perguntasSelecionadas.sort(() => Math.random() - 0.5); // Embaralha as perguntas
  return perguntasSelecionadas.slice(0, 10); // Seleciona as 10 primeiras
}

// Atualize a função iniciarComCadastro para mostrar a tela de temas
function iniciarComCadastro() {
  const nomeInput = document.getElementById('nome').value.trim();
  const turmaInput = document.getElementById('turma').value.trim();
  if (nomeInput === '' || turmaInput === '') {
      exibirAlerta('Preencha o nome e a turma.');
      return;
  }
  nomeUsuario = nomeInput;
  turmaUsuario = turmaInput;
  mostrarTemas(); // Mostra a tela de seleção de temas
}

// Função para iniciar o quiz
function iniciarQuiz() {
    // Captura o tipo de pergunta selecionado no <select>
    tipoPergunta = document.getElementById('tipo-pergunta').value;

    perguntas = selecionarPerguntasAleatorias(); // Seleciona 10 perguntas aleatórias
    perguntaAtual = 0;
    pontuacao = 0;
    pulosRestantes = 3;
    ocultarTelas();
    document.getElementById('tela-quiz').classList.remove('oculto');
    
    // Mostra nome, turma e tema
    document.getElementById('usuario-info').innerText = `Jogador: ${nomeUsuario} | Turma: ${turmaUsuario} | Tema: ${temaSelecionado.charAt(0).toUpperCase() + temaSelecionado.slice(1)}`;

    mostrarPergunta();
}

// Função para mostrar a pergunta atual
function mostrarPergunta() {
  const perguntaEl = document.getElementById('pergunta');
  const opcoesEl = document.getElementById('opcoes');

  // Adiciona fade-out
  perguntaEl.classList.remove('fade-in');
  opcoesEl.classList.remove('fade-in');
  perguntaEl.classList.add('fade-out');
  opcoesEl.classList.add('fade-out');

  setTimeout(() => {
    perguntaEl.classList.remove('fade-out');
    opcoesEl.classList.remove('fade-out');

    if (perguntaAtual >= perguntas.length) { // Usa o array `perguntas` com 15 perguntas
      mostrarResultado();
      return;
    }

    const p = perguntas[perguntaAtual]; // Obtém a pergunta atual do array `perguntas`
    perguntaEl.innerText = p.pergunta;

    opcoesEl.innerHTML = '';

    // Exibe as opções com base no tipo de pergunta
    if (tipoPergunta === 'verdadeiro-falso') {
      ['Verdadeiro', 'Falso'].forEach(opcao => {
        const btn = document.createElement('button');
        btn.innerText = opcao;
        btn.onclick = () => verificarResposta(opcao);
        opcoesEl.appendChild(btn);
      });
    } else {
      p.opcoes.forEach(opcao => {
        const btn = document.createElement('button');
        btn.innerText = opcao;
        btn.onclick = () => verificarResposta(opcao);
        opcoesEl.appendChild(btn);
      });
    }

    document.getElementById('progresso').innerText = `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;
    document.getElementById('btn-pular').innerText = `Pular Pergunta (${pulosRestantes})`;
    document.getElementById('btn-pular').disabled = pulosRestantes === 0;

    perguntaEl.classList.add('fade-in');
    opcoesEl.classList.add('fade-in');
    setTimeout(() => {
      perguntaEl.classList.remove('fade-in');
      opcoesEl.classList.remove('fade-in');
    }, 400);
  }, 350);
}

// Função para verificar a resposta
function verificarResposta(respostaSelecionada) {
  const p = perguntas[perguntaAtual];
  const botoes = document.querySelectorAll('#opcoes button');
  const opcoesDiv = document.getElementById('opcoes');

  document.getElementById('btn-pular').disabled = true;

  botoes.forEach(btn => {
    btn.disabled = true; // Desativa todos os botões após a resposta

    if (btn.innerText === p.correta) {
      btn.classList.add('correta');
      setTimeout(() => btn.classList.remove('pulse-correta'), 500);
    } else if (btn.innerText === respostaSelecionada) {
      btn.classList.add('errada');
      setTimeout(() => btn.classList.remove('pulse-errada'), 500);
    }
  });

  // Incrementa a pontuação se a resposta estiver correta
  if (respostaSelecionada === p.correta) {
    pontuacao++;
  } else if (p.explicacao) {
    // Exibe a explicação caso o usuário erre
    const explicacao = document.createElement('p');
    explicacao.innerText = `Explicação: ${p.explicacao}`;
    explicacao.style.color = 'white';
    explicacao.style.marginTop = '10px';
    opcoesDiv.appendChild(explicacao);
  }

  // Adiciona o botão "Próxima"
  if (!document.querySelector('.botao-proxima')) {
    const botaoProxima = document.createElement('button');
    botaoProxima.innerText = 'Próxima';
    botaoProxima.classList.add('botao-proxima');
    botaoProxima.style.marginTop = '50px';
    botaoProxima.onclick = () => {
      perguntaAtual++;
      mostrarPergunta();
    };
    opcoesDiv.appendChild(botaoProxima);
  }
}

// Função para mostrar o resultado final
function mostrarResultado() {
    ocultarTelas();
    document.getElementById('tela-resultado').classList.remove('oculto');
    document.getElementById('pontuacao-final').innerText = `Você acertou ${pontuacao} de ${perguntas.length}`;
    let msg = '';
    if (pontuacao >= 8) msg = 'Parabéns!';
    else if (pontuacao >= 5) msg = 'Quase lá!';
    else msg = 'Continue tentando!';
    document.getElementById('mensagem-final').innerText = msg;
    salvarRanking();
}

// Funções auxiliares
function mostrarCadastro() {
    ocultarTelas();
    document.getElementById('tela-cadastro').classList.remove('oculto');
}

function mostrarRanking() {
    ocultarTelas();
    document.getElementById('tela-ranking').classList.remove('oculto');
    carregarRanking();
}

function ocultarTelas() {
    document.querySelectorAll('.tela').forEach(tela => tela.classList.add('oculto'));
}

function reiniciar() {
    perguntas = selecionarPerguntasAleatorias(); // Seleciona novas 15 perguntas
    perguntaAtual = 0;
    pontuacao = 0;
    pulosRestantes = 3;
    ocultarTelas();
    document.getElementById('tela-quiz').classList.remove('oculto');
    mostrarPergunta();
}

function voltarInicio() {
    ocultarTelas();
    document.getElementById('tela-inicial').classList.remove('oculto');
}

function salvarRanking() {
    const ranking = JSON.parse(localStorage.getItem('rankingQuiz') || '[]');
    ranking.push({ nome: nomeUsuario, turma: turmaUsuario, pontuacao });
    localStorage.setItem('rankingQuiz', JSON.stringify(ranking));
}

function carregarRanking() {
    const ranking = JSON.parse(localStorage.getItem('rankingQuiz') || '[]');
    const lista = document.getElementById('lista-ranking');
    lista.innerHTML = '';
    ranking.sort((a, b) => b.pontuacao - a.pontuacao);
    ranking.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerText = `${index + 1}. ${item.nome} (${item.turma}) - ${item.pontuacao} pts`;
        lista.appendChild(li);
    });
}

// Funções para criar e entrar em quizzes personalizados
function mostrarCriarQuiz() {
  ocultarTelas();
  document.getElementById('tela-criar-quiz').classList.remove('oculto');
  document.getElementById('perguntas-criadas').innerHTML = '';
}

function mostrarEntrarQuiz() {
  ocultarTelas();
  document.getElementById('tela-entrar-quiz').classList.remove('oculto');
}

let quizPersonalizado = { titulo: '', perguntas: [] };

function adicionarPergunta() {
  const idx = quizPersonalizado.perguntas.length;
  const div = document.createElement('div');
  div.innerHTML = `
    <input type="text" placeholder="Pergunta" id="pergunta${idx}">
    <input type="text" placeholder="Opção 1" id="op1_${idx}">
    <input type="text" placeholder="Opção 2" id="op2_${idx}">
    <input type="text" placeholder="Opção 3" id="op3_${idx}">
    <input type="text" placeholder="Opção 4" id="op4_${idx}">
    <input type="text" placeholder="Resposta Correta" id="correta_${idx}">
    <hr>
  `;
  document.getElementById('perguntas-criadas').appendChild(div);
  quizPersonalizado.perguntas.push({});
}

function salvarQuizPersonalizado() {
  quizPersonalizado.titulo = document.getElementById('titulo-quiz').value;
  quizPersonalizado.perguntas = [];
  const perguntasDivs = document.querySelectorAll('#perguntas-criadas > div');
  perguntasDivs.forEach((div, idx) => {
    quizPersonalizado.perguntas.push({
      pergunta: div.querySelector(`#pergunta${idx}`).value,
      opcoes: [
        div.querySelector(`#op1_${idx}`).value,
        div.querySelector(`#op2_${idx}`).value,
        div.querySelector(`#op3_${idx}`).value,
        div.querySelector(`#op4_${idx}`).value
      ],
      correta: div.querySelector(`#correta_${idx}`).value
    });
  });
  // Gera um código simples (timestamp)
  const codigo = 'quiz_' + Date.now();
  localStorage.setItem(codigo, JSON.stringify(quizPersonalizado));
  exibirAlerta(`Quiz salvo! Compartilhe este código: ${codigo}`);
  voltarInicio();
}

function carregarQuizPersonalizado() {
  const codigo = document.getElementById('codigo-quiz').value.trim();
  const quiz = localStorage.getItem(codigo);
  if (!quiz) {
    exibirAlerta('Quiz não encontrado!');
    return;
  }
  perguntas = JSON.parse(quiz).perguntas;
  perguntaAtual = 0;
  pontuacao = 0;
  ocultarTelas();
  document.getElementById('tela-quiz').classList.remove('oculto');
  mostrarPergunta();
}

function exibirAlerta(mensagem) {
  const alerta = document.getElementById('alerta');
  alerta.textContent = mensagem;
  alerta.classList.remove('oculto');

  // Ocultar o alerta após 15 segundos
  setTimeout(() => {
    alerta.classList.add('oculto');
  }, 7000);
}

function pularPergunta() {
  if (pulosRestantes > 0) {
    pulosRestantes--;

    // Remove a pergunta atual do array de perguntas já usadas
    const perguntasUsadas = perguntas.map(p => p.pergunta);

    // Seleciona uma nova pergunta que ainda não foi usada
    let bancoAtual = tipoPergunta === 'verdadeiro-falso' ? bancoPerguntasVF : bancoPerguntas;
    let todasPerguntas = temaSelecionado === 'geral'
      ? Object.values(bancoAtual).flat()
      : bancoAtual[temaSelecionado];

    // Filtra perguntas ainda não usadas
    let perguntasDisponiveis = todasPerguntas.filter(p => !perguntasUsadas.includes(p.pergunta));

    if (perguntasDisponiveis.length > 0) {
      // Sorteia uma nova pergunta
      let novaPergunta = perguntasDisponiveis[Math.floor(Math.random() * perguntasDisponiveis.length)];
      // Substitui a pergunta atual pela nova
      perguntas[perguntaAtual] = novaPergunta;
      // Exibe a nova pergunta (sem avançar no índice)
      mostrarPergunta();
    } else {
      // Se não houver mais perguntas disponíveis, apenas avança
      perguntaAtual++;
      if (perguntaAtual < perguntas.length) {
        mostrarPergunta();
      } else {
        mostrarResultado();
      }
    }
  }
}