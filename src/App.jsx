import { useState } from "react";

import "./App.css";
import "@aurodesignsystem/auro-alert";
import "@aurodesignsystem/auro-button";
import "@aurodesignsystem/auro-dialog";
import "@aurodesignsystem/auro-formkit/auro-dropdown";
import "@aurodesignsystem/auro-icon";
import "@aurodesignsystem/auro-popover";
import "@aurodesignsystem/design-tokens/dist/alaska/CSSCustomProperties--alaska.css";

export const App = () => {
	const [alertVisible, setAlertVisible] = useState(false);
	const [dialogOpen, setDialogOpen] = useState(false);

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

			<section>
				<h2>Auro Dialog test</h2>

				<div>
					<auro-button onClick={() => setDialogOpen(true)}>
						Open default dialog
					</auro-button>
				</div>

				<auro-dialog open={dialogOpen} modal>
					<span slot="header">Default Dialog</span>

					<div slot="content">
						<p>
							When traveling on Alaska Airlines flights, Alaska Airlines checked
							baggage fees may apply. See{" "}
							<auro-hyperlink
								href="https://www.alaskaair.com/bagrules"
								target="_blank"
							>
								alaskaair.com/bagrules
							</auro-hyperlink>{" "}
							for our rules. For itineraries that include other airlines, their
							checked baggage fees may apply, as displayed on their websites.
						</p>
						<p>
							Baggage rules and fees will be based on the specific itinerary
							chosen. The applicable first and second bag fees will be displayed
							after you have added flights to the cart.
						</p>
						<auro-header level="3" display="500">
							Before checking your bags, remember to:
						</auro-header>
						<ul>
							<li>Caerphilly croque monsieur fondue</li>
							<li>
								Taleggio goat mascarpone cow manchego cheese and wine emmental
								cheese strings
							</li>
							<li>Cheddar cheese and biscuits chalk and cheese</li>
							<li>Camembert de normandie stinking bishop bavarian bergkase</li>
						</ul>
					</div>

					<div slot="footer">
						<auro-button secondary onClick={() => setDialogOpen(false)}>
							Close
						</auro-button>
					</div>
				</auro-dialog>
			</section>
		</main>
	);
};
