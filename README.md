# Documentação do Projeto GTA VI News

Este projeto é uma aplicação React que utiliza Vite como bundler e React Router DOM para gerenciamento de rotas. A aplicação simula um site de notícias sobre o aguardado jogo Grand Theft Auto VI (GTA 6), com páginas dedicadas a notícias, história, galeria e informações gerais.

## Visão Geral

O projeto é composto por:

- **Rotas principais**: Home, Galeria, História e Notícias.
- **Sub-rotas**: Vazamentos (dentro de Notícias) e Nostalgia (dentro de História).
- **Componentes reutilizáveis**: `News`, `Story`, `Vazamento`, `Nostalgia`.
- **Estado local**: Utilização do hook `useState` para gerenciar a aba ativa.
- **Estilização**: CSS básico para estilizar as páginas e links ativos.

## Estrutura de Pastas

![alt text](<Captura de tela 2025-02-11 212814.png>)

## Componentes

### `App.jsx`

O componente principal da aplicação. Ele gerencia as rotas e o estado da aba ativa. As rotas são configuradas usando `react-router-dom`.

- **Rotas principais**:
  - `/`: Página inicial com informações sobre o lançamento, descrição e trailer.
  - `/gallery`: Galeria de imagens.
  - `/story`: Página de história com sub-rota `/nostalgia`.
  - `/lore`: Página de notícias com sub-rota `/vazamentos`.

- **Estado**:
  - `activeTab`: Controla qual aba está ativa no momento.

### `News.jsx`

Componente que renderiza a página de notícias. Contém uma sub-rota para a página de vazamentos.

- **Sub-rota**:
  - `/vazamentos`: Renderiza o componente `Vazamento`.

### `Story.jsx`

Componente que renderiza a página de história. Contém uma sub-rota para a página de nostalgia.

- **Sub-rota**:
  - `/nostalgia`: Renderiza o componente `Nostalgia`.

### `Vazamento.jsx`

Componente que exibe informações sobre vazamentos de GTA VI.

### `Nostalgia.jsx`

Componente que exibe informações nostálgicas sobre a série GTA.

## Testes

### Testes Básicos

1. **Verificação de Links**:
   - Verificar se os links de navegação (`Home`, `Galeria`, `História`, `Notícias`) estão funcionando corretamente.
   - Verificar se os links internos (`Vazamentos`, `Nostalgia`) estão funcionando.

2. **Carregamento de Imagens**:
   - Verificar se as imagens na galeria são carregadas corretamente.

### Testes Unitários com Jest e React Testing Library

1. **Testes do Componente `App`**:
   - Verificar se o estado inicial da aba ativa é `home`.
   - Verificar se a aba ativa muda ao clicar em um link.

2. **Testes do Componente `News`**:
   - Verificar se o conteúdo da página de notícias é renderizado corretamente.
   - Verificar se a sub-rota `/vazamentos` renderiza o componente `Vazamento`.

3. **Testes do Componente `Story`**:
   - Verificar se o conteúdo da página de história é renderizado corretamente.
   - Verificar se a sub-rota `/nostalgia` renderiza o componente `Nostalgia`.

### ESLint e Debugging

- **ESLint**: Configurado para garantir boas práticas de código e evitar erros comuns.
- **Debugging**: Utilize as ferramentas de desenvolvimento do navegador (React DevTools) para depurar o estado e as props dos componentes.

## Diagrama

Abaixo está um diagrama simplificado da estrutura de rotas:
![alt text](<Captura de tela 2025-02-11 212845.png>)