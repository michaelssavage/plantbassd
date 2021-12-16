import React, { useState } from "react";
import { Button, Form, InputGroup, Spinner } from "react-bootstrap";

export default function ContactForm() {
	const [formData, setFormData] = useState({});
	const [loading, setLoading] = useState(false);
	const updateInput = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		console.log("Sending");
		try {
			fetch("/api/contact", {
				method: "POST",
				headers: {
					Accept: "application/json, text/plain, */*",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			}).then((res) => {
				console.log("Response received");

				if (res.status === 200) {
					console.log("Response succeeded!");
					setFormData({
						name: formData.name,
						email: "",
						message: "",
					});
				} else {
					throw new Error(res);
				}
			});
		} catch (err) {
			console.log(err);
		}
		setLoading(false);
	};

	return (
		<Form
			onSubmit={(e) => {
				handleSubmit(e);
			}}
		>
			<Form.Group column md="6" controlId="validationFName">
				<Form.Label>Name</Form.Label>
				<Form.Control
					name="name"
					required
					type="text"
					placeholder="Enter name"
					onChange={updateInput}
					value={formData.name || ""}
				/>
				<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
				<Form.Control.Feedback type="invalid">
					Please enter your name.
				</Form.Control.Feedback>
			</Form.Group>

			<Form.Group column md="6" controlId="formEmail">
				<Form.Label>Email Address</Form.Label>
				<InputGroup>
					<Form.Control
						name="email"
						type="email"
						placeholder="Enter email"
						required
						onChange={updateInput}
						value={formData.email || ""}
					/>
					<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
					<Form.Control.Feedback type="invalid">
						Please enter a valid email.
					</Form.Control.Feedback>
				</InputGroup>
			</Form.Group>

			<Form.Group column controlId="contactForm.Textarea">
				<Form.Label>Message</Form.Label>
				<Form.Control
					as="textarea"
					rows={3}
					placeholder="Please enter your message"
					required
					name="message"
					onChange={updateInput}
					value={formData.message || ""}
				/>
				<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
				<Form.Control.Feedback type="invalid">
					Please add your message.
				</Form.Control.Feedback>
			</Form.Group>

			<Form.Group>
				<Form.Check
					name="check"
					required
					// label={
					// 	<Link
					// 		className="text-warning"
					// 		href="Terms-and-conditions"
					// 	>
					// 		I have read and agree to the Terms and Conditions
					// 	</Link>
					// }
					label="I have read and agreed to the Terms and Conditions"
					feedback="You must agree before submitting."
				/>
			</Form.Group>
			<Button className="btn btn-dark my-2 my-md-2" type="submit">
				{loading && (
					<Spinner
						as="span"
						animation="border"
						role="status"
						aria-hidden="true"
					/>
				)}

				{!loading && "Submit"}
			</Button>
		</Form>
	);
}
