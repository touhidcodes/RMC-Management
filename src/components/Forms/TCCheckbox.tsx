import { Checkbox, FormControlLabel, FormHelperText } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TCCheckboxProps = {
  name: string;
  label?: string;
  required?: boolean;
  onChange?: (checked: boolean) => void;
};

const TCCheckbox = ({ name, label, required, onChange }: TCCheckboxProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <>
          <FormControlLabel
            control={
              <Checkbox
                {...field}
                checked={!!field.value} // Ensure it's treated as a boolean
              />
            }
            label={label || ""}
          />
          {error && <FormHelperText error>{error.message}</FormHelperText>}
        </>
      )}
    />
  );
};

export default TCCheckbox;
