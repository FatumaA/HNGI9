import React, { useState } from "react";
import Footer from "./Footer";

const Contact = () => {
	const [formVals, setFormVals] = useState({
		firstName: "",
		lastName: "",
		email: "",
		message: "",
	});

	const [formChecked, setFormChecked] = useState(false);

	const name = "Fatuma A";

	const handleChange = (e) => {
		const value = e.target.value;
		const checked = e.target.checked;
		setFormVals({
			...formVals,
			[e.target.name]: value,
			// checkbox: checked,
		});
		// setFormChecked(checked);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const formInfo = {
			...formVals,
			formChecked,
		};
		alert(JSON.stringify(formInfo));
		alert("Message sent");
		setFormChecked(false);
		e.target.reset();
	};

	return (
		<>
			<div className="App">
				<h2>Contact Me</h2>
				<h3>Hi there, contact me to ask about anything you have in mind.</h3>
				<form onSubmit={handleSubmit} autoComplete="off">
					<div className="flexContainer1">
						<div className="flexContainer1Child">
							<label htmlFor="first_name">First name</label>
							<input
								required
								name="firstName"
								type="text"
								id="first_name"
								placeholder="Enter your first name"
								aria-label="First name"
								onChange={handleChange}
							/>
							<div className="hint">
								{formVals.firstName.length < 1
									? "Please enter your first name"
									: ""}
							</div>
						</div>
						<div className="flexContainer1Child">
							<label htmlFor="last_name">Last name</label>
							<input
								name="lastName"
								type="text"
								id="last_name"
								placeholder="Enter your last name"
								aria-label="Last name"
								onChange={handleChange}
							/>
						</div>
					</div>
					<div className="flexContainer2">
						<label htmlFor="email">Email</label>
						<input
							required
							name="email"
							type="email"
							id="email"
							placeholder="yourname@email.com"
							aria-label="Email"
							onChange={handleChange}
						/>
						<div className="hint">
							{formVals.email.trim().length < 1 || !formVals.email.includes("@")
								? "Please enter a valid email"
								: ""}
						</div>
						<label htmlFor="message">Message</label>
						<textarea
							required
							name="message"
							type="text"
							id="message"
							placeholder="Send me a message and I'll reply you as soon as possible..."
							aria-label="Message"
							rows={5}
							onChange={handleChange}
						/>
						<div className="hint">
							{formVals.message.length < 1 ? "Please enter a message" : ""}
						</div>
						<div>
							<input
								required
								name="checkbox"
								type="checkbox"
								id="checkbox"
								onChange={(e) => setFormChecked(e.target.checked)}
							/>
							<label htmlFor="checkbox">
								You agree to providing your data to {name} who may contact you.
							</label>
						</div>
						<button type="submit" id="btn__submit">
							Send message
						</button>
					</div>
				</form>
			</div>
			<Footer />
		</>
	);
};

export default Contact;
