/* eslint-disable unicorn/prefer-number-properties */
import SettingsBar from "@components/SettingsBar";
import Sidebar from "@components/SideBare";
import { useThemeContext } from "@contexts/ContextProvider";
import Box from "@mui/joy/Box";
import GlobalStyles from "@mui/joy/GlobalStyles";
import IconButton from "@mui/joy/IconButton";
import Sheet from "@mui/joy/Sheet";
import Tooltip from "@mui/joy/Tooltip";
import { CssVarsProvider } from "@mui/joy/styles";
import Loading from "@pages/Loading";
import { motion } from "framer-motion";
import { FiSettings } from "react-icons/fi";
import { Outlet } from "react-router-dom";

import { L10n, loadCldr } from "@syncfusion/ej2-base";
import * as arGregorianCalander from "cldr-data/main/ar-DZ/ca-gregorian.json";
import * as arCharactersData from "cldr-data/main/ar-DZ/characters.json";
import * as arCurrenciesData from "cldr-data/main/ar-DZ/currencies.json";
import * as arDateFieldsData from "cldr-data/main/ar-DZ/dateFields.json";
import * as arDelimitersData from "cldr-data/main/ar-DZ/delimiters.json";
import * as arLanguagesData from "cldr-data/main/ar-DZ/languages.json";
import * as arLayoutData from "cldr-data/main/ar-DZ/layout.json";
import * as arLocaleDisplayNamesData from "cldr-data/main/ar-DZ/localeDisplayNames.json";
import * as arMeasurementSystemNamesData from "cldr-data/main/ar-DZ/measurementSystemNames.json";
import * as arNumberData from "cldr-data/main/ar-DZ/numbers.json";
import * as arPosixData from "cldr-data/main/ar-DZ/posix.json";
import * as arTerritoriesData from "cldr-data/main/ar-DZ/territories.json";
import * as arTimeZoneData from "cldr-data/main/ar-DZ/timeZoneNames.json";
import * as arUnitsData from "cldr-data/main/ar-DZ/units.json";
import * as suppNumberingSystems from "cldr-data/supplemental/numberingSystems.json";
import SettingsButton from "@components/SettingsButton";

loadCldr(arNumberData, arTimeZoneData, arGregorianCalander, arCurrenciesData, arCharactersData, arDateFieldsData, arDelimitersData, arLanguagesData, arLayoutData, arLocaleDisplayNamesData, arMeasurementSystemNamesData, arPosixData, arTerritoriesData, arUnitsData, suppNumberingSystems);

