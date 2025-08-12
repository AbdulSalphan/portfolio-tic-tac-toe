export default function NewGame({buttonName, buttonHandler}) {
    return (
        <button onClick={buttonHandler} className="button">{buttonName}</button>
    )
}