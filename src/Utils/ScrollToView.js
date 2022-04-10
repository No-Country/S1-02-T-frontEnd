export default function ScrollToView(scrollToId) {
	document.getElementById(scrollToId).scrollIntoView({
		behavior: "smooth",
	});
}
