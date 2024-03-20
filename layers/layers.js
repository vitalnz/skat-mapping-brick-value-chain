var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DistrictsWGS84_1 = new ol.format.GeoJSON();
var features_DistrictsWGS84_1 = format_DistrictsWGS84_1.readFeatures(json_DistrictsWGS84_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistrictsWGS84_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistrictsWGS84_1.addFeatures(features_DistrictsWGS84_1);
var lyr_DistrictsWGS84_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DistrictsWGS84_1, 
                style: style_DistrictsWGS84_1,
                popuplayertitle: "Districts WGS84",
                interactive: false,
                title: '<img src="styles/legend/DistrictsWGS84_1.png" /> Districts WGS84'
            });
var format_BestsitesforbrickfactorybyPROECCO_2 = new ol.format.GeoJSON();
var features_BestsitesforbrickfactorybyPROECCO_2 = format_BestsitesforbrickfactorybyPROECCO_2.readFeatures(json_BestsitesforbrickfactorybyPROECCO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BestsitesforbrickfactorybyPROECCO_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BestsitesforbrickfactorybyPROECCO_2.addFeatures(features_BestsitesforbrickfactorybyPROECCO_2);
var lyr_BestsitesforbrickfactorybyPROECCO_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BestsitesforbrickfactorybyPROECCO_2, 
                style: style_BestsitesforbrickfactorybyPROECCO_2,
                popuplayertitle: "Best sites for brick factory by PROECCO",
                interactive: true,
                title: '<img src="styles/legend/BestsitesforbrickfactorybyPROECCO_2.png" /> Best sites for brick factory by PROECCO'
            });
var format_ClayvalleysconfirmedbyPROECCO_3 = new ol.format.GeoJSON();
var features_ClayvalleysconfirmedbyPROECCO_3 = format_ClayvalleysconfirmedbyPROECCO_3.readFeatures(json_ClayvalleysconfirmedbyPROECCO_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClayvalleysconfirmedbyPROECCO_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClayvalleysconfirmedbyPROECCO_3.addFeatures(features_ClayvalleysconfirmedbyPROECCO_3);
var lyr_ClayvalleysconfirmedbyPROECCO_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ClayvalleysconfirmedbyPROECCO_3, 
                style: style_ClayvalleysconfirmedbyPROECCO_3,
                popuplayertitle: "Clay valleys confirmed by PROECCO",
                interactive: true,
                title: '<img src="styles/legend/ClayvalleysconfirmedbyPROECCO_3.png" /> Clay valleys confirmed by PROECCO'
            });
var format_Modernbrickyards_4 = new ol.format.GeoJSON();
var features_Modernbrickyards_4 = format_Modernbrickyards_4.readFeatures(json_Modernbrickyards_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Modernbrickyards_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Modernbrickyards_4.addFeatures(features_Modernbrickyards_4);
var lyr_Modernbrickyards_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Modernbrickyards_4,
maxResolution:2.8001665705646737,
 minResolution:0.14002233076130982,

                style: style_Modernbrickyards_4,
                popuplayertitle: "Modern brickyards",
                interactive: true,
                title: '<img src="styles/legend/Modernbrickyards_4.png" /> Modern brickyards'
            });
var format_Modernbrickyards_5 = new ol.format.GeoJSON();
var features_Modernbrickyards_5 = format_Modernbrickyards_5.readFeatures(json_Modernbrickyards_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Modernbrickyards_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Modernbrickyards_5.addFeatures(features_Modernbrickyards_5);
var lyr_Modernbrickyards_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Modernbrickyards_5,
maxResolution:28.00418610760044,
 minResolution:2.8004466152261966,

                style: style_Modernbrickyards_5,
                popuplayertitle: "Modern brickyards",
                interactive: true,
                title: '<img src="styles/legend/Modernbrickyards_5.png" /> Modern brickyards'
            });
