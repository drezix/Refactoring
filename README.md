# Refatoração de código

![GitHub repo size](https://img.shields.io/github/repo-size/drezix/chat-teste?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/drezix/chat-teste?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/drezix/chat-teste?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/drezix/chat-teste?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/drezix/chat-teste?style=for-the-badge)

> Refatoração de código

### Sobre

O projeto consiste em refatorar um código existente, para a matéria de Arquitetura de Software

## Design Patterns Implementados

### [Factory Method](https://refactoring.guru/pt-br/design-patterns/factory-method) (Criacional)
- Centraliza a criação de objetos relacionados, como estratégias de pagamento.
- Permite a adição de novos métodos de pagamento sem modificar o código existente.

### [Adapter](https://refactoring.guru/pt-br/design-patterns/adapter) (Estrutural)
- Integra o sistema de pagamento legado ao novo sistema.
- Evita a reescrita do sistema antigo, mantendo compatibilidade.

### [Strategy](https://refactoring.guru/pt-br/design-patterns/strategy) (Comportamental)
- Define uma interface comum para diferentes estratégias de pagamento.
- Torna o sistema flexível e modular.

## Refatorações Baseadas no [SOLID](https://www.freecodecamp.org/portuguese/news/o-que-e-solid-principios-para-um-design-de-software-melhor/)

1. **Responsabilidade Única (SRP):** Separação de lógica de criação, processamento e estratégias em classes distintas.
2. **Aberto/Fechado (OCP):** Código cliente agora funciona sem alterações ao adicionar novas estratégias.
3. **Substituição de Liskov (LSP):** Todas as estratégias são intercambiáveis devido à interface comum.

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

- Você tem um editor de código, como o [VSCode](https://code.visualstudio.com/download) por exemplo
- Você instalou a versão mais recente do [node](https://nodejs.org/pt/download/prebuilt-installer)
- Você leu `Usando o programa`.

## ☕ Usando o programa

Para usar, siga estas etapas:

Clone o repositório para o diretório desejado:
```
git clone https://github.com/drezix/Refactoring.git
```
Abra o editor de código,abra o terminal e digite:
```
npm start
```

## 🤝 Partipantes

[Andre Agostinis](https://github.com/drezix)

[Leonardo Fasano](https://github.com/Fasano18)

## 📝 Licença

Esse projeto está sob licença. Veja o arquivo [LICENÇA](LICENSE.md) para mais detalhes.