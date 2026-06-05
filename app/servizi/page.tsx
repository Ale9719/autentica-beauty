import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import MacroareeList from '@/components/MacroareeList';
import TargetDropdown from '@/components/TargetDropdown';

// Importa i file statici per la modalità DEMO
import serviziData from '../data/servizi.json';
import macroareeData from '../data/macroaree.json';
import targetData from '../data/target.json';

async function fetchData(endpoint: string) {
  // Se la variabile è attiva, legge i file locali
  if (process.env.NEXT_PUBLIC_DEMO_MODE === 'true') {
    if (endpoint === 'macroaree') return macroareeData;
    if (endpoint === 'target') return targetData;
    return serviziData;
  }

  // Altrimenti, esegue la chiamata reale a WordPress
  const res = await fetch(`${process.env.NEXT_PUBLIC_WP_URL}/${endpoint}?per_page=100`, { cache: 'no-store' });
  return res.ok ? await res.json() : [];
}

export default async function ServiziPage(props: {
  searchParams: Promise<{ area?: string, target?: string, page?: string }>;
}) {
  const resolvedSearchParams = await props.searchParams;
  const activeAreaSlug = resolvedSearchParams.area;
  const activeTargetSlug = resolvedSearchParams.target;
  const currentPage = Number(resolvedSearchParams.page) || 1;
  const itemsPerPage = 10;

  const [macroaree, targetList, tuttiServizi] = await Promise.all([
    fetchData('macroaree'),
    fetchData('target'),
    fetchData('servizi')
  ]);

  const activeArea = macroaree.find((m: any) => m.slug === activeAreaSlug);
  const activeTarget = targetList.find((t: any) => t.slug === activeTargetSlug);

  const serviziFiltrati = tuttiServizi.filter((s: any) => {
    const sMacroaree = [...(s.macroarea || []), ...(s.macroaree || []), ...(s.acf?.macroarea || [])].map(Number);
    const sTarget = [...(s.target || []), ...(s.acf?.target || [])].map(Number);
    return (!activeArea || sMacroaree.includes(Number(activeArea.id))) && 
           (!activeTarget || sTarget.includes(Number(activeTarget.id)));
  });

  const totalPages = Math.ceil(serviziFiltrati.length / itemsPerPage);
  const paginatedServizi = serviziFiltrati.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const serviziPerArea = activeArea ? tuttiServizi.filter((s: any) => [...(s.macroarea || []), ...(s.macroaree || []), ...(s.acf?.macroarea || [])].map(Number).includes(Number(activeArea.id))) : tuttiServizi;
  const idsTargetPresenti = Array.from(new Set(serviziPerArea.flatMap((s: any) => [...(s.target || []), ...(s.acf?.target || [])].map(Number))));
  const targetDisponibili = targetList.filter((t: any) => idsTargetPresenti.includes(Number(t.id)));

  return (
    <main className="min-h-screen bg-ab-cream flex flex-col">
      <Navbar />
      
      <div className="pt-32 pb-2 px-6 text-center">
        <h1 className="font-serif text-5xl lg:text-6xl text-ab-tortora-dark mb-4">I Nostri Trattamenti</h1>
      </div>
      
      <MacroareeList 
        macroaree={macroaree} 
        activeAreaSlug={activeAreaSlug} 
        activeTargetSlug={activeTargetSlug} 
      />

      {targetDisponibili.length > 0 && (
        <TargetDropdown 
          targets={targetDisponibili} 
          activeAreaSlug={activeAreaSlug} 
          activeTargetSlug={activeTargetSlug} 
        />
      )}

      <div className="grow max-w-4xl mx-auto px-6 mb-24 w-full">
        {paginatedServizi.length > 0 ? (
          <ul className="space-y-8">
            {paginatedServizi.map((s: any) => {
              const sTargetIds = [...(s.target || []), ...(s.acf?.target || [])].map(Number);
              const tagDelServizio = targetList.filter((t: any) => sTargetIds.includes(Number(t.id)));

              return (
                <li key={s.id} className="flex flex-col md:flex-row md:items-center justify-between border-b border-ab-tortora/20 pb-8 group">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-serif text-ab-tortora-dark group-hover:text-ab-gold transition-colors">
                        {s.title.rendered}
                      </h3>
                      {!activeTargetSlug && tagDelServizio.map((t: any) => (
                        <span key={t.id} className="bg-ab-gold/10 text-ab-gold text-[9px] uppercase tracking-widest px-2 py-1 rounded-full border border-ab-gold/20">
                          {t.name}
                        </span>
                      ))}
                    </div>
                    <p className="text-base text-ab-tortora-dark/70 mt-2 leading-relaxed">
                      {s.acf?.breve_descrizione}
                    </p>
                  </div>
                  <div className="flex items-center justify-between md:justify-end gap-8 mt-6 md:mt-0 min-w-50">
                    <span className="text-sm uppercase tracking-widest text-ab-tortora font-medium">
                      {s.acf?.durata || "-"}
                    </span>
                    <span className="text-xl font-bold text-ab-tortora-dark">
                      € {s.acf?.prezzo || "-"}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="text-center py-12">
            <p className="text-ab-tortora-dark text-lg font-serif italic">Nessun trattamento trovato.</p>
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex justify-center gap-6 mt-16">
            {Array.from({ length: totalPages }).map((_, i) => (
              <Link 
                key={i} 
                href={`/servizi?area=${activeAreaSlug || ''}&target=${activeTargetSlug || ''}&page=${i + 1}`}
                className={`text-base font-medium transition-all ${currentPage === i + 1 ? 'text-ab-gold border-b-2 border-ab-gold' : 'text-ab-tortora hover:text-ab-gold'}`}
              >
                {i + 1}
              </Link>
            ))}
          </div>
        )}
      </div>

      <Footer theme="white" />
    </main>
  );
}