function Update(data, definition) {
    Render(data, definition);
}

function Render(data, definition) {
    // Clear the document body.
    document.body.innerHTML = "";

    var pnlColumn, pnlEmotion, label;
    // Run through all data entries.
    // Using the sample report definition the
    // data structure will look like the following:
    // [{ 
    // "Market": "Germany", 
    // "Emotion": [0.8, 0.6, 0.4, 0.3, 0.2], 
    // "ERS": { "Score": 0.5, "Positive": 1, "Negative": -1 }
    // }]
    for (var i = 0; i < data.length; i++) {
        // Create a new container element for the market.
        pnlColumn = document.createElement("div");
        pnlColumn.className = "Column";

        // Create a new label to display the market.
        label = document.createElement("div");
        label.className = "Label";

        // It is good practice to always use the dimension defined in the report,
        // instead of referencing directly to "Market".This way the
        // dimension can easily be changed through the report element settings.
        label.innerHTML = data[i][definition.Dimension];

        // Add the label to the market container.
        pnlColumn.appendChild(label);

        // Run through all emotions of the market.
        for (var e = 0; e < data[i].Emotion; e++) {
            // Create a new container for the emotion.
            pnlEmotion = document.createElement("div");
            pnlEmotion.className = "Emotion";

            // Assign the predefined color for the
            // emotion to the container as background - color.
            pnlEmotion.style.backgroundColor = "var(--color-emotions-" + e + ")";

            // Add the emotion control to the market container.
            pnlColumn.appendChild(pnlEmotion);
        }

        // Add the column control to the document body.
        document.body.appendChild(pnlColumn);
    }
}