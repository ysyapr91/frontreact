import React, { useState, useEffect } from "react";

import * as Common from 'components/common';
import * as Pages from 'components/pages';
import * as Tests from 'components/tests';

const EffectComponent = ({ is }) => {
    const[Component, setComponent] = useState(null);

    useEffect(() => {
        console.log("EffectComponent is", is);
        const importComponent = async () => {
            const dynamicComponent = await import(`components/${is}`);
            setComponent(dynamicComponent.default);
        }

        importComponent();
        console.log("EffectComponent Component", Component);
    }, [is]);
    
    
    return (
        <>
            {Component && <Component />}
        </>
    );
};

export default EffectComponent;