/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

import {
	useBlockProps,
	PlainText,
	// RichText,
	MediaUpload,
} from '@wordpress/block-editor';


// import { Button } from '@wordpress/components';

// import { CheckboxControl } from '@wordpress/components';
import { __experimentalNumberControl as NumberControl } from '@wordpress/components';
import { Button } from '@wordpress/components';


import { useState } from '@wordpress/element';
// import { CustomSelectControl } from '@wordpress/components';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

export default function Edit(props) {
	const {
		attributes: {
			images,
			commonText,
			infographicsMinimum,
			infographicsMaximum,
		},
		setAttributes,
	} = props;

	// const images = [
	// 	{ image: "http://chelbunker.ru/wp-content/uploads/2021/04/texas_reznya320.jpg", size: '321px', label: '321px', value: '321px' },
	// 	{ image: "http://chelbunker.ru/wp-content/uploads/2021/04/texas_reznya375.jpg", size: '376px', label: '376px', value: '376px' },
	// 	{ image: "http://chelbunker.ru/wp-content/uploads/2021/04/texas_reznya425.jpg", size: '426px', label: '426px', value: '426px' },
	// 	{ image: "http://chelbunker.ru/wp-content/uploads/2021/04/texas_reznya768.jpg", size: '768px', label: '768px', value: '768px' },
	// 	{ image: "http://chelbunker.ru/wp-content/uploads/2021/04/texas_reznya1024.jpg", size: '1024px', label: '1024px', value: '1024px' },
	// 	{ image: "http://chelbunker.ru/wp-content/uploads/2021/04/texas_reznya1440.jpg", size: '1440px', label: '1440px', value: '1440px' },
	// 	{ image: "http://chelbunker.ru/wp-content/uploads/2021/04/texas_reznya1440.jpg", size: '', label: '', value: '' },
	// ]

	const onChangeСommonText = (value) => {
		setAttributes({ commonText: value });
	};

	const onChangeInfographicsMinimum = (value) => {
		setAttributes({ infographicsMinimum: value });
	};

	const onChangeInfographicsMaximum = (value) => {
		setAttributes({ infographicsMaximum: value });
	};

	const onSelectImage = (media) => {
		console.log(media)
		setAttributes({ images: media });
	};


	const blockProps = useBlockProps();

	return (
		<div {...blockProps}>
			<PlainText
				placeholder="Сценарий"
				onChange={onChangeСommonText}
				value={commonText}
			/>
			<NumberControl
				label="Минимум участников"
				isDragEnabled
				onChange={onChangeInfographicsMinimum}
				value={infographicsMinimum}
			/>
			<NumberControl
				label="Максимум участников"
				isDragEnabled
				onChange={onChangeInfographicsMaximum}
				value={infographicsMaximum}
			/>
			<MediaUpload
				onSelect={onSelectImage}
				allowedTypes="image"
				value={images}
				render={({ open }) => (
					<Button
						className={
							images ? 'image-button' : 'button button-large'
						}
						onClick={open}
					>
						{!images ? (
							__('Загрузите фото', 'gutenberg-examples')
						) : (
							<img
								src={images.sizes.thumbnail.url}
								alt={__(
									'Upload photo',
									'gutenberg-examples'
								)}
							/>
						)}
					</Button>
				)}
			/>
		</div>
	);
}
