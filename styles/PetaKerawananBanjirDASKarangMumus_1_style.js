var size = 0;
var placement = 'point';
function categories_PetaKerawananBanjirDASKarangMumus_1(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Rendah':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(51,160,44,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Sedang':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(247,237,13,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Tinggi':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(227,26,28,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_PetaKerawananBanjirDASKarangMumus_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("Kerawanan");
    var labelFont = "10.4px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_PetaKerawananBanjirDASKarangMumus_1(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
