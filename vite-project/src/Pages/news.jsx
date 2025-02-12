const News = () => (
    <div className="news-page">
      <h1>GTA VI NEWS</h1>
      <p>
        Recentemente, novas informações sobre GTA 6 foram reveladas, confirmando Vice City como 
        cenário principal e dois protagonistas jogáveis. A Rockstar ainda não comentou oficialmente 
        sobre esses vazamentos.
      </p>
      <p>
        <strong>Nova Notícia:</strong> Segundo fontes internas, o jogo terá um sistema de inteligência artificial 
        avançado para os NPCs, tornando o mundo do jogo mais dinâmico e realista. Além disso, há rumores 
        de que o jogo incluirá um modo multiplayer expandido, com possibilidade de criar e gerenciar 
        negócios dentro do jogo.
      </p>
      <nav className="sub-nav">
        <NavLink to="/lore/vazamentos" className={({ isActive }) => (isActive ? 'active' : '')}>
          Vazamentos
        </NavLink>
      </nav>
      {/* Renderiza as rotas internas */}
      <Outlet />
    </div>
  );