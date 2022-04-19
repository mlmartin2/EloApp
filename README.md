
# **EloApp**

## Gerenciamento de Leads

Projeto de aplicativo para gerenciar leads.
Feito para o processo seletivo da EloGroup 2022

### Organização de Arquivos ###

**I - HANDLERS**
Sistemas para manipular variáveis e lógicas para o funcionamento do programa
Informações e retornos do front-end, etc...
1. **_auth.js_**
Autenticação do usuário por senha
*** fazer autenticaçao ***

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

+ Telas de protótipo (ver paths)

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