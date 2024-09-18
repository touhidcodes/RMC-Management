import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Typography,
} from "@mui/material";
import { SxProps } from "@mui/material/styles";
import { Controller, useFormContext } from "react-hook-form";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import styles
import DateRangeIcon from "@mui/icons-material/DateRange"; // Import date range icon

type TDatePickerProps = {
  name: string;
  label?: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
  sx?: SxProps;
  required?: boolean;
};

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const TCDatePicker = ({
  name,
  label,
  size = "small",
  fullWidth,
  sx,
  required,
}: TDatePickerProps) => {
  const { control, setValue } = useFormContext();
  const [calendarOpen, setCalendarOpen] = useState(false);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <>
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
            label={label}
            size={size}
            fullWidth={fullWidth}
            sx={{ background: "#fff", ...sx }}
            onClick={() => setCalendarOpen(!calendarOpen)}
            value={field.value ? field.value.toLocaleDateString() : ""}
            placeholder={label}
            required={required}
            error={!!error?.message}
            helperText={error?.message}
            InputProps={{
              readOnly: true,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setCalendarOpen(!calendarOpen)}>
                    <DateRangeIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {calendarOpen && (
            <Box mt={2}>
              <Calendar
                onChange={(value: Value) => {
                  if (value instanceof Date) {
                    setValue(name, value);
                  }
                  setCalendarOpen(false);
                }}
                value={field.value || new Date()}
              />
            </Box>
          )}
        </>
      )}
    />
  );
};

export default TCDatePicker;
