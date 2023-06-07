import Header from "@/Components/Header";

export default function Sobre() {
    return (
        <>
            <Header />
            <div className=" flex flex-col items-center">
                <h1 className="text-4xl font-bold">Sobre SpotMusic</h1>
                <p className="text-2xl">Melhores musicas do Brasil e mundo</p>
                <p className="text-2xl">
                Feito por Rafael Veiga e Tiago Rabello
                </p>
            </div>
        </>
    )
}