L10n.load({
	"ar-DZ": {
		grid: {
			EmptyDataSourceError: "يجب أن يكون مصدر البيانات فارغة في التحميل الأولي منذ يتم إنشاء الأعمدة من مصدر البيانات في أوتوجينيراتد عمود الشبكة",
			EmptyRecord: "لا توجد سجلات لعرضها",
			True: "صحيح",
			False: "خطأ",
			InvalidFilterMessage: "بيانات فلترة غير صالحة",
			GroupDropArea: "اسحب رأس العمود هنا لتجميع الأعمدة",
			UnGroup: "انقر هنا لإلغاء التجميع",
			GroupDisable: "تم تعطيل التجميع لهذا العمود",
			FilterbarTitle: "خلية شريط الفلترة",
			Add: "إضافة",
			Edit: "تعديل",
			Cancel: "إلغاء",
			Update: "تحديث",
			Delete: "حذف",
			Print: "طباعة",
			Pdfexport: "تصدير كملف PDF",
			Excelexport: "تصدير كملف Excel",
			Wordexport: "تصدير كملف Word",
			Csvexport: "تصدير كملف CSV",
			Search: "بحث",
			Columnchooser: "الأعمدة",
			Save: "حفظ",
			Item: "عنصر",
			Items: "عناصر",
			EditOperationAlert: "لم يتم تحديد أي سجلات لعملية التعديل",
			DeleteOperationAlert: "لم يتم تحديد أي سجلات لعملية الحذف",
			SaveButton: "حفظ",
			OKButton: "موافق",
			CancelButton: "إلغاء",
			EditFormTitle: "تفاصيل الـ ",
			AddFormTitle: "	إضافة سجل جديد",
			BatchSaveConfirm: "هل أنت متأكد أنك تريد حفظ التغييرات؟",
			BatchSaveLostChanges: "ستفقد التغييرات غير المحفوظة. هل أنت متأكد أنك تريد المتابعة؟",
			ConfirmDelete: "هل أنت متأكد أنك تريد حذف السجل؟",
			CancelEdit: "هل أنت متأكد أنك تريد إلغاء التغييرات؟",
			ChooseColumns: "إختيار العمود",
			SearchColumns: "أعمدة البحث",
			Matchs: "لم يتم العثور على تطابق",
			FilterButton: "فلترة",
			ClearButton: "مسح",
			Clear: "مسح",
			Like: "مثل",
			StartsWith: "يبدأ بـ",
			NotStartsWith: "لا يبدأ بـ",
			EndsWith: "ينتهي بـ",
			NotEndsWith: "لا ينتهي بـ",
			Contains: "يحتوي على",
			NotContains: "لا يحتوي على",
			Equal: "يساوي",
			NotEqual: "لا يساوي",
			LessThan: "أقل من",
			LessThanOrEqual: "أقل من أو يساوي",
			GreaterThan: "أكبر من",
			GreaterThanOrEqual: "أكبر من أو يساوي",
			ChooseDate: "اختر تاريخًا",
			EnterValue: "أدخل القيمة",
			Copy: "نسخ",
			Group: "تجميع حسب هذا العمود",
			Ungroup: "إلغاء التجميع حسب هذا العمود",
			autoFitAll: "تناسب تلقائي لجميع الأعمدة",
			autoFit: "تناسب تلقائي لهذا العمود",
			Export: "تصدير",
			FirstPage: "الصفحة الأولى",
			LastPage: "الصفحة الأخيرة",
			PreviousPage: "الصفحة السابقة",
			NextPage: "الصفحة التالية",
			Sort: "ترتيب",
			SortAscending: "ترتيب تصاعدي",
			SortDescending: "ترتيب تنازلي",
			EditRecord: "تعديل السجل",
			DeleteRecord: "حذف السجل",
			FilterMenu: "فلترة قائمة ال",
			SelectAll: "تحديد الكل",
			Blanks: "خانات فارغة",
			FilterTrue: "صحيح",
			FilterFalse: "خطأ",
			NoResult: "لا توجد نتائج مطابقة",
			ClearFilter: "مسح الفلترة",
			NumberFilter: "فلترة الأرقام",
			TextFilter: "فلترة النصوص",
			DateFilter: "فلترة التواريخ",
			MatchCase: "مطابقة الحالة",
			Between: "بين",
			CustomFilter: "فلترة مخصصة",
			CustomFilterPlaceHolder: "أدخل القيمة",
			CustomFilterDatePlaceHolder: "اختر تاريخًا",
			AND: "و",
			OR: "أو",
			ShowRowsWhere: "عرض الصفوف حيث",
		},
		pager: {
			currentPageInfo: "{0} من {1} صفحة",
			firstPageTooltip: "انتقل إلى الصفحة الأولى",
			lastPageTooltip: "انتقل إلى الصفحة الأخيرة",
			nextPageTooltip: "انتقل إلى الصفحة التالية",
			nextPagerTooltip: "انتقل إلى عناصر بيجر التالية",
			previousPageTooltip: "انتقل إلى الصفحة السابقة",
			previousPagerTooltip: "للذهاب إلى عناصر بيجر السابقة",
			pagerDropDown: "عناصر لكل صفحة",
			pagerAllDropDown: "عناصر",
			All: "الجميع",
			totalItemsInfo: "({0} العناصر)",
			totalItemInfo: "({0} العنصر)",
		},
		schedule: {
			day: "اليوم",
			week: "الأسبوع",
			workWeek: "أسبوع العمل",
			month: "الشهر",
			agenda: "جدول أعمال",
			weekAgenda: "جدول الأسبوع",
			workWeekAgenda: "جدول أسبوع العمل",
			monthAgenda: "جدول الشهر",
			today: "اليوم",
			noEvents: "لا توجد أحداث",
			emptyContainer: "لا توجد أحداث مجدولة في هذا اليوم.",
			allDay: "طوال اليوم",
			start: "البداية",
			end: "النهاية",
			more: "المزيد",
			close: "إغلاق",
			cancel: "إلغاء",
			noTitle: "(بدون عنوان)",
			delete: "حذف",
			deleteEvent: "حذف الحدث",
			deleteMultipleEvent: "حذف الأحداث المتعددة",
			selectedItems: "العناصر المحددة",
			deleteSeries: "حذف السلسلة",
			edit: "تحرير",
			editSeries: "تحرير السلسلة",
			editEvent: "تحرير الحدث",
			createEvent: "إنشاء",
			subject: "الموضوع",
			addTitle: "إضافة عنوان",
			moreDetails: "المزيد من التفاصيل",
			save: "حفظ",
			editContent: "هل تريد تحرير هذا الحدث فقط أو السلسلة بأكملها؟",
			deleteRecurrenceContent: "هل تريد حذف هذا الحدث فقط أو السلسلة بأكملها؟",
			deleteContent: "هل أنت متأكد أنك تريد حذف هذا الحدث؟",
			deleteMultipleContent: "هل أنت متأكد أنك تريد حذف الأحداث المحددة؟",
			newEvent: "حدث جديد",
			title: "العنوان",
			location: "الموقع",
			description: "الوصف",
			timezone: "المنطقة الزمنية",
			startTimezone: "بداية المنطقة الزمنية",
			endTimezone: "نهاية المنطقة الزمنية",
			repeat: "تكرار",
			saveButton: "حفظ",
			cancelButton: "إلغاء",
			deleteButton: "حذف",
			recurrence: "تكرار",
			wrongPattern: "نمط التكرار غير صالح.",
			seriesChangeAlert: "سيتم إلغاء التغييرات التي تم إجراؤها على الحالات الخاصة بسلسلة الحدث، وستتطابق هذه الأحداث مع السلسلة مرة أخرى.",
			createError: "يجب أن يكون مدة الحدث أقصر من تكرار حدوثه. قصر المدة أو غير نمط التكرار في محرر الحدث المتكرر.",
			recurrenceDateValidation: "بعض الأشهر تحتوي على أيام أقل من التاريخ المحدد. في هذه الأشهر، سيكون الحدث في آخر يوم من الشهر.",
			sameDayAlert: "لا يمكن حدوث حدثين متكررين في نفس اليوم.",
			editRecurrence: "تحرير التكرار",
			repeats: "يكرر",
			alert: "تنبيه",
			startEndError: "تاريخ النهاية المحدد يحدث قبل تاريخ البداية.",
			invalidDateError: "قيمة التاريخ المدخلة غير صالحة.",
			ok: "موافق",
			occurrence: "حدوث",
			series: "سلسلة",
			previous: "السابق",
			next: "التالي",
			timelineDay: "جدول زمني - اليوم",
			timelineWeek: "جدول زمني - الأسبوع",
			timelineWorkWeek: "جدول زمني - أسبوع العمل",
			timelineMonth: "جدول زمني - الشهر",
			expandAllDaySection: "توسيع",
			collapseAllDaySection: "طي",
		},
		recurrenceeditor: {
			none: "لا شيء",
			daily: "يوميًا",
			weekly: "أسبوعيًا",
			monthly: "شهريًا",
			month: "شهر",
			yearly: "سنويًا",
			never: "أبدًا",
			until: "حتى",
			count: "العدد",
			first: "الأول",
			second: "الثاني",
			third: "الثالث",
			fourth: "الرابع",
			last: "الأخير",
			repeat: "كرر",
			repeatEvery: "كرر كل",
			on: "كرر في",
			end: "النهاية",
			onDay: "اليوم",
			days: "أيام",
			weeks: "أسابيع",
			months: "أشهر",
			years: "سنوات",
			every: "كل",
			summaryTimes: "مرات",
			summaryOn: "في",
			summaryUntil: "حتى",
			summaryRepeat: "يكرر",
			summaryDay: "أيام",
			summaryWeek: "أسابيع",
			summaryMonth: "أشهر",
			summaryYear: "سنوات",
		},
		kanban: {
			items: "العناصر",
			min: "أقل حد",
			max: "أقصى حد",
			cardsSelected: "تم تحديد البطاقات",
			addTitle: "إضافة بطاقة جديدة",
			editTitle: "تحرير تفاصيل البطاقة",
			deleteTitle: "حذف البطاقة",
			deleteContent: "هل أنت متأكد أنك تريد حذف هذه البطاقة؟",
			save: "حفظ",
			delete: "حذف",
			cancel: "إلغاء",
			yes: "نعم",
			no: "لا",
			close: "أغلق",
			noCard: "لا توجد بطاقات لعرضها",
			unassigned: "غير معين",
		},
		richtexteditor: {
			alignments: "المحاذاة",
			justifyLeft: "محاذاة لليسار",
			justifyCenter: "محاذاة في الوسط",
			justifyRight: "محاذاة لليمين",
			justifyFull: "محاذاة بالكامل",
			fontName: "اسم الخط",
			fontSize: "حجم الخط",
			fontColor: "لون الخط",
			backgroundColor: "لون الخلفية",
			bold: "عريض",
			italic: "مائل",
			underline: "تحت الخط",
			strikethrough: "مشطوب",
			clearFormat: "مسح التنسيق",
			clearAll: "مسح الكل",
			cut: "قص",
			copy: "نسخ",
			paste: "لصق",
			unorderedList: "قائمة نقطية",
			orderedList: "قائمة مرقمة",
			indent: "زيادة المسافة البادئة",
			outdent: "تقليل المسافة البادئة",
			undo: "تراجع",
			redo: "إعادة",
			superscript: "حرف فوقي",
			subscript: "حرف تحتي",
			createLink: "إدراج رابط",
			openLink: "فتح الرابط",
			editLink: "تحرير الرابط",
			removeLink: "إزالة الرابط",
			image: "إدراج صورة",
			replace: "استبدال",
			align: "محاذاة",
			caption: "تسمية الصورة",
			remove: "إزالة",
			insertLink: "إدراج رابط",
			display: "عرض",
			altText: "نص بديل",
			dimension: "تغيير الحجم",
			fullscreen: "تكبير",
			maximize: "تكبير",
			minimize: "تصغير",
			lowerCase: "حروف صغيرة",
			upperCase: "حروف كبيرة",
			print: "طباعة",
			formats: "التنسيقات",
			sourcecode: "عرض الشفرة",
			preview: "معاينة",
			viewside: "جانب العرض",
			insertCode: "إدراج الكود",
			linkText: "نص العرض",
			linkTooltipLabel: "عنوان",
			linkWebUrl: "العنوان الإلكتروني",
			linkTitle: "أدخل العنوان",
			linkurl: "http://example.com",
			linkOpenInNewWindow: "فتح الرابط في نافذة جديدة",
			linkHeader: "إدراج رابط",
			dialogInsert: "إدراج",
			dialogCancel: "إلغاء",
			dialogUpdate: "تحديث",
			imageHeader: "إدراج صورة",
			imageLinkHeader: "يمكنك أيضًا توفير رابط من الويب",
			mdimageLink: "يرجى توفير رابط URL لصورتك",
			imageUploadMessage: "اسحب الصورة هنا أو تصفح للرفع",
			imageDeviceUploadMessage: "انقر هنا للرفع",
			imageAlternateText: "نص بديل",
			alternateHeader: "نص بديل",
			browse: "تصفح",
			imageUrl: "http://example.com/image.png",
			imageCaption: "تسمية",
			imageSizeHeader: "حجم الصورة",
			imageHeight: "الارتفاع",
			imageWidth: "العرض",
			textPlaceholder: "أدخل النص",
			inserttablebtn: "إدراج جدول",
			tabledialogHeader: "إدراج جدول",
			tableWidth: "العرض",
			cellpadding: "مسافة داخلية للخلية",
			cellspacing: "مسافة بين الخلايا",
			columns: "عدد الأعمدة",
			rows: "عدد الصفوف",
			tableRows: "صفوف الجدول",
			tableColumns: "أعمدة الجدول",
			tableCellHorizontalAlign: "محاذاة أفقية للخلية",
			tableCellVerticalAlign: "محاذاة عمودية للخلية",
			createTable: "إنشاء جدول",
			removeTable: "إزالة الجدول",
			tableHeader: "رأس الجدول",
			tableRemove: "إزالة الجدول",
			tableCellBackground: "خلفية الخلية",
			tableEditProperties: "تحرير خصائص الجدول",
			styles: "الأنماط",
			insertColumnLeft: "إدراج العمود على اليسار",
			insertColumnRight: "إدراج العمود على اليمين",
			deleteColumn: "حذف العمود",
			insertRowBefore: "إدراج الصف قبله",
			insertRowAfter: "إدراج الصف بعده",
			deleteRow: "حذف الصف",
			tableEditHeader: "تحرير الجدول",
			TableHeadingText: "عنوان",
			TableColText: "عمود",
			imageInsertLinkHeader: "إدراج رابط",
			editImageHeader: "تحرير الصورة",
			alignmentsDropDownLeft: "محاذاة لليسار",
			alignmentsDropDownCenter: "محاذاة في الوسط",
			alignmentsDropDownRight: "محاذاة لليمين",
			alignmentsDropDownJustify: "محاذاة بالكامل",
			imageDisplayDropDownInline: "مضمن",
			imageDisplayDropDownBreak: "فاصل",
			tableInsertRowDropDownBefore: "إدراج صف قبل",
			tableInsertRowDropDownAfter: "إدراج صف بعد",
			tableInsertRowDropDownDelete: "حذف الصف",
			tableInsertColumnDropDownLeft: "إدراج عمود على اليسار",
			tableInsertColumnDropDownRight: "إدراج عمود على اليمين",
			tableInsertColumnDropDownDelete: "حذف العمود",
			tableVerticalAlignDropDownTop: "محاذاة أعلى",
			tableVerticalAlignDropDownMiddle: "محاذاة وسط",
			tableVerticalAlignDropDownBottom: "محاذاة أسفل",
			tableStylesDropDownDashedBorder: "حدود متقطعة",
			tableStylesDropDownAlternateRows: "صفوف بديلة",
			pasteFormat: "لصق التنسيق",
			pasteFormatContent: "اختر إجراء التنسيق",
			plainText: "نص عادي",
			cleanFormat: "تنظيف",
			keepFormat: "الاحتفاظ بالتنسيق",
			pasteDialogOk: "موافق",
			pasteDialogCancel: "إلغاء",
			fileManager: "مدير الملفات",
			fileDialogHeader: "مستعرض الملفات",
			formatsDropDownParagraph: "فقرة",
			formatsDropDownCode: "كود",
			formatsDropDownQuotation: "اقتباس",
			formatsDropDownHeading1: "عنوان 1",
			formatsDropDownHeading2: "عنوان 2",
			formatsDropDownHeading3: "عنوان 3",
			formatsDropDownHeading4: "عنوان 4",
			fontNameSegoeUI: "Segoe UI",
			fontNameArial: "Arial",
			fontNameGeorgia: "Georgia",
			fontNameImpact: "Impact",
			fontNameTahoma: "Tahoma",
			fontNameTimesNewRoman: "Times New Roman",
			fontNameVerdana: "Verdana",
			numberFormatListNumber: "رقم",
			numberFormatListLowerAlpha: "حرف صغير",
			numberFormatListUpperAlpha: "حرف كبير",
			numberFormatListLowerRoman: "روماني صغير",
			numberFormatListUpperRoman: "روماني كبير",
			numberFormatListLowerGreek: "يوناني صغير",
			bulletFormatListDisc: "دائرة",
			bulletFormatListCircle: "دائرة صغيرة",
			bulletFormatListSquare: "مربع",
			numberFormatListNone: "بلا",
			bulletFormatListNone: "بلا",
			formatPainter: "رسام التنسيق",
			emojiPicker: "اختيار الرموز التعبيرية",
			embeddedCode: "كود مضمن",
			pasteEmbeddedCodeHere: "الصق الكود المضمن هنا",
			emojiPickerTypeToFind: "اكتب للبحث",
			emojiPickerNoResultFound: "لم يتم العثور على نتائج",
			emojiPickerTrySomethingElse: "جرب شيئًا آخر",
		},
	},
});
function App() {

	const { setShowSettings,showSettings, theme, loading } = useThemeContext();
	console.log("app rerender !!");
	return (
		<CssVarsProvider theme={theme} defaultMode="system">
			{/* style for icons library's */}
			<GlobalStyles
				styles={{
					"svg.icon": {
						color: "var(--Icon-color)",
						margin: "var(--Icon-margin)",
						fontSize: "var(--Icon-fontSize, 20px)",
						width: "0.75em",
						height: "0.75em",
					},
				}}
			/>

			{loading ? (
				<Loading />
			) : (
				<Sheet variant="plain">
					<Box
						position={"relative"}
						sx={{
							display: "flex",
							height: " calc(100dvh - var(--variant-borderWidth) *2 )",
							alignItems: "stretch",
						}}
					>
						<Tooltip title="setting" size="md" variant="solid" color="primary" placement="top" arrow>
							<IconButton
								component={motion.button}
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 1 }}
								variant="soft"
								color="primary"
								size="lg"
								sx={{ zIndex: 2, borderRadius: "50%", p: ".5em", position: "absolute", right: 4, bottom: 4 }}
								onClick={() => setShowSettings(() => !showSettings)}
							>
								<motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 3, ease: "linear" }}>
									<FiSettings className="icon" />
								</motion.div>
							</IconButton>
						</Tooltip>
						<SettingsBar />
						<Sidebar />
						{/* main content */}
						<Box sx={{ flex: 1, p: { xs: 2, md: 4 }, overflow: "auto" }}>
							<Outlet />
						</Box>
					</Box>
				</Sheet>
			)}
		</CssVarsProvider>
	);
}

{
	/* <Header toggleSideBar={toggleSideBar} />
	<SideBare show={show} toggleSideBar={toggleSideBar} /> */
}

export default App;
