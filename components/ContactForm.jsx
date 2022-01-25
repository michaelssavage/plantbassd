import React, { useState } from "react";
import { Form, InputGroup, Spinner } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";

export default function ContactForm() {
	const [formData, setFormData] = useState({}),
		[loading, setLoading] = useState(false),
		updateInput = (event) => {
			setFormData({
				...formData,
				[event.target.name]: event.target.value,
			});
		};
	async function handleSubmit(event) {
		event.preventDefault();
		setLoading(true);

		try {
			const response = await fetch("/api/contact", {
					method: "post",
					headers: {
						Accept: "application/json, text/plain, */*",
						"Content-Type": "application/json",
					},
					body: JSON.stringify(formData),
				}),
				res = await response.json();

			if (res.error) {
				toast.error("Form didn't submit!");
				throw new Error(res.error);
			}
			toast.success("Thanks, we'll be in touch!");
			setFormData({
				email: "",
				message: "",
				name: "",
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
				onSubmit={(event) => {
					handleSubmit(event);
				}}
			>
				<Form.Group controlId="validationFName">
					<Form.Label>Name</Form.Label>
					<Form.Control
						name="name"
						onChange={updateInput}
						placeholder="Enter name"
						required
						type="text"
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
							onChange={updateInput}
							placeholder="Enter email"
							required
							type="email"
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
						name="message"
						onChange={updateInput}
						placeholder="Please enter your message"
						required
						rows={3}
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
							animation="border"
							aria-hidden="true"
							as="span"
							role="status"
						/>
					)}

					{!loading && "Submit"}
				</button>
			</Form>

			<Toaster position="top-center" reverseOrder={false} />
		</>
	);
}
