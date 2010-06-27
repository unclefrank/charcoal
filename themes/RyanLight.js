// Ryan Light v0.1.1
// This theme is generated by a converter script.
// Original Textmate Theme: "Ryan Light" copyright by Ryan Bates (see RyanLight.copying).
// The conversion is still incomplete. Any suggestions or any problems,
// please contact me at yanyu [at] cyblogic [dot] com.
// More at http://github.com/yanyu/textmate-themes

RLEditorFG = '#000000';
RLEditorBG = '#FFFFFF';
RLEditorCursor = '#000';
RLEditorSelection = '#C3DCFF';
RLEditorMatch = '#FF6';
RLEditorBracketMatch = RLEditorMatch;
RLEditorCurrentLine = '#EFEFEF';
RLInvalid = '#000000';
RLComment = '#808080';
RLBlockComment = '#808080';
RLHtmlComment = '#808080';
RLStringLiteral = '#0E8D90';
RLRegularExpression = '#0E8D90';
RLInterpolation = '#26B31A';
RLRubyInterpolation = '#26B31A';
RLDocument = '#0E8D90';
RLBoolean = '#0E8D90';
RLNumber = '#0900D3';
RLRubyNumber = '#0900D3';
RLInteger = '#0900D3';
RLFloat = '#0900D3';
RLFunction = '#820095';
RLKeyword = '#006A08';
RLJavascriptKeyword = '#006A08';
RLObjcKeyword = '#820095';
RLPreprocessing = '#26B31A';
RLRubyClassName = '#000000';
RLConstantName = '#A62B29';
RLBuiltinConstant = '#0000CD';
RLCharacterConstant = '#0E8D90';
RLEscape = '#26B31A';
RLBlock = '#000000';
RLSymbol = '#A62B29';
RLVariable = '#7E3700';
RLRubyVariable = '#7E3700';
RLRubyInstanceVariable = '#7E3700';
RLRubyClassVariable = '#7E3700';
RLRubyGlobalVariable = '#7E3700';
RLPunctuator = '#000000';
RLOperator = '#006A08';
RLCommand = { color: '#000000', bold: true }
RLArrayBracket = '#000000';
RLTagName = '#2D439B';
RLTagOpen = '#2D439B';
RLTagClose = '#2D439B';
RLTagOther = '#2D439B';
RLTagAttribute = '#2D439B';
RLTagValue = '#2D439B';
RLErbTag = '#000000';
RLCssTag = '#2D439B';
RLCssId = '#000000';
RLCssClass = '#000000';
RLCssPseudoClass = '#000000';
RLCssProperty = '#000000';
RLCssValue = '#000000';
RLCssUnit = '#0900D3';
RLAtRule = '#006A08';


