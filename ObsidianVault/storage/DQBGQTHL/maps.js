var drawSingleMap = function (id, data) {
  var width = 960
  var height = 450
  var millisResizeCircles = 0

  var zoom = d3
    .zoom()
    .extent([
      [0, 0],
      [width, height]
    ])
    .scaleExtent([1, 96])
    .translateExtent([
      [0, 0],
      [width, height]
    ])

  var svg = d3
    .select('#' + id)
    .append('svg')
    .attr('height', height)
    .attr('width', width)
    .attr('viewBox', '0 0 ' + width + ' ' + height)
    .on('touchstart', function () { }) //touchstart handler to workaround a chrome mobile issue
    .call(zoom.on('zoom', doZoom))

  var tooltip = d3
    .select('body')
    .append('div')
    .attr('class', 'tooltip')
    .attr('id', 'tooltip' + id)
    .classed('tooltip-off', true)

  // Zoom in 
  d3.select('#' + id + '-zoomin').on('click', function () {
    zoom.scaleBy(svg.transition().duration(200), 1.2)
  })

  // Zoom out 
  d3.select('#' + id + '-zoomout').on('click', function () {
    zoom.scaleBy(svg.transition().duration(200), 0.8)
  })

  function calculateRadius(percentage) {
    var zoom = 1
    if (d3.event && d3.event.transform) {
      zoom = d3.event.transform.k
    }
    var factor = 9 / (zoom / 2)
    if (factor > 9) factor = 9
    if (factor < 5) factor = 5
    var result = factor * Math.sqrt(percentage / Math.PI)
    return result
  }

  function doZoom() {
    var g = svg.selectAll('g')
    g.attr('transform', d3.event.transform)
    resizeCircles()
  }

  function resizeCircles() {
    svg.selectAll('circle').each(function () {
      d3.select(this)
        .transition()
        .duration(millisResizeCircles)
        .attr(
          'r',
          calculateRadius(data[d3.select(this).datum().properties['ISO_A2']]) ||
          0
        )
    })
  }

  function tooltipOff() {
    tooltip.attr('class', 'tooltip tooltip_off')
  }

  function tooltipOn(text) {
    tooltip.attr('class', 'tooltip tooltip_on p-ff-source')
    tooltip
      .html(text)
      .style('top', d3.event.pageY + 16 + 'px')
      .style('left', d3.event.pageX + 16 + 'px')
  }

  function renderPercentage(val) {
    if (val === 0) return '0.00'
    if (val >= 0.005) return val.toFixed(2)
    if (val < 0.005 && val >= 0.0005) return val.toFixed(3)
    return val.toFixed(4)
  }

  function drawMap(err, world) {
    if (err) console.log(err)

    //COUNTRIES
    svg
      .append('g')
      .selectAll('path')
      .data(topojson.feature(world, world.objects.countries).features)
      .enter()
      .append('path')
      .attr('class', 'ct')
      .attr('d', path)

    //CIRCLES
    svg
      .append('g')
      .selectAll('circle')
      .data(topojson.feature(world, world.objects.centroids).features)
      .enter()
      .append('circle')
      .attr('class', 'ci')
      .attr('cx', function (d) {
        return myProjection(d.geometry.coordinates)[0]
      })
      .attr('cy', function (d) {
        return myProjection(d.geometry.coordinates)[1]
      })
      .on('mousemove', function (d) {
        if (d.properties) {
          var value = data[d.properties['ISO_A2']]
          if (!value) value = 0
          tooltipOn(
            d.properties['NAME_EN'] +
            ' <b class="p-ff-roboto-slab-bold">' +
            renderPercentage(value) +
            '%</b>'
          )
        } else {
          tooltipOff()
        }
      })
      .on('mouseleave', function () {
        tooltipOff()
      })
      .transition()
      .duration(200)
      .attr('r', function (d) {
        var pct = data[d.properties['ISO_A2']]
        if (pct) {
          return calculateRadius(pct)
        } else {
          //Data is not present, delete the circle!
          return 0
        }
      })
  }

  d3.json(countriesUrl, drawMap)
}
