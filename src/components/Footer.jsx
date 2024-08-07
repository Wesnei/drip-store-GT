import FooterIcons from './FooterIcons';
import logo from "../assets/images/logobranco.png";

export default function Footer() {
  return (
    <>
      <footer className="footer lg:flex-col bg-black pt-6 absolute w-full text-white">
        <div className='flex flex-col lg:flex-row'>
          <div className="conteudo flex m-10 mx-10 justify-between">
            {/* Conteúdo adicional pode ser adicionado aqui, se necessário */}
          </div>
          <div className='flex flex-col lg:flex-row gap-24'>
            <div className="sobre gap-2 p-8">
              <div className="logotipo flex items-start gap-2 mb-6">
                <img src={logo} alt="Logo" />
                <h1 className="digistore font-semibold text-2xl">Digital Store</h1>
              </div>
              <p className="descricao w-72 text-white font-normal text-base leading-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
              <FooterIcons />
            </div>
            <div className='flex flex-col lg:flex-row gap-24'>
              <div className="bloco flex flex-col md:flex-row gap-9 text-white">
                <div className="informacao md:py-9 cursor-pointer">
                  <h1 className="titulo text-lg font-semibold">Informação</h1>
                  <p className="texto text-base font-normal">Sobre Drip Store</p>
                  <p className="texto text-base font-normal">Segurança</p>
                  <p className="texto text-base font-normal">Wishlist</p>
                  <p className="texto text-base font-normal">Blog</p>
                  <p className="texto text-base font-normal">Trabalhe conosco</p>
                  <p className="texto text-base font-normal">Meus pedidos</p>
                </div>
                <div className="categorias md:py-9 cursor-pointer">
                  <h1 className="titulo text-lg font-semibold">Categorias</h1>
                  <p className="texto text-base font-normal">Camisetas</p>
                  <p className="texto text-base font-normal">Calças</p>
                  <p className="texto text-base font-normal">Bonés</p>
                  <p className="texto text-base font-normal">Headphones</p>
                  <p className="texto text-base font-normal">Tênis</p>
                </div>
              </div>
              <div className="contato md:py-9 cursor-pointer text-base font-normal">
                <h1 className="titulo text-lg font-semibold">Contato</h1>
                <p className="local leading-normal w-80">
                  Av. Santos Dumont, 1510- 1 andar - Aldeota, Fortaleza - CE,
                  60150-161
                </p>
                <p>(85) 3051-3411</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <span className="dc flex justify-center font-normal py-5 text-white">
          @ 2024 Digital College
        </span>
      </footer>
    </>
  );
}
