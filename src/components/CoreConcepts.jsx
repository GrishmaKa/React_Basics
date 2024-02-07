import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data.js";
import Section from "./Section.jsx";

export default function CoreConcepts() {
    return (
        <Section title="Core Concepts" id="core-concepts">
            <ul>
                {CORE_CONCEPTS.map((conceptItems) => (
                    <CoreConcept key={conceptItems.title} {...conceptItems} />))}
            </ul>
        </Section>
    );
}
