import { Box, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../theme"; // تأكد من استيراد tokens من مكانه الصحيح

const SearchBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      display="flex"
      alignItems="center"
      backgroundColor={colors.primary[500]}
      borderRadius="50px"
      padding="8px 15px"
      flex={1}
      maxWidth="400px" // ضبط عرض البحث ليكون أكثر تناسقًا
    >
      <InputBase
        placeholder="Search"
        sx={{
          color: colors.grey[100],
          "::placeholder": {
            color: colors.grey[300],
          },
          flex: 1,
          marginLeft: "10px",
        }}
      />
      <IconButton>
        <SearchIcon sx={{ color: colors.grey[100] }} />
      </IconButton>
    </Box>
  );
};

export default SearchBar;
