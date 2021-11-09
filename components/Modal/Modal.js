import React from "react";

import { Button, Modal } from "react-bootstrap";
import styles from "./modal.module.scss";

export default function ArtistModal({ artist, onClick, onHide }) {
	const playlist =
		"https://open.spotify.com/playlist/5skAgzUfGmZLwrOPNLnGVf?si=ca0f5ffdba8e4868";

	return (
		<div>
			<Modal
				size="lg"
				show={artist.show}
				centered
				onHide={() => onHide()}
			>
				<Modal.Header closeButton>
					<Modal.Title>{artist.name}</Modal.Title>
				</Modal.Header>

				<Modal.Body className={styles.modalArtistDescription}>
					{artist.description}
				</Modal.Body>

				<div className={`${styles.modalFlexBox} py-2`}>
					<Button href={playlist} variant="spotify">
						<i className="lab la-spotify"></i> Spotify Playlist
					</Button>
					<Button href={artist.page} variant="insta">
						<i className="lab la-instagram"></i> {artist.name}
					</Button>
					<Button
						href="https://www.instagram.com/eggboy_design/"
						variant="eggboy"
					>
						<i className="las la-palette"></i> Graphics
					</Button>
					<Button href={artist.post} variant="post">
						<i className="las la-leaf"></i> Insta Post
					</Button>
				</div>

				<Modal.Footer>
					<Button variant="secondary" onClick={() => onClick()}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}
