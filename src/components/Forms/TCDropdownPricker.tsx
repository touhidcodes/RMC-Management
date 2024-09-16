import { TextField, InputAdornment, IconButton, MenuItem } from "@mui/material";
import { SxProps } from "@mui/material/styles";
import { Controller, useFormContext } from "react-hook-form";
import { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"; // Import dropdown icon

type TDropdownPickerProps = {
  name: string;
  label?: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
  sx?: SxProps;
  required?: boolean;
  options: { value: string | number; label: string }[]; // Array of options for the dropdown
};

const TCDropdownPicker = ({
  name,
  label,
  size = "small",
  fullWidth,
  sx,
  required,
  options,
}: TDropdownPickerProps) => {
  const { control } = useFormContext();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          label={label}
          size={size}
          fullWidth={fullWidth}
          sx={{ ...sx }}
          select // Enables the dropdown functionality
          value={field.value || ""}
          onClick={() => setDropdownOpen(!dropdownOpen)} // Toggle dropdown
          placeholder={label}
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

export default TCDropdownPicker;
