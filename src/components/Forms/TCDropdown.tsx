import { MenuItem, TextField, Typography } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TDropdownProps = {
  name: string;
  label?: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
  options: { value: string; label: string }[]; // Dropdown options
  required?: boolean;
};

const TCDropdown = ({
  name,
  label,
  size = "small",
  fullWidth,
  options,
  required,
}: TDropdownProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <>
          {/* Label with Required Star */}
          {label && (
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bold",
                fontFamily: "var(--font-Bahnschrift)",
                fontSize: 16,
                color: "#4A5568",
              }}
            >
              {label}{" "}
              {required && (
                <Typography component="span" color="error">
                  *
                </Typography>
              )}
            </Typography>
          )}

          <TextField
            {...field}
            sx={{
              backgroundColor: "#fff",
            }}
            variant="outlined"
            select
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
        </>
      )}
    />
  );
};

export default TCDropdown;
