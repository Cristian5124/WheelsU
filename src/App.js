import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Shield, Users, Car, Lock, Server, Layers } from 'lucide-react';

const WheelsUPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1: Portada
    {
      title: "WheelsU",
      subtitle: "Seguridad en la Movilidad Compartida Universitaria",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          <div className="bg-blue-100 p-8 rounded-full">
            <Car className="w-24 h-24 text-blue-600" />
          </div>
          <h1 className="text-5xl font-bold text-gray-800">WheelsU</h1>
          <p className="text-2xl text-gray-600">Carpooling Universitario Seguro en Bogotá</p>
          <div className="flex gap-4 mt-8">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-green-600" />
              <span className="text-lg">Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6 text-blue-600" />
              <span className="text-lg">Comunitario</span>
            </div>
            <div className="flex items-center gap-2">
              <Car className="w-6 h-6 text-purple-600" />
              <span className="text-lg">Sostenible</span>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 2: El Problema
    {
      title: "El Problema: Inseguridad en el Carpooling Informal",
      content: (
        <div className="space-y-6">
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
            <h3 className="font-bold text-lg text-red-800 mb-2">Situación Actual</h3>
            <p className="text-gray-700">Estudiantes coordinan viajes compartidos mediante grupos de WhatsApp y Telegram sin verificación de identidad</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow border-l-4 border-orange-500">
              <h4 className="font-semibold text-orange-800 mb-2">Riesgos Físicos</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Asaltos y robos</li>
                <li>• Agresiones</li>
                <li>• 1,200+ víctimas en accidentes (2023)</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-800 mb-2">Riesgos Digitales</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Fraude y estafas</li>
                <li>• Exposición de datos personales</li>
                <li>• Acoso en línea</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-800 mb-2">Sin Verificación</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Cualquiera puede unirse</li>
                <li>• No hay control de acceso</li>
                <li>• 60% sin controles de membresía</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow border-l-4 border-green-500">
              <h4 className="font-semibold text-green-800 mb-2">Impacto Social</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• 70% reportan inseguridad</li>
                <li>• 45% mujeres evitan carpooling</li>
                <li>• Baja adopción por desconfianza</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-300">
            <p className="text-center font-semibold text-yellow-800">La inseguridad es el principal obstáculo para la adopción del carpooling universitario</p>
          </div>
        </div>
      )
    },
    
    // Slide 3: La Solución
    {
      title: "WheelsU: Solución Centrada en Seguridad",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300">
            <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center gap-2">
              <Shield className="w-6 h-6" />
              Plataforma de Carpooling Exclusiva para Estudiantes Universitarios
            </h3>
            <p className="text-gray-700">Sistema automatizado que prioriza la seguridad mediante verificación institucional y comunidades cerradas</p>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Lock className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-bold text-green-800 mb-2">Verificación Institucional</h4>
              <p className="text-sm text-gray-600">Acceso exclusivo con credenciales universitarias validadas</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-bold text-blue-800 mb-2">Comunidad Cerrada</h4>
              <p className="text-sm text-gray-600">Solo estudiantes verificados pueden usar la plataforma</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-bold text-purple-800 mb-2">Sistema de Confianza</h4>
              <p className="text-sm text-gray-600">Calificaciones mutuas y reportes de incidentes</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Funcionalidades Clave</h4>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>✓ Publicación y búsqueda de viajes</li>
                <li>✓ Sistema de reservas automático</li>
                <li>✓ Chat interno seguro</li>
                <li>✓ Geolocalización en tiempo real</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Beneficios</h4>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>✓ Entorno seguro y confiable</li>
                <li>✓ Reducción de costos de transporte</li>
                <li>✓ Menor congestión vehicular</li>
                <li>✓ Impacto ambiental positivo</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 4: Arquitectura Empresarial - Overview
    {
      title: "Enfoque de Arquitectura Empresarial",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border-2 border-purple-300">
            <h3 className="text-xl font-bold text-purple-800 mb-2">Arquitectura Distribuida Basada en Servicios</h3>
            <p className="text-gray-700">Diseño modular, escalable y seguro alineado con principios de arquitectura empresarial</p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-bold text-lg text-gray-800 border-b-2 border-blue-300 pb-2">Principios de Diseño</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded">
                    <Layers className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Separación de Responsabilidades</p>
                    <p className="text-sm text-gray-600">Arquitectura en capas n-tier</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded">
                    <Server className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Microservicios Ligeros</p>
                    <p className="text-sm text-gray-600">Módulos independientes y escalables</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 p-2 rounded">
                    <Shield className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Zero Trust Security</p>
                    <p className="text-sm text-gray-600">Seguridad en todas las capas</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-bold text-lg text-gray-800 border-b-2 border-green-300 pb-2">Stack Tecnológico Azure</h4>
              <div className="bg-white p-4 rounded-lg shadow space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-gray-700">Frontend:</span>
                  <span className="text-sm text-gray-600">React.js + Azure Static Web Apps</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-gray-700">Backend:</span>
                  <span className="text-sm text-gray-600">Spring Boot + Azure App Service</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-gray-700">Base de Datos:</span>
                  <span className="text-sm text-gray-600">Azure SQL + PostGIS</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-gray-700">Chat:</span>
                  <span className="text-sm text-gray-600">Azure SignalR (WebSocket)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-gray-700">Seguridad:</span>
                  <span className="text-sm text-gray-600">Microsoft Entra ID + Key Vault</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-blue-50 p-3 rounded text-center">
              <p className="font-bold text-blue-800">Escalabilidad</p>
              <p className="text-sm text-gray-600">Automática en Azure</p>
            </div>
            <div className="bg-green-50 p-3 rounded text-center">
              <p className="font-bold text-green-800">Alta Disponibilidad</p>
              <p className="text-sm text-gray-600">99.9% uptime</p>
            </div>
            <div className="bg-purple-50 p-3 rounded text-center">
              <p className="font-bold text-purple-800">Seguridad</p>
              <p className="text-sm text-gray-600">ISO 27001 compliant</p>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 5: Arquitectura de la Solución Completa
    {
      title: "Arquitectura de la Solución Completa",
      subtitle: "Producción en Azure",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-3 rounded-lg">
            <p className="text-sm text-gray-700"><strong>Arquitectura empresarial completa</strong> con todos los servicios de seguridad, integración y monitoreo en Azure</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-lg border-2 border-gray-300">
            <img src="/solucion.png" alt="Diagrama de Arquitectura de Solución" className="w-full" />
            <div className="mt-3 text-center text-sm text-gray-500">
              Diagrama - Arquitectura de Solución WheelsU
            </div>
          </div>
          
          <div className="grid grid-cols-4 gap-2 text-xs">
            <div className="bg-blue-100 p-2 rounded text-center">
              <p className="font-semibold text-blue-800">Presentación</p>
              <p className="text-gray-600">React.js</p>
            </div>
            <div className="bg-purple-100 p-2 rounded text-center">
              <p className="font-semibold text-purple-800">Gateway</p>
              <p className="text-gray-600">API Management</p>
            </div>
            <div className="bg-green-100 p-2 rounded text-center">
              <p className="font-semibold text-green-800">Aplicación</p>
              <p className="text-gray-600">Spring Boot</p>
            </div>
            <div className="bg-orange-100 p-2 rounded text-center">
              <p className="font-semibold text-orange-800">Datos</p>
              <p className="text-gray-600">SQL + Cache</p>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 6: Componentes de Seguridad en la Arquitectura
    {
      title: "Arquitectura de Seguridad: Componentes Clave",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
              <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                <Lock className="w-5 h-5" />
                Autenticación y Control de Acceso
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><strong>Microsoft Entra ID (MID):</strong> Autenticación JWT con verificación institucional por medio del IDP Microsoft</li>
                <li><strong>OAuth 2.0:</strong> Integración con LDAP universitario para SSO</li>
                <li><strong>MFA Opcional:</strong> Autenticación multifactor para mayor seguridad</li>
                <li><strong>RBAC:</strong> Control de acceso basado en roles</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-lg">
              <h4 className="font-bold text-purple-800 mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Protección de Datos
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><strong>Encriptación TLS 1.3:</strong> Todas las comunicaciones cifradas</li>
                <li><strong>Azure Key Vault:</strong> Gestión segura de secrets y keys</li>
                <li><strong>Encriptación end-to-end:</strong> Chat y datos sensibles protegidos</li>
                <li><strong>Anonimización:</strong> Protección de datos personales</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-lg">
              <h4 className="font-bold text-orange-800 mb-3 flex items-center gap-2">
                <Server className="w-5 h-5" />
                Protección de Infraestructura
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><strong>Azure Firewall:</strong> Protección perimetral de red</li>
                <li><strong>WAF (Web Application Firewall):</strong> Prevención de ataques web</li>
                <li><strong>API Gateway:</strong> Rate limiting y validación de requests</li>
                <li><strong>DDoS Protection:</strong> Mitigación de ataques distribuidos</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
              <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Seguridad en la Aplicación
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><strong>Validación de Entrada:</strong> Prevención de inyección SQL/XSS</li>
                <li><strong>Geolocalización Segura:</strong> Tracking de viajes en tiempo real</li>
                <li><strong>Sistema de Reportes:</strong> Detección y gestión de incidentes</li>
                <li><strong>Auditorías Regulares:</strong> Escaneo con OWASP</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-lg text-center">
            <p className="font-bold text-lg">Arquitectura Zero Trust: Ningún componente es confiable por defecto</p>
            <p className="text-sm mt-1">Autenticación mutua y monitoreo continuo en todas las capas</p>
          </div>
        </div>
      )
    },
    
    // Slide 7: Arquitectura del Prototipo
    {
      title: "Arquitectura del Prototipo MVP",
      subtitle: "Versión simplificada para validación",
      content: (
        <div className="space-y-4">
          <div className="bg-green-50 p-3 rounded-lg">
            <p className="text-sm text-gray-700"><strong>Prototipo funcional</strong> con servicios esenciales en Azure para validar la propuesta de valor y seguridad</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-lg border-2 border-gray-300">
            <img src="/prototipo.png" alt="Diagrama de Arquitectura del Prototipo" className="w-full" />
            <div className="mt-3 text-center text-sm text-gray-500">
              Diagrama - Arquitectura del Prototipo WheelsU
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-3 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Servicios Core</h4>
              <ul className="text-xs space-y-1 text-gray-700">
                <li>✓ Autenticación (JWT + OAuth)</li>
                <li>✓ Gestión de Viajes (CRUD)</li>
                <li>✓ Sistema de Reservas</li>
                <li>✓ Chat en Tiempo Real (SignalR)</li>
                <li>✓ Gestión de Usuarios</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-3 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">Herramientas de Desarrollo</h4>
              <ul className="text-xs space-y-1 text-gray-700">
                <li>✓ Swagger UI (Documentación)</li>
                <li>✓ JUnit (Pruebas Unitarias)</li>
                <li>✓ Postman (Pruebas de API)</li>
                <li>✓ Azure Free Tier (Costos bajos)</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 8: Conclusiones
    {
      title: "Conclusiones y Próximos Pasos",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-3">WheelsU: Transformando la Movilidad Universitaria</h3>
            <p className="text-lg">Solución segura, escalable y sostenible para el carpooling en Bogotá</p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-bold text-lg text-gray-800 border-b-2 border-green-300 pb-2">Logros Clave</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                  <p className="text-sm text-gray-700"><strong>Seguridad:</strong> Verificación institucional y comunidades cerradas</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                  <p className="text-sm text-gray-700"><strong>Arquitectura:</strong> Diseño modular y escalable en Azure</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                  <p className="text-sm text-gray-700"><strong>Prototipo:</strong> MVP funcional listo para validación</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                  <p className="text-sm text-gray-700"><strong>Impacto:</strong> Reducción de congestión y emisiones</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-bold text-lg text-gray-800 border-b-2 border-blue-300 pb-2">Próximos Pasos</h4>
              <div className="space-y-2">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="font-semibold text-blue-800 text-sm">Fase 1: Pruebas Piloto</p>
                  <p className="text-xs text-gray-600">Validación con estudiantes de universidades seleccionadas</p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="font-semibold text-purple-800 text-sm">Fase 2: Escalamiento</p>
                  <p className="text-xs text-gray-600">Expansión a todas las universidades de Bogotá</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="font-semibold text-green-800 text-sm">Fase 3: Mejora Continua</p>
                  <p className="text-xs text-gray-600">Integración de IA y blockchain para mayor seguridad</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 border-2 border-yellow-400 p-4 rounded-lg">
            <p className="text-center font-bold text-yellow-800 text-lg">
              WheelsU: Innovación tecnológica con impacto social y ambiental para una Bogotá más sostenible
            </p>
          </div>
          
          <div className="text-center text-gray-600 text-sm">
            <p>Angie Julieth Ramos Cortes | Cristian David Polo Garrido</p>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col">
      {/* Main Slide Area */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl h-full max-h-[700px] flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-2xl">
            <h2 className="text-3xl font-bold">{slides[currentSlide].title}</h2>
            {slides[currentSlide].subtitle && (
              <p className="text-lg mt-1 opacity-90">{slides[currentSlide].subtitle}</p>
            )}
          </div>
          
          {/* Content */}
          <div className="flex-1 p-8 overflow-y-auto">
            {slides[currentSlide].content}
          </div>
          
          {/* Footer with navigation */}
          <div className="p-4 border-t border-gray-200 flex items-center justify-between">
            <button
              onClick={prevSlide}
              className="flex items-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="w-5 h-5" />
              Anterior
            </button>
            
            {/* Slide indicators */}
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-blue-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">
                {currentSlide + 1} / {slides.length}
              </span>
              <button
                onClick={nextSlide}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                disabled={currentSlide === slides.length - 1}
              >
                Siguiente
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WheelsUPresentation;