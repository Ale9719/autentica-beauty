'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';

const labels: Record<string, string> = {
  'chi-siamo': 'Chi Siamo',
  'servizi': 'Servizi',
  'contatti': 'Contatti',
};

export default function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  if (segments.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="px-6 lg:px-24 pt-28 pb-2">
      <ol 
        className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-ab-tortora/60"
        itemScope 
        itemType="https://schema.org/BreadcrumbList"
      >
        <li 
          itemProp="itemListElement" 
          itemScope 
          itemType="https://schema.org/ListItem"
        >
          <Link 
            href="/" 
            itemProp="item"
            className="hover:text-ab-gold transition-colors"
          >
            <span itemProp="name">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>

        {segments.map((segment, index) => {
          const href = '/' + segments.slice(0, index + 1).join('/');
          const label = labels[segment] || segment;
          const isLast = index === segments.length - 1;

          return (
            <li 
              key={segment}
              className="flex items-center gap-2"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <ChevronRight size={10} className="text-ab-tortora/30" />
              {isLast ? (
                <span 
                  itemProp="name"
                  className="text-ab-tortora-dark"
                >
                  {label}
                </span>
              ) : (
                <Link 
                  href={href}
                  itemProp="item"
                  className="hover:text-ab-gold transition-colors"
                >
                  <span itemProp="name">{label}</span>
                </Link>
              )}
              <meta itemProp="position" content={String(index + 2)} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
}