var format_Modernbrickyards_6 = new ol.format.GeoJSON();
var features_Modernbrickyards_6 = format_Modernbrickyards_6.readFeatures(json_Modernbrickyards_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Modernbrickyards_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Modernbrickyards_6.addFeatures(features_Modernbrickyards_6);
var lyr_Modernbrickyards_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Modernbrickyards_6,
maxResolution:140.02205071664832,
 minResolution:28.00446615226196,

                style: style_Modernbrickyards_6,
                popuplayertitle: "Modern brickyards",
                interactive: true,
                title: '<img src="styles/legend/Modernbrickyards_6.png" /> Modern brickyards'
            });
var format_Modernbrickyards_7 = new ol.format.GeoJSON();
var features_Modernbrickyards_7 = format_Modernbrickyards_7.readFeatures(json_Modernbrickyards_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Modernbrickyards_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Modernbrickyards_7.addFeatures(features_Modernbrickyards_7);
var lyr_Modernbrickyards_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Modernbrickyards_7,
maxResolution:28004.466152261964,
 minResolution:140.0223307613098,

                style: style_Modernbrickyards_7,
                popuplayertitle: "Modern brickyards",
                interactive: true,
                title: '<img src="styles/legend/Modernbrickyards_7.png" /> Modern brickyards'
            });
var format_Fuelsources_8 = new ol.format.GeoJSON();
var features_Fuelsources_8 = format_Fuelsources_8.readFeatures(json_Fuelsources_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fuelsources_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fuelsources_8.addFeatures(features_Fuelsources_8);
var lyr_Fuelsources_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fuelsources_8,
maxResolution:14.001953031469458,
 minResolution:0.14002233076130982,

                style: style_Fuelsources_8,
                popuplayertitle: "Fuel sources",
                interactive: true,
    title: 'Fuel sources<br />\
    <img src="styles/legend/Fuelsources_8_0.png" /> Coffee husk<br />\
    <img src="styles/legend/Fuelsources_8_1.png" /> Rice husk<br />\
    <img src="styles/legend/Fuelsources_8_2.png" /> Sawdust<br />\
    <img src="styles/legend/Fuelsources_8_3.png" /> Woodchip<br />\
    <img src="styles/legend/Fuelsources_8_4.png" /> Woodchip and Sawdust<br />'
        });
var format_Fuelsources_9 = new ol.format.GeoJSON();
var features_Fuelsources_9 = format_Fuelsources_9.readFeatures(json_Fuelsources_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fuelsources_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fuelsources_9.addFeatures(features_Fuelsources_9);
var lyr_Fuelsources_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fuelsources_9,
maxResolution:28.00418610760044,
 minResolution:14.00223307613098,

                style: style_Fuelsources_9,
                popuplayertitle: "Fuel sources",
                interactive: true,
    title: 'Fuel sources<br />\
    <img src="styles/legend/Fuelsources_9_0.png" /> Coffee husk<br />\
    <img src="styles/legend/Fuelsources_9_1.png" /> Rice husk<br />\
    <img src="styles/legend/Fuelsources_9_2.png" /> Sawdust<br />\
    <img src="styles/legend/Fuelsources_9_3.png" /> Woodchip<br />\
    <img src="styles/legend/Fuelsources_9_4.png" /> Woodchip and Sawdust<br />'
        });
var format_Fuelsources_10 = new ol.format.GeoJSON();
var features_Fuelsources_10 = format_Fuelsources_10.readFeatures(json_Fuelsources_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fuelsources_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fuelsources_10.addFeatures(features_Fuelsources_10);
var lyr_Fuelsources_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fuelsources_10,
maxResolution:140.02205071664832,
 minResolution:28.00446615226196,

                style: style_Fuelsources_10,
                popuplayertitle: "Fuel sources",
                interactive: true,
    title: 'Fuel sources<br />\
    <img src="styles/legend/Fuelsources_10_0.png" /> Coffee husk<br />\
    <img src="styles/legend/Fuelsources_10_1.png" /> Rice husk<br />\
    <img src="styles/legend/Fuelsources_10_2.png" /> Sawdust<br />\
    <img src="styles/legend/Fuelsources_10_3.png" /> Woodchip<br />\
    <img src="styles/legend/Fuelsources_10_4.png" /> Woodchip and Sawdust<br />'
        });
