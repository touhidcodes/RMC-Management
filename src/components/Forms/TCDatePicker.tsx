import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import {
  TextField,
  InputAdornment,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import DateRangeIcon from "@mui/icons-material/DateRange";

// Define a custom date format
const formatDate = (date: Dayjs | null) => {
  return date ? date.format("DD/MM/YYYY") : "";
};

// Define the props for the custom date input component
interface CustomDateInputProps {
  value: Dayjs | null;
  onClick: () => void;
}

// Custom input component to display the formatted date
const CustomDateInput: React.FC<CustomDateInputProps> = ({
  value,
  onClick,
}) => {
  return (
    <TextField
      value={formatDate(value)}
      onClick={onClick}
      fullWidth
      size="small"
      sx={{ background: "#fff" }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={onClick} size="small">
              <DateRangeIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

type TDatePickerProps = {
  name: string;
  label?: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
  required?: boolean;
};

const TCDatePicker: React.FC<TDatePickerProps> = ({
  name,
  label,
  size = "small",
  fullWidth,
  required = false,
}) => {
  const { control, setValue, watch } = useFormContext();
  const [calendarOpen, setCalendarOpen] = React.useState(false);
  const currentValue = watch(name);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box>
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
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <>
              <CustomDateInput
                value={currentValue ? dayjs(currentValue) : null}
                onClick={() => setCalendarOpen(!calendarOpen)}
              />
              {calendarOpen && (
                <Box
                  sx={{
                    position: "absolute",
                    zIndex: 1200,
                    mt: 1,
                    backgroundColor: "#fff",
                    borderRadius: 3,
                    boxShadow: 3,
                    "& .MuiDateCalendar-root": {
                      backgroundColor: "#fff",
                      borderRadius: 3,
                    },
                  }}
                >
                  <DateCalendar
                    value={currentValue ? dayjs(currentValue) : dayjs()}
                    onChange={(newValue: Dayjs | null) => {
                      setValue(
                        name,
                        newValue ? newValue.format("YYYY-MM-DD") : null
                      );
                      setCalendarOpen(false);
                    }}
                  />
                </Box>
              )}
            </>
          )}
        />
      </Box>
    </LocalizationProvider>
  );
};

export default TCDatePicker;
