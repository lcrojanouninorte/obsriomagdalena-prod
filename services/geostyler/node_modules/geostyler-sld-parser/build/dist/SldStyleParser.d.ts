import { Filter, StyleParser, Style, Rule, FunctionFilter, ScaleDenominator, PointSymbolizer, Symbolizer, IconSymbolizer, LineSymbolizer, FillSymbolizer, TextSymbolizer, RasterSymbolizer, ColorMap, ChannelSelection, ComparisonFilter, MarkSymbolizer, Channel, ContrastEnhancement, StrMatchesFunctionFilter } from 'geostyler-style';
export declare type ConstructorParams = {
    forceCasting?: boolean;
    numericFilterFields?: string[];
    boolFilterFields?: string[];
    prettyOutput?: boolean;
};
/**
 * This parser can be used with the GeoStyler.
 * It implements the GeoStyler-Style StyleParser interface.
 *
 * @class SldStyleParser
 * @implements StyleParser
 */
export declare class SldStyleParser implements StyleParser {
    /**
     * The name of the SLD Style Parser.
     */
    static title: string;
    title: string;
    static negationOperatorMap: {
        Not: string;
    };
    static combinationMap: {
        And: string;
        Or: string;
        PropertyIsBetween: string;
    };
    static comparisonMap: {
        PropertyIsEqualTo: string;
        PropertyIsNotEqualTo: string;
        PropertyIsLike: string;
        PropertyIsLessThan: string;
        PropertyIsLessThanOrEqualTo: string;
        PropertyIsGreaterThan: string;
        PropertyIsGreaterThanOrEqualTo: string;
        PropertyIsNull: string;
    };
    constructor(opts?: ConstructorParams);
    /**
     * Array of field / property names in a filter, which are casted to numerics
     * while parsing an SLD.
     */
    private _numericFilterFields;
    /**
     * Getter for _numericFilterFields
     * @return {string[]} The numericFilterFields
     */
    get numericFilterFields(): string[];
    /**
     * Setter for _numericFilterFields
     * @param {string[]} numericFilterFields The numericFilterFields to set
     */
    set numericFilterFields(numericFilterFields: string[]);
    /**
     * Array of field / property names in a filter, which are casted to boolean
     * while parsing an SLD.
     */
    private _boolFilterFields;
    /**
     * Getter for _boolFilterFields
     * @return {string[]} The boolFilterFields
     */
    get boolFilterFields(): string[];
    /**
     * Setter for _boolFilterFields
     * @param {string[]} boolFilterFields The boolFilterFields to set
     */
    set boolFilterFields(boolFilterFields: string[]);
    /**
     * Flag to tell if all values should be casted automatically
     */
    private _forceCasting;
    /**
     * Getter for _forceCasting
     * @return {boolean}
     */
    get forceCasting(): boolean;
    /**
     * Setter for _forceCasting
     * @param {boolean} forceCasting The forceCasting value to set
     */
    set forceCasting(forceCasting: boolean);
    /**
     * Flag to tell if the generated output SLD will be prettified
     */
    private _prettyOutput;
    /**
     * Getter for _prettyOutput
     * @return {boolean}
     */
    get prettyOutput(): boolean;
    /**
     * Setter for _prettyOutput
     * @param {boolean} prettyOutput The _prettyOutput value to set
     */
    set prettyOutput(prettyOutput: boolean);
    /**
     * Returns the keys of an object where the value is equal to the passed in
     * value.
     *
     * @param {object} object The object to get the key from.
     * @param {any} value The value to get the matching key from.
     * @return {string[]} The matching keys.
     */
    private static keysByValue;
    /**
     * The name Processor is passed as an option to the xml2js parser and modifies
     * the tagName. It strips all namespaces from the tags.
     *
     * @param {string} name The originial tagName
     * @return {string} The modified tagName
     */
    tagNameProcessor(name: string): string;
    /**
     * Get the name for the Style from the SLD Object. Returns the Title of the UserStyle
     * if defined or the Name of the NamedLayer if defined or an empty string.
     *
     * @param {object} sldObject The SLD object representation (created with xml2js)
     * @return {string} The name to be used for the GeoStyler Style Style
     */
    getStyleNameFromSldObject(sldObject: any): string;
    /**
     * Creates a GeoStyler-Style StrMatchesFunctionFilterr from a SLD strMatches Function.
     *
     * @param {object} sldFilter The SLD Filter
     * @return {Filter} The GeoStyler-Style FunctionFilter
     */
    getStrMatchesFunctionFilterFromSldFilter(sldFilter: any): StrMatchesFunctionFilter;
    /**
     * Creates a GeoStyler-Style FunctionFilter from a SLD Function.
     *
     * @param {object} sldFilter The SLD Filter
     * @return {Filter} The GeoStyler-Style FunctionFilter
     */
    getFunctionFilterFromSldFilter(sldFilter: any): FunctionFilter;
    /**
     * Creates a GeoStyler-Style Filter from a given operator name and the js
     * SLD object representation (created with xml2js) of the SLD Filter.
     *
     * @param {string} sldOperatorName The Name of the SLD Filter Operator
     * @param {object} sldFilter The SLD Filter
     * @return {Filter} The GeoStyler-Style Filter
     */
    getFilterFromOperatorAndComparison(sldOperatorName: string, sldFilter: any): Filter;
    /**
     * Get the GeoStyler-Style Filter from an SLD Rule.
     *
     * Currently only supports one Filter per Rule.
     *
     * @param {object} sldRule The SLD Rule
     * @return {Filter} The GeoStyler-Style Filter
     */
    getFilterFromRule(sldRule: any): Filter | undefined;
    /**
     * Get the GeoStyler-Style ScaleDenominator from an SLD Rule.
     *
     * @param {object} sldRule The SLD Rule
     * @return {ScaleDenominator} The GeoStyler-Style ScaleDenominator
     */
    getScaleDenominatorFromRule(sldRule: any): ScaleDenominator | undefined;
    /**
     * Get the GeoStyler-Style MarkSymbolizer from an SLD Symbolizer
     *
     * @param {object} sldSymbolizer The SLD Symbolizer
     * @return {MarkSymbolizer} The GeoStyler-Style MarkSymbolizer
     */
    getMarkSymbolizerFromSldSymbolizer(sldSymbolizer: any): MarkSymbolizer;
    /**
     * Get the GeoStyler-Style IconSymbolizer from an SLD Symbolizer
     *
     * @param {object} sldSymbolizer The SLD Symbolizer
     * @return {IconSymbolizer} The GeoStyler-Style IconSymbolizer
     */
    getIconSymbolizerFromSldSymbolizer(sldSymbolizer: any): IconSymbolizer;
    /**
     * Get the GeoStyler-Style PointSymbolizer from an SLD Symbolizer.
     *
     * The opacity of the Symbolizer is taken from the <Graphic>.
     *
     * @param {object} sldSymbolizer The SLD Symbolizer
     * @return {PointSymbolizer} The GeoStyler-Style PointSymbolizer
     */
    getPointSymbolizerFromSldSymbolizer(sldSymbolizer: any): PointSymbolizer;
    /**
     * Get the GeoStyler-Style LineSymbolizer from an SLD Symbolizer.
     *
     * Currently only the CssParameters are available.
     *
     * @param {object} sldSymbolizer The SLD Symbolizer
     * @return {LineSymbolizer} The GeoStyler-Style LineSymbolizer
     */
    getLineSymbolizerFromSldSymbolizer(sldSymbolizer: any): LineSymbolizer;
    /**
     * Get the GeoStyler-Style FillSymbolizer from an SLD Symbolizer.
     *
     * PolygonSymbolizer Stroke is just partially supported.
     *
     * @param {object} sldSymbolizer The SLD Symbolizer
     * @return {FillSymbolizer} The GeoStyler-Style FillSymbolizer
     */
    getFillSymbolizerFromSldSymbolizer(sldSymbolizer: any): FillSymbolizer;
    /**
     * Get the GeoStyler-Style ColorMap from a SLD ColorMap.
     *
     * @param {object} sldColorMap The SLD ColorMap
     */
    getColorMapFromSldColorMap(sldColorMap: any): ColorMap;
    /**
     * Get the GeoStyler-Style ContrastEnhancement from a SLD ContrastEnhancement.
     *
     * @param {object} sldContrastEnhancement The SLD ContrastEnhancement
     */
    getContrastEnhancementFromSldContrastEnhancement(sldContrastEnhancement: any): ContrastEnhancement;
    /**
     * Get the GeoStyler-Style Channel from a SLD Channel.
     *
     * @param {object} sldChannel The SLD Channel
     */
    getChannelFromSldChannel(sldChannel: any): Channel;
    /**
     * Get the GeoStyler-Style ChannelSelection from a SLD ChannelSelection.
     *
     * @param {object} sldChannelSelection The SLD ChannelSelection
     */
    getChannelSelectionFromSldChannelSelection(sldChannelSelection: any): ChannelSelection;
    /**
     * Get the GeoStyler-Style RasterSymbolizer from a SLD Symbolizer.
     *
     * @param {object} sldSymbolizer The SLD Symbolizer
     */
    getRasterSymbolizerFromSldSymbolizer(sldSymbolizer: any): RasterSymbolizer;
    /**
     * Create a template string from a TextSymbolizer Label element.
     * Due to the non-bidirectional behaviour of xml2js, we cannot
     * recreate any template configuration. The current behaviour is as follows:
     *
     * Literals and Placeholders will be merge alternating, beginning with the property
     * that comes first. If the number of properties between Literals and Placeholders
     * is not equal, the remaining ones will be appended to the end of the template string.
     *
     * Examples:
     * <Label>
     *  <Literal>foo</Literal>
     *  <PropertyName>bar</PropertyName>
     * </Label>
     * --> "foo{{bar}}"
     *
     * <Label>
     *  <PropertyName>bar</PropertyName>
     *  <Literal>foo</Literal>
     * </Label>
     * --> "{{bar}}foo"
     *
     * <Label>
     *  <PropertyName>bar</PropertyName>
     *  <Literal>foo</Literal>
     *  <PropertyName>john</PropertyName>
     * </Label>
     * --> "{{bar}}foo{{john}}"
     *
     * <Label>
     *  <PropertyName>bar</PropertyName>
     *  <PropertyName>john</PropertyName>
     *  <Literal>foo</Literal>
     * </Label>
     * --> "{{bar}}foo{{john}}"
     *
     * <Label>
     *  <PropertyName>bar</PropertyName>
     *  <PropertyName>john</PropertyName>
     *  <PropertyName>doe</PropertyName>
     *  <Literal>foo</Literal>
     * </Label>
     * --> "{{bar}}foo{{john}}{{doe}}"
     *
     */
    getTextSymbolizerLabelFromSldSymbolizer: (sldLabel: any) => string;
    /**
     * Get the GeoStyler-Style TextSymbolizer from an SLD Symbolizer.
     *
     * @param {object} sldSymbolizer The SLD Symbolizer
     * @return {TextSymbolizer} The GeoStyler-Style TextSymbolizer
     */
    getTextSymbolizerFromSldSymbolizer(sldSymbolizer: any): TextSymbolizer;
    /**
     * Get the GeoStyler-Style Symbolizers from an SLD Rule.
     *
     * @param {object} sldRule The SLD Rule
     * @return {Symbolizer[]} The GeoStyler-Style Symbolizer Array
     */
    getSymbolizersFromRule(sldRule: any): Symbolizer[];
    /**
     * Get the GeoStyler-Style Rule from an SLD Object (created with xml2js).
     *
     * @param {object} sldObject The SLD object representation (created with xml2js)
     * @return {Rule} The GeoStyler-Style Rule
     */
    getRulesFromSldObject(sldObject: any): Rule[];
    /**
     * Get the GeoStyler-Style Style from an SLD Object (created with xml2js).
     *
     * @param {object} sldObject The SLD object representation (created with xml2js)
     * @return {Style} The GeoStyler-Style Style
     */
    sldObjectToGeoStylerStyle(sldObject: object): Style;
    /**
     * The readStyle implementation of the GeoStyler-Style StyleParser interface.
     * It reads a SLD as a string and returns a Promise.
     * The Promise itself resolves with a GeoStyler-Style Style.
     *
     * @param {string} sldString A SLD as a string.
     * @return {Promise} The Promise resolving with the GeoStyler-Style Style
     */
    readStyle(sldString: string): Promise<Style>;
    /**
     * The writeStyle implementation of the GeoStyler-Style StyleParser interface.
     * It reads a GeoStyler-Style Style and returns a Promise.
     * The Promise itself resolves with a SLD string.
     *
     * @param {Style} geoStylerStyle A GeoStyler-Style Style.
     * @return {Promise} The Promise resolving with the SLD as a string.
     */
    writeStyle(geoStylerStyle: Style): Promise<string>;
    /**
     * Get the SLD Object (readable with xml2js) from an GeoStyler-Style Style
     *
     * @param {Style} geoStylerStyle A GeoStyler-Style Style.
     * @return {object} The object representation of a SLD Style (readable with xml2js)
     */
    geoStylerStyleToSldObject(geoStylerStyle: Style): any;
    /**
     * Get the SLD Object (readable with xml2js) from an GeoStyler-Style Rule.
     *
     * @param {Rule[]} rules An array of GeoStyler-Style Rules.
     * @return {object} The object representation of a SLD Rule (readable with xml2js)
     */
    getSldRulesFromRules(rules: Rule[]): any;
    /**
     * Get the SLD Object (readable with xml2js) from GeoStyler-Style Symbolizers.
     *
     * @param {Symbolizer[]} symbolizers A GeoStyler-Style Symbolizer array.
     * @return {object} The object representation of a SLD Symbolizer (readable with xml2js)
     */
    getSldSymbolizersFromSymbolizers(symbolizers: Symbolizer[]): any;
    /**
     * Get the Label from a TextSymbolizer
     */
    getSldLabelFromTextSymbolizer: (template: string) => [any];
    /**
     * Get the SLD Object (readable with xml2js) from an GeoStyler-Style TextSymbolizer.
     *
     * @param {TextSymbolizer} textSymbolizer A GeoStyler-Style TextSymbolizer.
     * @return {object} The object representation of a SLD TextSymbolizer (readable with xml2js)
     */
    getSldTextSymbolizerFromTextSymbolizer(textSymbolizer: TextSymbolizer): any;
    /**
     * Get the SLD Object (readable with xml2js) from an GeoStyler-Style FillSymbolizer.
     *
     * @param {FillSymbolizer} fillSymbolizer A GeoStyler-Style FillSymbolizer.
     * @return {object} The object representation of a SLD PolygonSymbolizer (readable with xml2js)
     */
    getSldPolygonSymbolizerFromFillSymbolizer(fillSymbolizer: FillSymbolizer): any;
    /**
     * Get the SLD Object (readable with xml2js) from an GeoStyler-Style LineSymbolizer.
     *
     * @param {LineSymbolizer} lineSymbolizer A GeoStyler-Style LineSymbolizer.
     * @return {object} The object representation of a SLD LineSymbolizer (readable with xml2js)
     */
    getSldLineSymbolizerFromLineSymbolizer(lineSymbolizer: LineSymbolizer): any;
    /**
     * Get the SLD Object (readable with xml2js) from an GeoStyler-Style MarkSymbolizer.
     *
     * @param {MarkSymbolizer} markSymbolizer A GeoStyler-Style MarkSymbolizer.
     * @return {object} The object representation of a SLD PointSymbolizer with a
     * Mark (readable with xml2js)
     */
    getSldPointSymbolizerFromMarkSymbolizer(markSymbolizer: MarkSymbolizer): any;
    /**
     * Get the SLD Object (readable with xml2js) from an GeoStyler-Style IconSymbolizer.
     *
     * @param {IconSymbolizer} iconSymbolizer A GeoStyler-Style IconSymbolizer.
     * @return {object} The object representation of a SLD PointSymbolizer with
     * en "ExternalGraphic" (readable with xml2js)
     */
    getSldPointSymbolizerFromIconSymbolizer(iconSymbolizer: IconSymbolizer): any;
    /**
     * Get the SLD Object (readable with xml2js) from an GeoStyler-Style RasterSymbolizer.
     *
     * @param {RasterSymbolizer} RasterSymbolizer A GeoStyler-Style RasterSymbolizer.
     * @return {object} The object representation of a SLD RasterSymbolizer (readable with xml2js)
     */
    getSldRasterSymbolizerFromRasterSymbolizer(rasterSymbolizer: RasterSymbolizer): any;
    /**
     * Get the SLD Object (readable with xml2js) from an GeoStyler-Style ColorMap.
     *
     * @param {ColorMap} colorMap A GeoStyler-Style ColorMap.
     * @return {object} The object representation of a SLD ColorMap (readable with xml2js)
     */
    getSldColorMapFromColorMap(colorMap: ColorMap): any;
    /**
     * Get the SLD Object (readable with xml2js) from an GeoStyler-Style ChannelSelection.
     *
     * @param {ChannelSelection} channelSelection A GeoStyler-Style ChannelSelection.
     * @return {object} The object representation of a SLD ChannelSelection (readable with xml2js)
     */
    getSldChannelSelectionFromChannelSelection(channelSelection: ChannelSelection): any;
    /**
     * Get the SLD Object (readable with xml2js) from an GeoStyler-Style ContrastEnhancement.
     *
     * @param {ContrastEnhancement} contrastEnhancement A GeoStyler-Style ContrastEnhancement.
     * @return {object} The object representation of a SLD ContrastEnhancement (readable with xml2js)
     */
    getSldContrastEnhancementFromContrastEnhancement(contrastEnhancement: ContrastEnhancement): any;
    /**
     * Get the SLD Object (readable with xml2js) from a GeoStyler-Style StrMatchesFunctionFilter.
     *
     * @param {StrMatchesFunctionFilter} functionFilter A GeoStyler-Style StrMatchesFunctionFilter.
     * @return {object} The object representation of a SLD strMatches Function Expression.
     */
    getSldStrMatchesFunctionFromFunctionFilter(functionFilter: StrMatchesFunctionFilter): any;
    /**
     * Get the SLD Object (readable with xml2js) from a GeoStyler-Style FunctionFilter.
     *
     * @param {FunctionFilter} functionFilter A GeoStyler-Style FunctionFilter.
     * @return {object} The object representation of a SLD Function Expression.
     */
    getSldFunctionFilterFromFunctionFilter(functionFilter: FunctionFilter): any;
    /**
     * Get the SLD Object (readable with xml2js) from an GeoStyler-Style ComparisonFilter.
     *
     * @param {ComparisonFilter} comparisonFilter A GeoStyler-Style ComparisonFilter.
     * @return {object} The object representation of a SLD Filter Expression with a
     * comparison operator (readable with xml2js)
     */
    getSldComparisonFilterFromComparisonFilter(comparisonFilter: ComparisonFilter): any[];
    /**
     * Get the SLD Object (readable with xml2js) from an GeoStyler-Style Filter.
     *
     * @param {Filter} filter A GeoStyler-Style Filter.
     * @return {object} The object representation of a SLD Filter Expression (readable with xml2js)
     */
    getSldFilterFromFilter(filter: Filter): any[];
}
export default SldStyleParser;
