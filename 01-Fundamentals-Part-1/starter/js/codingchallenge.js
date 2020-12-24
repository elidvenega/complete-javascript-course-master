// marks height and weight
const marksHeight = 1.69;
const marksWeight = 78;
// johns height and weight
const johnsHeight = 1.95;
const johnsWeight = 92;

const marksBmi = marksWeight / (marksHeight * marksHeight);
console.log(marksBmi);

const johnsBmi = johnsWeight / (johnsHeight * johnsHeight);
console.log(johnsBmi);

if(marksBmi > johnsBmi) {
    console.log(true);
} else {
    console.log(false);
}