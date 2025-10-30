import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Création de Site Web Professionnel à Strasbourg | Agence Web Locale</title>
      </Head>

      {/* Header */}
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-gray-800">Logo</div>
            <div className="hidden md:block">
              <a href="#services" className="text-gray-800 hover:text-alsace-red px-3 py-2">Services</a>
              <a href="#portfolio" className="text-gray-800 hover:text-alsace-red px-3 py-2">Portfolio</a>
              <a href="#contact" className="text-gray-800 hover:text-alsace-red px-3 py-2">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-alsace-blue text-white text-center py-20">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4">Créez votre site web professionnel à Strasbourg et développez votre activité locale.</h1>
            <p className="text-lg mb-8">Nous aidons les PME et artisans à briller en ligne.</p>
            <a href="#contact" className="bg-alsace-red hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full">Obtenez votre devis gratuit</a>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-10">Boostez votre présence en ligne</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">Visibilité Accrue</h3>
                <p>Attirez plus de clients à Strasbourg grâce à un référencement local optimisé.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">Nouveaux Clients</h3>
                <p>Convertissez les visiteurs en clients fidèles avec un site web performant.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">Crédibilité Renforcée</h3>
                <p>Gagnez la confiance de vos prospects avec un design professionnel et moderne.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-10">Nos Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">Site Vitrine</h3>
                <p>Présentez votre activité, vos services et vos valeurs.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">E-commerce</h3>
                <p>Vendez vos produits en ligne avec une boutique performante.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">Refonte de site</h3>
                <p>Modernisez votre site actuel pour de meilleurs résultats.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">SEO Local</h3>
                <p>Dominez les résultats de recherche à Strasbourg.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-10">Ils nous font confiance</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="italic">"Un service exceptionnel et un site qui a vraiment boosté notre visibilité à Strasbourg."</p>
                <p className="font-bold mt-4">- Client Satisfait 1</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="italic">"Notre nouveau site e-commerce est un succès. Merci pour votre expertise !"</p>
                <p className="font-bold mt-4">- Client Satisfait 2</p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-10">Nos Réalisations</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Replace with actual images */}
              <div className="bg-gray-300 h-64 rounded-lg shadow-lg"></div>
              <div className="bg-gray-300 h-64 rounded-lg shadow-lg"></div>
              <div className="bg-gray-300 h-64 rounded-lg shadow-lg"></div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-10">Notre Processus</h2>
            <div className="grid md:grid-cols-5 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">1. Consultation</h3>
                <p>Nous discutons de vos besoins et objectifs.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">2. Design</h3>
                <p>Nous créons une maquette sur-mesure.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">3. Développement</h3>
                <p>Nous donnons vie au design avec du code.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">4. Lancement</h3>
                <p>Nous déployons votre site en ligne.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">5. Suivi</h3>
                <p>Nous assurons la maintenance et le support.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section id="why-us" className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-10">Pourquoi Nous Choisir ?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">Expertise Locale</h3>
                <p>Nous connaissons le marché de Strasbourg.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">Support Personnalisé</h3>
                <p>Une équipe dédiée à votre écoute.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">Résultats Mesurables</h3>
                <p>Nous suivons vos performances pour garantir votre succès.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-alsace-blue text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Prêt à lancer votre projet ?</h2>
            <p className="text-lg mb-8">Contactez-nous dès aujourd'hui pour une consultation gratuite.</p>
            <a href="#" className="bg-alsace-red hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full">Obtenez votre devis gratuit personnalisé</a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2023 Votre Agence Web. Tous droits réservés.</p>
          <p>Strasbourg, France</p>
        </div>
      </footer>
    </>
  )
}