"use client";

import type React from "react";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  Shield,
  Clock,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  CheckCircle,
  Star,
  Award,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ZorgWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-violet-700"
            >
              LVN
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {["Home", "Voordelen", "Over Mij", "Diensten", "Contact"].map(
                (item, index) => (
                  <motion.button
                    key={item}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() =>
                      scrollToSection(item.toLowerCase().replace(" ", "-"))
                    }
                    className="text-gray-700 hover:text-violet-700 transition-colors font-medium"
                  >
                    {item}
                  </motion.button>
                )
              )}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="md:hidden mt-4 pb-4 border-t border-gray-100"
            >
              {["Home", "Voordelen", "Over Mij", "Diensten", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() =>
                      scrollToSection(item.toLowerCase().replace(" ", "-"))
                    }
                    className="block w-full text-left py-2 text-gray-700 hover:text-violet-700 transition-colors"
                  >
                    {item}
                  </button>
                )
              )}
            </motion.nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        // className="pt-20 pb-16 bg-violet-700"
        className="pt-20 pb-16 bg-gradient-to-tr from-violet-700 to-violet-600"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">
                Persoonlijke zorg
                <span className=" block">dichtbij huis</span>
              </h1>
              <p className="text-2xl text-white mb-8 leading-relaxed">
                Als ervaren zorgverlener bied ik kwalitatieve, persoonlijke zorg
                op maat. Met passie voor het vak en oog voor detail zorg ik
                ervoor dat u zich veilig en geborgen voelt.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-lg text-black hover:bg-violet-100 cursor-pointer"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact opnemen
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white text-lg text-black hover:bg-violet-100 cursor-pointer"
                  onClick={() => scrollToSection("diensten")}
                >
                  Bekijk diensten
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-violet-100 rounded-3xl p-6 relative overflow-hidden">
                <Image
                  width={400}
                  height={400}
                  src="/banner.png"
                  alt="Zorgverlener"
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section id="voordelen" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Waarom kiezen voor LVN?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Ontdek de voordelen van persoonlijke zorgverlening met
                jarenlange ervaring
              </p>
            </div>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: Heart,
                title: "Persoonlijke aandacht",
                description:
                  "Elke cliënt krijgt de individuele zorg en aandacht die hij of zij verdient",
              },
              {
                icon: Shield,
                title: "Betrouwbaar & veilig",
                description:
                  "Gecertificeerd en verzekerd voor uw gemoedsrust en veiligheid",
              },
              {
                icon: Clock,
                title: "Flexibele tijden",
                description:
                  "Zorg op het moment dat het u uitkomt, ook in de avonden en weekenden",
              },
              {
                icon: Award,
                title: "Ervaren professional",
                description:
                  "Meer dan 10 jaar ervaring in de zorgverlening met continue bijscholing",
              },
            ].map((usp, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full bg-violet-50 hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-violet-100rounded-full flex items-center justify-center mx-auto mb-4">
                      <usp.icon className="w-8 h-8 text-violet-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {usp.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {usp.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Over Mij Section */}
      <section id="over-mij" className="py-20 bg-gray-50">
        <div className="container mx-auto px-9">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative">
                <Image
                  width={400}
                  height={400}
                  src="/portrait.jpg"
                  alt="Over mij"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-violet-700 text-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="font-semibold">10+ jaar</span>
                  </div>
                  <p className="text-sm">Ervaring in zorg</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Kennismaking met
                  <span className="text-violet-700 block">
                    Lucas van Nieuwenhuizen
                  </span>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Met meer dan 10 jaar ervaring in de zorgverlening ben ik
                  gepassioneerd over het bieden van kwalitatieve, persoonlijke
                  zorg. Mijn missie is om mensen te helpen hun zelfstandigheid
                  te behouden in de vertrouwde omgeving van hun eigen huis.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "Gediplomeerd verzorgende IG niveau 4",
                    "BHV en EHBO gecertificeerd",
                    "Specialisatie in dementiezorg",
                    "Lid van beroepsvereniging V&VN",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-violet-700" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                <blockquote className="border-l-4 border-violet-700 pl-6 italic text-gray-600">
                  &quot;Zorg verlenen is meer dan een beroep, het is een
                  roeping. Elke dag opnieuw mag ik het verschil maken in iemands
                  leven.&quot;
                </blockquote>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Diensten Section */}
      <section id="diensten" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Mijn diensten
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Een breed scala aan zorgdiensten, afgestemd op uw persoonlijke
                behoeften
              </p>
            </div>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Individuele begeleiding",
                description:
                  "Hulp bij wassen, aankleden, medicatie en dagelijkse verzorging",
                features: [
                  "Lichamelijke verzorging",
                  "Medicatiebegeleiding",
                  "Mobiliteit ondersteuning",
                ],
              },
              {
                title: "Dagbesteding",
                description:
                  "Actuviteiten die bijdragen aan persoonlijke ontwikkeling en sociale interactie",
                features: ["Schoonmaak", "Boodschappen", "Maaltijdbereiding"],
              },
              {
                title: "Amulante zorg",
                description:
                  "Professionele zorg voor mensen die zelfstandig wonen, maar wel hulp nodig hebben",
                features: [
                  "Gesprekken voeren",
                  "Uitjes begeleiden",
                  "Hobby's ondersteunen",
                ],
              },
            ].map((dienst, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full bg-violet-50 hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:scale-105">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {dienst.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {dienst.description}
                    </p>
                    <ul className="space-y-2">
                      {dienst.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <CheckCircle className="w-4 h-4 text-violet-700" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-violet-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Neem contact op
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Heeft u vragen of wilt u een vrijblijvend gesprek? Ik help u
                graag verder.
              </p>
            </div>
          </AnimatedSection>

          <div className="">
            <AnimatedSection>
              <Card className="p-8 shadow-lg border-0 px-16">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Contactgegevens
                </h3>

                <div className="space-y-6 flex justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-violet-100rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-violet-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Telefoon
                      </h4>
                      <p className="text-gray-600">06 - 12 34 56 78</p>
                      <p className="text-sm text-gray-500">
                        Bereikbaar van 8:00 - 20:00
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-violet-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        E-mail
                      </h4>
                      <p className="text-gray-600">lucas@lvn.nl</p>
                      <p className="text-sm text-gray-500">
                        Reactie binnen 24 uur
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-violet-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Werkgebied
                      </h4>
                      <p className="text-gray-600">Veluwe en omgeving</p>
                    </div>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-20 pb-16 bg-gradient-to-tr from-violet-700 to-violet-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">LVN</h3>
              <p className="text-gray-300 leading-relaxed">
                Persoonlijke zorg dichtbij huis. Met passie en professionaliteit
                zorg ik ervoor dat u zich veilig en geborgen voelt.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-300">
                <p>06 - 12 34 56 78</p>
                <p>maria@LVN.nl</p>
                <p>Amsterdam en omgeving</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Diensten</h4>
              <div className="space-y-2 text-gray-300">
                <p>Persoonlijke verzorging</p>
                <p>Huishoudelijke hulp</p>
                <p>Dementiezorg</p>
                <p>Respijtzorg</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-500 mt-8 pt-8 text-center text-white">
            <p>&copy; 2024 LVN. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
