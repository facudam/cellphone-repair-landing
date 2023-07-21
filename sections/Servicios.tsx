import { Service } from "@/components/ui"

export const Servicios = () => {
  return (
    <section id="servicios" className="flex justify-center bg-slate-50 w-full min-h-screen pt-20">
        <div className="w-full max-w-7xl flex  items-center flex-col">
            <h2 className="text-2xl uppercase title-weight text-slate-600 mb-16">Nuestros servicios</h2>
            <div className="flex gap-11 flex-wrap w-full justify-between">
              <Service 
                src="/inside-smartphone.webp"
                alt="celular abierto"
                title="pin de carga"
                paragraph="sacamos el pin de carga"
              />
              <Service 
                src="/modulo.webp"
                alt="modulo de celular quebrado"
                title="Cambio de módulo"
                paragraph="Cambiamos la pantalla de tu celular"
              />
              <Service 
                src="/tornillo.webp"
                alt="modulo de celular quebrado"
                title="Cambio de bateria"
                paragraph="Reparamos la bateria de tu celular"
              />
            </div>
        </div>
    </section>
  )
}
