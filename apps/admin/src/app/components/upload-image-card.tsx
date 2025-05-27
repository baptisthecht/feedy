import { Button, cn } from "@feedy/shared";
import { ChangeEvent, useRef } from "react";
import { ShineBorder } from "./ui/shine-border";

export function UploadImageCard({
  onUpload,
  shining,
}: {
  onUpload: (file: File) => void;
  shining: boolean;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onUpload(file);
    }
  };
  return (
    <div
      className={cn(
        "p-6 flex flex-col gap-4 border border-stroke-sub-300 rounded-2xl border-dashed cursor-pointer relative",
        shining && "cursor-progress",
      )}
      onClick={() => inputRef.current?.click()}
    >
      {shining && (
        <ShineBorder
          shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          className="rounded-2xl"
        />
      )}
      <div className="flex flex-col gap-1">
        {shining ? (
          <>
            <p className="text-label-md text-text-sub-600">
              Génération en cours...
            </p>
            <p className="text-label-sm text-text-soft-400">
              Cette opération peut prendre quelques secondes...
            </p>
          </>
        ) : (
          <>
            <p className="text-label-md text-text-sub-600">
              Choisissez un fichier ou glissez-le ici.
            </p>
            <p className="text-label-sm text-text-soft-400">
              JPEG, PNG, SVG et GIF, jusqu&apos;à 10MB.
            </p>
          </>
        )}
      </div>
      {!shining && (
        <Button variant="neutral" mode="stroke" size="xsmall" className="w-min">
          Parcourir
        </Button>
      )}
      <input
        type="file"
        accept="image/*"
        onChange={onFileChange}
        className="hidden"
        ref={inputRef}
      />
    </div>
  );
}
