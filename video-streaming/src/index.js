const express = require("express");
const http = require("http");

if (!process.env.PORT) {
    throw new Error("Please specify the port number for the HTTP server with the environment variable PORT.");
}

if (!process.env.VIDEO_STORAGE_HOST) {
    throw new Error("Please specify the host name for the video storage microservice in variable VIDEO_STORAGE_HOST.");
}

if (!process.env.VIDEO_STORAGE_PORT) {
    throw new Error("Please specify the port number for the video storage microservice in variable VIDEO_STORAGE_PORT.");
}

const PORT = process.env.PORT;
const VIDEO_STORAGE_HOST = process.env.VIDEO_STORAGE_HOST;
const VIDEO_STORAGE_PORT = parseInt(process.env.VIDEO_STORAGE_PORT);
console.log(`Forwarding video requests to ${VIDEO_STORAGE_HOST}:${VIDEO_STORAGE_PORT}.`);

const app = express();

app.get("/video", (req, res) => {
    const videoPath = req.query.path || 'SampleVideo_1280x720_1mb.mp4';
    console.log(`Forwarding request for video: ${videoPath}`);

    const options = {
        host: VIDEO_STORAGE_HOST,
        port: VIDEO_STORAGE_PORT,
        path: `/video?path=${videoPath}`,
        method: 'GET',
        headers: req.headers
    };

    const forwardRequest = http.request(options, (forwardResponse) => {
        res.writeHeader(forwardResponse.statusCode, forwardResponse.headers);
        forwardResponse.pipe(res);
    });

    forwardRequest.on('error', (err) => {
        console.error('Error forwarding request:', err);
        res.status(500).send('Error forwarding request to video storage service');
    });

    req.pipe(forwardRequest);
});

app.listen(PORT, () => {
    console.log(`Microservice online on port ${PORT}`);
});