// Set up lightbox for images inside news stories.
// Returns jquery obj of new image that must be preloaded.
function createLightbox($image, caption) {
  var finalCaption = caption || '';

  var expansionType = $image.data('expandable-type');
  var imageUrl = $image.attr('src');

  switch (expansionType) {
    case 'dive_expand_uncropped':
    case 'dive_expand_url':
      if ($image.data('expandable-url')) {
        imageUrl = $image.data('expandable-url');
      }
      break;
    case 'dive_expand_same':
    default:
    // imageUrl already set to the image src attribute
      break;
  }
  var figure = '<figure><img src="' + imageUrl + '" alt="story image">';
  if (finalCaption.length) {
    figure += '<figcaption class="inside_story_caption">' +
            '<div class="caption_text">' + finalCaption + '</div>' +
            '</figcaption>';
  }
  figure += '</figure>';

  var $newImage = $('img', figure);
  // When new_image is loaded, attach an anchor
  // and colorbox to the old image.
  $newImage.one('load', function() {
    $image.wrap('<a class="expandable_link"></a>');

    var $link = $image.parent();
    $link.colorbox({
      html: figure,
      scrolling: false,
      maxWidth: '100%',
      scalePhotos: true,
      imgError: 'Sorry, could not load the image. Try reloading the page.',
    });
  });

  // Now we need to attach the new image in order for it to
  // pre-load, and call load, triggering the colorbox creation.
  $('<div style="display: none;"></div>').append($newImage).appendTo('body');
}

$(document).ready(function() {
  // Find each expandable image and create its lightbox
  $('figure.inside_story').has('img.is_expandable').each(function(index, figure) {
    var $figure = $(figure);
    var $oldImage = $figure.find('img');
    var caption = $figure.find('.caption_text').text();

    createLightbox($oldImage, caption);
  });

  // format the image sources to give credit
  $('figcaption .source_text').each(function() {
    var $sourceDiv = $(this);

    if ($sourceDiv.text().trim().length > 0) {
      // handle if there's html in the div
      var newSourceHtml = $sourceDiv.html().trim();
      $sourceDiv.html(newSourceHtml);

      // handle the optional caption
      if ($sourceDiv.siblings('.caption_text')) {
        var $captionDiv = $($sourceDiv.siblings('.caption_text')[0]);
        var $captionText = $captionDiv.text().trim();
        if ($captionText.length === 0 || $captionText === 'Optional Caption') {
          $captionDiv.hide();
        }
      }
    }
  });
});
