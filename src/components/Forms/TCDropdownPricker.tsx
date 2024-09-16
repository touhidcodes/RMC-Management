import { MenuItem, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TDropdownPickerProps = {
  name: string;
  label?: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
  options: { value: string; label: string }[]; // Dropdown options
  required?: boolean;
};

const TDropdownPicker = ({
  name,
  label,
  size = "small",
  fullWidth,
  options,
  required,
}: TDropdownPickerProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          select // This turns the TextField into a dropdown
          label={label}
          size={size}
          fullWidth={fullWidth}
          required={required}
          error={!!error?.message}
          helperText={error?.message}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
};

export default TDropdownPicker;
