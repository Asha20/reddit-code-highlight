export type PrismLanguage =
	| "none"
	| "markup"
	| "css"
	| "clike"
	| "javascript"
	| "abap"
	| "abnf"
	| "actionscript"
	| "ada"
	| "agda"
	| "al"
	| "antlr4"
	| "apacheconf"
	| "apex"
	| "apl"
	| "applescript"
	| "aql"
	| "arduino"
	| "arff"
	| "asciidoc"
	| "aspnet"
	| "asm6502"
	| "autohotkey"
	| "autoit"
	| "bash"
	| "basic"
	| "batch"
	| "bbcode"
	| "birb"
	| "bison"
	| "bnf"
	| "brainfuck"
	| "brightscript"
	| "bro"
	| "bsl"
	| "c"
	| "csharp"
	| "cpp"
	| "cil"
	| "clojure"
	| "cmake"
	| "coffeescript"
	| "concurnas"
	| "csp"
	| "crystal"
	| "css-extras"
	| "cypher"
	| "d"
	| "dart"
	| "dataweave"
	| "dax"
	| "dhall"
	| "diff"
	| "django"
	| "dns-zone-file"
	| "docker"
	| "ebnf"
	| "editorconfig"
	| "eiffel"
	| "ejs"
	| "elixir"
	| "elm"
	| "etlua"
	| "erb"
	| "erlang"
	| "excel-formula"
	| "fsharp"
	| "factor"
	| "firestore-security-rules"
	| "flow"
	| "fortran"
	| "ftl"
	| "gml"
	| "gcode"
	| "gdscript"
	| "gedcom"
	| "gherkin"
	| "git"
	| "glsl"
	| "go"
	| "graphql"
	| "groovy"
	| "haml"
	| "handlebars"
	| "haskell"
	| "haxe"
	| "hcl"
	| "hlsl"
	| "http"
	| "hpkp"
	| "hsts"
	| "ichigojam"
	| "icon"
	| "ignore"
	| "inform7"
	| "ini"
	| "io"
	| "j"
	| "java"
	| "javadoc"
	| "javadoclike"
	| "javastacktrace"
	| "jolie"
	| "jq"
	| "jsdoc"
	| "js-extras"
	| "json"
	| "json5"
	| "jsonp"
	| "jsstacktrace"
	| "js-templates"
	| "julia"
	| "keyman"
	| "kotlin"
	| "latex"
	| "latte"
	| "less"
	| "lilypond"
	| "liquid"
	| "lisp"
	| "livescript"
	| "llvm"
	| "lolcode"
	| "lua"
	| "makefile"
	| "markdown"
	| "markup-templating"
	| "matlab"
	| "mel"
	| "mizar"
	| "mongodb"
	| "monkey"
	| "moonscript"
	| "n1ql"
	| "n4js"
	| "nand2tetris-hdl"
	| "naniscript"
	| "nasm"
	| "neon"
	| "nginx"
	| "nim"
	| "nix"
	| "nsis"
	| "objectivec"
	| "ocaml"
	| "opencl"
	| "oz"
	| "parigp"
	| "parser"
	| "pascal"
	| "pascaligo"
	| "pcaxis"
	| "peoplecode"
	| "perl"
	| "php"
	| "phpdoc"
	| "php-extras"
	| "plsql"
	| "powerquery"
	| "powershell"
	| "processing"
	| "prolog"
	| "promql"
	| "properties"
	| "protobuf"
	| "pug"
	| "puppet"
	| "pure"
	| "purebasic"
	| "purescript"
	| "python"
	| "q"
	| "qml"
	| "qore"
	| "r"
	| "racket"
	| "jsx"
	| "tsx"
	| "reason"
	| "regex"
	| "renpy"
	| "rest"
	| "rip"
	| "roboconf"
	| "robotframework"
	| "ruby"
	| "rust"
	| "sas"
	| "sass"
	| "scss"
	| "scala"
	| "scheme"
	| "shell-session"
	| "smali"
	| "smalltalk"
	| "smarty"
	| "sml"
	| "solidity"
	| "solution-file"
	| "soy"
	| "sparql"
	| "splunk-spl"
	| "sqf"
	| "sql"
	| "stan"
	| "iecst"
	| "stylus"
	| "swift"
	| "t4-templating"
	| "t4-cs"
	| "t4-vb"
	| "tap"
	| "tcl"
	| "tt2"
	| "textile"
	| "toml"
	| "turtle"
	| "twig"
	| "typescript"
	| "typoscript"
	| "unrealscript"
	| "vala"
	| "vbnet"
	| "velocity"
	| "verilog"
	| "vhdl"
	| "vim"
	| "visual-basic"
	| "warpscript"
	| "wasm"
	| "wiki"
	| "xeora"
	| "xml-doc"
	| "xojo"
	| "xquery"
	| "yaml"
	| "yang"
	| "zig";

