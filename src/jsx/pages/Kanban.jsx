import * as dataSource from "@data/kanban-data";
import { addClass, extend } from "@syncfusion/ej2-base";
import { ColumnDirective, ColumnsDirective, KanbanComponent } from "@syncfusion/ej2-react-kanban";

const Overview = () => {
	let data = extend([], dataSource.cardData, null, true);
	const fields = [
		{ text: "ID", key: "Title", type: "TextBox" },
		{ key: "Status", type: "DropDown" },
		{ key: "Assignee", type: "DropDown" },
		{ key: "RankId", type: "TextBox" },
		{ key: "Summary", type: "TextArea" },
	];
	const cardRendered = (args) => {
		let val = args.data.Priority;
		addClass([args.element], val);
	};
	const columnTemplate = (props) => {
		return (
			<div className="header-template-wrap">
				<div className={"header-icon e-icons " + props.keyField}></div>
				<div className="header-text">{props.headerText}</div>
			</div>
		);
	};
	const cardTemplate = (props) => {
		return (
			<div className={"card-template"}>
				<div className="e-card-header">
					<div className="e-card-header-caption">
						<div className="e-card-header-title e-tooltip-text">{props.Title}</div>
					</div>
				</div>
				<div className="e-card-content e-tooltip-text">
					<div className="e-text">{props.Summary}</div>
				</div>
				<div className="e-card-custom-footer">
					{props.Tags.split(",").map((tag) => (
						<div className="e-card-tag-field e-tooltip-text">{tag}</div>
					))}
					<div className="e-card-avatar">{getString(props.Assignee)}</div>
				</div>
			</div>
		);
	};
	const getString = (assignee) => {
		return assignee
			.match(/\b(\w)/g)
			.join("")
			.toUpperCase();
	};
	return (
		<div className="schedule-control-section">
			<div className="col-lg-12 control-section">
				<div className="control-wrapper">
					<KanbanComponent
						id="kanban"
						cssClass="kanban-overview"
						keyField="Status"
						dataSource={data}
						swimlaneSettings={{ keyField: "Assignee", showItemCount: true }}
						cardSettings={{
							headerField: "Title",
							template: cardTemplate.bind(this),
							selectionType: "Multiple",
						}}
						dialogSettings={{ fields: fields }}
						cardRendered={cardRendered.bind(this)}
					>
						<ColumnsDirective>
							<ColumnDirective headerText="To Do" showItemCount={true} keyField="Open" allowToggle={true} template={columnTemplate.bind(this)} />
							<ColumnDirective headerText="In Progress" showItemCount={true} keyField="InProgress" allowToggle={true} template={columnTemplate.bind(this)} />
							<ColumnDirective headerText="In Review" showItemCount={true} keyField="Review" allowToggle={true} template={columnTemplate.bind(this)} />
							<ColumnDirective headerText="Done" showItemCount={true} keyField="Close" allowToggle={true} template={columnTemplate.bind(this)} />
						</ColumnsDirective>
					</KanbanComponent>
				</div>
			</div>
		</div>
	);
};
export default Overview;
