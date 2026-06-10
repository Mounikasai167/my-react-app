function Home() {
  return (
    <main style={{ padding: "20px", textAlign: "center" }}>
      <h1>🍕 Welcome to Crave Corner</h1>
      <p>Delicious food delivered to your doorstep!</p>
      <img
        src="https://images.unsplash.com/photo-1513104890138-7c749659a591"
        alt="Pizza"
        width="400"
      />

      <div className="card-container">
        <h2>Popular Foods</h2>
      </div>
    </main>
  );
}

export default Home;