charcoal.themes["Ryan Light"] =
{
	displayName: "Ryan Light",

	layers: {
		"ruby": {
			"Comment": RLComment,
			"BlockComment": RLBlockComment,
			"Block": RLBlock,
			"Interpolation": RLInterpolation,
			"String": RLStringLiteral,
			"Document": RLDocument,
			"Keyword": RLKeyword,
			"DeclarationKeyword": RLKeyword,
			"Builtin": RLBuiltinConstant,
			"LocalName": RLRubyVariable,
			"MemberName": RLRubyInstanceVariable,
			"ClassMemberName": RLRubyClassVariable,
			"ClassName": RLRubyClassName,
			"ConstantName": RLConstantName,
			"GlobalName": RLRubyGlobalVariable,
			"Symbol": RLSymbol,
			"OpeningBracket": RLArrayBracket,
			"ClosingBracket": RLArrayBracket,
			"Float": RLFloat,
			"Integer": RLInteger,
			"Operator": RLOperator,
			"EscapeSequence": RLEscape
		},
		"python": {
			"Comment": RLComment,
			"String": RLStringLiteral,
			"Keyword": RLKeyword,
			"Operator": RLOperator,
			"Float": RLFloat,
			"Integer": RLInteger
		},
		"javascript": {
			"Comment": RLComment,
			"Keyword": RLJavascriptKeyword,
			"ReservedWord": RLJavascriptKeyword,
			"FutureReservedWord": RLJavascriptKeyword,
			"DecimalLiteral": RLNumber,
			"HexIntegerLiteral": RLNumber,
			"StringLiteral": RLStringLiteral,
			"EscapeSequence": RLEscape,
			"BackslashSequence": RLEscape,
			"RegularExpressionLiteral": RLRegularExpression,
			"Punctuator" : RLPunctuator,
			"DivPunctuator" : RLPunctuator
		},
		"as3": {
			"Comment": RLComment,
			"ReservedWord": RLJavascriptKeyword,
			"DecimalLiteral": RLNumber,
			"HexIntegerLiteral": RLNumber,
			"StringLiteral": RLStringLiteral,
			"EscapeSequence": RLEscape,
			"BackslashSequence": RLEscape,
			"RegularExpressionLiteral": RLRegularExpression
		},
		"haxe": {
			"Comment": RLComment,
			"String": RLStringLiteral,
			"RegExp": RLRegularExpression,
			"EscapedChar": RLEscape,
			"AnyEscapedChar": RLEscape,
			"Macro": RLPreprocessing,
			"Keyword": RLKeyword,
			"PackageIdentifier": RLRubyClassName,
			"ClassIdentifier": RLRubyClassName,
			"FunctionIdentifier": RLRubyVariable,
			"VariableIdentifier": RLRubyInstanceVariable,
			"Operator": RLOperator,
			"Float": RLFloat,
			"Integer": RLInteger
		},
		"tex": {
			"Comment": RLComment,
			"Command": RLEscape,
			"Number": RLNumber,
			"Argument": RLVariable
		},
		"css": {
			"Comment": RLComment,
			"Property": RLCssProperty,
			"UnknownProperty": RLCssProperty,
			"Value": RLCssValue,
			"Unit": RLCssUnit,
			"Tag": RLCssTag,
			"Class": RLCssClass,
			"PseudoClass": RLCssPseudoClass,
			"Id": RLCssId,
			"Rule": RLAtRule
		},
		"xml": {
			"Comment": RLHtmlComment,
			"TagName": RLTagName,
			"TagOpen": RLTagOpen,
			"TagClose": RLTagClose,
			"AttributeName": RLTagAttribute,
			"AttributeValue": RLTagValue,
			"ScriptTagName": RLTagOther
		},
		"erb": {
			"ErbComment": RLComment,
			"ErbStart": RLErbTag,
			"ErbEnd": RLErbTag
		},
		"cucumber": {
			"Entity": RLKeyword,
			"FeatureKey": RLKeyword,
			"FeatureTitle": RLStringLiteral,
			"FeatureClause": RLStringLiteral,
			"ScenarioKey": RLKeyword,
			"ScenarioTitle": RLStringLiteral,
			"ScenarioClause": '#000000',
			"Citation": RLStringLiteral,
			"Tag": RLAtRule,
			"Comment": RLComment
		},
		"cxx": {
			"BlockComment": RLBlockComment,
			"LineComment": RLComment,
			"PreprocessingComment": RLBlockComment,
			"Preprocessing": RLPreprocessing,
			"EscapedChar": RLEscape,
			"String": RLStringLiteral,
			"ObjcEscapedChar": RLEscape,
			"ObjcString": RLStringLiteral,
			"Keyword": RLKeyword,
			"TypeKeyword": RLObjcKeyword,
			"QtKeyword": RLKeyword,
			"ObjcKeyword": RLObjcKeyword,
			"Integer": RLInteger,
			"Float": RLFloat,
			"Char": RLCharacterConstant,
			"Punctuator" : RLPunctuator
		},
		"dao": {
			"BlockComment": RLBlockComment,
			"LineComment": RLComment,
			"EscapedChar": RLEscape,
			"String": RLStringLiteral,
			"Keyword": RLKeyword,
			"CoreTypes": RLObjcKeyword,
			"Builtin": RLBuiltinConstant,
			"Integer": RLInteger,
			"Float": RLFloat,
			"Char": RLCharacterConstant
		},
		"bash": {
			"Comment": RLComment,
			"SingleQuoted": RLStringLiteral,
			"DoubleQuoted": RLStringLiteral,
			"Document": RLDocument,
			"EscapedChar": RLEscape,
			"Expansion": RLInterpolation,
			"Operator": RLOperator,
			"Builtin": RLBuiltinConstant,
			"Reserved": RLKeyword,
			"Integer": RLInteger
		},
		"cmake": {
			"Comment": RLComment,
			"Command": RLCommand,
			"Function": RLFunction,
			"Expansion": RLInterpolation,
			"String": RLStringLiteral,
			"Version": RLFloat,
			"Boolean": RLBoolean,
			"Number": RLNumber
		},
		"sql": {
			"Comment": RLComment,
			"String": RLStringLiteral,
			"EscapeSequence": RLEscape,
			"Number": RLNumber
		}
	},
	
	editor: {
		foreground: RLEditorFG,
		background: RLEditorBG,
		cursor: RLEditorCursor,
		lineNumbers: "#808080",
		lineNumbersBright: "#000",
		lineNumbersBackground: "#F2F2F2",
		// lineNumbersBackgroundBright: "#E5E5E5",
		selection: RLEditorSelection,
		match: RLEditorMatch,
		bracketMatch: RLEditorBracketMatch,
		currentLine: RLEditorCurrentLine
	}
};
