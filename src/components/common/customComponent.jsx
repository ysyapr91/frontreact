import React from "react";

const CustomComponent = ({ is }) => {
    //동적 JSX생성
    const dynamicElement = React.createElement(is, null, 'Dynamic JSX');

    return (
        <>
            {dynamicElement}
        </>
    );
};

export default CustomComponent;