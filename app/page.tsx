"use client"

import type React from "react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CheckCircle, Globe, Smartphone, ShoppingCart, Zap, Users, Award, Mail, Phone, MapPin } from "lucide-react"
import { useState, useEffect } from "react"

export default function WebDevServicesPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Aquí iría la lógica para enviar el formulario
    alert("¡Gracias por tu mensaje! Te contactaremos pronto.")
    setFormData({ name: "", email: "", message: "" })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white text-primary sticky top-0 z-50 backdrop-blur-sm border-b border-border/10 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div
              className={`flex items-center space-x-3 transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
            >
              <Image
                src="/images/logo.png"
                alt="SOMOS SOFTWARE - Innovación Digital"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <div
              className={`hidden md:flex space-x-6 transition-all duration-700 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
            >
              <a href="#inicio" className="hover:text-accent transition-colors hover:scale-105 transform font-medium">
                Inicio
              </a>
              <a
                href="#servicios"
                className="hover:text-accent transition-colors hover:scale-105 transform font-medium"
              >
                Servicios
              </a>
              <a href="#nosotros" className="hover:text-accent transition-colors hover:scale-105 transform font-medium">
                Nosotros
              </a>
              <a href="#contacto" className="hover:text-accent transition-colors hover:scale-105 transform font-medium">
                Contacto
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-development.jpg"
            alt="Desarrollo de software profesional"
            fill
            className="object-cover object-center"
            priority
            quality={95}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1
            className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 drop-shadow-2xl ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            Desarrollo Web <span className="text-accent animate-pulse drop-shadow-lg">Innovador</span>
          </h1>
          <p
            className={`text-xl text-white/90 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-300 drop-shadow-xl ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            En SOMOS SOFTWARE transformamos tus ideas en soluciones digitales innovadoras. Creamos experiencias web
            excepcionales que impulsan tu negocio hacia el futuro.
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground hover:scale-105 transform transition-all shadow-2xl"
            >
              Comenzar Proyecto
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="hover:scale-105 transform transition-all bg-white/95 backdrop-blur-sm border-white/50 text-primary hover:bg-white shadow-2xl"
            >
              Ver Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
              Nuestros Servicios
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Ofrecemos soluciones completas de desarrollo web adaptadas a las necesidades de tu negocio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 animate-fade-in-up">
              <CardHeader>
                <Globe className="h-12 w-12 text-primary mb-4 animate-bounce" />
                <CardTitle>Desarrollo Web Completo</CardTitle>
                <CardDescription>Sitios web modernos y responsivos con las últimas tecnologías</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 hover:translate-x-2 transition-transform">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">React & Next.js</span>
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-2 transition-transform">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Diseño responsivo</span>
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-2 transition-transform">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">SEO optimizado</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 animate-fade-in-up animation-delay-200">
              <CardHeader>
                <ShoppingCart className="h-12 w-12 text-primary mb-4 animate-bounce animation-delay-100" />
                <CardTitle>E-commerce</CardTitle>
                <CardDescription>Tiendas online completas con sistemas de pago integrados</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 hover:translate-x-2 transition-transform">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Carrito de compras</span>
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-2 transition-transform">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Pagos seguros</span>
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-2 transition-transform">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Gestión de inventario</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 animate-fade-in-up animation-delay-400">
              <CardHeader>
                <Smartphone className="h-12 w-12 text-primary mb-4 animate-bounce animation-delay-200" />
                <CardTitle>Aplicaciones Web</CardTitle>
                <CardDescription>Apps web progresivas y aplicaciones a medida</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 hover:translate-x-2 transition-transform">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">PWA</span>
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-2 transition-transform">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Funciona offline</span>
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-2 transition-transform">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Notificaciones push</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
              ¿Por qué elegirnos?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <Zap className="h-16 w-16 text-primary mx-auto mb-4 group-hover:animate-spin" />
              <h3 className="text-xl font-semibold mb-2">Velocidad</h3>
              <p className="text-muted-foreground">Sitios web ultra-rápidos optimizados para el mejor rendimiento</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <Users className="h-16 w-16 text-primary mx-auto mb-4 group-hover:animate-pulse" />
              <h3 className="text-xl font-semibold mb-2">Experiencia</h3>
              <p className="text-muted-foreground">Más de 5 años creando soluciones web exitosas</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <Award className="h-16 w-16 text-primary mx-auto mb-4 group-hover:animate-bounce" />
              <h3 className="text-xl font-semibold mb-2">Calidad</h3>
              <p className="text-muted-foreground">Código limpio y mejores prácticas de desarrollo</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4 group-hover:animate-ping" />
              <h3 className="text-xl font-semibold mb-2">Soporte</h3>
              <p className="text-muted-foreground">Mantenimiento y soporte técnico continuo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
              Lo que dicen nuestros clientes
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up">
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  "Excelente trabajo, entregaron exactamente lo que necesitábamos. El sitio web superó nuestras
                  expectativas."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold animate-pulse">
                    M
                  </div>
                  <div>
                    <p className="font-semibold">María González</p>
                    <p className="text-sm text-muted-foreground">CEO, TechStart</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up animation-delay-200">
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  "Profesionales, rápidos y con gran atención al detalle. Recomiendo sus servicios sin dudarlo."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold animate-pulse">
                    J
                  </div>
                  <div>
                    <p className="font-semibold">Juan Pérez</p>
                    <p className="text-sm text-muted-foreground">Fundador, EcoShop</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up animation-delay-400">
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  "Nuestro e-commerce ha aumentado las ventas un 300% desde el rediseño. Increíble trabajo."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold animate-pulse">
                    A
                  </div>
                  <div>
                    <p className="font-semibold">Ana Rodríguez</p>
                    <p className="text-sm text-muted-foreground">Directora, Fashion Store</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">Contáctanos</h2>
              <p className="text-lg text-muted-foreground animate-fade-in-up animation-delay-200">
                ¿Tienes un proyecto en mente? Nos encantaría escuchar tus ideas
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8 animate-fade-in-up">
                <div className="flex items-start gap-4 group">
                  <div className="bg-primary text-primary-foreground p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground">info@somossoftware.com</p>
                    <p className="text-muted-foreground">contacto@somossoftware.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-primary text-primary-foreground p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Teléfono</h3>
                    <p className="text-muted-foreground">+34 123 456 789</p>
                    <p className="text-muted-foreground">+34 987 654 321</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-primary text-primary-foreground p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Ubicación</h3>
                    <p className="text-muted-foreground">Madrid, España</p>
                    <p className="text-muted-foreground">Calle Ejemplo 123</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="animate-fade-in-up animation-delay-300">
                <CardHeader>
                  <CardTitle>Envíanos un mensaje</CardTitle>
                  <CardDescription>Completa el formulario y te responderemos en menos de 24 horas</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre completo</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="transition-all focus:scale-105"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="tu@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="transition-all focus:scale-105"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Mensaje</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Cuéntanos sobre tu proyecto..."
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="transition-all focus:scale-105"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full hover:scale-105 transition-all bg-primary hover:bg-primary/90"
                    >
                      Enviar Mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">¿Listo para comenzar tu proyecto?</h2>
          <p className="text-xl mb-8 opacity-90 animate-fade-in-up animation-delay-200">
            Contáctanos hoy y convierte tu visión en realidad digital
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-accent hover:bg-accent/90 text-accent-foreground hover:scale-105 transition-all animate-fade-in-up animation-delay-400"
          >
            Solicitar Cotización Gratuita
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-white text-foreground py-16 border-t border-border/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image src="/images/logo.png" alt="SOMOS SOFTWARE" width={150} height={50} className="h-8 w-auto" />
              </div>
              <p className="text-sm text-muted-foreground">
                SOMOS SOFTWARE - Innovación Digital. Creamos experiencias digitales excepcionales que impulsan tu
                negocio hacia el éxito.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Desarrollo Web</li>
                <li>E-commerce</li>
                <li>Aplicaciones Web</li>
                <li>Mantenimiento</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Sobre Nosotros</li>
                <li>Portfolio</li>
                <li>Blog</li>
                <li>Contacto</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contacto</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>info@somossoftware.com</p>
                <p>contacto@somossoftware.com</p>
                <p>Madrid, España</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border/20 mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 SOMOS SOFTWARE. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
