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
                return (
                    <>
                        <p>{value.weather}</p>
                        {value.umbrella ? (
                            <p>I need my umbrella</p>
                        ) : (
                            <p>I don't need my umbrella</p>
                        )}
                    </>
                );
            })}
        </ul>
    );
}

export default App;
