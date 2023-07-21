import { Service } from "@/components/ui"

export const Servicios = () => {
  return (
    <section className="flex justify-center bg-slate-50 w-full min-h-screen pt-20">
        <div className="w-full max-w-7xl flex justify-center items-center flex-col">
            <h2 className="text-2xl uppercase title-weight text-slate-600">Nuestros servicios</h2>
            <div className="flex">
              <Service 
                src="/inside-smartphone.webp"
                alt="celular abierto"
                title="pin de carga"
                paragraph="sacamos el pin de carga"
              />
            </div>
        </div>
    </section>
  )
}
