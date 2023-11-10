# Design Patterns em Typescript

Neste repositório abordo exemplos dos padrões de design que mais costumo utilizar em meus projetos, utilizando o Typescript como linguagem.

## Command Pattern

Em programação OO, o **command pattern** é um padrão de design comportamental comportamental no qual um objeto é usado para encapsular todas as informações necessárias para executar uma ação ou disparar um evento posteriormente. Essas informações incluem o nome do método, o objeto que possui o método e os valores dos parâmetros do método.

> _Command pattern em Typescript é algo que acontecerá muito na interface de contexto que precisa executar algo quando uma pessoa está realizando um evento. Mesmo Quando você precisa enfileirar todos os comandos, esse padrão de design é muito poderoso._

## Memento Pattern

O **memento pattern** é um padrão de design de software que expõe o estado interno privado de um objeto. Um exemplo de como isso pode ser usado é restaurar um objeto ao seu estado de visualização (desfazer por meio de reversão), outro é o versionamento, outro é a serialização personalizada.

> _O padrão Memento espõe o estado interno privado de um objecto, da a possibilidade de restaurar um objecto, desfazer para um estado anterior,..Usando um tratador que cuidará de tudo isso_

## Factory Method Factory

O padrão **Factory Method** é um padrão de design criacional que ajuda a programar para uma interface, não para uma implementação
