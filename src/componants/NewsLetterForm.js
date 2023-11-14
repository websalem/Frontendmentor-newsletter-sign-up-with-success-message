import icon from '../assets/images/icon-list.svg';
import SuccessMessage from "./SuccessMessage";
import { useState } from 'react';
const NewsLetterForm = () => {
    const [email, setEmail] = useState('');
    const [cssClass, setCssClass] = useState('');
    const [error, setError] = useState(false);
    const handleClick = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email) === false) {
            setError(true);
            setCssClass('');
        }
        else {
            setCssClass('show');
        }
    }
    return (
        <>
            <SuccessMessage email={email} cssClass={cssClass} setCssClass={setCssClass} />
            <div className={cssClass === 'show' ? 'newsletter hide' : 'newsletter'}>
                <div className="newsletter-text">
                    <div className="newsletter-text-container">
                        <h1>Stay updated!</h1>
                        <p>Join 60,000+ product managers receiving monthly updates on:</p>
                        <ul>
                            <li> <img src={icon} alt="icon" /> Product discovery and building what matters</li>
                            <li> <img src={icon} alt="icon" /> Measuring to ensure updates are a success</li>
                            <li> <img src={icon} alt="icon" /> And much more!</li>
                        </ul>

                        <div className="label-error">
                            <label htmlFor="email">Email address</label>
                            <span className="error">
                                {error && 'enter valid email!'}
                            </span>
                        </div>
                        <input className={error ? 'error' : ''} value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" name="email" id="email" placeholder="email@company.com" required />
                        <button onClick={handleClick} type="submit">Subscribe to monthly newsletter</button>
                    </div>

                </div>
                <div className="newsletter-img">

                </div>
            </div>
        </>

    )
}
export default NewsLetterForm