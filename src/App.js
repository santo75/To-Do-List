import React from "react";
import "./App.css";
import ListItems from "./ListItems";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			currentItem: {
				text: "",
				key: "",
			},
		};
		this.addItem = this.addItem.bind(this);
		this.handleInput = this.handleInput.bind(this);
	}
	addItem(e) {
		e.preventDefault();
		const newItem = this.state.currentItem;
		if (newItem.text !== "") {
			const arr = [...this.state.items, newItem];
			this.setState({
				items: arr,
				currentItem: {
					text: "",
					key: "",
				},
			});
		}
	}
	handleInput(e) {
		this.setState({
			currentItem: {
				text: e.target.value,
				key: Date.now(),
			},
		});
	}

	handleRemove = key => {
		const items = this.state.items.filter(i => i.key !== key);
		this.setState({ items });
	};

	refresh = e => {
		e.preventDefault();
		this.setState({
			items: [],
		});
	};

	render() {
		return (
			<div className="App">
				<header>
					<form id="to-do-form" onSubmit={this.addItem}>
						<input
							type="text"
							placeholder="Enter task"
							value={this.state.currentItem.text}
							onChange={this.handleInput}
						></input>
						<button type="submit">Add</button>
					</form>
					<p>{this.state.items.text}</p>

					<ListItems items={this.state.items} onRemove={this.handleRemove} />
					<button
						type="submit"
						id="clr"
						onClick={this.refresh}
						className="refreshButton"
					>
						Clear ALL
					</button>
				</header>
			</div>
		);
	}
}

export default App;
