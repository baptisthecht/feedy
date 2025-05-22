import { Button } from "@feedy/shared";
import { ChangeEvent, useRef } from "react";

export function UploadImageCard({
  onUpload,
}: {
  onUpload: (file: File) => void;
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
      className="p-6 flex flex-col gap-4 border border-stroke-sub-300 rounded-2xl border-dashed cursor-pointer"
      onClick={() => inputRef.current?.click()}
    >
      <div className="flex flex-col gap-1">
        <p className="text-label-md text-text-sub-600">
          Choisissez un fichier ou glissez-le ici.
        </p>
        <p className="text-label-sm text-text-soft-400">
          JPEG, PNG, SVG et GIF, jusqu&apos;à 10MB.
        </p>
      </div>
      <Button variant="neutral" mode="stroke" size="xsmall" className="w-min">
        Parcourir
      </Button>
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
