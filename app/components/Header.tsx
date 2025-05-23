import ThemeButton from "./$ThemeButton";
import Logo from "./Logo";
import PageWidthPadding from "./PageWidthPadding";

export default function Header() {
	return (
		<div className="mb-4 py-2 bg-base-200">
			<PageWidthPadding>
				<div className="flex justify-between items-center">
					<Logo />
					<ThemeButton />
				</div>
			</PageWidthPadding>
		</div>
	);
}
