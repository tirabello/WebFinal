import CardMusica from "./CardMusica";

export default function SecaoMusicas({ musicas }) {
  return (
    <div className="flex flex-wrap">
      {musicas.length &&
        musicas.map((musica) => <CardMusica musica={musica} />)}
    </div>
  );
}
