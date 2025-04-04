import {
  Box,
  TextField,
  InputAdornment,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { pink } from "@mui/material/colors";

export const SearchInput = ({
  value,
  onChange,
  onSubmit,
  sx,
}) => {
  return (
    <Box
      component="form"
      autoComplete="off"
      // onSubmit={onSubmit}
      sx={{
        ...sx,
        backgroundColor: "secondary.main",
        borderRadius: 4,
      }}
    >
      <TextField
        id="search-input"
        label=""
        variant="outlined"
        size="small"
        fullWidth
        placeholder="Search item"
        // value={value}
        // onChange={onChange}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment /* position="start" */>
                <SearchIcon
                  sx={{ color: "primary.text" }}
                />
              </InputAdornment>
            ),
          },
        }}
        sx={{
          "& label.Mui-focused": {
            // color: "focus.main",
            // borderColor: "#E0E3E7",
          },
          "& .MuiInput-underline:after": {
            // borderBottomColor: "focus.main",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              // borderColor: "secondary.main",
              borderRadius: 4,
            },
            "&:hover fieldset": {
              // borderColor: "focus.main",
            },
            "&.Mui-focused fieldset": {
              // borderColor: "#6F7E8C",
            },
          },
          "& .MuiInputBase-input": {
            borderRadius: 4,
            // position: "relative",
            color: "primary.text",
            // backgroundColor: "secondary.main",
            // border: "1px solid",
            // borderColor: "#E0E3E7",
            // fontSize: 16,
            // width: "auto",
            // padding: "10px 12px",
          },
        }}
      />
    </Box>
  );
};
