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