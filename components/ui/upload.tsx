import { UploadIcon } from "../icons/upload";
import { InputProps } from "./input";
import * as React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

interface UploadProps extends InputProps {
  field: any;
  disabled: boolean;
}
const Upload = React.forwardRef<HTMLInputElement, UploadProps>(
  ({ className, type, field, disabled, ...props }) => {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    useEffect(() => {
      if (disabled) {
        setSelectedImage(null);
      }
    }, [disabled]);
    return (
      <div
        className={cn(
          "w-full  text-muted-foreground lg:p-2 p-4 lg:h-72 overflow-hidden flex justify-center items-center bg-background mx-auto rounded-lg border-2 border-dashed border-electric-violet-400 ",
          disabled && "opacity-50"
        )}
      >
        <label
          htmlFor="fileInput"
          className="text-center  w-full h-full flex flex-col justify-center items-center cursor-pointer"
        >
          <Input
            {...props}
            disabled={disabled}
            type="file"
            className="hidden"
            id="fileInput"
            onChange={(e) => {
              field.onChange(e.target.files);
              setSelectedImage(e.target.files?.[0] || null);
            }}
            ref={field.ref}
          />
          {selectedImage ? (
            <motion.img
              src={URL.createObjectURL(selectedImage)}
              alt="image update"
              width={280}
              height={280}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={"mx-auto mt-4 rounded-lg"}
            />
          ) : (
            <UploadIcon className="w-20 h-20 mx-auto mb-4 text-electric-violet-400 " />
          )}
          <p className="text-[0.8rem] flex flex-col mt-4 gap-1">
            <span className="text-electric-violet-400">Click to upload</span>
            <span>file supported .png, .jpg, .jpeg, .webp</span>
          </p>
        </label>
      </div>
    );
  }
);
Upload.displayName = "Upload";

export { Upload };
