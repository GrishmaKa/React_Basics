import { EXAMPLES } from "../data";
import React, { useState } from 'react';
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
    let [activeTab, setActiveTab] = useState();

    function handleSelect(getSelected) {
        setActiveTab(getSelected);
    }

    let tabContent = <p></p>;
    if (activeTab) {
        tabContent =
            <div id='tab-content'>
                <h3>{EXAMPLES[activeTab].title}</h3>
                <p>{EXAMPLES[activeTab].description}</p>
                <pre><code>{EXAMPLES[activeTab].code}</code></pre>
            </div>
    }
    return (
        <Section title="Examples" id="examples">
            <Tabs 
            buttons={
                <>
                    <TabButton isActive={activeTab === 'components'} onClick={() => handleSelect('components')} >Components</TabButton>
                    <TabButton isActive={activeTab === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
                    <TabButton isActive={activeTab === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
                    <TabButton isActive={activeTab === 'state'} onClick={() => handleSelect('state')}>State</TabButton>
                </>
            }>
                {tabContent}
            </Tabs>
        </Section>
    );
}
