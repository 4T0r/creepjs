const fontList = [
	"Andale Mono",
	"Arial",
	"Arial Black",
	"Arial Hebrew",
	"Arial MT",
	"Arial Narrow",
	"Arial Rounded MT Bold",
	"Arial Unicode MS",
	"Bitstream Vera Sans Mono",
	"Book Antiqua",
	"Bookman Old Style",
	"Calibri",
	"Cambria",
	"Cambria Math",
	"Century",
	"Century Gothic",
	"Century Schoolbook",
	"Comic Sans",
	"Comic Sans MS",
	"Consolas",
	"Courier",
	"Courier New",
	"Geneva",
	"Georgia",
	"Helvetica",
	"Helvetica Neue",
	"Impact",
	"Lucida Bright",
	"Lucida Calligraphy",
	"Lucida Console",
	"Lucida Fax",
	"LUCIDA GRANDE",
	"Lucida Handwriting",
	"Lucida Sans",
	"Lucida Sans Typewriter",
	"Lucida Sans Unicode",
	"Microsoft Sans Serif",
	"Monaco",
	"Monotype Corsiva",
	"MS Gothic",
	"MS Outlook",
	"MS PGothic",
	"MS Reference Sans Serif",
	"MS Sans Serif",
	"MS Serif",
	"MYRIAD",
	"MYRIAD PRO",
	"Palatino",
	"Palatino Linotype",
	"Segoe Print",
	"Segoe Script",
	"Segoe UI",
	"Segoe UI Light",
	"Segoe UI Semibold",
	"Segoe UI Symbol",
	"Tahoma",
	"Times",
	"Times New Roman",
	"Times New Roman PS",
	"Trebuchet MS",
	"Verdana",
	"Wingdings",
	"Wingdings 2",
	"Wingdings 3"
];

