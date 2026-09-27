var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_SouthAfrica_1 = new ol.format.GeoJSON();
var features_SouthAfrica_1 = format_SouthAfrica_1.readFeatures(json_SouthAfrica_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SouthAfrica_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SouthAfrica_1.addFeatures(features_SouthAfrica_1);
var lyr_SouthAfrica_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SouthAfrica_1, 
                style: style_SouthAfrica_1,
                popuplayertitle: 'South Africa',
                interactive: true,
                title: '<img src="styles/legend/SouthAfrica_1.png" /> South Africa'
            });
var format_WesternCapeProvince_2 = new ol.format.GeoJSON();
var features_WesternCapeProvince_2 = format_WesternCapeProvince_2.readFeatures(json_WesternCapeProvince_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WesternCapeProvince_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WesternCapeProvince_2.addFeatures(features_WesternCapeProvince_2);
var lyr_WesternCapeProvince_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WesternCapeProvince_2, 
                style: style_WesternCapeProvince_2,
                popuplayertitle: 'Western Cape Province',
                interactive: true,
                title: '<img src="styles/legend/WesternCapeProvince_2.png" /> Western Cape Province'
            });
var format_OverbergDistrictMunicipality_3 = new ol.format.GeoJSON();
var features_OverbergDistrictMunicipality_3 = format_OverbergDistrictMunicipality_3.readFeatures(json_OverbergDistrictMunicipality_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OverbergDistrictMunicipality_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OverbergDistrictMunicipality_3.addFeatures(features_OverbergDistrictMunicipality_3);
var lyr_OverbergDistrictMunicipality_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OverbergDistrictMunicipality_3, 
                style: style_OverbergDistrictMunicipality_3,
                popuplayertitle: 'Overberg District Municipality',
                interactive: true,
                title: '<img src="styles/legend/OverbergDistrictMunicipality_3.png" /> Overberg District Municipality'
            });
var format_Overbergfires20162026_4 = new ol.format.GeoJSON();
var features_Overbergfires20162026_4 = format_Overbergfires20162026_4.readFeatures(json_Overbergfires20162026_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Overbergfires20162026_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Overbergfires20162026_4.addFeatures(features_Overbergfires20162026_4);
var lyr_Overbergfires20162026_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Overbergfires20162026_4, 
                style: style_Overbergfires20162026_4,
                popuplayertitle: 'Overberg fires 2016-2026 ',
                interactive: true,
    title: 'Overberg fires 2016-2026 <br />\
    <img src="styles/legend/Overbergfires20162026_4_0.png" /> 2016<br />\
    <img src="styles/legend/Overbergfires20162026_4_1.png" /> 2017<br />\
    <img src="styles/legend/Overbergfires20162026_4_2.png" /> 2018<br />\
    <img src="styles/legend/Overbergfires20162026_4_3.png" /> 2019<br />\
    <img src="styles/legend/Overbergfires20162026_4_4.png" /> 2020<br />\
    <img src="styles/legend/Overbergfires20162026_4_5.png" /> 2021<br />\
    <img src="styles/legend/Overbergfires20162026_4_6.png" /> 2022<br />\
    <img src="styles/legend/Overbergfires20162026_4_7.png" /> 2023<br />\
    <img src="styles/legend/Overbergfires20162026_4_8.png" /> 2024<br />\
    <img src="styles/legend/Overbergfires20162026_4_9.png" /> 2025<br />\
    <img src="styles/legend/Overbergfires20162026_4_10.png" /> 2026<br />' });
var format_OverbergFires2024_5 = new ol.format.GeoJSON();
var features_OverbergFires2024_5 = format_OverbergFires2024_5.readFeatures(json_OverbergFires2024_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OverbergFires2024_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OverbergFires2024_5.addFeatures(features_OverbergFires2024_5);
var lyr_OverbergFires2024_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OverbergFires2024_5, 
                style: style_OverbergFires2024_5,
                popuplayertitle: 'Overberg Fires 2024 ',
                interactive: true,
                title: '<img src="styles/legend/OverbergFires2024_5.png" /> Overberg Fires 2024 '
            });
