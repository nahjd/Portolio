import React from "react";
import AnimatedCursor from "react-animated-cursor";

function AnimeCursor() {
    return (
        <div>
            <AnimatedCursor
                innerSize={8}
                outerSize={35}
                innerScale={1}
                outerScale={2}
                outerAlpha={0}
                hasBlendMode={true}
                innerStyle={{
                    backgroundColor: "#fff",
                    cursor: "pointer"
                }}
                outerStyle={{
                    border: "3px solid #ccc",
                    cursor: "pointer"
                }}
            />
        </div>
    );
}

export default AnimeCursor;