const extendedFontList = [
	"Abadi MT Condensed Light",
	"Academy Engraved LET",
	"ADOBE CASLON PRO",
	"Adobe Garamond",
	"ADOBE GARAMOND PRO",
	"Agency FB",
	"Aharoni",
	"Albertus Extra Bold",
	"Albertus Medium",
	"Algerian",
	"Amazone BT",
	"American Typewriter",
	"American Typewriter Condensed",
	"AmerType Md BT",
	"Andalus",
	"Angsana New",
	"AngsanaUPC",
	"Antique Olive",
	"Aparajita",
	"Apple Chancery",
	"Apple Color Emoji",
	"Apple SD Gothic Neo",
	"Arabic Typesetting",
	"ARCHER",
	"ARNO PRO",
	"Arrus BT",
	"Aurora Cn BT",
	"AvantGarde Bk BT",
	"AvantGarde Md BT",
	"AVENIR",
	"Ayuthaya",
	"Bandy",
	"Bangla Sangam MN",
	"Bank Gothic",
	"BankGothic Md BT",
	"Baskerville",
	"Baskerville Old Face",
	"Batang",
	"BatangChe",
	"Bauer Bodoni",
	"Bauhaus 93",
	"Bazooka",
	"Bell MT",
	"Bembo",
	"Benguiat Bk BT",
	"Berlin Sans FB",
	"Berlin Sans FB Demi",
	"Bernard MT Condensed",
	"BernhardFashion BT",
	"BernhardMod BT",
	"Big Caslon",
	"BinnerD",
	"Blackadder ITC",
	"BlairMdITC TT",
	"Bodoni 72",
	"Bodoni 72 Oldstyle",
	"Bodoni 72 Smallcaps",
	"Bodoni MT",
	"Bodoni MT Black",
	"Bodoni MT Condensed",
	"Bodoni MT Poster Compressed",
	"Bookshelf Symbol 7",
	"Boulder",
	"Bradley Hand",
	"Bradley Hand ITC",
	"Bremen Bd BT",
	"Britannic Bold",
	"Broadway",
	"Browallia New",
	"BrowalliaUPC",
	"Brush Script MT",
	"Californian FB",
	"Calisto MT",
	"Calligrapher",
	"Candara",
	"CaslonOpnface BT",
	"Castellar",
	"Centaur",
	"Cezanne",
	"CG Omega",
	"CG Times",
	"Chalkboard",
	"Chalkboard SE",
	"Chalkduster",
	"Charlesworth",
	"Charter Bd BT",
	"Charter BT",
	"Chaucer",
	"ChelthmITC Bk BT",
	"Chiller",
	"Clarendon",
	"Clarendon Condensed",
	"CloisterBlack BT",
	"Cochin",
	"Colonna MT",
	"Constantia",
	"Cooper Black",
	"Copperplate",
	"Copperplate Gothic",
	"Copperplate Gothic Bold",
	"Copperplate Gothic Light",
	"CopperplGoth Bd BT",
	"Corbel",
	"Cordia New",
	"CordiaUPC",
	"Cornerstone",
	"Coronet",
	"Cuckoo",
	"Curlz MT",
	"DaunPenh",
	"Dauphin",
	"David",
	"DB LCD Temp",
	"DELICIOUS",
	"Denmark",
	"DFKai-SB",
	"Didot",
	"DilleniaUPC",
	"DIN",
	"DokChampa",
	"Dotum",
	"DotumChe",
	"Ebrima",
	"Edwardian Script ITC",
	"Elephant",
	"English 111 Vivace BT",
	"Engravers MT",
	"EngraversGothic BT",
	"Eras Bold ITC",
	"Eras Demi ITC",
	"Eras Light ITC",
	"Eras Medium ITC",
	"EucrosiaUPC",
	"Euphemia",
	"Euphemia UCAS",
	"EUROSTILE",
	"Exotc350 Bd BT",
	"FangSong",
	"Felix Titling",
	"Fixedsys",
	"FONTIN",
	"Footlight MT Light",
	"Forte",
	"FrankRuehl",
	"Fransiscan",
	"Freefrm721 Blk BT",
	"FreesiaUPC",
	"Freestyle Script",
	"French Script MT",
	"FrnkGothITC Bk BT",
	"Fruitger",
	"FRUTIGER",
	"Futura",
	"Futura Bk BT",
	"Futura Lt BT",
	"Futura Md BT",
	"Futura ZBlk BT",
	"FuturaBlack BT",
	"Gabriola",
	"Galliard BT",
	"Gautami",
	"Geeza Pro",
	"Geometr231 BT",
	"Geometr231 Hv BT",
	"Geometr231 Lt BT",
	"GeoSlab 703 Lt BT",
	"GeoSlab 703 XBd BT",
	"Gigi",
	"Gill Sans",
	"Gill Sans MT",
	"Gill Sans MT Condensed",
	"Gill Sans MT Ext Condensed Bold",
	"Gill Sans Ultra Bold",
	"Gill Sans Ultra Bold Condensed",
	"Gisha",
	"Gloucester MT Extra Condensed",
	"GOTHAM",
	"GOTHAM BOLD",
	"Goudy Old Style",
	"Goudy Stout",
	"GoudyHandtooled BT",
	"GoudyOLSt BT",
	"Gujarati Sangam MN",
	"Gulim",
	"GulimChe",
	"Gungsuh",
	"GungsuhChe",
	"Gurmukhi MN",
	"Haettenschweiler",
	"Harlow Solid Italic",
	"Harrington",
	"Heather",
	"Heiti SC",
	"Heiti TC",
	"HELV",
	"Herald",
	"High Tower Text",
	"Hiragino Kaku Gothic ProN",
	"Hiragino Mincho ProN",
	"Hoefler Text",
	"Humanst 521 Cn BT",
	"Humanst521 BT",
	"Humanst521 Lt BT",
	"Imprint MT Shadow",
	"Incised901 Bd BT",
	"Incised901 BT",
	"Incised901 Lt BT",
	"INCONSOLATA",
	"Informal Roman",
	"Informal011 BT",
	"INTERSTATE",
	"IrisUPC",
	"Iskoola Pota",
	"JasmineUPC",
	"Jazz LET",
	"Jenson",
	"Jester",
	"Jokerman",
	"Juice ITC",
	"Kabel Bk BT",
	"Kabel Ult BT",
	"Kailasa",
	"KaiTi",
	"Kalinga",
	"Kannada Sangam MN",
	"Kartika",
	"Kaufmann Bd BT",
	"Kaufmann BT",
	"Khmer UI",
	"KodchiangUPC",
	"Kokila",
	"Korinna BT",
	"Kristen ITC",
	"Krungthep",
	"Kunstler Script",
	"Lao UI",
	"Latha",
	"Leelawadee",
	"Letter Gothic",
	"Levenim MT",
	"LilyUPC",
	"Lithograph",
	"Lithograph Light",
	"Long Island",
	"Lydian BT",
	"Magneto",
	"Maiandra GD",
	"Malayalam Sangam MN",
	"Malgun Gothic",
	"Mangal",
	"Marigold",
	"Marion",
	"Marker Felt",
	"Market",
	"Marlett",
	"Matisse ITC",
	"Matura MT Script Capitals",
	"Meiryo",
	"Meiryo UI",
	"Microsoft Himalaya",
	"Microsoft JhengHei",
	"Microsoft New Tai Lue",
	"Microsoft PhagsPa",
	"Microsoft Tai Le",
	"Microsoft Uighur",
	"Microsoft YaHei",
	"Microsoft Yi Baiti",
	"MingLiU",
	"MingLiU_HKSCS",
	"MingLiU_HKSCS-ExtB",
	"MingLiU-ExtB",
	"Minion",
	"Minion Pro",
	"Miriam",
	"Miriam Fixed",
	"Mistral",
	"Modern",
	"Modern No. 20",
	"Mona Lisa Solid ITC TT",
	"Mongolian Baiti",
	"MONO",
	"MoolBoran",
	"Mrs Eaves",
	"MS LineDraw",
	"MS Mincho",
	"MS PMincho",
	"MS Reference Specialty",
	"MS UI Gothic",
	"MT Extra",
	"MUSEO",
	"MV Boli",
	"Nadeem",
	"Narkisim",
	"NEVIS",
	"News Gothic",
	"News GothicMT",
	"NewsGoth BT",
	"Niagara Engraved",
	"Niagara Solid",
	"Noteworthy",
	"NSimSun",
	"Nyala",
	"OCR A Extended",
	"Old Century",
	"Old English Text MT",
	"Onyx",
	"Onyx BT",
	"OPTIMA",
	"Oriya Sangam MN",
	"OSAKA",
	"OzHandicraft BT",
	"Palace Script MT",
	"Papyrus",
	"Parchment",
	"Party LET",
	"Pegasus",
	"Perpetua",
	"Perpetua Titling MT",
	"PetitaBold",
	"Pickwick",
	"Plantagenet Cherokee",
	"Playbill",
	"PMingLiU",
	"PMingLiU-ExtB",
	"Poor Richard",
	"Poster",
	"PosterBodoni BT",
	"PRINCETOWN LET",
	"Pristina",
	"PTBarnum BT",
	"Pythagoras",
	"Raavi",
	"Rage Italic",
	"Ravie",
	"Ribbon131 Bd BT",
	"Rockwell",
	"Rockwell Condensed",
	"Rockwell Extra Bold",
	"Rod",
	"Roman",
	"Sakkal Majalla",
	"Santa Fe LET",
	"Savoye LET",
	"Sceptre",
	"Script",
	"Script MT Bold",
	"SCRIPTINA",
	"Serifa",
	"Serifa BT",
	"Serifa Th BT",
	"ShelleyVolante BT",
	"Sherwood",
	"Shonar Bangla",
	"Showcard Gothic",
	"Shruti",
	"Signboard",
	"SILKSCREEN",
	"SimHei",
	"Simplified Arabic",
	"Simplified Arabic Fixed",
	"SimSun",
	"SimSun-ExtB",
	"Sinhala Sangam MN",
	"Sketch Rockwell",
	"Skia",
	"Small Fonts",
	"Snap ITC",
	"Snell Roundhand",
	"Socket",
	"Souvenir Lt BT",
	"Staccato222 BT",
	"Steamer",
	"Stencil",
	"Storybook",
	"Styllo",
	"Subway",
	"Swis721 BlkEx BT",
	"Swiss911 XCm BT",
	"Sylfaen",
	"Synchro LET",
	"System",
	"Tamil Sangam MN",
	"Technical",
	"Teletype",
	"Telugu Sangam MN",
	"Tempus Sans ITC",
	"Terminal",
	"Thonburi",
	"Traditional Arabic",
	"Trajan",
	"TRAJAN PRO",
	"Tristan",
	"Tubular",
	"Tunga",
	"Tw Cen MT",
	"Tw Cen MT Condensed",
	"Tw Cen MT Condensed Extra Bold",
	"TypoUpright BT",
	"Unicorn",
	"Univers",
	"Univers CE 55 Medium",
	"Univers Condensed",
	"Utsaah",
	"Vagabond",
	"Vani",
	"Vijaya",
	"Viner Hand ITC",
	"VisualUI",
	"Vivaldi",
	"Vladimir Script",
	"Vrinda",
	"Westminster",
	"WHITNEY",
	"Wide Latin",
	"ZapfEllipt BT",
	"ZapfHumnst BT",
	"ZapfHumnst Dm BT",
	"Zapfino",
	"Zurich BlkEx BT",
	"Zurich Ex BT",
	"ZWAdobeF"
];

