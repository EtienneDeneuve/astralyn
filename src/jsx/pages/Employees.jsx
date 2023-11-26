import { useThemeContext } from "@contexts/ContextProvider";
import { employeesData } from "@data/employeesGrid-data";
import { ColumnChooser, ColumnDirective, ColumnsDirective, Edit, GridComponent, Inject, Page, Search, Sort, Toolbar } from "@syncfusion/ej2-react-grids";

import { useMediaQuery } from "@uidotdev/usehooks";

import { FaLocationDot } from "react-icons/fa6";

const Employees = () => {
	const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
	const toolbarOptions = ["Search"];
	const editing = { allowDeleting: true, allowEditing: true, mode: `${isSmallDevice ? "Dialog" : "Normal"}` };
	const { language } = useThemeContext();

	const gridEmployeeProfile = (props) => {
		return (
			<div style={{ display: "flex", alignItems: "center", gap: "1rem", paddingInlineStart: 15 }}>
				<img style={{ width: "2.5rem", height: "2.5rem", borderRadius: "9999px" }} src={props.EmployeeImage} alt="employee" />
				<p>{props.Name}</p>
			</div>
		);
	};
	const gridEmployeeCountry = (props) => {
		return (
			<div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
				<FaLocationDot />
				<span>{props.Country}</span>
			</div>
		);
	};
	const employeesColumns = [
		{ headerText: language.language === "ar" ? "موظف" : "Employee", template: gridEmployeeProfile, textAlign: "Center", width: "150" },
		{ field: "Title", headerText: language.language === "ar" ? "المنصب" : "Designation", editType: "dropdownedit", textAlign: "Center", width: "170" },
		{ headerText: language.language === "ar" ? "دولة" : "Country", template: gridEmployeeCountry, textAlign: "Center", width: "120" },
		{ field: "HireDate", headerText: language.language === "ar" ? "موعد التوظيف" : "Hire Date", format: "dd/MM/yyyy", editType: "dd/MM/yyyy", type: "date", editType: "datePickerEdit", textAlign: "Center", width: "135" },
		{ field: "ReportsTo", headerText: language.language === "ar" ? "تقارير لـ" : "Reports To", textAlign: "Center", editType: "dropdownedit", width: "120" },
		{ field: "EmployeeID", headerText: language.language === "ar" ? "معرف ID للموظف" : "Employee ID", textAlign: "Center", width: "125" },
	];

	return (
		<GridComponent
			dataSource={employeesData[language.language]}
			width="auto"
			allowPaging
			allowKeyboard
			allowMultiSorting
			allowSorting
			enableStickyHeader={!isSmallDevice}
			enablePersistence
			enableAdaptiveUI={isSmallDevice}
			rowRenderingMode={isSmallDevice ? "Vertical" : "Horizontal"}
			loadingIndicator={{ indicatorType: "Shimmer" }}
			pageSettings={{ pageCount: 5 }}
			editSettings={editing}
			toolbar={toolbarOptions}
			showColumnChooser={true}
		>
			<ColumnsDirective>
				{employeesColumns.map((item, index) => (
					<ColumnDirective  key={index} {...item} />
				))}
			</ColumnsDirective>
			<Inject services={[Search, Page, Sort, Edit, Toolbar, ColumnChooser]} />
		</GridComponent>
	);
};
export default Employees;
