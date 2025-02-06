// src/app/properties/page.tsx
"use client";

import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import { Property } from '../types';

export default function Properties() {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    fetch('/api/properties')
      .then(response => response.json())
      .then(data => setProperties(data));
  }, []);

  return (
    <div>
      <Head>
        <title>ARG - Apartamentos/Prédios</title>
      </Head>
      <Header />
      <main>
        <section>
          <h2>Nossos Projetos</h2>
          {properties.map(property => (
            <article key={property.id}>
              <h3>{property.name}</h3>
              <p>{property.description}</p>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}