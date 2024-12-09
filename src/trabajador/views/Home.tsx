import { Acordeon } from "../../components/ui/Acordeon";
import { Venta } from "../../components/ventas/Venta";

export const HomeEmpleado = () => {
  return (
    <div className="p-3">
      <h1 className="text-xl">Tu meta actual es</h1>
      <div className="h-10 mt-3 bg-[#B3E6CC] w-full mx-auto text-center p-2 rounded-xl border border-[#014D29] text-[#014D29]">
        50000/100000
      </div>
      <h1 className="text-lg mt-5">
        Tus ultimas 4 ventas actualizadas
      </h1>
      <div>
        <div className="bg-[#DFCCFB] w-20 h-7 p-2 rounded-md leading-none text-[#33333] text-sm text-center">
          Cotizado
        </div>
      </div>

      <div className="mt-5">
        <Acordeon nombreVendedor="Cliente top 1">
          <div className=" p-2 w-full bg-[#DFCCFB] rounded-md">
            <Venta nombre="Cliente Generico 1" />
          </div>
        </Acordeon>
        <Acordeon nombreVendedor="Cliente top 2">
          <div className=" p-2 w-full bg-[#DFCCFB] rounded-md">
            <Venta nombre="Cliente Generico 2" />
          </div>
        </Acordeon>
      </div>
    </div>
  );
};
