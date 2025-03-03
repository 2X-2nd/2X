import app from './app';

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

process.on('unhandledRejection', (err: Error) => {
    console.error(`Error: ${err.message}`);
    server.close(() => process.exit(1));
});
