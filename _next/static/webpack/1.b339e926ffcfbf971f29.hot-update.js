webpackHotUpdate(1,{

/***/ "./components/visualization/threat/createThreatVisual.js":
/*!***************************************************************!*\
  !*** ./components/visualization/threat/createThreatVisual.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chroma-js */ "./node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _translationsThreat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./translationsThreat */ "./components/visualization/threat/translationsThreat.js");
/* harmony import */ var d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! d3-scale-chromatic */ "./node_modules/d3-scale-chromatic/src/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data */ "./components/visualization/threat/data.js");









var FILL_COLOR = 'black';
var BACK_COLOR = 'white';

function createThreatVisual() {
  var hover_ich = null;
  var threats; //Constants

  var pi = Math.PI;
  var pi2 = Math.PI * 2;
  var pi1_2 = Math.PI / 2; //Sizes

  var base_size = 1600;
  var width = 1600,
      height = 1600;
  var total_width, total_height;
  var margin = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }; //Containers SVG

  var svg, g;
  var g_scale; //Containers canvas

  var canvas_edges, canvas_nodes, canvas_hover;
  var ctx_edges, ctx_nodes, ctx_hover;
  var sf = 2; //canvas scale factor

  var sf_original = sf;
  var sf_set = false;
  var sf_set_original = sf_set; //Data

  var nodes;
  var elements;
  var concepts;
  var language;
  var edges;
  var edges_concepts = [],
      edges_elements = []; //Mappings

  var node_by_id = {};
  var linked_to_id = {};
  var threat_by_id = {};
  var concept_by_id = {};
  var edge_concept_by_id = {}; // let edge_element_by_id = {}
  // const threat_metadata_colorscale = d3.scaleSequential().range(interpolateTurbo)
  //Threats metadata

  var threat_metadata = [{
    id: 'vocabulary_ich_1265',
    color: '#fca636'
  }, //Adverse circumstances
  {
    id: 'vocabulary_ich_1268',
    color: '#f2844b'
  }, //Demographic issues
  {
    id: 'vocabulary_ich_1287',
    color: '#E01A25'
  }, //Derived practice
  {
    id: 'vocabulary_ich_1264',
    color: '#C20049'
  }, //Environmental degradation
  {
    id: 'vocabulary_ich_1286',
    color: '#b12a90'
  }, //Weakened practice and transmission
  {
    id: 'vocabulary_ich_1263',
    color: '#66489F'
  }, //Globalized information
  {
    id: 'vocabulary_ich_1284',
    color: 'rgb(54, 140, 225)'
  }, //New products and techniques
  {
    id: 'vocabulary_ich_1269',
    color: 'rgb(35, 171, 216)'
  }, //Missing objects, spaces or systems
  {
    id: 'vocabulary_ich_1267',
    color: '#7EB852'
  }];
  threat_metadata.forEach(function (d, i) {
    console.log(Object(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_7__["interpolatePlasma"])(i * 0.1));
    d.color = Object(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_7__["interpolatePlasma"])(i * 0.1);
  });
  var threat_ids = threat_metadata.map(function (d) {
    return d.id;
  });
  var color_threat_scale = d3__WEBPACK_IMPORTED_MODULE_4__["scaleOrdinal"]().domain(threat_ids).range(threat_metadata.map(function (d) {
    return d.color;
  })); //Scale for the radius of the concepts, based on their degree

  var scale_concept_radius = d3__WEBPACK_IMPORTED_MODULE_4__["scaleSqrt"]().domain([0, 30]).range([0, 70]); //Scale for the radius of the threats, based on their degree

  var scale_threat_radius = d3__WEBPACK_IMPORTED_MODULE_4__["scaleSqrt"]().domain([0, 30]).range([0, 80]); //ICH elements

  var node_radius = 20;
  var radius_elements = 600;
  var radius_elements_offset = 1.1 * node_radius;
  var radius_elements_title = 680;
  var arc_nodes = d3__WEBPACK_IMPORTED_MODULE_4__["arc"]();
  var pie_nodes = d3__WEBPACK_IMPORTED_MODULE_4__["pie"]().sort(null).value(1); //Threat categories

  var radius_threats = 580; // const threat_circle_radius = 6

  var threat_line_height = 30; //Threat concepts

  var concept_radius = 6;
  var radius_concept = 600;
  var radius_concept_title = 450; // const radius_dot_concept = radius_concept

  var concept_arcs;
  var arc_concept = d3__WEBPACK_IMPORTED_MODULE_4__["arc"]();
  var pie_concept = d3__WEBPACK_IMPORTED_MODULE_4__["pie"]().value(function (d) {
    return d.values.length;
  }).sort(null);
  var threats_nest; //Visual styles

  var opacity_concept_default = 0.5;
  var opacity_element_default = 0.1;
  var arc_gradient_nodes;
  var arc_gradient_hover; //Mouse hovers

  var voronoi = d3__WEBPACK_IMPORTED_MODULE_4__["voronoi"]().x(function (d) {
    return d.x;
  }).y(function (d) {
    return d.y;
  });
  var diagram;
  var mouse_hover_active = false;
  var current_hover = null;
  var hover_type = null;
  var timer_draw = null; //Mouse clicks

  var current_click = null;
  var click_active = false;
  var hover_concept, hover_category; //Other

  var font_family = 'Oswald';
  var scale_factor = 1;
  var scale_multiplier = 1;
  var threat_definitions;
  var ICH_num, ICH_num_all;

  var showModal = function showModal(element) {
    console.log(element);
  }; //////////////////////// Element edges ///////////////////////
  //Line drawing function for the element edges


  var line = d3__WEBPACK_IMPORTED_MODULE_4__["line"]().x(function (d) {
    return d[0];
  }).y(function (d) {
    return d[1];
  }) // .curve(d3.curveBundle.beta(1))
  .curve(d3__WEBPACK_IMPORTED_MODULE_4__["curveBasis"]); //All are based on the distance between the category and ICH element
  //The radius of the first anchor point

  var cr1_offset_scale = d3__WEBPACK_IMPORTED_MODULE_4__["scaleLinear"]().domain([0, 2 * radius_threats]).range([-20, -150]).clamp(true); //The radius of the second anchor point

  var cr2_offset_scale = d3__WEBPACK_IMPORTED_MODULE_4__["scaleLinear"]().domain([0, radius_threats]).range([0, 175]).clamp(true); //The angle of the second anchor point

  var angle2_offset_scale = d3__WEBPACK_IMPORTED_MODULE_4__["scaleLinear"]().domain([0, radius_threats]).range([1, 0.5]).clamp(true);

  function chart(selection, nodes_raw, edges_raw) {
    var lang = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'en';
    var callback = arguments.length > 4 ? arguments[4] : undefined;
    language = lang;
    nodes = nodes_raw;
    edges = edges_raw;
    threat_definitions = _translationsThreat__WEBPACK_IMPORTED_MODULE_6__["default"][language].definitions; //////////////////////////////////////////////////////////////
    //////////////// Create the canvas containers ////////////////
    //////////////////////////////////////////////////////////////
    //Canvas for the edges

    canvas_edges = selection.append('canvas').attr('id', 'canvas-edges');
    ctx_edges = canvas_edges.node().getContext('2d'); //Canvas for the nodes

    canvas_nodes = selection.append('canvas').attr('id', 'canvas-nodes');
    ctx_nodes = canvas_nodes.node().getContext('2d'); //Canvas for the hover effects - mostly for performance

    canvas_hover = selection.append('canvas').attr('id', 'canvas-hover');
    ctx_hover = canvas_hover.node().getContext('2d'); //////////////////////////////////////////////////////////////
    ////////////////// Create the SVG container //////////////////
    //////////////////////////////////////////////////////////////
    //SVG container for the things on top such as text

    svg = selection.append('svg').on('mousemove', findElement).on('click', function (d) {
      click_active = false;
      mouseOverReset();
    }); //Group for all _visual elements

    g = svg.append('g').attr('id', '_visual-elements-group');
    g_scale = g.append('g').attr('id', 'scaling-group'); //////////////////////////////////////////////////////////////
    ////////////////////// Data preparation //////////////////////
    //////////////////////////////////////////////////////////////
    //General, data only, preparation to create the correct arrays

    dataPreparation(); //Calculate node locations

    nodePlacement(); //Calculate edge locations

    edgePlacement();
    chart.resize(); //////////////////////////////////////////////////////////////
    ////////////////////// Set-up the voronoi ////////////////////
    //////////////////////////////////////////////////////////////
    //Calculate a voronoi layout - for mouse events

    diagram = voronoi(elements); // //Show the voronoi sites
    // g_scale.append("g")
    //     .attr("class", "element-group")
    //     .selectAll(".element-cell")
    //     .data(diagram.polygons())
    //     .enter().append("path")
    //     .attr("class", ".element-cell")
    //     .style("fill", "none")
    //     .style("stroke", "black")
    //     .style("pointer-events", "none")
    //     .attr("d", d => d ? "M" + d.join("L") + "Z" : null)
    //////////////////////////////////////////////////////////////
    //////////////////////////// Draw ////////////////////////////
    //////////////////////////////////////////////////////////////
    //Create a gradient for the lower arc with ICH labels

    function createGradient(ctx) {
      var num = threat_metadata.length - 1;
      var grd = ctx.createLinearGradient(-radius_elements_title, 0, radius_elements_title, 0);

      for (var i = 0; i <= num; i++) {
        grd.addColorStop(i / num, threat_metadata[i].color);
      }

      return grd;
    } //function createGradient


    arc_gradient_nodes = createGradient(ctx_nodes);
    arc_gradient_hover = createGradient(ctx_hover); //Set-up the final parts of the arc functions

    prepareArcs(); //Calculate the edge curves

    calculateEdgeCenters(edges_concepts); //Setup the hidden SVG mouseover elements

    drawHiddenElements();
    setHiddenHovers(); //Draw all the pieces on the canvases

    drawCanvas(); //Return filtered nodes

    if (callback) callback(elements);
  } //function chart
  //////////////////////////////////////////////////////////////
  ///////////////////// Resize the chart ///////////////////////
  //////////////////////////////////////////////////////////////


  chart.resize = function () {
    total_width = width + margin.left + margin.right;
    total_height = height + margin.top + margin.bottom; //Change sizes of the svg

    svg.attr('width', total_width).attr('height', total_height);
    g.attr('transform', 'translate(' + (margin.left + width / 2) + ',' + (margin.top + height / 2) + ')'); //Get the scale factor to resize

    var size = Math.min(total_height, total_width);
    scale_factor = roundTo(size / base_size * scale_multiplier, 2); //Scale everything to fit

    g_scale.attr('transform', 'scale(' + scale_factor + ')'); //Update voronoi for mouseover

    voronoi.extent([[(-margin.left - width / 2) / scale_factor, (-margin.top - height / 2) / scale_factor], [total_width, total_height]]); //If the canvas scale factor hasn't been set yet, figure out the best for this screen

    if (!sf_set) {
      sf = Math.min(2, getPixelRatio(ctx_nodes)); //no more than 2

      sf_original = sf;
    } //if
    //Change sizes of the canvas based on the scale factor


    crispyCanvas(canvas_edges, ctx_edges);
    crispyCanvas(canvas_nodes, ctx_nodes);
    crispyCanvas(canvas_hover, ctx_hover); //Redraw

    drawCanvas();
    return 1; //Needed for the saveImage function
  }; //function resize
  //////////////////////////////////////////////////////////////
  ///////////////// General data preparation ///////////////////
  //////////////////////////////////////////////////////////////
  /////////////////// Initial data filtering ///////////////////


  function dataPreparation() {
    ///////////////////// COUNTRY MAPPING ////////////////////
    //Create a node -> node id mapping
    node_by_id = {};
    nodes.forEach(function (d) {
      node_by_id[d.id] = d;
    }); //What connections remain per node

    linked_to_id = {};
    edges.forEach(function (d) {
      //Save all of the connections to a specific node
      if (!linked_to_id[d.source]) linked_to_id[d.source] = [];
      if (!linked_to_id[d.target]) linked_to_id[d.target] = [];
      linked_to_id[d.source].push(node_by_id[d.target]);
      linked_to_id[d.target].push(node_by_id[d.source]);
    }); //forEach
    //Attach a list of countries to the ICH elements

    nodes.filter(function (d) {
      return d.type === 'element';
    }).forEach(function (d) {
      d.countries = linked_to_id[d.id].filter(function (l) {
        return l.type === 'country';
      }).map(function (l) {
        return l.label;
      });
    }); //////////////////// INITIAL FILTERING ///////////////////

    nodes = nodes.filter(function (d) {
      //Filter out any elements that are not on the urgent list
      if (d.type === 'element') return d.meta.list === 'USL' ? true : false; //Filter out any node that is a concept that isn't of group: threat
      else if (d.type === 'concept') return d.group === 'threat' ? true : false;else return false;
    }); //filter
    //Create a node -> node id mapping: 52 ICH elements, 9 categories & 54 threats

    node_by_id = {};
    nodes.forEach(function (d) {
      node_by_id[d.id] = d;
    }); //Filter out any edges that were associated to the nodes filtered above

    edges = edges.filter(function (d) {
      return node_by_id[d.source] && node_by_id[d.target];
    }); //Second filtering based on connections

    nodes = nodes.filter(function (d) {
      d.degree = edges.filter(function (l) {
        return l.source == d.id || l.target == d.id;
      }).length; //Filter out any element that has 0 degrees

      if (d.type === 'element') return d.degree >= 1 ? true : false; //Keep all threat categories
      else if (threat_ids.indexOf(d.id) >= 0) return true;else {
          //Only keep threats that have a connection to a remaining ICH element
          var connections = edges.filter(function (l) {
            return l.source === d.id && node_by_id[l.target].type === 'element' || l.target === d.id && node_by_id[l.source].type === 'element';
          });
          return connections.length >= 1 ? true : false;
        } //else
    }); //forEach
    //Create a node -> node id mapping

    node_by_id = {};
    nodes.forEach(function (d) {
      node_by_id[d.id] = d;
    }); //What connections remain per node

    linked_to_id = {};
    edges.forEach(function (d) {
      //Save all of the connections to a specific node
      if (!linked_to_id[d.source]) linked_to_id[d.source] = [];
      if (!linked_to_id[d.target]) linked_to_id[d.target] = [];
      linked_to_id[d.source].push(node_by_id[d.target]);
      linked_to_id[d.target].push(node_by_id[d.source]);
    }); //forEach
    //////////////////// THREAT CATEGORIES ///////////////////
    //Connect the translations to the threat_metadata

    var data_translations = _translationsThreat__WEBPACK_IMPORTED_MODULE_6__["default"][language].categories;
    threat_metadata.forEach(function (d) {
      return d.label = data_translations[data_translations.map(function (b) {
        return b.id;
      }).indexOf(d.id)].label;
    }); //Find the threat categories - ones that are not connected to a ICH element

    threats = nodes.filter(function (d) {
      //Is this id in the predefined list
      return threat_ids.indexOf(d.id) >= 0;
    }); //filter

    Object(_data__WEBPACK_IMPORTED_MODULE_8__["makeThreats"])(threats);
    threats.forEach(function (d) {
      d.meta = threat_metadata[threat_ids.indexOf(d.id)];
      d.meta.label = d.label;
      d.title = d.meta.label;
      d.group = 'threat category';
      d.degree = 0;
      threat_by_id[d.id] = d;
    }); //forEach
    //Sort them by the id defined above

    threats = threats.sort(function (a, b) {
      return threat_ids.indexOf(a.id) - threat_ids.indexOf(b.id);
    }); // console.log(threats.map(d => d.label))
    // //Between 3 - 9 & 15 for weakened practice
    ///////////////////////// THREATS ////////////////////////

    var threat_def_ids = threat_definitions.map(function (d) {
      return d.id;
    }); //The remaining concepts are threats

    concepts = nodes.filter(function (d) {
      return d.type === 'element' || threat_ids.indexOf(d.id) >= 0 ? false : true;
    });
    concepts.forEach(function (d) {
      //Get this node's threat category
      var threats_connected = linked_to_id[d.id].filter(function (n) {
        return n.group === 'threat category';
      });
      if (threats_connected.length !== 1) console.log('not 1 threat category', d.id, d.label, threats_connected);
      d.threat_category = threats_connected[0].id;
      d.opacity = 1;
      d.fill = color_threat_scale(d.threat_category);
      concept_by_id[d.id] = d;
      var def = threat_def_ids.indexOf(d.id);
      d.definition = def >= 0 ? threat_definitions[def].definition : 'definition to be added';
    }); //forEach
    //Sort by the threat category and then alphabetically

    concepts = concepts.sort(function (a, b) {
      if (threat_ids.indexOf(a.threat_category) < threat_ids.indexOf(b.threat_category)) return -1;
      if (threat_ids.indexOf(a.threat_category) > threat_ids.indexOf(b.threat_category)) return 1;
      if (a.label < b.label) return -1;
      if (a.label > b.label) return 1;
      return 0;
    }); //sort

    Object(_data__WEBPACK_IMPORTED_MODULE_8__["makeConcepts"])(concepts);
    var concepts_other = concepts.filter(function (d) {
      return d.threat_category !== 'vocabulary_ich_1286';
    }); //Those threats connected to "Weakened practice and transmission (categ)"

    var concepts_weak = concepts.filter(function (d) {
      return d.threat_category === 'vocabulary_ich_1286';
    }); /////////////////////// ICH ELEMENTS /////////////////////

    elements = nodes.filter(function (d) {
      return d.type === 'element';
    });
    elements.forEach(function (d) {
      //Get the threats an element is mapped to (all of weight 2)
      var threats_connected = linked_to_id[d.id].filter(function (n) {
        return n.group === 'threat';
      });
      d.threats = threats_connected.map(function (n) {
        return n.id;
      });
      d.threats = d.threats.sort(function (a, b) {
        var a_threat = threat_ids.indexOf(concept_by_id[a].threat_category);
        var b_threat = threat_ids.indexOf(concept_by_id[b].threat_category);
        if (a_threat < b_threat) return -1;
        if (a_threat > b_threat) return 1;
        return 0;
      }); //sort

      d.threat_categories = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(new _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_2___default.a(d.threats.map(function (l) {
        return concept_by_id[l].threat_category;
      })));
    }); //forEach

    ICH_num_all = elements.length; //Sort alphabetically

    elements = elements.sort(function (a, b) {
      if (a.label < b.label) return -1;
      if (a.label > b.label) return 1;
      return 0;
    });
  } //function dataPreparation
  ////////////////// Calculate node placement //////////////////


  function nodePlacement() {
    var num, start_angle, end_angle;
    var offset = 0.025 * pi2; ////////////////////// ICH ELEMENTS //////////////////////

    num = elements.length;
    start_angle = pi1_2 + offset;
    end_angle = pi2 - (pi1_2 + offset);
    elements.forEach(function (d, i) {
      d.angle = i / (num - 1) * (end_angle - start_angle) + start_angle;
      var sign = i % 2 === 0 ? -1 : 1;
      var rad = radius_elements + sign * radius_elements_offset;
      d.x = rad * Math.cos(d.angle - pi1_2);
      d.y = rad * Math.sin(d.angle - pi1_2);
    }); //forEach
    //////////////////// THREAT CATEGORIES ///////////////////
    // d.title

    num = threats.length;
    var total_width = 2 * radius_threats;
    var space = total_width / num;
    threats.forEach(function (d, i) {
      d.x = (i + 0.5) * space - radius_threats;
      d.y = 0;
      d.space = space;
      d.fill = color_threat_scale(d.id);
      d.opacity = 1; //Get the total number of lines

      ctx_nodes.font = 'normal normal 400 24px ' + font_family;
      d.num_lines = wrapText(ctx_nodes, d.title, 0, 0, space, threat_line_height, false, true); //Get the locations of the circles

      var circle_offset = 10;
      var offset = d.num_lines * threat_line_height;
      d.circle_offset = offset / 2 + circle_offset;
    }); //forEach
    ////////////////////// CONCEPT ARCS //////////////////////
    // d.threat_category, label, definition
    //Roll up the countries into an array of areas and the number of countries per area

    threats_nest = d3__WEBPACK_IMPORTED_MODULE_4__["nest"]().key(function (d) {
      return d.threat_category;
    }).entries(concepts); // offset = 0

    start_angle = -pi1_2 + offset;
    end_angle = pi1_2 - offset;
    var padding = 0.04;
    pie_concept.startAngle(start_angle).endAngle(end_angle).padAngle(padding);
    ctx_nodes.font = 'normal normal 300 19px ' + font_family; //Needed to get the text width

    concept_arcs = pie_concept(threats_nest);
    concept_arcs.forEach(function (d) {
      d.totalAngle = d.endAngle - d.startAngle;
      d.centerAngle = d.startAngle + d.totalAngle / 2;
      d.opacity = 1;
      var num = d.data.values.length;
      var angle_step = (d.totalAngle - 2 * padding) / num;
      var angle = d.startAngle + 1.5 * padding; //Loop over each concept within this threat category

      d.data.values.forEach(function (n) {
        n.angle = angle;
        n.angle_width = angle_step;
        n.x = radius_concept * Math.cos(angle - pi1_2);
        n.y = radius_concept * Math.sin(angle - pi1_2);
        n.r = concept_radius;
        n.width = ctx_nodes.measureText(n.label).width;
        angle = angle + angle_step;
      }); //forEach
    }); //forEach
  } //function nodePlacement
  ////////////////// Calculate edge placement //////////////////


  function edgePlacement() {
    ////////////////////// Concept edges /////////////////////
    //Get all the edges that should run between the threat categories and the threats
    var concept_ids = concepts.map(function (l) {
      return l.id;
    });
    edges_concepts = edges.filter(function (d) {
      if (threat_ids.indexOf(d.source) >= 0 && concept_ids.indexOf(d.target) >= 0) return true;else if (threat_ids.indexOf(d.target) >= 0 && concept_ids.indexOf(d.source) >= 0) return true;else return false;
    }); //filter

    edges_concepts.forEach(function (d) {
      edge_concept_by_id[d.source + ',' + d.target] = true;
      d.source = concept_by_id[d.source]; //Threat

      d.target = threat_by_id[d.target]; //Threat category

      d.sign_pos = -1;
      d.opacity = opacity_concept_default;
    }); //forEach
    ////////////////////// Element edges /////////////////////

    elements.forEach(function (d) {
      d.threat_categories.forEach(function (l) {
        edges_elements.push({
          source: d.id,
          target: l
        }); //push
      }); //forEach
    }); //forEach

    edges_elements.forEach(function (d) {
      edge_concept_by_id[d.source + ',' + d.target] = true;
      d.source = node_by_id[d.source]; //ICH element

      d.target = threat_by_id[d.target]; //Threat category

      d.sign_pos = 1;
      d.opacity = opacity_element_default;
      d.target.degree += 1;
    }); //forEach
    //Calculate the line points for the edges

    line.context(ctx_edges);
    edges_elements.forEach(function (d) {
      var target_y = d.target.y + d.sign_pos * d.target.circle_offset;
      var dx = d.target.x - d.source.x;
      var dy = d.target.y - d.source.y;
      var r_source = radius_elements; //Math.sqrt(sq(d.source.x) + sq(d.source.y))

      var r_source_offset = Math.sqrt(sq(dx) + sq(dy));
      var angle_offset = Math.atan2(dy, dx) - pi1_2 + pi2;
      var cr1 = r_source + cr1_offset_scale(r_source_offset);
      var cx1 = cr1 * Math.cos(d.source.angle - pi1_2);
      var cy1 = cr1 * Math.sin(d.source.angle - pi1_2);
      var angle2 = pi + (angle_offset - pi) * 0.5 * angle2_offset_scale(r_source_offset);
      var cr2 = cr2_offset_scale(r_source_offset);
      var cx2 = d.target.x + cr2 * Math.cos(angle2 - pi1_2);
      var cy2 = target_y + cr2 * Math.sin(angle2 - pi1_2);
      d.line_data = [[d.source.x, d.source.y], [cx1, cy1], [cx2, cy2], [d.target.x, target_y]];
    }); //forEach
  } //function edgePlacement
  //////////////////////////////////////////////////////////////
  ///////////////////////////// Arcs ///////////////////////////
  //////////////////////////////////////////////////////////////
  ////////////////// Prepare the arc functions /////////////////


  function prepareArcs() {
    ///////////////////// Node pie charts ////////////////////
    //Node pie charts
    arc_nodes.outerRadius(node_radius).innerRadius(0).context(ctx_nodes); ///////////////////// Concept threats ////////////////////

    arc_concept.startAngle(function (d) {
      return d.angle - 0.5 * d.angle_width;
    }).endAngle(function (d) {
      return d.angle + 0.5 * d.angle_width;
    }).innerRadius(radius_concept - 2 * concept_radius).outerRadius(function (d) {
      return radius_concept + 2 * concept_radius + d.width + 10;
    });
  } //function prepareArcs
  //////////////////////////////////////////////////////////////
  //////////////////////////// Texts ///////////////////////////
  //////////////////////////////////////////////////////////////
  ////////////// ICH element label outside circle //////////////


  function showElementTitle(ctx, type, text, ICH_num) {
    text = text ? text : ICH_num + ' | ' + _translationsThreat__WEBPACK_IMPORTED_MODULE_6__["default"][language].titles[0]; //Create a white arc on the background so cover the potential fixed title

    if (type === 'hover') {
      ctx.fillStyle = 'white';
      ctx.beginPath();
      ctx.arc(0, 0, radius_elements + 2 * radius_elements_offset + 10, pi * 0.05, pi * 0.95);
      ctx.arc(0, 0, radius_elements_title + 40, pi * 0.95, pi * 0.05, true);
      ctx.closePath();
      ctx.fill();
    } //if
    //Draw a background arc


    ctx.fillStyle = type === 'nodes' ? arc_gradient_nodes : arc_gradient_hover;
    ctx.beginPath();
    ctx.arc(0, 0, radius_elements_title, pi * 0.15, pi * 0.85);
    ctx.arc(0, 20, radius_elements_title - 8, pi * 0.87, pi * 0.17, true);
    ctx.fill(); //18 -8 0.82 0.22
    //Draw the text

    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.font = 'normal normal 400 36px ' + font_family;
    ctx.fillStyle = FILL_COLOR;
    drawTextAlongArc(ctx, text, pi, radius_elements_title, 'down', 0.6, false); // let font_size = fitText(ctx, text, 34, 2*radius_elements_title)
    // ctx.font = "normal normal 400 " + font_size + "px " + font_family
    // ctx.strokeText(text, 0, 50)
    // ctx.fillText(text, 0, 50)
    // ctx.font = "normal normal 400 34px " + font_family
    // wrapText(ctx, text, 0, 250, 2*300, 48, false)
  } //function showElementTitle
  /////////////////// Concept label in circle //////////////////


  function showConceptTitle(ctx, d) {
    ctx.textBaseline = 'bottom';
    ctx.textAlign = 'center';
    ctx.fillStyle = d.fill;
    ctx.strokeStyle = BACK_COLOR;
    ctx.lineWidth = 8; //Add the threat's name
    // let font_size = fitText(ctx, d.label, 44, 2*radius_concept_title)

    var offset = -350;
    ctx.font = 'normal normal 400 ' + 43 + 'px ' + font_family;
    ctx.strokeText(d.label, 0, offset);
    ctx.fillText(d.label, 0, offset); //Add small rectangle below

    var width_text = ctx.measureText(d.label).width * 0.4;
    ctx.strokeRect(0 - width_text / 2, offset, width_text, 5);
    ctx.fillRect(0 - width_text / 2, offset, width_text, 5);
    ctx.font = 'normal normal 400 20px IBM Plex Serif';
    ctx.textBaseline = 'middle';
    var line_height = 30;
    var max_width = 2 * radius_threats * 0.6; // let lines = wrapText(ctx, d.definition, 0, -270, max_width, line_height, false, true) + 0.5
    // //Create background white rect that's a little see through
    // ctx.fillStyle = "rgba(255,255,255,0.6)"
    // ctx.fillRect(-max_width/2, -290, max_width, lines * line_height)
    //Add threat definition below

    ctx.fillStyle = FILL_COLOR;
    wrapText(ctx, d.definition, 0, -270, max_width, line_height, true);
  } //function showConceptTitle
  ///////////////// Smallest fitting font size /////////////////


  function fitText(ctx, text, font_size, width) {
    //Lower the font size until the text fits the canvas
    do {
      font_size -= 1;
      ctx.font = 'normal normal 400 ' + font_size + 'px ' + font_family;
    } while (ctx.measureText(text).width > width);

    return font_size;
  } //function fitText
  ////////////////// Fit & wrap text on canvas /////////////////
  //From: https://codepen.io/bramus/pen/eZYqoO


  function wrapText(ctx, text, x, y, max_width) {
    var line_height = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : threat_line_height;
    var do_stroke = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
    var get_num_lines = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
    var words = text.split(' ');
    var line = '';
    var num_lines = 0;

    for (var n = 0; n < words.length; n++) {
      var new_line = line + words[n] + ' ';
      var new_width = ctx.measureText(new_line).width;

      if (new_width > max_width && n > 0) {
        if (!get_num_lines) {
          if (do_stroke) ctx.strokeText(line.trim(), x, y);
          ctx.fillText(line.trim(), x, y);
        } //if


        num_lines += 1;
        line = words[n] + ' ';
        y += line_height;
      } else line = new_line;
    } //for n


    if (!get_num_lines) {
      if (do_stroke) ctx.strokeText(line.trim(), x, y);
      ctx.fillText(line.trim(), x, y);
    } //if


    num_lines += 1;
    if (get_num_lines) return num_lines;
  } //function wrapText
  ////////////////////// Draw curved text //////////////////////


  function drawTextAlongArc(ctx, str, angle, radius, side) {
    var kerning = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0.6;
    var startAngle = side === 'up' ? angle : angle - pi;
    if (side === 'up') str = str.split('').reverse().join(''); // Reverse letters
    //Rotate 50% of total angle for center alignment

    for (var j = 0; j < str.length; j++) {
      var charWid = ctx.measureText(str[j]).width;
      startAngle += (charWid + (j === str.length - 1 ? 0 : kerning)) / radius / 2;
    } //for j
    //Draw thick white stroke as background


    ctx.strokeStyle = BACK_COLOR;
    ctx.lineWidth = 22;
    ctx.lineCap = 'butt';
    ctx.beginPath();
    ctx.arc(0, 0, radius_elements_title + 4, pi1_2 - startAngle - 0.01, pi1_2 + startAngle + 0.01);
    ctx.stroke(); //Draw the text

    ctx.beginPath();
    ctx.save();
    ctx.rotate(startAngle);

    for (var n = 0; n < str.length; n++) {
      var _charWid = ctx.measureText(str[n]).width / 2; // half letter
      //Rotate half letter


      ctx.rotate(-_charWid / radius); // ctx.strokeText(str[n], 0, (side === "up" ? -1 : 1) * radius)

      ctx.fillText(str[n], 0, (side === 'up' ? -1 : 1) * radius); //Rotate another half letter

      ctx.rotate(-(_charWid + kerning) / radius);
    } //for n


    ctx.restore();
  } //function drawTextAlongArc
  //////////////////////////////////////////////////////////////
  //////////////// Hidden hover element functions //////////////
  //////////////////////////////////////////////////////////////
  /////////////// Draw the hidden mouseover nodes //////////////


  function drawHiddenElements() {
    //Draw the invisible ICH element circles on the SVG
    hover_ich = g_scale.append('g').attr('class', 'element-hover-group').selectAll('.element-circle').data(elements).enter().append('circle').attr('class', 'element-circle').attr('cx', function (d) {
      return d.x;
    }).attr('cy', function (d) {
      return d.y;
    }).attr('r', node_radius).style('fill', 'none') // .style("opacity", "0.4")
    .style('pointer-events', 'all').style('cursor', 'pointer'); //Draw the invisible rectangles of the threat categories

    hover_category = g_scale.append('g').attr('class', 'category-hover-group').selectAll('.category-rect').data(threats).enter().append('rect').attr('class', 'category-rect').attr('x', function (d) {
      return d.x - d.space / 2;
    }).attr('y', function (d) {
      return d.y - (d.num_lines + 1) * threat_line_height / 2;
    }).attr('width', function (d) {
      return d.space;
    }).attr('height', function (d) {
      return (d.num_lines + 1) * threat_line_height;
    }).style('fill', 'none') // .style("opacity", "0.4")
    .style('pointer-events', 'all').style('cursor', 'pointer'); //Draw the invisible arcs over the outside threats

    hover_concept = g_scale.selectAll('.threat-hover-path').data(concepts).enter().append('path').attr('class', 'threat-hover-path').attr('d', arc_concept).style('fill', 'none') // .style("opacity", "0.4")
    .style('pointer-events', 'all').style('cursor', 'pointer');
  } //function drawHiddenElements
  /////////////// Set the mouseover functionality //////////////


  function setHiddenHovers() {
    hover_ich.on('click', function (d) {
      mouseClick(d, 'element');
      showModal(d);
    });
    hover_category.on('click', function (d) {
      return mouseClick(d, 'category');
    }).on('mouseover', function (d) {
      if (!click_active) mouseOverCategory(d);else {
        clearCanvas([ctx_hover]);
        ctx_hover.textBaseline = 'middle';
        ctx_hover.textAlign = 'center';
        ctx_hover.font = 'normal normal 400 24px ' + font_family;
        drawCategories(ctx_hover, d, 1);
      }
    }).on('mouseout', function (d) {
      if (!click_active) mouseOverReset();else clearCanvas([ctx_hover]);
    });
    hover_concept.on('click', function (d) {
      return mouseClick(d, 'concept');
    }).on('mouseover', function (d) {
      if (!click_active) mouseOverConcept(d);else {
        clearCanvas([ctx_hover]);
        ctx_hover.textBaseline = 'middle';
        ctx_hover.font = 'normal normal 300 19px ' + font_family;
        drawConcepts(ctx_hover, d, 1);
        showConceptTitle(ctx_hover, d);
      } //else
    }).on('mouseout', function (d) {
      if (!click_active) mouseOverReset();else clearCanvas([ctx_hover]);
    });
  } //function setHiddenHovers
  //////////////////////////////////////////////////////////////
  //////////////////// Node drawing functions //////////////////
  //////////////////////////////////////////////////////////////
  /////////////////////// Draw the nodes ///////////////////////


  function drawElements(ctx, d) {
    var opacity = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    opacity = opacity ? opacity : d.opacity; //Draw the circles as mini pie charts

    var arcs = pie_nodes(d.threat_categories);
    ctx.save();
    ctx.translate(d.x, d.y);
    ctx.rotate(d.angle); //Draw each slice

    arcs.forEach(function (a) {
      ctx.beginPath();
      ctx.moveTo(0, 0); //Needed to make sure Chrome keeps them as circles even at small sizes

      arc_nodes.context(ctx)(a);
      ctx.closePath();
      var c = chroma_js__WEBPACK_IMPORTED_MODULE_5___default()(color_threat_scale(a.data));
      c.alpha(opacity);
      ctx.fillStyle = c.css();
      ctx.fill();
    }); //forEach
    //Outside white stroke

    ctx.strokeStyle = chroma_js__WEBPACK_IMPORTED_MODULE_5___default()('white').alpha(opacity).css();
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(0, 0, node_radius + 1.2, 0, pi2);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  } //function drawElements
  ////////////////// Draw the concept circles //////////////////


  function drawConcepts(ctx, d, opacity) {
    //At what angle different from 0 to flip the text direction
    var flip = 0; //-0.1 * pi

    opacity = opacity ? opacity : d.opacity; //Rotate and then move the canvas origin to the concept "dot" location

    ctx.save();
    ctx.rotate(d.angle > 0 + flip ? d.angle - pi1_2 : d.angle + pi1_2);
    ctx.translate((d.angle > 0 + flip ? 1 : -1) * radius_concept, 0); //Draw the large degree based concept circle

    ctx.globalCompositeOperation = 'multiply';
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, scale_concept_radius(d.degree), 0, pi2);
    ctx.closePath();
    ctx.fillStyle = chroma_js__WEBPACK_IMPORTED_MODULE_5___default()(d.fill).alpha(Math.max(0.05, opacity / 5)).css();
    ctx.fill();
    ctx.globalCompositeOperation = 'source-over'; //Draw the small concept circle

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, concept_radius, 0, pi2);
    ctx.closePath();
    ctx.fillStyle = chroma_js__WEBPACK_IMPORTED_MODULE_5___default()(d.fill).alpha(opacity).css();
    ctx.fill(); //Draw the text

    ctx.textAlign = d.angle > 0 + flip ? 'start' : 'end';
    var color_text = chroma_js__WEBPACK_IMPORTED_MODULE_5___default.a.mix('black', d.fill, 0.1);
    ctx.font = "24px Helvetia";
    ctx.fillStyle = chroma_js__WEBPACK_IMPORTED_MODULE_5___default()(d.fill).alpha(opacity).css();
    ctx.translate((d.angle > 0 + flip ? 1 : -1) * (concept_radius + 25), 0);
    ctx.fillText(d.label, 0, -2);
    ctx.restore();
  } //function drawConcepts
  ///////////////// Draw the threat categories /////////////////


  function drawCategories(ctx, d, opacity) {
    opacity = opacity ? opacity : d.opacity; //Background degree circle

    ctx.globalCompositeOperation = 'multiply';
    ctx.beginPath();
    ctx.moveTo(d.x, d.y);
    ctx.arc(d.x, d.y, scale_threat_radius(d.degree), 0, pi2);
    ctx.closePath();
    ctx.fillStyle = chroma_js__WEBPACK_IMPORTED_MODULE_5___default()(d.fill).alpha(opacity / 6).css();
    ctx.fill();
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = chroma_js__WEBPACK_IMPORTED_MODULE_5___default()(d.fill).alpha(opacity).css(); // //Small circles around the text
    // ctx.beginPath()
    // //Top circle
    // ctx.moveTo(d.x, d.y - d.circle_offset)
    // ctx.arc(d.x, d.y - d.circle_offset, threat_circle_radius, 0, pi2)
    // //Bottom circle
    // ctx.moveTo(d.x, d.y + d.circle_offset)
    // ctx.arc(d.x, d.y + d.circle_offset, threat_circle_radius, 0, pi2)
    // ctx.closePath()
    // ctx.fill()
    //Rectangles on top and bottom

    var space = d.space * 0.4;
    ctx.fillRect(d.x - space / 2, d.y - d.circle_offset - 2, space, 4);
    ctx.fillRect(d.x - space / 2, d.y + d.circle_offset - 2, space, 4); //Draw the text
    // let color_text = chroma.mix('black', d.fill, 0.9)

    ctx.fillStyle = chroma_js__WEBPACK_IMPORTED_MODULE_5___default()(d.fill).alpha(opacity).css(); //Draw the text over multiple lines

    wrapText(ctx, d.title, d.x, d.y - (d.num_lines - 1) * threat_line_height / 2 - 2.5, d.space);
  } //function drawCategories
  ////////// Add ring around hovered/clicked category //////////


  function showCategoryRing(ctx, d, opacity) {
    ctx.globalCompositeOperation = 'multiply';
    ctx.beginPath();
    ctx.arc(d.x, d.y, Math.max(d.space / 2, scale_threat_radius(d.degree)) + 14, 0, pi2);
    ctx.closePath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = chroma_js__WEBPACK_IMPORTED_MODULE_5___default()(d.fill).alpha(opacity).css();
    ctx.stroke();
    ctx.globalCompositeOperation = 'source-over';
  } //function showCategoryRing
  //////////////////////////////////////////////////////////////
  //////////////////// Edge drawing functions //////////////////
  //////////////////////////////////////////////////////////////
  ///////////////// Draw the ICH element edges /////////////////


  function drawEdgesElements() {
    // ctx_edges.globalCompositeOperation = "multiply" - makes it all tooooo slow
    edges_elements.forEach(function (d) {
      var stroke = color_threat_scale(d.target.id);
      ctx_edges.strokeStyle = chroma_js__WEBPACK_IMPORTED_MODULE_5___default()(stroke).alpha(d.opacity).css();
      ctx_edges.beginPath();
      line(d.line_data);
      ctx_edges.stroke();
    }); //forEach
    // ctx_edges.globalCompositeOperation = "source-over"
  } //function drawEdgesElements
  /////////////////// Draw the concept edges ///////////////////


  function drawEdgesConcepts() {
    ctx_edges.globalCompositeOperation = 'multiply';
    edges_concepts.forEach(function (d) {
      var stroke = color_threat_scale(d.target.id);
      ctx_edges.strokeStyle = chroma_js__WEBPACK_IMPORTED_MODULE_5___default()(stroke).alpha(d.opacity).css();
      ctx_edges.beginPath();
      ctx_edges.moveTo(d.source.x, d.source.y);
      var target_y = d.target.y + d.sign_pos * d.target.circle_offset;
      if (d.center) drawCircleArc(ctx_edges, d.center, d.r, d.source, d.target, d.sign, target_y);else ctx_edges.lineTo(d.target.x, target_y);
      ctx_edges.stroke();
    }); //forEach

    ctx_edges.globalCompositeOperation = 'source-over';
  } //function drawEdgesConcepts
  ////////////////// Draw a curved edge line ///////////////////


  function drawCircleArc(ctx, c, r, p1, p2, side, target_y) {
    var ang1 = Math.atan2(p1.y - c.y, p1.x - c.x);
    var ang2 = Math.atan2(target_y - c.y, p2.x - c.x);
    ctx.arc(c.x, c.y, r, ang1, ang2, side);
  } //function drawCircleArc
  /////////// Calculate the center for each edge arc ///////////


  function calculateEdgeCenters(edges_data) {
    //Calculates the curve factor of the upper lines outside of the center group
    var scale_curve = d3__WEBPACK_IMPORTED_MODULE_4__["scaleLinear"]() //Slightly magical-numbers like....
    .domain([0, 0.1 * radius_threats, radius_threats]).range([50, 2, 1]); //Calculates the curve factor of the upper lines of the center group

    var scale_curve_center = d3__WEBPACK_IMPORTED_MODULE_4__["scalePow"]() //Slightly magical-numbers like....
    .exponent(0.3).domain([0, 0.45 * radius_threats]).range([35, 2]).clamp(true);
    edges_data.forEach(function (d) {
      var curve_factor;
      var target_y = d.target.y + d.sign_pos * d.target.circle_offset; //Find a good radius

      if (d.target.x !== 0) curve_factor = scale_curve(Math.abs(d.target.x));else curve_factor = scale_curve_center(Math.abs(d.target.x - d.source.x));
      d.r = Math.sqrt(sq(d.target.x - d.source.x) + sq(target_y - d.source.y)) * curve_factor; //Find center of the arc function

      var centers = findCenters(d.r, d.source, d.target, target_y);
      if (d.source.y < 0) d.sign = d.target.x < d.source.x ? 1 : 0; //1 flows from center to right
      else d.sign = d.target.x < d.source.x ? 0 : 1;
      d.center = d.sign ? centers.c2 : centers.c1;
    }); //forEach
    //////////// Calculate center for curved edges ///////////
    //https://stackoverflow.com/questions/26030023
    //http://jsbin.com/jutidigepeta/3/edit?html,js,output

    function findCenters(r, p1, p2, target_y) {
      // pm is middle point of (p1, p2)
      var pm = {
        x: 0.5 * (p1.x + p2.x),
        y: 0.5 * (p1.y + target_y)
      }; // compute leading vector of the perpendicular to p1 p2 == C1C2 line

      var perpABdx = -(target_y - p1.y);
      var perpABdy = p2.x - p1.x; // normalize vector

      var norm = Math.sqrt(sq(perpABdx) + sq(perpABdy));
      perpABdx /= norm;
      perpABdy /= norm; // compute distance from pm to p1

      var dpmp1 = Math.sqrt(sq(pm.x - p1.x) + sq(pm.y - p1.y)); // sin of the angle between { circle center,  middle , p1 }

      var sin = dpmp1 / r; // is such a circle possible ?

      if (sin < -1 || sin > 1) return null; // no, return null
      // yes, compute the two centers

      var cos = Math.sqrt(1 - sq(sin)); // build cos out of sin

      var d = r * cos;
      var res1 = {
        x: pm.x + perpABdx * d,
        y: pm.y + perpABdy * d
      };
      var res2 = {
        x: pm.x - perpABdx * d,
        y: pm.y - perpABdy * d
      };
      return {
        c1: res1,
        c2: res2
      };
    } //function findCenters

  } //function calculateEdgeCenters
  //////////////////////////////////////////////////////////////
  /////////////////// Canvas drawing functions /////////////////
  //////////////////////////////////////////////////////////////
  ////////////////////// Clear all canvases ////////////////////


  function clearCanvas(ctxs) {
    ctxs.forEach(function (d) {
      d.clearRect((-margin.left - width / 2) / scale_factor, (-margin.top - height / 2) / scale_factor, total_width / scale_factor, total_height / scale_factor);
    });
  } //function clearCanvas
  /////////////// Draw all parts on the canvases ///////////////


  function drawCanvas() {
    //Clear everything
    clearCanvas([ctx_edges, ctx_nodes, ctx_hover]); //Draw the edges between the categories and the threats

    ctx_edges.lineWidth = 3;
    drawEdgesConcepts(); //Draw the edges between the categories and the ICH elements

    drawEdgesElements(); //Draw threat categories

    ctx_nodes.textBaseline = 'middle';
    ctx_nodes.textAlign = 'center';
    ctx_nodes.font = 'normal normal 400 24px ' + font_family;
    threats.forEach(function (d) {
      drawCategories(ctx_nodes, d);
    }); //Draw the other concepts around the top outside

    ctx_nodes.textBaseline = 'middle';
    ctx_nodes.font = 'normal normal 300 19px ' + font_family;
    concepts.forEach(function (d) {
      drawConcepts(ctx_nodes, d);
    }); //Draw the ICH elements around the bottom outside

    elements.forEach(function (d) {
      drawElements(ctx_nodes, d);
    }); //Show the title

    if (mouse_hover_active) {
      if (hover_type === 'element') showElementTitle(ctx_nodes, 'nodes', current_hover.label);else showElementTitle(ctx_nodes, 'nodes', null, ICH_num); //Show threat concept title when hovered over top threat

      if (hover_type === 'concept') showConceptTitle(ctx_nodes, current_hover);
      if (hover_type === 'category') showCategoryRing(ctx_nodes, current_hover, 1);
    } else if (click_active) {
      if (hover_type === 'element') showElementTitle(ctx_nodes, current_click.label, 'nodes');else if (hover_type === 'concept') showConceptTitle(ctx_nodes, current_click);
    } else {
      showElementTitle(ctx_nodes, 'nodes', null, ICH_num_all);
    } //else

  } //function drawCanvas
  //////////////////////////////////////////////////////////////
  //////////////////// Mouse click functions ///////////////////
  //////////////////////////////////////////////////////////////


  function mouseClick(d, click_type) {
    if (d3__WEBPACK_IMPORTED_MODULE_4__["event"]) d3__WEBPACK_IMPORTED_MODULE_4__["event"].stopPropagation();
    click_active = true; //Call the correct drawing function

    if (click_type === 'element') mouseOverElement(d);else if (click_type === 'concept') mouseOverConcept(d);else if (click_type === 'category') mouseOverCategory(d);
    current_click = d;
  } //function mouseClick
  ////////////////////// Manually fix node /////////////////////


  chart.fixNode = function (node_id) {
    //Check if it's in the data
    var node = node_by_id[node_id];
    if (node) mouseClick(node, 'element');
  }; //function fixNode
  //////////////////////////////////////////////////////////////
  //////////////////// Mouse over functions ////////////////////
  //////////////////////////////////////////////////////////////
  /////////////////// Mouse over ICH elements //////////////////


  function findElement() {
    var m = d3__WEBPACK_IMPORTED_MODULE_4__["mouse"](this);
    var x = (m[0] - total_width / 2) / scale_factor;
    var y = (m[1] - total_height / 2) / scale_factor;
    var r = Math.sqrt(x * x + y * y); //Only continue of the mouse is somewhere near the ICH element arc

    if (y > 70 && r > radius_elements - 2 * radius_elements_offset && r < radius_elements + 2 * radius_elements_offset) {
      //Search for nearby ICH element
      var found = diagram.find(x, y, node_radius * 2 / scale_factor); //A match is found and it's a new one

      if (found && current_hover !== found.data) {
        if (!click_active) mouseOverElement(found.data); //If a click is active and you hover over another element
        else if (click_active) {
            current_hover = found.data;
            clearCanvas([ctx_hover]);
            drawElements(ctx_hover, found.data, 1);
            showElementTitle(ctx_hover, 'hover', found.data.label);
          } //else if
      } //if
      //When hovering away from an element and no click is active
      else if (!click_active && !found && mouse_hover_active) mouseOverReset(); //When a click is active and you hover away
        else if (click_active && !found) {
            clearCanvas([ctx_hover]);
            current_hover = null;
          } //else if

    } //if
    else if (click_active && y > 70 && r > radius_elements - 2 * radius_elements_offset - 40) clearCanvas([ctx_hover]);else if (!click_active && mouse_hover_active && hover_type === 'element') mouseOverReset();
  } //function findElement


  function mouseOverElement(d) {
    //If the canvas fade is still active, stop it
    if (timer_draw) timer_draw.stop();
    mouse_hover_active = true;
    hover_type = 'element';
    current_hover = d;
    var id = d.id; //Draw the edges from element to threat category

    edges_elements.forEach(function (l) {
      l.opacity = l.source.id === id ? 0.5 : 0;
    }); //Draw the edges from the threat category to the threats

    edges_concepts.forEach(function (l) {
      l.opacity = d.threats.indexOf(l.source.id) >= 0 && d.threat_categories.indexOf(l.target.id) >= 0 ? 0.5 : 0;
    }); //Draw the ICH circles

    elements.forEach(function (n) {
      n.opacity = n.id === id ? 1 : 0.1;
    }); //Draw connected threat categories

    threats.forEach(function (n) {
      n.opacity = d.threat_categories.indexOf(n.id) >= 0 ? 1 : 0.1;
    }); //Draw connected threats

    concepts.forEach(function (n) {
      n.opacity = d.threats.indexOf(n.id) >= 0 ? 1 : 0.1;
    }); //Draw it all

    drawCanvas();
  } //function mouseOverElement
  ///////////////// Mouse over threat category /////////////////


  function mouseOverCategory(d) {
    if (timer_draw) timer_draw.stop();
    mouse_hover_active = true;
    hover_type = 'category';
    current_hover = d;
    var id = d.id; //Draw the edges from threat category to the elements

    edges_elements.forEach(function (l) {
      l.opacity = l.target.id === id ? 0.5 : 0;
    }); //Draw the edges from the threat category to the threats

    edges_concepts.forEach(function (l) {
      l.opacity = l.target.id === id ? 0.5 : 0;
    }); //Draw the ICH circles

    elements.forEach(function (n) {
      n.opacity = n.threat_categories.indexOf(id) >= 0 ? 1 : 0.1;
    });
    ICH_num = elements.filter(function (n) {
      return n.threat_categories.indexOf(id) >= 0;
    }).length; //Draw connected threat categories

    threats.forEach(function (n) {
      n.opacity = n.id === id ? 1 : 0.1;
    }); //Draw connected threats

    concepts.forEach(function (n) {
      n.opacity = n.threat_category === id ? 1 : 0.1;
    }); //Draw it all

    drawCanvas();
  } //function mouseOverElement
  ///////////////////// Mouse over threats /////////////////////


  function mouseOverConcept(d) {
    //If the canvas fade is still active, stop it
    if (timer_draw) timer_draw.stop();
    mouse_hover_active = true;
    hover_type = 'concept';
    current_hover = d;
    var id = d.id; //Draw the edges from the threat to the threat category

    edges_concepts.forEach(function (l) {
      l.opacity = l.source.id === id ? 0.5 : 0;
    }); //Draw the edges from connected elements to threat category

    edges_elements.forEach(function (l) {
      l.opacity = l.source.threats.indexOf(id) >= 0 && l.target.id === d.threat_category ? 0.5 : 0;
    }); //Draw the connected ICH circles

    elements.forEach(function (n) {
      n.opacity = n.threats.indexOf(id) >= 0 ? 1 : 0.1;
    });
    ICH_num = elements.filter(function (n) {
      return n.threats.indexOf(id) >= 0;
    }).length; //Draw connected threat categories

    threats.forEach(function (n) {
      n.opacity = n.id === d.threat_category ? 1 : 0.1;
    }); //Draw threats

    concepts.forEach(function (n) {
      n.opacity = n.id === id ? 1 : 0.1;
    }); //Draw it all

    drawCanvas();
  } //function mouseOverConcept
  //////////////////////////////////////////////////////////////
  ///////////////////// Mouse out functions ////////////////////
  //////////////////////////////////////////////////////////////


  function mouseOverReset() {
    if (timer_draw) timer_draw.stop();
    mouse_hover_active = false;
    hover_type = null;
    current_hover = null; //Animate the opacities coming back

    fadeCanvasBackIn();
  } //function mouseOverReset
  /////////////////// Fade everything back in //////////////////


  function fadeCanvasBackIn() {
    //Transition settings
    var duration = 250;
    var ease = d3__WEBPACK_IMPORTED_MODULE_4__["easeQuadInOut"]; //Calculate the opacity interpolator

    nodes.forEach(function (n) {
      n.interpolate_opacity = d3__WEBPACK_IMPORTED_MODULE_4__["interpolate"](n.opacity, 1);
    });
    edges_concepts.forEach(function (l) {
      l.interpolate_opacity = d3__WEBPACK_IMPORTED_MODULE_4__["interpolate"](l.opacity, opacity_concept_default);
    });
    edges_elements.forEach(function (l) {
      l.interpolate_opacity = d3__WEBPACK_IMPORTED_MODULE_4__["interpolate"](l.opacity, opacity_element_default);
    }); //Fade everything back in

    timer_draw = d3__WEBPACK_IMPORTED_MODULE_4__["timer"](function (elapsed) {
      //How far along the total duration are we (taking the easing into account)
      var t = ease(Math.min(1, elapsed / duration)); //Set new opacities

      nodes.forEach(function (n) {
        n.opacity = n.interpolate_opacity(t);
      });
      edges_concepts.forEach(function (l) {
        l.opacity = l.interpolate_opacity(t);
      });
      edges_elements.forEach(function (l) {
        l.opacity = l.interpolate_opacity(t);
      }); //Draw the canvas

      drawCanvas(); //Stop when the duration has been reached

      if (elapsed >= duration) timer_draw.stop();
    }); //timer
  } //function fadeCanvasBackIn
  //////////////////////////////////////////////////////////////
  ///////////////////// Save result to PNG /////////////////////
  //////////////////////////////////////////////////////////////


  chart.saveImage = function () {
    var width_print = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;
    var units = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'cm';
    ///////////// Calculate new sizes /////////////
    //https://www.pixelcalculator.com/index.php?lang=en&dpi1=300&FS=2
    var dpi_scale = 300 / 2.54; //300 dpi / 2.54cm
    //Calculate the new scale factor

    var sf_new;
    if (units === 'px') sf_new = width_print / width;else sf_new = width_print * dpi_scale / width;
    var sf_scale = sf_new / sf; //Check sizes

    if (sf_new * width * sf_new * height > 268435456) Error('requested canvas is probably too big for the browser to handle');
    sf = sf_new;
    sf_set = true; ///////////// Resize everything /////////////
    //Resize the actual canvas to this

    var resizeDone = new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve, reject) {
      var result = chart.resize();
      if (result === 1) resolve('resizing done');else reject(Error('Resizing broke'));
    }); //Do the next step after the resizing is done

    resizeDone.then(function (result) {
      createPrintCanvas(); //Resize back

      sf = sf_original;
      sf_set = sf_set_original;
      chart.resize();
    }, function (error) {
      console.log(error);
    });

    function createPrintCanvas() {
      //Create "off-screen" canvas to combine the different layers
      var canvas_save = document.createElement('canvas');
      canvas_save.id = 'canvas-print';
      var ctx_save = canvas_save.getContext('2d');
      canvas_save.width = total_width * sf;
      canvas_save.height = total_height * sf; //Draw all the layers onto 1 canvas

      ctx_save.drawImage(canvas_edges.node(), 0, 0, canvas_save.width, canvas_save.height);
      ctx_save.drawImage(canvas_nodes.node(), 0, 0, canvas_save.width, canvas_save.height);
      ctx_save.drawImage(canvas_hover.node(), 0, 0, canvas_save.width, canvas_save.height); //Get the image
      // a.href = canvas_save.toDataURL("image/png") //won' work, too large a URL

      try {
        //Automatically download the canvas
        //https://stackoverflow.com/questions/35480112
        //Doesn't work in IE & Edge
        canvas_save.toBlob(function (blob) {
          var a = document.createElement('a');
          var url = URL.createObjectURL(blob);
          a.href = url;
          a.download = 'ICH_Threats.png';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        }, 'image/png');
      } catch (err) {
        //Manually download the canvas
        document.body.appendChild(canvas_save);
        document.body.style.overflow = 'auto';
        window.scrollTo(0, document.body.scrollHeight);
        console.log('Unable to automatically download the file due to photo and wrong URL');
      } //try-catch

    } //function createPrintCanvas

  }; //function saveImage
  //////////////////////////////////////////////////////////////
  /////////////////////// Helper functions /////////////////////
  //////////////////////////////////////////////////////////////


  function sq(x) {
    return x * x;
  }

  function roundTo(n, digits) {
    var multiplicator = Math.pow(10, digits);
    n = _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default()((n * multiplicator).toFixed(11));
    return Math.round(n) / multiplicator;
  } //function roundTo
  ///////////////// Find the device pixel ratio ////////////////


  function getPixelRatio(ctx) {
    //From https://www.html5rocks.com/en/tutorials/canvas/hidpi/
    var devicePixelRatio = window.devicePixelRatio || 1;
    var backingStoreRatio = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
    var ratio = devicePixelRatio / backingStoreRatio;
    return ratio;
  } //function getPixelRatio
  ////////////////// Retina non-blurry canvas //////////////////


  function crispyCanvas(canvas, ctx) {
    canvas.attr('width', Math.round(sf * total_width)).attr('height', Math.round(sf * total_height)).style('width', "".concat(total_width, "px")).style('height', "".concat(total_height, "px"));
    ctx.scale(sf * scale_factor, sf * scale_factor);
    ctx.translate((margin.left + width / 2) / scale_factor, (margin.top + height / 2) / scale_factor);
  } //function crispyCanvas
  //////////////////////////////////////////////////////////////
  //////////////////// Accessor functions //////////////////////
  //////////////////////////////////////////////////////////////


  chart.width = function (value) {
    if (!arguments.length) return width;
    width = value;
    return chart;
  };

  chart.height = function (value) {
    if (!arguments.length) return height;
    height = value;
    return chart;
  };

  chart.nodeRadius = function (value) {
    if (!arguments.length) return node_radius;
    node_radius = value;
    return chart;
  }; //function nodeRadius


  chart.scaleFactor = function (value) {
    if (!arguments.length) return sf;
    sf = value;
    sf_original = sf;
    sf_set = true;
    sf_set_original = true;
    return chart;
  }; //function scaleFactor


  chart.zoomFactor = function (value) {
    if (!arguments.length) return scale_multiplier;
    scale_multiplier = value;
    return chart;
  }; //function zoomFactor


  chart.showModal = function (_) {
    return arguments.length ? (showModal = _, chart) : showModal;
  }; //function showModal


  return chart;
} //function createThreatVisual


/* harmony default export */ __webpack_exports__["default"] = (createThreatVisual);

/***/ })

})
//# sourceMappingURL=1.b339e926ffcfbf971f29.hot-update.js.map