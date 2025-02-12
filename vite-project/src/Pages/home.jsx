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