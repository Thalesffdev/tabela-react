
# Tabela de Notas

Projeto simples em Next.js que exibe uma tabela de notas/estudantes — componente de exemplo para estudo e demonstração.

**Autor:** Thales

**Status:** Projeto de estudo / protótipo

**Stack:** Next.js (app router), React, TypeScript, TailwindCSS (PostCSS)

## Conteúdo
- **Visão geral:** demonstração de componente `StudentTable` que consome dados locais.
- **Código-fonte principal:** `src/app`, `src/components/StudentTable.tsx`, `src/data/students.ts`, `src/Types/Student.ts`.

## Requisitos
- Node.js 18+ (recomendado)
- npm ou pnpm/yarn

## Como rodar (desenvolvimento)

1. Clone o repositório ou copie a pasta para sua máquina.
2. Instale as dependências:

```bash
npm install
```

3. Rode em modo desenvolvimento:

```bash
npm run dev
```

4. Abra http://localhost:3000 no navegador.

## Scripts úteis

- `npm run dev` — inicia o servidor de desenvolvimento (next dev).
- `npm run build` — cria a versão de produção (next build).
- `npm run start` — inicia a aplicação em modo produção (next start).

## Estrutura do projeto (resumo)

- `public/` — ativos estáticos.
- `src/app/` — rota principal com `page.tsx`, `layout.tsx` e `globals.css`.
- `src/components/` — componente `StudentTable.tsx`.
- `src/data/` — dados de exemplo (`students.ts`).
- `src/Types/` — tipos TypeScript (`Student.ts`).

## Notas de desenvolvimento
- Projeto usa Next.js 16 + React 19 + TypeScript.
- Tailwind está presente nas dependências; se quiser habilitar utilitários Tailwind, verifique a configuração (`tailwind.config.js`) e importe os diretórios corretos em `globals.css`.

## Como contribuir
- Abra uma issue descrevendo o que deseja alterar.
- Para pequenas correções, envie um pull request com um branch explicativo.

## Sugestões para evolução
- Validar/formatar dados (formulário para adicionar/editar estudantes).
- Paginação e ordenação na tabela.
- Persistência (localStorage, API ou banco de dados simples).
- Testes unitários para o componente `StudentTable`.

## Licença
Este repositório não contém uma licença explícita.
