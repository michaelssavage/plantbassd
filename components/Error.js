import styles from "./styles/error.module.scss";

export default function Error({ error }) {
	return (
		<div className={styles.container}>
			<h1 className={styles.errorPage}>
				Error: loading Data failed {error}
			</h1>
		</div>
	);
}
