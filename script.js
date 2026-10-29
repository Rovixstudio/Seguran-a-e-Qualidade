/* Pit Stop da Qualidade e Segurança — Milhão
   Aplicação local: HTML + CSS + JavaScript + localStorage.
   Observação: os dados ficam apenas neste navegador/dispositivo.
*/
"use strict";

const STORAGE_KEY = "pitStopMilhao_v1";
const TIMER_SECONDS = 25;
const AVATARS = ["👷","👷‍♀️","⛑️","🚧","🏗️","🧤"];
const QUESTIONS = [
  {
    "id": 1,
    "q": "Para que serve o EPI indicado para uma atividade?",
    "category": "Segurança e Qualidade",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 0,
    "options": [
      "Reduzir a exposição do trabalhador aos riscos identificados.",
      "Permitir executar a tarefa sem avaliar os perigos.",
      "Substituir todas as medidas de proteção coletiva.",
      "Dispensar treinamento quando o equipamento é novo."
    ],
    "explanation": "Reduzir a exposição do trabalhador aos riscos identificados."
  },
  {
    "id": 2,
    "q": "O que conferir antes de colocar um capacete de segurança?",
    "category": "Segurança e Qualidade",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 1,
    "options": [
      "Somente a cor e o logotipo do capacete.",
      "Casco, suspensão, ajuste e sinais de dano.",
      "Apenas se a jugular está guardada no armário.",
      "Se o capacete combina com o uniforme."
    ],
    "explanation": "Casco, suspensão, ajuste e sinais de dano."
  },
  {
    "id": 3,
    "q": "Você encontra uma luva rasgada durante o trabalho. O que fazer?",
    "category": "Segurança e Qualidade",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 1,
    "options": [
      "Guardar a luva para outra pessoa avaliar depois.",
      "Parar o uso e solicitar uma luva adequada em boas condições.",
      "Usar a luva rasgada até o fim do turno.",
      "Cobrir o rasgo com fita e continuar normalmente."
    ],
    "explanation": "Parar o uso e solicitar uma luva adequada em boas condições."
  },
  {
    "id": 4,
    "q": "Como higienizar um EPI reutilizável?",
    "category": "Segurança e Qualidade",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 1,
    "options": [
      "Usar qualquer solvente disponível no setor.",
      "Seguir as orientações do fabricante e o procedimento local.",
      "Lavar sempre com água muito quente, sem consultar instruções.",
      "Misturar produtos de limpeza para acelerar a higienização."
    ],
    "explanation": "Seguir as orientações do fabricante e o procedimento local."
  },
  {
    "id": 5,
    "q": "Por que não se deve usar produto de limpeza não autorizado no EPI?",
    "category": "Segurança e Qualidade",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 1,
    "options": [
      "Porque a aparência do EPI não pode mudar nunca.",
      "Ele pode danificar o material e reduzir a proteção.",
      "Porque qualquer limpeza é proibida em EPI reutilizável.",
      "Ele sempre deixa o equipamento mais resistente."
    ],
    "explanation": "Ele pode danificar o material e reduzir a proteção."
  },
  {
    "id": 6,
    "q": "Onde guardar o EPI depois do uso?",
    "category": "Segurança e Qualidade",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 0,
    "options": [
      "Em local limpo, seco e definido para esse equipamento.",
      "Em qualquer local, desde que fique fora da vista.",
      "Dentro do armário junto com alimentos e bebidas.",
      "No chão, perto da máquina utilizada."
    ],
    "explanation": "Em local limpo, seco e definido para esse equipamento."
  },
  {
    "id": 7,
    "q": "Um EPI foi atingido por produto químico. Qual é a atitude inicial?",
    "category": "Segurança e Qualidade",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 2,
    "options": [
      "Voltar a usá-lo se não houver mudança de cor.",
      "Enxugar rapidamente e entregar para outro colega.",
      "Evitar contato, separar o item e seguir o procedimento específico.",
      "Cheirar o material para identificar o produto."
    ],
    "explanation": "Evitar contato, separar o item e seguir o procedimento específico."
  },
  {
    "id": 8,
    "q": "Por que protetores auriculares de uso pessoal não devem ser compartilhados sem controle?",
    "category": "Segurança e Qualidade",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 1,
    "options": [
      "Porque o compartilhamento muda a cor do protetor.",
      "Podem transferir contaminantes e não se ajustar corretamente a outra pessoa.",
      "Porque todo protetor auricular é descartável após um uso.",
      "Porque o protetor só funciona quando fica guardado."
    ],
    "explanation": "Podem transferir contaminantes e não se ajustar corretamente a outra pessoa."
  },
  {
    "id": 9,
    "q": "O que fazer se o protetor auricular estiver incompleto ou danificado?",
    "category": "Segurança e Qualidade",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 2,
    "options": [
      "Usá-lo por pouco tempo e compensar falando mais baixo.",
      "Completar a peça com material improvisado.",
      "Substituí-lo antes de entrar na área com exposição a ruído.",
      "Entrar na área e pedir outro apenas no intervalo."
    ],
    "explanation": "Substituí-lo antes de entrar na área com exposição a ruído."
  },
  {
    "id": 10,
    "q": "Quando é necessário usar proteção ocular?",
    "category": "Segurança e Qualidade",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 0,
    "options": [
      "Quando a avaliação da tarefa indicar risco aos olhos ou houver exigência do procedimento.",
      "Somente quando o supervisor estiver observando.",
      "Só depois que partículas forem vistas no ar.",
      "Apenas em atividades realizadas ao ar livre."
    ],
    "explanation": "Quando a avaliação da tarefa indicar risco aos olhos ou houver exigência do procedimento."
  },
  {
    "id": 11,
    "q": "Qual é a finalidade de manter as mãos higienizadas?",
    "category": "Segurança e Qualidade",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 1,
    "options": [
      "Evitar que seja preciso seguir o procedimento de higiene.",
      "Reduzir a transferência de sujeira e contaminantes entre pessoas, produtos e superfícies.",
      "Substituir a limpeza de ferramentas e bancadas.",
      "Eliminar a necessidade de usar luvas quando exigidas."
    ],
    "explanation": "Reduzir a transferência de sujeira e contaminantes entre pessoas, produtos e superfícies."
  },
  {
    "id": 12,
    "q": "Você vai mudar de uma atividade suja para uma etapa limpa. O que fazer com as luvas?",
    "category": "Segurança e Qualidade",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 2,
    "options": [
      "Manter as mesmas luvas para economizar material.",
      "Limpar as luvas na roupa e continuar.",
      "Seguir a troca ou higienização prevista para a nova atividade.",
      "Trocar apenas se alguém perceber sujeira visível."
    ],
    "explanation": "Seguir a troca ou higienização prevista para a nova atividade."
  },
  {
    "id": 13,
    "q": "Por que o uniforme de trabalho deve estar em boas condições?",
    "category": "Segurança e Qualidade",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 1,
    "options": [
      "Para permitir guardar ferramentas nos bolsos sem limite.",
      "Para apoiar a higiene, a identificação e a segurança durante a tarefa.",
      "Porque roupas danificadas nunca precisam ser comunicadas.",
      "Porque o uniforme substitui todos os EPIs."
    ],
    "explanation": "Para apoiar a higiene, a identificação e a segurança durante a tarefa."
  },
  {
    "id": 14,
    "q": "Uma manga do uniforme está desfiando perto de equipamento móvel. Qual é a melhor ação?",
    "category": "Segurança e Qualidade",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 2,
    "options": [
      "Esperar o tecido se soltar para registrar a ocorrência.",
      "Dobrar a manga e seguir sem comunicar ninguém.",
      "Afastar-se do risco e providenciar a correção ou troca antes de continuar.",
      "Prender o tecido com um grampo e aproximar-se da máquina."
    ],
    "explanation": "Afastar-se do risco e providenciar a correção ou troca antes de continuar."
  },
  {
    "id": 15,
    "q": "Por que o cabelo deve ficar totalmente protegido quando a área exige touca?",
    "category": "Segurança e Qualidade",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 3,
    "options": [
      "Para que a touca possa ser usada por várias pessoas sem troca.",
      "Para substituir a inspeção do produto acabado.",
      "Para dispensar a limpeza da área ao final do turno.",
      "Para evitar que fios caiam no produto ou entrem em equipamentos."
    ],
    "explanation": "Para evitar que fios caiam no produto ou entrem em equipamentos."
  },
  {
    "id": 16,
    "q": "Você encontra um fragmento de luva no chão perto de um equipamento. O que fazer?",
    "category": "Segurança e Qualidade",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 1,
    "options": [
      "Ignorar se o fragmento parecer pequeno.",
      "Sinalizar e comunicar, recolher conforme o procedimento e avaliar possível contaminação.",
      "Empurrar o fragmento para debaixo do equipamento.",
      "Colocá-lo sobre a bancada para alguém notar depois."
    ],
    "explanation": "Sinalizar e comunicar, recolher conforme o procedimento e avaliar possível contaminação."
  },
  {
    "id": 17,
    "q": "O que fazer ao notar um líquido derramado no corredor?",
    "category": "Segurança e Qualidade",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 1,
    "options": [
      "Passar por cima com cuidado e deixar para o próximo turno.",
      "Sinalizar e acionar a limpeza conforme o procedimento, evitando a passagem pelo local.",
      "Esperar que o líquido seque sozinho.",
      "Cobrir o líquido com papel e não avisar ninguém."
    ],
    "explanation": "Sinalizar e acionar a limpeza conforme o procedimento, evitando a passagem pelo local."
  },
  {
    "id": 18,
    "q": "Por que manter corredores e saídas desobstruídos?",
    "category": "Segurança e Qualidade",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 1,
    "options": [
      "Para facilitar o armazenamento temporário de materiais.",
      "Para permitir circulação segura e saída rápida em uma emergência.",
      "Para que os carrinhos possam ficar estacionados durante o turno.",
      "Porque materiais no corredor não interferem na evacuação."
    ],
    "explanation": "Para permitir circulação segura e saída rápida em uma emergência."
  },
  {
    "id": 19,
    "q": "Ao identificar um cabo elétrico danificado, qual deve ser a conduta?",
    "category": "Segurança e Qualidade",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 3,
    "options": [
      "Mover o cabo com a mão molhada para longe da passagem.",
      "Enrolar fita comum e testar o equipamento imediatamente.",
      "Continuar usando se o aparelho ainda ligar.",
      "Não utilizar, isolar a situação com segurança e comunicar a área responsável."
    ],
    "explanation": "Não utilizar, isolar a situação com segurança e comunicar a área responsável."
  },
  {
    "id": 20,
    "q": "Antes de iniciar uma tarefa não rotineira, o que deve ser feito?",
    "category": "Segurança e Qualidade",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 1,
    "options": [
      "Começar logo e consultar o procedimento se surgir um problema.",
      "Entender os riscos, as medidas de controle e as autorizações necessárias.",
      "Copiar a forma como alguém fez uma tarefa diferente.",
      "Pular a conversa de segurança quando a tarefa parecer rápida."
    ],
    "explanation": "Entender os riscos, as medidas de controle e as autorizações necessárias."
  },
  {
    "id": 21,
    "q": "Para que serve uma análise preliminar de risco?",
    "category": "Segurança e Qualidade",
    "difficulty": "Média",
    "points": 20,
    "correct": 1,
    "options": [
      "Substituir a necessidade de observar as condições reais.",
      "Identificar perigos e definir controles antes do início da atividade.",
      "Autorizar automaticamente qualquer método de trabalho.",
      "Registrar apenas o nome dos participantes da equipe."
    ],
    "explanation": "Identificar perigos e definir controles antes do início da atividade."
  },
  {
    "id": 22,
    "q": "Se uma proteção de máquina estiver removida, o que fazer?",
    "category": "Segurança e Qualidade",
    "difficulty": "Média",
    "points": 20,
    "correct": 2,
    "options": [
      "Operar devagar para reduzir o risco.",
      "Remover outra proteção para facilitar o acesso.",
      "Não operar e comunicar para que a proteção seja restabelecida e verificada.",
      "Pedir a um colega que observe enquanto a máquina funciona."
    ],
    "explanation": "Não operar e comunicar para que a proteção seja restabelecida e verificada."
  },
  {
    "id": 23,
    "q": "Qual é a atitude correta diante de um quase acidente?",
    "category": "Segurança e Qualidade",
    "difficulty": "Média",
    "points": 20,
    "correct": 2,
    "options": [
      "Não relatar porque ninguém se machucou.",
      "Comentar apenas informalmente, sem informar a liderança.",
      "Comunicar e registrar conforme o processo para prevenir uma ocorrência real.",
      "Esperar que o mesmo fato aconteça novamente."
    ],
    "explanation": "Comunicar e registrar conforme o processo para prevenir uma ocorrência real."
  },
  {
    "id": 24,
    "q": "Ao ouvir o alarme de emergência, como agir?",
    "category": "Segurança e Qualidade",
    "difficulty": "Média",
    "points": 20,
    "correct": 1,
    "options": [
      "Usar o elevador para sair mais rápido, independentemente do plano.",
      "Seguir o plano de emergência e as orientações de abandono ou resposta.",
      "Terminar a tarefa antes de verificar o alarme.",
      "Voltar ao posto para buscar objetos pessoais."
    ],
    "explanation": "Seguir o plano de emergência e as orientações de abandono ou resposta."
  },
  {
    "id": 25,
    "q": "Como escolher a ferramenta para uma tarefa?",
    "category": "Segurança e Qualidade",
    "difficulty": "Média",
    "points": 20,
    "correct": 2,
    "options": [
      "Escolher a que estiver mais perto, mesmo que improvisada.",
      "Usar qualquer ferramenta se a tarefa durar pouco.",
      "Usar ferramenta apropriada, íntegra e prevista para o serviço.",
      "Adaptar uma ferramenta danificada sem autorização."
    ],
    "explanation": "Usar ferramenta apropriada, íntegra e prevista para o serviço."
  },
  {
    "id": 26,
    "q": "O que fazer antes de movimentar uma carga manualmente?",
    "category": "Segurança e Qualidade",
    "difficulty": "Média",
    "points": 20,
    "correct": 0,
    "options": [
      "Avaliar peso, pega, percurso e necessidade de ajuda ou recurso mecânico.",
      "Carregar a carga na altura do rosto para enxergar por baixo.",
      "Levantar de uma vez para evitar perder tempo.",
      "Girar o tronco enquanto levanta para mudar de direção."
    ],
    "explanation": "Avaliar peso, pega, percurso e necessidade de ajuda ou recurso mecânico."
  },
  {
    "id": 27,
    "q": "Por que é importante manter postura adequada ao levantar uma carga?",
    "category": "Segurança e Qualidade",
    "difficulty": "Média",
    "points": 20,
    "correct": 1,
    "options": [
      "Elimina a necessidade de avaliar o peso da carga.",
      "Ajuda a reduzir sobrecarga e lesões musculoesqueléticas.",
      "Serve apenas para deixar o movimento visualmente correto.",
      "Garante que qualquer peso possa ser levantado sozinho."
    ],
    "explanation": "Ajuda a reduzir sobrecarga e lesões musculoesqueléticas."
  },
  {
    "id": 28,
    "q": "O que fazer ao perceber cheiro forte ou vazamento de produto químico?",
    "category": "Segurança e Qualidade",
    "difficulty": "Média",
    "points": 20,
    "correct": 0,
    "options": [
      "Afastar-se conforme o risco, alertar a equipe e seguir o plano de resposta.",
      "Tentar identificar o produto cheirando de perto.",
      "Limpar sem consultar a ficha de segurança.",
      "Ligar e desligar equipamentos na área sem avaliar o risco."
    ],
    "explanation": "Afastar-se conforme o risco, alertar a equipe e seguir o plano de resposta."
  },
  {
    "id": 29,
    "q": "Qual documento ajuda a consultar perigos e cuidados de um produto químico?",
    "category": "Segurança e Qualidade",
    "difficulty": "Média",
    "points": 20,
    "correct": 0,
    "options": [
      "A Ficha com Dados de Segurança (FDS) do produto.",
      "A lista de aniversariantes do setor.",
      "A etiqueta de patrimônio do equipamento usado.",
      "O relatório mensal de produção, sem informações químicas."
    ],
    "explanation": "A Ficha com Dados de Segurança (FDS) do produto."
  },
  {
    "id": 30,
    "q": "Como devem ser identificados recipientes com produtos químicos?",
    "category": "Segurança e Qualidade",
    "difficulty": "Média",
    "points": 20,
    "correct": 0,
    "options": [
      "Com identificação legível e conforme o padrão aplicável.",
      "Com uma etiqueta reaproveitada de outro produto.",
      "Com apelidos conhecidos apenas pela equipe.",
      "Sem rótulo quando o recipiente é pequeno."
    ],
    "explanation": "Com identificação legível e conforme o padrão aplicável."
  },
  {
    "id": 31,
    "q": "Por que não misturar produtos químicos sem autorização?",
    "category": "Segurança e Qualidade",
    "difficulty": "Média",
    "points": 20,
    "correct": 1,
    "options": [
      "Porque produtos diferentes nunca podem ficar na mesma sala.",
      "A mistura pode gerar reação perigosa ou liberar gases nocivos.",
      "Porque a mistura sempre perde a cor original.",
      "Porque a mistura elimina a necessidade de consultar a FDS."
    ],
    "explanation": "A mistura pode gerar reação perigosa ou liberar gases nocivos."
  },
  {
    "id": 32,
    "q": "O que é uma contaminação física em um produto?",
    "category": "Segurança e Qualidade",
    "difficulty": "Média",
    "points": 20,
    "correct": 2,
    "options": [
      "Variação normal no horário de produção.",
      "Mudança de preço registrada no sistema.",
      "Presença indesejada de material estranho, como metal, plástico ou fragmentos.",
      "Atraso no preenchimento de uma planilha."
    ],
    "explanation": "Presença indesejada de material estranho, como metal, plástico ou fragmentos."
  },
  {
    "id": 33,
    "q": "Se encontrar um corpo estranho no produto ou na linha, o que fazer?",
    "category": "Segurança e Qualidade",
    "difficulty": "Média",
    "points": 20,
    "correct": 2,
    "options": [
      "Misturar o lote com outro para diluir o problema.",
      "Guardar o fragmento no bolso e comentar depois.",
      "Interromper ou conter conforme o procedimento, informar a Qualidade e preservar a evidência.",
      "Retirar o fragmento e liberar tudo sem registrar."
    ],
    "explanation": "Interromper ou conter conforme o procedimento, informar a Qualidade e preservar a evidência."
  },
  {
    "id": 34,
    "q": "Por que seguir a sequência correta de produção?",
    "category": "Segurança e Qualidade",
    "difficulty": "Média",
    "points": 20,
    "correct": 2,
    "options": [
      "Porque a sequência substitui a inspeção de qualidade.",
      "Para evitar registrar os parâmetros de processo.",
      "Para manter a consistência do processo e evitar erros ou contaminação cruzada.",
      "Para permitir que cada pessoa escolha a própria sequência."
    ],
    "explanation": "Para manter a consistência do processo e evitar erros ou contaminação cruzada."
  },
  {
    "id": 35,
    "q": "O que fazer se uma medição ficar fora do limite especificado?",
    "category": "Segurança e Qualidade",
    "difficulty": "Média",
    "points": 20,
    "correct": 0,
    "options": [
      "Seguir o plano de reação, comunicar o responsável e registrar o resultado real.",
      "Repetir até conseguir um valor aceitável e descartar os anteriores.",
      "Alterar o valor registrado para que fique dentro do limite.",
      "Ignorar a medição se a diferença parecer pequena."
    ],
    "explanation": "Seguir o plano de reação, comunicar o responsável e registrar o resultado real."
  },
  {
    "id": 36,
    "q": "Por que registrar dados de produção com exatidão?",
    "category": "Segurança e Qualidade",
    "difficulty": "Média",
    "points": 20,
    "correct": 2,
    "options": [
      "Para substituir a verificação do produto.",
      "Para que os registros pareçam uniformes mesmo sem medição.",
      "Para garantir rastreabilidade e apoiar decisões confiáveis sobre o processo.",
      "Para preencher espaço nos formulários do setor."
    ],
    "explanation": "Para garantir rastreabilidade e apoiar decisões confiáveis sobre o processo."
  },
  {
    "id": 37,
    "q": "O que fazer quando uma etiqueta de identificação está ilegível?",
    "category": "Segurança e Qualidade",
    "difficulty": "Média",
    "points": 20,
    "correct": 3,
    "options": [
      "Deixar sem identificação se o operador reconhecer o material.",
      "Copiar o código do item que estiver mais próximo.",
      "Tentar adivinhar o conteúdo pela embalagem.",
      "Separar ou identificar conforme procedimento e solicitar correção antes de seguir."
    ],
    "explanation": "Separar ou identificar conforme procedimento e solicitar correção antes de seguir."
  },
  {
    "id": 38,
    "q": "Qual é a finalidade da rastreabilidade de um lote?",
    "category": "Segurança e Qualidade",
    "difficulty": "Média",
    "points": 20,
    "correct": 1,
    "options": [
      "Evitar que o lote precise passar por inspeções.",
      "Permitir identificar origem, histórico e destino do material quando necessário.",
      "Substituir a identificação das matérias-primas.",
      "Garantir que o produto nunca tenha defeitos."
    ],
    "explanation": "Permitir identificar origem, histórico e destino do material quando necessário."
  },
  {
    "id": 39,
    "q": "O que fazer ao detectar produto não conforme?",
    "category": "Segurança e Qualidade",
    "difficulty": "Difícil",
    "points": 30,
    "correct": 3,
    "options": [
      "Enviar para expedição se o defeito for difícil de notar.",
      "Corrigir a etiqueta sem verificar o produto.",
      "Misturar com produto aprovado para reduzir a quantidade afetada.",
      "Identificar e segregar conforme procedimento, comunicar e aguardar a disposição definida."
    ],
    "explanation": "Identificar e segregar conforme procedimento, comunicar e aguardar a disposição definida."
  },
  {
    "id": 40,
    "q": "Por que limpar a linha entre produtos diferentes quando previsto?",
    "category": "Segurança e Qualidade",
    "difficulty": "Difícil",
    "points": 30,
    "correct": 1,
    "options": [
      "Para dispensar a inspeção antes da próxima produção.",
      "Para reduzir o risco de mistura ou contaminação cruzada.",
      "Para aumentar a velocidade sem verificar o resultado.",
      "Para permitir reutilizar resíduos no lote seguinte sem avaliação."
    ],
    "explanation": "Para reduzir o risco de mistura ou contaminação cruzada."
  },
  {
    "id": 41,
    "q": "O que significa seguir um procedimento operacional?",
    "category": "Segurança e Qualidade",
    "difficulty": "Difícil",
    "points": 30,
    "correct": 1,
    "options": [
      "Usar o documento apenas quando há auditoria.",
      "Executar as etapas aprovadas e comunicar quando houver desvio ou dúvida.",
      "Seguir somente as partes que parecem necessárias.",
      "Fazer a tarefa do jeito mais rápido, mesmo mudando etapas."
    ],
    "explanation": "Executar as etapas aprovadas e comunicar quando houver desvio ou dúvida."
  },
  {
    "id": 42,
    "q": "Se uma instrução estiver desatualizada ou confusa, o que fazer?",
    "category": "Segurança e Qualidade",
    "difficulty": "Difícil",
    "points": 30,
    "correct": 3,
    "options": [
      "Continuar com base apenas na memória.",
      "Escolher a versão mais fácil de encontrar.",
      "Editar o documento por conta própria sem aprovação.",
      "Confirmar a orientação vigente com o responsável antes de prosseguir."
    ],
    "explanation": "Confirmar a orientação vigente com o responsável antes de prosseguir."
  },
  {
    "id": 43,
    "q": "Qual atitude ajuda a evitar erros de identificação de materiais?",
    "category": "Segurança e Qualidade",
    "difficulty": "Difícil",
    "points": 30,
    "correct": 3,
    "options": [
      "Confiar somente na cor da embalagem.",
      "Pular a conferência quando o pedido for urgente.",
      "Usar a posição do material na prateleira como identificação.",
      "Conferir código, descrição e lote nos pontos previstos do processo."
    ],
    "explanation": "Conferir código, descrição e lote nos pontos previstos do processo."
  },
  {
    "id": 44,
    "q": "O que fazer se uma balança ou instrumento estiver com calibração vencida?",
    "category": "Segurança e Qualidade",
    "difficulty": "Difícil",
    "points": 30,
    "correct": 3,
    "options": [
      "Ajustar o resultado manualmente com base na experiência.",
      "Usar normalmente se o visor estiver aceso.",
      "Usá-lo apenas para medições que não serão registradas.",
      "Identificar e não usar para liberar produto até orientação da área responsável."
    ],
    "explanation": "Identificar e não usar para liberar produto até orientação da área responsável."
  },
  {
    "id": 45,
    "q": "Por que é importante fazer a passagem de turno com informações claras?",
    "category": "Segurança e Qualidade",
    "difficulty": "Difícil",
    "points": 30,
    "correct": 3,
    "options": [
      "Para evitar registrar ocorrências no sistema.",
      "Para que o próximo turno descubra sozinho o que aconteceu.",
      "Para transferir toda a responsabilidade sem explicar a situação.",
      "Para que pendências, riscos e condições do processo não sejam perdidos."
    ],
    "explanation": "Para que pendências, riscos e condições do processo não sejam perdidos."
  },
  {
    "id": 46,
    "q": "Qual é a melhor resposta ao perceber que cometeu um erro de processo?",
    "category": "Segurança e Qualidade",
    "difficulty": "Difícil",
    "points": 30,
    "correct": 3,
    "options": [
      "Corrigir silenciosamente sem avaliar o material afetado.",
      "Esperar o fechamento do mês para comunicar.",
      "Apagar o registro antes que alguém veja.",
      "Informar prontamente, conter possíveis impactos e seguir o fluxo de correção."
    ],
    "explanation": "Informar prontamente, conter possíveis impactos e seguir o fluxo de correção."
  },
  {
    "id": 47,
    "q": "Por que separar resíduos conforme a identificação e o procedimento?",
    "category": "Segurança e Qualidade",
    "difficulty": "Difícil",
    "points": 30,
    "correct": 0,
    "options": [
      "Para permitir destinação adequada e reduzir riscos de mistura ou exposição.",
      "Para reaproveitar qualquer resíduo sem avaliação.",
      "Para eliminar a necessidade de identificar os recipientes.",
      "Para colocar todos os resíduos no recipiente mais próximo."
    ],
    "explanation": "Para permitir destinação adequada e reduzir riscos de mistura ou exposição."
  },
  {
    "id": 48,
    "q": "Como deve ser feita a comunicação de um risco observado?",
    "category": "Segurança e Qualidade",
    "difficulty": "Difícil",
    "points": 30,
    "correct": 1,
    "options": [
      "Avisar somente colegas que não podem tomar providências.",
      "Informar de forma objetiva o local, a condição e o risco ao responsável definido.",
      "Esperar a reunião mensal mesmo se o risco for imediato.",
      "Publicar apenas uma mensagem vaga sem indicar onde ocorreu."
    ],
    "explanation": "Informar de forma objetiva o local, a condição e o risco ao responsável definido."
  },
  {
    "id": 49,
    "q": "Por que participar dos treinamentos de segurança e qualidade?",
    "category": "Segurança e Qualidade",
    "difficulty": "Difícil",
    "points": 30,
    "correct": 1,
    "options": [
      "Para dispensar o uso de equipamentos de proteção.",
      "Para conhecer os riscos, os padrões de trabalho e como agir diante de desvios.",
      "Para substituir a leitura de qualquer instrução de trabalho.",
      "Para receber autorização automática para todas as tarefas."
    ],
    "explanation": "Para conhecer os riscos, os padrões de trabalho e como agir diante de desvios."
  },
  {
    "id": 50,
    "q": "O que fazer se não tiver certeza sobre a condição de liberação de um produto?",
    "category": "Segurança e Qualidade",
    "difficulty": "Difícil",
    "points": 30,
    "correct": 1,
    "options": [
      "Pedir que o cliente decida após receber o material.",
      "Manter o produto identificado e consultar a área responsável antes de liberar.",
      "Liberar se a aparência estiver normal.",
      "Alterar o status para evitar atraso no indicador."
    ],
    "explanation": "Manter o produto identificado e consultar a área responsável antes de liberar."
  },
  {
    "id": 51,
    "q": "Como identificar um produto químico antes de utilizá-lo?",
    "category": "Segurança e Qualidade",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 1,
    "options": [
      "Transferir para uma embalagem menor sem identificação.",
      "Conferir o rótulo e a FDS para verificar identificação e perigos.",
      "Perguntar informalmente a um colega e usar se ele reconhecer o recipiente.",
      "Escolher pelo cheiro para descobrir qual produto está dentro."
    ],
    "explanation": "Conferir o rótulo e a FDS para verificar identificação e perigos."
  },
  {
    "id": 52,
    "q": "Ao encontrar uma embalagem sem rótulo, qual atitude é adequada?",
    "category": "Segurança e Qualidade",
    "difficulty": "Média",
    "points": 10,
    "correct": 0,
    "options": [
      "Separar o recipiente e comunicar a liderança para identificação segura.",
      "Usar uma pequena quantidade para tentar reconhecer o conteúdo.",
      "Escrever um nome provável com base na cor do líquido.",
      "Deixar a embalagem na área até alguém solicitar."
    ],
    "explanation": "Separar o recipiente e comunicar a liderança para identificação segura."
  },
  {
    "id": 53,
    "q": "O que fazer ao perceber um vazamento pequeno de produto químico?",
    "category": "Segurança e Qualidade",
    "difficulty": "Difícil",
    "points": 10,
    "correct": 3,
    "options": [
      "Lavar imediatamente com água, independentemente do produto.",
      "Cobrir com papel e continuar a operação ao redor.",
      "Empurrar o líquido para o ralo mais próximo.",
      "Sinalizar e seguir o procedimento de resposta a vazamentos, avisando a equipe responsável."
    ],
    "explanation": "Sinalizar e seguir o procedimento de resposta a vazamentos, avisando a equipe responsável."
  },
  {
    "id": 54,
    "q": "Qual cuidado ajuda a evitar contaminação cruzada na produção?",
    "category": "Segurança e Qualidade",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 2,
    "options": [
      "Limpar somente quando houver sujeira visível.",
      "Misturar materiais restantes para evitar descarte.",
      "Higienizar mãos e utensílios ao mudar de produto ou etapa.",
      "Usar o mesmo utensílio durante todo o turno para ganhar tempo."
    ],
    "explanation": "Higienizar mãos e utensílios ao mudar de produto ou etapa."
  },
  {
    "id": 55,
    "q": "Ao identificar matéria-prima fora da validade, o que fazer?",
    "category": "Segurança e Qualidade",
    "difficulty": "Média",
    "points": 10,
    "correct": 1,
    "options": [
      "Misturar com lote válido para diluir o problema.",
      "Identificar, segregar e comunicar a Qualidade antes de qualquer uso.",
      "Usar primeiro para não perder o material.",
      "Alterar a etiqueta para a data de recebimento."
    ],
    "explanation": "Identificar, segregar e comunicar a Qualidade antes de qualquer uso."
  },
  {
    "id": 56,
    "q": "Por que conferir a identificação do lote durante o processo?",
    "category": "Segurança e Qualidade",
    "difficulty": "Difícil",
    "points": 10,
    "correct": 0,
    "options": [
      "Garantir rastreabilidade e evitar troca entre materiais.",
      "Apenas preencher espaço no formulário de produção.",
      "Substituir a inspeção visual do produto acabado.",
      "Permitir que lotes diferentes sejam misturados sem registro."
    ],
    "explanation": "Garantir rastreabilidade e evitar troca entre materiais."
  },
  {
    "id": 57,
    "q": "O que fazer se uma máquina apresentar ruído diferente do habitual?",
    "category": "Segurança e Qualidade",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 3,
    "options": [
      "Aumentar a velocidade para terminar antes que piore.",
      "Colocar protetor auricular mais forte e ignorar a alteração.",
      "Bater na carcaça para verificar se o ruído desaparece.",
      "Interromper conforme procedimento e solicitar avaliação da manutenção."
    ],
    "explanation": "Interromper conforme procedimento e solicitar avaliação da manutenção."
  },
  {
    "id": 58,
    "q": "Antes de limpar um equipamento, qual verificação é essencial?",
    "category": "Segurança e Qualidade",
    "difficulty": "Média",
    "points": 10,
    "correct": 2,
    "options": [
      "Retirar apenas a proteção que estiver atrapalhando o acesso.",
      "Pedir a um colega para observar enquanto limpa energizado.",
      "Confirmar o desligamento e o controle das fontes de energia conforme procedimento.",
      "Aguardar alguns segundos e iniciar com a máquina em movimento lento."
    ],
    "explanation": "Confirmar o desligamento e o controle das fontes de energia conforme procedimento."
  },
  {
    "id": 59,
    "q": "Qual é a conduta correta ao encontrar um piso molhado?",
    "category": "Segurança e Qualidade",
    "difficulty": "Difícil",
    "points": 10,
    "correct": 1,
    "options": [
      "Esperar a água secar naturalmente, mesmo em passagem movimentada.",
      "Sinalizar e providenciar a limpeza conforme o procedimento.",
      "Passar rapidamente para evitar que outras pessoas percebam.",
      "Cobrir a área com papelão sem sinalizar."
    ],
    "explanation": "Sinalizar e providenciar a limpeza conforme o procedimento."
  },
  {
    "id": 60,
    "q": "Como agir ao observar uma saída de emergência obstruída?",
    "category": "Segurança e Qualidade",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 0,
    "options": [
      "Desobstruir se for seguro e comunicar o responsável pela área.",
      "Deixar o material ali até o fim do expediente.",
      "Usar outra saída e não registrar a condição.",
      "Mover os objetos apenas quando houver simulado."
    ],
    "explanation": "Desobstruir se for seguro e comunicar o responsável pela área."
  },
  {
    "id": 61,
    "q": "Qual atitude reduz o risco ao movimentar uma carga manualmente?",
    "category": "Segurança e Qualidade",
    "difficulty": "Média",
    "points": 10,
    "correct": 3,
    "options": [
      "Girar o tronco com a carga para mudar de direção rapidamente.",
      "Segurar a carga longe do corpo para enxergar o caminho.",
      "Levantar de uma vez para reduzir o tempo de esforço.",
      "Avaliar peso e pega, manter postura adequada e pedir ajuda quando necessário."
    ],
    "explanation": "Avaliar peso e pega, manter postura adequada e pedir ajuda quando necessário."
  },
  {
    "id": 62,
    "q": "O que verificar antes de utilizar uma escada portátil?",
    "category": "Segurança e Qualidade",
    "difficulty": "Difícil",
    "points": 10,
    "correct": 2,
    "options": [
      "Se outro trabalhador consegue segurá-la, mesmo danificada.",
      "Apenas se alcança a altura desejada.",
      "Condições dos degraus, sapatas, travas e posicionamento estável.",
      "Se a escada combina com a cor do local de trabalho."
    ],
    "explanation": "Condições dos degraus, sapatas, travas e posicionamento estável."
  },
  {
    "id": 63,
    "q": "Ao perceber uma proteção de máquina solta, qual deve ser a ação?",
    "category": "Segurança e Qualidade",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 1,
    "options": [
      "Continuar usando com cuidado redobrado.",
      "Não operar e comunicar para correção antes de retomar o uso.",
      "Apertar com qualquer ferramenta disponível enquanto funciona.",
      "Retirar a proteção para evitar vibração."
    ],
    "explanation": "Não operar e comunicar para correção antes de retomar o uso."
  },
  {
    "id": 64,
    "q": "Por que manter ferramentas organizadas após o uso?",
    "category": "Segurança e Qualidade",
    "difficulty": "Média",
    "points": 10,
    "correct": 0,
    "options": [
      "Evitar quedas, danos e perda de tempo na próxima atividade.",
      "Deixar a bancada cheia para mostrar produtividade.",
      "Facilitar que qualquer pessoa pegue ferramentas sem controle.",
      "Dispensar inspeções periódicas dos equipamentos."
    ],
    "explanation": "Evitar quedas, danos e perda de tempo na próxima atividade."
  },
  {
    "id": 65,
    "q": "Qual informação deve constar em um registro de inspeção?",
    "category": "Segurança e Qualidade",
    "difficulty": "Difícil",
    "points": 10,
    "correct": 3,
    "options": [
      "Somente a palavra “ok” em todos os campos.",
      "A opinião pessoal sem descrever o item verificado.",
      "Apenas o nome do setor, sem indicar o equipamento.",
      "Condição observada, data, responsável e ação necessária."
    ],
    "explanation": "Condição observada, data, responsável e ação necessária."
  },
  {
    "id": 66,
    "q": "O que fazer quando um resultado de medição está fora do padrão?",
    "category": "Segurança e Qualidade",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 2,
    "options": [
      "Apagar a medição e repetir até obter resultado favorável.",
      "Liberar o produto sem informar a ocorrência.",
      "Registrar o valor real e comunicar para avaliação e tratativa.",
      "Ajustar o número até ficar dentro do limite."
    ],
    "explanation": "Registrar o valor real e comunicar para avaliação e tratativa."
  },
  {
    "id": 67,
    "q": "Qual é a finalidade de uma amostra de retenção?",
    "category": "Segurança e Qualidade",
    "difficulty": "Média",
    "points": 10,
    "correct": 1,
    "options": [
      "Evitar a identificação do lote no estoque.",
      "Permitir consulta futura sobre as características do lote produzido.",
      "Substituir todos os controles durante a fabricação.",
      "Ser utilizada como material de limpeza da linha."
    ],
    "explanation": "Permitir consulta futura sobre as características do lote produzido."
  },
  {
    "id": 68,
    "q": "Como evitar troca de etiquetas entre produtos?",
    "category": "Segurança e Qualidade",
    "difficulty": "Difícil",
    "points": 10,
    "correct": 0,
    "options": [
      "Conferir código, descrição e lote antes de aplicar cada etiqueta.",
      "Deixar todas as etiquetas soltas sobre a bancada.",
      "Aplicar primeiro e conferir somente no fim do turno.",
      "Usar a etiqueta do lote anterior quando forem produtos parecidos."
    ],
    "explanation": "Conferir código, descrição e lote antes de aplicar cada etiqueta."
  },
  {
    "id": 69,
    "q": "O que fazer ao encontrar um corpo estranho próximo à linha de produção?",
    "category": "Segurança e Qualidade",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 3,
    "options": [
      "Retirar discretamente e continuar sem verificar o produto.",
      "Guardar o objeto no bolso para mostrar depois.",
      "Empurrar o fragmento para baixo do equipamento.",
      "Proteger a área, comunicar a Qualidade e avaliar possível contaminação."
    ],
    "explanation": "Proteger a área, comunicar a Qualidade e avaliar possível contaminação."
  },
  {
    "id": 70,
    "q": "Por que utensílios de limpeza devem ser identificados por área?",
    "category": "Segurança e Qualidade",
    "difficulty": "Média",
    "points": 10,
    "correct": 2,
    "options": [
      "Permitir que todos usem o mesmo utensílio em qualquer setor.",
      "Eliminar a necessidade de higienização após o uso.",
      "Evitar que sejam levados a locais incompatíveis e provoquem contaminação.",
      "Facilitar a escolha pela aparência mais nova."
    ],
    "explanation": "Evitar que sejam levados a locais incompatíveis e provoquem contaminação."
  },
  {
    "id": 71,
    "q": "Qual é a atitude adequada ao notar embalagem danificada no recebimento?",
    "category": "Segurança e Qualidade",
    "difficulty": "Difícil",
    "points": 20,
    "correct": 1,
    "options": [
      "Descartar a embalagem sem registrar a ocorrência.",
      "Segregar a unidade e solicitar avaliação antes de liberar o material.",
      "Colocar a embalagem no fundo do estoque para não aparecer.",
      "Reforçar com fita e encaminhar diretamente à produção."
    ],
    "explanation": "Segregar a unidade e solicitar avaliação antes de liberar o material."
  },
  {
    "id": 72,
    "q": "O que significa seguir o procedimento operacional padrão?",
    "category": "Segurança e Qualidade",
    "difficulty": "Fácil",
    "points": 20,
    "correct": 0,
    "options": [
      "Executar as etapas aprovadas e comunicar quando houver necessidade de revisão.",
      "Fazer do jeito mais rápido, mesmo que diferente do documento.",
      "Seguir somente as etapas que cada pessoa considera importantes.",
      "Usar o procedimento apenas durante auditorias."
    ],
    "explanation": "Executar as etapas aprovadas e comunicar quando houver necessidade de revisão."
  },
  {
    "id": 73,
    "q": "Ao identificar divergência entre a ordem de produção e o material, o que fazer?",
    "category": "Segurança e Qualidade",
    "difficulty": "Média",
    "points": 20,
    "correct": 3,
    "options": [
      "Escolher o material visualmente mais parecido.",
      "Corrigir a ordem por conta própria depois da produção.",
      "Misturar os dois materiais para não atrasar.",
      "Pausar a utilização e confirmar a informação com o responsável."
    ],
    "explanation": "Pausar a utilização e confirmar a informação com o responsável."
  },
  {
    "id": 74,
    "q": "Por que registrar quase acidentes?",
    "category": "Segurança e Qualidade",
    "difficulty": "Difícil",
    "points": 20,
    "correct": 2,
    "options": [
      "É necessário somente quando há afastamento.",
      "Substitui a manutenção preventiva.",
      "Permite identificar causas e prevenir ocorrências com lesões.",
      "Serve apenas para apontar quem estava trabalhando."
    ],
    "explanation": "Permite identificar causas e prevenir ocorrências com lesões."
  },
  {
    "id": 75,
    "q": "O que fazer se um colega apresentar mal-estar durante a atividade?",
    "category": "Segurança e Qualidade",
    "difficulty": "Fácil",
    "points": 20,
    "correct": 1,
    "options": [
      "Ignorar se não houver ferimento aparente.",
      "Comunicar a liderança e acionar o atendimento previsto no local.",
      "Oferecer medicamento por conta própria e manter a tarefa.",
      "Pedir que termine a atividade antes de descansar."
    ],
    "explanation": "Comunicar a liderança e acionar o atendimento previsto no local."
  },
  {
    "id": 76,
    "q": "Qual cuidado é importante ao trabalhar em área com empilhadeiras?",
    "category": "Segurança e Qualidade",
    "difficulty": "Média",
    "points": 20,
    "correct": 0,
    "options": [
      "Utilizar rotas de pedestres e manter contato visual com o operador quando necessário.",
      "Passar atrás do equipamento porque a carga impede a visão do operador.",
      "Caminhar sob os garfos quando estiverem elevados.",
      "Usar o celular para avisar que está atravessando."
    ],
    "explanation": "Utilizar rotas de pedestres e manter contato visual com o operador quando necessário."
  },
  {
    "id": 77,
    "q": "Como deve ser feita a comunicação de uma condição insegura?",
    "category": "Segurança e Qualidade",
    "difficulty": "Difícil",
    "points": 20,
    "correct": 3,
    "options": [
      "Enviar mensagem vaga sem dizer onde está o problema.",
      "Comentar apenas com colegas sem acionar o canal adequado.",
      "Esperar que outra pessoa faça o registro.",
      "Informar local, risco observado e situação para que seja tratada."
    ],
    "explanation": "Informar local, risco observado e situação para que seja tratada."
  },
  {
    "id": 78,
    "q": "Qual é a função do bloqueio e etiquetagem de energia?",
    "category": "Segurança e Qualidade",
    "difficulty": "Fácil",
    "points": 20,
    "correct": 2,
    "options": [
      "Aumentar a velocidade de partida do equipamento.",
      "Substituir a capacitação de quem executa o serviço.",
      "Impedir acionamento inesperado durante intervenção ou manutenção.",
      "Identificar quem é o dono da máquina."
    ],
    "explanation": "Impedir acionamento inesperado durante intervenção ou manutenção."
  },
  {
    "id": 79,
    "q": "O que fazer ao perceber que o extintor está sem acesso livre?",
    "category": "Segurança e Qualidade",
    "difficulty": "Média",
    "points": 20,
    "correct": 1,
    "options": [
      "Retirar a sinalização para abrir espaço.",
      "Liberar o acesso e comunicar a condição ao responsável.",
      "Mover o extintor para um local escondido e seguro.",
      "Deixar caixas na frente se houver outro extintor distante."
    ],
    "explanation": "Liberar o acesso e comunicar a condição ao responsável."
  },
  {
    "id": 80,
    "q": "Qual cuidado deve ser tomado ao descartar resíduos?",
    "category": "Segurança e Qualidade",
    "difficulty": "Difícil",
    "points": 20,
    "correct": 0,
    "options": [
      "Separar conforme identificação e regras de descarte da área.",
      "Colocar tudo no recipiente mais próximo.",
      "Misturar resíduos químicos com recicláveis secos.",
      "Deixar sacos ao lado das lixeiras quando estiverem cheias."
    ],
    "explanation": "Separar conforme identificação e regras de descarte da área."
  },
  {
    "id": 81,
    "q": "Por que verificar a integridade das luvas antes da tarefa?",
    "category": "Segurança e Qualidade",
    "difficulty": "Fácil",
    "points": 20,
    "correct": 3,
    "options": [
      "Garantir que tenham a mesma cor das demais.",
      "Evitar a necessidade de lavar as mãos depois.",
      "Permitir o uso da mesma luva em tarefas incompatíveis.",
      "Confirmar que oferecem proteção adequada e não apresentam rasgos."
    ],
    "explanation": "Confirmar que oferecem proteção adequada e não apresentam rasgos."
  },
  {
    "id": 82,
    "q": "Ao encontrar um fragmento de luva no piso perto do equipamento, o que fazer?",
    "category": "Segurança e Qualidade",
    "difficulty": "Média",
    "points": 20,
    "correct": 2,
    "options": [
      "Deixar no chão para identificar de qual luva se soltou depois.",
      "Jogar no equipamento para que seja levado junto com o produto.",
      "Sinalizar, recolher conforme procedimento e avaliar risco de contaminação.",
      "Chutar para longe da passagem e retomar a atividade."
    ],
    "explanation": "Sinalizar, recolher conforme procedimento e avaliar risco de contaminação."
  },
  {
    "id": 83,
    "q": "Qual prática é adequada para armazenar produtos de limpeza?",
    "category": "Segurança e Qualidade",
    "difficulty": "Difícil",
    "points": 20,
    "correct": 1,
    "options": [
      "Deixar recipientes abertos para facilitar o acesso.",
      "Manter identificados e em local definido, separados de materiais incompatíveis.",
      "Guardar em garrafas de bebidas para facilitar o transporte.",
      "Colocar junto de matérias-primas sem avaliar compatibilidade."
    ],
    "explanation": "Manter identificados e em local definido, separados de materiais incompatíveis."
  },
  {
    "id": 84,
    "q": "O que fazer quando a touca não cobre completamente os cabelos?",
    "category": "Segurança e Qualidade",
    "difficulty": "Fácil",
    "points": 20,
    "correct": 0,
    "options": [
      "Ajustar ou substituir a touca antes de entrar na área controlada.",
      "Prender o cabelo e entrar sem conferir a cobertura.",
      "Usar a touca apenas na parte superior da cabeça.",
      "Cobrir somente se houver inspeção naquele dia."
    ],
    "explanation": "Ajustar ou substituir a touca antes de entrar na área controlada."
  },
  {
    "id": 85,
    "q": "Qual atitude é correta ao notar manga do uniforme desfiando?",
    "category": "Segurança e Qualidade",
    "difficulty": "Média",
    "points": 20,
    "correct": 3,
    "options": [
      "Cortar a ponta e continuar sem avaliar o uniforme.",
      "Prender a manga com fita comum e não informar.",
      "Dobrar a manga para dentro durante toda a operação.",
      "Solicitar troca ou correção para evitar risco de contaminação ou enroscamento."
    ],
    "explanation": "Solicitar troca ou correção para evitar risco de contaminação ou enroscamento."
  },
  {
    "id": 86,
    "q": "Por que não se deve compartilhar a mesma luva entre atividades diferentes?",
    "category": "Segurança e Qualidade",
    "difficulty": "Difícil",
    "points": 20,
    "correct": 2,
    "options": [
      "Porque cada trabalhador deve usar uma marca diferente.",
      "Porque a luva compartilhada dificulta o controle de estoque apenas.",
      "Porque pode transferir sujeira ou contaminantes entre tarefas e áreas.",
      "Porque as luvas perdem a cor quando trocadas de setor."
    ],
    "explanation": "Porque pode transferir sujeira ou contaminantes entre tarefas e áreas."
  },
  {
    "id": 87,
    "q": "Qual é a melhor forma de confirmar que uma instrução foi compreendida?",
    "category": "Segurança e Qualidade",
    "difficulty": "Fácil",
    "points": 20,
    "correct": 1,
    "options": [
      "Considerar o silêncio como confirmação de entendimento.",
      "Repetir os pontos principais e esclarecer dúvidas antes de iniciar.",
      "Perguntar apenas se todos ouviram o aviso.",
      "Entregar o documento sem explicar as etapas críticas."
    ],
    "explanation": "Repetir os pontos principais e esclarecer dúvidas antes de iniciar."
  },
  {
    "id": 88,
    "q": "O que fazer se o equipamento de proteção estiver com tamanho inadequado?",
    "category": "Segurança e Qualidade",
    "difficulty": "Média",
    "points": 20,
    "correct": 0,
    "options": [
      "Solicitar o tamanho correto antes de executar a atividade.",
      "Ajustar com improvisos para conseguir trabalhar.",
      "Compartilhar com outro trabalhador durante a tarefa.",
      "Retirar o equipamento se estiver desconfortável."
    ],
    "explanation": "Solicitar o tamanho correto antes de executar a atividade."
  },
  {
    "id": 89,
    "q": "Qual cuidado evita acidentes com cabos e mangueiras no piso?",
    "category": "Segurança e Qualidade",
    "difficulty": "Difícil",
    "points": 20,
    "correct": 3,
    "options": [
      "Esticar os cabos atravessando corredores sem sinalização.",
      "Cobrir com tapete solto para esconder a passagem.",
      "Deixar enrolados junto à saída de emergência.",
      "Organizar o trajeto e proteger ou elevar os cabos conforme orientação."
    ],
    "explanation": "Organizar o trajeto e proteger ou elevar os cabos conforme orientação."
  },
  {
    "id": 90,
    "q": "Ao perceber uma peça com rebarba ou borda cortante, como agir?",
    "category": "Segurança e Qualidade",
    "difficulty": "Fácil",
    "points": 20,
    "correct": 2,
    "options": [
      "Lixar sem autorização e sem proteção adequada.",
      "Passar a peça adiante sem avisar.",
      "Identificar a peça e solicitar tratamento ou substituição antes do manuseio.",
      "Segurar com força para evitar que deslize."
    ],
    "explanation": "Identificar a peça e solicitar tratamento ou substituição antes do manuseio."
  },
  {
    "id": 91,
    "q": "Por que realizar conferência de quantidade no recebimento?",
    "category": "Segurança e Qualidade",
    "difficulty": "Média",
    "points": 30,
    "correct": 1,
    "options": [
      "Substituir a verificação da identificação dos produtos.",
      "Verificar se o material entregue corresponde ao documento e ao pedido.",
      "Apenas estimar o volume para liberar o caminhão rapidamente.",
      "Evitar que o estoque precise atualizar seus registros."
    ],
    "explanation": "Verificar se o material entregue corresponde ao documento e ao pedido."
  },
  {
    "id": 92,
    "q": "O que fazer se um produto acabado apresentar embalagem mal selada?",
    "category": "Segurança e Qualidade",
    "difficulty": "Difícil",
    "points": 30,
    "correct": 0,
    "options": [
      "Segregar a unidade e encaminhar para avaliação da Qualidade.",
      "Pressionar a embalagem e liberar se parecer firme.",
      "Colocar outra etiqueta por cima da falha.",
      "Misturar com unidades aprovadas na mesma caixa."
    ],
    "explanation": "Segregar a unidade e encaminhar para avaliação da Qualidade."
  },
  {
    "id": 93,
    "q": "Qual atitude ajuda a manter a área de trabalho limpa?",
    "category": "Segurança e Qualidade",
    "difficulty": "Fácil",
    "points": 30,
    "correct": 3,
    "options": [
      "Acumular materiais até a limpeza geral semanal.",
      "Guardar panos usados em qualquer bancada vazia.",
      "Var rer os resíduos para debaixo das máquinas.",
      "Retirar resíduos durante a rotina e respeitar os locais de descarte."
    ],
    "explanation": "Retirar resíduos durante a rotina e respeitar os locais de descarte."
  },
  {
    "id": 94,
    "q": "Ao receber uma alteração de processo, o que deve ser feito?",
    "category": "Segurança e Qualidade",
    "difficulty": "Média",
    "points": 30,
    "correct": 2,
    "options": [
      "Aplicar somente a parte da mudança que parece mais fácil.",
      "Repassar a informação verbalmente sem conferir o conteúdo.",
      "Confirmar a versão válida da instrução e orientar os envolvidos.",
      "Continuar usando a cópia antiga até acabar o lote."
    ],
    "explanation": "Confirmar a versão válida da instrução e orientar os envolvidos."
  },
  {
    "id": 95,
    "q": "Qual é o objetivo de uma auditoria interna?",
    "category": "Segurança e Qualidade",
    "difficulty": "Difícil",
    "points": 30,
    "correct": 1,
    "options": [
      "Substituir a rotina de inspeção dos operadores.",
      "Verificar conformidade e identificar oportunidades de melhoria.",
      "Encontrar culpados por qualquer desvio observado.",
      "Interromper definitivamente atividades que tenham registros."
    ],
    "explanation": "Verificar conformidade e identificar oportunidades de melhoria."
  },
  {
    "id": 96,
    "q": "O que fazer ao encontrar um instrumento de medição sem identificação de calibração?",
    "category": "Segurança e Qualidade",
    "difficulty": "Fácil",
    "points": 30,
    "correct": 0,
    "options": [
      "Não utilizar até confirmar sua condição com o responsável.",
      "Usar se a leitura parecer próxima do esperado.",
      "Colocar uma etiqueta com a data atual sem verificar.",
      "Comparar com outro instrumento qualquer e liberar."
    ],
    "explanation": "Não utilizar até confirmar sua condição com o responsável."
  },
  {
    "id": 97,
    "q": "Como agir quando uma instrução de trabalho parece desatualizada?",
    "category": "Segurança e Qualidade",
    "difficulty": "Média",
    "points": 30,
    "correct": 3,
    "options": [
      "Editar o documento impresso e distribuir cópias.",
      "Ignorar o documento e orientar cada colega de um jeito.",
      "Usar a versão que tiver mais páginas.",
      "Comunicar o responsável e confirmar qual versão deve ser seguida."
    ],
    "explanation": "Comunicar o responsável e confirmar qual versão deve ser seguida."
  },
  {
    "id": 98,
    "q": "Por que é importante manter alimentos e bebidas fora da área produtiva quando proibido?",
    "category": "Segurança e Qualidade",
    "difficulty": "Difícil",
    "points": 30,
    "correct": 2,
    "options": [
      "Facilitar a contagem dos materiais de produção.",
      "Evitar que os recipientes ocupem espaço no armário.",
      "Evitar contaminação e cumprir as regras de higiene do processo.",
      "Reduzir o consumo de água durante o expediente."
    ],
    "explanation": "Evitar contaminação e cumprir as regras de higiene do processo."
  },
  {
    "id": 99,
    "q": "O que fazer se a iluminação estiver insuficiente para uma inspeção?",
    "category": "Segurança e Qualidade",
    "difficulty": "Fácil",
    "points": 30,
    "correct": 1,
    "options": [
      "Registrar a inspeção como concluída e revisar depois.",
      "Solicitar condição adequada antes de concluir a verificação.",
      "Aprovar o item usando apenas a memória visual.",
      "Aproximar o rosto do equipamento sem avaliar riscos."
    ],
    "explanation": "Solicitar condição adequada antes de concluir a verificação."
  },
  {
    "id": 100,
    "q": "Qual é a conduta correta ao encontrar material sem identificação no estoque?",
    "category": "Segurança e Qualidade",
    "difficulty": "Média",
    "points": 30,
    "correct": 0,
    "options": [
      "Manter separado e solicitar identificação antes de movimentar ou utilizar.",
      "Assumir que pertence ao lote mais próximo.",
      "Colocar no primeiro endereço vazio disponível.",
      "Utilizar o material e corrigir o cadastro depois."
    ],
    "explanation": "Manter separado e solicitar identificação antes de movimentar ou utilizar."
  }
]

