// src/components/PuppiesGallery.tsx
const puppies = [
  { src: "/puppies/filhote1.jpg", alt: "Spitz Alemão Anão Branco" },
  { src: "/puppies/filhote2.jpg", alt: "Spitz Alemão Anão Laranja" },
  { src: "/puppies/filhote3.jpg", alt: "Spitz Alemão Anão Preto" },
  { src: "/puppies/filhote4.jpg", alt: "Spitz Alemão Anão Creme" },
];

export default function PuppiesGallery() {
  return (
    <section className="py-12 bg-[#FFF9ED] flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6">Veja alguns dos nossos filhotes</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {puppies.map((puppy, idx) => (
          <div key={idx} className="rounded-2xl shadow-lg bg-white overflow-hidden">
            <img src={puppy.src} alt={puppy.alt} className="w-full h-44 object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
