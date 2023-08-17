const Source = ({ item }) => {
	const maxWidth = item.size === "" ? "" : "(max-width:" + item.size + ")";
	return <source srcset={item.image} media={maxWidth} />;
}

export default Source;
