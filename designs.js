// Declaring the long-term variables
const form = $('#sizePicker');
const table = $('#pixelCanvas');

// This is the main function
// It gets executed whenever the submit button is pressed
function makeGrid() {
  // Prevents form sending request
  event.preventDefault();

  // Clear previous canvas
  clearCanvas();

  // Draws the canvas
  drawCanvas();
}

// Removes every child node from the table element
function clearCanvas() {
  table.empty();
}

// Draws a canvas with selected dimensions (width x height) on the page
function drawCanvas() {
  let currentRow;
  for (let heigth = 0; heigth < getHeightOfCanvas(); heigth++) {
    table.append('<tr></tr>');
    currentRow = table.children('tr').last();
    for (let width = 0; width < getWidthOfCanvas(); width++) {
      currentRow.append('<td></td>');
    }
  }
}

// Easily gets the selected canvas height
function getHeightOfCanvas() {
  return $('#inputHeight').val();
}

// Easily gets the selected canvas width
function getWidthOfCanvas() {
  return $('#inputWidth').val();
}

// Easily gets the selected color to paint the squares
function getSelectedColor() {
  return $('#colorPicker').val();
}

// Attach a submit event to start the making of the canvas
form.on('submit', makeGrid);

// Handles the click event in one of the squares
table.on('click', 'td', function (event) {
  // Stops the event bubbling, so that only the clicked square gets painted
  event.stopPropagation();
  $(this).css('background', getSelectedColor());
});
