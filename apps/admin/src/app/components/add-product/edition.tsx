import { Record } from "@feedy/shared/prisma/client/runtime/library";
import { RiArrowLeftSLine, RiCloseLine } from "@remixicon/react";
import { AnimatePresence } from "framer-motion";
import { useAddProduct } from "./context";
import { AddProductEditionStep1 } from "./steps/1";
import { AddProductEditionStep2 } from "./steps/2";
import { AddProductEditionStep3 } from "./steps/3";
import { AddProductEditionStep4 } from "./steps/4";
import { AddProductEditionStep5 } from "./steps/5";

export function AddProductEdition() {
  const { step } = useAddProduct();
  const components: Record<number, React.ReactNode> = {
    1: <AddProductEditionStep1 key="step-1" />,
    2: <AddProductEditionStep2 key="step-2" />,
    3: <AddProductEditionStep3 key="step-3" />,
    4: <AddProductEditionStep4 key="step-4" />,
    5: <AddProductEditionStep5 key="step-5" />,
  };

  return (
    <section className="flex flex-col p-3 justify-between flex-1 items-center">
      <div className="flex justify-between w-full p-6">
        <div className="flex items-start gap-2">
          <RiArrowLeftSLine className="text-text-sub-600" size={20} />
          <p className="text-label-sm text-text-sub-600">Retour</p>
        </div>
        <RiCloseLine className="text-text-sub-600" size={18} />
      </div>
      <AnimatePresence mode="wait">{components[step]}</AnimatePresence>
      <div className="h-12"></div>
    </section>
  );
}
