import React from "react";
import "./ListItems.css";

function ListItems(props) {
	const items = props.items;
	const arr2 = items.map(item => {
		if (item.text !== null)
			return (
				<div className="list" key={item.key}>
					<p>
						<input type="text" id={item.key} value={item.text} />
						<input type="checkbox" className="check" />
						<button
							type="button"
							className="removeButton"
							onClick={() => props.onRemove(item.key)}
						>
							Remove
						</button>
					</p>
				</div>
			);
	});
	return <div>{arr2}</div>;
}

export default ListItems;
