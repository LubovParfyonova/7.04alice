function ConfirmModalWindow(props) {

function clicker(event) {
    const val = 'Hello from child';
    props.callToSendMessage(event.target.value);
}

return(
        <div className="backend">
            <section className="modal-window-container">
        <h1>Header</h1>
        <div>
            <button onClick={clicker} value="No">No</button>
            <button onClick={clicker} value="Yes">Yes</button>
        </div>
    </section>
    </div>
    )
}

export default ConfirmModalWindow;