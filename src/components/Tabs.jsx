export default function Tabs({ children, buttons, ButtonContainers='menu', ...props }) {
    //const ButtonContainers=buttonContainers; 
    return (
        <>
            <ButtonContainers> {buttons}</ButtonContainers>
            {children}
        </>
    )
}