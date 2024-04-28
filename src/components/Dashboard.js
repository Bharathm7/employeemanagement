import React from 'react';
import { Grid, Typography, Button, Link, Fade, Grow, Box, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
const Dashboard = () => {
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleAddEmployee = () => {
        navigate('/add-employee'); // Navigate to the add employee form
    };

    return (
        <Container maxWidth="md">
            <Grid container justifyContent="center" alignItems="center" spacing={3} sx={{ backgroundColor: '#f8f8f8', minHeight: '100vh', py: 8 }}>
                <Grid item xs={12}>
                    <Fade in timeout={1000}>
                        <Typography variant="h3" component="h1" align="center" sx={{ color: '#e0388e', mt: 4, mb: 2 }}>
                            Employee Dashboard
                        </Typography>
                    </Fade>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={3}>
                        <Grid item>
                            <Grow in timeout={1500}>
                                <Button variant="contained" onClick={handleAddEmployee} sx={{ backgroundColor: '#e0388e', color: 'white' }}>
                                    Add Employee
                                </Button>
                            </Grow>
                        </Grid>
                        <Grid item>
                            <Grow in timeout={2000}>
                                <Link href="/view-employees" underline="none">
                                    <Button variant="contained" sx={{ backgroundColor: '#e0388e', color: 'white' }}>
                                        View Employees
                                    </Button>
                                </Link>
                            </Grow>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ mt: 6 }}>
                    <Box textAlign="center">
                        <Typography variant="body2" sx={{ color: '#555' }}>
                            For assistance, contact us at <Link href="mailto:support@example.com">support@example.com</Link>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Dashboard;
