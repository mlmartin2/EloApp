# **EloApp**
## Gerenciamento de Leads

Projeto de aplicativo para gerenciar leads.
Feito para o processo seletivo da EloGroup 2022

### Organização de Arquivos ###

**I - handlers**
Sistemas para manipular variáveis, como inputs do usuário,
informações e retornos do front-end, etc...
1. auth
Autenticação do usuário por senha

2. signup
Registro de novo usuário na db

**II - screens**
Telas para visualização do app
1. HomeScreen
Tela mostrada diretamente após login bem sucedido. Mostra situação dos leads (Cliente em Potencial, Dados Cadastrados, Reunião Marcada)
2. LoginScreen
Tela inicial do app. Login de usuários e caminho para registro de novo
usuário
3. SignupScreen
Tela para registro de novos usuários na db, com condicional de 
senha segura

**III - components**
Componentes React do app

1. LoginButton
Botão de login para lidar com autenticação de usuários
2. LoginInput
Componente geral para inputs nas áreas de Login e Sign Up
3. SignupButton
Botão de registro na nova db, respeitando condicionais