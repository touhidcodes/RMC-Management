import { Box, TextField, InputAdornment, IconButton } from "@mui/material";
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
          <TextField
            {...field}
            label={label}
            size={size}
            fullWidth={fullWidth}
            sx={{ ...sx }}
            onClick={() => setCalendarOpen(!calendarOpen)} // Open calendar on field click
            value={field.value ? field.value.toLocaleDateString() : ""}
            placeholder={label}
            required={required}
            error={!!error?.message}
            helperText={error?.message}
            InputProps={{
              readOnly: true, // Prevent typing
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
                    setValue(name, value); // Set form date directly
                  }
                  setCalendarOpen(false); // Close calendar after selection
                }}
                value={field.value || new Date()} // Default to current date
              />
            </Box>
          )}
        </>
      )}
    />
  );
};

export default TCDatePicker;
