// Store the selected number and move to emoji selection page
function selectNumber(num) {
    localStorage.setItem("selectedNumber", num);
    console.log("Selected Number:", num); // Debugging Log
    window.location.href = "emoji.html"; // Redirect to Emoji selection
}

// Store the selected emoji and move to color selection page
function selectEmoji(emoji) {
    localStorage.setItem("selectedEmoji", emoji);
    console.log("Selected Emoji:", emoji); // Debugging Log
    window.location.href = "color.html"; // Redirect to Color selection
}

// Store the selected color and then display final message
function selectColor(color) {
    localStorage.setItem("selectedColor", color);
    console.log("Selected Color:", color); // Debugging Log
    window.location.href = "result.html"; // Redirect to Result page
}

// Function to generate final mood prediction
function generateFinalMessage() {
    let num = localStorage.getItem("selectedNumber");
    let emoji = localStorage.getItem("selectedEmoji");
    let color = localStorage.getItem("selectedColor");

    console.log("Retrieved Data -> Number:", num, "Emoji:", emoji, "Color:", color); // Debugging Log

    // Check if all selections are made
    if (!num || !emoji || !color) {
        console.log("Selection incomplete.");
        return "Oops! Please complete all steps to get your MoodMap prediction.";
    }

    let key = `${num}-${emoji}-${color}`; // Corrected format: Number → Emoji → Color

    console.log("Generated Key:", key); // Debugging log to verify key structure

    const moodData = {
        // 🔴 Red - Passion, Energy, Boldness
        "1-😊-Red": "Fueled by joy, you’re unstoppable today!",
        "2-😌-Red": "Find passion in quiet moments—energy comes from within.",
        "3-🤩-Red": "A day for bold moves—let your enthusiasm lead!",
        "4-😴-Red": "Don’t let exhaustion drain your fire—rest wisely!",
        "5-😎-Red": "Fearless and determined—you own your power today!",
        "6-😍-Red": "Love fuels action—express it boldly!",
        "7-😵-Red": "Embrace energy without burnout—find balance!",
        "8-😩-Red": "Push forward, but don’t forget to breathe!",
        "9-🤯-Red": "Big realizations today—channel them into action!",

        // 🟢 Green - Growth, Peace, Renewal
        "1-😊-Green": "Your confidence shines today! A calm, steady mind fuels success.",
        "2-😌-Green": "Balance is your strength. Find peace in the little moments.",
        "3-🤩-Green": "Creative energy flows freely—turn ideas into reality!",
        "4-😴-Green": "Slow down and recharge. Growth needs rest too!",
        "5-😎-Green": "Freedom and clarity align—go forward boldly!",
        "6-😍-Green": "Warm connections bring joy. Cherish relationships today.",
        "7-😵-Green": "Take a deep breath. Peace is found in stillness.",
        "8-😩-Green": "Your patience will bring growth. Stay steady!",
        "9-🤯-Green": "New insights push you forward—embrace change!",

        // 🔵 Blue - Calmness, Trust, Introspection
        "1-😊-Blue": "Your confidence is rooted in wisdom—keep trusting yourself!",
        "2-😌-Blue": "Flow effortlessly today—peace leads to productivity.",
        "3-🤩-Blue": "Creative bursts come from inner stillness—find time to reflect.",
        "4-😴-Blue": "Rest fuels deep thought—slow down when needed.",
        "5-😎-Blue": "Strong but calm—a powerful combination!",
        "6-😍-Blue": "Connection is your strength—embrace emotional trust.",
        "7-😵-Blue": "Find calm amidst chaos—your clarity will return!",
        "8-😩-Blue": "Deep focus brings peace—work through it one step at a time.",
        "9-🤯-Blue": "A day of wisdom and understanding—let your insights lead!",

        // 🟡 Yellow - Optimism, Fun, Energy
        "1-😊-Yellow": "Your energy is contagious—spread joy today!",
        "2-😌-Yellow": "Happiness comes in quiet moments—enjoy life's simplicity.",
        "3-🤩-Yellow": "A burst of creativity awaits—go explore it!",
        "4-😴-Yellow": "Recharge now—your spark will return stronger!",
        "5-😎-Yellow": "Shine like the sun—your confidence is magnetic!",
        "6-😍-Yellow": "Love and warmth fill your day—embrace them fully!",
        "7-😵-Yellow": "Too much buzzing energy? Take it one step at a time!",
        "8-😩-Yellow": "Optimism fuels resilience—hold onto positivity!",
        "9-🤯-Yellow": "Breakthroughs happen when you see joy in change!",

        // 🟣 Purple - Mystery, Intuition, Reflection
        "1-😊-Purple": "Your instincts are strong—trust your inner wisdom.",
        "2-😌-Purple": "A peaceful, introspective day—listen to your thoughts.",
        "3-🤩-Purple": "Creativity and deep thinking merge beautifully today!",
        "4-😴-Purple": "Dreaming leads to insights—let your ideas evolve.",
        "5-😎-Purple": "Confidence in your intuition brings breakthroughs!",
        "6-😍-Purple": "Love feels deeply spiritual today—embrace connections.",
        "7-😵-Purple": "Feeling lost? Quiet reflection will reveal answers.",
        "8-😩-Purple": "Emotional depth is your strength—work through feelings.",
        "9-🤯-Purple": "A profound realization changes your perspective today!"
    };

    let message = moodData[key] || "Your choices suggest balance and creativity. Make today meaningful!";
    console.log("Final Message:", message); // Debugging log to verify correct mood selection
    return message;
}

// Function to display final message in `result.html`
function displayFinalMessage() {
    let finalMessage = generateFinalMessage();
    document.getElementById("finalMessage").innerText = finalMessage;
}
