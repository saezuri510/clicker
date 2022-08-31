const WEATHER = [
    { weather: "sunny", umbrella: false },
    { weather: "cloudy", umbrella: false },
    { weather: "rainy", umbrella: true },
    { weather: "snowy", umbrella: true },
    { weather: "windy", umbrella: false },
];

function App() {
    return (
        <ul>
            {WEATHER.map((value) => {
                return <li>{value.weather}</li>;
            })}
        </ul>
    );
}

export default App;
