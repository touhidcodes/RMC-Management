import { TextField, Typography } from "@mui/material";
import { SxProps } from "@mui/material/styles";
import { Controller, useFormContext } from "react-hook-form";
type TInputProps = {
  name: string;
  label?: string;
  type?: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
  sx?: SxProps;
  placeholder?: string;
  required?: boolean;
  children?: React.ReactNode;
  select?: boolean;
};

const TCInput = ({
  name,
  label,
  type = "text",
  size = "small",
  fullWidth,
  sx,
  required,
  children,
  select = false,
}: TInputProps) => {
  const { control } = useFormContext();
  const isNumberType = type === "number";
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

          {/* Input Field */}
          <TextField
            {...field}
            sx={{
              backgroundColor: "#fff",
              ...sx,
            }}
            type={type}
            variant="outlined"
            size={size}
            fullWidth={fullWidth}
            placeholder={label}
            required={required}
            error={!!error?.message}
            helperText={error?.message}
            inputProps={
              isNumberType ? { inputMode: "numeric", pattern: "[0-9]*" } : {}
            }
            select={select}
          >
            {children}
          </TextField>
        </>
      )}
    />
  );
};

export default TCInput;
