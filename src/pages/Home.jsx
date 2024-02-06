import Gallery from "../components/Gallery";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="mt-[100vh]">
      <Navbar />
      <main className="m-6">
        <h1 className="text-3xl py-6 font-semibold">
          Tirez le Meilleur de Chaque Instant
        </h1>
        <p className="px-6 text-xl">
          <span className="border-b-2 py-1">Découvrez nos der</span>niers shoots
        </p>
        <Gallery />
        <button className="text-xl bg-[#454fb7] text-white p-4 my-4 rounded-lg flex mx-auto">
          Réservez votre shooting
        </button>
      </main>
      <footer className="bg-slate-900 text-white p-20">
        <div className="flex justify-center gap-8 py-2">
          <span>Facebook</span>
          <span>Instagram</span>
        </div>
        <p className="text-center py-2">©2024 Tous droits réservés</p>
      </footer>
    </div>
  );
}
