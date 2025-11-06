// Format temperature to celsius 
export const formatTemperature = (temp) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "unit",
    unit: "celsius",
    unitDisplay: "narrow",
  });
  const value = Math.round(temp);
  return formatter.format(value);
};

// Provide dress-up suggestion according to weather temperature
export const dressUpSuggestion = (temp) => {
  return temp < 15 ?
    "It's quite cool — consider wearing a jacket, sweater, or layers."
    : temp >= 15 && temp <= 25 ?
      "Mild weather — a light jacket or t-shirt should be perfect."
      :
      "It's warm — wear light clothes like a t-shirt, shorts, or a tank top."

}

// Provide extra suggestion according to weather condition
export const getExtraSuggestion = (condition) => {
  const normalize = condition.toLowerCase();

  switch (normalize) {
    case "clear":
      return "Perfect weather for a walk or some outdoor fun!";
    case "clouds":
      return "A few clouds out there — still a lovely day.";
    case "rain":
      return "Rainy day vibes! Don't forget your umbrella or waterproof gear.";
    case "thunderstorm":
      return "Thunderstorms nearby — best to stay indoors and stay safe.";
    case "snow":
      return "It's snowing! Bundle up and enjoy the winter magic.";
    case "drizzle":
      return "Just a light drizzle — you might not need a full umbrella.";
    default:
      return "Weather looks mixed — stay prepared and have a great day!";
  }
};

// Function to POST required data to pipedream
export const sendToPipedream =  (payload) => {
  try {
    const res =  fetch("https://eodg47xmatrd1jz.m.pipedream.net", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (res.ok) {
      console.log("Sent successfully!");
    } else {
      console.error("Failed:", res.statusText);
    }
  } catch (error) {
    console.error("Error sending to Pipedream:", error);
  }
};

