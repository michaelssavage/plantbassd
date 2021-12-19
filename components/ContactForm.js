import React, { useState } from "react";
import { Form, InputGroup, Spinner } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";

export default function ContactForm() {
	const [formData, setFormData] = useState({});
	const [loading, setLoading] = useState(false);
	const updateInput = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

	async function handleSubmit(e) {
		e.preventDefault();
		setLoading(true);
		console.log("Sending");

		try {
			const response = await fetch("/api/contact", {
				method: "post",
				headers: {
					Accept: "application/json, text/plain, */*",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			const res = await response.json();
			console.log(res);

			if (res.error) {
				toast.error("Form didn't submit!");
				throw new Error(res.error);
			}
			toast.success("Thanks, we'll be in touch!");
			setFormData({
				name: "",
				email: "",
				message: "",
			});
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	}

	return (
		<>
			<Form
				onSubmit={(e) => {
					handleSubmit(e);
				}}
			>
				<Form.Group controlId="validationFName">
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

				<Form.Group controlId="formEmail">
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

						<Form.Control.Feedback>
							Looks good!
						</Form.Control.Feedback>
						<Form.Control.Feedback type="invalid">
							Please enter a valid email.
						</Form.Control.Feedback>
					</InputGroup>
					<Form.Text className="text-muted">
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group controlId="contactForm.Textarea">
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

				<button
					className="btn btn-dark my-2 my-md-2"
					type="submit"
					value="Submit"
				>
					{loading && (
						<Spinner
							as="span"
							animation="border"
							role="status"
							aria-hidden="true"
						/>
					)}

					{!loading && "Submit"}
				</button>
			</Form>

			<Toaster position="top-center" reverseOrder={false} />
		</>
	);
}
