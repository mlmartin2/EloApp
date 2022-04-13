
# **EloApp**

## Gerenciamento de Leads

Projeto de aplicativo para gerenciar leads.
Feito para o processo seletivo da EloGroup 2022
- Master: branch feito (sem querer) em react native.
- jsapp: branch em reactJS
 
### Organização de Arquivos ###

**I - HANDLERS**
Sistemas para manipular variáveis e lógicas para o funcionamento do programa
Informações e retornos do front-end, etc...
1. **_auth.js_**
Autenticação do usuário por senha
(faltou hash das senhas)

2. **_register.js_**
Registro de novos dados na DB
Não lida com autenticação

3. **_validators.js_**
validadores dos dados ( Evita campos em branco, repetições... )

**II - SCREENS**
Pasta p/ agrupar telas de visualização do app
1. **HomeScreen**
Tela mostrada diretamente após login bem sucedido. Mostra situação dos leads (Cliente em Potencial, Dados Cadastrados, Reunião Marcada)
6. **LoginScreen**
Tela inicial do app. Login de usuários e caminho para registro de novo
usuário
7. **SignupScreen**
Tela para registro de novos usuários na db, com condicional de 
senha segura

**III - COMPONENTS**
Componentes React do apps

1. **DragDrop.js**
Componente prototipo p/ manuseio de itens 'arrastáveis'
2. **LEAD.js**
Componente prototipo p/ itens (Leads) arrastáveis em dropzones
3. **SideBar.js**
componente (ñ trabalhado) p/ substituir a sidebar nas páginas autenticadas

**IV - PATHS**
- **/** :  Página de Login ( Principal )
- **/home** : Página principal ( Gerenciamento de Leads cadastradas )
- **/signup** : Página p/ cadastro de novos usuários
- **/newlead** : Página de cadastro para novas leads
- **/ddtable** : Página protótipo do drag&drop não implementado

**Considerações Finais**
Faltou implementar um sistema de login mais robusto ( com hash ), o sistema das checkboxes, e também de drag&drop. Optei por um sistema no qual o usuário clica no lead, e esse avança para o proximo estágio. Além de ser mais fácil de fazer no código, é, na minha opinião, o mais adequado para a situação, tendo em vista que o fato dos leads só poderem se mover uma casa pra frente a cada vez praticamente torna inútil o Drag&Drop. O mesmo aspecto visualmente agradável pode ser atingido com uma animação na qual o lead se move para a próxima caixa.

Infelizmente, perdi muito tempo em portar o projeto React Native para ReactJS. Constantemente, o .css falhava, eu não consegui utilizar algumas das bibliotecas como deveriam ser usadas; perdi muito tempo consertando bugs e outras falhas. No geral, foi uma experiência boa para aprender mais a fundo o tipo react, mas também bastante frustrante.
De qualquer modo, agradeço a oportunidade e até o próximo processo seletivo.
Boa noite e boa semana 