
const Welcome = () => {
    const handler = (e) => {
        // localStorage.set('user', e.target.value)
        window.location.href = 'test'
    }
    return (
        <section className="d-flex justify-content-center m-5 gap-4">
            <h6>Your name</h6>
            <input type="text" />
            <button onClick={handler}>Enter</button>
        </section>

    )
}

export default Welcome;