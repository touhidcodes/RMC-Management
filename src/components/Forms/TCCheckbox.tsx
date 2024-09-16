import { Checkbox, FormControlLabel } from "@mui/material";
import { SxProps } from "@mui/material/styles";
import { Controller, useFormContext } from "react-hook-form";
import React from "react"; // Import React to use its types

type TCCheckboxProps = {
  name: string;
  label: string;
  sx?: SxProps;
  required?: boolean;
};

const TCCheckbox = ({ name, label, sx, required }: TCCheckboxProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FormControlLabel
          control={
            <Checkbox
              {...field}
              checked={!!field.value} // Convert value to boolean for the checkbox
              onChange={
                (e: React.ChangeEvent<HTMLInputElement>) =>
                  field.onChange(e.target.checked) // Toggle between true and false
              }
              sx={{
                color: field.value ? "purple" : "default", // Purple when checked
                "&.Mui-checked": {
                  color: "purple", // Keep the checkbox purple when checked
                },
                ...sx, // Spread any additional custom styles
              }}
            />
          }
          label={label}
          required={required}
        />
      )}
    />
  );
};

export default TCCheckbox;