var format_OverbergVegetationCover2024_6 = new ol.format.GeoJSON();
var features_OverbergVegetationCover2024_6 = format_OverbergVegetationCover2024_6.readFeatures(json_OverbergVegetationCover2024_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OverbergVegetationCover2024_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OverbergVegetationCover2024_6.addFeatures(features_OverbergVegetationCover2024_6);
var lyr_OverbergVegetationCover2024_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OverbergVegetationCover2024_6, 
                style: style_OverbergVegetationCover2024_6,
                popuplayertitle: 'Overberg Vegetation Cover 2024',
                interactive: true,
                title: '<img src="styles/legend/OverbergVegetationCover2024_6.png" /> Overberg Vegetation Cover 2024'
            });
var lyr_OverbergHillshade_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overberg Hillshade<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OverbergHillshade_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [2093826.855579, -4141480.849183, 2338915.267809, -3978113.531897]
        })
    });
var lyr_OverbergDEM_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overberg DEM<br />\
    <img src="styles/legend/OverbergDEM_8_0.png" /> -6<br />\
    <img src="styles/legend/OverbergDEM_8_1.png" /> 1823<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OverbergDEM_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [2093826.855579, -4141480.849183, 2338915.267809, -3978113.531897]
        })
    });

lyr_GoogleMaps_0.setVisible(true);lyr_SouthAfrica_1.setVisible(true);lyr_WesternCapeProvince_2.setVisible(true);lyr_OverbergDistrictMunicipality_3.setVisible(true);lyr_Overbergfires20162026_4.setVisible(true);lyr_OverbergFires2024_5.setVisible(true);lyr_OverbergVegetationCover2024_6.setVisible(true);lyr_OverbergHillshade_7.setVisible(true);lyr_OverbergDEM_8.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_SouthAfrica_1,lyr_WesternCapeProvince_2,lyr_OverbergDistrictMunicipality_3,lyr_Overbergfires20162026_4,lyr_OverbergFires2024_5,lyr_OverbergVegetationCover2024_6,lyr_OverbergHillshade_7,lyr_OverbergDEM_8];
lyr_SouthAfrica_1.set('fieldAliases', {'FID': 'FID', 'PROVINCE': 'PROVINCE', 'CATEGORY': 'CATEGORY', 'DISTRICT': 'DISTRICT', 'DISTRICT_N': 'DISTRICT_N', 'Map_Label': 'Map_Label', 'CATEGORY_N': 'CATEGORY_N', 'DATE_EFFEC': 'DATE_EFFEC', });
lyr_WesternCapeProvince_2.set('fieldAliases', {'fid': 'fid', 'PROVINCE': 'PROVINCE', 'CATEGORY': 'CATEGORY', 'DISTRICT': 'DISTRICT', 'DISTRICT_N': 'District Name', 'Map_Label': 'Map_Label', 'CATEGORY_N': 'CATEGORY_N', 'DATE_EFFEC': 'DATE_EFFEC', });
lyr_OverbergDistrictMunicipality_3.set('fieldAliases', {'fid': 'fid', 'PROVINCE': 'PROVINCE', 'CATEGORY': 'CATEGORY', 'DISTRICT': 'DISTRICT', 'DISTRICT_N': 'District Name', 'Map_Label': 'Map_Label', 'CATEGORY_N': 'CATEGORY_N', 'DATE_EFFEC': 'DATE_EFFEC', });
lyr_Overbergfires20162026_4.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'FIRE_CODE': 'FIRE_CODE', 'FIREWEB': 'FIREWEB', 'RESCODE_LU': 'RESCODE_LU', 'RES_CODE': 'RES_CODE', 'LAND_UNIT': 'Land Unit', 'MONTH': 'MONTH', 'YEAR': 'YEAR', 'RES_CENTRE': 'RES_CENTRE', 'RES_NAME': 'Reserve Name', 'LOCAL_DESC': 'LOCAL_DESC', 'DATE_START': 'DATE_START', 'DATE_EXTIN': 'DATE_EXTIN', 'DATE_WITHD': 'DATE_WITHD', 'REPORT_OFF': 'REPORT_OFF', 'POLIC_CASE': 'POLIC_CASE', 'IGNITIONCA': 'Ignition Cause', 'YR_MNTH': 'YR_MNTH', 'AREA_HA': 'Area (ha)', 'ORIG_FID': 'ORIG_FID', });
lyr_OverbergFires2024_5.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'FIRE_CODE': 'FIRE_CODE', 'FIREWEB': 'FIREWEB', 'RESCODE_LU': 'RESCODE_LU', 'RES_CODE': 'RES_CODE', 'LAND_UNIT': 'Land Unit', 'MONTH': 'MONTH', 'YEAR': 'YEAR', 'RES_CENTRE': 'RES_CENTRE', 'RES_NAME': 'Reserve Name', 'LOCAL_DESC': 'LOCAL_DESC', 'DATE_START': 'DATE_START', 'DATE_EXTIN': 'DATE_EXTIN', 'DATE_WITHD': 'DATE_WITHD', 'REPORT_OFF': 'REPORT_OFF', 'POLIC_CASE': 'POLIC_CASE', 'IGNITIONCA': 'Ignition Cause', 'YR_MNTH': 'YR_MNTH', 'AREA_HA': 'Area (ha)', 'ORIG_FID': 'ORIG_FID', });
lyr_OverbergVegetationCover2024_6.set('fieldAliases', {'fid': 'fid', 'I_Color_1': 'I_Color_1', 'T_Name': 'Vegetation Type', 'T_MAPCODE': 'T_MAPCODE', 'T_BIOME': 'Biome', 'T_BIOMEID': 'T_BIOMEID', 'T_BIOREGIO': 'Bioregion', 'T_BRGNID': 'T_BRGNID', 'T_SUBTYPNM': 'T_SUBTYPNM', 'T_SUBTYPEC': 'T_SUBTYPEC', 'T_Plygn_Sr': 'T_Plygn_Sr', 'T_CHNGE_VE': 'T_CHNGE_VE', 'T_CHANGE_R': 'T_CHANGE_R', 'T_Cntrbtor': 'T_Cntrbtor', 'T_CNSRV_TR': 'T_CNSRV_TR', 'T_Crssrlm': 'T_Crssrlm', 'T_CstalPol': 'T_CstalPol', 'T_Epoch_ex': 'T_Epoch_ex', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Area', });
lyr_SouthAfrica_1.set('fieldImages', {'FID': 'Hidden', 'PROVINCE': 'Hidden', 'CATEGORY': 'Hidden', 'DISTRICT': 'Hidden', 'DISTRICT_N': 'Hidden', 'Map_Label': 'Hidden', 'CATEGORY_N': 'Hidden', 'DATE_EFFEC': 'Hidden', });
lyr_WesternCapeProvince_2.set('fieldImages', {'fid': 'Hidden', 'PROVINCE': 'Hidden', 'CATEGORY': 'Hidden', 'DISTRICT': 'Hidden', 'DISTRICT_N': 'TextEdit', 'Map_Label': 'Hidden', 'CATEGORY_N': 'Hidden', 'DATE_EFFEC': 'Hidden', });
lyr_OverbergDistrictMunicipality_3.set('fieldImages', {'fid': 'Hidden', 'PROVINCE': 'Hidden', 'CATEGORY': 'Hidden', 'DISTRICT': 'Hidden', 'DISTRICT_N': 'TextEdit', 'Map_Label': 'Hidden', 'CATEGORY_N': 'Hidden', 'DATE_EFFEC': 'Hidden', });
lyr_Overbergfires20162026_4.set('fieldImages', {'fid': 'Hidden', 'ID': 'Hidden', 'FIRE_CODE': 'Hidden', 'FIREWEB': 'Hidden', 'RESCODE_LU': 'Hidden', 'RES_CODE': 'Hidden', 'LAND_UNIT': 'TextEdit', 'MONTH': 'Hidden', 'YEAR': 'TextEdit', 'RES_CENTRE': 'Hidden', 'RES_NAME': 'TextEdit', 'LOCAL_DESC': 'Hidden', 'DATE_START': 'Hidden', 'DATE_EXTIN': 'Hidden', 'DATE_WITHD': 'Hidden', 'REPORT_OFF': 'Hidden', 'POLIC_CASE': 'Hidden', 'IGNITIONCA': 'TextEdit', 'YR_MNTH': 'Hidden', 'AREA_HA': 'TextEdit', 'ORIG_FID': 'Hidden', });
lyr_OverbergFires2024_5.set('fieldImages', {'fid': 'Hidden', 'ID': 'Hidden', 'FIRE_CODE': 'Hidden', 'FIREWEB': 'Hidden', 'RESCODE_LU': 'Hidden', 'RES_CODE': 'Hidden', 'LAND_UNIT': 'TextEdit', 'MONTH': 'Hidden', 'YEAR': 'TextEdit', 'RES_CENTRE': 'Hidden', 'RES_NAME': 'TextEdit', 'LOCAL_DESC': 'Hidden', 'DATE_START': 'Hidden', 'DATE_EXTIN': 'Hidden', 'DATE_WITHD': 'Hidden', 'REPORT_OFF': 'Hidden', 'POLIC_CASE': 'Hidden', 'IGNITIONCA': 'TextEdit', 'YR_MNTH': 'Hidden', 'AREA_HA': 'TextEdit', 'ORIG_FID': 'Hidden', });
lyr_OverbergVegetationCover2024_6.set('fieldImages', {'fid': 'Hidden', 'I_Color_1': 'Hidden', 'T_Name': 'TextEdit', 'T_MAPCODE': 'Hidden', 'T_BIOME': 'TextEdit', 'T_BIOMEID': 'Hidden', 'T_BIOREGIO': 'TextEdit', 'T_BRGNID': 'Hidden', 'T_SUBTYPNM': 'Hidden', 'T_SUBTYPEC': 'Hidden', 'T_Plygn_Sr': 'Hidden', 'T_CHNGE_VE': 'Hidden', 'T_CHANGE_R': 'Hidden', 'T_Cntrbtor': 'Hidden', 'T_CNSRV_TR': 'Hidden', 'T_Crssrlm': 'Hidden', 'T_CstalPol': 'Hidden', 'T_Epoch_ex': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'TextEdit', });
lyr_SouthAfrica_1.set('fieldLabels', {});
lyr_WesternCapeProvince_2.set('fieldLabels', {'DISTRICT_N': 'no label', });
lyr_OverbergDistrictMunicipality_3.set('fieldLabels', {'DISTRICT_N': 'header label - visible with data', });
lyr_Overbergfires20162026_4.set('fieldLabels', {'LAND_UNIT': 'header label - visible with data', 'YEAR': 'no label', 'RES_NAME': 'no label', 'IGNITIONCA': 'header label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_OverbergFires2024_5.set('fieldLabels', {'LAND_UNIT': 'header label - visible with data', 'YEAR': 'no label', 'RES_NAME': 'no label', 'IGNITIONCA': 'header label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_OverbergVegetationCover2024_6.set('fieldLabels', {'T_Name': 'header label - visible with data', 'T_BIOME': 'header label - visible with data', 'T_BIOREGIO': 'no label', 'Shape_Area': 'inline label - visible with data', });
lyr_OverbergVegetationCover2024_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});