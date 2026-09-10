import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-page py-20 text-center">
        <p className="eyebrow eyebrow-rule"><span>Page not found</span></p>
        <h1 className="mt-5 font-serif text-3xl font-bold text-navy-800 sm:text-4xl">
          That page does not exist
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-stone-500">
          The page you were looking for may have moved. Return to the homepage
          or get in touch with the office directly.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to="/" className="btn-primary w-full sm:w-auto">Back to Home</Link>
          <Link to="/contact" className="btn-ghost w-full sm:w-auto">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
