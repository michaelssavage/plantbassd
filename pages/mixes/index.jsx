import { clubMixes, downMixes, otherMixes } from "arrays/MixImages";
import Footer from "components/Footer";
import styles from "styles/page.module.scss";

import GoBack from "@/btns/GoBack";
import SoundcloudButton from "@/btns/SoundcloudButton";
import CardExternal from "@/cards/CardExternal";

export default function MixesPage() {
	return (
		<>
			<div className={styles.mixBG}>
				<div className="container">
					<h1 className={styles.bHeader}>Plant Bass'd Mixes</h1>

					<p className={styles.bTexter}>
						{`Check out some mixes we've put together for ITSNOTRADIO,
						Set Radio, and some guest mixes:`}
					</p>

					<p className={styles.bTexter}>
						<SoundcloudButton
							link="https://soundcloud.com/plantbassddjs/sets/club-mixes"
							styling={styles.soundcloud}
							title="Club Ready Mixes"
						/>
					</p>

					<div className="row g-3 pb-4">
						{clubMixes.map((card) => (
							<CardExternal card={card} key={card.key} />
						))}
					</div>
					<p className={styles.bTexter}>
						<SoundcloudButton
							link="https://soundcloud.com/plantbassddjs/sets/dance-mixes"
							styling={styles.soundcloud}
							title="Downtempo Mixes"
						/>
					</p>

					<div className="row g-3 pb-4">
						{downMixes.map((card) => (
							<CardExternal card={card} key={card.key} />
						))}
					</div>
					<p className={styles.bTexter}>
						<SoundcloudButton
							link="https://soundcloud.com/plantbassddjs/tracks"
							styling={styles.soundcloud}
							title="More Mixes"
						/>
					</p>

					<div className="row g-3">
						{otherMixes.map((card) => (
							<CardExternal card={card} key={card.key} />
						))}
					</div>

					<GoBack />
				</div>
			</div>

			<Footer />
		</>
	);
}
