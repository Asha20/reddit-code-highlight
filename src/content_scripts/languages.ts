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

export const languages: Language[] = [
	{ name: "Plain Text", lang: "none" },
	{ name: "Markup", lang: "markup" },
	{ name: "CSS", lang: "css" },
	{ name: "C-like", lang: "clike" },
	{ name: "JavaScript", lang: "javascript" },
	{ name: "ABAP", lang: "abap" },
	{ name: "ABNF", lang: "abnf" },
	{ name: "ActionScript", lang: "actionscript" },
	{ name: "Ada", lang: "ada" },
	{ name: "Agda", lang: "agda" },
	{ name: "AL", lang: "al" },
	{ name: "ANTLR4", lang: "antlr4" },
	{ name: "Apache Configuration", lang: "apacheconf" },
	{ name: "Apex", lang: "apex" },
	{ name: "APL", lang: "apl" },
	{ name: "AppleScript", lang: "applescript" },
	{ name: "AQL", lang: "aql" },
	{ name: "Arduino", lang: "arduino" },
	{ name: "ARFF", lang: "arff" },
	{ name: "AsciiDoc", lang: "asciidoc" },
	{ name: "ASP.NET (C#)", lang: "aspnet" },
	{ name: "6502 Assembly", lang: "asm6502" },
	{ name: "AutoHotkey", lang: "autohotkey" },
	{ name: "AutoIt", lang: "autoit" },
	{ name: "Bash", lang: "bash" },
	{ name: "BASIC", lang: "basic" },
	{ name: "Batch", lang: "batch" },
	{ name: "BBcode", lang: "bbcode" },
	{ name: "Birb", lang: "birb" },
	{ name: "Bison", lang: "bison" },
	{ name: "BNF", lang: "bnf" },
	{ name: "Brainfuck", lang: "brainfuck" },
	{ name: "BrightScript", lang: "brightscript" },
	{ name: "Bro", lang: "bro" },
	{ name: "BSL (1C:Enterprise)", lang: "bsl" },
	{ name: "C", lang: "c" },
	{ name: "C#", lang: "csharp" },
	{ name: "C++", lang: "cpp" },
	{ name: "CIL", lang: "cil" },
	{ name: "Clojure", lang: "clojure" },
	{ name: "CMake", lang: "cmake" },
	{ name: "CoffeeScript", lang: "coffeescript" },
	{ name: "Concurnas", lang: "concurnas" },
	{ name: "Content-Security-Policy", lang: "csp" },
	{ name: "Crystal", lang: "crystal" },
	{ name: "CSS Extras", lang: "css-extras" },
	{ name: "Cypher", lang: "cypher" },
	{ name: "D", lang: "d" },
	{ name: "Dart", lang: "dart" },
	{ name: "DataWeave", lang: "dataweave" },
	{ name: "DAX", lang: "dax" },
	{ name: "Dhall", lang: "dhall" },
	{ name: "Diff", lang: "diff" },
	{ name: "Django/Jinja2", lang: "django" },
	{ name: "DNS zone file", lang: "dns-zone-file" },
	{ name: "Docker", lang: "docker" },
	{ name: "EBNF", lang: "ebnf" },
	{ name: "EditorConfig", lang: "editorconfig" },
	{ name: "Eiffel", lang: "eiffel" },
	{ name: "EJS", lang: "ejs" },
	{ name: "Elixir", lang: "elixir" },
	{ name: "Elm", lang: "elm" },
	{ name: "Embedded Lua templating", lang: "etlua" },
	{ name: "ERB", lang: "erb" },
	{ name: "Erlang", lang: "erlang" },
	{ name: "Excel Formula", lang: "excel-formula" },
	{ name: "F#", lang: "fsharp" },
	{ name: "Factor", lang: "factor" },
	{ name: "Firestore security rules", lang: "firestore-security-rules" },
	{ name: "Flow", lang: "flow" },
	{ name: "Fortran", lang: "fortran" },
	{ name: "FreeMarker Template Language", lang: "ftl" },
	{ name: "GameMaker Language", lang: "gml" },
	{ name: "G-code", lang: "gcode" },
	{ name: "GDScript", lang: "gdscript" },
	{ name: "GEDCOM", lang: "gedcom" },
	{ name: "Gherkin", lang: "gherkin" },
	{ name: "Git", lang: "git" },
	{ name: "GLSL", lang: "glsl" },
	{ name: "Go", lang: "go" },
	{ name: "GraphQL", lang: "graphql" },
	{ name: "Groovy", lang: "groovy" },
	{ name: "Haml", lang: "haml" },
	{ name: "Handlebars", lang: "handlebars" },
	{ name: "Haskell", lang: "haskell" },
	{ name: "Haxe", lang: "haxe" },
	{ name: "HCL", lang: "hcl" },
	{ name: "HLSL", lang: "hlsl" },
	{ name: "HTTP", lang: "http" },
	{ name: "HTTP Public-Key-Pins", lang: "hpkp" },
	{ name: "HTTP Strict-Transport-Security", lang: "hsts" },
	{ name: "IchigoJam", lang: "ichigojam" },
	{ name: "Icon", lang: "icon" },
	{ name: ".ignore", lang: "ignore" },
	{ name: "Inform 7", lang: "inform7" },
	{ name: "Ini", lang: "ini" },
	{ name: "Io", lang: "io" },
	{ name: "J", lang: "j" },
	{ name: "Java", lang: "java" },
	{ name: "JavaDoc", lang: "javadoc" },
	{ name: "JavaDoc-like", lang: "javadoclike" },
	{ name: "Java stack trace", lang: "javastacktrace" },
	{ name: "Jolie", lang: "jolie" },
	{ name: "JQ", lang: "jq" },
	{ name: "JSDoc", lang: "jsdoc" },
	{ name: "JS Extras", lang: "js-extras" },
	{ name: "JSON", lang: "json" },
	{ name: "JSON5", lang: "json5" },
	{ name: "JSONP", lang: "jsonp" },
	{ name: "JS stack trace", lang: "jsstacktrace" },
	{ name: "JS Templates", lang: "js-templates" },
	{ name: "Julia", lang: "julia" },
	{ name: "Keyman", lang: "keyman" },
	{ name: "Kotlin", lang: "kotlin" },
	{ name: "LaTeX", lang: "latex" },
	{ name: "Latte", lang: "latte" },
	{ name: "Less", lang: "less" },
	{ name: "LilyPond", lang: "lilypond" },
	{ name: "Liquid", lang: "liquid" },
	{ name: "Lisp", lang: "lisp" },
	{ name: "LiveScript", lang: "livescript" },
	{ name: "LLVM IR", lang: "llvm" },
	{ name: "LOLCODE", lang: "lolcode" },
	{ name: "Lua", lang: "lua" },
	{ name: "Makefile", lang: "makefile" },
	{ name: "Markdown", lang: "markdown" },
	{ name: "Markup templating", lang: "markup-templating" },
	{ name: "MATLAB", lang: "matlab" },
	{ name: "MEL", lang: "mel" },
	{ name: "Mizar", lang: "mizar" },
	{ name: "MongoDB", lang: "mongodb" },
	{ name: "Monkey", lang: "monkey" },
	{ name: "MoonScript", lang: "moonscript" },
	{ name: "N1QL", lang: "n1ql" },
	{ name: "N4JS", lang: "n4js" },
	{ name: "Nand To Tetris HDL", lang: "nand2tetris-hdl" },
	{ name: "Naninovel Script", lang: "naniscript" },
	{ name: "NASM", lang: "nasm" },
	{ name: "NEON", lang: "neon" },
	{ name: "nginx", lang: "nginx" },
	{ name: "Nim", lang: "nim" },
	{ name: "Nix", lang: "nix" },
	{ name: "NSIS", lang: "nsis" },
	{ name: "Objective-C", lang: "objectivec" },
	{ name: "OCaml", lang: "ocaml" },
	{ name: "OpenCL", lang: "opencl" },
	{ name: "Oz", lang: "oz" },
	{ name: "PARI/GP", lang: "parigp" },
	{ name: "Parser", lang: "parser" },
	{ name: "Pascal", lang: "pascal" },
	{ name: "Pascaligo", lang: "pascaligo" },
	{ name: "PC-Axis", lang: "pcaxis" },
	{ name: "PeopleCode", lang: "peoplecode" },
	{ name: "Perl", lang: "perl" },
	{ name: "PHP", lang: "php" },
	{ name: "PHPDoc", lang: "phpdoc" },
	{ name: "PHP Extras", lang: "php-extras" },
	{ name: "PL/SQL", lang: "plsql" },
	{ name: "PowerQuery", lang: "powerquery" },
	{ name: "PowerShell", lang: "powershell" },
	{ name: "Processing", lang: "processing" },
	{ name: "Prolog", lang: "prolog" },
	{ name: "PromQL", lang: "promql" },
	{ name: ".properties", lang: "properties" },
	{ name: "Protocol Buffers", lang: "protobuf" },
	{ name: "Pug", lang: "pug" },
	{ name: "Puppet", lang: "puppet" },
	{ name: "Pure", lang: "pure" },
	{ name: "PureBasic", lang: "purebasic" },
	{ name: "PureScript", lang: "purescript" },
	{ name: "Python", lang: "python" },
	{ name: "Q (kdb+ database)", lang: "q" },
	{ name: "QML", lang: "qml" },
	{ name: "Qore", lang: "qore" },
	{ name: "R", lang: "r" },
	{ name: "Racket", lang: "racket" },
	{ name: "React JSX", lang: "jsx" },
	{ name: "React TSX", lang: "tsx" },
	{ name: "Reason", lang: "reason" },
	{ name: "Regex", lang: "regex" },
	{ name: "Ren'py", lang: "renpy" },
	{ name: "reST (reStructuredText)", lang: "rest" },
	{ name: "Rip", lang: "rip" },
	{ name: "Roboconf", lang: "roboconf" },
	{ name: "Robot Framework", lang: "robotframework" },
	{ name: "Ruby", lang: "ruby" },
	{ name: "Rust", lang: "rust" },
	{ name: "SAS", lang: "sas" },
	{ name: "Sass (Sass)", lang: "sass" },
	{ name: "Sass (Scss)", lang: "scss" },
	{ name: "Scala", lang: "scala" },
	{ name: "Scheme", lang: "scheme" },
	{ name: "Shell session", lang: "shell-session" },
	{ name: "Smali", lang: "smali" },
	{ name: "Smalltalk", lang: "smalltalk" },
	{ name: "Smarty", lang: "smarty" },
	{ name: "SML", lang: "sml" },
	{ name: "Solidity (Ethereum)", lang: "solidity" },
	{ name: "Solution file", lang: "solution-file" },
	{ name: "Soy (Closure Template)", lang: "soy" },
	{ name: "SPARQL", lang: "sparql" },
	{ name: "Splunk SPL", lang: "splunk-spl" },
	{ name: "SQF: Status Quo Function (Arma 3)", lang: "sqf" },
	{ name: "SQL", lang: "sql" },
	{ name: "Stan", lang: "stan" },
	{ name: "Structured Text (IEC 61131-3)", lang: "iecst" },
	{ name: "Stylus", lang: "stylus" },
	{ name: "Swift", lang: "swift" },
	{ name: "T4 templating", lang: "t4-templating" },
	{ name: "T4 Text Templates (C#)", lang: "t4-cs" },
	{ name: "T4 Text Templates (VB)", lang: "t4-vb" },
	{ name: "TAP", lang: "tap" },
	{ name: "Tcl", lang: "tcl" },
	{ name: "Template Toolkit 2", lang: "tt2" },
	{ name: "Textile", lang: "textile" },
	{ name: "TOML", lang: "toml" },
	{ name: "Turtle", lang: "turtle" },
	{ name: "Twig", lang: "twig" },
	{ name: "TypeScript", lang: "typescript" },
	{ name: "TypoScript", lang: "typoscript" },
	{ name: "UnrealScript", lang: "unrealscript" },
	{ name: "Vala", lang: "vala" },
	{ name: "VB.Net", lang: "vbnet" },
	{ name: "Velocity", lang: "velocity" },
	{ name: "Verilog", lang: "verilog" },
	{ name: "VHDL", lang: "vhdl" },
	{ name: "vim", lang: "vim" },
	{ name: "Visual Basic", lang: "visual-basic" },
	{ name: "WarpScript", lang: "warpscript" },
	{ name: "WebAssembly", lang: "wasm" },
	{ name: "Wiki markup", lang: "wiki" },
	{ name: "Xeora", lang: "xeora" },
	{ name: "XML doc (.net)", lang: "xml-doc" },
	{ name: "Xojo (REALbasic)", lang: "xojo" },
	{ name: "XQuery", lang: "xquery" },
	{ name: "YAML", lang: "yaml" },
	{ name: "YANG", lang: "yang" },
	{ name: "Zig", lang: "zig" },
];
