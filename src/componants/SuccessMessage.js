import icon from '../assets/images/icon-success.svg';
const SuccessMessage = ({ email, cssClass, setCssClass }) => {
    return (
        <div className={`success-message ${cssClass}`}>
            <img src={icon} alt="icon" width={60} />
            <h2>Thanks for subscribing!</h2>
            <p>A confirmation email has been sent to <a href={`mailto:${email}`}> {email} </a>
                Please open it and click the button inside to confirm your subscription.
            </p>
            <button onClick={() => { setCssClass('success-message') }}>Dismiss message
            </button>
        </div>
    )
}
export default SuccessMessage