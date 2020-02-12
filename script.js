Plotly.d3.csv('https://raw.githubusercontent.com/cookm346/SeinSpace/master/pca3episodes_transformed.csv', function(err, rows){
function unpack(rows, key) {
	return rows.map(function(row)
	{ return row[key]; });}

var trace1 = {
	x:unpack(rows, 'PC1'), y: unpack(rows, 'PC2'), z: unpack(rows, 'PC3'),
	mode: 'markers',
  text: unpack(rows, 'episode'),
	marker: {
		size: 12,
		color: unpack(rows, 'rating'),
		opacity: 0.8},
	type: 'scatter3d'
};

var data = [trace1];
var layout = {
	autosize: false,
	width: 1000,
	height: 1000,
	margin: {
    l: 50,
    r: 50,
    b: 100,
    t: 100,
    pad: 4
  }};
Plotly.newPlot('myDiv', data, layout);
});