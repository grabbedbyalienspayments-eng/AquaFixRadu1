import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showCookies, setShowCookies] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center cursor-pointer" onClick={scrollToTop}>
              <img 
                src="https://static.readdy.ai/image/ef28c49b8616055595ccec32476a2655/7561472260b66aa8d88a3ade4a48a381.png"
                alt="AquaFix Radu Logo"
                className="h-16 w-auto"
              />
            </div>
            
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('despre')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium">
                Despre
              </button>
              <button onClick={() => scrollToSection('servicii')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium">
                Servicii
              </button>
              <button onClick={() => scrollToSection('testimoniale')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium">
                Testimoniale
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium">
                Contact
              </button>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <a href="tel:+40764424948" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer font-semibold">
                Sună acum
              </a>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className="ri-menu-line text-2xl"></i>
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('despre')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer text-left font-medium">
                  Despre
                </button>
                <button onClick={() => scrollToSection('servicii')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer text-left font-medium">
                  Servicii
                </button>
                <button onClick={() => scrollToSection('testimoniale')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer text-left font-medium">
                  Testimoniale
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer text-left font-medium">
                  Contact
                </button>
                <a href="tel:+40764424948" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer text-center font-semibold">
                  Sună acum
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" 
               style={{
                 backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/hero-image.webp')`
               }}>
        <div className="container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight font-poppins">
              Instalator rapid în Cluj – AquaFix Radu
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 font-light">
              Reparații sanitare, montaj robineți, chiuvete și intervenții urgente în Cluj-Napoca și împrejurimi.
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a href="tel:+40764424948" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
                Sună acum – 0764 424 948
              </a>
              <a href="https://wa.me/40764424948" className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors whitespace-nowrap cursor-pointer">
                Contactează pe WhatsApp
              </a>
            </div>
            
            <p className="text-sm opacity-90">
              Disponibil Luni–Duminică 08:00–20:00 | Urgențe: Non-stop
            </p>
          </div>
        </div>
      </section>

      {/* Despre Noi Section */}
      <section id="despre" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6 font-poppins">Despre AquaFix Radu</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Mă numesc Mihai Radu și sunt instalator profesionist din Cluj-Napoca, cu peste 3 ani de experiență și recomandări excelente. Prin AquaFix Radu, ofer servicii rapide și de calitate pentru orice problemă sanitară: de la robineți și chiuvete, până la țevi sparte și scurgeri înfundate.
                  </p>
                  <p>
                    Clienții mei apreciază promptitudinea, seriozitatea și faptul că las totul curat după fiecare intervenție. Lucrez corect, ofer garanție pe lucrare și intervin în aceeași zi în Cluj și zonele din jur (Florești, Baciu).
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20plumbing%20tools%20and%20equipment%20organized%20on%20clean%20workbench%2C%20modern%20bathroom%20renovation%20workspace%2C%20high%20quality%20plumbing%20supplies%2C%20clean%20and%20organized%20professional%20setup%2C%20blue%20and%20white%20color%20scheme%2C%20modern%20interior&width=600&height=600&seq=plumber-tools&orientation=squarish"
                  alt="Echipamente profesionale instalator"
                  className="rounded-lg shadow-lg object-cover w-full max-w-md h-96"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicii Section */}
      <section id="servicii" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-800 mb-4 font-poppins">Serviciile oferite</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Soluții complete pentru toate nevoile tale sanitare, cu echipamente moderne și garanție pe lucrare
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Service 1 */}
              <div className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-tools-line text-3xl text-white"></i>
                  </div>
                </div>
                <img 
                  src="https://readdy.ai/api/search-image?query=Modern%20chrome%20faucet%20being%20installed%20on%20elegant%20white%20sink%2C%20professional%20plumbing%20work%2C%20clean%20bathroom%20environment%2C%20high-end%20fixtures%2C%20professional%20installation%20process%2C%20bright%20lighting%2C%20contemporary%20design&width=400&height=250&seq=faucet-modern&orientation=landscape"
                  alt="Montaj robineți"
                  className="w-full h-48 object-cover rounded-xl mb-6 group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-2xl font-bold text-gray-800 mb-4 font-poppins">Montaj și reparat robineți</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Instalare și înlocuire robineți, fitinguri și racorduri cu etanșare profesională și garanție extinsă.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  <span>Serviciu profesional</span>
                  <i className="ri-arrow-right-line ml-2 group-hover:translate-x-2 transition-transform duration-300"></i>
                </div>
              </div>

              {/* Service 2 */}
              <div className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-home-4-line text-3xl text-white"></i>
                  </div>
                </div>
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20plumber%20installing%20modern%20white%20ceramic%20sink%20in%20contemporary%20bathroom%2C%20clean%20installation%20process%2C%20modern%20fixtures%2C%20professional%20tools%2C%20bright%20clean%20environment%2C%20high%20quality%20workmanship&width=400&height=250&seq=sink-modern&orientation=landscape"
                  alt="Montaj chiuvete"
                  className="w-full h-48 object-cover rounded-xl mb-6 group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-2xl font-bold text-gray-800 mb-4 font-poppins">Montaj chiuvete și obiecte sanitare</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Montăm chiuvete, WC-uri și cabine de duș cu precizie și finisaj curat, respectând toate standardele.
                </p>
                <div className="flex items-center text-green-600 font-semibold">
                  <span>Montaj garantat</span>
                  <i className="ri-arrow-right-line ml-2 group-hover:translate-x-2 transition-transform duration-300"></i>
                </div>
              </div>

              {/* Service 3 */}
              <div className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-alarm-warning-line text-3xl text-white"></i>
                  </div>
                </div>
                <img 
                  src="https://readdy.ai/api/search-image?query=Emergency%20plumbing%20repair%20professional%20fixing%20burst%20pipe%20with%20modern%20tools%2C%20urgent%20repair%20situation%2C%20professional%20emergency%20service%2C%20clean%20work%20environment%2C%20immediate%20response%2C%20high%20quality%20service&width=400&height=250&seq=emergency-modern&orientation=landscape"
                  alt="Spargere țevi urgențe"
                  className="w-full h-48 object-cover rounded-xl mb-6 group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-2xl font-bold text-gray-800 mb-4 font-poppins">Spargere țevi & intervenții urgente</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Reacționăm imediat la urgențe. Reparam țevi sparte și scurgeri de apă non-stop, 24/7.
                </p>
                <div className="flex items-center text-red-600 font-semibold">
                  <span>Intervenție rapidă</span>
                  <i className="ri-arrow-right-line ml-2 group-hover:translate-x-2 transition-transform duration-300"></i>
                </div>
              </div>

              {/* Service 4 */}
              <div className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-drop-line text-3xl text-white"></i>
                  </div>
                </div>
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20drain%20cleaning%20equipment%20in%20action%2C%20clear%20water%20flowing%20through%20clean%20pipes%2C%20modern%20plumbing%20tools%2C%20professional%20drain%20maintenance%2C%20clean%20bathroom%20environment%2C%20high%20quality%20service&width=400&height=250&seq=drain-modern&orientation=landscape"
                  alt="Deblocare scurgeri"
                  className="w-full h-48 object-cover rounded-xl mb-6 group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-2xl font-bold text-gray-800 mb-4 font-poppins">Deblocare scurgeri</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Curățare și desfundare scurgeri rapid, fără daune și fără murdărie, cu echipamente profesionale.
                </p>
                <div className="flex items-center text-cyan-600 font-semibold">
                  <span>Soluție rapidă</span>
                  <i className="ri-arrow-right-line ml-2 group-hover:translate-x-2 transition-transform duration-300"></i>
                </div>
              </div>

              {/* Service 5 */}
              <div className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-search-line text-3xl text-white"></i>
                  </div>
                </div>
                <img 
                  src="https://readdy.ai/api/search-image?query=Advanced%20leak%20detection%20equipment%20scanning%20pipes%2C%20professional%20diagnostic%20tools%2C%20modern%20technology%20for%20plumbing%20inspection%2C%20high-tech%20detection%20devices%2C%20professional%20service%2C%20clean%20work%20environment&width=400&height=250&seq=detection-modern&orientation=landscape"
                  alt="Detectare pierderi apă"
                  className="w-full h-48 object-cover rounded-xl mb-6 group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-2xl font-bold text-gray-800 mb-4 font-poppins">Detectare pierderi apă</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Identificăm pierderile invizibile de apă cu echipamente profesionale de ultimă generație.
                </p>
                <div className="flex items-center text-purple-600 font-semibold">
                  <span>Diagnostic gratuit</span>
                  <i className="ri-arrow-right-line ml-2 group-hover:translate-x-2 transition-transform duration-300"></i>
                </div>
              </div>

              {/* Service 6 */}
              <div className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-refresh-line text-3xl text-white"></i>
                  </div>
                </div>
                <img 
                  src="https://readdy.ai/api/search-image?query=New%20modern%20pipes%20installation%20in%20renovated%20bathroom%2C%20professional%20pipe%20replacement%20work%2C%20clean%20installation%2C%20modern%20plumbing%20system%2C%20bright%20clean%20environment%2C%20high%20quality%20workmanship&width=400&height=250&seq=pipes-modern&orientation=landscape"
                  alt="Înlocuire țevi"
                  className="w-full h-48 object-cover rounded-xl mb-6 group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-2xl font-bold text-gray-800 mb-4 font-poppins">Înlocuire țevi și instalații vechi</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Reînnoim instalațiile pentru siguranță și eficiență maximă, cu materiale de cea mai bună calitate.
                </p>
                <div className="flex items-center text-indigo-600 font-semibold">
                  <span>Consultanță gratuită</span>
                  <i className="ri-arrow-right-line ml-2 group-hover:translate-x-2 transition-transform duration-300"></i>
                </div>
              </div>
              
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
                <h3 className="text-3xl font-bold mb-4 font-poppins">Ai nevoie de o intervenție rapidă?</h3>
                <p className="text-xl mb-6 opacity-90">Contactează-mă acum pentru o evaluare gratuită și o ofertă personalizată</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+40764424948" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
                    <i className="ri-phone-line mr-2"></i>
                    Sună acum
                  </a>
                  <a href="https://wa.me/40764424948" className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors whitespace-nowrap cursor-pointer">
                    <i className="ri-whatsapp-line mr-2"></i>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* De ce noi Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 font-poppins">De ce AquaFix Radu?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">💨</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 font-poppins">Intervenții rapide în aceeași zi</h3>
                  <p className="opacity-90">Ajung la locație în cel mai scurt timp, în Cluj și împrejurimi.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-3xl">💰</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 font-poppins">Preț corect și transparent</h3>
                  <p className="opacity-90">Fără costuri ascunse, discutăm totul clar înainte de lucrare.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-3xl">🧼</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 font-poppins">Lucru curat și garantat</h3>
                  <p className="opacity-90">Totul rămâne ordonat, iar lucrarea e garantată.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-3xl">📞</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 font-poppins">Disponibil Non-Stop pentru urgențe</h3>
                  <p className="opacity-90">Țeavă spartă noaptea? Vin imediat.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimoniale Section */}
      <section id="testimoniale" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 font-poppins">Ce spun clienții mei</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <i className="ri-user-line text-3xl text-blue-600"></i>
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "A venit în 30 de minute, a reparat tot și a lăsat baia impecabilă. Recomand!"
                </p>
                <p className="font-semibold text-gray-800 font-poppins">Andrei M., Cluj-Napoca</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <i className="ri-user-line text-3xl text-blue-600"></i>
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Lucrează curat, vorbește politicos și oferă garanție. Excelent!"
                </p>
                <p className="font-semibold text-gray-800 font-poppins">Diana L., Florești</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <i className="ri-user-line text-3xl text-blue-600"></i>
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Serviciu rapid și profesionist. Am salvat mult timp."
                </p>
                <p className="font-semibold text-gray-800 font-poppins">George P., Baciu</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 font-poppins">Contactează-mă</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg text-gray-600 mb-8">
                  Pentru programări rapide sau urgențe, sună direct sau scrie pe WhatsApp.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <i className="ri-map-pin-line text-blue-600 text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 font-poppins">Locație</h3>
                      <p className="text-gray-600">Cluj-Napoca, zona Mărăști</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <i className="ri-phone-line text-blue-600 text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 font-poppins">Telefon</h3>
                      <a href="tel:+40764424948" className="text-blue-600 hover:text-blue-700 cursor-pointer">0764 424 948</a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <i className="ri-mail-line text-blue-600 text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 font-poppins">Email</h3>
                      <a href="mailto:contact@aquafixradu.ro" className="text-blue-600 hover:text-blue-700 cursor-pointer">contact@aquafixradu.ro</a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
<i className="ri-time-line text-blue-600 text-xl"></i>
</div>
<div>
<h3 className="font-semibold text-gray-800 font-poppins">Program</h3>
<p className="text-gray-600">Luni–Duminică 08:00–20:00</p>
<p className="text-gray-600">Urgențe Non-stop</p>
</div>
</div>
</div>
</div>
              <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.8234567890123!2d23.5880556!3d46.7712101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490c1f916c0b77%3A0x1234567890abcdef!2zTcSDcsSDyJl0aSwgQ2x1ai1OYXBvY2E!5e0!3m2!1sro!2sro!4v1234567890123!5m2!1sro!2sro"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Footer */}
  <footer className="bg-blue-900 text-white py-12">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        {/* Footer Links */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-poppins">AquaFix Radu</h3>
            <p className="text-blue-200 mb-4">
              Instalator profesionist în Cluj-Napoca cu servicii rapide și de calitate.
            </p>
            <div className="flex space-x-4">
              <a href="tel:+40764424948" className="text-blue-200 hover:text-white transition-colors">
                <i className="ri-phone-line text-2xl"></i>
              </a>
              <a href="https://wa.me/40764424948" className="text-blue-200 hover:text-white transition-colors">
                <i className="ri-whatsapp-line text-2xl"></i>
              </a>
              <a href="mailto:contact@aquafixradu.ro" className="text-blue-200 hover:text-white transition-colors">
                <i className="ri-mail-line text-2xl"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-poppins">Pagini Legale</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => setShowTerms(true)} className="text-blue-200 hover:text-white transition-colors cursor-pointer">
                  Termeni și Condiții
                </button>
              </li>
              <li>
                <button onClick={() => setShowPrivacy(true)} className="text-blue-200 hover:text-white transition-colors cursor-pointer">
                  Politica de Confidențialitate
                </button>
              </li>
              <li>
                <button onClick={() => setShowCookies(true)} className="text-blue-200 hover:text-white transition-colors cursor-pointer">
                  Politica Cookies
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-poppins">Contact Rapid</h3>
            <p className="text-blue-200 mb-2">Telefon: 0764 424 948</p>
            <p className="text-blue-200 mb-2">Email: contact@aquafixradu.ro</p>
            <p className="text-blue-200">Cluj-Napoca, Mărăști</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-800 pt-8 text-center">
          <p className="mb-2 text-blue-200">
            © 2026 AquaFix Radu – Instalator în Cluj-Napoca | Toate drepturile rezervate.
          </p>
          <p className="text-blue-200">
            Creat de{' '}
            <a 
              href="https://www.websiteon.ro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition-colors font-semibold cursor-pointer"
            >
              WebsiteON
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>

  {/* Legal Modals */}
  {showTerms && (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={() => setShowTerms(false)}>
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800 font-poppins">Termeni și Condiții</h2>
          <button onClick={() => setShowTerms(false)} className="text-gray-500 hover:text-gray-700">
            <i className="ri-close-line text-3xl"></i>
          </button>
        </div>
        <div className="prose max-w-none text-gray-600 space-y-4">
          <p><strong>Data ultimei actualizări:</strong> 08 Ianuarie 2026</p>
          
          <h3 className="text-xl font-bold text-gray-800 mt-6">1. Acceptarea Termenilor</h3>
          <p>
            Prin accesarea și utilizarea serviciilor AquaFix Radu, acceptați să respectați acești termeni și condiții. 
            Dacă nu sunteți de acord cu aceștii termeni, vă rugăm să nu utilizați serviciile noastre.
          </p>

          <h3 className="text-xl font-bold text-gray-800 mt-6">2. Servicii Oferite</h3>
          <p>
            AquaFix Radu oferă servicii profesionale de instalații sanitare în Cluj-Napoca și împrejurimi, incluzând 
            dar nelimitându-se la: montaj și reparații robineți, montaj chiuvete și obiecte sanitare, intervenții urgente, 
            deblocare scurgeri, detectare pierderi de apă și înlocuire instalații vechi.
          </p>

          <h3 className="text-xl font-bold text-gray-800 mt-6">3. Programări și Anulări</h3>
          <p>
            Programările se fac telefonic sau prin WhatsApp. În cazul unei anulări, vă rugăm să ne anunțați cu cel puțin 
            2 ore înainte de ora programată pentru a evita taxe de anulare.
          </p>

          <h3 className="text-xl font-bold text-gray-800 mt-6">4. Prețuri și Plăți</h3>
          <p>
            Toate prețurile sunt comunicate transparent înainte de începerea lucrărilor. Plata se efectuează la finalizarea 
            lucrării, în numerar sau prin transfer bancar. Emitem factură fiscală la cerere.
          </p>

          <h3 className="text-xl font-bold text-gray-800 mt-6">5. Garanție</h3>
          <p>
            Oferim garanție pentru toate lucrările efectuate, conform legislației în vigoare. Durata garanției variază 
            în funcție de tipul lucrării și va fi specificată în contract sau pe factură.
          </p>

          <h3 className="text-xl font-bold text-gray-800 mt-6">6. Limitarea Răspunderii</h3>
          <p>
            AquaFix Radu nu își asumă responsabilitatea pentru daune preexistente sau pentru situații ce nu pot fi 
            previzionate la momentul evaluării inițiale. Clientul este responsabil pentru asigurarea accesului la 
            locația lucrării și pentru furnizarea informațiilor corecte despre problema existentă.
          </p>

          <h3 className="text-xl font-bold text-gray-800 mt-6">7. Modificări ale Termenilor</h3>
          <p>
            Ne rezervăm dreptul de a modifica acești termeni și condiții în orice moment. Modificările vor fi publicate 
            pe acest site și vor intra în vigoare imediat după publicare.
          </p>

          <h3 className="text-xl font-bold text-gray-800 mt-6">8. Contact</h3>
          <p>
            Pentru orice întrebări privind acești termeni și condiții, vă rugăm să ne contactați la:
            <br />Telefon: 0764 424 948
            <br />Email: contact@aquafixradu.ro
          </p>
        </div>
      </div>
    </div>
  )}

  {showPrivacy && (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={() => setShowPrivacy(false)}>
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800 font-poppins">Politica de Confidențialitate</h2>
          <button onClick={() => setShowPrivacy(false)} className="text-gray-500 hover:text-gray-700">
            <i className="ri-close-line text-3xl"></i>
          </button>
        </div>
        <div className="prose max-w-none text-gray-600 space-y-4">
          <p><strong>Data ultimei actualizări:</strong> 08 Ianuarie 2026</p>
          
          <h3 className="text-xl font-bold text-gray-800 mt-6">1. Introducere</h3>
          <p>
            AquaFix Radu respectă confidențialitatea datelor dumneavoastră personale și se angajează să le protejeze 
            în conformitate cu Regulamentul General privind Protecția Datelor (GDPR) și legislația română aplicabilă.
          </p>

          <h3 className="text-xl font-bold text-gray-800 mt-6">2. Date Colectate</h3>
          <p>
            Colectăm următoarele categorii de date personale:
          </p>
          <ul className="list-disc pl-6">
            <li>Date de identificare: nume, prenume</li>
            <li>Date de contact: număr de telefon, adresă email, adresă fizică</li>
            <li>Date despre serviciile solicitate și istoricul lucrărilor</li>
            <li>Date de facturare și plată</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-800 mt-6">3. Scopul Prelucrării Datelor</h3>
          <p>
            Datele dumneavoastră personale sunt prelucrate pentru:
          </p>
          <ul className="list-disc pl-6">
            <li>Furnizarea serviciilor de instalații sanitare</li>
            <li>Comunicarea cu clienții și programarea intervențiilor</li>
            <li>Emiterea facturilor și gestionarea plăților</li>
            <li>Îmbunătățirea calității serviciilor</li>
            <li>Respectarea obligațiilor legale</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-800 mt-6">4. Partajarea Datelor</h3>
          <p>
            Nu vindem, nu închiriem și nu partajăm datele dumneavoastră personale cu terțe părți, cu excepția:
          </p>
          <ul className="list-disc pl-6">
            <li>Furnizorilor de servicii esențiale (contabilitate, servicii IT)</li>
            <li>Autorităților competente, când legea o impune</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-800 mt-6">5. Drepturile Dumneavoastră</h3>
          <p>
            Conform GDPR, aveți următoarele drepturi:
          </p>
          <ul className="list-disc pl-6">
            <li>Dreptul de acces la datele personale</li>
            <li>Dreptul de rectificare a datelor incorecte</li>
            <li>Dreptul de ștergere a datelor ("dreptul de a fi uitat")</li>
            <li>Dreptul de restricționare a prelucrării</li>
            <li>Dreptul la portabilitatea datelor</li>
            <li>Dreptul de opoziție la prelucrare</li>
            <li>Dreptul de a depune plângere la ANSPDCP</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-800 mt-6">6. Securitatea Datelor</h3>
          <p>
            Implementăm măsuri tehnice și organizatorice adecvate pentru a proteja datele dumneavoastră împotriva 
            accesului neautorizat, pierderii sau distrugerii.
          </p>

          <h3 className="text-xl font-bold text-gray-800 mt-6">7. Perioada de Stocare</h3>
          <p>
            Datele personale sunt păstrate pe perioada necesară pentru îndeplinirea scopurilor pentru care au fost 
            colectate și conform obligațiilor legale (minim 10 ani pentru documentele fiscale).
          </p>

          <h3 className="text-xl font-bold text-gray-800 mt-6">8. Contact</h3>
          <p>
            Pentru exercitarea drepturilor sau pentru întrebări despre prelucrarea datelor:
            <br />Email: contact@aquafixradu.ro
            <br />Telefon: 0764 424 948
          </p>
        </div>
      </div>
    </div>
  )}

  {showCookies && (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={() => setShowCookies(false)}>
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800 font-poppins">Politica Cookies</h2>
          <button onClick={() => setShowCookies(false)} className="text-gray-500 hover:text-gray-700">
            <i className="ri-close-line text-3xl"></i>
          </button>
        </div>
        <div className="prose max-w-none text-gray-600 space-y-4">
          <p><strong>Data ultimei actualizării:</strong> 08 Ianuarie 2026</p>
          
          <h3 className="text-xl font-bold text-gray-800 mt-6">1. Ce sunt Cookies?</h3>
          <p>
            Cookie-urile sunt fișiere text mici stocate pe dispozitivul dumneavoastră când vizitați un site web. 
            Acestea ajută site-ul să funcționeze eficient și să îmbunătățească experiența utilizatorului.
          </p>

          <h3 className="text-xl font-bold text-gray-800 mt-6">2. Tipuri de Cookies Utilizate</h3>
          
          <h4 className="text-lg font-semibold text-gray-800 mt-4">2.1. Cookies Esențiale</h4>
          <p>
            Acestea sunt necesare pentru funcționarea de bază a site-ului și nu pot fi dezactivate. Ele nu stochează 
            informații personal identificabile.
          </p>

          <h4 className="text-lg font-semibold text-gray-800 mt-4">2.2. Cookies de Performanță</h4>
          <p>
            Ne ajută să înțelegem cum utilizați site-ul nostru, permițându-ne să îmbunătățim funcționalitatea și 
            experiența utilizatorului.
          </p>

          <h4 className="text-lg font-semibold text-gray-800 mt-4">2.3. Cookies Terțe Părți</h4>
          <p>
            Site-ul nostru poate utiliza servicii terțe (Google Maps pentru localizare) care plasează propriile cookie-uri.
          </p>

          <h3 className="text-xl font-bold text-gray-800 mt-6">3. Scopul Utilizării Cookies</h3>
          <ul className="list-disc pl-6">
            <li>Asigurarea funcționării corecte a site-ului</li>
            <li>Îmbunătățirea experienței utilizatorului</li>
            <li>Analiza traficului pe site</li>
            <li>Afișarea hărții pentru localizare</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-800 mt-6">4. Gestionarea Cookies</h3>
          <p>
            Puteți controla și/sau șterge cookie-urile după preferințe. Puteți șterge toate cookie-urile deja prezente 
            pe computer și puteți seta majoritatea browserelor să le blocheze. Totuși, acest lucru poate necesita 
            ajustarea manuală a unor preferințe de fiecare dată când vizitați un site.
          </p>

          <h3 className="text-xl font-bold text-gray-800 mt-6">5. Instrucțiuni pentru Gestionarea Cookies</h3>
          <ul className="list-disc pl-6">
            <li><strong>Google Chrome:</strong> Setări → Confidențialitate și securitate → Cookies</li>
            <li><strong>Mozilla Firefox:</strong> Opțiuni → Confidențialitate și securitate</li>
            <li><strong>Safari:</strong> Preferințe → Confidențialitate</li>
            <li><strong>Microsoft Edge:</strong> Setări → Confidențialitate și servicii</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-800 mt-6">6. Modificări ale Politicii</h3>
          <p>
            Ne rezervăm dreptul de a modifica această politică de cookies. Orice modificări vor fi publicate pe această 
            pagină cu data actualizării.
          </p>

          <h3 className="text-xl font-bold text-gray-800 mt-6">7. Contact</h3>
          <p>
            Pentru întrebări despre utilizarea cookies:
            <br />Email: contact@aquafixradu.ro
            <br />Telefon: 0764 424 948
          </p>
        </div>
      </div>
    </div>
  )}

  {/* Fixed Call Button */}
  <div className="fixed bottom-6 right-6 z-50">
    <a href="tel:+40764424948" className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors cursor-pointer block">
      <i className="ri-phone-line text-2xl"></i>
    </a>
  </div>

  {/* Fixed WhatsApp Button */}
  <div className="fixed bottom-6 left-6 z-50">
    <a href="https://wa.me/40764424948" className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors cursor-pointer block">
      <i className="ri-whatsapp-line text-2xl"></i>
    </a>
  </div>
</div>
    );
}
