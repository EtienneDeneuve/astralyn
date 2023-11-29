/* eslint-disable react/prop-types */

import { useThemeContext } from "@contexts/ContextProvider";
import { cardData } from "@data/kanban-data";
import Box from "@mui/joy/Box";
import { addClass } from "@syncfusion/ej2-base";
import { ColumnDirective, ColumnsDirective, KanbanComponent } from "@syncfusion/ej2-react-kanban";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useId } from "react";
import { BsClipboardCheckFill } from "react-icons/bs";
import { IoIosListBox } from "react-icons/io";
import { TbEyeSearch, TbProgressBolt } from "react-icons/tb";

const Overview = () => {
	const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
	const { language } = useThemeContext();
	const id = useId();
	const iconMap = {
		open: <IoIosListBox className="icon" color="#0251cc" />,
		inprogress: <TbProgressBolt className="icon" color="#ea9713" />,
		review: <TbEyeSearch className="icon" color="#8e4399" />,
		close: <BsClipboardCheckFill className="icon" color="#63ba3c" />,
	};
	const fields = [
		{ text: language.language === "ar" ? "معرف ID" : "ID", key: "Title", type: "TextBox" },
		{ text: language.language === "ar" ? "الحالة" : "Status", key: "Status", type: "DropDown" },
		{ text: language.language === "ar" ? "المعهود إليه" : "Assignee", key: "Assignee", type: "DropDown" },
		{ text: language.language === "ar" ? "رتبة المعرف ID" : "Rank ID", key: "RankId", type: "TextBox" },
		{ text: language.language === "ar" ? " ملخص" : "Summary", key: "Summary", type: "TextArea" },
	];
	const cardRendered = (args) => {

		let id = args.data.Id;
		const selectedItem = cardData["en"].find((item) => item.Id === id);

		if (selectedItem) {
			let priority = selectedItem.Priority;
			addClass([args.element], priority);
		}
	};
	const columnTemplate = (props) => {
		return (
			<div className="header-template-wrap">
				<Box width={"1rem"} className={"header-icon e-icons " + props.keyField}>
					{iconMap[props.keyField.toLowerCase()] || <TbProgressBolt />}
				</Box>
				<div className="header-text">{props.headerText}</div>
			</div>
		);
	};
	const cardTemplate = (props) => {

		return (
			<div id={props.Id} key={props.Id} className={"card-template"}>
				<div className="e-card-header">
					<div className="e-card-header-caption">
						<div className="e-card-header-title e-tooltip-text">{props.Title}</div>
					</div>
				</div>
				<div className="e-card-content e-tooltip-text">
					<div className="e-text">{props.Summary}</div>
				</div>
				<div className="e-card-custom-footer">
					{props.Tags.split(",").map((tag, index) => (
						<div key={index} className="e-card-tag-field e-tooltip-text">
							{tag}
						</div>
					))}
					<div className="e-card-avatar">{getString(props.Assignee)}</div>
				</div>
			</div>
		);
	};
	const getString = (assignee) => {
		return assignee
			.split(" ")
			.map((word) => word.charAt(0))
			.join(" ")
			.toUpperCase();
	};
	return (
		<KanbanComponent
			id="kanban"
			cssClass="kanban-overview"
			keyField="Status"
			dataSource={cardData[language.language]}
			swimlaneSettings={{ keyField: "Assignee", showItemCount: true }}
			enablePersistence={true}
			cardSettings={{
				headerField: "Title",
				template: cardTemplate,
				selectionType: "Multiple",
			}}
			dialogSettings={{ fields: fields }}
			cardRendered={cardRendered}
		>
			<ColumnsDirective>
				<ColumnDirective headerText={language.language === "ar" ? "ما يجب فعله" : "To Do"} showItemCount={true} keyField="Open" allowToggle={true} template={columnTemplate.bind(this)} />
				<ColumnDirective headerText={language.language === "ar" ? "قيد التنفيد" : "In Progress"} showItemCount={true} keyField="InProgress" allowToggle={true} template={columnTemplate.bind(this)} />
				<ColumnDirective headerText={language.language === "ar" ? "قيد المراجعة" : "In Review"} showItemCount={true} keyField="Review" allowToggle={true} template={columnTemplate.bind(this)} />
				<ColumnDirective headerText={language.language === "ar" ? "إنتهى" : "Done"} showItemCount={true} keyField="Close" allowToggle={true} template={columnTemplate.bind(this)} />
			</ColumnsDirective>
		</KanbanComponent>
	);
};
export default Overview;
