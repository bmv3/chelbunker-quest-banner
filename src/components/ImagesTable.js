const ImagesTable = ({ images }) => {
	console.log(images);
	return (
		<tr>
			<td>{images.image}</td>
			<td>{images.size}</td>
		</tr>
	)
}

export default ImagesTable;
