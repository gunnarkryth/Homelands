import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext"; // Adjust the path as needed

export const Login = () => {
  const { setUserData } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check credentials against the provided values
    if (email === "info@webudvikler.dk" && password === "password") {
      // Set user data in the context
      setUserData({ email, loggedIn: true });
      setError(null);
      // Redirect to the home page (or any other protected route)
      navigate("/");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && (
          <Typography color="error" sx={{ mt: 1 }}>
            {error}
          </Typography>
        )}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3 }}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
};
