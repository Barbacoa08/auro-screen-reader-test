import { useState } from "react";

import "./App.css";
import "@aurodesignsystem/auro-alert";
import "@aurodesignsystem/auro-icon";
import "@aurodesignsystem/auro-button";
import "@aurodesignsystem/auro-formkit/auro-dropdown";
import "@aurodesignsystem/auro-popover";
import "@aurodesignsystem/design-tokens/dist/alaska/CSSCustomProperties--alaska.css";

export const App = () => {
	const [alertVisible, setAlertVisible] = useState(false);

	return (
		<main>
			<h1>Auro Screen Reader test</h1>

			<section>
				<h2>Auro Alert test</h2>

				<auro-button onClick={() => setAlertVisible(!alertVisible)}>
					Toggle success alert message
				</auro-button>

				{alertVisible && (
					<auro-alert type="success">
						<p>Success message has been shown!</p>
					</auro-alert>
				)}
			</section>

			<section>
				<h2>Auro Popover test</h2>

				<auro-popover>
					<span>Longer explanation text that gives a broader explanation.</span>

					<auro-button slot="trigger">Small text</auro-button>
				</auro-popover>
			</section>

			<section>
				<h2>Auro Dropdown test</h2>

				<auro-dropdown>
					<auro-button
						slot="trigger"
						variant="secondary"
						iconOnly
						arialabel="open more trip options menu"
					>
						<auro-icon category="interface" name="more-stroke" slot="icon" />
					</auro-button>

					<div>
						<a href="/">thing one</a>
						<a href="/">thing two</a>
						<a href="/">thing three</a>
					</div>
				</auro-dropdown>
			</section>
		</main>
	);
};
