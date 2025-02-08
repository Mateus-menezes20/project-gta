import { BrowserRouter as Router, Routes, Route, NavLink, Outlet } from 'react-router-dom';
import './App.css';
import { useState } from 'react';

// Componente Vazamento (rota interna de News)
const Vazamento = () => (
  <div className="vazamento-page">
    <h1>Vazamentos de GTA VI</h1>
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
  </div>
);

// Componente Nostalgia (rota interna de História)
const Nostalgia = () => (
  <div className="nostalgia-page">
    <h1>Nostalgia de GTA</h1>
    <p>
      A série Grand Theft Auto sempre trouxe memórias inesquecíveis para os fãs. Desde os clássicos 
      como GTA Vice City e GTA San Andreas, até os mais recentes como GTA V, cada jogo marcou uma 
      geração.
    </p>
    <p>
      <strong>Curiosidade:</strong> GTA Vice City, lançado em 2002, foi inspirado nos filmes de máfia dos 
      anos 80 e é considerado um dos jogos mais icônicos da série.
    </p>
  </div>
);

// Componente News (página principal de notícias)
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

// Componente Story (página principal de história)
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

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <Router>
      <div className="page">
        <header className="header">
          <h1>Grand Theft Auto VI</h1>
          <nav className="nav-bar">
            <NavLink
              to="/"
              className={activeTab === 'home' ? 'active' : ''}
              onClick={() => setActiveTab('home')}
            >
              Home
            </NavLink>
            <NavLink
              to="/gallery"
              className={activeTab === 'gallery' ? 'active' : ''}
              onClick={() => setActiveTab('gallery')}
            >
              Galeria
            </NavLink>
            <NavLink
              to="/story"
              className={activeTab === 'story' ? 'active' : ''}
              onClick={() => setActiveTab('story')}
            >
              História
            </NavLink>
            <NavLink
              to="/lore"
              className={activeTab === 'lore' ? 'active' : ''}
              onClick={() => setActiveTab('lore')}
            >
              News
            </NavLink>
          </nav>
        </header>

        <main className="content">
          <Routes>
            <Route
              path="/"
              element={
                activeTab === 'home' && (
                  <>
                    <section className="release-info">
                      <h2>Data de Lançamento</h2>
                      <p>2025</p>
                    </section>

                    <section className="description">
                      <h2>O que esperar?</h2>
                      <p>
                        Grand Theft Auto VI (GTA 6) é um dos jogos mais aguardados pelos fãs da
                        série. Prometendo gráficos impressionantes, um mundo ainda mais
                        imersivo e expansivo, além de uma narrativa de tirar o fôlego, este
                        título está sendo desenvolvido pela Rockstar Games.
                      </p>
                    </section>

                    <section className="trailer">
                      <h2>Trailer Oficial</h2>
                      <iframe
                        title="GTA 6 Official Trailer"
                        width="30%"
                        height="315"
                        src="https://www.youtube.com/embed/QdBZY2fkU-0"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </section>
                  </>
                )
              }
            />
            <Route
              path="/gallery"
              element={
                activeTab === 'gallery' && (
                  <section className="gallery">
                    <h2>Galeria</h2>
                    <div className="image-grid">
                      <img src="https://th.bing.com/th/id/OIP.zbA_kTA44jlSCTXmQNVF7wHaEK?rs=1&pid=ImgDetMain" alt="Imagem 1" />
                      <img src="https://images.hdqwalls.com/wallpapers/gta-6-sunset-4k-ox.jpg" alt="Imagem 2" />
                      <img src="https://staticg.sportskeeda.com/editor/2023/03/efceb-16798167295983-1920.jpg" alt="Imagem 3" />
                      <img src="https://game-experience.it/wp-content/uploads/2023/11/gta-6-i-fan-stanno-incorniciando-il-messaggio-di-annuncio-di-rockstar-games-per-venderlo.jpg" alt="Imagem 4" />
                    </div>
                  </section>
                )
              }
            />
            {/* Rota para História com sub-rotas */}
            <Route path="/story" element={<Story />}>
              <Route path="nostalgia" element={<Nostalgia />} />
            </Route>
            {/* Rota para News com sub-rotas */}
            <Route path="/lore" element={<News />}>
              <Route path="vazamentos" element={<Vazamento />} />
            </Route>
          </Routes>
        </main>

        <footer className="footer">
          <p>© 2025 Rockstar Games. Todos os direitos reservados.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;