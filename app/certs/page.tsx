"use client"

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { certCategories } from "@/data/certs";
import { X } from "lucide-react";

export default function CertificatesPage() {
  const [selectedCert, setSelectedCert] = useState<{ path: string, type: string } | null>(null);

  return (
    <main className="min-h-screen bg-background relative selection:bg-accent/30">
      <Navbar />

      {/* Lightbox for certificates */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-midnight/90 backdrop-blur-2xl p-4 md:p-12 animate-in fade-in duration-500"
          onClick={() => setSelectedCert(null)}
        >
          <button 
            className="absolute top-8 right-8 p-3 text-white/60 hover:text-accent transition-colors z-[110]"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedCert(null);
            }}
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="relative w-full max-w-5xl h-[80vh] flex items-center justify-center shadow-[0_0_100px_rgba(212,175,55,0.15)] animate-in zoom-in-95 duration-500" onClick={(e) => e.stopPropagation()}>
            {selectedCert.type === 'pdf' ? (
              <iframe 
                src={`${selectedCert.path}#view=FitH`} 
                className="w-full h-full border border-white/10 rounded-sm bg-white" 
                title="Certificate PDF"
              />
            ) : (
              <div className="relative w-full h-full">
                <Image 
                  src={selectedCert.path}
                  alt="Certificate View"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="pt-40 pb-20 px-8 md:px-16 lux-gradient overflow-hidden border-b border-white/5 relative">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto space-y-6 relative z-10 text-center md:text-left">
          <h2 className="text-sm uppercase tracking-[0.5em] text-accent font-light">Accreditation & Honors</h2>
          <h1 className="text-4xl md:text-7xl font-serif italic gold-text">Certifications</h1>
          <p className="text-lg font-light leading-relaxed text-foreground/80 max-w-2xl italic mx-auto md:mx-0 border-l-2 border-transparent md:border-accent/20 md:pl-8">
            "Celebrating the scholarly merit, rigorous discourse, and enduring contributions of the Diplomacia community."
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 px-8 md:px-16 relative">
        <div className="max-w-7xl mx-auto space-y-24">
          {certCategories.map((category) => (
            <div key={category.categoryId} className="space-y-12 relative z-10">
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-[1px] w-12 bg-accent/30" />
                  <h3 className="text-2xl md:text-4xl font-serif italic text-white flex-1">{category.title}</h3>
                </div>
                {category.description && (
                  <p className="text-sm md:text-base font-light text-foreground/60 uppercase tracking-widest pl-16">
                    {category.description}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pl-0 md:pl-16">
                {category.certificates.map((cert, idx) => (
                  <div 
                    key={idx}
                    className="group relative bg-white/5 border border-white/10 hover:border-accent/40 transition-all duration-700 cursor-pointer overflow-hidden aspect-[1.414/1] md:aspect-square flex flex-col hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]"
                    onClick={() => setSelectedCert(cert)}
                  >
                    <div className="absolute inset-0 bg-midnight" />
                    
                    {cert.type === 'image' ? (
                       <Image 
                         src={cert.path} 
                         alt={cert.label || 'Certificate'} 
                         fill 
                         className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 z-10"
                       />
                    ) : (
                       <div className="absolute inset-0 z-10 overflow-hidden group-hover:opacity-90 transition-opacity duration-500">
                          <iframe 
                            src={`${cert.path}#page=1&toolbar=0&navpanes=0&scrollbar=0&view=Fit`} 
                            className="w-[102%] h-[102%] -top-[1%] -left-[1%] absolute pointer-events-none bg-white/80" 
                            title={cert.label || "Document Preview"}
                          />
                       </div>
                    )}
                    
                    <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-background/90 to-transparent z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex items-end justify-between">
                       <span className="text-xs uppercase tracking-widest text-accent font-bold">
                         {cert.label || `Cert ${idx + 1}`}
                       </span>
                       <span className="text-[10px] uppercase tracking-widest text-white/50 border border-white/20 px-2 py-1 rounded-sm">
                         {cert.type}
                       </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
