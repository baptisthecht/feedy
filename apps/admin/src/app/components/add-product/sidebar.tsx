import { appear } from "@/motions/appear";
import { cn } from "@feedy/shared/utils/cn";
import { RiCheckboxCircleFill } from "@remixicon/react";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { useAddProduct } from "./context";
export function AddProductSidebar() {
  const { step } = useAddProduct();
  return (
    <aside className="w-56 h-full bg-bg-white-0 flex-col gap-12 p-5 pr-0 hidden xl:flex">
      <figure className="size-8 bg-primary rounded-full"></figure>
      <nav className="flex-1 flex flex-col gap-8 relative">
        <Step title="Informations générales" number={1} />
        <Step title="Tarification" number={2} />
        <Step title="Image" number={3} />
        <Step title="Restrictions et allergènes" number={4} />
        <Step title="Résumé" number={5} />
        <motion.figure
          className="bg-primary w-0.5 h-12 absolute right-0"
          animate={{
            y: (step - 1) * (48 + 32),
          }}
          transition={{
            y: {
              type: "spring",
              stiffness: 100,
              damping: 20,
              mass: 1,
            },
          }}
        />
      </nav>
      <p className="text-text-soft-400 text-paragraph-xs">
        © {new Date().getFullYear()} Feedy
      </p>
    </aside>
  );
}

const Step = ({ title, number }: { title: string; number: number }) => {
  const { step, setStep } = useAddProduct();
  const isActive = useMemo(() => number === step, [number, step]);
  const isClickable = useMemo(() => number < step, [number, step]);
  return (
    <motion.div
      className={cn("w-[206px] z-2 pr-8 flex flex-col gap-2", {
        "cursor-pointer": isClickable,
      })}
      onClick={() => {
        if (isClickable) {
          setStep(number);
        }
      }}
      {...appear}
    >
      <p
        className={cn("text-label-sm flex items-center gap-1.5", {
          "text-primary": isActive,
          "text-text-soft-400": !isActive,
        })}
      >
        <span>Étape {number}/5</span>
        {step > number && (
          <RiCheckboxCircleFill className="fill-success-base" size={14} />
        )}
      </p>
      <p
        className={cn(
          "text-label-sm",
          isActive ? "text-bg-strong-950" : "text-text-sub-600",
        )}
      >
        {title}
      </p>
    </motion.div>
  );
};
