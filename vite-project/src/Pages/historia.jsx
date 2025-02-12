const Story = () => (
    <div className="story-page">
      <h1>História e Ambientação</h1>
                      <p>
                        Grand Theft Auto VI traz uma narrativa rica e envolvente, ambientada em
                        uma recriação fictícia de algumas das cidades mais vibrantes do mundo.
                        Os jogadores poderão explorar uma linha do tempo única que combina
                        elementos clássicos da série com inovações modernas.
                      </p>
                      <p>
                        A trama gira em torno de personagens complexos, com motivações diversas,
                        navegando por desafios em um cenário aberto e interativo.
                      </p>
                      <p>
                        Espere o inesperado, com reviravoltas emocionantes e escolhas que podem
                        alterar o curso do jogo.
                      </p>
      <nav className="sub-nav">
        <NavLink to="/story/nostalgia" className={({ isActive }) => (isActive ? 'active' : '')}>
          Nostalgia
        </NavLink>
      </nav>
      {/* Renderiza as rotas internas */}
      <Outlet />
    </div>
  );
  