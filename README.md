![Fokus](/imagens/logo.png)

# ⏳ Fokus Timer – Pomodoro com JavaScript Modular

Este projeto é uma aplicação web de **Timer Pomodoro**, desenvolvida com **JavaScript puro** e organizada de forma modular. A ideia principal foi construir algo funcional e visualmente agradável enquanto eu aprofundava conceitos importantes de arquitetura, organização de código e gerenciamento de estado sem depender de frameworks.

Mais do que apenas um timer, o projeto busca simular uma aplicação real, com separação de responsabilidades, escalabilidade e código pensado para manutenção futura.

---

## 🚀 Sobre o Projeto

O Focus Timer permite alternar entre diferentes modos de produtividade, controlar a execução do tempo e acompanhar visualmente o andamento das sessões. Além disso, inclui efeitos sonoros e música ambiente para tornar a experiência mais imersiva.

Durante o desenvolvimento, o foco não foi apenas fazer funcionar, mas estruturar o código de forma que ele pudesse crescer sem virar algo difícil de manter ou entender.

---

## 🎯 Funcionalidades
### 1. Modos de produtividade

O usuário pode alternar entre três contextos diferentes:

- 🎯 Foco
- ☕ Descanso curto
- 🌴 Descanso longo

Cada modo possui duração própria, imagem temática e mensagens personalizadas que mudam dinamicamente na interface.

### 2. Controle Completo do Timer
O sistema permite:

- Iniciar contagem regressiva
- Pausar o tempo
- Continuar o timer pausado
- Reiniciar a sessão atual
- Atualizar automaticamente a interface conforme o estado do timer

### 3. Experiência Sonora
Para deixar o uso mais agradável, a aplicação possui:

- Música ambiente opcional
- Som ao iniciar o timer
- Som ao pausar o timer
- Alerta sonoro ao finalizar o tempo

### 4. Feedback Visual
A interface responde às ações do usuário através de:

- Destaque visual do modo ativo
- Atualização dinâmica de textos e imagens
- Controle visual de botões habilitados e desabilitados

---

## 🧠 O Que Este Projeto Explora
Este projeto foi uma oportunidade para aprofundar conceitos fundamentais do desenvolvimento front-end moderno, como:

### 1. Modularização com ES Modules
O código foi dividido em arquivos menores e especializados, facilitando organização, manutenção e reutilização.

### 2. Gerenciamento de Estado
O estado do timer é controlado por um objeto central que armazena:

- Duração atual
- Status do timer
- Intervalo em execução

Isso evita variáveis espalhadas pelo código e deixa o fluxo mais previsível.

### 3. Configuração Baseada em Objetos
Os diferentes modos do timer são controlados por um único objeto de configuração, permitindo alterar comportamento e interface sem mexer diretamente na lógica da aplicação.

### 4. Separação de Responsabilidades
Cada módulo tem um papel bem definido, como:

- Controle do timer
- Atualização da interface
- Configurações dos contextos
- Gerenciamento de eventos
- Controle de botões
- Controle de áudio

---

## 📂 Estrutura do Projeto
```text
app/
│
├── main.js → Arquivo principal que integra todos os módulos
├── activeButton.js → Controle visual dos botões de contexto
├── habilitarDesabilitarBtn.js → Gerenciamento de estados dos botões
├── musicControl.js → Controle da música ambiente
│
├── contexto/
│   ├── alterarContexto.js → Troca de modos do timer
│   ├── atualizarInterface.js → Atualização visual do contexto
│   └── contextoConfig.js → Configurações de cada modo
│
├── timer/
│   ├── iniciarEPausar.js → Controle de execução do timer
│   ├── timerControl.js → Contagem regressiva e formatação do tempo
│   ├── timerConfig.js → Estado global do timer
│   └── atualizarERedefinirBtnTimer.js → Controle visual do botão principal
```

---

## 🌐 Acesso ao Projeto
Você pode visualizar e testar o projeto facilmente pelo link:

- **👉 Deploy no GitHub Pages:**
[Acesse o projeto](https://mguilhermegomes.github.io/fokus-timer/)

---

## ▶ Como Executar o Projeto

### 1. Clone o repositório
```bash
git clone https://github.com/mguilhermegomes/fokus-timer.git
```

### 2. Acessar a pasta do projeto
```bash
cd fokus-timer
```

### 3. Abrir no navegador
Abra o arquivo ``index.html`` ou utilize uma extensão como Live Server no VS Code.

> Nenhuma instalação adicional é necessária.

---

## 📈 Aprendizados Durante o Desenvolvimento
Esse projeto ajudou a consolidar conhecimentos importantes como:

- Organização de aplicações JavaScript sem frameworks
- Estruturação modular de código
- Controle de estado em aplicações front-end
- Manipulação eficiente do DOM
- Controle de eventos e timers assíncronos
- Escrita de código pensando em manutenção e escalabilidade

---

## 👨‍💻 Desenvolvimento

Este projeto foi desenvolvido como parte da minha evolução prática em JavaScript moderno, com foco em boas práticas, clareza de código e construção de aplicações organizadas e escaláveis.

***Autor: Guilherme Gomes.***