const $ = (id) => document.getElementById(id);
const screens = ["homeScreen","registerScreen","gameScreen","questionScreen","rankingScreen"];
let state = loadState();
let currentPlayerId = null;
let currentQuestionHouse = null;
let timerInterval = null;
let timerDeadline = null;
let timeLeft = TIMER_SECONDS;
let answerLocked = false;
let toastTimeout = null;

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {version:1, participants:[], activeId:null};
    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.participants)) throw new Error("Dados inválidos");
    return {version:1, participants:parsed.participants, activeId:parsed.activeId || null};
  } catch (error) {
    console.warn("Não foi possível ler os dados salvos; iniciando um estado vazio.", error);
    return {version:1, participants:[], activeId:null};
  }
}
function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
  catch (error) { showToast("Não foi possível salvar. Verifique o espaço disponível no navegador."); console.error(error); }
}
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}
function shuffle(array) {
  const a = array.slice();
  for (let i=a.length-1; i>0; i--) {
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}
function makeParticipant(name, sector, avatar) {
  const sequence = shuffle(QUESTIONS.map(q => q.id));
  return {
    id: (crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`),
    name:name.trim(), sector:sector.trim(), avatar,
    sequence, answers:{}, score:0, correctCount:0, answeredCount:0,
    status:"em andamento", elimination:null, createdAt:Date.now(), completedAt:null
  };
}
function getPlayer() { return state.participants.find(p => p.id === currentPlayerId) || null; }
function questionFor(player, house) {
  const qid = player.sequence[house-1];
  return QUESTIONS.find(q => q.id === qid);
}
function showScreen(id) {
  stopTimer();
  screens.forEach(s => $(s).classList.toggle("hidden", s !== id));
  window.scrollTo({top:0, behavior:"smooth"});
  if (id === "homeScreen") renderHome();
  if (id === "rankingScreen") renderRanking();
  if (id === "gameScreen") renderGame();
}
function showToast(message) {
  const toast=$("toast"); toast.textContent=message; toast.classList.remove("hidden");
  clearTimeout(toastTimeout); toastTimeout=setTimeout(()=>toast.classList.add("hidden"),2600);
}
function renderHome() {
  const top = sortedParticipants().slice(0,4);
  $("quickRankingList").innerHTML = top.length ? top.map((p,i)=>`
    <div class="quick-row"><span class="quick-score">#${i+1}</span><span class="avatar">${p.avatar}</span>
      <span class="q-name"><b>${escapeHTML(p.name)}</b><small>${escapeHTML(p.sector)} · ${escapeHTML(p.status)}</small></span>
      <strong class="quick-score">${p.score} pts</strong></div>`).join("") : '<p class="muted">Ainda não há participantes. Seja o primeiro!</p>';
}
function sortedParticipants() {
  const statusOrder = {"concluído":0,"eliminado":1,"em andamento":2};
  return state.participants.slice().sort((a,b) =>
    b.score-a.score || b.correctCount-a.correctCount ||
    a.createdAt-b.createdAt || a.name.localeCompare(b.name,"pt-BR") ||
    a.id.localeCompare(b.id));
}
function renderRanking() {
  const list=sortedParticipants();
  $("rankingCount").textContent=`${list.length} participante${list.length===1?"":"s"}`;
  $("rankingBody").innerHTML = list.length ? list.map((p,i)=>`
    <tr><td class="rank-number">#${i+1}</td>
    <td><div class="participant-cell"><span class="avatar">${p.avatar}</span><span>${escapeHTML(p.name)}</span></div></td>
    <td>${escapeHTML(p.sector)}</td><td class="score-cell">${p.score}</td>
    <td>${p.correctCount}</td><td>${p.answeredCount}/100</td>
    <td><span class="status ${p.status==="eliminado"?"status-eliminated":p.status==="concluído"?"status-completed":"status-active"}">${escapeHTML(p.status)}</span></td></tr>`).join("") : '<tr><td colspan="7" class="empty-cell">Ainda não há resultados.</td></tr>';
}
function renderGame() {
  const p=getPlayer(); if (!p) { showScreen("homeScreen"); return; }
  $("playerLine").textContent=`${p.avatar} ${p.name} · ${p.sector}`;
  $("scoreValue").textContent=p.score;
  $("correctValue").textContent=p.correctCount;
  $("answeredValue").textContent=`${p.answeredCount}/100`;
  const progress=Math.round(p.answeredCount);
  $("progressValue").textContent=`${progress}%`;
  $("progressBar").style.width=`${progress}%`;
  const eliminated=p.status==="eliminado";
  const completed=p.status==="concluído";
  $("eliminationBanner").classList.toggle("hidden",!eliminated);
  $("completionBanner").classList.toggle("hidden",!completed);
  if (eliminated) $("eliminationBanner").textContent=`Rodada encerrada — ${p.elimination?.reason==="tempo"?"tempo esgotado":"resposta incorreta"}. Você mantém ${p.score} pontos e não pode responder a outras casas nesta rodada.`;
  if (completed) $("completionBanner").textContent=`Parabéns! Você concluiu as 100 perguntas com ${p.score} pontos e ${p.correctCount} acertos.`;
  $("gameBoard").innerHTML=p.sequence.map((qid,index)=>{
    const house=index+1, result=p.answers[house];
    let cls="house";
    if(result) cls+=result.correct?" correct-house":" wrong-house";
    else if(eliminated || completed) cls+=" locked-house";
    else cls+=" available-house";
    if(currentQuestionHouse===house) cls+=" current-house";
    const disabled=!!result||eliminated||completed;
    return `<button class="${cls}" data-house="${house}" ${disabled?"disabled":""} aria-label="Casa ${house}${result?(result.correct?", respondida corretamente":", respondida incorretamente"):disabled?", bloqueada":", disponível"}">${house}</button>`;
  }).join("");
  $("gameBoard").querySelectorAll("[data-house]").forEach(btn=>btn.addEventListener("click",()=>openQuestion(Number(btn.dataset.house))));
}
function openQuestion(house) {
  const p=getPlayer(); if(!p || p.status!=="em andamento" || p.answers[house]) return;
  currentQuestionHouse=house; answerLocked=false;
  const q=questionFor(p,house);
  if(!q) { showToast("Não foi possível carregar esta pergunta."); return; }
  // A ordem das alternativas é embaralhada por tentativa e a identidade correta acompanha o texto.
  const options=shuffle(q.options.map((text,index)=>({text, correct:index===q.correct})));
  currentQuestionHouse=house;
  $("questionCount").textContent=`CASA ${String(house).padStart(2,"0")} / 100`;
  $("questionCategory").textContent=q.category;
  $("questionDifficulty").textContent=`${q.difficulty.toUpperCase()} • ${q.points} PONTOS`;
  $("questionDifficulty").className=`difficulty-tag ${q.difficulty==="Média"?"medium":q.difficulty==="Difícil"?"hard":""}`;
  $("questionText").textContent=q.q;
  $("questionPoints").innerHTML=`${q.points} <small>PTS</small>`;
  $("answerFeedback").className="answer-feedback hidden";
  $("answerFeedback").innerHTML="";
  $("continueButton").classList.add("hidden");
  $("answerOptions").innerHTML=options.map((o,i)=>`<button class="answer-option" data-option="${i}"><span class="option-letter">${String.fromCharCode(65+i)}</span><span>${escapeHTML(o.text)}</span></button>`).join("");
  $("answerOptions").querySelectorAll("[data-option]").forEach((btn,i)=>btn.addEventListener("click",()=>submitAnswer(options[i].correct,options[i],q)));
  $("timerToggle").checked=true;
  showScreen("questionScreen");
  startTimer();
}
function startTimer() {
  stopTimer(); timeLeft=TIMER_SECONDS; answerLocked=false;
  $("timerValue").textContent=timeLeft; $("timerRing").classList.remove("urgent");
  if (!$("timerToggle").checked) { $("timerNote").textContent="Cronômetro desativado para esta pergunta."; return; }
  timerDeadline=Date.now()+TIMER_SECONDS*1000;
  timerInterval=setInterval(()=>{
    if(answerLocked) return;
    timeLeft=Math.max(0,Math.ceil((timerDeadline-Date.now())/1000));
    $("timerValue").textContent=timeLeft;
    $("timerRing").classList.toggle("urgent",timeLeft<=4);
    if(timeLeft<=0) handleTimeout();
  },100);
}
function stopTimer() { if(timerInterval){clearInterval(timerInterval);timerInterval=null;} timerDeadline=null; }
function submitAnswer(isCorrect, selectedOption, q) {
  if(answerLocked) return;
  answerLocked=true; stopTimer();
  const p=getPlayer(); if(!p || p.status!=="em andamento") return;
  const house=currentQuestionHouse;
  const buttons=[...$("answerOptions").querySelectorAll("button")];
  buttons.forEach((btn,i)=>{
    btn.disabled=true;
    const label=btn.querySelector(".option-letter").textContent.charCodeAt(0)-65;
    // Recalcula pela alternativa visual (texto selecionado/correto), sem depender do índice original.
    const text=btn.querySelector("span:last-child").textContent;
    if(text===q.options[q.correct]) btn.classList.add("correct-answer");
    if(btn===buttons.find(b=>b.querySelector("span:last-child").textContent===selectedOption.text) && !isCorrect) btn.classList.add("wrong-answer");
  });
  p.answeredCount++;
  if(isCorrect) {
    p.score+=q.points; p.correctCount++;
    p.answers[house]={correct:true,points:q.points,questionId:q.id,reason:"acerto",at:Date.now()};
    showFeedback(true,`Resposta correta! +${q.points} pontos.`,q);
  } else {
    p.answers[house]={correct:false,points:0,questionId:q.id,reason:"erro",at:Date.now()};
    p.status="eliminado"; p.elimination={reason:"erro",house,at:Date.now()};
    showFeedback(false,"Resposta incorreta. Você foi eliminado desta rodada.",q);
  }
  if(p.answeredCount>=100 && p.status==="em andamento"){p.status="concluído";p.completedAt=Date.now();}
  saveState(); $("continueButton").classList.remove("hidden"); $("continueButton").textContent=p.status==="eliminado"?"Ver resultado no tabuleiro →":"Continuar →";
  $("timerNote").textContent=isCorrect?"Boa! Continue com atenção.":"Rodada encerrada.";
}
function handleTimeout() {
  if(answerLocked) return;
  answerLocked=true; stopTimer();
  const p=getPlayer(); if(!p || p.status!=="em andamento") return;
  const house=currentQuestionHouse, q=questionFor(p,house);
  p.answeredCount++; p.answers[house]={correct:false,points:0,questionId:q.id,reason:"tempo",at:Date.now()};
  p.status="eliminado"; p.elimination={reason:"tempo",house,at:Date.now()};
  $("answerOptions").querySelectorAll("button").forEach(btn=>{
    btn.disabled=true;
    const text=btn.querySelector("span:last-child").textContent;
    if(text===q.options[q.correct]) btn.classList.add("correct-answer");
  });
  showFeedback(false,"Tempo esgotado! Você foi eliminado desta rodada.",q);
  $("timerNote").textContent="Tempo esgotado.";
  $("continueButton").classList.remove("hidden"); $("continueButton").textContent="Ver resultado no tabuleiro →";
  saveState();
}
function showFeedback(success,title,q) {
  const box=$("answerFeedback");
  box.className=`answer-feedback ${success?"success":"failure"}`;
  box.innerHTML=`<strong>${escapeHTML(title)}</strong><span>Resposta correta: ${escapeHTML(q.options[q.correct])}</span><p>${escapeHTML(q.explanation)}</p>`;
}
function continueToBoard() {
  const p=getPlayer(); currentQuestionHouse=null;
  if(p && p.status==="em andamento" && p.answeredCount>=100){p.status="concluído";p.completedAt=Date.now();saveState();}
  showScreen("gameScreen");
}
function registerParticipant(event) {
  event.preventDefault();
  const name=$("participantName").value.trim(),sector=$("participantSector").value.trim();
  const avatar=document.querySelector('input[name="avatar"]:checked')?.value || AVATARS[0];
  if(!name||!sector){showToast("Preencha nome e setor.");return;}
  const existing=state.participants.find(p=>p.name.toLocaleLowerCase("pt-BR")===name.toLocaleLowerCase("pt-BR")&&p.sector.toLocaleLowerCase("pt-BR")===sector.toLocaleLowerCase("pt-BR")&&p.status==="em andamento");
  if(existing){
    currentPlayerId=existing.id; state.activeId=existing.id; saveState();
    showToast("Partida em andamento encontrada. Vamos continuar!");
  } else {
    const p=makeParticipant(name,sector,avatar);
    state.participants.push(p); currentPlayerId=p.id; state.activeId=p.id; saveState();
  }
  showScreen("gameScreen");
}
function goToRegister() {
  $("registerForm").reset();
  document.querySelectorAll(".avatar-choice").forEach(el=>el.classList.toggle("selected",el.querySelector("input").checked));
  showScreen("registerScreen");
}
function switchParticipant() { currentPlayerId=null; state.activeId=null; saveState(); goToRegister(); }
function resetRanking() {
  const ok=window.confirm("Tem certeza de que deseja zerar o ranking? Todos os participantes, pontuações e progressos salvos neste navegador serão apagados.");
  if(!ok) return;
  state={version:1,participants:[],activeId:null};currentPlayerId=null;currentQuestionHouse=null;saveState();showScreen("rankingScreen");showToast("Ranking zerado.");
}
function init() {
  $("startButton").addEventListener("click",goToRegister);
  $("heroRanking").addEventListener("click",()=>showScreen("rankingScreen"));
  $("navRanking").addEventListener("click",()=>showScreen("rankingScreen"));
  $("quickSeeAll").addEventListener("click",()=>showScreen("rankingScreen"));
  $("navHome").addEventListener("click",()=>showScreen("homeScreen"));
  const teamTrigger = $("teamTrigger");
  const teamPopover = $("teamPopover");
  teamTrigger.addEventListener("click", (event) => {
    event.stopPropagation();
    const opening = teamPopover.classList.contains("hidden");
    teamPopover.classList.toggle("hidden", !opening);
    teamTrigger.setAttribute("aria-expanded", String(opening));
  });
  teamPopover.addEventListener("click", event => event.stopPropagation());
  document.addEventListener("click", () => {
    teamPopover.classList.add("hidden");
    teamTrigger.setAttribute("aria-expanded", "false");
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      teamPopover.classList.add("hidden");
      teamTrigger.setAttribute("aria-expanded", "false");
    }
  });
  $("brandHome").addEventListener("click",e=>{e.preventDefault();showScreen("homeScreen");});
  $("registerCancel").addEventListener("click",()=>showScreen("homeScreen"));
  $("registerForm").addEventListener("submit",registerParticipant);
  $("gameRanking").addEventListener("click",()=>showScreen("rankingScreen"));
  $("switchParticipant").addEventListener("click",switchParticipant);
  $("rankingBack").addEventListener("click",()=>getPlayer()?showScreen("gameScreen"):showScreen("homeScreen"));
  $("resetRanking").addEventListener("click",resetRanking);
  $("backToBoard").addEventListener("click",()=>{if(!answerLocked)showScreen("gameScreen");else continueToBoard();});
  $("continueButton").addEventListener("click",continueToBoard);
  $("timerToggle").addEventListener("change",()=>{
    if(answerLocked)return;
    if($("timerToggle").checked) startTimer();
    else {stopTimer();$("timerValue").textContent="—";$("timerRing").classList.remove("urgent");$("timerNote").textContent="Cronômetro desativado para esta pergunta.";}
  });
  $("avatarChoices").querySelectorAll("input[name=avatar]").forEach(input=>input.addEventListener("change",()=>{
    document.querySelectorAll(".avatar-choice").forEach(el=>el.classList.toggle("selected",el.querySelector("input").checked));
  }));
  // Validação de integridade do banco de questões.
  const counts=QUESTIONS.reduce((acc,q)=>(acc[q.difficulty]=(acc[q.difficulty]||0)+1,acc),{});
  if(QUESTIONS.length!==100){
    console.error("Banco de perguntas fora da especificação", {total:QUESTIONS.length,counts});
    showToast("Aviso: banco de perguntas com contagem inesperada.");
  }
  renderHome();
}
document.addEventListener("DOMContentLoaded",init);
