function Update(data, definition) {
    Render(data, definition);
}

function Render(data, definition) {
    // Clear the document body.
    document.body.innerHTML = "";

    var pnlColumn, pnlEmotions, pnlEmotion, label, height;
    // Run through all data entries.
    // Using the sample report definition the
    // data structure will look like the following:
    // [{ 
    // "Market": "Germany", 
    // "Emotion": [0.8, 0.6, 0.4, 0.3, 0.2], 
    // "ERS": { "Score": 0.5, "Positive": 1, "Negative": -1 }
    // }]
    for (var i = 0; i < data.length; i++) {
        var totalHeight = 0;

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

        // Set the width of the column so the chart
        // uses the maximum amount of screen space.
        pnlColumn.style.width = "calc(" + (100 / data.length) + "% - 40px)";

        // Add the label to the market container.
        pnlColumn.appendChild(label);

        // Run through all emotions of the market.
        for (var e = 0; e < data[i].Emotion.length; e++) {
            // Create a new container for the emotion.
            pnlEmotion = document.createElement("div");
            pnlEmotion.className = "Emotion Emotion_" + e;

            // Set the height to x% of the max percentage. x equals the emotion score.
            height = (data[i].Emotion[e] / data[i].Count) * 100;
            pnlEmotion.style.height = height + "%";
            totalHeight += height;

            // Assign the predefined color for the
            // emotion to the container as background - color.
            pnlEmotion.style.backgroundColor = "var(--color-emotions-" + e + ")";

            // Add the emotion control to the market container.
            pnlColumn.appendChild(pnlEmotion);
        }

        label.style.height = (50 - (totalHeight / 2)) + "%";

        // Add the column control to the document body.
        document.body.appendChild(pnlColumn);
    }
}