// ie11 fix for template.content
function templateContent(template) {
	// template {display: none !important} /* add css if template is in dom */
	if ("content" in document.createElement("template")) {
		return document.importNode(template.content, true);
	} else {
		const frag = document.createDocumentFragment();
		const children = template.childNodes;
		for (let i = 0, len = children.length; i < len; i++) {
			frag.appendChild(children[i].cloneNode(true));
		}
		return frag;
	}
}

// tagged template literal (JSX alternative)
const patch = async (oldEl, newEl, fn = null) => {
	oldEl.parentNode.replaceChild(newEl, oldEl);
	return typeof fn === "function" ? await fn() : true;
};
const html = (stringSet, ...expressionSet) => {
	const template = document.createElement("template");
	template.innerHTML = stringSet
		.map((str, i) => `${str}${expressionSet[i] || ""}`)
		.join("");
	return templateContent(template); // ie11 fix for template.content
};

const baseStyle = ` > span{position:absolute;left:-9999px;fontSize:100px;fontStyle:normal;fontWeight:normal;letterSpacing:normal;lineBreak:auto;lineHeight:normal;textTransform:none;textAlign:left;textDecoration:none;textShadow:none;whiteSpace:normal;wordBreak:normal;wordSpacing:normal}`;

const detector = (fonts) => {
	const baseFonts = ["monospace", "sans-serif", "serif"]; // available fonts match baseFonts
	const fontsElem = document.getElementById("fonts");
	const baseFontsElem = document.getElementById("baseFonts");
	const checkFontsElem = document.getElementById("checkFonts");
	const text = "mmmmmmmmmmlli";
	const baseOffsetWidth = {};
	const baseOffsetHeight = {};
	const baseFontSpan = (font) => {
		return `<span data-font="${font}" style="font-family: '${font}'">${text}</span>`;
	};
	const checkFontSpan = (font, basefont) => {
		return `<span data-font="${font}" data-basefont="${basefont}" style="font-family: ${`'${font}', '${basefont}'`}">${text}</span>`;
	};

	// get base font offsets
	patch(
		baseFontsElem,
		html`
			<div id="baseTest">
				<style>
					#baseTest${baseStyle};
				</style>
				${baseFonts.map((font) => baseFontSpan(font)).join("")}
			</div>
		`,
		() => {
			const baseTestElem = document.getElementById("baseTest");
			const spanElems = document.querySelectorAll("#baseTest span");
			[...spanElems].forEach((span) => {
				const {
					dataset: { font }
				} = span;
				baseOffsetWidth[font] = span.offsetWidth;
				baseOffsetHeight[font] = span.offsetHeight;
				return;
			});
			return fontsElem.removeChild(baseTestElem);
		}
	);

	const detect = (fonts) => {
		const matched = [];
		patch(
			checkFontsElem,
			html`
				<div id="checkTest">
					<style>
						#checkTest${baseStyle};
					</style>
					${fonts
						.map((font) => {
							const template = `
						${checkFontSpan(font, "monospace")}
						${checkFontSpan(font, "sans-serif")}
						${checkFontSpan(font, "serif")}
						`;
							return template;
						})
						.join("")}
				</div>
			`,
			() => {
				const checkTestElem = document.getElementById("checkTest");
				const spanElems = document.querySelectorAll("#checkTest span");
				[...spanElems].forEach((span) => {
					const {
						dataset: { basefont, font },
						offsetWidth,
						offsetHeight
					} = span;

					const widthMatchesBase = offsetWidth == baseOffsetWidth[basefont];
					const heightMatchesBase = offsetHeight == baseOffsetHeight[basefont];
					const detected = !widthMatchesBase || !heightMatchesBase;
					if (detected) {
						matched.push(font);
					}

					return;
				});
				return fontsElem.removeChild(checkTestElem);
			}
		);

		return [...new Set(matched)]; // remove dups
	};

	return detect;
};
const detect = detector();

const timer = (logStart) => {
	console.log(logStart);
	const start = Date.now();
	return (logEnd) => {
		const end = Date.now() - start;
		console.log(`${logEnd}: ${end / 1000} seconds`);
	};
};


const process2 = timer('Computing fingerprint...')
console.log(detect([...fontList, ...extendedFontList]));
process2('Fingerprint complete')