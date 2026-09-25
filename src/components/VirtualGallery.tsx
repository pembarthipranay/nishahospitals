import { useState } from 'react';
import { Eye, ChevronLeft, ChevronRight, X, Image as ImageIcon } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/hospitalData';

export default function VirtualGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'maternity', label: 'Maternity & Delivery' },
    { id: 'nicu', label: 'Level II NICU' },
    { id: 'ot', label: 'Operation Theater' },
    { id: 'inpatient', label: 'Patient Rooms & Wards' },
    { id: 'diagnostics', label: 'Diagnostic Lab & Pharmacy' },
    { id: 'exterior', label: 'Reception & Consultation' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const handleNext = () => {
    if (!activeItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === activeItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setActiveItem(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!activeItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === activeItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setActiveItem(filteredItems[prevIndex]);
  };

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="text-xs font-semibold text-rose-800 tracking-wider uppercase mb-2">
            Virtual Photo Tour
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif" style={{ textWrap: 'balance' }}>
            Authentic Glimpse Inside Nisa Hospital
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Real photographic views of our delivery suites, Level II neonatal ICU, modular operating rooms, inpatient beds, and 24-hour diagnostic units.
          </p>
        </div>

        {/* Category Filters (Interactive buttons adhering to frontend design guidelines) */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl mb-6 sm:mb-8 overflow-x-auto max-w-full -mx-4 px-4 sm:mx-0 sm:px-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap min-h-[44px] shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-white text-rose-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative rounded-xl overflow-hidden border border-slate-200 bg-slate-100 cursor-pointer aspect-[4/3] shadow-xs hover:shadow-md transition-all"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
                loading="lazy"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3.5">
                <h4 className="text-xs sm:text-sm font-bold text-white font-serif leading-tight">
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-300 line-clamp-1 mt-0.5">
                  {item.description}
                </p>
                <div className="mt-2 flex items-center gap-1 text-[11px] font-semibold text-rose-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Full Photo</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-150">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveItem(null)}
              className="absolute top-3 right-3 sm:top-5 sm:right-5 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors z-20 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Close photo view"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation arrows */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors z-20 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors z-20 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Photo Card Container */}
            <div className="max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col max-h-[90vh]">
              <div className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] overflow-hidden">
                <img
                  src={activeItem.src}
                  alt={activeItem.title}
                  className="max-h-[70vh] w-auto max-w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-4 sm:p-5 bg-slate-900 text-white border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-base sm:text-lg font-bold font-serif">
                    {activeItem.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 max-w-xl">
                    {activeItem.description}
                  </p>
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  {filteredItems.findIndex((i) => i.id === activeItem.id) + 1} / {filteredItems.length}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