var format_Fuelsources_11 = new ol.format.GeoJSON();
var features_Fuelsources_11 = format_Fuelsources_11.readFeatures(json_Fuelsources_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fuelsources_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fuelsources_11.addFeatures(features_Fuelsources_11);
var lyr_Fuelsources_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fuelsources_11,
maxResolution:2800.4466152261966,
 minResolution:140.0223307613098,

                style: style_Fuelsources_11,
                popuplayertitle: "Fuel sources",
                interactive: true,
    title: 'Fuel sources<br />\
    <img src="styles/legend/Fuelsources_11_0.png" /> Coffee husk<br />\
    <img src="styles/legend/Fuelsources_11_1.png" /> Rice husk<br />\
    <img src="styles/legend/Fuelsources_11_2.png" /> Sawdust<br />\
    <img src="styles/legend/Fuelsources_11_3.png" /> Woodchip<br />\
    <img src="styles/legend/Fuelsources_11_4.png" /> Woodchip and Sawdust<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_DistrictsWGS84_1.setVisible(true);lyr_BestsitesforbrickfactorybyPROECCO_2.setVisible(true);lyr_ClayvalleysconfirmedbyPROECCO_3.setVisible(true);lyr_Modernbrickyards_4.setVisible(true);lyr_Modernbrickyards_5.setVisible(true);lyr_Modernbrickyards_6.setVisible(true);lyr_Modernbrickyards_7.setVisible(true);lyr_Fuelsources_8.setVisible(true);lyr_Fuelsources_9.setVisible(true);lyr_Fuelsources_10.setVisible(true);lyr_Fuelsources_11.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_DistrictsWGS84_1,lyr_BestsitesforbrickfactorybyPROECCO_2,lyr_ClayvalleysconfirmedbyPROECCO_3,lyr_Modernbrickyards_4,lyr_Modernbrickyards_5,lyr_Modernbrickyards_6,lyr_Modernbrickyards_7,lyr_Fuelsources_8,lyr_Fuelsources_9,lyr_Fuelsources_10,lyr_Fuelsources_11];
lyr_DistrictsWGS84_1.set('fieldAliases', {'NOMDISTR': 'NOMDISTR', 'PROV': 'PROV', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_BestsitesforbrickfactorybyPROECCO_2.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Area (sqm)', });
lyr_ClayvalleysconfirmedbyPROECCO_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Clay_Volume_tons': 'Clay volume in tons', 'label_volume': 'label_volume', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Modernbrickyards_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Brickyard Name', 'Country': 'Country name', 'brickyard_id': 'Brickyard Id', 'distr_comm': 'District name', 'Province': 'Province name', 'Production_Status': 'Production status', 'Product1': 'Product 1', 'URL1': 'URL1', 'Active_Modern_brick_production': 'Active modern brick production', 'phone': 'Phone number', });
lyr_Modernbrickyards_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Brickyard Name', 'Country': 'Country name', 'brickyard_id': 'Brickyard Id', 'distr_comm': 'District name', 'Province': 'Province name', 'Production_Status': 'Production status', 'Product1': 'Product 1', 'URL1': 'URL1', 'Active_Modern_brick_production': 'Active modern brick production', 'phone': 'Phone number', });
lyr_Modernbrickyards_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Brickyard Name', 'Country': 'Country name', 'brickyard_id': 'Brickyard Id', 'distr_comm': 'District name', 'Province': 'Province name', 'Production_Status': 'Production status', 'Product1': 'Product 1', 'URL1': 'URL1', 'Active_Modern_brick_production': 'Active modern brick production', 'phone': 'Phone number', });
lyr_Modernbrickyards_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Brickyard Name', 'Country': 'Country name', 'brickyard_id': 'Brickyard Id', 'distr_comm': 'District name', 'Province': 'Province name', 'Production_Status': 'Production status', 'Product1': 'Product 1', 'URL1': 'URL1', 'Active_Modern_brick_production': 'Active modern brick production', 'phone': 'Phone number', });
lyr_Fuelsources_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Cluster': 'Cluster', 'Name': 'Name', 'District': 'District', 'Sector': 'Sector', 'Phone': 'Phone', 'Legal_Status': 'Legal Status', 'Fuel_types': 'Fuel types', 'Fuel_clients': 'Fuel clients', 'Date_': 'Date', });
lyr_Fuelsources_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Cluster': 'Cluster', 'Name': 'Name', 'District': 'District', 'Sector': 'Sector', 'Phone': 'Phone', 'Legal_Status': 'Legal Status', 'Fuel_types': 'Fuel types', 'Fuel_clients': 'Fuel clients', 'Date_': 'Date', });
lyr_Fuelsources_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Cluster': 'Cluster', 'Name': 'Name', 'District': 'District', 'Sector': 'Sector', 'Phone': 'Phone', 'Legal_Status': 'Legal Status', 'Fuel_types': 'Fuel types', 'Fuel_clients': 'Fuel clients', 'Date_': 'Date', });
lyr_Fuelsources_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Cluster': 'Cluster', 'Name': 'Name', 'District': 'District', 'Sector': 'Sector', 'Phone': 'Phone', 'Legal_Status': 'Legal Status', 'Fuel_types': 'Fuel types', 'Fuel_clients': 'Fuel clients', 'Date_': 'Date', });
lyr_DistrictsWGS84_1.set('fieldImages', {'NOMDISTR': 'TextEdit', 'PROV': 'TextEdit', 'SHAPE_Leng': 'Hidden', 'SHAPE_Area': 'Hidden', });
lyr_BestsitesforbrickfactorybyPROECCO_2.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ClayvalleysconfirmedbyPROECCO_3.set('fieldImages', {'OBJECTID': 'Hidden', 'Clay_Volume_tons': 'Range', 'label_volume': 'Hidden', 'Shape_Length': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_Modernbrickyards_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Country': 'Hidden', 'brickyard_id': 'Hidden', 'distr_comm': 'TextEdit', 'Province': 'TextEdit', 'Production_Status': 'TextEdit', 'Product1': 'Hidden', 'URL1': 'Hidden', 'Active_Modern_brick_production': 'TextEdit', 'phone': '', });
lyr_Modernbrickyards_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Country': 'Hidden', 'brickyard_id': 'Hidden', 'distr_comm': 'TextEdit', 'Province': 'TextEdit', 'Production_Status': 'TextEdit', 'Product1': 'Hidden', 'URL1': 'Hidden', 'Active_Modern_brick_production': 'TextEdit', 'phone': 'TextEdit', });
lyr_Modernbrickyards_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Country': 'Hidden', 'brickyard_id': 'Hidden', 'distr_comm': 'TextEdit', 'Province': 'TextEdit', 'Production_Status': 'TextEdit', 'Product1': 'Hidden', 'URL1': 'Hidden', 'Active_Modern_brick_production': 'TextEdit', 'phone': 'TextEdit', });
lyr_Modernbrickyards_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Country': 'Hidden', 'brickyard_id': 'Hidden', 'distr_comm': 'TextEdit', 'Province': 'TextEdit', 'Production_Status': 'TextEdit', 'Product1': 'Hidden', 'URL1': 'Hidden', 'Active_Modern_brick_production': 'TextEdit', 'phone': 'TextEdit', });
lyr_Fuelsources_8.set('fieldImages', {'OBJECTID': 'Hidden', 'Cluster': 'Hidden', 'Name': 'TextEdit', 'District': 'TextEdit', 'Sector': 'TextEdit', 'Phone': 'TextEdit', 'Legal_Status': 'TextEdit', 'Fuel_types': 'TextEdit', 'Fuel_clients': 'Hidden', 'Date_': 'Hidden', });
lyr_Fuelsources_9.set('fieldImages', {'OBJECTID': 'Hidden', 'Cluster': 'Hidden', 'Name': 'TextEdit', 'District': 'TextEdit', 'Sector': 'TextEdit', 'Phone': 'TextEdit', 'Legal_Status': 'TextEdit', 'Fuel_types': 'TextEdit', 'Fuel_clients': 'Hidden', 'Date_': 'Hidden', });
lyr_Fuelsources_10.set('fieldImages', {'OBJECTID': 'Hidden', 'Cluster': 'Hidden', 'Name': 'TextEdit', 'District': 'TextEdit', 'Sector': 'TextEdit', 'Phone': 'TextEdit', 'Legal_Status': 'TextEdit', 'Fuel_types': 'TextEdit', 'Fuel_clients': 'Hidden', 'Date_': 'Hidden', });
lyr_Fuelsources_11.set('fieldImages', {'OBJECTID': 'Hidden', 'Cluster': 'Hidden', 'Name': 'TextEdit', 'District': 'TextEdit', 'Sector': 'TextEdit', 'Phone': 'TextEdit', 'Legal_Status': 'TextEdit', 'Fuel_types': 'TextEdit', 'Fuel_clients': 'Hidden', 'Date_': 'Hidden', });
lyr_DistrictsWGS84_1.set('fieldLabels', {'NOMDISTR': 'no label', 'PROV': 'no label', });
lyr_BestsitesforbrickfactorybyPROECCO_2.set('fieldLabels', {'Id': 'hidden field', 'gridcode': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'inline label - always visible', });
lyr_ClayvalleysconfirmedbyPROECCO_3.set('fieldLabels', {'Clay_Volume_tons': 'inline label - always visible', });
lyr_Modernbrickyards_4.set('fieldLabels', {'OBJECTID': 'hidden field', 'Name': 'inline label - always visible', 'distr_comm': 'inline label - always visible', 'Province': 'inline label - always visible', 'Production_Status': 'inline label - always visible', 'Active_Modern_brick_production': 'inline label - always visible', 'phone': 'inline label - always visible', });
lyr_Modernbrickyards_5.set('fieldLabels', {'OBJECTID': 'hidden field', 'Name': 'inline label - always visible', 'distr_comm': 'inline label - always visible', 'Province': 'inline label - always visible', 'Production_Status': 'inline label - always visible', 'Active_Modern_brick_production': 'inline label - always visible', 'phone': 'no label', });
lyr_Modernbrickyards_6.set('fieldLabels', {'OBJECTID': 'hidden field', 'Name': 'inline label - always visible', 'distr_comm': 'inline label - always visible', 'Province': 'inline label - always visible', 'Production_Status': 'inline label - always visible', 'Active_Modern_brick_production': 'inline label - always visible', 'phone': 'inline label - always visible', });
lyr_Modernbrickyards_7.set('fieldLabels', {'OBJECTID': 'hidden field', 'Name': 'inline label - always visible', 'distr_comm': 'inline label - always visible', 'Province': 'inline label - always visible', 'Production_Status': 'inline label - always visible', 'Active_Modern_brick_production': 'inline label - always visible', 'phone': 'inline label - always visible', });
lyr_Fuelsources_8.set('fieldLabels', {'Name': 'inline label - always visible', 'District': 'inline label - always visible', 'Sector': 'inline label - always visible', 'Phone': 'inline label - always visible', 'Legal_Status': 'hidden field', 'Fuel_types': 'inline label - always visible', });
lyr_Fuelsources_9.set('fieldLabels', {'Name': 'inline label - always visible', 'District': 'inline label - always visible', 'Sector': 'inline label - always visible', 'Phone': 'inline label - always visible', 'Legal_Status': 'hidden field', 'Fuel_types': 'inline label - always visible', });
lyr_Fuelsources_10.set('fieldLabels', {'Name': 'inline label - always visible', 'District': 'inline label - always visible', 'Sector': 'inline label - always visible', 'Phone': 'inline label - always visible', 'Legal_Status': 'hidden field', 'Fuel_types': 'inline label - always visible', });
lyr_Fuelsources_11.set('fieldLabels', {'Name': 'inline label - always visible', 'District': 'inline label - always visible', 'Sector': 'inline label - always visible', 'Phone': 'inline label - always visible', 'Legal_Status': 'hidden field', 'Fuel_types': 'inline label - always visible', });
lyr_Fuelsources_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});