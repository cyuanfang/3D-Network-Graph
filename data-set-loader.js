function getGraphDataSets() {

    const loadBlocks = function(Graph) {
        Graph
          .nodeLabel('user')
          .nodeAutoColorBy('group')
          .nodeVal('score')
          .jsonUrl('block.json');
    };
    //loadBlocks.description = "<em>Blocks</em> data (<a href='https://bl.ocks.org/mbostock/afecf1ce04644ad9036ca146d2084895'>afecf1ce04644ad9036ca146d2084895</a>)";

    //


    const loadMiserables = function(Graph) {
        Graph
          .nodeLabel('user')
          .nodeAutoColorBy('group')
          .nodeVal('size')
          .jsonUrl('misera.json');
    };
    //loadMiserables.description = "<em>Les Miserables</em> data (<a href='https://bl.ocks.org/mbostock/4062045'>4062045</a>)";

    //

    const loadD3Dependencies = function(Graph) {
        Graph
          .nodeLabel('user')
          .nodeAutoColorBy('group')
          .nodeVal('size')
          .jsonUrl('blocka.json');
    };
    //loadD3Dependencies.description = "<em>D3 dependencies</em> data (<a href='https://bl.ocks.org/mbostock/9a8124ccde3a4e9625bc413b48f14b30'>9a8124ccde3a4e9625bc413b48f14b30</a>)";

    //

    const loadFast10Y = function(Graph) {
        Graph
          .nodeLabel('user')
          .nodeAutoColorBy('group')
          .nodeVal('size')
          .jsonUrl('blockb.json');
    };
    //loadD3Dependencies.description = "<em>D3 dependencies</em> data (<a href='https://bl.ocks.org/mbostock/9a8124ccde3a4e9625bc413b48f14b30'>9a8124ccde3a4e9625bc413b48f14b30</a>)";

    //

    return [loadMiserables, loadBlocks, loadD3Dependencies, loadFast10Y];
}