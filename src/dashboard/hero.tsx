import { useState } from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import DialogAlert from "../shared/components/DialogAlert";

export default function Hero() {
    const [isDialogBookingOpen, setIsDialogBookingOpen] =
        useState<boolean>(false);

    const handleBookingButton = () => {
        setIsDialogBookingOpen(!isDialogBookingOpen);
    };

    return (
        <div className="px-5 mt-8 mb-48">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold dark:text-white    text-[hsl(0,0%,8%)] lg:text-7xl">
                    ¡Reserva con nosotros!
                </h1>
                <p className=" text-base lg:text-lg my-6 dark:text-white text-[hsl(0,0%,41%)] font-medium">
                    Tenemos todo lo necesario para cubrir tu evento, deleita tu
                    paladar con nuestro inmenso sabor.
                </p>
                <p className=" text-base lg:text-lg my-6 dark:text-white text-[hsl(0,0%,41%)] font-medium">
                    Arma tu paquete como te guste y reserva con anticipación.
                </p>
                <div
                    onClick={handleBookingButton}
                    className=" text-white dark:text-black dark:bg-[#F2F2F2] bg-[hsl(0,0%,8%)] dark:hover:bg-pink-500 hover:bg-transparent hover:border hover:text-[hsl(0,0%,8%)] hover:border-[hsl(0,0%,8%)] py-3 px-6 rounded-xl"
                >
                    Reservar
                </div>
            </div>
            {isDialogBookingOpen && (
                <DialogAlert
                    icon={<BsFillInfoCircleFill color="red" />}
                    title="¡Advertencia!"
                    message="Pronto contactaremos con esta opción."
                    onClose={handleBookingButton}
                />
            )}
        </div>
    );
}
