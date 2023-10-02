const squares = document.querySelectorAll('.square');
const restartButton = document.querySelector('.restart');
const message = document.querySelector('.message');
        
let colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown'];
let shuffledColors = shuffle(colors.concat(colors));
let selectedSquares = [];
let matchedPairs = 0;

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function() {
      revealColor(i);
            });
        }

restartButton.addEventListener('click', function() {
    location.reload();
        });

function revealColor(index) {
    squares[index].style.backgroundColor = shuffledColors[index];
    selectedSquares.push(index);
        if (selectedSquares.length === 2) {
            setTimeout(checkColors, 500);
            }
        }

function checkColors() {
    const firstIndex = selectedSquares[0];
    const secondIndex = selectedSquares[1];
        if (shuffledColors[firstIndex] === shuffledColors[secondIndex]) {
           squares[firstIndex].style.visibility = 'hidden';
           squares[secondIndex].style.visibility = 'hidden';
           matchedPairs++;
           if (matchedPairs === 8) {
              message.textContent = 'Раунд пройден';
              setTimeout(function() {
              shuffle(squares);
                  for (let i = 0; i < squares.length; i++) {
                       squares[i].style.visibility = 'visible';
                       squares[i].style.backgroundColor = 'gray';
                    }
                        selectedSquares = [];
                        matchedPairs = 0;
                        message.textContent = '';
                    }, 2000);
                }
            } else {
                squares[firstIndex].style.backgroundColor = 'gray';
                squares[secondIndex].style.backgroundColor = 'gray';
            }
            selectedSquares = [];
        }

        function shuffle(array) {
            let currentIndex = array.length, randomIndex;
            while (currentIndex != 0) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
                [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
            }
            return array;
        }