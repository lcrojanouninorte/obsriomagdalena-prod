#!/usr/bin/env node

'use strict';
const meow = require('meow');

const SLDParser = require('geostyler-sld-parser').SldStyleParser;
const QMLParser = require('geostyler-qgis-parser').QGISStyleParser;
const MBParser = require('geostyler-mapbox-parser').MapboxStyleParser;

let sldParser = new SLDParser();
let qmlParser = new QMLParser();
let mbParser = new MBParser({
    ignoreConversionErrors: true
});

const cli = meow(`
	Usage
	  $ parse <options>

	Options
    --type, -t  type sld | qml | mapbox
    --id, -c  source name of layer
    --input, -i  input style file
    --output, -o  output style file

	Examples
	  $ parse -t qml -id layerId -i ./file.qml  
`, {
    flags: {
        type: {
            type: 'string',
            alias: 't'
        },
        id: {
            type: 'string',
            alias: 'c'
        },
        input: {
            type: 'string',
            alias: 'i'
        },
        output: {
            type: 'string',
            alias: 'o'
        }
    }
});

// mapbox sources object

function wrapper(id, style) {
    /**
     * Add extra informatión
     *  "layerId:'sourceName'".
     **/
    let sourceName = id;
    style.sources = {};

    style.sources[sourceName] = {
        "type": "vector",
        "url": "mbtiles://{" + sourceName + "}"
    }

    style.sprite = "https://openmaptiles.github.io/osm-bright-gl-style/sprite";

    style.glyphs = "{fontstack}/{range}.pbf"
    let i = 0;
    style.layers.forEach(l => {
        l.id = l.id + "_" + id + "_" + i; //garantizar que no hayan dos capas mismo nombre
        l.source = sourceName; //Add source name to each layer
        l["source-layer"] = "data";

        if (l.type == "symbol" && typeof(l.layout) !== "undefined") {
            l.layout["icon-image"] = "marker_11";
            l.layout["icon-size"] = 3;

        }

        i = i + 1;
    });
    return JSON.stringify(style);
}

// read file
let input = null;
try {
    var fs = require('fs');
    input = fs.readFileSync(cli.flags.input, 'utf8');

} catch (ex) {
    console.error('geostyler-FATAL ERROR: ', ex.message);
    return 0;
}

const styleToMb = async(type, input, id) => {
    let geostylerStyle = null;
    switch (type) {
        case "sld":
            geostylerStyle = await sldParser.readStyle(input);
            break;
        case "qml":
            geostylerStyle = await qmlParser.readStyle(input);
            break;
        case "mapbox":

            geostylerStyle = await mbParser.readStyle(input);
            break;
        default:
            break;
    }

    //TODO: convert number in filter
    const mbStyle = await mbParser.writeStyle(geostylerStyle);
    console.log(mbStyle + "\n \n ");

    const wrappedStyle = wrapper(id, JSON.parse(mbStyle));
    return wrappedStyle;

};
try {
    styleToMb(cli.flags.type, input, cli.flags.id).then(res => {
        console.log(res);
        //write to output
        var fs = require('fs');
        fs.writeFileSync(cli.flags.output, res);

    });
} catch (ex) {
    console.error('geostyler-FATAL ERROR: ', ex.message);
    return 0;
}