import { use, useState } from "react";

// export default function Tester() {
//     // UserState is to remember something on the website
//     const [isOn, setIsOn] = useState(false);
//     return (
//         <button onClick={() => setIsOn(!isOn)}>
//             {isOn? "ON" : "OFF"}
//         </button>
//     );
// }

export default function Tester() {
    // UserState is to remember something on the website
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <>
            <input 
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            <p className="alert alert-info mt-4">
                {searchTerm}
            </p>
        </>
    );
}