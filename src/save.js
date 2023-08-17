/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';
import Source from "./components/Source";
import ImagesTable from './components/ImagesTable';

export default function save(props) {
	const {
		attributes: {
			images,
			commonText,
			infographicsMinimum,
			infographicsMaximum,
		},
		// setAttributes,
	} = props;

	const itemMinimum = [];
	const itemMaximum = [];

	const bannerMan = (key) => <div className="banner_man" key={key} />;

	for (let i = 0; i < infographicsMinimum; i++) {
		itemMinimum.push(bannerMan(i + 10));
	}

	for (let i = 0; i < infographicsMaximum; i++) {
		itemMaximum.push(bannerMan(i + 20));
	}

	return (
		<div {...useBlockProps.save()} className="banner">
			<picture>
				{images && <source srcset={images.sizes.mobile.url} media="(max-width: 321px)" />}
				{images && <source srcset={images.sizes.table.url} media="(max-width: 768px)" />}
				{images && <source srcset={images.sizes.desktop.url} media="(max-width: 1024px)" />}
				{images && <source srcset={images.sizes.full.url} media="(max-width: 1440px)" />}
				{images && <img decoding="async" src={images.sizes.full.url} alt="alt" />}
			</picture>
			<div className="banner_scenary banner_common-text">
				<p>{commonText}</p>
			</div>
			<div className="banner_description">
				<div className="banner_infographics">
					<div className="banner_count banner_infographics-minimum">
						{itemMinimum}
					</div>
					<div className="banner_count banner_common-text banner_common-text_margin">
						-
					</div>
					<div className="banner_count banner_infographics-maximum">
						{itemMaximum}
					</div>
				</div>
				<div className="banner_count banner_common-text banner_common-text_right">
					<p>
						Количество игроков: от {infographicsMinimum} до{' '}
						{infographicsMaximum}
					</p>
				</div>
			</div>
		</div>
	);
}
