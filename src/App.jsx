import { useState } from 'react';
import Hero from './sections/Hero';
import PopularProducts from './sections/PopularProducts';
import SuperQuality from './sections/SuperQuality';
import Services from './sections/Services';
import SpecialOffer from './sections/SpecialOffer';
import CustomerReviews from './sections/CustomerReviews';
import Subscribe from './sections/Subscribe';
import Footer from './sections/Footer';
import Nav from './Components/Nav';
import useFadeUpOnScroll from './hooks/useFadeUpOnScroll';

function App() {
  // Refs and visibility state for all sections
  const [heroRef, isHeroVisible] = useFadeUpOnScroll();
  const [popularProductsRef, isPopularProductsVisible] = useFadeUpOnScroll();
  const [aboutRef, isAboutVisible] = useFadeUpOnScroll();
  const [servicesRef, isServicesVisible] = useFadeUpOnScroll();
  const [offerRef, isOfferVisible] = useFadeUpOnScroll();
  const [reviewsRef, isReviewsVisible] = useFadeUpOnScroll();
  const [subscribeRef, isSubscribeVisible] = useFadeUpOnScroll();
  const [footerRef, isFooterVisible] = useFadeUpOnScroll();

  return (
    <>
      <main className="relative scroll-smooth">
        <Nav />
        <section ref={heroRef} className={`xl:padding-l wide:padding-r padding-b ${isHeroVisible ? 'animate-fadeUp' : 'opacity-0'}`}>
          <Hero />
        </section>
        <section ref={popularProductsRef} className={`px-16 pt-0 ${isPopularProductsVisible ? 'animate-fadeUp' : 'opacity-0'}`}>
          <PopularProducts />
        </section>
        <section id='about-us' ref={aboutRef} className={`padding ${isAboutVisible ? 'animate-fadeUp' : 'opacity-0'}`}>
          <SuperQuality />
        </section>
        <section ref={servicesRef} className={`padding-x py-10 ${isServicesVisible ? 'animate-fadeUp' : 'opacity-0'}`}>
          <Services />
        </section>
        <section ref={offerRef} className={`padding ${isOfferVisible ? 'animate-fadeUp' : 'opacity-0'}`}>
          <SpecialOffer />
        </section>
        <section ref={reviewsRef} className={`padding bg-pale-blue ${isReviewsVisible ? 'animate-fadeUp' : 'opacity-0'}`}>
          <CustomerReviews />
        </section>
        <section ref={subscribeRef} className={`padding-x sm:py-32 py-16 w-full ${isSubscribeVisible ? 'animate-fadeUp' : 'opacity-0'}`}>
          <Subscribe />
        </section>
        <section ref={footerRef} className={`padding-x bg-black padding-t pb-8 ${isFooterVisible ? 'animate-fadeUp' : 'opacity-0'}`}>
          <Footer />
        </section>
      </main>
    </>
  );
}

export default App;
