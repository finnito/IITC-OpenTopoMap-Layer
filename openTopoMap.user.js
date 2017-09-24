// ==UserScript==
// @id TopoMap
// @name IITC Plugin: TopoMap Layer
// @category Map Tiles
// @version 1.0
// @description TopoMap Layer.
// @include http://*ingress.com/intel*
// @match http://*.ingress.com/intel*
// @include https://*.ingress.com/intel*
// @match https://*.ingress.com/intel*
// @grant none
// ==/UserScript==

/*global jQuery, GM_info*/
/*jshint esversion: 6 */

(function ($) {
    "use strict";
    function wrapper(plugin_info) {
        if (typeof window.plugin !== 'function') {
            window.plugin = function () {};
        }

    window.plugin.topoMap = function() {};
    var self = window.plugin.topoMap;

    self.addLayer = function () {
        var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
            maxZoom: 17,
            attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
        });
        layerChooser.addBaseLayer(OpenTopoMap, 'OpenTopoMap');
    };

    // The entry point for this plugin.
    function setup() {
        self.addLayer();
    }

    // Add an info property for IITC's plugin system
    setup.info = plugin_info;

        // Template BS
        setup.info = plugin_info;
        if (!window.bootPlugins) {
            window.bootPlugins = [];
        }

        window.bootPlugins.push(setup);
        if (window.iitcLoaded && typeof setup === 'function') {
            setup();
        }

    }

    var script = document.createElement('script'),
        info = {},
        textContent = document.createTextNode('(' + wrapper + ')(' + JSON.stringify(info) + ')');

    if (typeof GM_info !== 'undefined' && GM_info && GM_info.script) {
        info.script = {
            version: GM_info.script.version,
            name: GM_info.script.name,
            description: GM_info.script.description
        };
    }

    script.appendChild(textContent);
    (document.body || document.head || document.documentElement).appendChild(script);
}(jQuery));
