var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PetaKerawananBanjirDASKarangMumus_1 = new ol.format.GeoJSON();
var features_PetaKerawananBanjirDASKarangMumus_1 = format_PetaKerawananBanjirDASKarangMumus_1.readFeatures(json_PetaKerawananBanjirDASKarangMumus_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PetaKerawananBanjirDASKarangMumus_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PetaKerawananBanjirDASKarangMumus_1.addFeatures(features_PetaKerawananBanjirDASKarangMumus_1);
var lyr_PetaKerawananBanjirDASKarangMumus_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PetaKerawananBanjirDASKarangMumus_1, 
                style: style_PetaKerawananBanjirDASKarangMumus_1,
                popuplayertitle: 'Peta Kerawanan Banjir DAS Karang Mumus',
                interactive: true,
    title: 'Peta Kerawanan Banjir DAS Karang Mumus<br />\
    <img src="styles/legend/PetaKerawananBanjirDASKarangMumus_1_0.png" /> Rendah<br />\
    <img src="styles/legend/PetaKerawananBanjirDASKarangMumus_1_1.png" /> Sedang<br />\
    <img src="styles/legend/PetaKerawananBanjirDASKarangMumus_1_2.png" /> Tinggi<br />' });
var format_KelurahanKecamatanDASKarangMumus_2 = new ol.format.GeoJSON();
var features_KelurahanKecamatanDASKarangMumus_2 = format_KelurahanKecamatanDASKarangMumus_2.readFeatures(json_KelurahanKecamatanDASKarangMumus_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KelurahanKecamatanDASKarangMumus_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KelurahanKecamatanDASKarangMumus_2.addFeatures(features_KelurahanKecamatanDASKarangMumus_2);
var lyr_KelurahanKecamatanDASKarangMumus_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KelurahanKecamatanDASKarangMumus_2, 
                style: style_KelurahanKecamatanDASKarangMumus_2,
                popuplayertitle: 'Kelurahan Kecamatan DAS Karang Mumus',
                interactive: false,
                title: '<img src="styles/legend/KelurahanKecamatanDASKarangMumus_2.png" /> Kelurahan Kecamatan DAS Karang Mumus'
                
            });


lyr_OpenStreetMap_0.setVisible(true);lyr_PetaKerawananBanjirDASKarangMumus_1.setVisible(true);lyr_KelurahanKecamatanDASKarangMumus_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_PetaKerawananBanjirDASKarangMumus_1,lyr_KelurahanKecamatanDASKarangMumus_2];
lyr_PetaKerawananBanjirDASKarangMumus_1.set('fieldAliases', {'Kerawanan': 'Kerawanan', 'Kelurahan': 'Kelurahan', 'Kecamatan': 'Kecamatan', 'Kota': 'Kota', 'Luas': 'Luas', });
lyr_KelurahanKecamatanDASKarangMumus_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WADMKC': 'WADMKC', });
lyr_PetaKerawananBanjirDASKarangMumus_1.set('fieldImages', {'Kerawanan': 'TextEdit', 'Kelurahan': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kota': 'TextEdit', 'Luas': 'TextEdit', });
lyr_KelurahanKecamatanDASKarangMumus_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WADMKC': 'TextEdit', });
lyr_PetaKerawananBanjirDASKarangMumus_1.set('fieldLabels', {'Kerawanan': 'inline label - always visible', 'Kelurahan': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'Kota': 'inline label - always visible', 'Luas': 'inline label - always visible', });
lyr_KelurahanKecamatanDASKarangMumus_2.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WADMKC': 'no label', });
lyr_KelurahanKecamatanDASKarangMumus_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});

lyr_PetaKerawananBanjirDASKarangMumus_1.getSource().getFeatures().forEach(function(feature) {
    var luas = feature.get('Luas');
    if (luas) {
        feature.set('Luas', luas + ' m²');
    }
});