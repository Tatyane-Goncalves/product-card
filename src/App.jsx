import { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard/ProductCard";
import Loader from "./components/Loader/Loader";
import Erro from "./components/Erro/Erro";
import "./index.scss";

export default function App() {
  const [product, setProduct] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const sucess = Math.random() > 0.2;
      if (sucess) {
        setProduct({
          image:
            "https://bit.ly/3Hn5iEb",
          title: "Fone",
          price: 50,
          promoPrice: 25,
          rating: 4,
          tag: "PROMOÇÃO",
          discount: "50%",
        });
      } else {
        setErro(true);
      }
      setCarregando(false);
    }, 2000);
  }, []);

  return (
    <>
      <header>
        <div className="container">
          <h1>Cards de produtos</h1>
        </div>
      </header>
      <main>
        <div className="container">
          {carregando && <Loader />}
          {erro && <Erro message="Algo deu errado. Tente novamente!" />}
          {!carregando && !erro && product && (
            <section className="product-list">
              {Array(6).fill(product).map((p,i) => (
                <ProductCard key={i} {...p} />
              ))}
            </section>
          )}
        </div>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2025 Tatyane Gonçalves. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
}
