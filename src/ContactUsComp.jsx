import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  TextField,
  styled,
} from "@mui/material";

const CustomTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#074B65",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "",
    },
    "&:hover fieldset": {
      borderColor: "",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#074B65",
    },
  },
});

export const ContactUsComp = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  // Email validation for @gmail.com
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!value.endsWith("@gmail.com")) {
      setEmailError("Email must be a @gmail.com address.");
    } else {
      setEmailError("");
    }
  };

  // Phone number validation for numeric values only
  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      // Checks for numeric values only
      setPhone(value);
      setPhoneError("");
    } else {
      setPhoneError("Phone number should contain numbers only.");
    }
  };

  return (
    <Box py={12} className="bgcolor">
      <Container maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom>
          Contact Us
        </Typography>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={8}>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <CustomTextField
                    fullWidth
                    label="First Name"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <CustomTextField
                    fullWidth
                    label="Last Name"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <CustomTextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={handleEmailChange}
                    error={!!emailError}
                    helperText={emailError}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <CustomTextField
                    fullWidth
                    label="Phone Number"
                    variant="outlined"
                    value={phone}
                    onChange={handlePhoneChange}
                    error={!!phoneError}
                    helperText={phoneError}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomTextField
                    fullWidth
                    label="Organization"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomTextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Stack direction="row" justifyContent="flex-end">
                    <Button
                      variant="contained"
                      size="large"
                      sx={{
                        background: "#074B65",
                        borderRadius: "0 20px",
                        boxShadow: "none",
                        transition: "background 0.3s ease-in-out",
                        textTransform: "capitalize",
                        "&:hover": {
                          background: "#D31480",
                          transition: "background 0.3s ease-in-out",
                          boxShadow: "none",
                        },
                        width: "40%",
                      }}
                    >
                      Submit
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactUsComp;