import React from 'react';

const Mediacion = () => {
  const servicios = [
    {
      titulo: "Pensión alimenticia, régimen de visitas y tenencia",
      descripcion: "Acuerdo integral para organizar la vida de los hijos: desde cuánto se paga de pensión hasta con quién viven y cuándo se visitan.",
      beneficios: [
        "Aumento o Reducción de Pensión: Ajustar el valor legal si el padre/madre gana más o si se quedó sin empleo.",
        "Horarios de Visitas Claros: Definir días, feriados y vacaciones para evitar peleas y llamadas constantes.",
        "Acuerdo de Tenencia: Establecer legalmente con quién vivirán los hijos de forma estable.",
        "Ahorro de Juicios Largos: Resolver en una hora lo que un Juez de Familia tarda 6 meses o más.",
        "Acta con Fuerza de Sentencia: Si el acuerdo no se cumple, se puede pedir ejecución inmediata."
      ]
    },
    {
      titulo: "Liquidaciones Laborales",
      descripcion: "Espacio para pactar el pago de liquidaciones, despidos o bonificaciones de forma amistosa y legal.",
      beneficios: [
        "Cobro Inmediato: El trabajador recibe su dinero sin esperar años de juicio laboral.",
        "Cero Multas para la Empresa: Evitar la sanción del Ministerio de Trabajo por falta de pago.",
        "Planes de Pago: Posibilidad de pactar cuotas si la empresa no tiene liquidez total inmediata."
      ]
    },
    {
      titulo: "Reestructuración de deudas",
      descripcion: "Negociación directa con acreedores para conseguir nuevas cuotas que el cliente sí pueda pagar.",
      beneficios: [
        "Frenar el Acoso de Cobranza: Detener las llamadas insistentes y amenazas de juicio.",
        "Nuevos Plazos y Cuotas: Lograr que el banco extienda el tiempo y baje el valor mensual.",
        "Evitar Embargos: Detener el proceso de quitarte el sueldo, el carro o la casa."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">Mediación</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-600">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{s.titulo}</h3>
              <p className="text-gray-600 mb-6">{s.descripcion}</p>
              <ul className="space-y-3">
                {s.beneficios.map((b, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <span className="text-blue-500 mr-2">✔</span>{b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mediacion;
