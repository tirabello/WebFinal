import CardMusica from "@/Components/CardMusica";
import Header from "@/Components/Header";
import SecaoMusicas from "@/Components/SecaoMusicas";
import Titulo from "@/Components/Titulo";
import { Inter } from "next/font/google";
import { useState } from "react";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [musicas, setMusicas] = useState([]);
  const [valor, setValor] = useState("");

  const options = {
    method: "GET",
    url: "https://deezerdevs-deezer.p.rapidapi.com/search",
    headers: {
      "X-RapidAPI-Key": "ae0e3099c4mshafb361d18631148p19cd5cjsnb394b21bd634",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  const handleInputValor = (evento) => {
    const value = evento.target.value;
    setValor(value);
  };

  const handleSearchArtist = async () => {
    try {
      const response = await axios.request({
        ...options,
        params: { q: valor },
      });

      if (response.status === 200) {
        setMusicas(response.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <div className="relative">
        <div>
          <img
            className="h-72 brightness-10 object-cover w-screen"
            src="https://cdn.discordapp.com/attachments/1026632294041133111/1116026836602855495/Design_sem_nome_3.png"
          />
        </div>
      </div>

      <main
        className={`flex m-2 min-h-screen flex-col justify-between px-24 ${inter.className}`}
      >
        <div className="flex w-90 justify-center rounded bg-white">
          <input
            className="w-full font-bold bg-transparent px-4 py-1 text-gray-900 outline-none focus:outline-none"
            type="search"
            name="search"
            id="search"
            placeholder="O que você quer descobrir?"
            onChange={(evento) => handleInputValor(evento)}
          />

          <button
            className="m-2 rounded bg-rose-600 px-4 py-4 text-white"
            onClick={() => handleSearchArtist()}
          >
            Pesquisar
          </button>
        </div>

        <div className="m-3">
          <Titulo >Resultado:</Titulo>
        </div>
        <div className="flex">
          {musicas && musicas.length ? (
            <SecaoMusicas musicas={musicas} />
          ) : null}
        </div>

      </main>
    </>
  );
}
