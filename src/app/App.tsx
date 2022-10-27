import { King } from "../components/card";
import { kingData } from "../models/listCard";

export function App() {
    return (
        <>
            <King
                name={kingData.name}
                family={kingData.family}
                age={kingData.age}
                status={kingData.status}
                message={kingData.message}
                kingdomYear={kingData.kingdomYear}
                imageURL={kingData.imageURL.toString()}
            />
        </>
    );
}

export default App;