export interface Language {
	lang: PrismLanguage;
	name: string;
}

export function isPrismLanguage(x: string): x is PrismLanguage {
	return x in languages;
}

export const languages: Record<PrismLanguage, Language> = {
	none: {
		name: "Plain Text",
		lang: "none",
	},
	markup: {
		name: "Markup",
		lang: "markup",
	},
	css: {
		name: "CSS",
		lang: "css",
	},
	clike: {
		name: "C-like",
		lang: "clike",
	},
	javascript: {
		name: "JavaScript",
		lang: "javascript",
	},
	abap: {
		name: "ABAP",
		lang: "abap",
	},
	abnf: {
		name: "ABNF",
		lang: "abnf",
	},
	actionscript: {
		name: "ActionScript",
		lang: "actionscript",
	},
	ada: {
		name: "Ada",
		lang: "ada",
	},
	agda: {
		name: "Agda",
		lang: "agda",
	},
	al: {
		name: "AL",
		lang: "al",
	},
	antlr4: {
		name: "ANTLR4",
		lang: "antlr4",
	},
	apacheconf: {
		name: "Apache Configuration",
		lang: "apacheconf",
	},
	apex: {
		name: "Apex",
		lang: "apex",
	},
	apl: {
		name: "APL",
		lang: "apl",
	},
	applescript: {
		name: "AppleScript",
		lang: "applescript",
	},
	aql: {
		name: "AQL",
		lang: "aql",
	},
	arduino: {
		name: "Arduino",
		lang: "arduino",
	},
	arff: {
		name: "ARFF",
		lang: "arff",
	},
	asciidoc: {
		name: "AsciiDoc",
		lang: "asciidoc",
	},
	aspnet: {
		name: "ASP.NET (C#)",
		lang: "aspnet",
	},
	asm6502: {
		name: "6502 Assembly",
		lang: "asm6502",
	},
	autohotkey: {
		name: "AutoHotkey",
		lang: "autohotkey",
	},
	autoit: {
		name: "AutoIt",
		lang: "autoit",
	},
	bash: {
		name: "Bash",
		lang: "bash",
	},
	basic: {
		name: "BASIC",
		lang: "basic",
	},
	batch: {
		name: "Batch",
		lang: "batch",
	},
	bbcode: {
		name: "BBcode",
		lang: "bbcode",
	},
	birb: {
		name: "Birb",
		lang: "birb",
	},
	bison: {
		name: "Bison",
		lang: "bison",
	},
	bnf: {
		name: "BNF",
		lang: "bnf",
	},
	brainfuck: {
		name: "Brainfuck",
		lang: "brainfuck",
	},
	brightscript: {
		name: "BrightScript",
		lang: "brightscript",
	},
	bro: {
		name: "Bro",
		lang: "bro",
	},
	bsl: {
		name: "BSL (1C:Enterprise)",
		lang: "bsl",
	},
	c: {
		name: "C",
		lang: "c",
	},
	csharp: {
		name: "C#",
		lang: "csharp",
	},
	cpp: {
		name: "C++",
		lang: "cpp",
	},
	cil: {
		name: "CIL",
		lang: "cil",
	},
	clojure: {
		name: "Clojure",
		lang: "clojure",
	},
	cmake: {
		name: "CMake",
		lang: "cmake",
	},
	coffeescript: {
		name: "CoffeeScript",
		lang: "coffeescript",
	},
	concurnas: {
		name: "Concurnas",
		lang: "concurnas",
	},
	csp: {
		name: "Content-Security-Policy",
		lang: "csp",
	},
	crystal: {
		name: "Crystal",
		lang: "crystal",
	},
	"css-extras": {
		name: "CSS Extras",
		lang: "css-extras",
	},
	cypher: {
		name: "Cypher",
		lang: "cypher",
	},
	d: {
		name: "D",
		lang: "d",
	},
	dart: {
		name: "Dart",
		lang: "dart",
	},
	dataweave: {
		name: "DataWeave",
		lang: "dataweave",
	},
	dax: {
		name: "DAX",
		lang: "dax",
	},
	dhall: {
		name: "Dhall",
		lang: "dhall",
	},
	diff: {
		name: "Diff",
		lang: "diff",
	},
	django: {
		name: "Django/Jinja2",
		lang: "django",
	},
	"dns-zone-file": {
		name: "DNS zone file",
		lang: "dns-zone-file",
	},
	docker: {
		name: "Docker",
		lang: "docker",
	},
	ebnf: {
		name: "EBNF",
		lang: "ebnf",
	},
	editorconfig: {
		name: "EditorConfig",
		lang: "editorconfig",
	},
	eiffel: {
		name: "Eiffel",
		lang: "eiffel",
	},
	ejs: {
		name: "EJS",
		lang: "ejs",
	},
	elixir: {
		name: "Elixir",
		lang: "elixir",
	},
	elm: {
		name: "Elm",
		lang: "elm",
	},
	etlua: {
		name: "Embedded Lua templating",
		lang: "etlua",
	},
	erb: {
		name: "ERB",
		lang: "erb",
	},
	erlang: {
		name: "Erlang",
		lang: "erlang",
	},
	"excel-formula": {
		name: "Excel Formula",
		lang: "excel-formula",
	},
	fsharp: {
		name: "F#",
		lang: "fsharp",
	},
	factor: {
		name: "Factor",
		lang: "factor",
	},
	"firestore-security-rules": {
		name: "Firestore security rules",
		lang: "firestore-security-rules",
	},
	flow: {
		name: "Flow",
		lang: "flow",
	},
	fortran: {
		name: "Fortran",
		lang: "fortran",
	},
	ftl: {
		name: "FreeMarker Template Language",
		lang: "ftl",
	},
	gml: {
		name: "GameMaker Language",
		lang: "gml",
	},
	gcode: {
		name: "G-code",
		lang: "gcode",
	},
	gdscript: {
		name: "GDScript",
		lang: "gdscript",
	},
	gedcom: {
		name: "GEDCOM",
		lang: "gedcom",
	},
	gherkin: {
		name: "Gherkin",
		lang: "gherkin",
	},
	git: {
		name: "Git",
		lang: "git",
	},
	glsl: {
		name: "GLSL",
		lang: "glsl",
	},
	go: {
		name: "Go",
		lang: "go",
	},
	graphql: {
		name: "GraphQL",
		lang: "graphql",
	},
	groovy: {
		name: "Groovy",
		lang: "groovy",
	},
	haml: {
		name: "Haml",
		lang: "haml",
	},
	handlebars: {
		name: "Handlebars",
		lang: "handlebars",
	},
	haskell: {
		name: "Haskell",
		lang: "haskell",
	},
	haxe: {
		name: "Haxe",
		lang: "haxe",
	},
	hcl: {
		name: "HCL",
		lang: "hcl",
	},
	hlsl: {
		name: "HLSL",
		lang: "hlsl",
	},
	http: {
		name: "HTTP",
		lang: "http",
	},
	hpkp: {
		name: "HTTP Public-Key-Pins",
		lang: "hpkp",
	},
	hsts: {
		name: "HTTP Strict-Transport-Security",
		lang: "hsts",
	},
	ichigojam: {
		name: "IchigoJam",
		lang: "ichigojam",
	},
	icon: {
		name: "Icon",
		lang: "icon",
	},
	ignore: {
		name: ".ignore",
		lang: "ignore",
	},
	inform7: {
		name: "Inform 7",
		lang: "inform7",
	},
	ini: {
		name: "Ini",
		lang: "ini",
	},
	io: {
		name: "Io",
		lang: "io",
	},
	j: {
		name: "J",
		lang: "j",
	},
	java: {
		name: "Java",
		lang: "java",
	},
	javadoc: {
		name: "JavaDoc",
		lang: "javadoc",
	},
	javadoclike: {
		name: "JavaDoc-like",
		lang: "javadoclike",
	},
	javastacktrace: {
		name: "Java stack trace",
		lang: "javastacktrace",
	},
	jolie: {
		name: "Jolie",
		lang: "jolie",
	},
	jq: {
		name: "JQ",
		lang: "jq",
	},
	jsdoc: {
		name: "JSDoc",
		lang: "jsdoc",
	},
	"js-extras": {
		name: "JS Extras",
		lang: "js-extras",
	},
	json: {
		name: "JSON",
		lang: "json",
	},
	json5: {
		name: "JSON5",
		lang: "json5",
	},
	jsonp: {
		name: "JSONP",
		lang: "jsonp",
	},
	jsstacktrace: {
		name: "JS stack trace",
		lang: "jsstacktrace",
	},
	"js-templates": {
		name: "JS Templates",
		lang: "js-templates",
	},
	julia: {
		name: "Julia",
		lang: "julia",
	},
	keyman: {
		name: "Keyman",
		lang: "keyman",
	},
	kotlin: {
		name: "Kotlin",
		lang: "kotlin",
	},
	latex: {
		name: "LaTeX",
		lang: "latex",
	},
	latte: {
		name: "Latte",
		lang: "latte",
	},
	less: {
		name: "Less",
		lang: "less",
	},
	lilypond: {
		name: "LilyPond",
		lang: "lilypond",
	},
	liquid: {
		name: "Liquid",
		lang: "liquid",
	},
	lisp: {
		name: "Lisp",
		lang: "lisp",
	},
	livescript: {
		name: "LiveScript",
		lang: "livescript",
	},
	llvm: {
		name: "LLVM IR",
		lang: "llvm",
	},
	lolcode: {
		name: "LOLCODE",
		lang: "lolcode",
	},
	lua: {
		name: "Lua",
		lang: "lua",
	},
	makefile: {
		name: "Makefile",
		lang: "makefile",
	},
	markdown: {
		name: "Markdown",
		lang: "markdown",
	},
	"markup-templating": {
		name: "Markup templating",
		lang: "markup-templating",
	},
	matlab: {
		name: "MATLAB",
		lang: "matlab",
	},
	mel: {
		name: "MEL",
		lang: "mel",
	},
	mizar: {
		name: "Mizar",
		lang: "mizar",
	},
	mongodb: {
		name: "MongoDB",
		lang: "mongodb",
	},
	monkey: {
		name: "Monkey",
		lang: "monkey",
	},
	moonscript: {
		name: "MoonScript",
		lang: "moonscript",
	},
	n1ql: {
		name: "N1QL",
		lang: "n1ql",
	},
	n4js: {
		name: "N4JS",
		lang: "n4js",
	},
	"nand2tetris-hdl": {
		name: "Nand To Tetris HDL",
		lang: "nand2tetris-hdl",
	},
	naniscript: {
		name: "Naninovel Script",
		lang: "naniscript",
	},
	nasm: {
		name: "NASM",
		lang: "nasm",
	},
	neon: {
		name: "NEON",
		lang: "neon",
	},
	nginx: {
		name: "nginx",
		lang: "nginx",
	},
	nim: {
		name: "Nim",
		lang: "nim",
	},
	nix: {
		name: "Nix",
		lang: "nix",
	},
	nsis: {
		name: "NSIS",
		lang: "nsis",
	},
	objectivec: {
		name: "Objective-C",
		lang: "objectivec",
	},
	ocaml: {
		name: "OCaml",
		lang: "ocaml",
	},
	opencl: {
		name: "OpenCL",
		lang: "opencl",
	},
	oz: {
		name: "Oz",
		lang: "oz",
	},
	parigp: {
		name: "PARI/GP",
		lang: "parigp",
	},
	parser: {
		name: "Parser",
		lang: "parser",
	},
	pascal: {
		name: "Pascal",
		lang: "pascal",
	},
	pascaligo: {
		name: "Pascaligo",
		lang: "pascaligo",
	},
	pcaxis: {
		name: "PC-Axis",
		lang: "pcaxis",
	},
	peoplecode: {
		name: "PeopleCode",
		lang: "peoplecode",
	},
	perl: {
		name: "Perl",
		lang: "perl",
	},
	php: {
		name: "PHP",
		lang: "php",
	},
	phpdoc: {
		name: "PHPDoc",
		lang: "phpdoc",
	},
	"php-extras": {
		name: "PHP Extras",
		lang: "php-extras",
	},
	plsql: {
		name: "PL/SQL",
		lang: "plsql",
	},
	powerquery: {
		name: "PowerQuery",
		lang: "powerquery",
	},
	powershell: {
		name: "PowerShell",
		lang: "powershell",
	},
	processing: {
		name: "Processing",
		lang: "processing",
	},
	prolog: {
		name: "Prolog",
		lang: "prolog",
	},
	promql: {
		name: "PromQL",
		lang: "promql",
	},
	properties: {
		name: ".properties",
		lang: "properties",
	},
	protobuf: {
		name: "Protocol Buffers",
		lang: "protobuf",
	},
	pug: {
		name: "Pug",
		lang: "pug",
	},
	puppet: {
		name: "Puppet",
		lang: "puppet",
	},
	pure: {
		name: "Pure",
		lang: "pure",
	},
	purebasic: {
		name: "PureBasic",
		lang: "purebasic",
	},
	purescript: {
		name: "PureScript",
		lang: "purescript",
	},
	python: {
		name: "Python",
		lang: "python",
	},
	q: {
		name: "Q (kdb+ database)",
		lang: "q",
	},
	qml: {
		name: "QML",
		lang: "qml",
	},
	qore: {
		name: "Qore",
		lang: "qore",
	},
	r: {
		name: "R",
		lang: "r",
	},
	racket: {
		name: "Racket",
		lang: "racket",
	},
	jsx: {
		name: "React JSX",
		lang: "jsx",
	},
	tsx: {
		name: "React TSX",
		lang: "tsx",
	},
	reason: {
		name: "Reason",
		lang: "reason",
	},
	regex: {
		name: "Regex",
		lang: "regex",
	},
	renpy: {
		name: "Ren'py",
		lang: "renpy",
	},
	rest: {
		name: "reST (reStructuredText)",
		lang: "rest",
	},
	rip: {
		name: "Rip",
		lang: "rip",
	},
	roboconf: {
		name: "Roboconf",
		lang: "roboconf",
	},
	robotframework: {
		name: "Robot Framework",
		lang: "robotframework",
	},
	ruby: {
		name: "Ruby",
		lang: "ruby",
	},
	rust: {
		name: "Rust",
		lang: "rust",
	},
	sas: {
		name: "SAS",
		lang: "sas",
	},
	sass: {
		name: "Sass (Sass)",
		lang: "sass",
	},
	scss: {
		name: "Sass (Scss)",
		lang: "scss",
	},
	scala: {
		name: "Scala",
		lang: "scala",
	},
	scheme: {
		name: "Scheme",
		lang: "scheme",
	},
	"shell-session": {
		name: "Shell session",
		lang: "shell-session",
	},
	smali: {
		name: "Smali",
		lang: "smali",
	},
	smalltalk: {
		name: "Smalltalk",
		lang: "smalltalk",
	},
	smarty: {
		name: "Smarty",
		lang: "smarty",
	},
	sml: {
		name: "SML",
		lang: "sml",
	},
	solidity: {
		name: "Solidity (Ethereum)",
		lang: "solidity",
	},
	"solution-file": {
		name: "Solution file",
		lang: "solution-file",
	},
	soy: {
		name: "Soy (Closure Template)",
		lang: "soy",
	},
	sparql: {
		name: "SPARQL",
		lang: "sparql",
	},
	"splunk-spl": {
		name: "Splunk SPL",
		lang: "splunk-spl",
	},
	sqf: {
		name: "SQF: Status Quo Function (Arma 3)",
		lang: "sqf",
	},
	sql: {
		name: "SQL",
		lang: "sql",
	},
	stan: {
		name: "Stan",
		lang: "stan",
	},
	iecst: {
		name: "Structured Text (IEC 61131-3)",
		lang: "iecst",
	},
	stylus: {
		name: "Stylus",
		lang: "stylus",
	},
	swift: {
		name: "Swift",
		lang: "swift",
	},
	"t4-templating": {
		name: "T4 templating",
		lang: "t4-templating",
	},
	"t4-cs": {
		name: "T4 Text Templates (C#)",
		lang: "t4-cs",
	},
	"t4-vb": {
		name: "T4 Text Templates (VB)",
		lang: "t4-vb",
	},
	tap: {
		name: "TAP",
		lang: "tap",
	},
	tcl: {
		name: "Tcl",
		lang: "tcl",
	},
	tt2: {
		name: "Template Toolkit 2",
		lang: "tt2",
	},
	textile: {
		name: "Textile",
		lang: "textile",
	},
	toml: {
		name: "TOML",
		lang: "toml",
	},
	turtle: {
		name: "Turtle",
		lang: "turtle",
	},
	twig: {
		name: "Twig",
		lang: "twig",
	},
	typescript: {
		name: "TypeScript",
		lang: "typescript",
	},
	typoscript: {
		name: "TypoScript",
		lang: "typoscript",
	},
	unrealscript: {
		name: "UnrealScript",
		lang: "unrealscript",
	},
	vala: {
		name: "Vala",
		lang: "vala",
	},
	vbnet: {
		name: "VB.Net",
		lang: "vbnet",
	},
	velocity: {
		name: "Velocity",
		lang: "velocity",
	},
	verilog: {
		name: "Verilog",
		lang: "verilog",
	},
	vhdl: {
		name: "VHDL",
		lang: "vhdl",
	},
	vim: {
		name: "vim",
		lang: "vim",
	},
	"visual-basic": {
		name: "Visual Basic",
		lang: "visual-basic",
	},
	warpscript: {
		name: "WarpScript",
		lang: "warpscript",
	},
	wasm: {
		name: "WebAssembly",
		lang: "wasm",
	},
	wiki: {
		name: "Wiki markup",
		lang: "wiki",
	},
	xeora: {
		name: "Xeora",
		lang: "xeora",
	},
	"xml-doc": {
		name: "XML doc (.net)",
		lang: "xml-doc",
	},
	xojo: {
		name: "Xojo (REALbasic)",
		lang: "xojo",
	},
	xquery: {
		name: "XQuery",
		lang: "xquery",
	},
	yaml: {
		name: "YAML",
		lang: "yaml",
	},
	yang: {
		name: "YANG",
		lang: "yang",
	},
	zig: {
		name: "Zig",
		lang: "zig",
	},
};
