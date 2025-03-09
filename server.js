const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');  // Import CORS

const app = express();
const port = 3000;

const PAT = '1G8X8Abs2Y8KvLM8GSkujuxxYoZqBo3evK2jQqMpTFv012R1abUrJQQJ99BCACAAAAAAArohAAASAZDO489R';  // Replace with actual PAT

app.use(bodyParser.json());
app.use(cors());  // Enable CORS

app.post('/duplicate', async (req, res) => {
    console.log("Received Request:", req.body);

    const { workItemId, areaPaths, assignees, serviceGEMOwners, serviceEMOwners } = req.body;

    if (!workItemId || areaPaths.length === 0 || assignees.length === 0) {
        return res.status(400).json({ success: false, error: "Missing required fields" });
    }

    try {
        // Process duplication logic (same as before)
        const results = [];  // Store results here

        for (let i = 0; i < areaPaths.length; i++) {
            const areaPath = areaPaths[i];
            const assignee = assignees[i];
            const serviceGEMOwner = serviceGEMOwners[i] || "";
            const serviceEMOwner = serviceEMOwners[i] || "";

            // Simulated response (replace with actual logic)
            results.push({
                areaPath,
                status: "Success",
                newWorkItemId: Math.floor(Math.random() * 1000000)  // Mock Work Item ID
            });
        }

        res.json({ success: true, results });
    } catch (error) {
        console.error("Error processing request:", error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

