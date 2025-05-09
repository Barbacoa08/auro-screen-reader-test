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
					<span>
						This content is not annouced to the screen reader. Nor is it
						find-able without the mouse. Thus, this component does not seem to
						be accessible.
					</span>

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
					<span slot="header">
						Dialog with <code>modal</code> set (
						<a href="https://github.com/Barbacoa08/auro-screen-reader-test/blob/main/src/App.jsx">
							link to source
						</a>
						)
					</span>

					<div slot="content">
						<p>There are a few issues here.</p>

						<ol>
							<li>
								Having <code>modal</code> prop set does not stop from tabbing
								outside of the dialog.
							</li>
							<li>
								The "X" (close) button on the top cannot be connected to the
								appropriate close command. If you click it, the "open" button
								will stop working.
							</li>
						</ol>
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
