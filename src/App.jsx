import { useState } from "react";

import "./App.css";
import "@aurodesignsystem/auro-alert";
import "@aurodesignsystem/auro-avatar";
import "@aurodesignsystem/auro-button";
import "@aurodesignsystem/auro-dialog";
import "@aurodesignsystem/auro-formkit/auro-dropdown";
import "@aurodesignsystem/auro-icon";
import "@aurodesignsystem/auro-popover";
import "@aurodesignsystem/design-tokens/dist/alaska/CSSCustomProperties--alaska.css";
import "@aurodesignsystem/design-tokens/dist/auro-classic/CSSCustomProperties.css";

export const App = () => {
	const [alertVisible, setAlertVisible] = useState(false);
	const [dialogOpen, setDialogOpen] = useState(false);

	return (
		<main>
			<h1>Auro Screen Reader test</h1>

			<section>
				<h2>Auro Popover test</h2>

				<auro-popover>
					<span>This content is not annouced to the screen reader.</span>

					<auro-button slot="trigger">Small text</auro-button>
				</auro-popover>
			</section>

			<section>
				<h2>Auro Dropdown test</h2>

				<p>
					The dropdown does not announce it contents, nor even that it has
					opened. It is thus not accessible.
				</p>

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
					{/* biome-ignore lint/a11y/useKeyWithClickEvents: Auro teams issue */}
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

						<p>Thus, this dialog modal is not accessible.</p>
					</div>

					<div slot="footer">
						{/* biome-ignore lint/a11y/useKeyWithClickEvents: Auro teams issue */}
						<auro-button secondary onClick={() => setDialogOpen(false)}>
							Close
						</auro-button>
					</div>
				</auro-dialog>
			</section>

			<section>
				<h2>Avatar sizing issue</h2>

				<p>
					Avatar with <code>type="sm"</code> does not show.
				</p>
				<p>Avatars do not show unless the deprecated CSS file is imported:</p>
				<p>
					(
					<code>
						import
						"@aurodesignsystem/design-tokens/dist/auro-classic/CSSCustomProperties.css";
					</code>
					)
				</p>

				<div>
					<span>
						<code>className="my-avatar"</code> works as expected
					</span>

					<auro-avatar
						tail="AS"
						className="my-avatar"
						aria-label="alaska airlines airplane tail logo"
					/>
				</div>

				<div>
					<span>
						<code>type="sm"</code> <b>does not</b> work as expected (does not
						show)
					</span>
					<auro-avatar
						tail="AS"
						type="sm"
						aria-label="alaska airlines airplane tail logo"
					/>
				</div>

				<div>
					<span>
						<code>type="md"</code> works as expected
					</span>
					<auro-avatar
						tail="AS"
						type="md"
						aria-label="alaska airlines airplane tail logo"
					/>
				</div>

				<div>
					<span>type not set (so large) works as expected</span>
					<auro-avatar
						tail="AS"
						aria-label="alaska airlines airplane tail logo"
					/>
				</div>
			</section>
		</main>
	);
};
